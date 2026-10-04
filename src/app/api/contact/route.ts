import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { contactRateLimiter } from "@/lib/rate-limit";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

   
    const { success, limit, remaining, reset } =
      await contactRateLimiter.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many requests. Please wait a few minutes before trying again.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": String(limit),
            "X-RateLimit-Remaining": String(remaining),
            "X-RateLimit-Reset": String(reset),
            "Retry-After": String(
              Math.max(1, Math.ceil((reset - Date.now()) / 1000))
            ),
          },
        }
      );
    }

   
    const body = await request.json();

    
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form details.",
        },
        {
          status: 400,
        }
      );
    }

    const { fullName, email, message, website } = result.data;

    
    if (website) {
      
      return NextResponse.json(
        {
          success: true,
          message: "Your message has been sent successfully.",
        },
        {
          status: 200,
        }
      );
    }
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "solenecanopy@gmail.com", 
      replyTo: email,
      subject: `New Message from ${fullName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

   

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}