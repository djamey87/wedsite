"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links: { path: string; label: string }[] = [
  { path: "/venue", label: "Venue" },
  // { path: "/travel", label: "Travel & Acommodation" },
  { path: "/schedule", label: "Schedule" },
  { path: "/area-details", label: "Area & Activities" },
  // { path: "/blog", label: "Feed" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY >= 5) {
        setIsTopOfPage(false);
      } else {
        setIsTopOfPage(true);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);

    checkScrollPosition();

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 transition ${
        !isTopOfPage ? "bg-white drop-shadow" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-dm-grey hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dm-grey"
              aria-controls="mobile-menu"
              aria-expanded={!!isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <img
                  src="./assets/images/heart-icon.svg"
                  width={30}
                  alt="Dave & Michela"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {links.map(({ path, label }, index) => {
                  return (
                    <Link
                      href={path}
                      className={`border-transparent ${
                        path === pathname
                          ? "border-b-dm-grey font-bold"
                          : "hover:border-b-dm-grey"
                      } py-2 text-sm text-nowrap text-dm-grey border-2`}
                      aria-current={path === pathname ? "page" : undefined}
                      key={path + index}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          {/* NOTE: notification button - to be replaced by RSVP */}
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} relative sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {links.map(({ path, label }, index) => {
            return (
              <div className="block px-3 py-2" key={path + index}>
                <Link
                  href={path}
                  className={`border-transparent ${
                    path === pathname
                      ? "border-b-dm-grey font-bold"
                      : "hover:border-b-dm-grey"
                  } inline-block text-base text-dm-grey border-solid border-2`}
                  aria-current={path === pathname ? "page" : undefined}
                >
                  {label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
