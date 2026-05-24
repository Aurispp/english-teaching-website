# Profile Price And LinkedIn Readiness

Created: 2026-05-22 Cycle 18

Purpose: decide whether Auris should publish the GBP/LinkedIn proof sprint now, pause for profile/price cleanup, or route attention somewhere else.

Updated: 2026-05-22 Cycle 19 with owner-side LinkedIn profile snapshot. Detailed follow-up artifact: `linkedin-profile-readiness-and-first-post-plan.md`.

## Primary Decision

Do not delay the first GBP post for perfect profile cleanup, but do gate LinkedIn and marketplace links.

The practical sequence is:

1. Keep the Week 1 GBP post pointed to the indexed homepage with UTM tracking.
2. Publish from LinkedIn only after Auris confirms the personal profile headline/about are aligned with English with Auris.
3. Do not add Superprof/Tusclases links to the website yet.
4. Keep the website private-class price at 40 EUR/h.
5. Decide whether Tusclases and any lower online-marketplace price are intentional channel prices or should be aligned upward.

The reason is simple: GBP can already use the strongest public proof, the Google reviews. LinkedIn can fit the professional-confidence lane, but it risks looking unclear if the profile still presents a different/older identity. Marketplaces are useful proof and intent sources, but visible lower prices can undercut the premium funnel if they are linked casually from the website.

## Research Question

What must be aligned before the GBP/LinkedIn proof sprint so 40 EUR/h feels coherent, without waiting forever or turning the site into an academy-style funnel?

## Source Discovery

For this question, the highest-signal evidence should live where a buyer compares identity, price, and trust:

| Source Type | Why It Matters | Signal This Cycle |
| --- | --- | --- |
| Own website pricing and links | Shows what a direct buyer sees before comparing elsewhere. | High: website has 40 EUR/h and no visible profile/marketplace links in static homepage HTML. |
| Google reviews endpoint | Tests whether premium proof exists without marketplace/social links. | High: live endpoint still returns 5.0/15 with different visible review sets in ES/EN. |
| Auris Superprof/Tusclases profiles | Shows public price anchors and old/new copy consistency. | High: Superprof direct page shows 40 EUR/h; search snippets also show conflicting older 35/30 anchors; Tusclases remains 30 EUR/h. |
| Auris LinkedIn public result | Tests whether LinkedIn is discoverable and aligned enough to post. | Medium-high: public result is discoverable but direct access is limited. |
| Premium coach/business-English examples | Shows what makes higher pricing credible. | High: specificity, proof, real work situations, and coaching structure matter more than "personalised". |
| Local marketplace lists | Shows the price field buyers compare against. | High: many local listings are visibly lower than the website price. |
| Professional English competitor pages | Tests whether LinkedIn/professional lane is crowded or distinctive. | Medium-high: lane is crowded, but still compatible with Auris if personal and specific. |
| Official/profile platform docs | Useful for constraints, but less central than buyer-visible evidence this cycle. | Carry forward GBP doc constraints from Cycles 16-17. |

Lower-signal sources for this cycle:

- Generic social-media advice, because the blocker is profile coherence and price trust, not posting frequency.
- More SEO resubmission advice, because Cycle 17 already found discovery is not the core issue.
- Short-form creator scans, because they mostly prove attention rather than premium buyer trust.

## Local Evidence Inspected

Strategy memory:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `profile-publishing-readiness-audit.md`
- `owner-profile-alignment-plan.md`
- `pricing-positioning.md`
- `content-strategy.md`
- `review-proof-library.md`
- `gbp-linkedin-proof-sprint.md`
- `channel-fit-and-content-scan.md`
- `seo-indexing-diagnostics.md`
- `gbp-week-one-execution-pack.md`
- `automation-research-loop.md`

Website/code evidence:

- `src/components/PricingSection.jsx`
- `src/components/GoogleReviewsSection.jsx`
- `src/components/ContactSection.jsx`
- `src/translations.js`
- `netlify/functions/google-reviews.js`
- live homepage HTML link extraction
- live UTM destination checks for homepage, Talk, and business page

