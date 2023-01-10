import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  console.log({ slug });
  const imagePath = `/images/posts/${slug}/${image}`;
  console.log({ imagePath });
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            sizes=" 100vw"
            // width={300}
            // height={200}
            // layout="responsive"
            fill={true}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
export default PostItem;
