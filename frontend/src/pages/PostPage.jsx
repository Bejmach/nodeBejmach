import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const fetchPost = async (id) => {
  const res = await fetch(`http://localhost:5000/posts/${id}`);
  if (!res.ok) throw new Error("Błąd ładowania posta");
  return res.json();
};

export default function PostPage() {
  const { id } = useParams(); // Pobieramy ID posta z URL
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", id], // Używamy dynamicznego ID
    queryFn: () => fetchPost(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error while fetching post: {error.message}</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>
        <strong>Autor ID:</strong> {post.userId}
      </p>
    </div>
  );
}
