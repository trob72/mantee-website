# Town of Mantee Website Planning Repository

This repository contains the initial planning materials and static prototype shell for an official Town of Mantee municipal website.

The project goal is to create a low-cost, professional, and maintainable public information hub for a small rural municipality in Mississippi. The first working version is planned as a managed WordPress site, with this repository serving as the planning baseline, content inventory, and early static prototype.

## Project Direction

- Official Town of Mantee public information hub
- Website remains the official source of information
- Facebook may be used to distribute links and reminders
- Managed WordPress implementation later
- `.gov` domain goal
- Mobile-first public access
- Transparent government records and resident services
- Community identity and local assets

## Main Website Sections

- Public Notices
- Meetings
- Ordinances
- Building Permits
- Resident Services
- Community Center
- Farmers Market
- Walking Track
- Mantee Depot
- Mantee Heritage & History Museum
- Events
- Contact

## Repository Structure

```text
mantee-website/
  AGENTS.md
  README.md
  docs/
  prototype/
  wordpress/
  board-review/
```

## Current Prototype

The static prototype lives in `prototype/` and can be opened directly in a browser by opening `prototype/index.html`.

It is intentionally lightweight:

- No framework
- No build step
- Shared CSS and JS only
- Placeholder image slots for future approved local photography
- Content marked `NEEDS_CONFIRMATION` where facts are not yet verified

To serve it locally:

```powershell
cd prototype
python -m http.server 8088 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8088/`.

## Static Preview Deployment

The repository includes a GitHub Pages workflow at `.github/workflows/pages.yml`.

When this repository is pushed to GitHub and Pages is configured to use GitHub Actions, the workflow publishes the `prototype/` folder as a static review preview.

See `docs/static-preview-plan.md` for setup notes.
See `docs/publishing-checklist.md` for the remaining publishing steps.

## Important Content Rule

Do not publish final public information until the Town confirms it. Unknown items should remain clearly marked as:

```text
NEEDS_CONFIRMATION
```

This includes fees, schedules, rules, ordinances, names, phone numbers, email addresses, forms, and official procedures.

## Planning Documents

- `docs/site-map.md` - proposed site structure and navigation
- `docs/content-inventory.csv` - starter content inventory with confirmation status
- `docs/decision-log.md` - project decisions, approval status, and open questions
- `docs/needs-confirmation-register.csv` - working register of facts that must be confirmed before publication
- `docs/publishing-checklist.md` - GitHub repository and Pages publishing checklist
- `docs/requirements-summary.md` - project goals, constraints, and requirements
- `docs/records-conventions.md` - naming and publishing conventions for public records
- `docs/style-guide.md` - visual and editorial style direction
- `docs/launch-checklist.md` - readiness checklist before launch
- `docs/maintenance-sop.md` - starter maintenance process

## WordPress Planning

- `wordpress/content-model.md` - proposed pages, posts, records, and fields
- `wordpress/plugin-plan.md` - low-cost plugin strategy
- `wordpress/migration-plan.md` - steps from prototype to managed WordPress

## Board Review

- `board-review/board-brief-v1.md` - short board-facing project brief
- `board-review/confirmation-packet-v1.md` - review packet for confirming facts, decisions, and launch scope
