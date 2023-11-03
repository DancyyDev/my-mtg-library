import SingleCardDisplay from "./SingleCardDisplay";

function CardsDisplay({ cards }) {
  return (
    <div className="flex flex-wrap">
      {cards.map((card) => (
        <SingleCardDisplay key={card._id} card={card} />
      ))}
      </div>
        
  );
}

export default CardsDisplay;
