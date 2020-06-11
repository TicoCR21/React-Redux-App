import axios from "axios";

export const SEARCH_IMAGES = "SEARCH_IMAGES";
const KEY = "7007594-70b22f2089cf58a6ea70691b2";

export const fetchImages = queryAttributes => dispatch => 
{
  axios( `https://pixabay.com/api/?key=${ KEY }&q=${ queryAttributes.split( " " ).join( "+" ) }&image_type=photo&pretty=true` )
    .then( response => dispatch( { type : SEARCH_IMAGES, payload : response.data.hits } ) )
    .catch( error => console.error( error ) )
}  