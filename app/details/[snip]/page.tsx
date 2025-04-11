"use client"
import { Qrcode } from "../../components/Qrcode";
import { Copy } from 'lucide-react';
import { useParams, redirect } from 'next/navigation'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ClickChart } from '../../components/Chart';

const Details = () => {
    const { snip }  = useParams<{snip: string}>();
    const snipUrl = `${process.env.NEXT_PUBLIC_SNIP_DOMAIN}/${snip}`
    const [ originalUrl, setOriginalUrl] = useState('');
    const [clicks, setClicks] = useState('');

    useEffect(() => {
        try {
            async function init(){
                const response = await axios.get(`/api/url/details/?snip=${snip}`);
                setOriginalUrl(response?.data.originalUrl);
                setClicks(response.data.clicks);
            }
    
            init();
        } catch (err) {
            redirect('/');
        }

    }, [snip]);


    const copyToClipboard = (text: string) => {
        navigator?.clipboard?.writeText(originalUrl);
    };


    return <div className="flex justify-center mt-20 sm:mt-25 mb-40">
        <div className="flex flex-col justify-center">
            <div className="sm:w-auto">
                <div className="text-2xl font-bold">Link Details</div>
                <div className="flex gap-3 pr-sm:2 w-80 sm:w-auto mb-3">
                    <div className="flex flex-col justify-center">{originalUrl.slice(0,25)}...</div>
                    <button onClick={() => copyToClipboard}><Copy size={20}/></button>
                    <div className="hidden sm:block">
                        <img src="/right-arrow.svg" alt="" width="60" className="dark:hidden block"/>
                        <img src="/white-rarrow.svg" alt="" width="60" className="dark:block hidden"/>
                    </div>
                    <div className="hidden sm:flex flex-col justify-center text-[#0284c7]">{snipUrl}</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">

                    <div className="flex flex-col items-center sm:w-100 h-100 border border-slate-400 rounded-lg">
                        <div className="font-bold text-xl my-2">QR Code</div>
                        <Qrcode snip={snip}/>
                        <div className="text-sm text-gray-500 mt-2 mb-3">Scan this QR code to access your shortened URL</div>
                        <div className="flex gap-2">
                            <div className="flex flex-col justify-center text-[#0284c7]">{snipUrl}</div>
                            <button onClick={() => copyToClipboard}><Copy size={20}/></button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:w-100 h-100 border border-slate-400 rounded-lg">
                        <div className="font-bold text-xl my-2">Analytics</div>
                        <div className="mr-6">
                            <ClickChart clicks={Number(clicks)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Details;
