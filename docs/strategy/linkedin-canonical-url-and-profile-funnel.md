# LinkedIn Canonical URL And Profile Funnel

Created: 2026-05-22 Cycle 20
Updated: 2026-05-23 Cycle 33 with post-cleanup profile-funnel gate.

Purpose: register Auris's canonical LinkedIn profile URL and decide how LinkedIn should connect to the owned site, Talk the Talk, and future measurement without weakening the premium personal-teacher position.

## Primary Decision

Use LinkedIn as a trust surface and a small professional-content test, but keep owned pages as the conversion destinations.

The canonical profile URL supplied by Auris is:

`https://www.linkedin.com/in/aurimas-purlys-534a1a27b?originalSubdomain=es`

For clean sharing and tracking notes, use:

`https://www.linkedin.com/in/aurimas-purlys-534a1a27b/`

Do not add the LinkedIn profile link to the public website yet. Add it later only after the LinkedIn P0 cleanup is complete, because the website currently avoids sending premium leads into mixed public-profile contexts. The first priority is the reverse flow: LinkedIn profile visitors should have clean routes into the owned website and Talk the Talk.

## Source Discovery

For this question, the most useful evidence should live in:

| Source Type | Why It Matters | Cycle 20 Result |
| --- | --- | --- |
| Auris-supplied canonical URL | Confirms the exact profile to record in memory. | High signal; use the clean `www.linkedin.com/in/.../` URL for future ledgers. |
| Public LinkedIn search result | Shows what unauthenticated or search-result viewers may see. | Search result still shows older public snippet/English for Business Spain context, so public index lag matters. |
| LinkedIn public-profile URL docs | Confirms the shareable public URL behavior. | High; a public profile URL starts with `/in/` and can be shared. |
| LinkedIn custom URL docs | Tests whether a cleaner branded slug is worth changing now. | Medium; LinkedIn recommends name/professional brand, but frequent changes can make profiles harder to find. Keep current URL for now. |
| LinkedIn contact-info website docs | Determines the free/non-Premium website-link path. | High; contact info can display up to three website links. |
| LinkedIn Featured docs | Determines whether Talk the Talk can be pinned without Premium. | High; Featured can include external links, but logged-in visibility/search limitations matter. |
| LinkedIn custom button docs | Tests the Premium button the UI was offering. | High; useful but Premium-only/select availability, so not required for the sprint. |
| GA4 UTM docs | Sets tracking discipline for profile/contact/featured/post URLs. | High; use source, medium, campaign and content consistently. |
| Live owned-site URL checks | Confirms the exact destinations will not break. | High; homepage/Talk profile UTMs return 200 and preserve final URL. |
| Website external-link extraction | Checks whether the current public site already points to LinkedIn or marketplaces. | High; no social/marketplace profile links are exposed. |
| Portal evidence | Validates the About-copy claim about between-class continuity. | High enough; dashboard exposes notes, Talk, flashcards, tasks, games and progress-ish activity. |

## External Evidence

| Source | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- |
| LinkedIn Help: add/remove a website from profile | Up to three website links can be shown in Contact info. | Paying for Premium only to add a basic website link. | High |
| LinkedIn Help: Featured section | Featured can showcase external links and chosen work samples; it is an individual-profile surface. | Relying on Activity alone for the Talk CTA. | High |
| LinkedIn Help: custom button | `Visit my website` or `Book an appointment` can be shown more prominently for eligible Premium/Business users. | Assuming every free profile has a visible CTA button. | High |
| LinkedIn Help: website-link/custom-button change | Former Creator Mode link behavior has changed; custom button is Premium-linked. | Using old LinkedIn advice about profile header links. | High |
| LinkedIn Help: public profile URL | A public profile URL can be shared and begins with `www.linkedin.com/in`. | Treating the `originalSubdomain=es` query as the canonical identity. | High |
| LinkedIn Help: custom URL | Custom URLs should use name/professional brand and changing often can make profiles harder to find. | Changing the URL casually before the first sprint. | High |
| LinkedIn Help: profile appearances vs views | Appearances measure reach; views show deeper interest; full analytics can be limited below threshold. | Expecting detailed owner analytics from a cold profile baseline. | High |
| Auris public LinkedIn search result | Public search still ties the profile to English for Business Spain and older snippets. | Assuming owner-side edits immediately change search perception. | Medium-high |
| Google Analytics UTM docs | External campaign links should carry `utm_source`, `utm_medium`, `utm_campaign`; `utm_content` distinguishes link placements. | Letting every LinkedIn link share the same unlabeled URL. | High |

## Data And Live Checks

| Check | Result | Interpretation |
| --- | --- | --- |
| Canonical user-supplied URL | Stored in this artifact. | Future cycles should stop guessing which LinkedIn profile is canonical. |
| Direct LinkedIn curl | HTTP 999 for `www` and `es` profile URLs. | Automated public fetch is blocked/limited; use search result plus owner-side screenshots for profile state. |
| Google search/public result | Shows `es.linkedin.com/in/aurimas-purlys-534a1a27b` with 268 followers/264 contacts and older context. | Public search lag can persist after owner edits. |
| Contact-info homepage UTM | 200, final URL preserved. | Safe for LinkedIn Contact info. |
| Featured Talk UTM | 200, final URL preserved. | Safe for Featured if Auris can add it. |
| Post 1 Talk UTM | 200, final URL preserved. | Safe for first LinkedIn post after profile cleanup. |
| About CTA homepage UTM | 200, final URL preserved. | Safe if Auris includes a plain URL in About text. |
| Google reviews endpoint | ES and EN both return 5.0 rating, 15 reviews, 5 visible reviews. | Reviews remain stronger public proof than marketplace links. |
| Homepage external-link extraction | 15 static hrefs; external links are font resources only; no LinkedIn/Superprof/Tusclases links. | Current owned funnel is protected from lower-price comparison paths. |

