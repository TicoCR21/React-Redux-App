import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchImages } from "../store/actions";
import Image from "./Image";
import "./Header.css";

const Header = props =>
{
  const [ querySearch, setQuerySearch ] = useState( "car" );

  useEffect( () => props.fetchImages( querySearch ), [] );

  const onChange = e => setQuerySearch( e.target.value );

  const onSubmit = e =>
  {
    e.preventDefault();
    props.fetchImages( querySearch );
  }
  
  return(
    <div className = "container">
      <div className = "header">
        <h1>Search Images</h1>
        <form onSubmit = { onSubmit } >
          <input type = "text" placeholder = "Search For Image" value = { querySearch } onChange = { onChange } />
          <button>Search!</button>
        </form>
      </div>
      

      <div className = "imageGallery">
        { props.images.map( image => <Image key = { image.id } imageURL = { image.largeImageURL } /> ) }
      </div>

    </div>
  );
}

const mapStateToProps = state =>
{
  return { images : state.imageReducer.images, 
           isFetching : state.imageReducer.isFetching, 
           errorMessage : state.imageReducer.errorMessage };
}

export default connect( mapStateToProps, { fetchImages } )( Header ); 