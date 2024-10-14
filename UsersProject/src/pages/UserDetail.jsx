// src/pages/UserDetail.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../features/usersSlice";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  if (!selectedUser) return <div className="text-center">Loading...</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-6">
      <div className="flex items-center mb-4">
        <img
          src={`https://i.pravatar.cc/150?u=${selectedUser.id}`}
          alt={selectedUser.name}
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
        <div className="ml-4">
          <h2 className="text-3xl font-bold">{selectedUser.name}</h2>
          <p className="text-gray-600">{selectedUser.email}</p>
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-4">Contact Information</h3>
      <p>Phone: {selectedUser.phone}</p>
      <p>Address: {selectedUser.address}</p>
    </div>
  );
};

export default UserDetail;
