import { Minus, Plus, ShoppingCartSimple, Trash } from "@phosphor-icons/react"
import { useState } from "react"

interface ProductProps {
    image: string
    name: string
    price: number
}

export function ProductCardCheckout({ image, name, price }: ProductProps) {
    const formatedPrice = price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    const [amount, setAmount] = useState(1)

    function increaseAmount() {
        setAmount(amount + 1)
    }

    function decreaseAmount() {
        setAmount(amount - 1)
    }
    
    return(
        <div className="flex flex-row gap-5 py-6 first:pt-0 border-b">
            <img src={`Coffees/${image}`} alt="" className="w-16 h-16" />

            <div className="flex flex-col items-start gap-2">
                <span>
                    {name}
                </span>
                <div className="flex flex-row gap-2">
                    <span className="flex flex-row items-center justify-between lg:justify-start rounded-md bg-[#E6E5E5]">
                        <button
                            onClick={decreaseAmount}
                            disabled={amount == 1}
                            className="p-2 text-[#4B2995] disabled:cursor-not-allowed disabled:opacity-25 transition-all duration-150"
                        >
                            <Minus size={14} />
                        </button>
                        <span className="text-base">
                            {amount}
                        </span>
                        <button
                            onClick={increaseAmount}
                            className="p-2 text-[#4B2995] disabled:cursor-not-allowed disabled:opacity-25 transition-all duration-150"
                        >
                            <Plus size={14} />
                        </button>
                    </span>
                    <button className="flex flex-row items-center gap-1 rounded-md p-2 bg-[#E6E5E5]">
                        <Trash size={16} color="#8047F8" />
                        <span className="text-sans text-xs">REMOVER</span>
                    </button>
                </div>
            </div>

            <strong className="ml-auto">
                <span>R$ </span>
                {formatedPrice}
            </strong>
        </div>
    )
}