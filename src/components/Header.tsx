import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../assets/Logo.svg'

export function Header() {
    return (
        <header className='flex justify-center w-full px-4 py-8 sticky top-0 bg-white z-10'>
            <div className='max-w-[1120px] w-full flex justify-between'>
                <img src={logo} alt="Logo" />
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-2 items-center p-2 rounded-[6px] text-sm bg-purple-100 text-purple-900'>
                        <MapPin size={22} weight="fill" />
                        Assis, SP
                    </div>

                    <button className='bg-amber-100 p-2 rounded-[6px] text-amber-600'>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </div>
        </header>
    )
}