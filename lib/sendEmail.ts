"use server";

import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils"
import React from "react";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {
    const message = formData.get("message")
    const senderEmail = formData.get("senderEmail")
    if(!message || typeof message !== "string"){
        return {
            error: "Invalid Message"
        }
    }
    if(!senderEmail || typeof senderEmail !== "string"){
        return {
            error: "Invalid Email"
        }
    }
    let data;
    try{
        data = await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: "lcs2020047@iiitl.ac.in",
            subject: "Message from contact form",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            })
        })
    }catch(error: unknown){
        return {
            error: getErrorMessage(error),
        }
    }
    return {
        data,
    };
}