import { Qrcode } from "../../components/Qrcode";

const Analytics = async ({params} : any) => {
    const { snip }  = await params;
    return <div className="flex justify-center mt-20 sm:mt-35 mb-40">
        <div className="flex flex-col justify-center">
            <div className="border border-slate-400 rounded-md">
                <Qrcode snip={snip}/>
            </div>
        </div>
    </div>
}

export default Analytics;
