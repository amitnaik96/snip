"use client"
import QRCode from 'qrcode';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export const Qrcode = ({snip} : {snip: string}) => {
    const [qrcode, setQrcode] = useState<string>("");
    useEffect(() => {
        const snipUrl = `${process.env.NEXT_PUBLIC_SNIP_DOMAIN}/${snip}`
        async function init() {
            const qrCodeImage = await QRCode.toDataURL(snipUrl);
            setQrcode(qrCodeImage);
        }
        init();
    }, [snip]);

    return <div className="">
        <Image src={qrcode} alt="" width="200" className="rounded-lg"/>
    </div>
}