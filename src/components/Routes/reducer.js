const initialState = {
	images: null
};

export default function( state = initialState, action ) {
  const { type } = action;
  switch( type ) {

    case 'UPDATE_IMAGES':
      return {
        ... state,
        images: action.payload
      }

		default:
      return state;

  } // switch
}
