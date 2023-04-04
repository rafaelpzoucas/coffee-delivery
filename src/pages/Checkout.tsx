import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { Input } from "../components/Input";

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
                <aside className="flex flex-col gap-4">
                    <h3 className="font-display font-bold text-lg">
                        Cafés selecionados
                    </h3>

                    <div className="flex flex-col p-10 gap-8 rounded-md rounded-tr-[44px] rounded-bl-[44px] bg-[#F3F2F2]">
                        
                    </div>
                </aside>
            </div>
        </div>
    )
}