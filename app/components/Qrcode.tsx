"use client"
import QRCode from 'qrcode';
import { useState, useEffect } from 'react';

export const Qrcode = ({snip} : {snip: string}) => {
    const [qrcode, setQrcode] = useState<string>("");
    useEffect(() => {
        const snipUrl = `${process.env.SNIP_DOMAIN}/${snip}`
        async function init() {
            const qrCodeImage = await QRCode.toDataURL(snipUrl);
            setQrcode(qrCodeImage);
        }
        init();
    }, [snip]);

    return <div>
        <img src={qrcode} alt="" width="200"/>
    </div>
}