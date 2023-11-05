import { anonymous } from '@/app/layout';

interface FairnessSliderProps {
  onRatingSelect?: (rating: string) => void;
  emojis: { [key: string]: string }; // Dictionary with fairness levels as keys and image paths as values
}

const ratings = ['Very Unfair', 'Unfair', 'Not Sure', 'Fair', 'Very Fair'];
let selectedRating: string = ratings[0];

const FairnessSlider: React.FC<FairnessSliderProps> = ({
  onRatingSelect,
  emojis,
}) => {
  // const [selectedRating, setSelectedRating] = useState<string>('Not Sure');

  const handleRatingClick = (rating: string) => {
    // setSelectedRating(rating);
    if (onRatingSelect) {
      onRatingSelect(rating);
    }
  };

  return (
    <div className='flex flex-col items-center px-5 pt-5'>
      <div className='relative w-full h-2 bg-gray-300 rounded'>
        <div
          className='absolute left-0 top-0 h-2 rounded'
          style={{
            width: `${ratings.indexOf(selectedRating) * 25}%`,
            backgroundColor: '#FF5E5E',
          }}
        ></div>
      </div>
      <div className='flex justify-between p-5 items-center w-full mt-4'>
        {ratings.map((rating) => (
          <div
            key={rating}
            className='text-center justify-center items-center cursor-pointer'

            // onClick={() => handleRatingClick(rating)}
          >
            <div
              className={`bg-gray-300 mb-2 h-8 w-8 ${
                selectedRating === rating ? 'border-2 border-pink-500' : ''
              } justify-center items-center`}
            >
              <img
                src={emojis[rating]}
                alt={rating}
                className={`w-5 h-5 justify-center items-center`}
              />
            </div>
            <span
              className={`flex text-sm text-gray-400 justify-start items-center text-center ${anonymous.className}`}
            >
              {rating}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FairnessSlider;