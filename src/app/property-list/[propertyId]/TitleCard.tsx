import { FC } from 'react';
import { PropertyDetailFields } from './page';

interface TitleCardProps {
  fields: PropertyDetailFields;
}

const TitleCard: FC<TitleCardProps> = ({ fields }) => {
  const { propertyName, propertyLocation, propertyType } = fields;

  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-5">
        <div className="flex flex-col">
          {/* Property Name and Tags */}
          <div className="flex items-center">
            <h1 className="text-4xl font-bold mr-2">
              {propertyName || 'No Name'} {/* Handle null/undefined */}
            </h1>
            <div className="mr-4">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
                {propertyType || 'No Type'} {/* Handle null/undefined */}
              </span>
            </div>
          </div>
          {/* Location */}
          <div className="text-sm text-gray-600 mt-1">
            {propertyLocation || 'No Location'} {/* Handle null/undefined */}
          </div>
        </div>

        <div className="flex items-center">
          <button className="border border-gray-300 text-gray-800 px-5 py-1 rounded-full text-xs font-bold hover:bg-gray-100 hover:text-black transition-colors">
            <i className="fas fa-share-alt"></i> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
