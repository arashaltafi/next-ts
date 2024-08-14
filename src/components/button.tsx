import Image from "next/image";

type PropsType = {
  text?: string;
  width?: string;
  color: "primary" | "secondary" | "tertiary" | "textbutton" | "iconbutton" | "red" | "blue";
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  containerClassName?: string;
  iconPosition?: "right" | "left" | "center";
  iconAddress?: string;
  isDisable?: boolean;
  onClick?: () => void;
};

const CustomBtn: React.FC<PropsType> = ({
  text,
  width,
  color,
  type = "button",
  loading = false,
  containerClassName,
  iconPosition,
  iconAddress,
  isDisable,
  onClick
}) => {
  let newClass = "";
  if (color === "secondary") {
    newClass =
      "text-sky-600 border-[1.25px] bg-white hover:bg-sky-50 px-4 py-2";
  } else if (color === "primary") {
    newClass =
      "text-white border-[1.25px] bg-sky-600 hover:bg-sky-700 px-4 py-2";
  } else if (color === "textbutton") {
    newClass = "text-sky-600 hover:text-sky-700 border-[0px] px-1";
  } else if (color === "red") {
    newClass = "bg-red-600 hover:bg-red-700 text-white border-[0px] px-1";
  } else if (color === "blue") {
    newClass = "bg-sky-50 hover:bg-sky-100 text-brand600 border-[0px] px-4";
  }

  if (color === "iconbutton" && iconAddress !== undefined) {
    return (
      <button
        className={`min-w-6 min-h-6 rounded-[8px] duration-200 hover:bg-gray-50 ${loading ? "opacity-40 cursor-default" : ""
          } ${containerClassName !== undefined ? containerClassName : ""}`}
        type={loading ? "button" : type}
      >
        <Image width={24} height={24} alt="icon" src={iconAddress} />
      </button>
    );
  }

  return (
    <button
      type={loading ? "button" : type}
      className={`custom-btn-container rounded-[8px] duration-200 gap-1 h-10 text-xs font-semibold flex justify-center items-center ${newClass} ${loading ? "opacity-40 cursor-default" : ""
        } ${containerClassName !== undefined ? containerClassName : ""} disabled:opacity-40`}
      style={{ width: width }}
      onClick={onClick}
      disabled={isDisable}
    >
      {loading ? (
        <Image
          src={'/loading.svg'}
          width={16}
          height={16}
          alt="loading"
          className="loading-svg"
        />
      ) : (
        <>
          {iconPosition === "right" && iconAddress !== undefined ? (
            <Image src={iconAddress} width={16} height={16} alt="" />
          ) : null}
          {iconPosition === "center" && iconAddress !== undefined ? (
            <Image src={iconAddress} width={16} height={16} alt="" />
          ) : null}
          {text}
          {iconPosition === "left" && iconAddress !== undefined ? (
            <Image src={iconAddress} width={16} height={16} alt="" />
          ) : null}
        </>
      )}
    </button>
  );
};

export default CustomBtn;
