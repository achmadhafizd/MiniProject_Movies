import { Carousel } from "flowbite-react";
import React from "react";

function Carousels({ isiCarousels }) {
  return (
    <div>
      <Carousel slideInterval={5000}>{isiCarousels}</Carousel>
    </div>
  );
}

export default Carousels;