## Implementation-Ready Link Plan

Use these only after LinkedIn P0 cleanup is done.

| Placement | URL | Label | Why |
| --- | --- | --- | --- |
| LinkedIn Contact info website 1 | `https://englishwithauris.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_contact_info&utm_content=website_link` | `English with Auris` | Clean owned-site route for profile visitors. |
| LinkedIn Featured item 1 | `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_featured&utm_content=talk_the_talk` | `Try Talk the Talk` | Gives profile visitors a practical speaking action, not only a sales CTA. |
| LinkedIn About plain URL, optional | `https://englishwithauris.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_about_cta&utm_content=profile_about` | `englishwithauris.com` | Useful if Featured is unavailable or hidden. |
| LinkedIn Post 1 | `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller` | In-post link | Measures the first professional-confidence post separately from profile links. |
| Premium custom button, optional | `https://englishwithauris.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_custom_button&utm_content=book_or_website` | `Visit my website` or `Book an appointment` | Only worth using if Premium is already active and the button exists. Do not buy Premium just for this. |

Do not use:

- Superprof/Tusclases links as LinkedIn profile destinations while public prices are mixed.
- `/ingles-empresas-castelldefels` as the first LinkedIn destination while it is discovered/not indexed.
- The LinkedIn profile URL as the main CTA on the English with Auris website until the profile cleanup is complete.

## Website Link Policy

Current rule:

- Do not add a LinkedIn icon/footer link to `englishwithauris.com` yet.

Later rule:

- After LinkedIn P0 cleanup and one measured post, a small footer/profile icon can be considered.
- It should be a credibility link, not a primary CTA.
- Before adding it, check that the public LinkedIn result no longer foregrounds confusing context more than English with Auris.

## Falsification

### Idea we wanted to be true

"Now that we have the canonical LinkedIn URL, add it everywhere as trust proof."

Result: weakened.

Evidence:

- The public search result can lag behind owner-side changes and still show old context.
- The website currently avoids social/marketplace comparison paths and should not weaken that accidentally.
- LinkedIn contact/featured links should send visitors into owned assets first.

### Cheaper alternative

Instead of adding LinkedIn to the website, add owned-site and Talk links inside LinkedIn, then record profile/link/action metrics. This tests LinkedIn without changing the public website.

## Decision Rules

Proceed with LinkedIn Post 1 when:

- English and Spanish About are updated.
- Public Open to Work is removed or intentionally restricted.
- English with Auris is visible as the primary/current identity where LinkedIn allows.
- Contact info and/or Featured has one clean owned-site link.
- Baseline owner metrics are recorded.

Keep LinkedIn as credibility-only if:

- Two posts produce profile views but no relevant clicks, DMs, Talk starts or qualified inquiry notes.
- Profile visitors mention confusion around English for Business Spain, job seeking, or pricing.

Promote LinkedIn on the website only if:

- The profile is clean.
- Public snippets are at least not actively contradictory.
- The profile creates trust or relevant actions in the first sprint.

## Cycle 33 Profile-Funnel Gate

The funnel policy remains: LinkedIn should route to the owned website and Talk the Talk before the owned site routes visitors back to LinkedIn.

Cycle 33 live checks:

| Check | Result | Decision |
| --- | --- | --- |
| Direct public LinkedIn profile fetch | HTTP 999 for the canonical URL. | Do not use scraping to decide if cleanup worked; use owner screenshot/notes. |
| Homepage Contact-info UTM | HTTP 200, canonical homepage. | Safe destination after cleanup. |
| Talk Featured/Post UTM | HTTP 200, canonical `/talkthetalk`. | Safe destination after cleanup. |
| Website social/marketplace link scan | No obvious public LinkedIn/Superprof/Tusclases links in source scan. | Keep the public site free of mixed-profile exits for now. |

Before adding any LinkedIn link to the public website, require:

1. English and Spanish About cleanup confirmed.
2. Public `Open to Work` resolved or intentionally kept.
3. `English with Auris` visible as the main independent profile identity.
4. Contact info and/or Featured routes to owned English with Auris URLs.
5. One measured post or profile-link test produces a useful trust/action signal.

This blocks a tempting but premature move: adding the LinkedIn profile everywhere as social proof. The cleaner near-term move is still the reverse route, from LinkedIn into owned assets.

## Next-Cycle Packet

Recommended next theme: publish-readiness or referral/review loop.

If Auris confirms LinkedIn P0 cleanup is done:

- Check owner-side metrics again.
- Update this artifact and `linkedin-profile-readiness-and-first-post-plan.md`.
- Produce a final pre-post checklist and second-post draft.

If no owner-side LinkedIn update arrives:

- Move to GBP owner baseline or referral/review loop.
- Do not keep re-auditing LinkedIn docs.

Hypotheses:

- H005 social as trust-building.
- H014 GBP plus LinkedIn sprint.
- H015 manual notes required.
- H021 marketplace profiles only help when price policy is intentional.
- H022 LinkedIn profile as landing page before posting channel.
