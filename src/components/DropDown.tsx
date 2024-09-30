import { useState } from 'react';

interface DropdownProps {
    title?: string;
    className?: string;
    options: string[];
    onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        props.onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`inline-flex justify-between w-56 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ${props.className}`}
                >
                    {selectedOption ? selectedOption : props.title || 'Select an option'}
                    <svg
                        className={`w-5 h-5 ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-56 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <ul className="py-1 text-sm text-gray-700">
                        {props.options.map((option, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleSelect(option)}
                                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;