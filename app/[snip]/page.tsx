import { redirect} from 'next/navigation';
import prisma from '../../lib/prisma'

const SnipRedirect = async ({params}: any) =>  {
    const { snip } = await params;

    const response = await prisma.url.update({
        where : { snip },
        data : {
            clicks: {
                increment: 1
            }
        },
        select: {
            originalUrl: true
        }
    });
    
    if(!response){
        return <div>not found</div>
    }

    redirect(response.originalUrl);
}

export default SnipRedirect;