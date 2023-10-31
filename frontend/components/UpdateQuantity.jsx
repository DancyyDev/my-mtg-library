import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateQuantity({ card }) {
  const [loading, setLoading] = useState(false);
  const [cardQuantity, setCardQuantity] = useState(card.cardQuantity);
  const navigate = useNavigate();

  const increaseQuantity = () => {
    let increase = cardQuantity + 1;
    console.log("increase", increase);

    const data = {
      cardQuantity: increase,
    };

    setLoading(true);
    setCardQuantity(increase)

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
      })
  };

  const decreaseQuantity = () => {
    let decrease = cardQuantity - 1
    if (decrease <= 1) {
      decrease = 1;
    }
    console.log("decrease", decrease);

    const data = {
      cardQuantity: decrease,
    };
    setLoading(true);
    setCardQuantity(decrease)

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

      {cardQuantity}

      <button onClick={increaseQuantity}>
        <HiChevronRight className="text-2xl text-green-600" />
      </button>
    </div>
  );
}

export default UpdateQuantity;
