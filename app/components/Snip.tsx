"use client"
import { Copy } from 'lucide-react';
import { useRouter } from 'next/navigation'

export const Snip = ({url, snip}: any) => {
    const router = useRouter(); 
    const snipUrl = `${process.env.NEXT_PUBLIC_SNIP_DOMAIN}/${snip}`

    const copyToClipboard = (text: string) => {
        navigator?.clipboard?.writeText(snipUrl);
    };

    return <div onClick={() => router.push(`/analytics/${snip}`)} className="flex justify-center gap-3 border border-slate-400 rounded-lg p-2 w-80 sm:w-150 mb-3">
        <div className="hidden sm:flex flex-col justify-center">{url.slice(0,25)}...</div>
        <div className="hidden sm:block">
            <img src="./right-arrow.svg" alt="" width="60" className="dark:hidden block"/>
            <img src="./white-rarrow.svg" alt="" width="60" className="dark:block hidden"/>
        </div>
        <div className="flex flex-col justify-center text-[#0284c7]">{snipUrl}</div>
        <button onClick={() => copyToClipboard}><Copy size={20}/></button>
    </div>
}