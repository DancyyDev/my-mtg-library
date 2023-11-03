import React, { useState } from "react";
import axios from "axios";

function SearchCards() {

  const [myCards, setMyCards] = useState('')

  const searchLibrary = () => {
        console.log('searching nothing')
  }

  return (
    <div>SearchCards
      
      <form onSubmit={ searchLibrary } >
          <label htmlFor="cardInput"></label>
          <input
            className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
            value={ myCards }
            onChange={(e) => setMyCards(e.target.value)}
            type="text"
            name="searchMyCard"
            id="searchCard"
            placeholder="Search your card"
          />
          <button>Search Card</button>
        </form>
    </div>
  )
}

export default SearchCards