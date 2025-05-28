import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * API route for sending contact form emails
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a .env.local file in the root directory
 * 2. Add the following environment variables:
 *    EMAIL_USER=your-email@gmail.com
 *    EMAIL_PASS=your-16-character-app-password
 * 
 * 3. To get a Gmail App Password:
 *    - Go to your Google Account settings
 *    - Navigate to Security > 2-Step Verification > App passwords
 *    - Generate a new app password for "Mail"
 *    - Use the 16-character password (no spaces) as EMAIL_PASS
 * 
 * 4. For production deployment, set these environment variables in your hosting provider:
 *    - Vercel: Project Settings > Environment Variables
 *    - Netlify: Site Settings > Environment Variables
 *    - Other platforms: Check their documentation
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { name, email, idea } = await request.json();

    // Validate required fields
    if (!name || !email || !idea) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    // Note: You'll need to set up environment variables for this to work
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'guylevy210@gmail.com',
      subject: `פנייה חדשה מהאתר - ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2>פנייה חדשה מהאתר MVPing</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>שם:</strong> ${name}</p>
            <p><strong>אימייל:</strong> ${email}</p>
            <p><strong>הרעיון:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${idea.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">הודעה זו נשלחה מטופס יצירת הקשר באתר MVPing</p>
        </div>
      `,
      // Also include plain text version
      text: `
פנייה חדשה מהאתר MVPing

שם: ${name}
אימייל: ${email}
הרעיון: ${idea}

הודעה זו נשלחה מטופס יצירת הקשר באתר MVPing
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 