# Shiv Bhanu Singh — Data Analytics Portfolio

A personal portfolio website showcasing data analytics projects, professional experience, and personal background.

**Live site:** [shivbhanusingh.com](https://www.shivbhanusingh.com/)

---

## Overview

Built using the [Hyperspace](https://html5up.net/hyperspace) template from HTML5 UP (CCA 3.0 license), customized to present a data analytics portfolio with sections for projects, professional experience, and resume.

## Sections

| Section | Description |
|---|---|
| Home | Introduction and welcome |
| About Me — Personal | A look into personal life and background |
| About Me — Professional | Work experience and career journey |
| Portfolio | Data analytics projects with write-ups |
| Resume | Downloadable resume |
| Get in Touch | Contact form |

## Projects

| Project | Description |
|---|---|
| Bike Sales Analysis | Sales trend analysis |
| Diwali Sales Analysis | Seasonal sales insights |
| E-commerce Sales Analysis | E-com performance metrics |
| Expense Tracker | Personal finance tracking |
| Instacart Analysis | Grocery ordering behaviour |
| Roller EDA | Exploratory data analysis |

## Tech Stack

- **HTML5 / CSS3 / JavaScript** — Static site
- **SASS** — Stylesheet preprocessing
- **GitHub Pages** — Hosting (custom domain via CNAME)

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io/) (free, no backend required). To activate it:

1. Sign up at [formspree.io](https://formspree.io/) using `shivbhanusingh08@gmail.com`
2. Create a new form — Formspree gives you a form ID (e.g. `xpzvwkrd`)
3. In `index.html`, replace `YOUR_FORM_ID` in the form `action` URL with your actual ID

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" ...>
```

Submissions will land directly in your inbox.

## Local Development

No build step required — open `index.html` directly in a browser, or serve it locally:

```bash
# Python 3
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

Template: [HTML5 UP](https://html5up.net/) under the [CCA 3.0 license](https://html5up.net/license).  
Content: © Shiv Bhanu Singh. All rights reserved.
