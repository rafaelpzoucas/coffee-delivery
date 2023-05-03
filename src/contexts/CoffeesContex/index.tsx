
import { createContext, ReactNode } from "react";

interface ICoffeesProvider {
    children: ReactNode
}

interface ICoffeesContext {
    
}

export const CoffeesContext = createContext({} as ICoffeesContext)


export function CoffeesProvider({ children }: ICoffeesProvider) {
    

    return (
        <CoffeesContext.Provider value={{ 
            
        }}>
            { children }
        </CoffeesContext.Provider>
    )
}