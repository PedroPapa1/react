import { useContext } from "react";
import { Modal } from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import { Button } from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import { CartItem } from "./CartItem";

export function Cart() {
  const { items, cartTotal, addItem, removeItem } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);

  return (
    <Modal className="cart" open={progress === "cart"} onClose={progress === "cart" ? hideCart : null}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => addItem(item)}
            onDecrease={() => removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        {items.length > 0 ? <Button onClick={showCheckout}>Go to Checkout</Button> : null}
      </p>
    </Modal>
  );
}
