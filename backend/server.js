const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Generate a unique form ID
const generateFormId = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `CF-${year}-${month}${day}-${random}`;
};

// Get formatted date and time
const getFormattedDateTime = () => {
  const date = new Date();
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Los_Angeles'
  }) + ' PST';
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  const formId = generateFormId();
  const submissionTime = getFormattedDateTime();

  // Admin email template
  const adminEmailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - MicroDigitall</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                background-color: #f8fafc;
                color: #333;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
            
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                border-radius: 12px;
                overflow: hidden;
            }
            
            .header {
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                color: white;
                padding: 30px 20px;
                text-align: center;
            }
            
            .header h1 {
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 8px;
            }
            
            .header p {
                font-size: 16px;
                opacity: 0.9;
            }
            
            .content {
                padding: 20px;
            }
            
            .submission-info {
                background: #f1f5f9;
                border-left: 4px solid #3b82f6;
                padding: 15px;
                margin-bottom: 20px;
                border-radius: 0 8px 8px 0;
            }
            
            .submission-info h2 {
                color: #1e40af;
                font-size: 16px;
                margin-bottom: 10px;
            }
            
            .submission-meta {
                display: flex;
                flex-direction: column;
                gap: 8px;
                font-size: 13px;
                color: #64748b;
            }
            
            .submission-meta span {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .form-data {
                background: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                overflow: hidden;
            }
            
            .form-field {
                border-bottom: 1px solid #e2e8f0;
                padding: 0;
            }
            
            .form-field:last-child {
                border-bottom: none;
            }
            
            .field-label {
                background: #f8fafc;
                padding: 12px 16px 8px;
                font-weight: 600;
                color: #1e40af;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .field-value {
                padding: 8px 16px 16px;
                word-break: break-word;
                line-height: 1.5;
                font-size: 14px;
            }
            
            .field-value.long-text {
                white-space: pre-wrap;
                max-height: none;
            }
            
            .priority-badge {
                display: inline-block;
                background: #fbbf24;
                color: #92400e;
                padding: 4px 10px;
                border-radius: 12px;
                font-size: 11px;
                font-weight: 600;
                text-transform: uppercase;
            }
            
            .footer {
                background: #1e293b;
                color: white;
                padding: 20px;
                text-align: center;
            }
            
            .footer h3 {
                color: #3b82f6;
                margin-bottom: 15px;
                font-size: 18px;
            }
            
            .contact-info {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-bottom: 16px;
                font-size: 13px;
            }
            
            .contact-info div {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
            
            .footer-note {
                font-size: 11px;
                color: #94a3b8;
                margin-top: 16px;
                padding-top: 16px;
                border-top: 1px solid #374151;
                line-height: 1.4;
            }
            
            .icon {
                width: 14px;
                height: 14px;
                fill: currentColor;
                flex-shrink: 0;
            }
            
            /* Desktop styles */
            @media (min-width: 601px) {
                .content {
                    padding: 40px;
                }
                
                .header {
                    padding: 30px 40px;
                }
                
                .header h1 {
                    font-size: 28px;
                }
                
                .submission-info {
                    padding: 20px;
                    margin-bottom: 30px;
                }
                
                .submission-info h2 {
                    font-size: 18px;
                }
                
                .submission-meta {
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: 20px;
                    font-size: 14px;
                }
                
                .form-field {
                    display: flex;
                }
                
                .field-label {
                    width: 140px;
                    padding: 20px;
                    border-right: 1px solid #e2e8f0;
                    min-height: 60px;
                    align-items: flex-start;
                    font-size: 14px;
                }
                
                .field-value {
                    flex: 1;
                    padding: 20px;
                    min-height: 60px;
                    display: flex;
                    align-items: flex-start;
                    font-size: 15px;
                }
                
                .message-field .field-value {
                    min-height: 120px;
                }
                
                .contact-info {
                    flex-direction: row;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 30px;
                    font-size: 14px;
                }
                
                .footer {
                    padding: 30px 40px;
                }
            }
            
            /* Extra small mobile devices */
            @media (max-width: 380px) {
                .email-container {
                    margin: 10px 5px;
                    border-radius: 8px;
                }
                
                .header {
                    padding: 20px 15px;
                }
                
                .header h1 {
                    font-size: 20px;
                }
                
                .header p {
                    font-size: 14px;
                }
                
                .content {
                    padding: 15px;
                }
                
                .submission-info {
                    padding: 12px;
                }
                
                .field-label {
                    padding: 10px 12px 6px;
                    font-size: 12px;
                }
                
                .field-value {
                    padding: 6px 12px 12px;
                    font-size: 13px;
                }
                
                .footer {
                    padding: 15px;
                }
                
                .contact-info div {
                    font-size: 12px;
                    text-align: center;
                }
            }
            
            /* Email client specific fixes */
            @media screen and (max-width: 600px) {
                .email-container {
                    width: 100% !important;
                    margin: 10px auto !important;
                }
                
                .form-field {
                    display: block !important;
                }
                
                .field-label,
                .field-value {
                    width: 100% !important;
                    display: block !important;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>MicroDigitall - Professional IT Services</p>
            </div>
            
            <div class="content">
                <div class="submission-info">
                    <h2>📋 Submission Details</h2>
                    <div class="submission-meta">
                        <span>
                            <svg class="icon" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                            </svg>
                            Received: ${submissionTime}
                        </span>
                        <span>
                            <svg class="icon" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                            </svg>
                            Form ID: ${formId}
                        </span>
                        <span class="priority-badge">New Lead</span>
                    </div>
                </div>
                
                <div class="form-data">
                    <div class="form-field">
                        <div class="field-label">
                            <svg class="icon" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                            </svg>
                            Full Name
                        </div>
                        <div class="field-value">${name}</div>
                    </div>
                    
                    <div class="form-field">
                        <div class="field-label">
                            <svg class="icon" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                            Email
                        </div>
                        <div class="field-value">${email}</div>
                    </div>
                    
                    <div class="form-field">
                        <div class="field-label">
                            <svg class="icon" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                            </svg>
                            Phone
                        </div>
                        <div class="field-value">${phone}</div>
                    </div>
                    
                    <div class="form-field">
                        <div class="field-label">
                            <svg class="icon" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                            </svg>
                            Subject
                        </div>
                        <div class="field-value">${subject}</div>
                    </div>
                    
                    <div class="form-field message-field">
                        <div class="field-label">
                            <svg class="icon" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"/>
                            </svg>
                            Message
                        </div>
                        <div class="field-value long-text">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <h3>MicroDigitall</h3>
                <div class="contact-info">
                    <div>
                        <svg class="icon" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                        </svg>
                        123 Tech Avenue, Silicon Valley, CA 94025
                    </div>
                    <div>
                        <svg class="icon" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        +1 (555) 123-4567
                    </div>
                    <div>
                        <svg class="icon" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        contact@microdigitall.com
                    </div>
                </div>
                <div class="footer-note">
                    This is an automated email notification from your website contact form.<br>
                    Please respond to the customer within 24 hours for optimal service.
                </div>
            </div>
        </div>
    </body>
    </html>
  `;

  // User thank you email template
  const userEmailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - MicroDigital</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f5f7fa;
                padding: 20px;
            }
            
            .email-container {
                max-width: 500px;
                margin: 0 auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
            }
            
            .header {
                background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
                padding: 40px 30px;
                text-align: center;
                color: white;
            }
            
            .logo {
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 8px;
                letter-spacing: 1px;
            }
            
            .content {
                padding: 40px 30px;
                text-align: center;
            }
            
            .thank-you {
                font-size: 32px;
                color: #1e40af;
                margin-bottom: 20px;
                font-weight: bold;
            }
            
            .message {
                font-size: 18px;
                line-height: 1.6;
                color: #4b5563;
                margin-bottom: 30px;
            }
            
            .highlight {
                background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                color: #1e40af;
                padding: 25px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 500;
                border: 1px solid #93c5fd;
            }
            
            .footer {
                background: #f8fafc;
                padding: 20px;
                text-align: center;
                color: #6b7280;
                font-size: 14px;
                border-top: 1px solid #e5e7eb;
            }
            
            @media (max-width: 600px) {
                .email-container {
                    margin: 10px;
                }
                
                .header, .content {
                    padding: 30px 20px;
                }
                
                .thank-you {
                    font-size: 28px;
                }
                
                .message {
                    font-size: 16px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Header -->
            <div class="header">
                <div class="logo">MicroDigital</div>
            </div>
            
            <!-- Main Content -->
            <div class="content">
                <h1 class="thank-you">Thank You! 🙏</h1>
                
                <div class="message">
                    <p>Thank you for showing interest in <strong>MicroDigital</strong>.</p>
                    <p>We appreciate you reaching out to us and look forward to connecting with you soon.</p>
                </div>
                
                <div class="highlight">
                    We'll get back to you within 24 hours!
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <p>&copy; 2024 MicroDigital. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;

  try {
    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${subject}`,
      html: adminEmailTemplate
    };

    // Send email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // User's email from the form
      subject: 'Thank you for contacting MicroDigital',
      html: userEmailTemplate
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);
    
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});