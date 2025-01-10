import { createContext, Provider, useContext } from "react"
import data from "../assets/data"

const counterContext = createContext()

export function MeunProvider({ children }) {
    return (
        <counterContext.Provider value={{ menu: data.menu }}>
            {children}
        </counterContext.Provider>
    )
}

export function useMeun() {
    return useContext(counterContext)
} 