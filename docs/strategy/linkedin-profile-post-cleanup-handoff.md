# LinkedIn Profile Post-Cleanup Handoff

Created: 2026-05-23 Cycle 33

Purpose: convert Auris's LinkedIn profile cleanup work into a concrete handoff before the first LinkedIn post is used. This artifact does not authorize posting or editing. It defines what Auris should verify manually so LinkedIn can act as a clean personal profile funnel.

## Working Answer

LinkedIn should stay in the GBP plus LinkedIn sprint, but only as a cleaned-up trust surface and owned-site route. It should not outrank Google Business Profile, reviews, referrals or real inquiry notes until it produces profile actions, link clicks, DMs, Talk events or a qualified lead.

The next LinkedIn step is not another post draft. It is a post-cleanup verification pass:

1. The English and Spanish About sections are aligned.
2. The About copy says Auris grew up in Ireland, and omits birthplace details.
3. Public `Open to Work` is hidden or removed unless job search is intentionally more important than premium student trust.
4. The intro/current-position area makes `English with Auris` visible as the primary independent-teacher identity.
5. Contact info and, if available, Featured/custom-button surfaces point to owned English with Auris destinations.
6. A small 7-day baseline is captured before Post 1.

## Current State From Known Evidence

Source: Auris-provided owner-side LinkedIn profile snapshot on 2026-05-22 plus Cycle 33 live checks.

| Surface | Known Evidence | Status | Decision |
| --- | --- | --- | --- |
| Name | `Aurimas (Auris) Purlys` | Good | Keep. |
| Headline | `Bilingual English teacher for Spanish speakers | Confidence, real conversation and English for work | English with Auris` | Good | Keep. |
| Location | Castelldefels, Catalonia, Spain | Good | Keep. |
| Followers/connections | 268 followers, 257 contacts in the owner snapshot | Small but usable | Treat as credibility baseline, not reach proof. |
| Analytics baseline | 2 profile views, 3 post impressions, 0 search appearances in last 7 days | Cold | Do not expect volume from Post 1. |
| About | Snapshot still showed older copy with a birthplace detail plus `raised in Ireland` | Needs confirmation | Replace or confirm replaced in both languages. |
| Open to Work | `En busca de empleo` visible in the snapshot | Potential trust conflict | Remove/hide from public view unless job search is the priority. |
| Primary role | English for Business Spain and Bridge Mills/education surfaces still competed with English with Auris | Needs confirmation | Make `English with Auris` the visible main identity where LinkedIn allows. |
| Canonical profile URL | `https://www.linkedin.com/in/aurimas-purlys-534a1a27b/` | Registered | Use only in private ledgers for now. |
| Direct public profile fetch | HTTP 999 on 2026-05-23 | Blocked/low-value | Use owner screenshots, not public scraping, for state and analytics. |
| Contact info destination | Homepage LinkedIn UTM returned HTTP 200 and canonical homepage | Ready | Use after profile cleanup. |
| Featured/Talk destination | Talk LinkedIn UTM returned HTTP 200 and canonical `/talkthetalk` | Ready | Use after profile cleanup if Featured is available. |
| Owned website outbound links | No obvious public LinkedIn/Superprof/Tusclases profile links in live source scan | Good | Keep site from sending premium leads into mixed profile contexts for now. |
| Portal proof | Student dashboard and SRS code confirm assignments, profile context, feedback and spaced-repetition continuity exist | Good support proof | Mention as between-class continuity, not as a SaaS/product headline. |

## Source Discovery

For this question, the most useful evidence should live in:

| Source Type | Why It Matters | Cycle 33 Use |
| --- | --- | --- |
| Owner-side LinkedIn screenshot | Shows the actual profile surfaces Auris can see. | Highest signal: headline, About, Open to Work, intro and analytics baseline. |
| Official LinkedIn intro docs | Defines the top profile section and editable surfaces. | High signal: intro is the first visitor surface and includes current position/contact info. |
| Official LinkedIn current-position docs/search result | Explains how multiple current roles can be selected/displayed. | High signal: directly affects English with Auris versus English for Business Spain. |
| Official LinkedIn language-profile docs | Confirms secondary language profiles require manual translation. | High signal: English and Spanish profile versions must both be updated. |
| Official LinkedIn Open to Work docs | Defines all-member, recruiter-only and private visibility. | High signal: public job-seeking can conflict with premium service trust. |
| Official LinkedIn contact/Featured docs | Confirms website links and profile showcase surfaces. | High signal: owned-site routing can happen inside LinkedIn. |
| LinkedIn analytics docs | Defines post analytics, profile views and owner-only limits. | High signal: supports owner screenshot/note rather than scraping. |
| Google Analytics campaign docs | Defines UTM discipline for source/medium/campaign/content. | High signal: supports placement-specific links. |
| Live URL and canonical checks | Confirms LinkedIn destinations do not break. | High signal for readiness, low signal for acquisition. |
| Website external-link scan | Checks whether owned site already points out to mixed profiles. | High signal: protect premium funnel. |
| Teacher platform code | Validates claims about between-class continuity. | Medium-high: useful for profile proof but not LinkedIn acquisition. |
| Competitor/creator examples | Could show common LinkedIn patterns. | Low value this cycle because owner profile state is the bottleneck. |

