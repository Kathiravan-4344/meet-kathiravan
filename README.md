# KATHIRAVAN V — Personal Full Stack Developer Portfolio

A modern, high-performance developer portfolio website designed for **KATHIRAVAN V**, **FULL STACK DEVELOPER**.

Built with semantic **HTML5**, **CSS3**, and **Vanilla JavaScript** (zero heavy frameworks, zero runtime bloat).

---

## 📁 Project Structure

```text
KATHIRAVAN-PORTFILIO/
├── index.html       # Main semantic HTML structure, SEO tags, accessible landmarks
├── style.css        # Pure CSS design system: emerald/mint green dark theme, glow effects, responsive breakpoints
├── script.js        # Vanilla JS: mobile navigation, scroll-reveal, back-to-top, toast feedback, modal
├── serve.js         # Zero-dependency local development server (Node.js)
└── README.md        # Documentation, customization guide & deployment instructions
```

---

## 🎨 Design System & Color Palette

Inspired by Murad Hossain's **AI Business Intelligence Dashboard — Finance & Operations** theme:
- **Main Background**: `#060907` (Deep obsidian dark canvas)
- **Secondary Background**: `#0A0F0C`
- **Cards Background**: `#0D1611` (Hover: `#121E17`)
- **Primary Emerald Green**: `#10B981`
- **Bright Tech-Green / Mint**: `#34D399`
- **Luminous Mint Highlight**: `#6EE7B7`
- **Deep Emerald Accent**: `#059669`
- **Main Text**: `#F0FAF4`
- **Secondary Text**: `#96ABA0`
- **Borders**: `rgba(16, 185, 129, 0.16)` (Hover: `rgba(52, 211, 153, 0.42)`)
- **Glow & Accents**: `rgba(16, 185, 129, 0.35)`
- **Typography**: 
  - Brand & Highlight Name: **Outfit** (Google Fonts)
  - Headings: **Space Grotesk** (Google Fonts)
  - Body: **DM Sans** (Google Fonts)
  - Code/Monospace: **SFMono / Consolas / Menlo**

---

## 🔗 Connected Profiles & Contact Details

All contact and social links are fully configured across the website:

| Channel | Destination / Value | Order in Connect Bar |
| :--- | :--- | :--- |
| **1. WhatsApp** | `https://wa.me/919080864542` (Number: `9080864542`) | 1st (Single line) |
| **2. Instagram** | `https://www.instagram.com/black._.heart._.141?vrfl=MTVwY2xrYnl4YTlmcw%3D%3D` | 2nd (Single line) |
| **3. LinkedIn** | `https://www.linkedin.com/in/kathiravan-v` | 3rd (Single line) |
| **4. GitHub** | `https://github.com/Kathiravan-4344` | 4th (Single line) |
| **5. Contact** | `tel:+919080864542` (Number: `+919080864542`) | 5th (Single line) |
| **Email** | `kathiravan.v.141@gmail.com` | Direct Mailto & One-Click Copy |

---

## 🚀 How to Run Locally

You have several easy options to preview and run your portfolio:

### Option 1: Using the Included Node.js Server (Recommended)
Open your terminal in the portfolio folder and run:
```bash
node serve.js
```
Then visit: `http://localhost:4173/` in your browser.

### Option 2: Using VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Direct Browser File
Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Brave, or Firefox.

---

## ✏️ Personal Details to Replace

Search for `USER NOTE:` in `index.html` and `script.js` to easily customize your personal links:

1. **Email Address**:
   - In `index.html` (Lines around Contact Section):
     - Replace `kathiravan.developer@example.com` in the `mailto:` link with your real email address.
     - Replace `kathiravan.developer@example.com` in the `data-email` attribute of `#copyEmailBtn`.
   - In `script.js`:
     - Update fallback email string inside the clipboard copy handler.

2. **LinkedIn URL**:
   - In `index.html`:
     - Replace `https://www.linkedin.com/in/kathiravan-v` with your actual LinkedIn profile URL (in the mobile drawer, hero section, and contact section).

3. **WhatsApp Number**:
   - In `index.html`:
     - Replace `91XXXXXXXXXX` in `https://wa.me/91XXXXXXXXXX` with your actual WhatsApp phone number (with country code, e.g., 91 for India followed by your 10-digit number).

4. **Contact / Phone Number**:
   - In `index.html`:
     - Replace `+91XXXXXXXXXX` in `tel:+91XXXXXXXXXX` with your real mobile/phone number.

5. **Instagram Username**:
   - In `index.html`:
     - Replace `your-username` in `https://instagram.com/your-username` with your Instagram handle.

6. **Resume / CV (Optional)**:
   - If you want to add a "Download Resume" button, you can place your `resume.pdf` in the root folder and add an `<a href="resume.pdf" download class="btn btn-secondary">Download Resume</a>` in the hero section.

---

## 🌐 How to Upload to GitHub and Deploy on Vercel

### Step 1: Initialize Git and Push to GitHub
If you haven't initialized Git yet:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Kathiravan V. portfolio website"

# Link to your GitHub repository
git remote add origin https://github.com/Kathiravan-4344/meet-kathiravan.git

# Push your code
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel (100% Free)
1. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account (`Kathiravan-4344`).
2. Click **"Add New..."** → **"Project"**.
3. Select your `meet-kathiravan` repository from the list.
4. Framework Preset: **Other** (Static HTML).
5. Root Directory: `./` (Leave as default).
6. Click **"Deploy"**.
7. In ~15 seconds, Vercel will give you a live production URL: **`https://meet-kathiravan.vercel.app/`** with free SSL, automatic global CDN, and automatic redeployment every time you `git push`!
