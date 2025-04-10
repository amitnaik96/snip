"use client"
import { Copy } from 'lucide-react';

export const Snip = ({url, snipUrl}: any) => {
    const copyToClipboard = (text: string) => {
        navigator?.clipboard?.writeText(snipUrl);
    };

    return <div className="flex justify-center gap-3 border border-slate-400 rounded-lg p-2 w-80 sm:w-150 mb-3">
        <div className="hidden sm:block flex flex-col justify-center">{url.slice(0,25)}...</div>
        <div className="hidden sm:block">
            <img src="./right-arrow.svg" alt="" width="60" className="dark:hidden block"/>
            <img src="./white-rarrow.svg" alt="" width="60" className="dark:block hidden"/>
        </div>
        <div className="flex flex-col justify-center">{snipUrl}</div>
        <button onClick={() => copyToClipboard}><Copy size={20}/></button>
    </div>
}