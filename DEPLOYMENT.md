# Deployment Instructions for Namecheap

## Step 1: Build Your React App

Run this command in your project directory:
```bash
npm run build
```

This creates a `dist` folder with your production files.

## Step 2: Access Namecheap cPanel

1. Log into your Namecheap account
2. Go to your hosting dashboard
3. Click "cPanel" to open the control panel

## Step 3: Upload Your Files

### Using File Manager:
1. In cPanel, open **File Manager**
2. Navigate to `public_html` folder
3. Delete any existing files (like index.html, etc.)
4. Upload ALL files from your `dist` folder to `public_html`
5. The `send-email.php` file should also be in `public_html`

### Using FTP (Alternative):
1. Use an FTP client like FileZilla
2. Get your FTP credentials from Namecheap cPanel
3. Upload all `dist` folder contents to `public_html`
4. Upload `send-email.php` to `public_html`

## Step 4: Configure the PHP Script

1. Open `send-email.php` in the File Manager editor
2. Change this line to your actual business email:
   ```php
   $to = 'support@calitech-solutions.com'; // Replace with your email
   ```
3. Save the file

## Step 5: Set File Permissions

1. Right-click on `send-email.php` in File Manager
2. Click "Change Permissions"
3. Set to `644` (Owner: Read/Write, Group: Read, Public: Read)

## Step 6: Test Your Contact Form

1. Visit your domain: `https://yourdomain.com/contact`
2. Fill out and submit the form
3. Check your email inbox (and spam folder) for the message

## Troubleshooting

### Form doesn't send:
- Check that `send-email.php` is in the `public_html` folder
- Verify file permissions are set to 644
- Check your browser console for errors
- Make sure your Namecheap hosting includes email support

### Email not received:
- Check spam/junk folder
- Verify the email address in `send-email.php` is correct
- Some shared hosting blocks the mail() function - contact Namecheap support if needed

### 404 Error on form submission:
- Make sure `send-email.php` is uploaded to `public_html`
- Check that the file name is exactly `send-email.php` (case-sensitive)

## Important Notes

1. **Update the email address** in `send-email.php` before deploying
2. The form currently uses `/send-email.php` as the endpoint - this works because both the React app and PHP file are in the same directory
3. Make sure your Namecheap hosting plan includes PHP and email support
4. You may need to wait a few minutes after uploading for changes to take effect

## Future Enhancements

Consider adding:
- reCAPTCHA to prevent spam
- Email confirmation to the sender
- Better error handling
- Form submission logging
