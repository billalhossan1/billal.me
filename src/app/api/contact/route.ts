import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for you (recipient)
    const mailToOwner = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email address
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 20px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            
            <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">Message</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #667eea; border-radius: 5px;">
              <p style="white-space: pre-line; margin: 0;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background: #e8f4f8; border-radius: 5px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Reply to this person:</strong> 
                <a href="mailto:${email}?subject=Re: Your message from portfolio" style="color: #667eea;">${email}</a>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the sender
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">Thank you for reaching out!</h2>
          </div>
          <div style="padding: 20px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <p>Hi ${name},</p>
            
            <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
            
            <div style="background: white; padding: 15px; border-left: 4px solid #667eea; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0; color: #666;"><strong>Your message:</strong></p>
              <p style="white-space: pre-line; margin: 10px 0 0 0;">${message}</p>
            </div>
            
            <p>I typically respond within 24-48 hours. In the meantime, feel free to:</p>
            <ul>
              <li>Check out my projects on <a href="https://github.com/billalhossan1" style="color: #667eea;">GitHub</a></li>
              <li>Connect with me on <a href="https://www.linkedin.com/in/billal-hossan-92001b230" style="color: #667eea;">LinkedIn</a></li>
            </ul>
            
            <p>Best regards,<br><strong>Billal Hossan</strong><br>Flutter Developer & Software Engineer</p>
            
            <div style="margin-top: 30px; padding: 15px; background: #e8f4f8; border-radius: 5px; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                This is an automated response. Please don't reply to this email.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(autoReply);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}