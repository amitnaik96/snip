"use client"
import { Input } from "@/components/ui/input"
import { Scissors } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { SnipList } from './SnipList';
import { useState } from 'react';
import axios from 'axios';

export const Hero = () => {
    const [ url, setUrl ] = useState<string>('');
    const [snip, setSnip] = useState('');
    const [snips, setSnips] = useState<{url: string, snip: string}[]>([{
        url: "https://github.com/amitnaik96/snip",
        snip: "6RC0QE"
    }]);

    async function submit(){
        const response = await axios.post('/api/url/create', {
            url 
        });
        const newSnip = response.data.snip
        setSnip(newSnip);

        setSnips(prev => [{ url, snip: newSnip }, ...prev]);
    }

    return <div className="flex justify-center mt-20 sm:mt-35 mb-40">
        <div className="flex flex-col justify-center w-80 sm:w-auto">
            <div className="text-2xl sm:text-4xl font-bold font my-5">Big links? Nah, we keep it <span className="text-[#0284c7]">minimal.</span></div>
            <div className="m-auto">
                <div>
                    <div className="font-caveat text-slate-700 hidden sm:block dark:text-gray-400">https://veryhugeurl.com/users/profile/posts/A23BC</div>
                    <div className="font-caveat text-slate-700 block sm:hidden dark:text-gray-400">https://veryhugeurl.com/users/profile</div>
                    <div className="flex justify-center">
                        <img src="arrow.svg" alt="" width="70" className="text-slate-600 block dark:hidden"/>
                        <img src="white-arrow.svg" alt="" width="70" className="text-slate-600 hidden dark:block"/>

                    </div>
                    <div className="ml-10 sm:ml-60 font-caveat mb-5 text-[#0284c7]">https://snip.realamit.xyz/urKLFo</div>
                </div>
            </div>
            <div className="flex gap-2 w-80 sm:w-auto">
                <Input onChange={e => setUrl(e.target.value)} placeholder="Enter your url..." className="border border-slate-300"/>
                <Button onClick={submit} size="icon" className="px-3"><Scissors/></Button>
            </div>
            <SnipList snips={snips}/>
        </div>
    </div>
}