Local interpretation:

- The website's current direct offer remains transparent: private classes at 40 EUR/h, group classes at 20 EUR/h.
- The pricing component already includes portal, billing/NIF, business-page link, and reviews immediately after price. This means the next risk is not "no proof at all"; it is whether outside profiles tell a conflicting story.
- The live homepage static HTML does not expose LinkedIn, Instagram, TikTok, Superprof or Tusclases links. That is currently good: it avoids routing premium leads into lower-price comparison pages before the price policy is deliberate.
- The strategy docs already contain a ready GBP/LinkedIn sprint, so this cycle should reduce launch risk rather than produce another broad calendar.

## Data And API Pass

Live checks on 2026-05-22:

| Data Layer | Finding | Strategic Meaning |
| --- | --- | --- |
| Google reviews endpoint ES | Status 200, `places-new`, 5.0 rating, 15 reviews, 5 visible reviews. | Review proof remains the strongest public trust layer. |
| Google reviews endpoint EN | Status 200, `places-new`, 5.0 rating, 15 reviews, 5 visible reviews. | Bilingual review extraction still expands usable proof themes. |
| Homepage external link extraction | 15 static links; external links were only font resources, not social/marketplace profiles. | Do not add profile links until Auris confirms which ones should represent the brand. |
| GBP homepage UTM | 200 and final URL preserved. | GBP Post 1 can route safely to homepage. |
| LinkedIn Talk UTM | 200 and final URL preserved. | LinkedIn Post 1 can route safely to Talk the Talk if profile is aligned. |
| LinkedIn business-page UTM | 200 and final URL preserved, but prior URL Inspection says discovered/not indexed. | Business page works technically but should not be the first LinkedIn destination yet. |
| Repo status | Website dirty because strategy memory is untracked; teaching platform dirty with unrelated artifacts. | No public code changes should be made inside this cycle. |

## External Evidence

