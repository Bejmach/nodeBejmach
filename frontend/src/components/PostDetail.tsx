import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  content: string;
}

const fetchPost = async (id: string): Promise<Post> => {
  const res = await fetch(`http://localhost:5000/posts/${id}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const { data, isLoading, error } = useQuery<Post>({
    queryKey: [postId],
    queryFn: () => fetchPost(postId!),
  });

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newEntry: Comment = {
      id: Date.now(),
      content: newComment.trim(),
    };

    setComments((prev) => [...prev, newEntry]);
    setNewComment("");
  };

  if (isLoading) return <div>Loading post...</div>;
  if (error) return <div>Error loading post</div>;

  return (
    <div>
      <div className="post">
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
      </div>
      <div>
        <h2>Comments</h2>
        <div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            rows={3}
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>

        <ul className="space-y-2">
          {comments.map((comment) => (
            <li key={comment.id}>{comment.content}</li>
          ))}
          {comments.length === 0 && <li>No comments yet.</li>}
        </ul>
      </div>
      <Link to="/">&larr; Back to Posts</Link>
    </div>
  );
}
