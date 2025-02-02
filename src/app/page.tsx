import Link from "next/link";

import { getAllPosts } from "@/lib/api";
import { MasonryGrid } from "@/app/_components/masonry-grid";

const images = [
  "/assets/images/wedding-couple/image-1_mobile.jpg",
  "/assets/images/wedding-couple/image-2_mobile.jpg",
  "/assets/images/wedding-couple/image-3_mobile.jpg",
  "/assets/images/wedding-couple/image-4_mobile.jpg",
  "/assets/images/wedding-couple/image-5_mobile.jpg",
];

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <>
      <div className="flex flex-col items-center hero-text text-white justify-items-center bg-[url('/assets/images/headers/header-image_home.jpg')] md:rounded-xl overflow-hidden bg-center pt-8 pb-12 bg-cover">
        <div className="relative center inline-block">
          <h1>Dave</h1>
          <h1>&</h1>
          <h1>Michela</h1>
        </div>
        <img
          color="white"
          className="mt-8 max-w-16 z-10 text-white"
          src="/assets/images/island.svg"
        />
      </div>

      <p className="font-noto text-center mt-14">
        We invite you to celebrate our wedding in Sardinia
      </p>
      <p className="mt-4 font-noto text-center">
        on Saturday 19<sup>th</sup> April 2025
      </p>

      <p className="mt-12 font-noto text-center">
        The Schedule for the day can be found{" "}
        <Link
          className="text-dm-peach underline-offset-8 hover:underline"
          as={`/schedule`}
          href="/schedule"
          aria-label="ceremony schedule"
        >
          here
        </Link>
        ,
      </p>
      <p className="font-noto text-center">
        Venue details are{" "}
        <Link
          className="text-dm-peach underline-offset-8 hover:underline"
          as={`/venue`}
          href="/venue"
          aria-label="venue details"
        >
          here
        </Link>
        ,
      </p>
      <p className="font-noto text-center">
        and details of the area can be found{" "}
        <Link
          className="text-dm-peach underline-offset-8 hover:underline"
          as={`/area-details`}
          href="/area-details"
          aria-label="area information"
        >
          here
        </Link>
        .
      </p>

      <div className="mx-4 mt-20 md:hidden">
        <div className="simple-image-carousel mt-4">
          {images.map((imageUrl, index) => (
            <div
              key={imageUrl}
              className={`flex-none overflow-hidden rounded-xl ${
                index !== images.length - 1 && "mr-8"
              }`}
            >
              <img src={imageUrl} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 visible hidden md:block">
        <MasonryGrid />
      </div>

      {/* <Container>
        <Intro />
        <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container> */}
      {/* </main> */}
    </>
  );
}
