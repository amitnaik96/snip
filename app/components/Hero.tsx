"use client"
import { Input } from "@/components/ui/input"
import { Scissors } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import axios from 'axios';

export const Hero = () => {
    const [ url, setUrl ] = useState<string>('');
    const [snipUrl, setSnipUrl] = useState('');

    async function submit(){
        const response = await axios.post('/api/url/create', {
            url 
        });
        setSnipUrl(response.data.snipUrl);
    }

    return <div className="flex justify-center mt-45">
        <div className="flex flex-col justify-center">
            <div className="text-4xl font-bold font my-5">Big links? Nah, we keep it minimal.</div>
            <div className="m-auto">
                <div>
                    <div className="font-caveat text-slate-700">https://veryhugeurl.com/users/profile/posts/A23BC</div>
                    <div className="flex justify-center">
                        <img src="arrow.svg" alt="" width="70" className="text-slate-600"/>
                    </div>
                    <div className="ml-60 font-caveat mb-5 text-slate-900">https://snip.realamit.xyz/urKLFo</div>
                </div>
            </div>
            <div className="flex gap-2">
                <Input onChange={e => setUrl(e.target.value)} placeholder="Enter your url..." className="border border-slate-300"/>
                <Button onClick={submit} variant="outline" size="icon" className="bg-[#22223b]"><Scissors className="text-white"/></Button>
            </div>
            {
                snipUrl !== ''
                &&
                <div>{snipUrl}</div>
            }
        </div>
    </div>
}