// import Container from "@/app/_components/container";
// import { HeroPost } from "@/app/_components/hero-post";
// import { Intro } from "@/app/_components/intro";
// import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

const images = [
  "/assets/images/wedding-couple/image-1.jpg",
  "/assets/images/wedding-couple/image-2.jpg",
  "/assets/images/wedding-couple/image-3.jpg",
  "/assets/images/wedding-couple/image-4.jpg",
  "/assets/images/wedding-couple/image-5.jpg"
];

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <>
    {/* <main className="mx-auto max-w-[90%] bg-white rounded-2xl drop-shadow-2xl py-12 bg-opacity-60"> */}
      <div className="font-beyond hero-text center text-dm-grey justify-items-center">
        <div className="relative center inline-block">
          <h1>Dave</h1>
          <h1>&</h1>
          <h1>Michela</h1>
        </div>
        <p className="font-noto text-center mt-16">
          Invite you to celebrate their wedding in Sardinia
        </p>
        <p className="mt-8 font-noto text-center">19/04/2025</p>
        <img className="mt-8" src="/assets/images/island.svg" />
      </div>

      <div className="mx-10 mt-16">
        <div className="simple-image-carousel">
          {images.map((imageUrl, index) => (
            <div key={imageUrl} className={`flex-none overflow-hidden rounded-xl ${index !== images.length-1 && 'mr-8'}`}>
              <img src={imageUrl} />
            </div>
          ))}
          {/* <div className="flex-none overflow-hidden rounded-xl">
            <img src="/assets/images/wedding-couple/image-2.jpg" />
          </div>
          <div className="flex-none overflow-hidden rounded-xl">
            <img src="/assets/images/wedding-couple/image-3.jpg" />
          </div>
          <div className="flex-none overflow-hidden rounded-xl">
            <img src="/assets/images/wedding-couple/image-4.jpg" />
          </div>
          <div className="flex-none overflow-hidden rounded-xl">
            <img src="/assets/images/wedding-couple/image-5.jpg" />
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
