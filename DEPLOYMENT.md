# Deployment Instructions for Namecheap

## Deployment Method 1: Git + SSH (Recommended)

This is the recommended method for quick updates. The repository is cloned on the server and you pull changes via Git.

### Initial Setup (One-Time)

#### 1. Enable SSH Access in cPanel

1. Log into cPanel
2. Search for "SSH Access"
3. Click "Manage SSH Keys"
4. Generate a new SSH key (if not already done):
   - Key Name: `mykey`
   - Key Type: RSA
   - Key Size: 4096
5. Click "Manage" → "Authorize" to activate the key

#### 2. Get SSH Connection Details

From cPanel SSH Access page, note:
- **Server IP address**
- **Port number** (usually 21098 for Namecheap)
- **Username** (your cPanel username)

#### 3. Clone Repository on Server

```bash
# Connect to server (replace with your actual credentials)
ssh username@server-ip -p 21098

# Navigate to home directory
cd /home/calitech

# Clone your repository
git clone https://github.com/yourusername/calitechsolutions.git repo

# Navigate into the cloned repository
cd repo/cts

# Switch to your working branch
git checkout kelly/design-website
```

#### 4. Important: Configure .gitignore

The `dist` folder must be tracked in Git since the server cannot build the project (no Node.js on shared hosting).

In your local `.gitignore`, **remove or comment out** the `dist` line:
```
# dist  (commented out so dist can be tracked)
dist-ssr
```

### Regular Deployment Workflow

Every time you want to update the live site:

#### Step 1: Make Changes Locally

Edit your files in VS Code or your preferred editor.

#### Step 2: Build the Project

```bash
cd /Users/kxclly/Documents/Coding/calitechsolutions
npm run build
```

This creates/updates the `dist` folder with production-ready files.

#### Step 3: Commit and Push to Git

```bash
git add .
git commit -m "Your descriptive commit message"
git push
```

The `dist` folder will be included in the commit.

#### Step 4: SSH into Server

```bash
ssh username@server-ip -p 21098
```

#### Step 5: Pull Latest Changes

```bash
cd /home/calitech/repo/cts
git pull
```

#### Step 6: Deploy to Live Sites

```bash
# Copy to main site
cp -r dist/* /home/calitech/public_html/

# Copy to marketing subdomain
cp -r dist/* /home/calitech/public_html/marketing/
```

#### Step 7: Verify Deployment

Visit your sites to confirm changes:
- Main site: https://calitech-solutions.com
- Marketing site: https://marketing.calitech-solutions.com

---

## Deployment Method 2: Manual File Upload

This is an alternative method if SSH is unavailable.

### Step 1: Build Your React App

Run this command in your project directory:
```bash
npm run build
```

This creates a `dist` folder with your production files.

### Step 2: Access Namecheap cPanel

1. Log into your Namecheap account
2. Go to your hosting dashboard
3. Click "cPanel" to open the control panel

### Step 3: Upload Your Files

#### Using File Manager:
1. In cPanel, open **File Manager**
2. Navigate to `public_html` folder
3. Delete old files (keep the `marketing` folder!)
4. Zip the contents of your `dist` folder
5. Upload the zip file to `public_html`
6. Right-click → Extract
7. Delete the zip file after extraction

#### Using FTP (Alternative):
1. Use an FTP client like FileZilla
2. Get your FTP credentials from Namecheap cPanel
3. Upload all `dist` folder contents to `public_html`
4. For marketing site: upload to `public_html/marketing/`

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

---

## Quick Reference - Git Method

**Local:**
```bash
npm run build
git add .
git commit -m "Update"
git push
```

**Server:**
```bash
ssh username@server-ip -p 21098
cd /home/calitech/repo/cts
git pull
cp -r dist/* /home/calitech/public_html/
cp -r dist/* /home/calitech/public_html/marketing/
```

---

## Directory Structure on Server

```
/home/calitech/
├── repo/cts/             # Git repository
│   └── dist/             # Built files from Git
└── public_html/
    ├── index.html        # Main site
    ├── assets/
    └── marketing/        # Subdomain
```

## Troubleshooting

**dist folder not showing after git pull:**
- Build locally first: `npm run build`
- Check dist is committed: `git status`
- Verify correct branch on server
- Check `.gitignore` doesn't exclude dist

**Changes not appearing on site:**
- Hard refresh browser (Cmd+Shift+R)
- Verify files copied: `ls -la /home/calitech/public_html/`
- Check file timestamps: `ls -lt /home/calitech/public_html/`

**Form doesn't send:**
- Check `send-email.php` is in `public_html`
- Verify permissions set to 644
- Update email address in PHP file

## Important Notes

1. **Always build before committing** - Server has no Node.js
2. **Branch awareness** - Match branches locally and on server
3. **Both sites update together** - Main and marketing get same files
4. **Contact form** - Update email in `send-email.php`
