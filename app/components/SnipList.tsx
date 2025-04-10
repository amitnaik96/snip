import { Snip } from './Snip';

export const SnipList = ({snips} : {snips: {url:string, snipUrl: string}[]}) => {
    return <div className="mt-5">
        <div className="text-xl font-bold mb-3">Recent Links</div>
        {
            snips.map((s:any) => <Snip url={s.url} snipUrl={s.snipUrl}/>)
        }
    </div>
}