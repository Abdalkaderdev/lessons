# Lesson 05: Domains

## What You'll Learn
- What a domain name is
- How DNS works (simplified)
- Free vs paid domain options
- How to connect a custom domain to Vercel

---

## 1. What is a Domain?

A domain is your website's address — like `google.com` or `omar.dev`.

Without a domain, people would need to type an IP address like `76.76.21.21` to visit your site. Domains are human-friendly names that point to those addresses.

### Parts of a Domain
```
https://www.omar.dev
  |      |    |    |
  |      |    |    └── TLD (Top-Level Domain): .dev, .com, .io, .net
  |      |    └─────── Domain name: omar
  |      └──────────── Subdomain: www (optional)
  └─────────────────── Protocol: https (secure)
```

---

## 2. How DNS Works (Simplified)

DNS (Domain Name System) is like a phone book for the internet:

1. You type `omar.dev` in your browser
2. Your browser asks DNS: "What's the IP address for omar.dev?"
3. DNS replies: "It's `76.76.21.21`" (Vercel's server)
4. Your browser connects to that IP and loads the site

You don't need to understand all the technical details — just know that DNS connects your domain name to your server.

---

## 3. Domain Options

### Free Options
| Option | Example URL | Notes |
|--------|-------------|-------|
| Vercel subdomain | `my-site.vercel.app` | Free, automatic |
| GitHub Pages | `username.github.io` | Free, good for portfolios |
| Freenom (limited) | `my-site.tk` | Free but unreliable |

### Paid Domains (Recommended for Real Projects)
| Registrar | Price Range | Popular TLDs |
|-----------|-------------|-------------|
| [Namecheap](https://namecheap.com) | $8-15/year | .com, .dev, .io |
| [Cloudflare](https://cloudflare.com) | $8-10/year | At-cost pricing |
| [Google Domains](https://domains.google) | $12-14/year | .com, .dev |
| Vercel (built-in) | $10-20/year | Buy directly in Vercel |

**Tip:** `.com` is the most common. `.dev` is popular with developers. Start with the free Vercel subdomain until you're ready to invest.

---

## 4. Connecting a Custom Domain to Vercel

### Step 1: Buy a Domain
Choose a registrar and purchase your domain.

### Step 2: Add Domain in Vercel
1. Go to your project on [vercel.com](https://vercel.com)
2. Go to **Settings** → **Domains**
3. Type your domain (e.g., `omar.dev`) and click **Add**

### Step 3: Update DNS Records
Vercel will show you DNS records to add. Go to your registrar and add:

**Option A: Using Nameservers (Easiest)**
Change your nameservers to:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: Using A/CNAME Records**
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### Step 4: Wait
DNS changes take 5 minutes to 48 hours to spread worldwide (usually 10-30 minutes).

### Step 5: Verify
Vercel will automatically:
- Verify your domain
- Set up a free SSL certificate (HTTPS)
- Show a green checkmark when ready

---

## 5. Key Takeaways
- A domain is your website's human-readable address
- DNS translates domain names to server IP addresses
- Start with the free `.vercel.app` subdomain
- When ready, buy a domain ($8-15/year) and connect it to Vercel
- Vercel handles SSL certificates automatically

---

## Homework
1. Research domain names — check if your name or a cool project name is available
2. Understand the difference between `.com`, `.dev`, `.io`, and `.net`
3. (Optional) Buy a domain and connect it to your Vercel project
4. Explain to someone how DNS works in your own words
