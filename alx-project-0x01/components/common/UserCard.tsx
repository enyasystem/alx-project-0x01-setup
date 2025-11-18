import React, { FC } from "react";
import { UserProps } from "../../interfaces";

interface Props {
  user: UserProps;
}

const UserCard: FC<Props> = ({ user }) => {
  return (
    <div className="border shadow-md rounded-lg p-4 mb-4 bg-white">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>

      <div className="mt-2">
        <p><span className="font-medium">Email:</span> {user.email}</p>
        <p><span className="font-medium">Phone:</span> {user.phone}</p>
        <p><span className="font-medium">Website:</span> {user.website}</p>
      </div>

      <div className="mt-3">
        <h3 className="font-medium">Address</h3>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
      </div>

      <div className="mt-3">
        <h3 className="font-medium">Company</h3>
        <p className="text-sm">{user.company.name}</p>
        <p className="italic text-gray-500">{user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
