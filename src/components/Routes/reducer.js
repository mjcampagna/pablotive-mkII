const initialState = {
  images: null,
  image: null,
  view: 'original'
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

    default:
      return state;

  } // switch
}
