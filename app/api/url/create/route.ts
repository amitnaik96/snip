import { NextResponse, NextRequest } from 'next/server';
import { nanoid } from 'nanoid';
import z from 'zod'; 
import prisma from '../../../lib/prisma';
import { UrlManager } from '../../../lib/store'

const bodySchema = z.object({
    url : z.string().url()
});

const r = UrlManager.getInstance();

export const POST = async (req: NextRequest) => {
    const body = await req.json();

    try {
        const parsedBody = bodySchema.safeParse(body);
        if(!parsedBody.success){
            return NextResponse.json({
                message: 'invalid inputs!'
            }, { status: 411 });
        }
        const url = parsedBody?.data?.url

        let snip = r.getSnip(url);
        if(!snip){
            const response = await prisma.url.create({
                data: {
                    originalUrl: url as string,
                    snip: nanoid(6)
                }
            });

            snip = response.snip;
            r.setSnip(url, snip);
        } 

        return NextResponse.json({
            snipUrl: `${process.env.SNIP_DOMAIN}/${snip}`
        });
    } catch (err) {
        return NextResponse.json({
            message: `${err}`
        }, {
            status: 500
        });
    }
}