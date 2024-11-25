import Navbar from "./components/navbar";
import CartContainer from './components/CartContainer';
import {useDispatch} from 'react-redux';
import { useEffect } from "react";
import {calulateTotals} from './features/cart/cartSlice'

function App(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals())
    }, {})

    return(
        <>
            <CartContainer/>
        </>
    )
}

export default App;