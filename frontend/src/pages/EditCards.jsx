import React, { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import { useNavigate,useParams } from "react-router-dom";

function EditCards() {
  const [name, setName] = useState("");
  const [manaCost, setManaCost] = useState("");
  const [oracleText, setOracleText] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:9000/myCards/${id}`)
      .then((response) => {
        setName(response.data.name);
        setManaCost(response.data.manaCost);
        setOracleText(response.data.oracleText);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleEditCard = () => {
    const data = {
      name,
      manaCost,
      oracleText,
    };
    setLoading(true);
    axios
      .put(`http://localhost:9000/myCards/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Error: check console log");
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Add a Card to Library</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Mana Cost</label>
          <input
            type="text"
            value={manaCost}
            onChange={(e) => setManaCost(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Oracle Text</label>
          <input
            type="text"
            value={oracleText}
            onChange={(e) => setOracleText(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditCard}>Add Card</button>
      </div>
    </div>
  );
}

export default EditCards;
