import { ChangeEvent, useState } from "react";

type PropsType = {
  label: string;
  onChange: any;
  option?: Array<string | number>;
  name: string;
  value: string | number;
  containerClassName?: string;
  errors: Array<string>;
  Values: Array<string>;
};

const CustomInputSelect: React.FC<PropsType> = ({
  label,
  onChange,
  option,
  name,
  value,
  containerClassName,
  errors,
  Values,
}) => {
  const [selectedTextColor, setSelectedTextColor] = useState<string>('#667085');

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedTextColor((selectedValue === 'روز' || selectedValue === 'ماه') ? '#667085' : '#101828');

    if (option !== undefined) {
      onChange(selectedValue, option);
    } else {
      onChange(selectedValue);
    }
  };

  return (
    <div
      className={`
        flex flex-col w-full ${containerClassName !== undefined ? containerClassName : ""}
      `}
    >
      <label
        className="text-gray900 mb-1 font-medium text-[12px]"
        htmlFor={`input-${name}`}
      >
        {label}
      </label>
      <select
        name={name}
        onChange={(e) => onChangeHandler(e)}
        value={value}
        id={`input-${name}`}
        className={`
          text-gray900 font-medium h-[42px] text-[12px] px-3 py-2 rounded-[8px] border-[1px] leading-6 duration-200 text-right focus:border-brand700  ${errors.length > 0 ? "border-error600" : "border-gray400"}
        `}
        style={{ color: selectedTextColor }}
      >
        {Values.map((item, key) => (
          <option key={key} className="leading-6"
            style={{
              color: (item === 'ماه' || item === 'روز') ? '#667085' : '#101828'
            }}>
            {item}
          </option>
        ))}
      </select>
      {errors.map((item, key) => (
        <p
          key={key}
          className="mt-[2px] text-error600 font-normal text-xs leading-6"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default CustomInputSelect;
