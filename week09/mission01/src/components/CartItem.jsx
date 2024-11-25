import {ChevronDonw, ChevronUp} from "../constants/icons";
import {useDispatch} from "react-redux";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";

const CartItem = ({id, title, singer, price, img, amount}) => {
    const dispatch = useDispatch();
    return(
        <div>
            <img src={img} alt={`${title} 이미지`} />
            <div>{title} | {singer}</div>
            <div>₩{price}원</div>
            <div>
                <button onClick={() => dispatch(increase(id))}>
                    <ChevronUp/>
                </button>
            </div>
            <p>{amount}</p>

            <button onClick={() => {
                if (amount === 1){
                    dispatch(removeItem(id));
                }
                dispatch(decrease(id));
            }}>
                <ChevronDonw/>
            </button>
        </div>
    )
}

export default CartItem;