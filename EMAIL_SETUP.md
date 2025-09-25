# 🚨 **GMAIL AUTHENTICATION ERROR - QUICK FIX**

You're seeing "Username and Password not accepted" because your Gmail authentication isn't set up correctly.

## 🔧 **IMMEDIATE SOLUTION**

I've created two options for you. Let's go with the **easier EmailJS option** first:

### **Option A: EmailJS (Recommended - 5 minutes setup)**

**Step 1: Create EmailJS Account**
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up (free)
2. Verify your email address

**Step 2: Connect Gmail Service**
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service" → Choose "Gmail"
3. Click "Connect Account" and authorize with your Gmail
4. Copy the **Service ID** (like: `service_abc123`)

**Step 3: Create Email Template**
1. Go to "Email Templates" → "Create New Template"
2. Set Template Name: "Portfolio Contact"
3. Use this content:
   ```
   Subject: New Contact: {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```
4. Copy the **Template ID** (like: `template_xyz789`)

**Step 4: Get Public Key**
1. Go to "Account" → "General"
2. Copy your **Public Key** (like: `user_def456`)

**Step 5: Add to Your Project**
Create/update `.env.local`:
```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Step 6: Switch Component**
In `src/app/page.tsx`, change:
```tsx
import Contact from "@/components/Contact";
```
to:
```tsx
import Contact from "@/components/ContactEmailJS";
```

### **Option B: Fix Gmail (If you prefer current setup)**

**Step 1: Enable 2-Factor Authentication**
1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable "2-Step Verification" if not already enabled

**Step 2: Generate App Password**  
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select "Mail" app and "Other" device
3. Name it "Portfolio Contact Form"
4. **Copy the 16-character password** (remove spaces!)

**Step 3: Update .env.local**
Replace the password in `.env.local`:
```env
EMAIL_USER=bh302333@gmail.com
EMAIL_PASS=your_16_char_password_no_spaces
```

## 🚀 **QUICK START - EMAILJS**

Let's switch to EmailJS right now:

This guide will help you set up the email functionality for your portfolio contact form.

## 📧 How It Works

When someone fills out the contact form on your portfolio:
1. **You receive an email** with their contact details and message
2. **They receive an auto-reply** confirming that you got their message
3. Both emails are beautifully formatted with HTML

## 🚀 Quick Setup (Gmail)

### Step 1: Enable 2-Factor Authentication
1. Go to your [Google Account](https://myaccount.google.com/)
2. Navigate to "Security" → "2-Step Verification"
3. Follow the prompts to enable 2FA

### Step 2: Generate App Password
1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" as the app
3. Select "Other (custom name)" as the device
4. Enter "Portfolio Contact Form" as the name
5. Click "Generate"
6. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update Environment Variables
1. Open `.env.local` file in your project root
2. Replace `your_gmail_app_password_here` with the app password you just generated:
   ```
   EMAIL_USER=bh302333@gmail.com
   EMAIL_PASS=abcd efgh ijkl mnop
   ```
   **Note:** Remove the spaces from the app password: `abcdefghijklmnop`

### Step 4: Test the Form
1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out the form and submit
4. Check your Gmail inbox for the new message!

## 🔧 Alternative Email Providers

### Outlook/Hotmail
```env
EMAIL_USER=your_email@outlook.com
EMAIL_PASS=your_password
```

Update the transporter in `/src/app/api/contact/route.ts`:
```javascript
service: 'hotmail', // or 'outlook'
```

### Yahoo
```env
EMAIL_USER=your_email@yahoo.com
EMAIL_PASS=your_app_password
```

Update the transporter:
```javascript
service: 'yahoo',
```

### Custom SMTP
```env
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=your_email@yourdomain.com
EMAIL_PASS=your_password
```

Update the transporter:
```javascript
host: process.env.EMAIL_HOST,
port: parseInt(process.env.EMAIL_PORT || '587'),
secure: false, // true for 465, false for other ports
```

## 🛡️ Security Notes

1. **Never commit `.env.local`** - it's already in `.gitignore`
2. **Use App Passwords** for Gmail (not your regular password)
3. **Keep credentials secure** - don't share them publicly
4. For production, use environment variables in your hosting platform

## 🚀 Deployment

### Vercel
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - `EMAIL_USER`: `bh302333@gmail.com`
   - `EMAIL_PASS`: `your_app_password`

### Netlify
1. Go to Site settings → Environment variables
2. Add the same variables as above

## 📝 Email Templates

The system sends two emails:

### 1. To You (Portfolio Owner)
- Subject: "New Portfolio Contact: [Name]"
- Contains sender's details and message
- Includes reply button for easy response

### 2. Auto-reply to Sender
- Subject: "Thanks for contacting me!"
- Professional acknowledgment
- Includes your social media links
- Sets expectation for response time

## 🎨 Customization

To customize the email templates, edit `/src/app/api/contact/route.ts`:

- **Change email styling**: Modify the HTML in `mailToOwner` and `autoReply`
- **Update response time**: Change "24-48 hours" in the auto-reply
- **Add more details**: Include phone number, website, etc.

## 🔍 Troubleshooting

### Common Issues:

**Error: Invalid login**
- Make sure you're using an App Password, not your regular password
- Ensure 2FA is enabled on your Google account

**Error: Connection timeout**
- Check your internet connection
- Try a different email service

**Form not submitting**
- Check browser console for errors
- Verify API route is accessible at `/api/contact`

**Not receiving emails**
- Check spam/junk folder
- Verify EMAIL_USER is your actual email address
- Test with a different email service

### Testing Tips:
1. Use your own email as the sender to test both emails
2. Check server logs for detailed error messages
3. Try sending from different email addresses

## 📞 Support

If you need help setting this up, feel free to:
- Open an issue on GitHub
- Contact me directly
- Check the Next.js documentation for API routes

---

**That's it! Your contact form is now ready to receive messages directly to your inbox! 🎉**