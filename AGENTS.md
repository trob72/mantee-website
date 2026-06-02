# Agent Guidance

This repository is the planning and static prototype workspace for the Town of Mantee municipal website project.

## Project Intent

- Build a low-cost official public information hub for a small rural Mississippi municipality.
- Prepare for a future managed WordPress implementation.
- Keep the website as the official source of public information.
- Treat Facebook as a distribution channel that points back to official website pages.
- Support government transparency, resident services, and community identity.

## Guardrails

- Do not invent legal language, ordinance text, official policies, fees, deadlines, staff names, email addresses, phone numbers, or rental rules.
- Mark unknown facts as `NEEDS_CONFIRMATION`.
- Prefer plain-language municipal content over promotional copy.
- Keep accessibility, mobile usability, and maintainability in view.
- Avoid heavy page-builder assumptions. The future WordPress site should be easy for non-technical staff to maintain.
- Keep prototype pages static, simple, and easy to migrate.
- Treat Codex output as scaffolding for human review, not final authority for law, records retention, accessibility compliance, procurement, or official publication.
- Prefer current-use launch planning over delaying launch until every historical record is digitized.
- Prefer HTML-first public information with PDFs used when the official file itself matters.

## Content Style

- Voice: official, calm, helpful, and plainspoken.
- Audience: residents, property owners, permit applicants, event attendees, local businesses, and visitors.
- Use short sections, clear headings, and direct calls to action.
- Use placeholders for local photos until real approved photography is available.

## Technical Preferences

- Prototype pages live in `prototype/`.
- Planning documents live in `docs/`.
- WordPress planning lives in `wordpress/`.
- Board-facing summaries live in `board-review/`.
- Keep CSS and JS small and dependency-free unless a future requirement justifies otherwise.

## Before Publishing Any Real Content

- Confirm all public contact information.
- Confirm board meeting schedule, meeting location, agenda process, and minutes process.
- Confirm ordinance records and whether any codified version exists.
- Confirm building permit process, fee schedule, forms, and inspection contacts.
- Confirm community center rental rules, rental contact, fees, and calendar process.
- Confirm domain ownership, records custodian workflow, and ADA/accessibility expectations.
- Confirm hosting account ownership, backup/restore workflow, user roles, and multi-factor authentication expectations.
