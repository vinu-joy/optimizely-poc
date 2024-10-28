import getSdk from "@/api";
import TitleCard from "./TitleCard";
import PropertyBriefDetail from "./PropertyBriefDetail";
import RealEstateCard from "./RealEstateCard";
import PaymentPlan from "./PaymentPlan";
import PhotoGallery from "./PhotoGallery";

// Define the shared PropertyDetailFields type
export interface PropertyDetailFields {
  propertyName?: string | null;
  propertyLocation?: string | null;
  propertyType?: string | null;
  propertyId?: string | null;
  unitType?: string | null;
  bedrooms?: string | null;
  unitSize?: string | null;
  completionDate?: string | null;
  saleType?: string | null;
  description?: string | null;
  price?: string | null;
  amenities?: (string | null)[] | null;
  communityName?: string | null;
  communityTitle?: string | null;
  communityDescription?: string | null;
  communityButtonText?: string | null;
  downPaymentPercentage?: string | null;
  easyInstallmentPercentage?: string | null;
  handoverPercentage?: string | null;
  mainPhoto?: {
    __typename?: string; // Add typename to account for GraphQL response
    url?: {
      __typename?: string; // Add typename here as well
      default?: string | null;
    } | null;
  } | null;
  additionalPhotos?:
    | ({
        __typename?: string; // Add typename here too
        url?: {
          __typename?: string; // Add typename for url field
          default?: string | null;
        } | null;
      } | null)[]
    | null;
}


const PropertyDetail = async ({
  params,
}: {
  params: { propertyId: string };
}) => {
  const { propertyId } = params;

  // Fetch data from Optimizely based on the propertyId
  const sdk = getSdk();
  const data = await sdk.getAllPropertyDetails();

  // Find the specific property detail using propertyId and apply the PropertyDetailFields type
  const propertyDetail: PropertyDetailFields | null =
    data?.HeaderDetail?.items?.find(
      (item) => item?.propertyId === propertyId
    ) || null;

  if (!propertyDetail) {
    return <div>No property details found.</div>;
  }

  // Render the property details
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Property Title and Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
        <TitleCard fields={propertyDetail} />
        {/* Placeholder for image slider or gallery */}
        <div className="w-full">
          {/* Replace this div with an image slider component if needed */}
          <PhotoGallery fields={propertyDetail} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Property Brief Detail */}
        <div className="md:col-span-2">
          <PropertyBriefDetail fields={propertyDetail} />
        </div>

        {/* Real Estate Card */}
        <div>
          {propertyDetail.communityName ? (
            <RealEstateCard fields={propertyDetail} />
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Payment Plan Section */}
      <div className="mb-8">
        <PaymentPlan fields={propertyDetail} />
      </div>

      {/* Location Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Location</h3>
        <div className="w-full">
          {/* Replace this with a Google Maps component */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537363156606!3d-37.81720997975162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778c2b2b2760e2!2sVictoria%20Harbour%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1632751180030!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Similar Units Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Similar Units</h3>
        {/* Replace this with a similar units component */}
        <div className="flex space-x-4">
          <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
            <h5>Unit 1</h5>
            <p>Details about Unit 1</p>
          </div>
          <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
            <h5>Unit 2</h5>
            <p>Details about Unit 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
