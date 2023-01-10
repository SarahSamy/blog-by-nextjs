import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Sarah's blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};
export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
