import { createContext, useReducer } from "react";
import { CART_ACTIONS } from "./cartContextTypes";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === CART_ACTIONS.addItem) {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === CART_ACTIONS.removeItem) {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === CART_ACTIONS.clearCart) {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: CART_ACTIONS.addItem, item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: CART_ACTIONS.removeItem, id });
  }

  function clearCart() {
    dispatchCartAction({ type: CART_ACTIONS.clearCart });
  }

  const cartContext = {
    items: cart.items,
    cartTotal: cart.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0),
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext value={cartContext}>{children}</CartContext>;
}

export default CartContext;
