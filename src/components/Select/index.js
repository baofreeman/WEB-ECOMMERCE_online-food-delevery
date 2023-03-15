import Select from 'react-select';
export const SelectField = ({ value, onChange, options, label, error, onBlur, id, name, touched }) => {
    return (
        <div className="w-full">
            <Select
                isClearable="true"
                value={value}
                options={options}
                onChange={onChange}
                id={id}
                name={name}
                onBlur={onBlur}
            />
        </div>
    );
};
