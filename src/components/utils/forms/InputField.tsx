import { anonymous, poppins } from '@/app/layout';
import React from 'react';

interface InputFieldProps {
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  defaultValue,
  placeholder,
  onChange,
}) => {
  // const [inputValue, setInputValue] = useState<string>(defaultValue || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // setInputValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className=''>
      <label
        className={`block text-base ${poppins.className} font-bold mb-2 text-black`}
      >
        <span className='text-pink-500 font-medium text-base'>* </span>
        {defaultValue || 'Reasoning'}
      </label>
      <textarea
        className={`w-full p-4 border ${anonymous.className} border-gray-900  resize-none`}
        rows={4}
        value=''
        // onChange={handleInputChange}
        readOnly={true}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;