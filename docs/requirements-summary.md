# Requirements Summary

## Project Goal

Create a low-cost official public information website for the Town of Mantee, Mississippi. The website should be professional, easy to maintain, mobile-friendly, and ready for a later managed WordPress implementation.

## Core Outcomes

- Provide a clear official source for public notices, meetings, ordinances, permits, services, community assets, events, and contact information.
- Reduce reliance on Facebook as the only public communication channel.
- Give residents stable website links that can be shared through Facebook and other channels.
- Support transparency with accessible public records.
- Preserve a strong small-town identity through local photography and plain-language content.

## Recommended Architecture

Planning recommendation from the implementation report:

- Free `.gov` domain path for eligible local governments.
- Managed WordPress hosting.
- Native WordPress block editor and block theme.
- Small plugin stack.
- Staged launch.
- Facebook used for distribution, with the website remaining the source of truth.

Procurement details, plan names, prices, and host features must be verified before purchase.

## Launch Model

The first public launch should be a current-use site, not a complete historical archive.

Launch first with:

- Current public notices.
- Current and upcoming meetings.
- Current-year agendas and approved minutes.
- Ordinances currently in force: NEEDS_CONFIRMATION.
- Building permit information and approved forms.
- Resident service pages.
- Community Center page.
- Community identity pages or sections.
- Contact information after verification.

Backfill later:

- Older meeting records.
- Older public notices.
- Historical ordinance files.
- Historical scans and archival records.

Historical archive scope, priority, and retention practices are NEEDS_CONFIRMATION.

## Scope for Initial Planning Repository

Included:

- Site map
- Content inventory
- Requirements summary
- Records and file naming conventions
- Style guide
- Launch checklist
- Maintenance SOP
- WordPress content model
- Plugin strategy
- Migration plan
- Board review brief
- Static HTML/CSS/JS prototype shell

Not included yet:

- Final legal content
- Final fees or rules
- Final staff directory
- Final contact information
- Live WordPress configuration
- `.gov` domain application
- Hosting purchase
- Production analytics, forms, or email setup

## Users

- Residents
- Property owners
- Permit applicants
- Contractors
- Board members
- Town staff
- Local businesses
- Event attendees
- Visitors and history/community audience

## Functional Requirements

- Home page identifies the website as the official Town of Mantee information source.
- Public Notices page supports current and archived notices.
- Meetings page supports upcoming meetings, agendas, minutes, and archives.
- Ordinances page supports a searchable or filterable archive in WordPress later.
- Building Permits page explains the confirmed process and links approved forms.
- Resident Services page organizes routine services and reporting information.
- Community Center page supports facility information and rental/reservation guidance once confirmed.
- Community page highlights Farmers Market, Walking Track, Mantee Depot, Mantee History & Heritage Museum, and Events.
- Contact page provides verified office, phone, email, hours, and routing details.
- Every major page works on mobile devices.
- Every downloadable record has a clear title, date, and file naming convention.

## Non-Functional Requirements

- Low-cost hosting and maintenance.
- Managed WordPress preferred for security updates and simpler operations.
- Minimal plugins.
- Native WordPress block editor preferred over a heavy page builder.
- WordPress staging environment preferred before launch.
- Mobile-first design.
- Accessible color contrast and keyboard navigation.
- Plain HTML structure in the prototype.
- No dependency on a heavy visual page builder.
- Good performance on slower rural internet connections.
- Clear ownership for content updates.

## Content Requirements

- Use confirmed facts only.
- Mark unknowns as `NEEDS_CONFIRMATION`.
- Avoid legal interpretation.
- Avoid creating policy language unless directed by the Town.
- Default to HTML for public explanations, service instructions, contact information, and routine notices.
- Use PDFs when the official document itself matters, such as signed ordinances, approved minutes, packets, printable forms, or historical scans.
- Keep public records available as PDFs or accessible HTML where feasible.
- Avoid scanned-image PDFs when a searchable or source-generated file is available.
- Use approved local photography when available.

## Governance Requirements

- Identify who can approve public notices.
- Identify who can publish meeting agendas and minutes.
- Identify who maintains ordinance records.
- Identify who approves permit information.
- Identify who updates community center and event information.
- Identify who owns WordPress admin credentials and domain access.

## Accessibility Requirements

- Planning target: WCAG 2.1 Level AA for web content and mobile app accessibility.
- ADA.gov guidance checked on 2026-06-02 lists April 26, 2028 as the extended compliance date for small state and local governments under 50,000 population. This must be verified again before legal or launch decisions.
- Use semantic headings.
- Use descriptive link text.
- Provide alt text for meaningful images.
- Keep PDFs named clearly and, where practical, readable by screen readers.
- Include file type, date, and size in public PDF links when practical.
- Maintain strong color contrast.
- Do not rely on color alone to communicate status.
- Make navigation usable by keyboard.
- Treat accessibility as a workflow requirement, not a one-time launch check.

This repository does not provide legal or accessibility compliance sign-off.

## Security and Administration Requirements

- Use least-privilege WordPress access.
- Keep administrator access limited.
- Require multi-factor authentication for administrator and editor accounts where possible.
- Prefer no more than two administrator accounts: NEEDS_CONFIRMATION.
- Use managed-host backups plus an independent backup plan if needed.
- Test backup restore access before launch.
- Document who owns hosting, domain, WordPress admin, and recovery credentials.

## Risks and Open Questions

- Complete public record archives may need cleanup or scanning.
- Trying to digitize every historical record before launch may delay public value.
- Ordinance status and codification may require review.
- Building permit process and fees must be confirmed before publishing.
- Community center rental rules must be confirmed before publishing.
- Staff capacity for updates must be realistic.
- `.gov` setup requires authorized municipal participation.
- Facebook expectations should be clarified so the website remains the official source.
- Plugin sprawl could increase cost, maintenance burden, and security risk.
- Inaccessible scans and PDFs could create accessibility barriers.
- The website should complement, not replace, any legally required notice channels.

## Success Criteria

- A resident can find the latest public notice within one or two taps.
- A resident can find meeting agendas and minutes without using Facebook.
- A property owner can find the first step for building permits without guessing.
- Community center information is easy to find and clearly marked if a detail is pending confirmation.
- Staff can update common content without needing a developer.
- Board members can review and approve the site direction from clear planning materials.
