import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react"
import { useState } from "react"

interface ProductProps {
    image: string
    name: string
    tags: Array<string>
    description: string
    price: number
}

export function ProductCard({ image, name, description, price, tags }: ProductProps) {
    const formatedPrice = price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    const [amount, setAmount] = useState(1)

    function increaseAmount() {
        setAmount(amount + 1)
    }

    function decreaseAmount() {
        setAmount(amount - 1)
    }
    
    return(
        <div className="relative flex flex-col items-center justify-between gap-4 p-5 lg:pt-20 rounded-md rounded-tr-3xl rounded-bl-3xl bg-[#F3F2F2]">
            <div className="flex flex-col items-center gap-4">
                <img src={`Coffees/${image}`} alt="" className="lg:absolute top-[-30px]" />
                <div className="flex flex-col lg:flex-row items-center gap-1">
                    {
                        tags.map(tag => {
                            return (
                                <span key={tag} className="text-xs py-1 px-2 rounded-full font-bold uppercase bg-[#F1E9C9] text-[#C47F17]">{tag}</span>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col items-center text-center">
                <strong className="font-display text-xl">
                    {name}
                </strong>

                <span className="text-sm text-[#8D8686]">
                    {description}
                </span>
            </div>

            <footer className="flex flex-col lg:flex-row items-center justify-between gap-2 w-full pt-8">
                <span>
                    <span>R$ </span>
                    <strong className="font-display text-2xl text-[#574F4D]">
                        {formatedPrice}
                    </strong>
                </span>
                <div className="flex flex-row justify-between lg:justify-end gap-2 w-full lg:w-auto">
                    <span className="flex flex-row items-center justify-between lg:justify-start rounded-md bg-[#E6E5E5] w-full lg:w-auto">
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
                    <button className="p-2 rounded-md bg-[#4B2995]">
                        <ShoppingCartSimple size={22} weight="fill" color="white" />
                    </button>
                </div>
            </footer>
        </div>
    )
}