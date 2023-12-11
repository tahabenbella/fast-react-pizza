
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";
import EmptyCart from './EmptyCart'


function Cart() {
  const dispatch = useDispatch()
  const username = useSelector(getUsername)
  const cart = useSelector(getCart)

  if(!cart.length) return <EmptyCart/>
  return (
    <div className="px-4 py-3 ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="divide-srone-200 mt-3 divide-y border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={()=> dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
