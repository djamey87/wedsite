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
      <div>
        <div className="hero-image relative">
          <div className="font-script text-white absolute hero-text center">
            <div className="relative">
              <h1 className=" text-8xl">Michela</h1>
              <h1 className="text-8xl">&</h1>
              <h1 className="text-8xl">Dave</h1>
              <p className="italic font-mont text-3xl text-center">2025</p>
              <img src="/assets/images/leaves.svg" />
              <img src="/assets/images/leaves.svg" />
            </div>
          </div>
        </div>
      </div>
      <Container>
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
      </Container>
    </main>
  );
}
