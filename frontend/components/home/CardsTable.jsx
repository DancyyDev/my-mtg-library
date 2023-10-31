import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import UpdateQuantity from "../UpdateQuantity";

function CardsTable({ cards }) {
  return (
    <table className="w-full border-seperate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">Art</th>
          <th className="border border-slate-600 rounded-md">Quantity</th>
          <th className="border border-slate-600 rounded-md">Name</th>
          <th className="border border-slate-600 rounded-md">Mana Cost</th>
          <th className="border border-slate-600 rounded-md">Oracle Text</th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {cards.map((card) => (
          <tr key={card._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              <img src={card.cardImg.art_crop} className="scale-50" />
              {/* {card._id} */}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-2">
                <UpdateQuantity card={card} />
              </div>
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <Link to={`/myCards/show/${card._id}`}>{card.name}</Link>
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {card.manaCost}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {card.oracleText}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/myCards/edit/${card._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/myCards/delete/${card._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CardsTable;
