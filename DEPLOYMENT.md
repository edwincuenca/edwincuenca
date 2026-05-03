# Deployment Guide: Vercel + Cloudflare DNS

Follow these steps to publish your Cyberpunk Portfolio to the internet.

## 1. Push to GitHub
- Initialize a git repository.
- Push your code to a new GitHub repository.

## 2. Connect to Vercel
- Go to [vercel.com](https://vercel.com) and sign in.
- Click **"Add New"** > **"Project"**.
- Import your GitHub repository.
- Vercel will automatically detect the Vite framework.
- Click **"Deploy"**.

## 3. Configure Cloudflare DNS
Once your project is deployed on Vercel:
- In Vercel, go to **Settings** > **Domains**.
- Add your custom domain (e.g., `yourname.dev`).
- Vercel will provide the DNS records needed:
    - **A Record**: Usually `76.76.21.21`.
    - **CNAME Record**: Usually `cname.vercel-dns.com`.
- Go to your [Cloudflare Dashboard](https://dash.cloudflare.com).
- Select your domain and go to the **DNS** section.
- Add the records provided by Vercel.
- **IMPORTANT**: Set the Proxy status to **"DNS only"** (Grey cloud) for the Vercel records during initial validation. Once validated, you can switch to "Proxied" (Orange cloud) if desired, but ensure SSL is set to "Full" or "Full (Strict)" in Cloudflare's SSL/TLS settings.

## 4. Final Verification
- Your portfolio should now be live at your custom domain!
- Vercel will handle SSL (HTTPS) automatically.
