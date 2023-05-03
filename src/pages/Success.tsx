import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import illustration from '../assets/illustration.svg'

export function Success() {
    return(
        <div>
            <div>
                <h1>
                    Uhu! Pedido confirmado
                </h1>
                <span>
                    Agora é só aguardar que logo o café chegará até você
                </span>

                <div>
                    <div>
                        <span>
                            <MapPin />
                        </span>
                        <span>
                            Entrega em Rua João Daniel Martinelli, 102 - Farrapos - Porto Alegre, RS
                        </span>
                    </div>
                    <div>
                        <span>
                            <Timer />
                        </span>
                        <div>
                            <span>
                                Previsão de entrega
                            </span>
                            <strong>
                                20 min - 30 min 
                            </strong>
                        </div>
                    </div>
                    <div>
                        <span>
                            <CurrencyDollar />
                        </span>
                        <div>
                            <span>
                                Pagamento na entrega
                            </span>
                            <strong>
                                Cartão de crédito
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
            <img src={illustration} alt="" />
        </div>
    )
}