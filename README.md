# Shiv Singh — Portfolio

Personal portfolio website for **Shiv Singh**, Staff Analyst with 5+ years across Myntra, OLA, and Meesho. The site showcases data analytics projects, professional experience, and contact details.

**Live:** [shivbhanusingh.com](https://www.shivbhanusingh.com)

---

## About

Built on the [Hyperspace](https://html5up.net/hyperspace) template by HTML5 UP (CCA 3.0 license), heavily customised with a project portfolio, skills section, timeline, and contact form. Hosted on GitHub Pages with a custom domain.

---

## Site Structure

| Section | Page | Description |
|---|---|---|
| Home | `index.html` | Hero, About Me, Skills & Tools, Portfolio, Resume, Contact |
| Personal | `personal_life.html` | Background, upbringing, interests |
| Professional | `professional_page.html` | Career timeline across IIT BHU, Myntra, OLA, Meesho |
| Resume | `resume.html` | Embedded PDF viewer with download |
| Formel Skin | `formel_skin.html` | Case study — financial reconciliation + ops dashboard |
| Instacart | `instacart.html` | Customer behaviour analysis across 3.4M orders |
| E-commerce Sales | `ecom_sales.html` | KPI analysis across categories and payment modes |
| Expense Tracker | `expense.html` | Automated personal finance reporting via Python |
| Festive Retail | `diwali_sales.html` | Consumer segmentation during Indian festive season |
| Bike Sales | `bike_sales.html` | Excel dashboard on demographics and purchase decisions |
| Roller Coaster EDA | `roller_eda.html` | Exploratory analysis on ~1,200 US roller coasters |

---

## Projects

### Formel Skin — Case Study
**Tools:** SQL, Google BigQuery, Looker Studio, Google Slides

A two-part data analyst case study completed for a Berlin-based digital dermatology startup.

- **Task 1 — Financial Reconciliation:** Identified a €19,500 revenue gap (0.9% of net revenue) across five discrepancy categories using layered SQL modelling in BigQuery. Built an automated daily reconciliation mart to surface future discrepancies.
- **Task 2 — Ops Dashboard:** Designed a metrics framework anchored on an on-time case resolution North Star KPI. Found that P90 resolution time reached 134 hours and 27.4% of consultations were blocked by payment issues. Delivered a live Looker Studio dashboard for the ops team.

---

### Instacart Customer Analysis
**Tools:** Python, SQL, Tableau

Analysed 3.4 million grocery orders from 200,000 Instacart users to surface buying patterns and customer segments.

- Produce and Dairy & Eggs are top categories by order volume and reorder rate.
- Saturday afternoons and Sunday mornings are peak ordering windows.
- Reorder spikes consistently on days 7, 14, 21, and 30 — clear weekly and monthly cycles.
- Delivered a Tableau dashboard summarising department-level and temporal ordering behaviour.

---

### E-commerce Sales Analysis
**Tools:** Excel

Examined an Indian e-commerce dataset to identify KPI patterns across product categories, states, and payment modes.

- Uttar Pradesh is the highest-grossing state at 11.5% of orders.
- Prepaid orders consistently outperform COD: RTO 2% vs 15%, delivery rate 58% vs 55%.
- Prepaid share rises during the festive season, suggesting seasonality in payment preference.

---

### Personal Expense Tracker
**Tools:** Python

Built an automated pipeline that parses bank transaction emails, extracts structured spend data, and generates a monthly report.

- Parsed Gmail HTML bodies to extract amount, mode, source, and destination for every transaction.
- Lifetime spend tracked from July 2019: approximately ₹46L across all modes.
- UPI accounts for 81% of lifetime spend; Credit Card at 13%.
- High-value transactions spike on Sunday evenings; transaction volume peaks on Tuesdays after 8 PM.

---

### Festive Retail Consumer Segmentation
**Tools:** Python, Tableau

Exploratory data analysis on consumer purchase behaviour during the Indian festive season.

- Female buyers account for a higher share of both transaction count and total spend.
- The 26–35 age group is the highest-spending cohort, followed by 36–45.
- Top states: Uttar Pradesh, Maharashtra, Karnataka.
- Core buyer profile: married women aged 26–35, working in IT, Healthcare, or Aviation, buying Food, Clothing, and Electronics.

---

### Bike Sales Analysis
**Tools:** Excel

Excel dashboard exploring how customer demographics — age, income, commute distance, and region — influence bike purchase decisions.

- Males purchase bikes at a higher rate than females (56% vs 52%), with ~8% higher average income among male buyers.
- Middle-age buyers are the largest segment, with female middle-age buyers proportionally more active than males.
- Shorter commute distance correlates with higher purchase rates in the Pacific region, but this pattern does not hold in America and Europe.

---

### Roller Coaster EDA
**Tools:** Python

Exploratory data analysis on approximately 1,200 US roller coasters, examining relationships between speed, height, inversions, and year of introduction.

- Most coasters were introduced in 1999 and 2000.
- Speed distribution peaks in the 40–60 mph range.
- Strong positive correlation between height and speed; newer coasters tend to be faster than earlier ones.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3, SASS (via HTML5 UP base) |
| Scripting | Vanilla JavaScript |
| Charts | Tableau Public embeds, Looker Studio embeds |
| Contact form | [Formspree](https://formspree.io/) (no backend required) |
| Analytics | Google Analytics 4 |
| Hosting | GitHub Pages with custom domain (`shivbhanusingh.com`) |

---

## Skills Showcased

**Technical:** Python, SQL, Tableau, Excel, Pandas, BigQuery, Looker Studio, Git & GitHub

**Business:** A/B Testing, KPI Design, Customer Segmentation, Funnel & Cohort Analysis, Business Storytelling, Financial Reconciliation

---

## Local Development

No build step required. Open `index.html` directly in a browser, or serve locally:

```bash
# Python 3
python -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## License

Template: [HTML5 UP](https://html5up.net/) under the [CCA 3.0 license](https://html5up.net/license).
Content: © Shiv Singh. All rights reserved.
