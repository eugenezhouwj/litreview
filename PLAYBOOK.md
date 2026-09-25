# Agentic literature review with Claude: a no-code playbook

This playbook turns the ideas behind open-source agentic literature-review tools into prompts
you can paste into Claude. It is written for **Economics** and **Data Science/Analytics**
research that uses public papers, including the overlap between them, such as causal ML,
nowcasting and ML for policy.

- **New here?** Go to [§0 Your first test run](#0-your-first-test-run-about-30-minutes).
- Want to know why the workflow looks like this? See [§1](#1-what-the-open-source-tools-do-and-what-to-take-from-each).

---

## 0. Your first test run (about 30 minutes)

Start small. The goal is to learn the workflow, not to finish a review.

1. **Pick a narrow question that you already partly know**, so you can judge the output. Examples:
   - Econ: *"What is the causal effect of property cooling measures (e.g. stamp duties, LTV limits) on housing prices and transaction volumes?"*
   - Data science: *"How well do machine-learning models nowcast GDP compared with dynamic factor models?"*
   - Both: *"How have double/debiased machine learning methods been applied to estimate policy effects?"*
2. **Fill in the Stage 1 scope card** (§2) and cap the review at **8–12 papers**.
3. **Run Stages 2–3** in one chat. Check the plan and the candidate list before continuing.
4. **Run Stage 4 on 2–3 papers you know well.** This is the real test: does the summary match
   what you know about each paper?
5. **Run Stage 5**, then **Stage 6 in a new chat**.
6. **Record what went wrong** (missed papers, wrong numbers, weak synthesis) in the log at the
   end of this file. Tighten the prompts and run again.

Once a small run works, scale up to 20–40 papers, or try the built-in `lit-reviewer` skill (§3)
on the same question and compare the two outputs.

---

## 1. What the open-source tools do, and what to take from each

| Project | What it does | Idea to reuse |
|---|---|---|
| [STORM / Co-STORM](https://github.com/stanford-oval/storm) (Stanford) | Writes a cited, Wikipedia-style report. It first simulates experts with different perspectives asking questions. | **Perspective-guided questioning.** Before searching, list viewpoints and the questions each would ask. |
| [PaperQA2](https://github.com/Future-House/paper-qa) (FutureHouse) | Answers questions from a set of PDFs, with citations checked against the source text. | **Grounded, cited answers.** Every claim must point to a page or section of a paper. |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | A planner agent splits a question into sub-questions. Research agents answer each one, and a writer agent combines the answers. | **Plan, then research sub-questions, then synthesise.** |
| [AutoSurvey](https://github.com/AutoSurveys/AutoSurvey) / AutoSurvey2 / LiRA | Generates survey papers: retrieve, draft an outline, write sections, then refine and evaluate. | **Outline first, then write section by section, then run a separate critique pass.** |
| [Agent Laboratory](https://github.com/SamuelSchmidgall/AgentLaboratory) | An end-to-end research pipeline. Its first phase is a literature review agent. | **Human-in-the-loop checkpoints** between phases. |

These curated lists are useful for finding newer tools:
[Awesome-AI-Auto-Research](https://github.com/worldbench/awesome-ai-auto-research),
[Awesome-Auto-Research-Tools](https://github.com/handsome-rich/Awesome-Auto-Research-Tools),
[Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery).
For economists specifically, see Korinek's
[AI Agents for Economic Research (AEA/JEL, Aug 2025 update)](https://www.aeaweb.org/content/file?id=23290).

### Where to search, by field

Most of these tools rely on arXiv or Semantic Scholar. That works well for data science but
poorly for economics, so tell Claude which sources to use.

| Field | Primary sources | Useful filters and terms |
|---|---|---|
| **Economics** | NBER, SSRN, RePEc/IDEAS, OpenAlex, Google Scholar, top journals (AER, QJE, JPE, Econometrica, REStud, JPubE, JUE), IMF, World Bank, BIS and central-bank working papers | JEL codes (e.g. R31 housing, E37 forecasting, C55 big data); "working paper" vs "published" |
| **Data Science / Analytics** | arXiv (cs.LG, stat.ML, stat.ME, econ.EM), Semantic Scholar, ACM Digital Library (KDD), NeurIPS/ICML/ICLR proceedings, JMLR, Hugging Face Papers | Benchmark or dataset names, and "survey" or "benchmark" as keywords |
| **Econ × DS overlap** | econ.EM and stat.ML on arXiv, NBER "machine learning" papers, *Journal of Econometrics*, *Journal of Business & Economic Statistics*, *International Journal of Forecasting* | "double machine learning", "causal forest", "nowcasting", "text as data", "satellite data" |

---

## 2. The workflow: six stages, each with a human checkpoint

```
Scope → Plan (perspectives + sub-questions) → Search & screen → Extract (per paper)
      → Synthesise (themes, framework, gaps) → Verify & critique
```

Run each stage as its own prompt. Review the output before moving on, because that checkpoint
is what makes the process reliable rather than a single-shot guess.

### Stage 1: Scope (you fill this in)
```
Topic / research question:
Field track: [Economics | Data Science | Both]
Why I need it (e.g. policy brief, paper intro, choosing a method for a project):
Geography / period / population (or: data type / task, for DS):
Must-include papers or authors (if any):
Exclusions (e.g. pre-2010, non-peer-reviewed, non-English):
Max papers for this run: ___
Output: [narrative review | evidence table | framework | method comparison | brief], ~___ words
```

### Stage 2: Plan (STORM + GPT Researcher pattern)
```
Act as a research planner for a literature review on: <question>. Field track: <track>.
1. List 4–6 perspectives that matter.
   Economics: theory/mechanisms, causal identification, policy design, distributional
   effects, international comparisons, critics.
   Data Science: problem framing, methods/model families, datasets & benchmarks,
   evaluation practice, deployment/practical constraints, critics (reproducibility, leakage).
2. For each perspective, write 2–3 specific sub-questions.
3. Propose search strings for each sub-question, with the sources to use
   (see the "Where to search" table), and JEL codes or arXiv categories where relevant.
4. Name the seminal papers you expect to find, marking each as
   "known with confidence" or "please verify".
Do not write the review yet. Wait for my approval of the plan.
```

### Stage 3: Search and screen
```
Using web search, find papers answering the approved sub-questions, from the sources
listed in the plan. Return at most <N> papers. For each: full citation, link/DOI,
status (published / working paper / preprint), 1-line relevance, and
INCLUDE / EXCLUDE with reason, applying my inclusion criteria.
Only list papers you actually found a source page for. No citations from memory.
If a working paper has since been published, cite the published version.
```

### Stage 4: Extract, one paper at a time (PaperQA pattern; also covers a single-paper summary)
Upload the PDF or paste the link, then use the template for the paper's type.

**Economics paper:**
```
Summarise this paper using ONLY its text. For each field cite the section/page.
- Citation & 1-sentence contribution
- Research question
- Data (source, unit of observation, period, sample size)
- Identification strategy (DiD, IV, RDD, structural, ...) and the key assumption it rests on
- Main findings (magnitudes, standard errors/significance, units)
- Robustness checks & heterogeneity
- Limitations (authors' own + your assessment, clearly labelled)
- Policy implications and external validity (would it transfer to <my context>?)
- How it relates to: <my question>
If something is not in the paper, write "not reported". Do not infer.
```

**Data Science / Analytics paper:**
```
Summarise this paper using ONLY its text. For each field cite the section/page.
- Citation & 1-sentence contribution
- Task / problem and why it matters
- Data (datasets, size, time span, train/validation/test split, public or proprietary)
- Method (model family, key idea vs prior work, compute if reported)
- Baselines compared against
- Evaluation (metrics, headline results with numbers, statistical significance or variance)
- Validity risks: data leakage, look-ahead bias (for time series), benchmark overfitting,
  cherry-picked baselines
- Reproducibility: code/data available? (give link), hyper-parameters reported?
- Practical takeaways: when to use it, costs, interpretability
- How it relates to: <my question>
If something is not in the paper, write "not reported". Do not infer.
```

Ask for the result as a **table row** (one row per paper) so you can build an evidence matrix.

### Stage 5: Synthesise (AutoSurvey pattern)
```
Here is the evidence table for N papers. First propose an outline organised by
theme or method family, not paper by paper. After I approve, write each section:
- where the evidence agrees, and how strong it is
  (Econ: identification quality, sample; DS: benchmark breadth, reproducibility)
- where it conflicts, and plausible reasons (setting, method, data, period)
- a conceptual framework (Econ: mechanisms → outcomes;
  DS: problem type → suitable methods → evaluation)
- gaps and open questions, and what they mean for <my purpose>
Cite every claim to the table. Do not introduce papers not in the table.
```

### Stage 6: Verify and critique (a separate "reviewer" pass)
Open a fresh chat so the reviewer is not biased by the drafting conversation:
```
You are a sceptical referee in <field>. Check this review against the attached evidence table:
1. Flag any claim not supported by a cited paper, or mis-stated magnitudes/metrics.
2. Flag over-generalisation (e.g. US results applied elsewhere; one benchmark treated as general).
3. Note important missing literatures, methods or counter-evidence.
4. Check every citation exists and matches (author, year, title, venue).
Return a numbered list of issues, most serious first.
```

---

## 3. Shortcut: the built-in `lit-reviewer` skill
Your Claude workspace includes an **anthropic-skills:lit-reviewer** skill. It searches the
economics literature, summarises data, methods, findings and policy implications, and combines
them into a framework. Ask something like *"Use the lit-reviewer skill on <topic>"*. Then apply
the Stage 6 critique to what it produces. For data-science topics, use the workflow in §2,
because the skill is tuned for economics.

## 4. Habits that improve results
- **Never trust a citation you haven't opened.** Hallucinated references are the most common
  failure. Stage 3 requires a source page for every paper.
- **Separate what the paper says from what Claude thinks.** The extraction prompts label the two.
- **Give Claude the PDFs** whenever you can, rather than relying on its memory of a paper.
- **Keep an evidence table**, in Excel or a doc. It is your audit trail and lets you rerun the synthesis.
- **Iterate at the checkpoints.** Fixing the plan is cheaper than fixing the final draft.
- **Data-science claims age quickly.** Note the date of each result, since a state-of-the-art claim from two years ago may no longer hold.

---

## 5. Test-run log
Record what you learn from each run, and edit the prompts above to match.

| Date | Question | Track | What worked | What went wrong | Prompt change made |
|---|---|---|---|---|---|
| 2026-09-25 | Discount rates across contexts (`reviews/discount-rates.md`) | Econ | Scope questions reshaped the review, e.g. splitting real estate by asset type. Parallel agents per context and a fresh referee pass caught 25 issues (wrong schedules, mislabelled rates, lost UNVERIFIED flags) | Proxy blocked primary-source fetches, so figures rest on search extracts. Summary tables dropped verification flags. One agent ran out of its search budget | Carry † flags into summaries. Keep a notation box for multi-context reviews. Check source access before the run; upload key PDFs where possible |
| | | | | | |
