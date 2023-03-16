import Select from 'react-select';

const customStyles = {
    control: (base) => ({
        ...base,
        fontSize: '14px',
        fontWeight: 'thin',
        borderRadius: '4px',
        padding: '3px',
        border: '1px solid #EBCCA8',
        boxShadow: 'none',
        '&:focus': {
            border: '0',
        },
    }),
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: 'gray',
            fontStyle: 'italic',
        };
    },
};

export const SelectField = ({ value, onChange, options, label, error, onBlur, id, name, touched }) => {
    return (
        <div className="w-full">
            <Select
                isClearable="true"
                label={label}
                value={value}
                options={options}
                onChange={onChange}
                id={id}
                styles={customStyles}
                name={name}
                onBlur={onBlur}
            />
        </div>
    );
};
