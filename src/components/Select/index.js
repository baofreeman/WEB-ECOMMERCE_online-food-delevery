function Select({ label, options, value, setValue, type }) {
    return (
        <div className="w-full bg-transparent border border-regal-yellow-500 text-gray-900 text-sm rounded focus:outline-none focus:border-regal-yellow focus:ring-1 focus:ring-regal-yellow block p-2.5 placeholder:italic placeholder:text-sm placeholder:text-slate-400'">
            <label htmlFor="select-address"></label>
            <select
                id="select-address"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={'w-full transition block ease-in-out min-w-max'}
            >
                <option value={''}>{`${label}`}</option>
                {options?.map((item) => {
                    return (
                        <option
                            key={type === 'province' ? item?.province_id : item?.district_id}
                            value={type === 'province' ? item?.province_id : item?.district_id}
                            className="text-sm "
                        >
                            {type === 'province' ? item?.province_name : item?.district_name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default Select;
