# Discount rates across contexts: meanings, frameworks and empirical ranges

*Literature review. Draft v1, 25 Sep 2026. Purpose: general understanding. Scope: global, with a Singapore emphasis.*

> **How to read the evidence.** During this research the network proxy blocked direct access
> to most primary pages. Figures were checked against search-engine extracts of the cited
> URL, not against the full PDF. Anything that could not be traced to a source is
> marked **UNVERIFIED**. Confirm headline numbers against the original document before
> quoting them; the priority list is in the [verification checklist](#9-verification-checklist).
> Rates are **% per year** throughout. They are **real** unless marked **(nominal)**.

---

## 1. Summary: one term, six different things

"Discount rate" always means the rate used to convert future values into present
values. But **what is being discounted, whose preferences or opportunity costs apply, and
whether risk is included** differ between fields. Numbers from different rows of the table below are **not
comparable** without adjusting for these differences.

| Context | What "discount rate" means there | Typical range found | Singapore reference points |
|---|---|---|---|
| **Public policy / cost-benefit analysis** | Social discount rate: society's trade-off between present and future wellbeing (Ramsey rule), or the opportunity cost of displaced capital | **1.5–3.5%** (time-preference based); **7–12%** (opportunity-cost based); **~2%** median expert view for climate | No published public-sector cost-benefit analysis rate found; ACE health technology assessment uses **3%** |
| **Individual time preference** | A person's impatience, i.e. the return they require to wait. Often hyperbolic or present-biased | **~0% to >100%**; meta-analytic mean ~**33%** (experiments); lifecycle ~**4%** long-run, ~**40%** short-run; implicit durable-goods rates ~**15–20%+** | No verified % estimates from experiments; long-horizon housing-revealed rates ~**0.5–4%** |
| **Corporate finance / asset pricing** | Required or expected return on a risky claim: cost of capital, WACC, hurdle rate | ERP **~4–5.5%**; median firm WACC **~7.8% (nominal)**; hurdle rates **~12–16% (nominal)** | Total ERP ≈ mature-market ERP **~4.2%**; 10-yr SGS yield **~2.4–2.5% (nominal)** |
| **Real estate** | Target IRR in a property discounted cash flow (DCF) valuation; related to cap rate ≈ discount rate − growth; long-horizon rates inferred from leasehold vs freehold prices | Housing: **<2.6%** at 100+ yrs, ~**7%** short-horizon total return; commercial DCF **~6.5–7.3% (nominal)** | Office cap rate **3.15–3.85%**, retail **4.35–6.20%**; HDB 4-room gross yield ~**6.2%**; Bala's Table implied **~3–3.5%** |
| **Macroeconomic models** | Discount factor β = 1/(1+ρ): the pure rate of time preference in models; the neutral real rate r\* as the economy's benchmark riskless rate | ρ ≈ **4%** (standard calibration); US r\* **<1% to >3%** depending on method | No published Singapore r\* estimate found |
| **Monetary policy** | *A different concept:* the rate a central bank charges banks for overnight loans (e.g. the Fed discount window) | Fed primary credit **4.00% (nominal, Sep 2026)**; ECB marginal lending **2.90%** | MAS targets the exchange rate, not a policy interest rate; MAS Standing Facility = reference rate ± 50 bp; SORA ~**1.2%** |

**Four points apply across all six contexts:**
1. **Horizon.** Evidence from housing, climate surveys and lifecycle models points to *declining* discount rates: high over short horizons, low (about 0.5–2.5%) over a century or more.
2. **Risk.** Rates that include a risk premium (WACC, property IRRs, opportunity-cost social discount rates) are systematically higher than riskless or time-preference rates.
3. **Real vs nominal.** Official social discount rates are real. Market and corporate rates are usually nominal. With Singapore's ~2.4% nominal SGS yield, the risk-free *real* rate is roughly 0.5–1% depending on expected inflation. That is an approximation, because Singapore issues no inflation-linked bonds.
4. **Measured rate vs pure preference.** Most measured rates bundle other factors: credit constraints, uncertainty, information gaps and tenure decay.

---

## 2. Public policy and cost-benefit analysis: the social discount rate

**Meaning.** The social discount rate converts the future costs and benefits of public projects,
regulations, health interventions and climate damages into present values. There are two main approaches.
- **Social rate of time preference (SRTP): the Ramsey rule r = δ + ηg.**
  - δ is pure time preference plus a catastrophe-risk allowance.
  - η is the elasticity of marginal utility, i.e. how fast an extra dollar becomes less valuable as people get richer.
  - g is growth in consumption per head.
  - This gives lower rates, typically **1.5–3.5%**.
- **Social opportunity cost of capital (SOC):** the pre-tax return that displaced private investment would have earned. This gives higher rates, **7–12%**.

Some countries add a project-specific risk premium (France, the Netherlands). Several use
**declining schedules** for long horizons, justified by uncertainty about future growth or rates
(Weitzman 2001; Arrow et al. 2013).

**Main debates:**
- Ethics: δ near zero (Stern) vs δ calibrated to market returns (Nordhaus).
- Whether health outcomes should be discounted at a lower rate than costs.
- Whether a risk premium belongs in the rate itself.

### 2.1 Official government guidance
| Jurisdiction | Rate | Basis | Source |
|---|---|---|---|
| UK | **3.5%** (yrs 1–30), 3.0% (31–75), declining further; **1.5%** health | SRTP | [HM Treasury Green Book discounting guidance](https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting) |
| UK (review) | Keep δ = 0.5%; drop the separate health rate. **Whether it has been adopted: UNVERIFIED** | Expert review (Freeman & Groom, Jun 2026) | [Green Book discount rate review 2026](https://www.gov.uk/government/publications/green-book-discount-rate-review-2026) |
| US (rules in force) | **7% and 3%** (Circular A-4, 2003). The 2023 revision (2.0%) was rescinded in 2025 | SOC / SRTP | [OMB A-4 (2003)](https://obamawhitehouse.archives.gov/omb/circulars_a004_a-4/); [M-25-15 rescission](https://www.whitehouse.gov/wp-content/uploads/2025/03/M-25-15-Recission-and-Reinstatement-of-Circular-A-4.pdf); [2023 appendix](https://bidenwhitehouse.archives.gov/wp-content/uploads/2023/11/CircularA-4Appendix.pdf) |
| US (federal programmes) | **7%** (A-94; the 2023/24 update was revoked in Apr 2025) | SOC | [ASFPM/FEMA note](https://www.floods.org/news-views/fema-news/fema-rolls-back-bca-rates-for-mitigation-projects/) |
| EU cohesion policy | **3%** (2021–27); earlier 5% cohesion countries / 3% others | SRTP | [JASPERS Vademecum 2021–27](https://jaspers.eib.org/knowledge/publications/economic-appraisal-vademecum-2021-2027-general-principles-and-sector-applications) |
| France | **1.2% + β×2%** (3.2% if β = 1) | Risk-free + systematic risk | [France Stratégie 2021](https://www.strategie-plan.gouv.fr/files/files/Edito%20Riche/ESE/fs-guide-evaluation-i-taux_dactualisation-23novembre-final.pdf) |
| Netherlands | **2.8%** (≤35 yrs), 1.8% beyond (from 1 Jan 2026) | Risk-free + risk premium | [Werkgroep discontovoet 2025](https://www.rijksoverheid.nl/documenten/rapporten/2025/09/19/rapport-werkgroep-discontovoet-2025) |
| Norway | **4%** (0–40 yrs), 3% (40–75), 2% (75+) | Risk-adjusted, declining | [NOU 2012:16](https://www.regjeringen.no/en/documents/nou-2012-16/id700821/) |
| Germany (transport) | 1.7%: **UNVERIFIED** | — | [BVWP 2030](https://www.bmv.de/DE/Themen/Mobilitaet/Infrastrukturplanung-Investitionen/Bundesverkehrswegeplan-2030/bundesverkehrswegeplan-2030.html) |
| Australia | **7%**, with sensitivity tests at 3% and 10% | SOC | [Office of Impact Analysis](https://oia.pmc.gov.au/resources/guidance-assessing-impacts/cost-benefit-analysis) |
| New Zealand | Non-commercial **2%** (1–30 yrs), 1.5%, 1%; commercial 8% (2024) | SRTP | [NZ Treasury](https://www.treasury.govt.nz/information-and-services/public-sector-leadership/guidance/reporting-financial/discount-rates) |
| Canada | **7%**; a social discount rate is allowed for consumption effects or horizons of 50+ years | SOC | [TBS CBA Guide 2022](https://publications.gc.ca/site/eng/9.910204/publication.html) |
| India / China | **12% / 8%** (2007 survey; current status UNVERIFIED) | SOC / administered | [Zhuang et al., ADB WP 94](https://www.adb.org/sites/default/files/publication/28360/wp094.pdf) |
| ADB | Minimum economic IRR **9%**; lower for social-sector projects (6% UNVERIFIED) | Hurdle rate | [ADB Guidelines 2017](https://www.adb.org/documents/guidelines-economic-analysis-projects) |
| World Bank | **2 × per-capita growth** (e.g. 6% at 3% growth) | Ramsey, η = 2 | [WB technical note 2016](https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099610503022315638) |

### 2.2 Climate and intergenerational discounting
| Estimate | Source | Notes |
|---|---|---|
| **1.4%** (δ = 0.1%, η = 1, g = 1.3%) | Stern Review 2006 ([briefing](https://researchbriefings.files.parliament.uk/documents/SN04739/SN04739.pdf)) | Near-zero pure time preference |
| DICE: δ = 1.5%, η = 1.45 (effective ~4–5%: UNVERIFIED) | Barrage & Nordhaus, [PNAS 2024](https://www.pnas.org/doi/10.1073/pnas.2312030121) | Calibrated to market returns |
| Mean **2.27%**, median **2%**, range 0–10%; over three-quarters of experts accept 2% | Drupp, Freeman, Groom & Nesje, [AEJ:Policy 2018](https://www.aeaweb.org/articles?id=10.1257%2Fpol.20160240) | Survey of 200+ experts |
| Mean ~**4%**; implied declining schedule ~4% → 3% → 1.5% → 0% | Weitzman, [AER 2001](https://www.aeaweb.org/articles?id=10.1257%2Faer.91.1.260) | 2,160 economists; gamma discounting |
| 2.5% / **2.0%** / 1.5% (US social cost of carbon 2023; withdrawn 2025) | [CRS IF12916](https://www.congress.gov/crs-product/IF12916) | Estimates withdrawn under EO 14154 |
| The theoretical case for declining certainty-equivalent rates is compelling | Arrow et al., [Science 2013](https://www.science.org/doi/10.1126/science.1235665) | Expert panel |

### 2.3 Health technology assessment
| Jurisdiction | Rate (costs / outcomes) | Source |
|---|---|---|
| England (NICE) | 3.5% / 3.5% (1.5% allowed in specific cases) | [NICE PMG36](https://www.nice.org.uk/process/pmg36/chapter/economic-evaluation-2) |
| US (Second Panel) | 3% / 3% | [JAMA 2016](https://jamanetwork.com/journals/jama/fullarticle/2552214) |
| WHO-CHOICE | 3% (scenario: 3% costs / 0% health) | [PMC9278384](https://pmc.ncbi.nlm.nih.gov/articles/PMC9278384/) |
| Canada (CDA-AMC) | 1.5% / 1.5% | [Guidelines, 4th ed.](https://www.cda-amc.ca/guidelines-economic-evaluation-health-technologies-canada-4th-edition) |
| Netherlands | 3% / 1.5% (2024) | [Zorginstituut 2024](https://www.zorginstituutnederland.nl/publicaties/publicatie/2024/01/16/richtlijn-voor-het-uitvoeren-van-economische-evaluaties-in-de-gezondheidszorg) |
| Australia (PBAC) | 5% (3.5% recommended in the 2024 review; implementation UNVERIFIED) | [PBAC 3A.1](https://pbac.pbs.gov.au/section-3a/3a-1-overview-and-rationale-of-economic-evaluation.html) |
| Japan / Thailand | 2% / 3% | [C2H](https://c2h.niph.go.jp/tools/guideline/guideline_en.pdf); [HITAP](https://pmc.ncbi.nlm.nih.gov/articles/PMC9969024/) |
| **Singapore (ACE)** | **3% / 3%**. Confirmed only through studies citing the ACE reference case | [ACE methods](https://www.ace-hta.gov.sg/resources/process-methods/) |

---

## 3. Individual time preference

**Meaning.** The rate at which a person trades present for future. There are two separate ideas:
- the **pure rate of time preference**, which discounts future *utility*;
- the **discount rate over money**, which is what "money earlier or later" experiments measure.

The second mixes impatience with utility curvature, credit constraints and the ability to borrow or lend at market rates, trust or uncertainty, inflation and transaction costs.

Behaviour is often **present-biased**, captured by the quasi-hyperbolic β-δ model (Laibson 1997):
- β < 1 applies an extra discount to everything that is not "now";
- this produces preference reversals and demand for commitment devices.

**Implicit discount rates** are backed out of durable-goods choices, such as paying more upfront for lower running costs. They also absorb information gaps and inattention.

| Context | Estimate | Population | Source |
|---|---|---|---|
| Review | "Spectacular variation" across studies; the numeric range is UNVERIFIED | Global literature | Frederick, Loewenstein & O'Donoghue, [JEL 2002](https://www.aeaweb.org/articles?id=10.1257%2F002205102320161311) |
| Meta-analysis (experiments) | Mean **~33%/yr** after correcting for publication bias; health is discounted more than money | Global | Matoušek, Havránek & Iršová, [Exp. Econ. 2022](https://link.springer.com/article/10.1007/s10683-021-09716-9) |
| Measurement review | Money-earlier-or-later choices partly measure required returns, not pure preference | — | Cohen, Ericson, Laibson & White, [JEL 2020](https://www.aeaweb.org/articles?id=10.1257%2Fjel.20191074) |
| Present-bias meta-analysis | 220 β estimates; on average present-biased; front-end delay matters | Convex-time-budget experiments | Imai, Rutter & Camerer, [EJ 2021](https://academic.oup.com/ej/article/131/636/1788/5912830) |
| Present-bias meta-analysis | β(money) **0.938** after bias correction (2025 version); 0.82 in the 2021 working paper | Global | Cheung, Tymula & Wang ([IZA DP 14625](https://docs.iza.org/dp14625.pdf); [SSRN 2025](https://papers.ssrn.com/abstract=5222564)) |
| Field experiment | Much lower once utility curvature is modelled jointly; ~10% vs ~25% is UNVERIFIED | Denmark, adults | Andersen, Harrison, Lau & Rutström, [Econometrica 2008](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-0262.2008.00848.x) |
| Lifecycle model | **~40%** short-run, **~4.3%** long-run; exponential discounting rejected | US households | Laibson, Repetto & Tobacman, [NBER WP 13314](https://www.nber.org/papers/w13314) |
| Money vs effort | Effort β = **0.888**; money β close to 1 | US students | Augenblick, Niederle & Sprenger, [QJE 2015](https://academic.oup.com/qje/article-abstract/130/3/1067/1934963) |
| Cross-country | Large differences between countries and larger ones within countries; China, Japan and Korea relatively patient (Singapore's inclusion UNVERIFIED) | 76 countries | Falk et al., [QJE 2018](https://academic.oup.com/qje/article/133/4/1645/5025666) |
| Cross-country | Share willing to wait for an implied ~12%/month: 8% (Nigeria) to 89% (Germany) | 53 countries | Wang, Rieger & Hens, [JEP 2016](https://www.sciencedirect.com/science/article/abs/pii/S0167487015001439) |
| Implicit: air conditioners | **~20%** (15–25%), falling with income | US | [Hausman 1979](https://economics.mit.edu/sites/default/files/2022-09/Corporation%20Individual%20Discount%20Rates%20and%20the%20Purchase%20and%20Utilization%20of%20Energy-Using%20Durable.pdf) |
| Implicit: appliances (reviews) | 5% to 300% across studies | Various | [Train 1985](https://ideas.repec.org/a/eee/energy/v10y1985i12p1243-1253.html); [Schleich et al. 2016](https://www.sciencedirect.com/science/article/pii/S0301421516304050) |
| Implicit: vehicles | **Just under 15%**; much milder undervaluation of fuel costs than older studies found | US, 86m transactions | Allcott & Wozny, [REStat 2014](https://e2e.uchicago.edu/pdf/workingpapers/WP002R.pdf) |

**Why the range is so wide:**
- Short delays annualise small premia into huge rates.
- Assuming linear utility inflates estimates.
- Money is fungible, so choices can reflect market interest rates rather than consumption timing.
- Lab, field, student and population samples give different answers.
- Publication bias.

---

## 4. Corporate finance and asset pricing

**Meaning.** The discount rate is the **expected or required return** investors demand for bearing
a claim's risk.
- **For firms:** the **cost of capital** or **WACC**. Equity costs are usually estimated with the CAPM: r_f + β × ERP (risk-free rate plus beta times the equity risk premium).
- **Hurdle rates** are the minimum return management requires in practice, and are often well above WACC.
- **In asset pricing, discount rates vary over time.** Cochrane ([JF 2011](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-6261.2011.01671.x)) argues that discount-rate variation, not cash-flow news, explains almost all price-dividend variation.

| Context | Estimate | Market | Source |
|---|---|---|---|
| Historical real returns 1900–2024 | Equities **5.2%**, bonds 1.7%, bills 0.5%; ERP vs bills ~**4.7%** | World | [UBS Yearbook 2025](https://www.ubs.com/global/en/media/display-page-ndp/en-20250304-global-investment-returns-yearbook-2025.html) |
| Implied ERP | **4.23%** (Jan 2026); 4.42% (Jul 2026) | US | [Damodaran Jan 2026](https://aswathdamodaran.blogspot.com/2026/01/); [Jul 2026](https://aswathdamodaran.blogspot.com/2026/07/country-risk-drivers-measures-and.html) |
| Survey market risk premium | **5.5%**; risk-free rate 4.1% (nominal) | US | [Fernandez et al. 2025](https://www.bvresources.com/articles/bvwire/global-fernandezs-survey-of-2025-risk-premiums-and-risk-free-rates) |
| Median firm cost of capital | **7.79% (nominal)**; middle 80%: 5.26–9.88% (US), 6.28–11.66% (global) | 48,156 firms | [Damodaran Data Update 5, 2026](https://aswathdamodaran.substack.com/p/data-update-5-for-2026-risk-and-hurdle) |
| Industry WACC | ~5.5% (utilities) to ~11.5% (software): UNVERIFIED | US | [Damodaran WACC data](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/wacc.html) |
| CFO hurdle vs WACC | Hurdle median **12%** vs WACC median 9.8% (nominal) | US | [Duke CFO Survey via CFO.com](https://www.cfo.com/capital-markets/2017/06/cfos-still-spurning-value-creating-projects/) |
| Firms' discount rates | About **twice** the cost of financial capital; hurdle premium ~6.6 pp | US | Jagannathan, Matsa, Meier & Tarhan, [JFE 2016](https://www.sciencedirect.com/science/article/abs/pii/S0304405X16000179) |
| Discount rates from earnings calls | Mean **15.7% (nominal)**; only 0.4 pp pass-through per 1 pp rise in cost of capital | Global listed firms | Gormsen & Huber, [AER 2025](https://www.aeaweb.org/articles?id=10.1257%2Faer.20231246) |
| Regulated utility return on equity | Median **9.70% (nominal)** | US | [S&P RRA](https://www.spglobal.com/market-intelligence/en/news-insights/research/underearning-spread-widens-for-gas-electric-utilities-in-roe-analysis) |
| **Singapore ERP** | Rated Aaa, so country risk premium = 0 and total ERP ≈ **4.2%** (2026); exact figure UNVERIFIED | Singapore | [Damodaran country risk](https://aswathdamodaran.substack.com/p/country-risk-determinants-measures) |
| **Singapore regulated WACC** | SP PowerAssets **5.38%** (FY21/22–Mar 2025): UNVERIFIED in EMA documents | Singapore | [S&P snippet](https://www.alacrastore.com/s-and-p-credit-research/SP-PowerAssets-Ltd-2764619) |

---

## 5. Real estate, by asset type

**Key concepts.**
- **Discount rate (target IRR)** in a property DCF: the risk-free rate plus a property risk premium, used to discount projected income and a terminal value.
- **Cap rate (yield)** = net income ÷ price, and **≈ discount rate − expected income growth**. A low cap rate can therefore mean low required returns, high expected growth, or both.
- **Housing:** the **rent-price ratio** plays the role of the cap rate. **Leasehold vs freehold** price gaps reveal how buyers discount rents 99+ years ahead.
- **Singapore:** the state's leasehold relativity table (**Bala's Table**) turns remaining lease into a share of freehold value using one fixed, undisclosed rate.

**Why rates differ across asset types:** risk and volatility, lease length and tenant pool, liquidity, obsolescence, and **land tenure**. JTC industrial land is mostly **20–30-year** leasehold. That makes it a wasting asset whose yield must cover return *of* capital as well as return *on* capital.

### 5.1 Housing
| Estimate | Market | Source |
|---|---|---|
| Discount rate **<2.6%** for claims 100+ years out; 100-yr leaseholds >10% below freehold (Singapore 95–99-yr: ~**11.8%**, secondary) | UK & Singapore | Giglio, Maggiori & Stroebel, [QJE 2015](https://www.nber.org/papers/w20133) |
| Term structure slopes down to **2.6%** beyond 100 years; climate risk included | UK (mainly) | Giglio, Maggiori, Rao, Stroebel & Weber, [RFS 2021](https://academic.oup.com/rfs/article-abstract/34/8/3527/6187965) |
| Declining rates: ~**2.5–4%** for years 1–100, falling to **0.5–1.5%** by year 400 | Singapore private condos | Fesselmeyer, Liu & Salvo ([SSRN/IZA WP 2016](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2761339); reported as [J. Applied Econometrics 2022](https://onlinelibrary.wiley.com/doi/10.1002/jae.2867), check) |
| Housing total real return **~7.05%** (arithmetic), 6.6% (geometric); s.d. ~10% | 16 advanced economies, 1870–2015 | Jordà et al., "Rate of return on everything", QJE 2019 ([summary](https://www.frbsf.org/research-and-insights/blog/sf-fed-blog/2018/2/5/rate-of-return-housing-equities-safe-assets/)) |
| +1% remaining lease → +1.46–1.62% price | Singapore private non-landed | [IRER 2022](https://ideas.repec.org/a/ire/issued/v25n032022p401-421.html) |
| Gross rental yield **~3.0–3.1%** (Q4 2025–Q2 2026) | Singapore private residential | [Global Property Guide](https://www.globalpropertyguide.com/asia/singapore/rental-yields) |
| Gross yield, median 4-room flat **~6.2%** (range 4.5% Toa Payoh to 7.8% Jurong West) | Singapore HDB resale | [hdbinsights.sg](https://hdbinsights.sg/4-room-hdb-rental-yield/) (aggregator; check against HDB data) |
| Bala's Table implied rate ~**3.5%** (CLC reverse-engineering, "unverified possibility"); best fit **2.94%** (attribution UNVERIFIED) | Singapore leasehold valuation | [CLC Bala's Table paper](https://isomer-user-content.by.gov.sg/50/ade6cd16-890b-4a1b-9d1d-d0e189daba03/balas-table.pdf); [Kwong, Goh & Ti, IRER 2025](https://ideas.repec.org/a/ire/issued/v28n032025p379-406.html) |

### 5.2 Commercial (office, retail, hotel)
| Estimate (nominal) | Market | Source |
|---|---|---|
| Cap rates, Dec 2025: office **3.15–3.85%**; retail **4.35–6.20%**; hotel **4.80%** | Singapore (CICT valuers) | [CICT Annual Report 2025](https://investor.cict.com.sg/misc/ar2025/) |
| DCF discount rates, Dec 2024: office **6.50–6.75%**; retail **7.00–7.25%**; integrated 6.75–7.25% | Singapore | [CICT AR2024](https://investor.cict.com.sg/misc/ar2024/139/) |
| Terminal yields, Dec 2024: office 3.15–4.00%; retail 4.75–7.25% | Singapore | same |
| Office cap rates 6.63–7.25% (Australia), 4.65–5.35% (Germany); discount rates 7.75–7.88% (Australia) | Australia, Germany | [CICT AR2024/25](https://investor.cict.com.sg/misc/ar2025/) |
| Cap rates predict returns for apartments, retail and industrial, but **not offices** | US | Plazzi, Torous & Valkanov, [RFS 2010](https://academic.oup.com/rfs/article-abstract/23/9/3469/1673086) |
| US sector cap rates "largely unchanged" in H2 2025 (levels UNVERIFIED) | US | [CBRE Cap Rate Survey](https://www.cbre.com/insights/reports/us-cap-rate-survey-h2-2025) |

*Office reading:* a cap rate of about 3.5% against a DCF discount rate of about 6.6% implies valuers assume roughly **3 pp a year of long-run income growth**.

### 5.3 Industrial and logistics
| Estimate | Market | Source |
|---|---|---|
| Gross yields ~4.5–6.5% (vs office 3.0–4.5%): **indicative only** | Singapore | [propertybro.sg](https://propertybro.sg/commercial-property-investment-yields-in-singapore-2026-sector-guide/) (low-quality secondary) |
| Institutional logistics cap rate 5.5–6.5% (attributed to CBRE): **UNVERIFIED** | Singapore | — |
| Singapore segment cap and discount rates for industrial REITs: **not yet extracted** | Singapore | Check [CLAR AR2024](https://investor.capitaland-ascendasreit.com/misc/CapitaLand-Ascendas-REIT-AR2024.pdf), [MLT AR](https://investor.mapletreelogisticstrust.com/newsroom/20250620_071305_M44U_W4WC665GQ77T049L.1.pdf) |
| Tenure: industrial government land sales capped at **30 yrs** since 2012; +3 yrs for new greenfield allocations (2025) | Singapore | [JTC/MTI COS 2025](https://www.jtc.gov.sg/about-jtc/news-and-stories/press-releases/mti-committee-of-supply-2025-enhancements-to-the-industrial-land-lease-framework) |

---

## 6. Macroeconomics and monetary policy

**Three concepts that should not be mixed:**
1. **β and ρ (preference parameters in models).** β = 1/(1+ρ). A quarterly β of 0.99 ≈ 4.1% a year; an annual β of 0.96 ≈ 4.2%. In steady state, r = ρ + σg, where σ is the inverse of the elasticity of intertemporal substitution and g is consumption growth.
2. **The neutral real rate r\*.** The real short rate consistent with output at potential and stable inflation. It is unobserved and has to be estimated.
3. **The central-bank discount rate.** An administered, **nominal** rate at which the central bank lends overnight to banks. It forms the ceiling of the policy-rate corridor.

| Context | Estimate | Country | Source |
|---|---|---|---|
| DSGE prior | 100(β⁻¹−1) ~ mean 0.25 per quarter (β ≈ 0.9975) | US | Smets & Wouters 2007 ([replication code](https://github.com/JohannesPfeifer/DSGE_mod/blob/master/Smets_Wouters_2007/Smets_Wouters_2007.mod)) |
| Lifecycle consumption | ρ ≈ **4.0–4.5%/yr** | US | Gourinchas & Parker, Econometrica 2002 ([page](https://mitmgmtfaculty.mit.edu/japarker/consumption-life-cycle/)) |
| Heterogeneous β | β spread over 0.9866 ± 0.0088 (quarterly) to match the wealth distribution | US | Carroll, Slacalek, Tokuoka & White, [QE 2017](https://onlinelibrary.wiley.com/doi/abs/10.3982/QE694) |
| r\* (HLW model) | **~<1%** (2025Q4) | US | [St. Louis Fed, May 2026](https://www.stlouisfed.org/on-the-economy/2026/may/comparing-fomc-estimate-r-star-alternative-estimates) |
| r\* (market-based, 10y-10y TIPS forward) | **~>3%** (2025Q4) | US | same |
| r\* (HLW) | −0.7% (2024Q2); modified HLW 0.2–0.8% | Euro area | [Bank of Finland Bulletin 2024](https://www.bofbulletin.fi/en/2024/articles/recent-insights-into-r-star-an-analysis-using-a-modified-holston-laubach-williams-model/) |
| Global r\* trend | ~2% before the 1940s → ~0.5% in 2016 | Advanced economies | Del Negro et al., [NBER w25039](https://www.nber.org/papers/w25039) |
| Very long-run real rates | Decline of ~0.6–1.6 bp a year since the 14th century | Global | Schmelzing, [BoE SWP 845](https://www.bankofengland.co.uk/-/media/boe/files/working-paper/2020/eight-centuries-of-global-real-interest-rates-r-g-and-the-suprasecular-decline-1311-2018); Rogoff, Rossi & Schmelzing, [NBER w30475](https://www.nber.org/papers/w30475) |
| Fed primary credit (discount) rate | **4.00%** from 17 Sep 2026 | US | [Fed implementation note](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a1.htm) |
| ECB marginal lending facility | **2.90%** from 16 Sep 2026 (secondary source) | Euro area | [ECB key rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/key_ecb_interest_rates/html/index.en.html) |
| US 10-yr TIPS real yield | **~2.65–2.8%** (Sep 2026) | US | [TIPSWatch](https://tipswatch.com/2026/09/17/10-year-tips-reopening-gets-real-yield-of-2-653-highest-in-nearly-18-years/) |

**Singapore.**
- **MAS targets the exchange rate (S$NEER)**, using a "basket, band, crawl" system, and does not target an interest rate. Domestic rates are therefore largely imported through interest parity ([MAS FAQ](https://www.mas.gov.sg/monetary-policy/singapores-monetary-policy-framework/faqs/section-2)).
- **The MAS Standing Facility is the closest equivalent to a discount window:** it lends at the SF reference rate + 50 bp ([MAS](https://www.mas.gov.sg/monetary-policy/liquidity-facilities/mas-standing-facility)).
- **SORA ~1.19%** (23 Sep 2026, aggregator).
- **10-yr SGS ~2.4–2.5% (nominal)** in Sep 2026 ([Trading Economics](https://tradingeconomics.com/singapore/government-bond-yield)).
- No inflation-linked SGS exist, and no published Singapore r\* was found.

---

## 7. Singapore synthesis

| Question | What the evidence shows | Gap |
|---|---|---|
| What rate for public-sector cost-benefit analysis? | No published MOF, LTA, PUB, URA or HDB rate found. ACE (health) uses 3%. | Ask MOF or check internal guidance. The [OECD Budgeting in Singapore 2025](https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/01/budgeting-in-singapore-in-2025_c28f6afb/79ec8b00-en.pdf) report may help. |
| How do households discount the long future? | Leasehold vs freehold evidence: ~2.5–4% within 100 years, falling to 0.5–1.5% at 400 years. 99-yr leases ~11.8% below freehold. | No Singapore experiment reporting %/yr rates; check Singapore Life Panel publications |
| What rate is embedded in lease valuation? | Bala's Table implies ~2.9–3.5% as a *single flat* rate | The flat rate may misprice short remaining leases, since the evidence favours a declining curve (relevant to HDB lease decay) |
| Market required returns? | ERP ≈ 4.2%; SGS 10-yr ≈ 2.4–2.5% nominal; office DCF rate 6.5–6.75%, retail 7.0–7.25% | Industrial REIT valuation inputs not yet extracted |

---

## 8. Cross-cutting caveats
1. **Don't compare rates across contexts without adjusting for:**
   - real vs nominal;
   - riskless vs risk-adjusted;
   - horizon;
   - whether the rate is a preference (ρ), an opportunity cost (SOC, WACC), an equilibrium (r\*) or a policy instrument (discount window).
2. **The term structure matters.** Many sources support declining long-horizon rates, but many official and valuation conventions use a single flat rate.
3. **Official rates change.** US, UK, Dutch and NZ guidance all changed in 2024–26. Always cite the version and date.
4. **Measured rates bundle other factors**: credit constraints, uncertainty, information gaps, tenure decay, and smoothing in appraisals.
5. **Singapore-specific evidence is thin** outside real estate and health technology assessment.

---

## 9. Verification checklist
Highest priority, before quoting:
- [ ] Fesselmeyer, Liu & Salvo: publication venue (JAE 2022 vs 2016 WP) and exact estimates
- [ ] GMS 2015: Singapore 11.8% leasehold discount
- [ ] Bala's Table implied rate (2.94% attribution; CLC 3.5%)
- [ ] CICT cap and discount rates (AR2024/AR2025 valuation notes)
- [ ] ACE 3% reference case (ACE methods guide PDF)
- [ ] UK Green Book review: adoption status
- [ ] Damodaran Singapore total ERP (ctryprem table)
- [ ] Andersen et al. 2008 point estimates; Frederick et al. 2002 range
- [ ] Industrial REIT (CLAR, MIT, MLT) Singapore cap and discount rates
- [ ] HDB and private rental yields against official HDB/URA data
