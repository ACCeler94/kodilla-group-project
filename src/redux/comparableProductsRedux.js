/* selectors */
export const getAllComparableProducts = ({ comparableProducts }) => comparableProducts;

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT_TO_COMPARE = createActionName('ADD_PRODUCT_TO_COMPARE');

const REMOVE_PRODUCT_FROM_COMPARE = createActionName('REMOVE_PRODUCT_FROM_COMPARE');

/* action creators */
export const addProductToCompare = payload => ({
  payload,
  type: ADD_PRODUCT_TO_COMPARE,
});

export const removeProductFromCompare = productId => ({
  payload: productId,
  type: REMOVE_PRODUCT_FROM_COMPARE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_COMPARE: {
      const itemsWithThisId = statePart.filter(
        element => element.id === action.payload.id
      );

      if (itemsWithThisId.length === 1) {
        return statePart;
      }

      if (statePart.length === 4) {
        return statePart;
      }
      return [...statePart, { id: action.payload.id, imgSrc: action.payload.imgSrc }];
    }

    case REMOVE_PRODUCT_FROM_COMPARE: {
      return statePart.filter(product => product.id !== action.payload);
    }
    default:
      return statePart;
  }
}
