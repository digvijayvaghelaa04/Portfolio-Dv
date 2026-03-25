# 🚀 Backend Setup Guide (Optional)

This guide explains how to set up a Node.js + Express backend for your portfolio's contact form.

## 📁 Recommended Backend Structure

```
server/
├── controllers/
│   └── contactController.js    # Contact form logic
├── routes/
│   └── contactRoutes.js        # API routes
├── middleware/
│   ├── errorHandler.js         # Error handling
│   ├── rateLimiter.js          # Rate limiting
│   └── validator.js            # Request validation
├── config/
│   └── email.js                # Email configuration
├── utils/
│   └── emailService.js         # Email sending utility
├── .env                        # Environment variables
├── .env.example                # Environment template
├── server.js                   # Entry point
└── package.json                # Dependencies
```

## 🛠️ Step-by-Step Setup

### 1. Initialize Backend Project

```bash
# Create server directory
mkdir server
cd server

# Initialize Node.js project
npm init -y
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install express cors dotenv

# Email service
npm install nodemailer

# Security & validation
npm install express-rate-limit express-validator helmet

# Development tools
npm install --save-dev nodemon
```

### 3. Create Server Entry Point

**server/server.js**

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Contact API available at http://localhost:${PORT}/api/contact`);
});
```

### 4. Create Contact Controller

**server/controllers/contactController.js**

```javascript
const emailService = require('../utils/emailService');

exports.sendContactEmail = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Send email
    await emailService.sendEmail({
      from: email,
      fromName: name,
      subject: subject,
      message: message,
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    next(error);
  }
};
```

### 5. Create Routes

**server/routes/contactRoutes.js**

```javascript
const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');
const { validateContactForm } = require('../middleware/validator');
const rateLimiter = require('../middleware/rateLimiter');

// POST /api/contact
router.post('/', rateLimiter, validateContactForm, sendContactEmail);

module.exports = router;
```

### 6. Create Validation Middleware

**server/middleware/validator.js**

```javascript
const { body, validationResult } = require('express-validator');

exports.validateContactForm = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),
  
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),
  
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),

  // Validation result handler
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    next();
  },
];
```

### 7. Create Rate Limiter

**server/middleware/rateLimiter.js**

```javascript
const rateLimit = require('express-rate-limit');

// Limit each IP to 5 requests per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = contactLimiter;
```

### 8. Create Error Handler

**server/middleware/errorHandler.js**

```javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
```

### 9. Create Email Service (Nodemailer)

**server/utils/emailService.js**

```javascript
const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'smtp', 'sendgrid', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendEmail = async ({ from, fromName, subject, message }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: from,
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>From:</strong> ${fromName}</p>
          <p><strong>Email:</strong> ${from}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #e0e0e0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Email error:', error);
    throw new Error('Failed to send email');
  }
};
```

### 10. Create Environment Variables

**.env.example**

```env
# Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Email Configuration (Gmail Example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com

# Alternative: SendGrid
# SENDGRID_API_KEY=your-sendgrid-api-key

# Alternative: SMTP
# SMTP_HOST=smtp.yourprovider.com
# SMTP_PORT=587
# SMTP_USER=your-smtp-user
# SMTP_PASSWORD=your-smtp-password
```

**.env** (create this and add your actual credentials)

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

### 11. Update Package.json Scripts

**server/package.json**

```json
{
  "name": "portfolio-backend",
  "version": "1.0.0",
  "description": "Backend API for portfolio contact form",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["express", "api", "contact-form"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-rate-limit": "^6.7.0",
    "express-validator": "^7.0.1",
    "helmet": "^7.0.0",
    "nodemailer": "^6.9.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

## 🔧 Email Service Alternatives

### Option 1: Gmail (Quick Setup)

1. Enable 2-factor authentication in your Google account
2. Generate an App Password:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Create a new app password
   - Use this password in `.env`

### Option 2: SendGrid (Recommended for Production)

```javascript
// Install: npm install @sendgrid/mail
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = async ({ from, fromName, subject, message }) => {
  const msg = {
    to: process.env.RECIPIENT_EMAIL,
    from: process.env.VERIFIED_SENDER,
    replyTo: from,
    subject: `Portfolio Contact: ${subject}`,
    html: `...` // your HTML template
  };

  await sgMail.send(msg);
};
```

### Option 3: Custom SMTP

```javascript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
```

## 🔌 Frontend Integration

Update the Contact form in your React app:

**src/app/sections/Contact.tsx**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error('Error:', error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🚀 Running the Backend

### Development

```bash
# Terminal 1 - Run backend
cd server
npm run dev

# Terminal 2 - Run frontend
cd ..
npm run dev
```

### Production

```bash
cd server
npm start
```

## 🌐 Deployment Options

### Deploy to Heroku

```bash
# Install Heroku CLI
heroku login
heroku create your-portfolio-api

# Set environment variables
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set RECIPIENT_EMAIL=your-email@gmail.com

# Deploy
git push heroku main
```

### Deploy to Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Deploy to Vercel (Serverless)

Create `api/contact.js`:

```javascript
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Your email logic here...
  
  res.status(200).json({ success: true });
};
```

## 🔒 Security Best Practices

1. **Never commit `.env` file** - Add to `.gitignore`
2. **Use HTTPS in production**
3. **Implement rate limiting** - Prevent spam
4. **Validate all inputs** - Server-side validation
5. **Sanitize data** - Prevent injection attacks
6. **Use environment variables** - Never hardcode secrets
7. **Enable CORS properly** - Specify allowed origins
8. **Add CSP headers** - Content Security Policy
9. **Keep dependencies updated** - Regular security audits
10. **Monitor logs** - Track errors and suspicious activity

## 📊 Testing the API

### Using cURL

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message from the contact form."
  }'
```

### Using Postman

1. Create new POST request
2. URL: `http://localhost:5000/api/contact`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "subject": "Test Subject",
  "message": "This is a test message"
}
```

## 🐛 Common Issues & Solutions

### Gmail "Less secure app" error
- Enable 2-factor authentication
- Use App Password instead of account password

### CORS errors
- Check FRONTEND_URL in `.env`
- Ensure CORS middleware is configured correctly

### Email not sending
- Check email credentials
- Verify SMTP settings
- Check spam folder
- Enable "Less secure app access" (Gmail)

### Rate limiting too strict
- Adjust `windowMs` and `max` in rateLimiter.js

## 📚 Additional Resources

- [Nodemailer Documentation](https://nodemailer.com/)
- [Express.js Guide](https://expressjs.com/)
- [SendGrid API](https://sendgrid.com/docs/api-reference/)
- [Express Rate Limit](https://github.com/nfriedly/express-rate-limit)
- [Express Validator](https://express-validator.github.io/)

---

**Note**: This backend setup is optional. The frontend portfolio works perfectly without it, using client-side form validation and a simulated submission.

For production use, consider using serverless functions (Vercel, Netlify) or a full backend deployment (Railway, Heroku, AWS).
