"use client";
import { Comment } from "@/types/comment";
import { createComment } from "@/utils/server/create-comment";
import { fetchComments } from "@/utils/server/fetch-comments";
import React, { JSX, useEffect, useState } from "react";

const Comments = ({ id }: { id: string }): JSX.Element => {
  const initialFormData: Comment = {
    text: "",
    task_id: id,
  };
  const [formData, setFormData] = useState<Comment>(initialFormData);
  const [commentList, setCommentList] = useState<Comment[] | null>([]);

  useEffect(() => {
    const loadComments = async (id: string) => {
      try {
        const result = await fetchComments(id);
        setCommentList(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log("Error: " + error.message);
        } else {
          console.log("An unknown error occurred.");
        }
      }
    };
    loadComments(id);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createComment(formData);
      const result = await fetchComments(id);
      setCommentList(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error: " + error.message);
      } else {
        console.log("An unknown error occurred.");
      }
    }
    setFormData(initialFormData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col p-1">
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md"
          placeholder="დაწერე კომენტარი"
        />
        <br />

        <button
          type="submit"
          className="bg-[#DDD2FF] p-2 rounded cursor-pointer hover:bg-[#d1c7f1] active:scale-95 transition-transform ease-in-out duration-150"
        >
          დააკომენტარე
        </button>
      </form>
      <div className="flex my-5 gap-1.5">
        <div className="font-bold ">კომენტარები</div>
        <div className="rounded-2xl bg-[#8338EC] text-white px-2.5">
          {commentList?.length}
        </div>
      </div>
      {commentList &&
        commentList.map((comment) => (
          <div key={comment.id} className="my-5">
            <div className="font-bold">{comment.author_nickname}</div>
            {comment.text}
          </div>
        ))}
    </div>
  );
};

export default Comments;
