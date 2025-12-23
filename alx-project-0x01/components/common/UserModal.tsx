import React, { useState } from "react";
import { UserProps, UserModalProps } from "../../interfaces";

const defaultUser = (): UserProps => ({
  id: Date.now(),
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: { lat: "", lng: "" },
  },
  phone: "",
  website: "",
  company: { name: "", catchPhrase: "", bs: "" },
});

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserProps>(defaultUser());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const parts = name.split(".");
      setUser((prev) => {
        const copy: any = JSON.parse(JSON.stringify(prev));
        let cur = copy;
        for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
        cur[parts[parts.length - 1]] = value;
        return copy as UserProps;
      });
    } else {
      setUser((prev) => ({ ...(prev as any), [name]: value } as UserProps));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Add / Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm">Name</label>
              <input name="name" value={user.name} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm">Username</label>
              <input name="username" value={user.username} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input name="email" value={user.email} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm">Phone</label>
              <input name="phone" value={user.phone} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm">Website</label>
              <input name="website" value={user.website} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm">Company</label>
              <input name="company.name" value={user.company.name} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm">Street</label>
              <input name="address.street" value={user.address.street} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm">City</label>
              <input name="address.city" value={user.address.city} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
