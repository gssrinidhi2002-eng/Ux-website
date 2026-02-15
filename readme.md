# Portfolio Website - Srinidhi G.S

A minimalist portfolio website inspired by Isaac Blankensmith's design, built with vanilla HTML, CSS, and JavaScript.

## 🚀 How to View Your Website

1. **Simply open the `index.html` file in any web browser:**
   - Double-click on `index.html`, or
   - Right-click on `index.html` → "Open With" → Choose your browser (Chrome, Safari, Firefox, etc.)

2. **That's it!** Your website will load in the browser.

## ✏️ How to Edit Your Content

**All your website content is in ONE FILE:** `js/data.js`

### To Update Your Content:

1. **Open `js/data.js` in any text editor:**
   - Right-click on the file → "Open With" → TextEdit (Mac) or Notepad (Windows)
   - Or use VS Code, Sublime Text, etc. if you have them installed

2. **Find the section you want to edit** (all sections are clearly labeled with comments):
   - **Personal Info** - Your name, title, bio, contact info
   - **Work Experience** - Your job history and achievements
   - **Education** - Your degrees and educational background
   - **Skills** - Your skills organized by category
   - **Projects** - Your portfolio projects (currently has 6 placeholder projects)

3. **Edit the text between the quotes** `" "`:
   ```javascript
   // BEFORE:
   name: "Srinidhi G.S",
   
   // AFTER (example):
   name: "Your New Name",
   ```

4. **Save the file** (Cmd+S or Ctrl+S)

5. **Refresh your browser** to see the changes!

### Common Edits:

#### Changing Your Name or Bio
```javascript
personal: {
  name: "Your Name Here",  // ← Edit this
  title: "Your Title",     // ← Edit this
  headerBio: "Your short bio...",  // ← Edit this
```

#### Adding/Editing Projects
```javascript
projects: [
  {
    id: "project-name",  // ← Unique ID (lowercase, no spaces)
    title: "Project Title",  // ← What to display
    description: "One-line description",  // ← Short description
    tags: ["TAG1", "TAG2"],  // ← Category tags
    thumbnail: "images/projects/project1.jpg",  // ← Thumbnail image
    // ... more fields below
  }
]
```

#### Updating Contact Info
```javascript
email: "your-email@example.com",  // ← Your email
linkedin: "https://linkedin.com/in/yourprofile",  // ← Your LinkedIn URL
behance: "https://behance.net/yourprofile",  // ← Your Behance URL
```

## 📸 How to Add Your Own Images

### Profile Photo:
1. Add your photo to the `images/` folder
2. Name it `profile.jpg` (or update `data.js` to match your filename)

### Project Images:
1. Add your project images to the `images/projects/` folder
2. Update the image paths in `data.js`:
   ```javascript
   thumbnail: "images/projects/your-image.jpg",
   images: [
     "images/projects/your-image-1.jpg",
     "images/projects/your-image-2.jpg"
   ]
   ```

**Note:** Currently using placeholder images. The website will automatically use placeholder images for any missing image files.

## 📁 File Structure

```
├── index.html          # Home page (don't edit)
├── about.html          # About page (don't edit)
├── project.html        # Project template (don't edit)
├── css/
│   └── style.css      # Website styling (don't edit unless you know CSS)
├── js/
│   ├── data.js        # ⭐ YOUR CONTENT - EDIT THIS FILE
│   └── main.js        # Website functionality (don't edit)
├── images/
│   ├── profile.jpg    # Your profile photo (replace this)
│   └── projects/      # Your project images (add your images here)
└── README.md          # This file
```

## 🎨 Design Features

- **Minimalist aesthetic** matching Isaac Blankensmith's portfolio
- **Responsive design** - works on desktop, tablet, and mobile
- **Clean typography** using Inter font (similar to Suisse Int'l)
- **Two-column project grid** on desktop, single column on mobile
- **Smooth interactions** and hover effects
- **SEO optimized** with proper meta tags

## ⚠️ Important Notes

### What You SHOULD Edit:
- ✅ `js/data.js` - All your content
- ✅ Images in `images/` and `images/projects/`

### What You SHOULD NOT Edit (unless you know what you're doing):
- ❌ `index.html`, `about.html`, `project.html`
- ❌ `css/style.css` (unless you want to change colors/fonts)
- ❌ `js/main.js`

## 🆘 Troubleshooting

**Q: Changes don't appear when I refresh the browser?**
- Make sure you saved the `data.js` file
- Try doing a hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Make sure you're editing the correct `data.js` file

**Q: Images aren't showing?**
- Check that the image file is in the `images/` or `images/projects/` folder
- Make sure the filename in `data.js` exactly matches your image file name
- Image paths are case-sensitive!

**Q: I broke something, how do I fix it?**
- Check that you didn't accidentally delete any quotes `"` or commas `,`
- Each line should end with a comma (except the last item in a section)
- If needed, you can restore from backup or ask for help

## 🚀 Next Steps

1. **Replace placeholder projects** with your real project data in `data.js`
2. **Add your profile photo** to `images/profile.jpg`
3. **Add project images** to `images/projects/`
4. **Test on mobile** - resize your browser to check responsive design
5. **Deploy online** - Upload to GitHub Pages, Netlify, or Vercel (ask for help if needed)

## 📝 Quick Reference

**To edit content:** Open `js/data.js` → Edit text between quotes → Save → Refresh browser

**To add images:** Put images in `images/` or `images/projects/` → Update paths in `data.js`

**To view website:** Open `index.html` in your browser

---

**Need help?** If you run into any issues or want to make changes beyond editing content in `data.js`, just ask!
