import { NextResponse, NextRequest } from 'next/server';
import z from 'zod'; 
import prisma from '@/lib/prisma';

export const GET = async (req: NextRequest) => {
    const searchParams = req.nextUrl.searchParams
    const snip = searchParams.get('snip')
  
    try {
        const response = await prisma.url.findUnique({
            where : { snip: snip || "" }
        }) ;

        return NextResponse.json({
            clicks: response?.clicks,
            originalUrl: response?.originalUrl
        });
    } catch (err) {
        return NextResponse.json({
            message: `${err}`
        }, {
            status: 500
        });
    }
}