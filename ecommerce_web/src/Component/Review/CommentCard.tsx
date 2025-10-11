// CommentCard.tsx
import React from 'react';
import StarRating from '../Star/StarRating';

interface CommentCardProps {
  name: string;
  rating: number; // 0 to 5, compatible with StarRating
  comment: string;
  verified?: boolean; // Optional prop for verified badge
}

const CommentCard: React.FC<CommentCardProps> = ({ name, rating, comment, verified = false }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <StarRating rating={rating} total={5} showNumber={false} />
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-lg font-semibold text-gray-900">{name}</span>
          {verified && (
            <span className="ml-2 text-green-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
      <p className="text-gray-700 text-sm">{comment}</p>
    </div>
  );
};

export default CommentCard;