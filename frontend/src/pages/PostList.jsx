import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchPosts = async () => {
  const res = await fetch("http://localhost:5000/posts");
  if (!res.ok) throw new Error("Błąd ładowania danych");
  return res.json();
};

export default function PostList() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error while fetching posts: {error.message}</p>;

  return (
    <div>
      <h1>PostList</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
