import React, { useState } from 'react';

interface DropdownProps {
    label: string;
    options: string[];
    onChange: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState<string>('Select Option');

    return (
        <div className="w-72 m-5">
            <label className="block font-bold mb-2">
                {label}
            </label>
            <select 
                className="w-full px-4 py-2 text-base border border-gray-300 rounded-md 
                           appearance-none cursor-pointer"
                value={selectedOption}
                onChange={e => {
                    setSelectedOption(e.target.value);
                    onChange(e.target.value);
                }}
            >
                <option disabled>Select Option</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
