import React from "react";

export default function( props )
{
  return (
    <div className = "imageContainer">
      <img src = { props.imageURL } alt = "PixaBay Image"/>
    </div>
  );
}