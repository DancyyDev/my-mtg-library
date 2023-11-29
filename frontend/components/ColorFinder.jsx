import React, { useState, useEffect } from "react";

function ColorFinder({card}) {

    const [cmc, setCmc] = useState('')


//Looks at the manaCost value and converts it to a new array for another function to use and fetch svg for card
//takes the string and convert it into the array we need
  let convertedManaCost = card.manaCost.replaceAll("}", "},").split(",").slice(0, -1);

    const manaCostImg = convertedManaCost.forEach((pip) => {
      colors.filter(card => {
        if(card.symbol === pip){
          colorArr.push(card.svg_uri)
        }
      });
    });

  return (
    <div>

    </div>
  )
}

export default ColorFinder;
