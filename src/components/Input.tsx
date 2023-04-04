import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    styles?: string
}

export function Input({ styles, ...rest }: InputProps) {
    return <input {...rest} className={`px-4 py-3 border rounded-md font-sans text-sm font-normal text-[#8D8686] border-[#E6E5E5] bg-[#EEEDED] ${styles}`} />
}