| Source | Evidence | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- | --- |
| Auris LinkedIn public result, https://es.linkedin.com/in/aurimas-purlys-534a1a27b | Public result shows Aurimas/Auris in Castelldefels, 268 followers/264 contacts, English for Business Spain, personal website, and an about snippet. | LinkedIn is discoverable enough for credibility. | Treating LinkedIn as proven acquisition without profile/metric access. | Medium-high |
| English for Business Spain LinkedIn, https://es.linkedin.com/company/english-for-business-spain | Company page frames itself as a 30+ year corporate training provider with 51-200 employees and FUNDAE/company focus. | Auris should not blur into the academy/corporate-provider identity. | Posting from/around an unclear "English for Business Spain" identity without personal positioning. | High |
| Auris Superprof direct profile, https://www.superprof.es/master-your-english-whilst-having-fun-experienced-teacher-offering-online-and-face-face-classes.html | Direct page shows verified profile, 5.0/7, 20 students, 40 EUR/h, free first class, Ireland/11 years/portal/NIF copy. | Superprof is now largely aligned and even has improved profile copy. | Old assumption that all Superprof evidence undercuts 40 EUR/h. | High |
| Superprof search/list snippets for Auris | Search/listing snippets still show conflicting 35 EUR/h or 30 EUR/h anchors in some contexts. | Buyers may see stale or list-level lower anchors before the direct profile. | Assuming the direct profile alone controls price perception. | Medium-high |
| Tusclases Auris profile/listing, https://www.tusclasesparticulares.com/profesores/barcelona/master-your-english-whilst-having-fun-1629639 | Public profile evidence shows 30 EUR/h, first class free, adults/companies, 11-year/Ireland story. | Tusclases can support proof, but the price mismatch is real. | Linking Tusclases as neutral trust proof from the premium website. | High |
| Tusclases Castelldefels listing, https://www.tusclasesparticulares.com/profesores-ingles/castelldefels.aspx | Visible local listings include many 10-30 EUR/h alternatives and academy/native-teacher offers. | Marketplace shoppers are comparison-shopping on price. | Marketplace-first premium positioning. | High |
| LUVEnglish, https://luvenglish.com/ | Barcelona coach uses real-world English for professionals, teams, confidence, meetings, client calls and small groups. | The professional-confidence lane is real and locally plausible. | Assuming "professionals + confidence" is unique by itself. | Medium-high |
| Madeleine Cooke, https://www.madeleine-cooke.com/ | Premium business-English coaching leans on leaders, interviews, presentations, meetings, measurable outcomes and named corporate clients. | Higher-end English coaching needs clear outcome/proof. | Generic conversation copy at premium price. | Medium-high |
| English Consulting, https://www.english-consulting.es/ | Business English training promises meetings, presentations, client calls, AI-personalized practice, dashboards and monthly feedback. | Portal/progress/follow-up proof matters in the market. | Treating the portal as a small extra instead of premium support. | Medium-high |
| TailoredTalks, https://tailoredtalks.co/ | Private coaching is tied to real-life professional goals, clarity, confidence, intonation, communication skills and 6-hour monthly structure. | Specific coaching structure supports premium positioning. | Loose "business English" wording. | Medium-high |
| Executive Business English LinkedIn, https://www.linkedin.com/company/executive-business-english | Self-employed professional-training brand sells leadership communication, meetings, negotiations, presentations and global professionals. | A solo/small brand can credibly use LinkedIn for professional English. | The idea that only academies can win LinkedIn. | Medium |
| The English Training Company, https://www.englishtco.com/ | Professional proof includes 15+ years, named client types, speaking/meeting/presenting confidence and technical-team testimonials. | Specific work contexts and trainer background are trust multipliers. | Broad "classes for companies" as enough. | Medium-high |
| Confident Business English, https://confidentbusinessenglish.com/ | Content-led positioning is confidence for busy senior professionals in short weekly lessons. | LinkedIn/content can work when the audience and problem are precise. | General grammar-content strategy for professionals. | Medium |

## Falsification

### Hypothesis H014: GBP plus LinkedIn should be the first social/content sprint.

Status: refined.

This cycle strengthens GBP-first but gates LinkedIn.

Evidence:

- The GBP homepage UTM works and review proof remains strong.
- LinkedIn search result shows a real discoverable personal profile, but direct/profile access remains limited.
- Professional English examples show LinkedIn-compatible themes: meetings, presentations, confidence, clarity and leadership communication.
- English for Business Spain company evidence could confuse the personal/non-academy position if Auris posts without clarifying English with Auris on the personal profile.

Updated confidence:

- GBP: high.
- LinkedIn as lead channel: medium.
- LinkedIn as credibility/professional proof: medium-high after profile alignment.

Next practical test:

- Publish GBP Post 1 to homepage after owner baseline.
- Publish LinkedIn Post 1 only after Auris confirms/updates headline and about. Judge by profile views, link clicks, DMs and manual lead notes, not likes.

Stop/change evidence:

- If LinkedIn creates attention but no profile actions or qualified messages after two posts, keep it as credibility-only and prioritize GBP/reviews/referrals.

### Hypothesis H004: 40 EUR/h is viable only if premium proof is visible quickly.

Status: strengthened and narrowed.

This cycle strengthens the website price but weakens casual profile linking.

Evidence:

- Direct Superprof now shows 40 EUR/h and stronger copy including Ireland, 11 years, Spanish-speaker issues, portal and NIF.
- Tusclases remains 30 EUR/h.
- Local marketplace lists show many lower alternatives.
- Premium/professional examples justify higher prices with specific outcomes, structure, feedback, credentials and proof.
- Website has the right price and some proof, but profile links could send buyers to a lower-price comparison context.

Updated confidence: high.

Next practical test:

