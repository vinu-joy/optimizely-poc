import Link from "next/link";
import getSdk from "@/api";

// Define types for the fetched data structure
interface FooterLink {
  title?: string | null;
  text?: string | null;
  url?: {
    default?: string | null;
  } | null;
}

interface FooterSection {
  SectionTitle?: string | null;
  SectionLinks?: (FooterLink | null)[] | null;
}

interface FooterAldarBlock {
  FooterSection: (FooterSection | null)[];
}

const Footer: React.FC = async () => {
  // Fetch the data from Optimizely
  const sdk = getSdk();
  const data = await sdk.getAldarFooter();

  // Ensure the fetched data is in the expected structure
  const footerData = data?.FooterAldarBlock?.items?.[0]?.FooterSection;


  // If no data is fetched, return null or a fallback UI
  if (!footerData) {
    return null; // Or you can return a loading spinner
  }

  return (
      <footer className=" mx-auto p-5 bg-black text-white py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerData
            .filter((section): section is FooterSection => section !== null) // Filter out null sections
            .map((section, index) => (
              <div key={index} className="footer-section">
                <h4 className="text-lg font-bold mb-4">{section.SectionTitle}</h4>
                <ul>
                  {section.SectionLinks
                    ?.filter((link): link is FooterLink => link !== null) // Filter out null links
                    .map((link, linkIndex) => (
                      <li key={linkIndex} className="mb-2">
                        <Link href={link.url?.default ?? "#"} className="hover:underline">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </footer>
  );
};

export default Footer;
