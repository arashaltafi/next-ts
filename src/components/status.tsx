import Image from "next/image";

type PropsType = {
  text: string;
  size: "medium" | "small";
  color: "blue" | "red" | "yellow" | "green" | "gray";
  width?: string;
  containerClassName?: string;
  icon?: string
  iconClass?: string
};

const CustomStatus: React.FC<PropsType> = ({
  text,
  size,
  color,
  width,
  containerClassName,
  icon,
  iconClass
}) => {
  let newClass1 = "";
  let newClass2 = "";
  if (color === "blue") {
    newClass1 = "text-brand600 bg-[#EFF8FF]";
    newClass2 = "bg-[#1570EF]";
  } else if (color === "red") {
    newClass1 = "text-error600 bg-[#FEF3F2]";
    newClass2 = "bg-[#D92D20]";
  } else if (color === "yellow") {
    newClass1 = "text-warning600 bg-[#FFFAEB]";
    newClass2 = "bg-[#DC6803]";
  } else if (color === "green") {
    newClass1 = "text-success600 bg-[#ECFDF3]";
    newClass2 = "bg-[#039855]";
  } else if (color === "gray") {
    newClass1 = "text-gray600 bg-[#F9FAFB]";
    newClass2 = "bg-[#475467]";
  }
  return (
    <div
      className={`gap-[6px] flex items-center rounded-[16px]  py-1 ${size === "medium" ? "px-4" : size === "small" ? "px-3" : ""
        } ${newClass1} ${containerClassName !== undefined ? containerClassName : ""
        }`}
      style={{ width: width !== undefined ? width : "" }}
    >
      {
        icon ? (
          <Image
            src={icon}
            alt="icon"
            width={12}
            height={12}
            className={iconClass}
          />
        ) : (
          <div className={`w-[6px] h-[6px] rounded ${newClass2}`} />
        )
      }
      <p className="leading-6 text-xs font-medium">{text}</p>
    </div>
  );
};

export default CustomStatus;
