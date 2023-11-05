import { anonymous, poppins } from '@/app/layout';

interface NominationOverviewTileProps {
  title: string;
  description: string;
}

const NominationOverviewTile: React.FC<NominationOverviewTileProps> = ({
  title,
  description,
}) => {
  return (
    <div className='my-2 mx-10  bg-gray-100 p-4 flex justify-between'>
      <div>
        <h2
          className={`text-base font-bold mb-2 tracking-wide ${poppins.className} text-black`}
        >
          {title}
        </h2>
        <p className={`text-base text-slate-600 ${anonymous.className}`}>
          {description}
        </p>
      </div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-10 h-4  text-black cursor-pointer'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
          />
        </svg>
      </div>
    </div>
  );
};

export default NominationOverviewTile;