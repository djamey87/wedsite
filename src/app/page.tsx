import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <div className="font-beyond hero-text center text-dm-grey justify-items-center">
        <div className="relative center inline-block">
          <h1>Dave</h1>
          <h1>&</h1>
          <h1>Michela</h1>
        </div>
        <p className="font-noto text-center mt-16">
          Invite you to celebrate their wedding in Sardinia
        </p>
        <img className="mt-16" src="/assets/images/island.svg" />
        <p className="mt-16 font-noto text-center">19/04/2025</p>
      </div>

      {/* <div className="">
        <div className="simple-image-carousel">
          <div className="flex-none">
            <img src="/assets/images/wedding-couple/image-1.jpg" />
          </div>
          <div className="flex-none">
            <img src="/assets/images/wedding-couple/image-2.jpg" />
          </div>
          <div className="flex-none">
            <img src="/assets/images/wedding-couple/image-3.jpg" />
          </div>
          <div className="flex-none">
            <img src="/assets/images/wedding-couple/image-4.jpg" />
          </div>
          <div className="flex-none">
            <img src="/assets/images/wedding-couple/image-5.jpg" />
          </div>
        </div>
      </div> */}
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
    </main>
  );
}
