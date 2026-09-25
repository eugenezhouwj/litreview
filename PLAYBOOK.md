# Agentic literature review with Claude: a no-code playbook

This playbook turns the ideas behind open-source agentic literature-review tools into prompts
you can paste into Claude. It is written for economics and policy research that uses public papers.

## 1. What the open-source tools do, and what to take from each

| Project | What it does | Idea to reuse |
|---|---|---|
| [STORM / Co-STORM](https://github.com/stanford-oval/storm) (Stanford) | Writes a cited, Wikipedia-style report. It first simulates experts with different perspectives asking questions. | **Perspective-guided questioning.** Before searching, list the viewpoints (theorist, empiricist, policymaker, critic) and the questions each would ask. |
| [PaperQA2](https://github.com/Future-House/paper-qa) (FutureHouse) | Answers questions from a set of PDFs, with citations checked against the source text. | **Grounded, cited answers.** Every claim must quote or point to a page or section of a paper. |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | A planner agent splits a question into sub-questions. Research agents answer each one, and a writer agent combines the answers. | **Plan, then research sub-questions in parallel, then synthesise.** |
| [AutoSurvey](https://github.com/AutoSurveys/AutoSurvey) / AutoSurvey2 / LiRA | Generates survey papers: retrieve, draft an outline, write sections, then refine and evaluate. | **Outline first, then write section by section, then run a separate critique pass.** |
| [Agent Laboratory](https://github.com/SamuelSchmidgall/AgentLaboratory) | An end-to-end research pipeline. Its first phase is a literature review agent. | **Human-in-the-loop checkpoints** between phases. |

These curated lists are useful for finding newer tools:
[Awesome-AI-Auto-Research](https://github.com/worldbench/awesome-ai-auto-research),
[Awesome-Auto-Research-Tools](https://github.com/handsome-rich/Awesome-Auto-Research-Tools),
[Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery).
For economics specifically, see Korinek's
[AI Agents for Economic Research (AEA/JEL, Aug 2025 update)](https://www.aeaweb.org/content/file?id=23290).

**Caveat.** Most of these tools rely on arXiv or Semantic Scholar, and those cover economics poorly.
For economics, point Claude at **NBER, SSRN, RePEc/IDEAS, OpenAlex, Google Scholar**, and
journal and central-bank or IMF/World Bank working-paper series.

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
Why I need it (e.g. policy brief, paper intro, background for a model):
Geography / period / population:
Must-include papers or authors (if any):
Exclusions (e.g. pre-2000, non-peer-reviewed, non-English):
Output: [narrative review | evidence table | framework | brief], length ~___ words
```

### Stage 2: Plan (STORM + GPT Researcher pattern)
```
Act as a research planner for an economics literature review on: <question>.
1. List 4–6 perspectives that matter (e.g. theory, empirical/causal identification,
   policy design, distributional effects, international comparisons, critics).
2. For each perspective, write 2–3 specific sub-questions.
3. Propose search strings for each sub-question (synonyms, JEL codes, key terms).
4. Name the seminal papers you expect to find, marking each as
   "known with confidence" or "please verify".
Do not write the review yet. Wait for my approval of the plan.
```

### Stage 3: Search and screen
```
Using web search, find papers answering the approved sub-questions. Prioritise
NBER, SSRN, RePEc/IDEAS, journals, IMF/World Bank/central-bank working papers.
For each candidate return: full citation, link/DOI, 1-line relevance, and
INCLUDE / EXCLUDE with reason, applying my inclusion criteria.
Only list papers you actually found a source page for — no citations from memory.
```

### Stage 4: Extract, one paper at a time (PaperQA pattern; also covers a single-paper summary)
Upload the PDF or paste the link, then:
```
Summarise this paper using ONLY its text. For each field cite the section/page.
- Citation & 1-sentence contribution
- Research question
- Data (source, unit, period, sample size)
- Method / identification strategy (and the key assumption it rests on)
- Main findings (with magnitudes and standard errors/significance where given)
- Robustness checks & heterogeneity
- Limitations (authors' own + your assessment, clearly labelled)
- Policy implications
- How it relates to: <my question>
If something is not in the paper, write "not reported" — do not infer.
```
Ask for the result as a table row so you can build an evidence matrix across papers.

### Stage 5: Synthesise (AutoSurvey pattern)
```
Here is the evidence table for N papers. First propose an outline for the review
(themes, not paper-by-paper). After I approve, write each section:
- where the evidence agrees, and how strong it is (identification quality, sample)
- where it conflicts and plausible reasons (setting, method, period)
- a conceptual framework linking mechanisms → outcomes
- gaps and open questions
Cite every claim to the table. Do not introduce papers not in the table.
```

### Stage 6: Verify and critique (a separate "reviewer" pass)
Open a fresh chat so the reviewer is not biased by the drafting conversation:
```
You are a sceptical referee. Check this review against the attached evidence table:
1. Flag any claim not supported by a cited paper, or mis-stated magnitudes.
2. Flag over-generalisation (e.g. US results applied to other contexts).
3. Note important missing literatures or counter-evidence.
4. Check every citation exists and matches (author, year, title).
Return a numbered list of issues, most serious first.
```

## 3. Shortcut: the built-in `lit-reviewer` skill
Your Claude workspace includes an **anthropic-skills:lit-reviewer** skill. It searches the
economics literature, summarises data, methods, findings and policy implications, and combines
them into a framework. Ask something like *"Use the lit-reviewer skill on <topic>"*. Then apply
the Stage 6 critique to what it produces.

## 4. Habits that improve results
- **Never trust a citation you haven't opened.** Hallucinated references are the most common
  failure. Stage 3 requires a source page for every paper.
- **Separate what the paper says from what Claude thinks.** The extraction prompt labels the two.
- **Give Claude the PDFs** whenever you can, rather than relying on its memory of a paper.
- **Keep an evidence table**, in Excel or a doc. It is your audit trail and lets you rerun the synthesis.
- **Iterate at the checkpoints.** Fixing the plan is cheaper than fixing the final draft.
