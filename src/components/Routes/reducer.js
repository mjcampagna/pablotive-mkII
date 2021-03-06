const initialState = {
  images: null,
  image: null,
  query: '',
  view: null
};

export default function( state = initialState, action ) {
  const { type } = action;
  switch( type ) {

    case 'UPDATE_IMAGES':
      return {
        ... state,
        images: action.payload
      }

    case 'SET_IMAGE':
      return {
        ... state,
        image: action.payload
      }

    case 'SET_QUERY':
      return {
        ... state,
        query: action.payload
      }

    case 'SELECT_VIEW':
      return {
        ... state,
        view: action.payload
      }

    default:
      return state;

  } // switch
}
