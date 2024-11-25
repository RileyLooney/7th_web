import CartItem from "./CartItem.jsx";
import {useSelector} from "react-redux";

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);

    return (
        <>
            <header>
                <p>선택 음반 목록</p>
            </header>
            <div>
                {state.cartItems.map((item) => {
                    return <CartItem key={item.id} {...item}/>
                })}
                <br/>
                가격 : ₩{total}원
                <br/>
                <button
                    className="btn clear-btn"
                    onClick={() => {
                        dispatch(clearCart());
                }}>
                    초기화
                </button>
            </div>
            <footer>
                <p>Footer Area</p>
            </footer>
        </>
    )
}

export default CartContainer;