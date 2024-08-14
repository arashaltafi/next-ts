import { numberValidation } from "@/utils/utils";
import { ChangeEvent } from "react";

type PropsType = {
  label: string;
  placeholder?: string;
  type?: "number";
  onChange?: any;
  onChangeListener?: (e: ChangeEvent<HTMLInputElement>) => void;
  option?: Array<string | number>;
  name: string;
  value: string | number;
  maxLength?: number;
  containerClassName?: string;
  errors: Array<string>;
  isDisable?: boolean;
  text?: string
};

const CustomInputText: React.FC<PropsType> = ({
  label,
  placeholder,
  type,
  onChange,
  onChangeListener,
  option,
  name,
  value,
  maxLength,
  containerClassName,
  errors,
  isDisable,
  text,
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeListener && onChangeListener(e)
    if (onChange) {
      if (maxLength !== undefined) {
        if (e.target.value.length > maxLength) {
          return;
        }
      }
      if (type === "number") {
        if (numberValidation(e.target.value) === false) {
          return;
        }
      }
      if (option !== undefined) {
        onChange(e.target.value, option);
      } else {
        onChange(e.target.value);
      }
    }
  };

  return (
    <div
      className={`flex flex-col w-full ${containerClassName !== undefined ? containerClassName : ""
        }`}
    >
      <label
        className="text-gray900 mb-1 font-medium text-[12px]"
        htmlFor={`input-${name}`}
      >
        {label}
      </label>
      {
        text ? (
          <div className={`flex gap-2 items-center justify-between py-2 px-3 border-[0.5px] rounded-lg ${errors.length > 0 ? "border-error600" : "border-gray400"}`}>
            <input
              className='flex-1 text-xs leading-6 font-normal'
              id={`input-${name}`}
              value={value}
              onChange={(e) => onChangeHandler(e)}
              type={type === "number" ? "tel" : ""}
              placeholder={placeholder}
              name={name}
              disabled={isDisable}
            />
            <p className="text-xs leading-6 font-normal text-gray400">{text}</p>
          </div>
        ) : (
          <input
            className={`placeholder:text-gray400 ${isDisable ? 'bg-[#F2F4F7] text-gray400' : 'text-gray900'} font-medium text-[12px] px-3 py-2 rounded-[8px] border-[1px] leading-6 duration-200 text-right focus:border-brand700 ${type === "number" ? "ltr" : ""
              } ${isDisable ? 'border-gray300' : `${errors.length > 0 ? "border-error600" : "border-gray400"}`}`}
            id={`input-${name}`}
            value={value}
            onChange={(e) => onChangeHandler(e)}
            type={type === "number" ? "tel" : ""}
            placeholder={placeholder}
            name={name}
            disabled={isDisable}
          />
        )
      }
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

export default CustomInputText;
