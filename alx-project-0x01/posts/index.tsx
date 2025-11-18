import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PostCard from "../components/common/PostCard";

const Posts: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-4">
                <PostCard title="First Post" content="This is the first post." />
                <PostCard title="Second Post" content="This is the second post." />
            </main>
        </div>
    );
};

export default Posts;
