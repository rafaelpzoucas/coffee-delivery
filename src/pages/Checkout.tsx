import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { Input } from "../components/Input";
import { ProductCard } from "../components/ProductCard";
import { ProductCardCheckout } from "../components/ProductCardCheckout";

import { coffees } from "../components/OurCoffees";

export function Checkout() {
    return(
        <div className="flex justify-center">
            <div className="lg:max-w-[1120px] grid grid-cols-1 lg:flex flex-row gap-8 w-full">
                <div className="flex flex-col gap-4 w-full max-w-screen-sm">
                    <h3 className="font-display font-bold text-lg">
                        Complete seu pedido
                    </h3>
                    <form className="flex flex-col p-10 gap-8 rounded-md bg-[#F3F2F2]">
                        <div className="flex flex-row gap-2">
                            <MapPinLine color="#C47F17" size={22} />
                            <span className="flex flex-col">
                                <strong className="font-sans font-normal text-base text-[#403937]">
                                    Endereço de entrega
                                </strong>
                                <span className="font-sans font-normal text-sm text-[#574F4D]">
                                    Informe o endereço onde deseja receber seu pedido
                                </span>
                            </span>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <Input placeholder="CEP" /> 
                            <Input placeholder="Rua" styles="w-full" />
                            <div className="flex flex-row gap-3 w-full">
                                <Input placeholder="Número" styles="w-1/3" />

                                <div className="flex w-full border rounded-md font-sans text-sm font-normal focus-within:ring-2 focus-within:ring-black text-[#8D8686] border-[#E6E5E5] bg-[#EEEDED]">
                                    <input placeholder="Complemento" className="bg-transparent px-4 py-3 w-full focus:outline-none" />
                                    <span className="flex items-center justify-center text-xs text-[#8D8686] pr-4 italic">Opcional</span>
                                </div>
                            </div> 
                            <div className="flex flex-row w-full gap-3">
                                <Input placeholder="Bairro" styles="w-full" />
                                <Input placeholder="Cidade" />
                                <Input placeholder="UF" styles="w-1/4" />
                            </div> 
                        </div>
                    </form>
                    <div className="flex flex-col p-10 gap-8 rounded-md bg-[#F3F2F2]">
                        <div className="flex flex-row gap-2">
                            <CurrencyDollar color="#8047F8" size={22} />
                            <span className="flex flex-col">
                                <strong className="font-sans font-normal text-base text-[#403937]">
                                    Pagamento
                                </strong>
                                <span className="font-sans font-normal text-sm text-[#574F4D]">
                                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                                </span>
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-3 w-full">
                            <button className="flex flex-row items-center gap-2 p-4 text-xs rounded-md bg-[#E6E5E5]">
                                <CreditCard color="#8047F8" />
                                CARTÃO DE CRÉDITO
                            </button>
                            <button className="flex flex-row items-center gap-2 p-4 text-xs rounded-md bg-[#E6E5E5]">
                                <Bank color="#8047F8" />
                                CARTÃO DE DÉBITO
                            </button>
                            <button className="flex flex-row items-center gap-2 p-4 text-xs rounded-md bg-[#E6E5E5]">
                                <Money color="#8047F8" />
                                DINHEIRO
                            </button>
                        </div>
                    </div>
                </div>
                <aside className="flex flex-col gap-4 w-full max-w-md">
                    <h3 className="font-display font-bold text-lg">
                        Cafés selecionados
                    </h3>

                    <div className="flex flex-col p-10 rounded-md rounded-tr-[44px] rounded-bl-[44px] w-full bg-[#F3F2F2]">
                        <ProductCardCheckout image={coffees[0].image} name={coffees[0].name} price={coffees[0].price} />
                        <ProductCardCheckout image={coffees[0].image} name={coffees[0].name} price={coffees[0].price} />

                        <div className="flex flex-col gap-3 py-6">
                            <div className="flex flex-row justify-between">
                                <span className="text-sm text-[#574F4D]">
                                    Total de itens
                                </span>
                                <span>
                                    R$ 29,70
                                </span>
                            </div>
                            <div className="flex flex-row justify-between">
                                <span className="text-sm text-[#574F4D]">
                                    Entrega
                                </span>
                                <span>
                                    R$ 9,70
                                </span>
                            </div>
                            <div className="flex flex-row justify-between text-xl">
                                <strong>
                                    Entrega
                                </strong>
                                <strong>
                                    R$ 33,70
                                </strong>
                            </div>
                        </div>

                        <button className="px-3 py-2 h-11 rounded-md text-sm text-black bg-[#DBAC2C]">
                            <strong>CONFIRMAR PEDIDO</strong>
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    )
}