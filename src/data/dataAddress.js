import axios from 'axios';

// API Provinces
export const apiGetPublicProvinces = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: 'https://vapi.vnappmob.com/api/province/',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

// API Districts
export const apiGetPublicDisTrict = (provinceId) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
