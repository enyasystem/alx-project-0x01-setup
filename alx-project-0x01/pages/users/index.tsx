import React from "react";
import { UserProps } from "../../interfaces";
import UserCard from "../../components/common/UserCard";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />

      <main className="p-6">
        <h1 className="text-3xl font-semibold mb-6">Users</h1>

        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
