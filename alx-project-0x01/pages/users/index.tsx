import React from "react";
import { UserProps, PostProps } from "../../interfaces";
import UserCard from "../../components/common/UserCard";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

interface UsersPageProps {
  users: UserProps[];
  posts: PostProps[];
}

const Users: React.FC<UsersPageProps> = ({ users, posts }) => {
  return (
    <div>
      <Header />

      <main className="p-6">
        <h1 className="text-3xl font-semibold mb-6">Users</h1>

        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Posts</h2>
          {posts.map((post) => (
            <div key={post.id} className="mb-2 p-2 border rounded">
              <h3 className="font-medium">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.body}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postsRes.json();

  return {
    props: {
      users,
      posts,
    },
  };
}

export default Users;
