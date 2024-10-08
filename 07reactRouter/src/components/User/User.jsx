import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div className="text-center m-4">
      <h1 className="bg-gray-600 text-white text-3xl p-4">User {userid}</h1>
    </div>
  );
}

export default User;
