import React, { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

function DeleteCards() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteCard = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:9000/myCards/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Error: Check console log");
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Add a Card to Library</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <h3 className='text-2xl'>Are you sure you want to delete?</h3>
        <button className="p-4 bg-red-600 m-8" onClick={handleDeleteCard}>
          Yes, Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteCards;
