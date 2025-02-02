import Image from "next/image";

export const timelineImages = [
  {
    src: "/assets/images/wedding-couple/image-1.jpg",
    srcMobile: "/assets/images/wedding-couple/image-1_mobile.jpg",
    meta: { date: "2016", alt: "" },
  },
  {
    src: "/assets/images/wedding-couple/image-2.jpg",
    srcMobile: "/assets/images/wedding-couple/image-2_mobile.jpg",
    meta: { date: "2016", alt: "" },
  },
  {
    src: "/assets/images/wedding-couple/image-3.jpg",
    srcMobile: "/assets/images/wedding-couple/image-3_mobile.jpg",
    meta: { date: "2017", alt: "" },
  },
  {
    src: "/assets/images/wedding-couple/image-4.jpg",
    srcMobile: "/assets/images/wedding-couple/image-4_mobile.jpg",
    meta: { date: "2022", alt: "" },
  },
  {
    src: "/assets/images/wedding-couple/image-5.jpg",
    srcMobile: "/assets/images/wedding-couple/image-5_mobile.jpg",
    meta: { date: "2024", alt: "" },
  },
];

const orderedImages = [
  timelineImages[0],
  timelineImages[4],
  timelineImages[1],
  timelineImages[2],
  timelineImages[3],
];

export const MasonryGrid = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      {/* First Row */}
      <div className="flex gap-4 w-full justify-center">
        <div className="flex-1 max-w-xs content-end mb-20">
          <div className="relative hover:scale-105 transition-transform rounded-lg shadow-lg overflow-hidden">
            <Image
              src={orderedImages[0].src}
              alt={orderedImages[0].meta.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute bottom-0 right-0 px-2 bg-dm-peach text-white">
              <p>{orderedImages[0].meta.date}</p>
            </div>
          </div>
        </div>
        <div className="flex-[2] max-w-md">
          <div className="relative hover:scale-105 transition-transform rounded-3xl shadow-lg overflow-hidden">
            <Image
              src={orderedImages[1].src}
              alt={orderedImages[1].meta.alt}
              width={600}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute bottom-0 right-0 pl-2 pr-4 bg-dm-peach text-white">
              <p>{orderedImages[1].meta.date}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-xs content-end mb-10">
          <div className="relative hover:scale-105 transition-transform rounded-lg shadow-lg overflow-hidden">
            <Image
              src={orderedImages[2].src}
              alt={orderedImages[2].meta.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute bottom-0 right-0 px-2 bg-dm-peach text-white">
              <p>{orderedImages[2].meta.date}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="flex gap-8 w-[75%] justify-center">
        <div className="flex-1 max-w-xs">
          <div className="relative hover:scale-105 transition-transform rounded-3xl shadow-lg overflow-hidden">
            <Image
              src={orderedImages[3].src}
              alt={orderedImages[3].meta.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute bottom-0 right-0 pl-2 pr-4 bg-dm-peach text-white">
              <p>{orderedImages[3].meta.date}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-xs">
          <div className="relative hover:scale-105 transition-transform rounded-3xl shadow-lg overflow-hidden">
            <Image
              src={orderedImages[4].src}
              alt={orderedImages[4].meta.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute bottom-0 right-0 pl-2 pr-4 bg-dm-peach text-white">
              <p>{orderedImages[4].meta.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