- Keep website at 40 EUR/h.
- Ask every new lead whether they saw Superprof/Tusclases and whether price was an issue.
- If marketplace comparison becomes common, align public marketplace prices or explicitly document a channel-price policy.

Stop/change evidence:

- If high-quality leads repeatedly mention "I saw 30 EUR/h elsewhere" before booking, profile price alignment becomes a fix-before-more-content task.

### New Hypothesis H021: Marketplace profiles are useful proof only when the price policy is intentional.

Status: new.

Confidence: medium-high.

Evidence:

- Superprof is now mostly aligned and has useful proof, but snippets/list contexts can still show lower anchors.
- Tusclases remains 30 EUR/h with strong proof and visibility.
- Website has no marketplace links right now, which avoids actively creating comparison friction.
- Marketplace pages are high-intent but price-compressed.

Next test:

- During the first GBP/LinkedIn sprint, add a `price anchor seen` field to the manual lead-source ledger.
- Do not add marketplace links to the website until either all public prices align or Auris deliberately wants a channel-price ladder.

## Strategic Synthesis

The strongest next move is not "more social" and not "more SEO pages." It is a proof-controlled first publish:

1. GBP Post 1 first, because Google reviews already create trust and the homepage is indexed.
2. LinkedIn Post 1 second, but only after personal-profile alignment.
3. Website and profile links stay owned-first; do not introduce marketplace links into the site.
4. Marketplace profiles stay as high-intent discovery surfaces, not premium-brand destinations.

What Auris should not do yet:

- Do not lower the website price to match Tusclases.
- Do not link Superprof/Tusclases from the homepage/footer while prices are mixed.
- Do not route LinkedIn traffic to the business page as the first destination while it is discovered/not indexed.
- Do not publish from an unclear company/academy identity if the promise is personal teacher trust.
- Do not delay GBP until every profile is perfect.

Evidence that would change this recommendation:

- Owner-side GBP baseline shows a very weak or incomplete profile with no photos/services/review replies, making cleanup more urgent than posting.
- Auris confirms LinkedIn is inactive or not a place where his buyer network exists.
- New inquiries repeatedly come from marketplaces and book happily at the website price, reducing the urgency of price alignment.
- Marketplace leads convert poorly or only negotiate down, strengthening the case to raise/hide marketplace prices.

Risk of acting too early:

- LinkedIn post lands on a profile that does not clearly connect to English with Auris.
- Buyers compare Tusclases at 30 EUR/h and question the direct price.
- GBP post is published without baseline, so the result cannot be judged.

Risk of waiting:

- The current review proof goes unused.
- SEO remains tiny while the business waits for pages to index.
- Research keeps producing artifacts without real market feedback.

## Implementation-Ready Checklist

### Before GBP Post 1

- Record owner-side GBP baseline: views, searches, website clicks, calls, messages, bookings, top search terms.
- Confirm website link points to `https://englishwithauris.com/`.
- Confirm service entries cover private classes, online classes, Castelldefels/Gava where true, professional English, conversation/confidence, small groups where true.
- Confirm at least one real face/class/online setup photo.
- Reply to visible reviews using the review-specific templates in `gbp-week-one-execution-pack.md`.
- Publish only GBP Post 1 to the homepage UTM.

### Before LinkedIn Post 1

- Confirm the posting source: personal profile is recommended over a broad company page for now.
- Update/confirm headline:

`Bilingual English teacher for Spanish-speaking adults and professionals | Real conversation, confidence and English for work | English with Auris`

- If the profile needs a shorter professional headline:

`English coach for Spanish-speaking professionals | Meetings, presentations and confidence | English with Auris`

- About section:

`I help Spanish-speaking adults and professionals use English with more confidence in real situations: meetings, presentations, client calls, interviews, travel and everyday conversation.`

`I grew up in Ireland and have spent more than 11 years teaching English to Spanish speakers in Barcelona and online. My classes are practical and personal: we work on conversation, pronunciation, useful grammar, vocabulary and the moments where you hesitate or translate too much.`

