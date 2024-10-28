import getSdk from "@/api";
import TitleCard from "./TitleCard";
import PropertyBriefDetail from "./PropertyBriefDetail";
import RealEstateCard from "./RealEstateCard";
import PaymentPlan from "./PaymentPlan";
import PhotoGallery from "./PhotoGallery";
import TabNavigation from "./TabNavigation";
import SimilarList from "./SimilarList";

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

      {/* Location Section with Tab Navigation */}
      <div className="mb-8">
        <TabNavigation />
      </div>

      {/* Similar Units Section */}
      <div className="mb-8">
        <SimilarList /> {/* Use the SimilarList component here */}
      </div>
    </div>
  );
};

export default PropertyDetail;
