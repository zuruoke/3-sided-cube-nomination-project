import React, { useState } from 'react';

interface FairnessSliderProps {
    onRatingSelect?: (rating: string) => void;
    emojis: { [key: string]: string };  // Dictionary with fairness levels as keys and image paths as values
}

const ratings = ['Very Unfair', 'Unfair', 'Not Sure', 'Fair', 'Very Fair'];

const FairnessSlider: React.FC<FairnessSliderProps> = ({ onRatingSelect, emojis }) => {
    const [selectedRating, setSelectedRating] = useState<string>('Not Sure');

    const handleRatingClick = (rating: string) => {
        setSelectedRating(rating);
        if (onRatingSelect) {
            onRatingSelect(rating);
        }
    };

    return (
        <div className="flex items-center p-5">
            <div className="relative w-full h-2 bg-gray-200 rounded">
                <div className="absolute left-0 top-0 h-2 rounded" style={{ width: `${ratings.indexOf(selectedRating) * 25}%`, backgroundColor: '#FF5E5E' }}></div>
            </div>
            <div className="flex justify-between w-full mt-4">
                {ratings.map(rating => (
                    <div key={rating} className="text-center cursor-pointer" onClick={() => handleRatingClick(rating)}>
                        <img src={emojis[rating]} alt={rating} className={`w-12 h-12 mb-2 ${selectedRating === rating ? 'border-2 border-pink-500' : ''}`} />
                        <span className="block text-sm">{rating}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FairnessSlider;
