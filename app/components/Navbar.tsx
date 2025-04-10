import { Link2 } from 'lucide-react';

export const Navbar = () => {
    return <div className="p-7">
        <div className="flex">
            <div className="flex flex-col justify-center mr-1">
                <Link2/>
            </div>
            <div className="font-bold text-xl">Snip</div>
        </div>
    </div>
}