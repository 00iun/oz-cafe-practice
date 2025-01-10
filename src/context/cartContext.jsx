import { createContext, Provider, useContext } from "react"
import { useState } from "react"

const counterContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (quantity, options, modalMenu) => {
        setCart(cart => [...cart, { options, quantity, id: modalMenu }])
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((el) => id !== el.id));
    }

    return (
        <counterContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </counterContext.Provider>
    )
}

export function useCart() {
    return useContext(counterContext)
} 