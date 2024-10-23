import getSdk from "@/api"; // Ensure this fetch logic runs in a server-side component

// This function receives the params as an argument in the context
export const PropertyDetail = async ({ params }: { params: { propertyId: string } }) => {
  const { propertyId } = params;  // Get the dynamic route parameter from the server

  // Fetch data from Optimizely based on the propertyId
  const sdk = getSdk();
  const { data } = await sdk.getAldarPropertyDetail({ propertyId });

  const headerData = data?.PropertyDetail?.items[0];

  if (!headerData) {
    return <div>No property details found.</div>; // Handle fallback UI
  }

  // Example: Display fetched property details
  return (
    <div>
      <h1>{headerData.propertyName}</h1>
      <p>Location: {headerData.propertyLocation}</p>
      {/* Add more details as necessary */}
    </div>
  );
};

export default PropertyDetail;
