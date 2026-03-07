# 🚀 Maksym Cherenov - Portfolio Landing Page

Modern dark-themed portfolio with smooth animations, contact form with EmailJS integration, and profile photo support.

## 📁 Files Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript with EmailJS integration
├── profile.jpg         # Your profile photo (optional)
└── README.md           # This file
```

## ✨ Features

- 🎨 **Dark theme** with blue accents
- 🖼️ **Profile photo support** (with fallback to initials)
- ✉️ **Working contact form** with EmailJS
- ⏳ **Loading states** and animations
- ✅ **Success/Error modals**
- 📱 **Fully responsive** design
- 🎯 **Smooth scroll** animations

## 🖼️ Adding Your Profile Photo

1. **Rename your photo** to `profile.jpg`
2. **Place it in the same folder** as `index.html`
3. **Supported formats:** `.jpg`, `.jpeg`, `.png`
4. **If no photo:** Shows "MC" initials automatically


## 🔧 Customization

### Change Colors

Edit in `style.css`:
```css
:root {
    --bg-primary: #0a0e1a;         /* Main background */
    --accent-primary: #4169e1;      /* Primary accent color */
    --accent-secondary: #5b8def;    /* Secondary accent */
    /* ... */
}
```

### Update Contact Info

Edit in `index.html` (Contact Section):
```html
<p><a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a></p>
<p><a href="tel:YOUR_PHONE">YOUR_PHONE</a></p>
<p>YOUR_LOCATION</p>
```

### Change Profile Stats

Edit in `index.html` (Hero Section):
```html
<span class="stat-value">5+</span>
<span class="stat-label">Years of Experience</span>
```

### Add/Edit Projects

Edit the Portfolio Section in `index.html`. Each project card:
```html
<div class="project-card fade-in">
    <div class="project-image">🌐</div>
    <div class="project-content">
        <div class="project-tags">
            <span class="tag">WordPress</span>
        </div>
        <h3>Project Name</h3>
        <p>Project description...</p>
    </div>
</div>
```

## 🚀 Deployment

### Option 1: GitHub Pages (Free)
1. Create GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select `main` branch
5. Your site: `https://username.github.io/repository-name/`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://www.netlify.com/)
2. Drag and drop your folder
3. Instant deployment!

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com/)
2. Import your GitHub repo
3. One-click deploy

## 🐛 Troubleshooting

### Profile Photo Not Showing
- Check filename is exactly `profile.jpg`
- Try different formats: `.jpg`, `.jpeg`, `.png`
- Make sure it's in the same folder as `index.html`
- Fallback "MC" initials will show if photo fails

### Email Not Sending
**Check console (F12) for errors:**

❌ `EmailJS is not configured`
→ Update `EMAILJS_CONFIG` in `script.js`

❌ `EmailJS is not loaded`
→ Check internet connection
→ Verify EmailJS script in `index.html`

❌ `Failed to send email`
→ Check Service ID, Template ID are correct
→ Verify email service is connected in EmailJS dashboard

✅ See `Simulated success` in console?
→ You're in DEMO MODE, set `USE_DEMO_MODE = false`

### Form Submits But No Email
1. Check EmailJS dashboard for quota limits (200/month free)
2. Verify "To Email" is set in your template
3. Check spam folder
4. Test template in EmailJS dashboard

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 💡 Tips

- **Test in demo mode first** before configuring EmailJS
- **Use browser console** (F12) to debug issues
- **Check EmailJS dashboard** for delivery logs
- **Keep Public Key in HTML**, not script.js
- **Free tier:** 200 emails/month
- **Emails instant** when configured correctly

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Support

Questions? Check:
- EmailJS docs: [docs.emailjs.com](https://www.emailjs.com/docs/)
- Open browser console (F12) for error messages
- Test sending from EmailJS dashboard first

---

**Remember:** Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your actual EmailJS credentials!

Good luck! 🎉
