import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { MdOutlineAddBox} from "react-icons/md";
import CardsTable from "../../components/home/CardsTable.jsx";
import CardsDisplay from "../../components/home/CardsDisplay.jsx";

function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:9000/myCards/getCards")
      .then((response) => {
        setCards(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 mx-10">
        <div className='flex justify-center items-center gap-x-4'>
            <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g' onClick={() => setShowType('table')}>Table</button>
            <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g' onClick={() => setShowType('display')}>Display</button>
        </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Card List</h1>

        <Link to="/myCards/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>

        <Link to="/myCards/search">
          <button className='border-solid border-2 border-indigo-600 rounded-lg hover:bg-indigo-300'>
            <h3 className="text-2xl px-3 py-1">Search Card</h3>
            </button>
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table' ? (<CardsTable cards={cards} />) : (<CardsDisplay cards={cards}/>)}
    </div>
  );
}

export default Home;
