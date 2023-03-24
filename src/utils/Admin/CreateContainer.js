import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faDollar, faUpload } from '@fortawesome/free-solid-svg-icons';
import { categories } from '../../data/dataProducts';
import { storage } from '../../firebase.config';
import { saveItem } from '../../data/dataProducts';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { makeid } from '../../data/randomID';

import Input from '../../components/Input';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

function CreateContainer() {
    // Set list
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState(true);
    const [imageAsset, setImageAsset] = useState(null);
    const [des, setDes] = useState('');
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState('danger');
    const [msg, setMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    // Upload img
    const uploadImage = (e) => {
        setLoading(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(storage, `ImagesProduct/${Date.now()}-${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
                console.log(error);
                setFields(true);
                setMsg('Error while uploading');
                setAlertStatus('danger');
                setTimeout(() => {
                    setFields(false);
                    setLoading(false);
                }, 4000);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageAsset(downloadURL);
                    setLoading(false);
                    setFields(true);
                    setMsg('Image uploaded successfully');
                    setAlertStatus('Success');
                    setTimeout(() => {
                        setFields(false);
                    }, 4000);
                });
            },
        );
    };

    // delete img
    const deleteImage = () => {
        setLoading(true);
        const deleteRef = ref(storage, imageAsset);
        deleteObject(deleteRef).then(() => {
            setImageAsset(null);
            setLoading(false);
            setFields(true);
            setMsg('Image uploaded successfully');
            setAlertStatus('Success');
            setTimeout(() => {
                setFields(false);
            }, 4000);
        });
    };

    // Save product on Firebase database
    const saveDetails = () => {
        setLoading(true);
        try {
            if (!title || !category || !imageAsset || !price || !des) {
                setFields(true);
                setMsg("Required fields can't be empty");
                setAlertStatus('danger');
                setTimeout(() => {
                    setFields(false);
                    setLoading(false);
                }, 4000);
            } else {
                const data = {
                    id: makeid(8),
                    title: title,
                    imageURL: imageAsset,
                    category: category,
                    des: des,
                    price: price,
                };
                saveItem(data.id, data); // save Product
                setLoading(false);
                setFields(true);
                setMsg('Data Uploaded successfully 😊');
                setAlertStatus('success');
                setTimeout(() => {
                    setFields(false);
                }, 4000);
                clearData();
            }
        } catch (error) {
            setLoading(true);
            setFields(true);
            setMsg('Error while uploading : Try AGain 🙇');
            setAlertStatus('danger');
            setTimeout(() => {
                setFields(false);
                setLoading(false);
            }, 4000);
        }
    };

    const clearData = () => {
        setTitle('');
        setImageAsset(null);
        setPrice('');
        setDes('');
        setCategory(true);
    };
    return (
        // <LayoutMenuOnly>
        <div className="w-full flex gap-4 items-start justify-center bg-regal-white-200 rounded-md">
            <div className="w-[50%] h-full sm:w-[75%] flex flex-col gap-4 border border-gray-200 rounded-md p-4">
                {fields && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`w-full rounded-lg p-2 text-center text-sm ${
                            alertStatus === 'danger' ? 'bg-red-500 text-red-800' : 'bg-green-500 text-green-800'
                        }`}
                    >
                        {msg}
                    </motion.p>
                )}
                <div className="w-full flex gap-2 items-center">
                    <FontAwesomeIcon icon={faBurger} className="text-black text-sm" />
                    <Input
                        required
                        size="sm"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Give me a tittle ..."
                    />
                </div>

                <div className="w-full">
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        className={'w-full outline-none text-sm sm:text-xs p-2 rounded-md cursor-pointer text-black'}
                    >
                        <option value={'other'} className={'text-sm sm:text-xs text-black'}>
                            Select Category
                        </option>
                        {category &&
                            categories.map((item) => (
                                <option
                                    key={item.id}
                                    value={item.urlParamName}
                                    className={'text-sm sm:text-xs text-black'}
                                >
                                    {item.name}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="group flex justify-center items-center flex-col border-2 border-dotted w-full h-[155px] rounded-md cursor-pointer">
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            {!imageAsset ? (
                                <>
                                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                            <FontAwesomeIcon icon={faUpload} className="text-gray-500 text-sm" />
                                            <p className="text-gray-500 text-sm">Click here to upload</p>
                                        </div>
                                        <Input
                                            type="file"
                                            name="uploadimage"
                                            accept="image/*"
                                            className="w-0 h-0"
                                            onChange={uploadImage}
                                        />
                                    </label>
                                </>
                            ) : (
                                <>
                                    <div className="h-full">
                                        <img
                                            src={imageAsset}
                                            alt="upload image"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
                <div className="w-full flex items-center justify-center gap-4">
                    <Button size={'buttonSmall'} style={'buttonDelete'} onClick={deleteImage}>
                        remove
                    </Button>

                    <div className="flex w-full gap-2 items-center justify-center">
                        <FontAwesomeIcon icon={faDollar} className="text-gray-500 text-sm" />
                        <Input
                            required
                            type={'text'}
                            placeholder={'Price'}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            size={'m'}
                        />
                    </div>
                </div>

                <div>
                    <Button size={'buttonMedium'} style={'buttonPrimary'} onClick={saveDetails}>
                        Save
                    </Button>
                </div>
            </div>
            <div className="w-[50%] h-full flex flex-col gap-4 border border-gray-200 rounded-md p-4">
                <h1 className="w-full text-black text-sm">Desception</h1>
                <div className="h-full flex-1">
                    <Input required type="text" value={des} size="lg" onChange={(e) => setDes(e.target.value)}></Input>
                </div>
            </div>
        </div>
        // </LayoutMenuOnly>
    );
}

export default CreateContainer;
