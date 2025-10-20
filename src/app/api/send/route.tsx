import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { firstname, email, message } = await req.json();
    console.log(req);
    const { data, error } = await resend.emails.send({
        from: email,
        to: ["randria.ainaniri@gmail.com"],
        subject: "Portfolio Message",
        react: EmailTemplate({ firstName: firstname, content: message }),
    });

    console.log(error);
    if (error) {
        return NextResponse.json(
            { message: "Error sending email" },
            { status: 500 }
        );
    }

    return NextResponse.json({
        message: "Email sent successfully",
        data,
    });
}