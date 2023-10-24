import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateQuantity({ card }) {
  let cardQ = card.cardQuantity;
  const [loading, setLoading] = useState(false);
  const [cardQuantity, setCardQuantity] = useState(card.cardQuantity);
  const navigate = useNavigate();

  const increaseQuantity = () => {
    setCardQuantity( cardQuantity => cardQuantity + 1);
    
    // handleCardQuantity()
    console.log("cardQuantity", cardQuantity);

    const data = {
        cardQuantity,
      };
    
    console.log(data);
    setLoading(true);
    axios
      .put(`http://localhost:9000/myCards/quantityUp/${card._id}`, data)
      .then(() => {
        console.log("sending update");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Error in Update axios: check console log");
      });
      console.log("new quantity", card.cardQuantity)
  };

  const decreaseQuantity = () => {
    if (cardQuantity <= 1) {
        setCardQuantity(card.cardQuantity);
    }
    setCardQuantity(card.cardQuantity--);
    console.log("decrease", cardQuantity)

    const data = {
      cardQuantity,
    };

    setLoading(true);
    axios
      .put(`http://localhost:9000/myCards/quantityDown/${card._id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Error in Update axios: check console log");
      });
  };

  //   const handleCardQuantity = () => {
  //     console.log(cardQuantity);
  //     const data = {
  //       cardQuantity,
  //     };
  //     setLoading(true);
  //     axios
  //       .put(`http://localhost:9000/myCards/quantity/${card._id}`, data)
  //       .then(() => {
  //         setLoading(false);
  //         navigate("/");
  //         console.log("i am here");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setLoading(false);
  //         alert("Error in Update axios: check console log");
  //       });
  //   };

  return (
    <div>
      <button onClick={decreaseQuantity}>
        <HiChevronLeft className="text-2xl text-green-600" />
      </button>
        { card.cardQuantity }
      <button onClick={increaseQuantity}>
        <HiChevronRight className="text-2xl text-green-600" />
      </button>
    </div>
  );
}

export default UpdateQuantity;
