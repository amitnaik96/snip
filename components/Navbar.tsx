"use client"
import { Link2 } from 'lucide-react';
import { Github } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { ModeToggle } from './Toggle';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
    const router = useRouter();

    return <div className="p-7 sm:px-15 flex justify-between">
        <div onClick={() => router.push('/')} className="flex">
            <div className="flex flex-col justify-center mr-1">
                <Link2 className="text-[#0284c7]"/>
            </div>
            <div className="flex flex-col justify-center font-bold text-xl">Snip</div>
        </div>
        <div className="flex gap-2">
        <ModeToggle />
        <Button onClick={() => window.location.href = 'https://github.com/amitnaik96/snip'}>
            <Github />
            <div className="flex flex-col justify-center">Github</div>
        </Button>
        </div>
    </div>
}