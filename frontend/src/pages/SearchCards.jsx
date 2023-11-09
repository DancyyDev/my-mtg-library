import React, { useState } from "react";
import axios from "axios";
import BackButton from "../../components/BackButton";

function SearchCards() {

  const [inputCard, setInputCard] = useState('')
  const [myCards, setMyCards] = useState([])

  const searchLibrary = async () => {
        if (inputCard.trim() === "") {
          return;
        }
      await axios
      .get("http://localhost:9000/myCards/searchCards/")
      .then((response) => {
        setMyCards(response.data.data);
        console.log(myCards)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  return (
    <div>
      
      <BackButton />

      <form onSubmit={ searchLibrary } >
          <label htmlFor="cardInput"></label>
          <input
            className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 m-auto"
            value={ inputCard }
            onChange={(e) => setInputCard(e.target.value)}
            type="text"
            name="searchMyCard"
            id="searchCard"
            placeholder="Type in simple keyword such as remove, destroy, exile, lifelink, etc."
          />
          <button className="border-solid border-2 border-indigo-600 rounded-lg hover:bg-indigo-300 px-2 py-1">Search Card</button>
        </form>

      <div>
          {myCards.map( x => {
            <span>{x}</span>
          })}
      </div>

    </div>
  )
}

export default SearchCards