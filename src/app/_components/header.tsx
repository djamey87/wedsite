import Link from "next/link";

const Header = () => {
  return (
    <nav>
      {/* <img src="/assets/images/monogram.svg" width={50} /> */}
      <img src="./assets/images/heart-icon.svg" width={30} />
    </nav>
  );
  // return (
  //   <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
  //     <Link href="/" className="hover:underline">
  //       Blog
  //     </Link>
  //     .
  //   </h2>
  // );
};

export default Header;
