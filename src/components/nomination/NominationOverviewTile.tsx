interface NominationOverviewTileProps {
    title: string;
    description: string;
  }
  
  const NominationOverviewTile: React.FC<NominationOverviewTileProps> = ({ title, description }) => {
    return (
      <div className="my-8 border-b border-gray-300 pb-4 flex justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
          <p className="text-lg text-black">{description}</p>
        </div>
        <svg
          className="h-6 w-6 text-gray-500 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 10h16m-7 6h7"
          ></path>
        </svg>
      </div>
    );
  };
  
  export default NominationOverviewTile