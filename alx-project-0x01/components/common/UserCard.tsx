import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="border shadow-md rounded-lg p-4 mb-4 bg-white">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>

      <div className="mt-2">
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-medium">Website:</span> {website}
        </p>
      </div>

      <div className="mt-3">
        <h3 className="font-medium">Address</h3>
        <p>
          {address.street}, {address.suite}
        </p>
        <p>
          {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="mt-3">
        <h3 className="font-medium">Company</h3>
        <p className="text-sm">{company.name}</p>
        <p className="italic text-gray-500">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
