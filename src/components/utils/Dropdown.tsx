import { anonymous, poppins } from '@/app/layout';

export interface DropdownProps {
  title: string;
  options: { label: string; value: string }[];
  onChange: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, options, onChange }) => {
  // const [selectedOption, setSelectedOption] = useState<string>('Select Option');

  return (
    <div className='w-72'>
      <label
        className={`block font-bold text-base mb-1.5 text-black tracking-wide ${poppins.className}`}
      >
        <span className='text-pink-500 font-medium text-base'>* </span>
        {title}
      </label>

      <div className=' relative'>
        <select
          className={`w-[400px] px-3 py-2.5 bg-white border appearance-none border-gray-300 text-gray-500 text-sm ${anonymous.className}`}
        >
          <option disabled>Select Option</option>
          {options.map((data) => (
            <option key={data.label} value={data.value}>
              {data.label}
            </option>
          ))}
        </select>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-6 h-5 text-pink-500 absolute pointer-events-none top-2.5 left-[23rem]'
        >
          <path
            fillRule='evenodd'
            d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;