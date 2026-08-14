# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static personal portfolio website for **João Victor Pedrosa** (Data Analyst), built to showcase his professional projects and attract recruiters/clients.

## Stack & constraints

- Pure HTML, CSS, and vanilla JavaScript only — **no frameworks** (no React, Vue, Django, etc.) and **no backend**.
- Hosted on GitHub Pages; the repo will be named `<username>.github.io`.
- External libraries only via CDN: Google Fonts (Inter / Space Grotesk) and AOS (Animate On Scroll).

## File structure

- `index.html` — single-page site, all sections in one file
- `css/style.css` — all styling
- `js/script.js` — all JS (AOS init, nav toggle/scroll interactions)
- `images/` — project screenshots and photos

`main.py` in the repo root is leftover PyCharm project boilerplate, unrelated to this static site — safe to ignore or delete.

## Running locally

No build step or dependencies. Open `index.html` directly in a browser, or serve it with a simple local server (`python -m http.server`, VS Code "Live Server", etc.) if testing something that requires HTTP rather than `file://`.

## Design system (already decided — follow these, don't re-derive)

- Dark background with a single accent color, defined as CSS custom properties in `:root` (colors, spacing scale, border-radius).
- Typography: Inter or Space Grotesk, loaded via Google Fonts.
- Generous white space, few elements per screen — modern "agency" portfolio feel, not a traditional long-resume layout.
- Mobile-first responsive layout using CSS Grid/Flexbox.
- Smooth scroll-reveal animations via the AOS library (CDN).
- Buttons and cards get a subtle hover microinteraction (slight elevation/transition).

## Page structure (single page, in this order)

1. **Hero** — name, role, short tagline
2. **Sobre mim** — short bio
3. **Skills** — grouped by category
4. **Projetos** — card grid; each card has image/screenshot, title, short description, tech tags, a "Ver código" (GitHub) button, and a "Ver demo" button *only if* the project has a live link
5. **Contato** — email, LinkedIn, GitHub

## Site content

Source of truth for what's rendered in `index.html`. If the user changes bio, skills, projects, or contact info, update both the HTML and this section together.

### Hero / About

- Name: João Victor Pedrosa
- Role: Analista de Dados
- Bio: Economista em formação (UFPA) e Analista de Dados, atualmente estagiando na Secretaria de Estado da Fazenda do Pará (SEFA-PA), onde aplica Python, estatística e Machine Learning a dados fiscais e econômicos. Experiência prévia no setor bancário com programação, transformando dados brutos em decisões — de webscraping e ETL a modelos preditivos e dashboards.

### Skills (grouped)

- **Linguagens**: Python, R, JavaScript, SQL
- **Dados & BI**: Power BI (DAX e M), Excel avançado (VBA), MySQL, SQL Server
- **Estatística & ML**: Regressão Linear/Logística, Séries Temporais, Inferência Estatística, Econometria, Scikit-learn, Prophet, XGBoost
- **Idiomas**: Português (nativo), Inglês (fluente)

### Projects

1. **PMPF Updater** — Sistema que automatiza a atualização do catálogo de preços PMPF (usado no cálculo de ICMS por substituição tributária) da SEFA-PA. Extrai tabelas de PDFs de portarias, compara com o catálogo em Excel e apresenta as mudanças numa interface web para revisão e aprovação — eliminando um processo antes feito manualmente, linha a linha.
   - Tech: Python, Streamlit, Camelot, Pandas
   - Código: https://github.com/victorpedrosa-ds/catalogo_updater
   - Demo: nenhuma

2. **Projeção de Arrecadação de Impostos do Pará** — Modelo de séries temporais com Prophet para projetar 12 meses de arrecadação dos principais impostos do Pará (ICMS, IPVA, ITCD), com dados públicos da SEFA-PA. Validação com Walk-Forward e Rolling Window, tuning via Grid Search, erro de 4% (MAPE) na previsão de ICMS.
   - Tech: Python, Prophet, Scikit-learn, Pandas
   - Código: https://github.com/victorpedrosa-ds/projecao_impostos_ofc
   - Demo: nenhuma

3. **PMPF Medicamentos** — Webscraping e tratamento de dados de PMPF (Preço Máximo ao Público Fixado) de medicamentos em diferentes estados brasileiros — primeiro projeto de dados do autor, também usado para praticar versionamento em Git.
   - Tech: Python, webscraping
   - Código: https://github.com/victorpedrosa-ds/PMPF-Medicamentos
   - Demo: nenhuma

### Contact

- Email: victorpedrosa.me@gmail.com
- LinkedIn: https://www.linkedin.com/in/joão-victor-pedrosa-836371253
- GitHub: https://github.com/victorpedrosa-ds
