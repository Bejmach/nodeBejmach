import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostList() {
  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div>
      <h1>Posts</h1>
      <div className="post">
        {data?.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id} className="link">
            <h2>{post.title}</h2>
            <p>{post.body.slice(0, 100)}...</p>
            <hr />
          </Link>
        ))}
      </div>
    </div>
  );
}
