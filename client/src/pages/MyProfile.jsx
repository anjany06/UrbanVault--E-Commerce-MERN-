import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const MyProfile = () => {
  const { backendUrl, name, email, navigate, setName, setEmail, token } =
    useContext(ShopContext);

  const [isNameEdit, setIsNameEdit] = useState(false);
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleEmailEdit = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      const response = await axios.patch(
        backendUrl + "/api/user/update-email",
        { email: newEmail }, // Send the new email in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token for authentication
          },
        }
      );

      if (response.data.success) {
        setEmail(newEmail); // Update email in state
        toast.success("Email updated successfully!");
        setIsEmailEdit(false);
      } else {
        toast.error(response.data.message); // Show error message
      }
    } catch (error) {
      console.error("Error updating email:", error);
      toast.error("Failed to update email. Please try again.");
    }
  };
  const handleNameEdit = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      const response = await axios.patch(
        backendUrl + "/api/user/update-name",
        { name: newName }, // Send the new name in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token for authentication
          },
        }
      );

      if (response.data.success) {
        setName(newName); // Update name in state
        toast.success("Name updated successfully!");
        setIsNameEdit(false);
      } else {
        toast.error(response.data.message); // Show error message
      }
    } catch (error) {
      console.error("Error updating name:", error);
      toast.error("Failed to update name. Please try again.");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="max-w-2xl mx-auto rounded-lg p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Profile</h1>

      {/* Name Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Name</h2>
        {isNameEdit ? (
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter new name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={15}
            />
            <div className="flex space-x-4">
              <button
                onClick={() => handleNameEdit(newName)}
                className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Save
              </button>
              <button
                onClick={() => setIsNameEdit(false)}
                className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-lg">{name}</p>
            <button
              onClick={() => {
                setNewName(name);
                setIsNameEdit(true);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Edit
            </button>
          </div>
        )}
      </div>

      {/* Email Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Email</h2>
        {isEmailEdit ? (
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter new email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={30}
            />
            <div className="flex space-x-4">
              <button
                onClick={() => handleEmailEdit(newEmail)}
                className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Save
              </button>
              <button
                onClick={() => setIsEmailEdit(false)}
                className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="email-container">
            <p className="text-lg whitespace-wrap">{email}</p>
            <button
              onClick={() => {
                setNewEmail(email);
                setIsEmailEdit(true);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
