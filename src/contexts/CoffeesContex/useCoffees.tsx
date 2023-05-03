import { useContext } from "react"
import { CoffeesContext } from "."

export const useCoffees = () => {
    const context = useContext(CoffeesContext)

    return context
}