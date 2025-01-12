// import Container from "@/app/_components/container";
// import { HeroPost } from "@/app/_components/hero-post";
// import { Intro } from "@/app/_components/intro";
// import { MoreStories } from "@/app/_components/more-stories";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";

const images = [
  "/assets/images/wedding-couple/image-1.jpg",
  "/assets/images/wedding-couple/image-2.jpg",
  "/assets/images/wedding-couple/image-3.jpg",
  "/assets/images/wedding-couple/image-4.jpg",
  "/assets/images/wedding-couple/image-5.jpg",
];

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <>
      {/* <main className="mx-auto max-w-[90%] bg-white rounded-2xl drop-shadow-2xl py-12 bg-opacity-60"> */}
      <div className="flex flex-col items-center font-beyond hero-text center text-dm-grey justify-items-center">
        <div className="relative center inline-block">
          <h1>Dave</h1>
          <h1>&</h1>
          <h1>Michela</h1>
        </div>
        <img className="mt-8 max-w-16" src="/assets/images/island.svg" />
        <p className="font-noto text-center mt-14">
          Invite you to celebrate their wedding in Sardinia
        </p>
        <p className="mt-4 font-noto text-center">
          on Saturday 19<sup>th</sup> April 2025
        </p>
      </div>

      <p className="mt-4 font-noto text-center">
        The Schedule for the day can be found{" "}
        <Link
          className="text-dm-peach underline-offset-8 hover:underline"
          as={`/schedule`}
          href="/schedule"
          aria-label="ceremony schedule"
        >
          here
        </Link>
      </p>

      <div className="mx-10 mt-20">
        <p>The story so far...</p>
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

          {/* <div
            className={`flex-none overflow-hidden border-2 border-gray rounded-xl`}
          >
            <div>
              <h2>More memories to come</h2>
            </div>
          </div> */}
        </div>
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
