# Content Intake Template

Use this template when Courtney or another Town source sends information back.

The purpose is to turn raw replies, documents, forms, photos, and notes into reviewed website-ready content without losing source context. Do not paste private, sensitive, or unapproved raw messages directly into public-facing prototype pages.

## Intake Rules

- Capture the source of every fact.
- Keep raw emails, scans, and working files in a private local folder until they are reviewed.
- Do not publish contact details, fees, rules, forms, ordinance text, or legal/policy language until approved.
- Mark uncertain items as `NEEDS_CONFIRMATION`.
- Prefer official source documents over memory.
- If a fact changes a public workflow, fee, rule, or legal statement, treat it as needing board/legal/authorized review before publication.

## Suggested Local Working Folder

Use a private local folder for raw incoming material, for example:

```text
C:\Roberson Drone Solutions\Mantee Website\Content Intake\
```

Recommended subfolders:

```text
Content Intake\
  01-contact\
  02-meetings\
  03-public-notices\
  04-ordinances\
  05-building-permits\
  06-resident-services\
  07-community-center\
  08-community-events\
  09-photos\
  10-accounts-channels\
```

Important: raw intake files may contain information that is not ready for public release. Do not add raw intake files to the public GitHub repository unless they are reviewed and approved for publication.

## One-Item Intake Template

Copy this section for each reply, document, or confirmed fact.

```text
Intake ID:
Date received:
Received from:
Area:
Related prototype page:
Related confirmation ID:

What was received:

Exact confirmed facts:

Source document or source note:

Is this approved for public website use?

Does this need board/legal/authorized review?

What page should this update?

Recommended website wording:

Files received:

Open questions:

Next action:

Status:
```

## Field Guidance

### Intake ID

Use a simple ID such as:

```text
INT-001
INT-002
INT-003
```

Keep the matching row in `docs/content-source-log.csv`.

### Area

Use one of these areas:

- Official Contact
- Meetings
- Public Notices
- Ordinances
- Building Permits
- Resident Services
- Community Center
- Community Places
- Events
- Photos
- Accounts/Channels
- Other

### Related Prototype Page

Use the likely page:

- `prototype/index.html`
- `prototype/public-notices.html`
- `prototype/meetings.html`
- `prototype/ordinances.html`
- `prototype/building-permits.html`
- `prototype/resident-services.html`
- `prototype/community-center.html`
- `prototype/community.html`
- `prototype/contact.html`

### Related Confirmation ID

Use IDs from `docs/needs-confirmation-register.csv` when possible.

Examples:

- `NC-001` for Town office physical address.
- `NC-007` for regular meeting schedule.
- `NC-017` for permit fees.
- `NC-024` for Community Center rules and fees.
- `NC-030` for approved photos.

### Approval Status

Use one of:

- `APPROVED_FOR_PUBLIC_USE`
- `NEEDS_CONFIRMATION`
- `NEEDS_BOARD_REVIEW`
- `NEEDS_LEGAL_REVIEW`
- `PRIVATE_REFERENCE_ONLY`
- `DO_NOT_PUBLISH`

### Content Status

Use one of:

- `RECEIVED`
- `IN_REVIEW`
- `READY_TO_DRAFT`
- `DRAFTED_IN_PROTOTYPE`
- `APPROVED_FOR_LAUNCH`
- `DEFERRED`
- `REJECTED`

## Example Intake Entry

This is only an example format. It does not contain real Town information.

```text
Intake ID: INT-001
Date received: NEEDS_CONFIRMATION
Received from: Courtney
Area: Meetings
Related prototype page: prototype/meetings.html
Related confirmation ID: NC-007, NC-008, NC-009, NC-010

What was received:
Courtney provided the current meeting schedule and described how agendas and minutes are handled.

Exact confirmed facts:
NEEDS_CONFIRMATION

Source document or source note:
NEEDS_CONFIRMATION

Is this approved for public website use?
NEEDS_CONFIRMATION

Does this need board/legal/authorized review?
NEEDS_CONFIRMATION

What page should this update?
Meetings page and maintenance SOP.

Recommended website wording:
NEEDS_CONFIRMATION

Files received:
NEEDS_CONFIRMATION

Open questions:
NEEDS_CONFIRMATION

Next action:
Verify source and draft page update.

Status:
RECEIVED
```

## Processing Steps

1. Save raw files privately.
2. Add one row to `docs/content-source-log.csv`.
3. Fill out an intake entry using the template above.
4. Mark approval status clearly.
5. Draft website wording only from confirmed facts.
6. Keep `NEEDS_CONFIRMATION` on anything uncertain.
7. Update prototype pages only after source and approval status are clear.
8. Update `docs/decision-log.md` when a real project decision is made.
9. Update `docs/needs-confirmation-register.csv` when an item is resolved.

## Quick Triage

Use this quick sorting rule when information arrives:

| If Courtney sends... | Put it in... | Likely next action |
| --- | --- | --- |
| Office address, phone, email, or hours | Official Contact | Verify approval, then update Contact/Home footer |
| Agendas or minutes | Meetings | Confirm archive start date and file naming |
| Notice files | Public Notices | Confirm current/archive status |
| Ordinance documents | Ordinances | Do not summarize; confirm status and disclaimer |
| Permit form or fee info | Building Permits | Confirm official status before publishing |
| Service contacts or external links | Resident Services | Confirm Town vs external responsibility |
| Rental rules or forms | Community Center | Confirm approval before publishing |
| Event flyer | Events/Community | Confirm event approval and date details |
| Photos | Photos | Confirm permission and public-use approval |
| Account/domain info | Accounts/Channels | Keep private; do not publish |

## Ready-To-Use Website Draft Block

Use this after a fact is confirmed.

```text
Page:
Section:
Existing placeholder:
Replacement wording:
Source:
Approval status:
Remaining unknowns:
```

## Sensitive Information Reminder

Some information is useful for project setup but should not be public, such as account owners, passwords, billing details, internal staff notes, private email threads, or draft legal/policy review. Track the existence of that information without committing the sensitive material to this repository.
