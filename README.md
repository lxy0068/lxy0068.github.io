# Academic Homepage Template

A minimalist, easy-to-customize academic homepage for researchers. Built with pure HTML/CSS/JS, no build tools required.

## Features

- Single-page scrolling design
- Light/Dark theme toggle
- Chinese/English bilingual support
- YAML-based content management
- Video/GIF demo support (auto-resize)
- Google Analytics integration
- Visitor counter
- Mobile responsive
- GitHub Pages ready

## Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/academic-homepage.git
cd academic-homepage
```

### 2. Edit Configuration Files

All content is managed through YAML files in the `config/` directory:

| File | Purpose |
|------|---------|
| `site.yaml` | Website title, description, Google Analytics ID |
| `profile.yaml` | Your name, title, bio (bilingual) |
| `news.yaml` | News/updates timeline |
| `publications.yaml` | Publications list with demos |
| `projects.yaml` | Projects with media |
| `social.yaml` | Social links (add/remove freely) |

### 3. Add Your Assets

Replace placeholder files in `assets/`:

```
assets/
├── images/
│   └── avatar.jpg      # Your photo (recommended: 400x400px)
├── videos/
│   └── demo.mp4        # Your demo videos
└── files/
    └── cv.pdf          # Your CV
```

### 4. Local Preview

```bash
# Using Python
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### 5. Deploy to GitHub Pages

1. Push your repository to GitHub
2. Go to Settings → Pages
3. Select "Deploy from a branch" → `main` → `/ (root)`
4. Your site will be live at `https://yourusername.github.io/repo-name`

## Configuration Guide

### Profile (`config/profile.yaml`)

```yaml
name:
  en: "Your Name"
  zh: "你的名字"

title:
  en: "Master Student"
  zh: "硕士研究生"

bio:
  en: |
    Your bio in **Markdown** format.
  zh: |
    你的简介，支持 **Markdown** 格式。

avatar: "assets/images/avatar.jpg"
email: "your@email.com"
```

### Publications (`config/publications.yaml`)

```yaml
publications:
  - title: "Paper Title"
    authors: "**Your Name**, Coauthor One"  # Use ** to bold your name
    year: 2025
    type: "Conference"  # Conference | Journal | Preprint
    venue: "ICRA 2025"

    # Demo (video or gif)
    demo: "assets/videos/demo.mp4"
    demo_type: "video"  # video | gif

    # Links
    links:
      pdf: "https://arxiv.org/..."
      code: "https://github.com/..."
      project: "https://..."
```

### Projects (`config/projects.yaml`)

```yaml
projects:
  - title:
      en: "Project Name"
      zh: "项目名称"
    description:
      en: "Description in Markdown..."
      zh: "中文描述..."
    media: "assets/videos/project.mp4"
    media_type: "video"  # video | gif | image
    links:
      github: "https://github.com/..."
```

### Social Links (`config/social.yaml`)

```yaml
social:
  - name: "GitHub"
    icon: "github"
    url: "https://github.com/yourname"

  - name: "Google Scholar"
    icon: "google-scholar"
    url: "https://scholar.google.com/..."

  # Add or remove links as needed
```

Supported icons: `github`, `google-scholar`, `twitter`, `linkedin`, `email`, `orcid`, `researchgate`, `youtube`, `bilibili`, `zhihu`, `weibo`, `website`

### Google Analytics

1. Get your GA4 Measurement ID (starts with `G-`)
2. Add it to `config/site.yaml`:

```yaml
google_analytics_id: "G-XXXXXXXXXX"
```

## File Structure

```
website/
├── index.html              # Main page
├── css/
│   └── style.css           # Styles
├── js/
│   ├── main.js             # Main logic
│   ├── i18n.js             # Language switching
│   └── theme.js            # Theme toggle
├── config/                 # Edit these files
│   ├── site.yaml
│   ├── profile.yaml
│   ├── news.yaml
│   ├── publications.yaml
│   ├── projects.yaml
│   └── social.yaml
├── assets/
│   ├── images/
│   ├── videos/
│   └── files/
└── README.md
```

## Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    /* Light theme */
    --accent: #0066cc;
    --bg-primary: #ffffff;
    ...
}

[data-theme="dark"] {
    /* Dark theme */
    --accent: #4da6ff;
    --bg-primary: #121212;
    ...
}
```

### Layout

- Max content width: `--max-width: 900px`
- Navigation height: `--nav-height: 60px`
- Section spacing: `--section-gap: 80px`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT License

## Credits

- [Font Awesome](https://fontawesome.com/) - Icons
- [Inter Font](https://rsms.me/inter/) - Typography
- [js-yaml](https://github.com/nodeca/js-yaml) - YAML parsing
- [marked](https://github.com/markedjs/marked) - Markdown rendering
- [busuanzi](http://busuanzi.ibruce.info/) - Visitor counter
