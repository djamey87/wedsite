import Image from "next/image";

const images = [
  { src: "/assets/images/wedding-couple/image-1.jpg", alt: "" },
  { src: "/assets/images/wedding-couple/image-5.jpg", alt: "" },
  { src: "/assets/images/wedding-couple/image-2.jpg", alt: "" },
  { src: "/assets/images/wedding-couple/image-3.jpg", alt: "" },
  { src: "/assets/images/wedding-couple/image-4.jpg", alt: "" },
];

export const MasonryGrid = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      {/* First Row */}
      <div className="flex gap-4 w-full justify-center">
        <div className="flex-1 max-w-xs content-end mb-20">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            priority
          />
        </div>
        <div className="flex-[2] max-w-md">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            width={600}
            height={300}
            className="w-full h-auto object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform"
            priority
          />
        </div>
        <div className="flex-1 max-w-xs content-end mb-10">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            priority
          />
        </div>
      </div>
      {/* Second Row */}
      <div className="flex gap-8 w-[75%] justify-center">
        <div className="flex-1 max-w-xs">
          <Image
            src={images[3].src}
            alt={images[3].alt}
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform"
            priority
          />
        </div>
        <div className="flex-1 max-w-xs">
          <Image
            src={images[4].src}
            alt={images[4].alt}
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform"
            priority
          />
        </div>
      </div>
    </div>
  );
};
