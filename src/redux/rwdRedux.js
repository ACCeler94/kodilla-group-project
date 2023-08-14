/* selectors */
export const getMode = ({ mode }) => mode;

/* action name creator */
const reducerName = 'mode';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_RESPONSIVE_MODE = createActionName('SET_RESPONSIVE_MODE');

/* action creators */
export const setResponsiveMode = payload => ({ payload, type: SET_RESPONSIVE_MODE });

/* reducer */

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_RESPONSIVE_MODE: {
      return {
        ...statePart,
        responsiveMode: action.payload,
      };
    }
    default:
      return statePart;
  }
}