Chosen source types this cycle: owner snapshot, official LinkedIn/Google docs, live URL checks, website link scan and platform code. Competitor scans were skipped because they cannot answer whether Auris's profile is clean.

## External Evidence

| Source | URL | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- | --- |
| LinkedIn intro section help | https://www.linkedin.com/help/linkedin/answer/a563106/information-displayed-on-the-introduction-section-on-your-profile | Intro is the first profile surface and includes headline, current position, education, location and contact info. | Treating only the About section as the profile cleanup. | High |
| LinkedIn current-position help/search result | https://www.linkedin.com/help/linkedin/answer/a550169/update-your-current-position-in-your-introduction-section?lang=en | Multiple current roles can affect which position displays; the primary role needs deliberate selection. | Accepting English for Business Spain as fixed if it appears first. | High |
| LinkedIn language profile help | https://www.linkedin.com/help/linkedin/answer/a541878/create-or-delete-a-profile-in-another-language | Secondary language profiles require manual translation; viewers may see the language matching their setting. | Updating only the English About. | High |
| LinkedIn Open to Work help | https://www.linkedin.com/help/linkedin/answer/a507508/making-your-profile-visible-or-hidden-from-recruiters | Open to Work can be visible to all members, recruiters only or only the user; it can be edited or deleted. | Leaving a public job-seeking badge without considering buyer trust. | High |
| LinkedIn website link help | https://www.linkedin.com/help/linkedin/answer/a548010/add-a-website-to-your-profile?lang=en | Contact info can display up to three website links. | Paying for Premium only to add a basic website link. | High |
| LinkedIn Featured FAQ | https://www.linkedin.com/help/linkedin/answer/a550453 | Featured can showcase posts, articles, images, documents and links. | Relying on Activity alone as the Talk CTA. | Medium-high |
| LinkedIn profile views help | https://www.linkedin.com/help/linkedin/answer/a540651/accessing-the-who-viewed-your-profile-feature | Profile-view insight is owner/privacy constrained and may require thresholds or Premium detail. | Public scraping as the source for profile analytics. | High |
| LinkedIn post analytics help | https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content | Post analytics can include discovery, profile activity, engagement and link engagement, visible to the owner. | Judging a post only by likes. | High |
| LinkedIn creator/profile tools update | https://www.linkedin.com/help/linkedin/answer/a5999182 | Profile tools, About placement, analytics and profile buttons have changed over time. | Old creator-mode advice as a reliable current setup guide. | Medium-high |
| Google Analytics campaign URL docs | https://support.google.com/analytics/answer/10917952?hl=en | `utm_source`, `utm_medium`, `utm_campaign` and `utm_content` should separate placements. | One generic LinkedIn URL for Contact, Featured, About and posts. | High |
| Live LinkedIn public fetch | `curl -I https://www.linkedin.com/in/aurimas-purlys-534a1a27b?originalSubdomain=es` returned HTTP 999 on 2026-05-23 | Public automation cannot reliably inspect the profile. | Treating public fetch failure as proof the profile is wrong. | High |
| Live owned destinations | LinkedIn homepage and Talk UTMs returned HTTP 200 with correct canonicals on 2026-05-23 | LinkedIn can safely route into owned assets after profile cleanup. | Technical route blockers as a reason not to measure. | High |

## P0 Verification Checklist Before Post 1

Do not publish the first LinkedIn post until this checklist is either done or consciously waived.

| Check | Acceptable State | Why It Matters |
| --- | --- | --- |
| English About | New copy is live and focuses on growing up in Ireland, without birthplace details. | Keeps the story warm, premium and focused on Ireland-raised/bilingual teacher identity. |
| Spanish About | Matching Spanish copy is live. | Spanish-speaking prospects may see the Spanish profile automatically. |
| Public Open to Work | Hidden, recruiter-only, visible only to owner, or intentionally kept with a note. | Public job-seeking can weaken independent premium-teacher trust. |
| Primary role in intro | `English with Auris` appears as the main current identity if LinkedIn allows. | Prevents profile visitors from seeing Auris mainly as an academy/company employee. |
| Contact info website | Homepage UTM is added. | Gives profile visitors a clean owned route. |
| Featured or profile link | Talk the Talk UTM is added if the surface is available. | Turns profile curiosity into a low-friction speaking action. |
| Experience proof | `English with Auris` entry mentions 11+ years, Spanish speakers, practical conversation/work English, private/small group/company classes and portal continuity. | Makes the profile more than a CV. |
| Skills | Relevant terms are visible: Business English, English conversation, English for Spanish speakers, pronunciation, English for work, clases particulares de ingles. | Helps category clarity without academy stuffing. |
| Baseline metrics | Record profile views, search appearances, post impressions, followers and connections for the prior 7 days. | Makes the post interpretable. |

