/* selectors */
export const getPopup = ({ popupIsOpen }) => popupIsOpen;

/* action name creator */
const reducerName = 'popup';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const OPEN_POPUP = createActionName('OPEN_POPUP');

const CLOSE_POPUP = createActionName('CLOSE_POPUP');

/* action creators */
export const openPopup = () => ({
  type: OPEN_POPUP,
});

export const closePopup = () => ({
  type: CLOSE_POPUP,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case 'OPEN_POPUP':
      return { isOpen: true };
    case 'CLOSE_POPUP':
      return { isOpen: false };
    default:
      return statePart;
  }
}
