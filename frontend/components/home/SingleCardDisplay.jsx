import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";

function SingleCardDisplay({ card }) {
    // const [cardModel, setCardModel] = useState()
  return (
    <div className="mt-6 px-4 py-2">
      {/* <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {card.manaCost}
      </h2>
      <h4 className="my-2 text-gray-500">{card._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{card.name}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{card.manaCost}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <Link to={`/myCards/details/${card._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/myCards/edit/${card._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/myCards/delete/${card._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div> */}
      <img src={card.cardImg.normal} alt={card.name}/>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <Link to={`/myCards/show/${card._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/myCards/delete/${card._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
    </div>
  );
}

export default SingleCardDisplay;
