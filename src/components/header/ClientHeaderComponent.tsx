"use client"; // This tells Next.js that this is a Client Component

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Client-side hook
import { FC } from "react";

// Define types for the props
interface HeaderLogo {
  url: {
    default: string;
  };
}

interface HeaderItem {
  title: string;
  url: {
    base: string;
    default: string;
  };
}

// Define props type for the ClientHeaderComponent
interface ClientHeaderComponentProps {
  headerLogo: HeaderLogo;
  headerItems: HeaderItem[];
}

const ClientHeaderComponent: FC<ClientHeaderComponentProps> = ({
  headerLogo,
  headerItems,
}) => {
  const currentPath = usePathname();

  return (
    <header className="bg-black text-white flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image
            src={headerLogo?.url?.default}
            width={45}
            height={45}
            alt="Aldar Logo"
            className="mr-[25px]"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6">
        {headerItems.map((item, index) => {
          const isActive = currentPath === item.url.default.replace(/\/+$/, "");

          return (
            <Link
              key={index}
              href={item.url.default}
              className="hover:text-orange-500 relative"
            >
              {item.title}
              {isActive && (
                <div className="absolute w-full h-[2px] bg-orange-500 left-0 bottom-[-4px]" />
              )}
            </Link>
          );
        })}
         {/* Contact Button */}
      <div>
        <Link
          href="/contact"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884l6.112 3.55a1 1 0 00.97 0l6.112-3.55A2 2 0 0013.112 3H6.888a2 2 0 00-1.885 2.884z" />
            <path d="M18 8.118l-6 3.462a2 2 0 01-1.942 0L4 8.118V14a2 2 0 002 2h8a2 2 0 002-2V8.118z" />
          </svg>
          <span>Contact</span>
        </Link>
      </div>
      </nav>

     
    </header>
  );
};

export default ClientHeaderComponent;
