import React, { useState, useEffect } from "react";

function ColorFinder() {

    const [cmc, setCmc] = useState('')


//Looks at the manaCost value and converts it to a new array for another function to use and fetch svg for card
  const colorCostFinder = (colors) => {
    let colorsNew = colors.replaceAll('}','},').split(',').slice(0,-1)
    setCmc(colorsNew)
  };

  return <div>ColorFinder</div>;
}

export default ColorFinder;
