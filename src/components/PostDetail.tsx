import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPost = async (id: string): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostDetail() {
  const { postId } = useParams<{ postId: string }>();

  const { data, isLoading, error } = useQuery<Post>({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId!),
  });

  if (isLoading) return <div>Loading post...</div>;
  if (error) return <div>Error loading post</div>;

  return (
    <div>
     <div className="post">
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
      </div>
	<Link to="/" className="link2">&larr; Back to Posts</Link>

	</div>
  );
}
