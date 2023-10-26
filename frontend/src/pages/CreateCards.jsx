import React, { useState } from "react";
import axios from "axios";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";

function CreateCards() {
  const [searchCard, setSearchCard] = useState("");
  const [addCard, setAddCard] = useState([])

  // const [name, setName] = useState("");
  // const [manaCost, setManaCost] = useState("");
  // const [oracleText, setOracleText] = useState("");
  // const [color, setColor] = useState(['generic'])
  // const [cardImg, setCardImg] = useState({})
  // const [cardQuantity, setCardQuantity] = useState()

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSearchCard(e) {
    e.preventDefault();
    if (searchCard.trim() === "") {
      return;
    }
    await fetch(`https://api.scryfall.com/cards/search?q=${searchCard}`)
      .then((response) => response.json())
      .then((results) => {
        console.log("data", results.data);
        setAddCard(Array.from(results.data))
        console.log('addCard', addCard)
      });
  }

  

  // const getData = (e) => {
  //   const cardData = addCard.filter(x => x.name === e.target.alt)
  //   console.log(cardData)
  //   setName(cardData[0].name)
  //   setManaCost(cardData[0].mana_cost)
  //   setOracleText(cardData[0].oracle_text)
  //   setColor(cardData[0].colors)
  //   setCardImg(cardData[0].image_uris)
  //   setCardQuantity(1)   
  // }

  const handleSaveCard = (e) => {

    const cardData = addCard.filter(x => x.name === e.target.alt)

    const data = {
      name : cardData[0].name,
      manaCost: cardData[0].mana_cost,
      oracleText: cardData[0].oracle_text,
      color: cardData[0].colors,
      cardImg: cardData[0].image_uris,
      cardQuantity: 1,
    };
    console.log(data)
    setLoading(true);
    axios
      .post("http://localhost:9000/myCards", data)
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

      <div >
        
        <form onSubmit={ handleSearchCard } >
          <label htmlFor="cardInput"></label>
          <input
            className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
            value={ searchCard }
            onChange={(e) => setSearchCard(e.target.value)}
            type="text"
            name="searchCard"
            id="searchCard"
            placeholder="Search your card"
          />
          <button>Search Card</button>
        </form>
        <button onClick={ handleSaveCard }>Add to Library</button>
        
      </div>

      

      <div>
        <form className='flex flex-wrap'>
        { addCard.map((card)=> (
          <div key={card.id} className="focus:grayscale">
            
            <img 
              src={card.image_uris.small} 
              alt={card.name}
              value={card.name}
              onClick={ handleSaveCard }
            />
            
          </div>
        ))}

        </form>
        
        
      </div>
    </div>
  );
}

export default CreateCards;
