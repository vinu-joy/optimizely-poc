import getSdk from "@/api"; // Ensure this fetch logic runs in a server-side component
import ClientHeaderComponent from "./ClientHeaderComponent";

export const SiteHeader = async () => {
  // All server-side logic, like fetching from Optimizely, should be in this component
  const sdk = getSdk();
  const data = await sdk.getAldarHeader();

  const headerData = data?.NavigationBlock?.items?.[0];

  if (!headerData) {
    return null; // or a fallback UI
  }

  const { headerLogo, headerItems } = headerData as {
    headerLogo: { url: { default: string } };
    headerItems: { title: string; url: { base: string; default: string } }[];
  };
  console.log("headerData", headerData);

  // Pass data as props to a Client Component, if needed
  return (
    <ClientHeaderComponent headerLogo={headerLogo} headerItems={headerItems} />
  );
};

export default SiteHeader;
