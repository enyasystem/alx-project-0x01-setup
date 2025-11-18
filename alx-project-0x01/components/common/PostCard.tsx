import React from "react";

interface PostCardProps {
    title: string;
    content: string;
}

const PostCard: React.FC<PostCardProps> = ({title, content }) => {
    return (
        <div className="border p-4 rounded shadow mb-4">
            <h2 className="font-bold text-xl">{title}</h2>
            <p>{content}</p>
        </div>
    );
};


export default PostCard;
