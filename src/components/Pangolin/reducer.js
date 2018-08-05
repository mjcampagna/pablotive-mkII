const initialState = {
  dataLayoutCol: '1col',
  dataLayoutPos: 'right'
};

export default function( state = initialState, action ) {
  const { type } = action;
  switch( type ) {

    case '0COL':
      return {
        ... state,
        dataLayoutCol: '0col'
      }

    case '1COL_RIGHT':
      return {
        ... state,
        dataLayoutCol: '1col',
        dataLayoutPos: 'right'
      }

    case '1COL_LEFT':
      return {
        ... state,
        dataLayoutCol: '1col',
        dataLayoutPos: 'left'
      }

    case '1COL_SPLIT':
      return {
        ... state,
        dataLayoutCol: '1col',
        dataLayoutPos: 'split'
      }

    case '2COL_RIGHT':
      return {
        ... state,
        dataLayoutCol: '2col',
        dataLayoutPos: 'right'
      }

    case '2COL_LEFT':
      return {
        ... state,
        dataLayoutCol: '2col',
        dataLayoutPos: 'left'
      }

    case '2COL_SPLIT':
      return {
        ... state,
        dataLayoutCol: '2col',
        dataLayoutPos: 'split'
      }

    case '3COL_RIGHT':
      return {
        ... state,
        dataLayoutCol: '3col',
        dataLayoutPos: 'right'
      }

    case '3COL_LEFT':
      return {
        ... state,
        dataLayoutCol: '3col',
        dataLayoutPos: 'left'
      }

    case '3COL_SPLIT':
      return {
        ... state,
        dataLayoutCol: '3col',
        dataLayoutPos: 'split'
      }

    default:
      return state;

  } // switch
}
