# Records Conventions

These conventions provide a starter approach for organizing public documents on the future Town of Mantee website. They are planning guidelines only and should be reviewed by the Town before use.

## Principles

- Use consistent names so residents can find records.
- Keep original official documents intact.
- Do not rewrite legal or official record text in summaries unless approved.
- Include dates in filenames.
- Use plain English labels on pages.
- Keep Facebook posts linked back to official website record pages.
- Give each high-value public document both a clear web page or record entry and a linked file.
- Avoid making residents browse an unstructured folder of PDFs.

## Page Plus File Model

For important public records, the public-facing website should provide:

- A readable web page or record entry.
- The official file, when the file itself matters.
- Factual metadata such as date, record type, status, category, and year.
- A descriptive file link.

This gives residents a navigable path while preserving the official document.

## Date Format

Use ISO-style dates in filenames:

```text
YYYY-MM-DD
```

Example:

```text
2026-06-15-board-meeting-agenda.pdf
```

## File Naming Pattern

Use lowercase letters, numbers, and hyphens.

Preferred pattern:

```text
YYYY-MM-DD-record-type-short-title.pdf
```

Examples:

```text
2026-06-15-board-meeting-agenda.pdf
2026-06-15-board-meeting-minutes.pdf
2026-07-01-public-notice-budget-hearing.pdf
2026-08-10-ordinance-000-title-needs-confirmation.pdf
```

The implementation report included underscore-based examples. This repository keeps the simpler hyphen pattern above for public files unless the Town chooses a different convention.

## Recommended Record Categories

- Public notices
- Meeting agendas
- Meeting minutes
- Ordinances
- Forms and documents
- Building permit forms
- Community center forms
- Event flyers
- Other public documents: NEEDS_CONFIRMATION

## Recommended Storage Groups

These groups can be represented as WordPress categories, media naming groups, or future folders if a media-library plugin is used:

- `records/meetings/YYYY/`
- `records/ordinances/`
- `records/notices/YYYY/`
- `records/forms/current/`
- `records/forms/archive/`
- `records/events/YYYY/`

Actual storage structure in WordPress is NEEDS_CONFIRMATION and may depend on the selected host and plugins.

## Recommended Metadata

Each public-facing record should carry structured metadata where possible:

- Year
- Governing body or owner: NEEDS_CONFIRMATION
- Document type
- Status
- Topic or category
- Public posting date
- File link
- File type, date, and size where practical

## Meeting Records

Recommended fields:

- Meeting title
- Meeting date
- Meeting time: NEEDS_CONFIRMATION
- Meeting location: NEEDS_CONFIRMATION
- Governing body: NEEDS_CONFIRMATION
- Status label, such as agenda posted or minutes approved: NEEDS_CONFIRMATION
- Agenda file
- Minutes file
- Packet file: NEEDS_CONFIRMATION
- Video or remote meeting link if applicable: NEEDS_CONFIRMATION
- Special meeting flag: NEEDS_CONFIRMATION
- Cancellation or reschedule notice: NEEDS_CONFIRMATION

Suggested filenames:

```text
YYYY-MM-DD-board-meeting-agenda.pdf
YYYY-MM-DD-board-meeting-minutes.pdf
YYYY-MM-DD-special-meeting-agenda.pdf
```

## Public Notices

Recommended fields:

- Notice title
- Date posted
- Notice category
- Effective date or meeting date, if applicable
- Summary, if approved
- Full notice text or PDF
- Archive status: NEEDS_CONFIRMATION

Suggested filenames:

```text
YYYY-MM-DD-public-notice-short-title.pdf
```

## Ordinances

Recommended fields:

- Ordinance number: NEEDS_CONFIRMATION
- Ordinance title
- Adoption date: NEEDS_CONFIRMATION
- Status: NEEDS_CONFIRMATION
- Related amendment or repeal information: NEEDS_CONFIRMATION
- PDF or scan

Suggested filenames:

```text
YYYY-MM-DD-ordinance-000-short-title.pdf
```

Do not publish informal summaries that could be mistaken for legal interpretation unless reviewed and approved.

## Forms

Recommended fields:

- Form title
- Department or process owner: NEEDS_CONFIRMATION
- Last updated date
- Instructions
- Related fee schedule: NEEDS_CONFIRMATION

Suggested filenames:

```text
YYYY-MM-DD-building-permit-application.pdf
YYYY-MM-DD-community-center-rental-request.pdf
```

## Upload Workflow

1. Confirm the document is approved for public posting.
2. Rename the file using the convention above.
3. If the record is a scan, OCR it when possible.
4. Upload to WordPress media library or related record.
5. Add title, date, category, status, and short approved description.
6. Add a descriptive file link with file type, date, and size where practical.
7. Check the public page on mobile.
8. If shared on Facebook, link to the website page rather than uploading a separate copy only to Facebook.

## Records Ownership

Needs confirmation:

- Who prepares records
- Who approves records for publication
- Who uploads records
- Who reviews old records for accuracy
- Who handles public records requests
- Retention schedule or archive rules

## Accessibility Notes

- Prefer text-based PDFs when possible.
- Avoid scanned images when a searchable document is available.
- Use meaningful link text such as "June 15, 2026 board meeting agenda" instead of "click here".
- Add context around file links so residents understand what they are opening.
- Use HTML first for service instructions, notices, FAQs, and contact information when the official file is not the main record.
- Keep a remediation backlog for older scanned records that cannot be fixed before launch.
