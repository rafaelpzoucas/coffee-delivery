import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import bannerImg from '../assets/Bannerimg.png'

export function Banner() {
    return (
        <div className='flex justify-center'>
            <div className='lg:max-w-[1120px] grid grid-cols-1 lg:grid-cols-2 px-4 py-14 lg:py-24'>
                <aside>
                    <h1 className='font-display font-extrabold text-5xl'>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <span>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </span>
                    <div className='grid lg:grid-cols-2 py-16 gap-y-5'>
                        <div className='flex flex-row items-center gap-3 whitespace-nowrap'>
                            <span className='p-2 bg-amber-500 text-white rounded-full'>
                                <ShoppingCart size={16} weight="fill" />
                            </span>
                            Compra simples e segura
                        </div>
                        <div className='flex flex-row items-center gap-3 whitespace-nowrap'>
                            <span className='p-2 bg-neutral-800 text-white rounded-full'>
                                <Package size={16} weight="fill" />
                            </span>
                            Embalagem mantém o café intacto
                        </div>
                        <div className='flex flex-row items-center gap-3 whitespace-nowrap'>
                            <span className='p-2 bg-yellow-500 text-white rounded-full'>
                                <Timer size={16} weight="fill" />
                            </span>
                            Entrega rápida e rastreada
                        </div>
                        <div className='flex flex-row items-center gap-3 whitespace-nowrap'>
                            <span className='p-2 bg-violet-500 text-white rounded-full'>
                                <Coffee size={16} weight="fill" />
                            </span>
                            O café chega fresquinho até você
                        </div>
                    </div>
                </aside>
                <div className='hidden lg:flex justify-end'>
                    <img src={bannerImg} alt="Imagem de um café" />
                </div>
            </div>
        </div>
    )
}