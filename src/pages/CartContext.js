import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItem, setcartItem] = useState([])
    const [grandTotal, setgrandTotal] = useState(0)

    const localUpdates = (updates) => {
        localStorage.setItem('localstore', JSON.stringify(updates))
    }

    const addTocart = (obj) => {
        console.log('obj', obj);
        const UpdatedCarts = [...cartItem, obj]
        console.log('UpdatedCarts', UpdatedCarts)
        setcartItem(UpdatedCarts)
        localUpdates(UpdatedCarts)
    }

    const DeletedCartItem = (id) => {
        console.log("ids", id)
        const DeleteCart = cartItem.filter(value => value.id !== id)
        console.log("delete", DeleteCart)
        setcartItem(DeleteCart)
        localUpdates(DeleteCart)
    }
    useEffect(() => {
        let total = 0;
        cartItem.map((items) => {
            total += items.price
        })
        setgrandTotal(total);
    }, [cartItem])
    return (
        <CartContext.Provider value={{ addTocart, cartItem, DeletedCartItem, grandTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)