import React, { useState } from 'react';

interface InputFieldProps {
    defaultValue?: string;
    onChange?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ defaultValue, onChange }) => {
    const [inputValue, setInputValue] = useState<string>(defaultValue || '');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className="p-5">
            <label className="block text-xl font-bold mb-2">
                Reasoning
            </label>
            <textarea
                className="w-full p-4 border border-gray-300 rounded-md resize-none"
                rows={4}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter your reasoning here..."
            />
        </div>
    );
}

export default InputField;