`Between classes, I use the student portal I built to keep vocabulary, materials, flashcards and progress organised, so the work does not disappear after the hour ends.`

`I teach privately and in small groups, and I can issue invoices with NIF for professionals, freelancers and companies.`

- Publish LinkedIn Post 1 to Talk the Talk UTM only after profile alignment.

### Marketplace Price Policy

| Policy | Use If | Risk | Current Recommendation |
| --- | --- | --- | --- |
| Align all public prices to 40 EUR/h | Auris wants a clean premium story and fewer price-sensitive leads. | Marketplace volume may drop. | Best long-term. |
| Keep marketplace price lower as a channel price | Auris wants lower-friction discovery from marketplaces. | Leads may compare and negotiate. | Acceptable only if deliberate. |
| Keep lower prices but do not link marketplaces from website | Auris wants marketplace demand without premium-site confusion. | Price mismatch still exists in search. | Best short-term if no profile edits now. |
| Lower website to 30 EUR/h | Auris wants volume over premium positioning. | Undercuts portal/follow-up and current strategy. | Not recommended. |

### Lead-Source Ledger Additions

Add these fields to the existing manual ledger:

- `First source mentioned`
- `Did lead mention Superprof/Tusclases? yes/no`
- `Price anchor seen: 40 / 35 / 30 / none / unknown`
- `Price objection: yes/no/exact words`
- `Buyer type: local adult / professional / company / parent / exam / price-shopper / referral`
- `Outcome: booked trial / asked more / no reply / not fit`

## Final Publish Gate

Proceed with GBP if:

- Homepage UTM returns 200.
- Owner-side GBP baseline is recorded.
- A real photo and review replies/services are acceptable enough.

Proceed with LinkedIn if:

- Personal profile headline/about visibly match English with Auris.
- Link points to Talk or homepage, not marketplace and not business page first.
- Auris can record profile views/link clicks/DMs manually after posting.

Do not add marketplace links if:

- Tusclases remains 30 EUR/h and Superprof/search snippets remain mixed.
- Auris has not decided whether those are legacy/channel prices.

## Next-Cycle Packet

Recommended next theme: owner-side publishing or referral/review loop.

If Auris provides owner-side GBP metrics:

- Update `gbp-week-one-execution-pack.md` with the baseline.
- Score GBP readiness and prepare the exact post/photo choice.

If Auris confirms LinkedIn profile copy:

- Update the sprint ledger and publish-ready LinkedIn profile checklist.
- Compare personal profile versus any company page before using LinkedIn as an acquisition test.

If no owner data arrives:

- Do not repeat this price/profile audit.
- Move to referral/review acquisition: how to ask current happy students for one specific review/referral without sounding like an academy.

Hypotheses to revisit next:

- H002 GBP beats broad SEO near-term.
- H004 premium proof before price resistance.
- H014 GBP plus LinkedIn sprint.
- H015 manual lead-source notes.
- H019 GBP owner-side baseline.
- H021 marketplace profiles only help when price policy is intentional.

## Cycle 19 LinkedIn Owner-Side Update

Auris provided the current LinkedIn profile view after updating the headline.

What changed:

- Headline now matches the strategy well:
  - `Bilingual English teacher for Spanish speakers | Confidence, real conversation and English for work | English with Auris`

What is still blocking LinkedIn Post 1:

- The About section still uses the old broader copy.
- `En busca de empleo` is visible and may weaken the premium independent-teacher signal.
- The intro/experience layer still foregrounds English for Business Spain or education more than English with Auris.
- Recent LinkedIn baseline is tiny: 2 profile views, 3 post impressions, 0 search appearances.

Decision update:

- GBP-first recommendation still stands.
- LinkedIn should wait for P0 profile cleanup, not because the channel is wrong, but because the profile now acts as the landing page for the first post.
- Detailed checklist and first-post measurement plan are in `linkedin-profile-readiness-and-first-post-plan.md`.
