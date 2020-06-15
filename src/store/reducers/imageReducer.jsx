import { SEARCH_IMAGES } from "../actions";

const initialState = 
{
  images       : [],
  isFetching   : false,
  errorMessage : "",
}

export const imageReducer = ( state = initialState, action ) =>
{
  switch( action.type )
  {
    case SEARCH_IMAGES:
      console.log( state );
      return{ ...state, images : [ ...action.payload ] }
    default:
      return state;
  }
}