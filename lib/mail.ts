"use server"
import nodemailer from 'nodemailer';

export async function sendMail({ to, name, subject, body }: { to: string, name: string, subject: string, body: string }) {
    console.log("🚀 ~ sendMail ~ data:", { to, name, subject, body });


    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
            pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
        }
    });
    try {
        const testResult = await transport.verify();
        console.log("Test result", testResult);
    } catch (err) {
        console.error("err", err);
        return;
    }
    try {
        const sendResult = await transport.sendMail({
            from: process.env.NEXT_PUBLIC_SMTP_EMAIL,
            to,
            subject,
            html: body
        });
        console.log("🚀 ~ sendMail ~ sendResult:", sendResult)
    } catch (err) {
        console.error("err", err);
        return;
    }
}
