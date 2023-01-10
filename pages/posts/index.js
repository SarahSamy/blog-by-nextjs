import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

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

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="Alist of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};
export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  console.log({ allPosts });
  return {
    props: {
      posts: allPosts,
    },
  };
}