## Owner Handoff Row

Use this one row after Auris checks LinkedIn. A screenshot is enough; redact viewer names or private identities.

| Date | about_en_status | about_es_status | open_to_work_visibility | primary_intro_role | contact_info_link | featured_link | followers | connections | profile_views_7d | search_appearances_7d | post_impressions_7d | notes |
| --- | --- | --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| 2026-__-__ |  |  |  |  |  |  |  |  |  |  |  |  |

Allowed short values:

- `about_en_status`: `old`, `updated`, `unknown`
- `about_es_status`: `old`, `updated`, `unknown`
- `open_to_work_visibility`: `public`, `recruiters_only`, `owner_only`, `removed`, `intentionally_kept`, `unknown`
- `primary_intro_role`: `english_with_auris`, `english_for_business_spain`, `education`, `mixed`, `unknown`
- `contact_info_link`: `homepage_utm_live`, `missing`, `unknown`
- `featured_link`: `talk_utm_live`, `missing`, `unavailable`, `unknown`

## Go / Hold Rules

Go with LinkedIn Post 1 only if:

- English and Spanish About are updated or Auris consciously decides Spanish can wait.
- Public Open to Work is resolved or intentionally kept.
- English with Auris is visibly the main independent-teacher identity.
- At least one owned-site link is in Contact info, Featured or a plain About URL.
- Baseline metrics are recorded.

Hold if:

- The profile still foregrounds public job seeking.
- The intro still mainly reads as English for Business Spain or an academy/company identity.
- The About copy still contains the older marketplace-style version.
- There is no owned-site link from LinkedIn.
- No baseline exists and there is no urgent reason to post.

## First Post, Locked Draft

Post only after the P0 checks.

```text
You understand the meeting, but when someone asks for your opinion, your English gets smaller.

This happens to a lot of Spanish-speaking professionals I work with.

It does not always mean your level is low. Very often it means you are doing four jobs at the same time: translating, checking grammar, searching for the perfect word, and trying to sound professional.

A useful exercise before a meeting: choose one real topic and answer out loud for 90 seconds. Do not aim for perfect English. Listen for the moment where you stop, simplify too much, or avoid the detail.

That pause is not a failure. It is class material.

I grew up in Ireland and have spent more than 11 years helping Spanish speakers use English with more confidence in real situations.

I made Talk the Talk for short speaking prompts like this. Try one prompt, then bring the difficult part to class if you want personal feedback.

https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller
```

## Measurement After Post 1

Record 24 hours, 72 hours and 7 days after posting.

| Date | Window | Impressions | Reactions | Comments | Link Clicks | Profile Views | DMs | Talk Starts | Talk Completions | Trial Clicks | Inquiry Notes |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 2026-__-__ | 24h |  |  |  |  |  |  |  |  |  |  |
| 2026-__-__ | 72h |  |  |  |  |  |  |  |  |  |  |
| 2026-__-__ | 7d |  |  |  |  |  |  |  |  |  |  |

Continue LinkedIn if it creates at least one of:

- relevant profile views from professionals or local contacts
- link clicks into Talk or the homepage
- a DM or inquiry
- Talk starts/completions from the LinkedIn UTM
- a student/lead saying LinkedIn helped them trust the offer

Keep LinkedIn credibility-only if it produces impressions but no profile actions, clicks, DMs, Talk events or lead notes after two posts.

## What Not To Do Yet

- Do not pay for Premium only for a custom button.
- Do not post daily to compensate for a mixed profile.
- Do not add LinkedIn to the public website footer yet.
- Do not send LinkedIn visitors to Superprof or Tusclases while marketplace price anchors remain mixed.
- Do not make the profile sound like an academy, corporate training vendor or AI tool.
- Do not use cold-DM automation.
- Do not publish from the automation.

## Exact Next Owner Check

Use this short ask if owner evidence is needed:

```text
Quick LinkedIn check: are the English and Spanish About sections updated, is Open to Work hidden/removed, and does the intro show English with Auris as the main current role? A screenshot is enough; please crop private profile-view identities.
```

## Next-Cycle Packet

If Auris sends a LinkedIn screenshot or notes:

1. Fill the owner handoff row in this artifact.
2. Update `linkedin-profile-readiness-and-first-post-plan.md` and `linkedin-canonical-url-and-profile-funnel.md`.
3. If P0 passes, prepare Post 1 as a ready-to-copy note but do not publish.
4. If P0 fails, recommend only the smallest profile fix.

If no LinkedIn evidence arrives:

1. Do not audit more LinkedIn docs.
2. Return to GBP Review Truth or Day 0 GBP Performance if owner data arrives.
3. Otherwise rotate to student-platform retention proof or pricing/profile coherence.
