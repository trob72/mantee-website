# WordPress Content Model

This starter model keeps the future managed WordPress site simple, structured, and maintainable.

## Content Principles

- Use normal WordPress pages for stable service information.
- Use structured records for public notices, meetings, ordinances, and events if budget and implementation allow.
- Consider a structured Forms/Documents record type if the archive grows beyond simple page links.
- Give every high-value public document a public record page or listing entry plus the file itself.
- Avoid heavy page builders.
- Keep fields understandable to non-technical staff.
- Use approved local photography and clearly named documents.

## Pages

Recommended WordPress pages:

- Home
- Public Notices
- Meetings
- Ordinances
- Building Permits
- Resident Services
- Community Center
- Community
- Contact

Potential child pages later:

- Farmers Market
- Walking Track
- Mantee Depot
- Mantee Heritage & History Museum
- Events

## Public Notice Record

Recommended fields:

- Title
- Date posted
- Notice category
- Notice summary, if approved
- Full notice text
- Notice PDF
- Expiration/archive date: NEEDS_CONFIRMATION
- Featured on homepage: yes/no

Recommended taxonomies:

- General notice
- Public hearing: NEEDS_CONFIRMATION
- Meeting notice: NEEDS_CONFIRMATION
- Bid/procurement: NEEDS_CONFIRMATION
- Other: NEEDS_CONFIRMATION

## Meeting Record

Recommended fields:

- Meeting title
- Meeting date
- Meeting time: NEEDS_CONFIRMATION
- Meeting location: NEEDS_CONFIRMATION
- Meeting type: regular, special, other - NEEDS_CONFIRMATION
- Agenda PDF
- Minutes PDF
- Cancellation/reschedule notice: NEEDS_CONFIRMATION

Recommended display:

- Upcoming meetings first.
- Past meetings listed by year.
- Agenda and minutes linked under the same meeting where possible.
- Status labels such as agenda posted, packet posted, draft minutes, or minutes approved: NEEDS_CONFIRMATION.
- Descriptive PDF links with file type, publication date, and file size where practical.

## Ordinance Record

Recommended fields:

- Ordinance number: NEEDS_CONFIRMATION
- Ordinance title
- Adoption date: NEEDS_CONFIRMATION
- Effective date: NEEDS_CONFIRMATION
- Status: NEEDS_CONFIRMATION
- Ordinance PDF
- Related ordinance links: NEEDS_CONFIRMATION

Do not add interpretive summaries unless they are approved by the Town.

## Event Record

Recommended fields:

- Event title
- Event date
- Start time
- End time
- Location
- Organizer: NEEDS_CONFIRMATION
- Description
- Flyer/image
- Contact: NEEDS_CONFIRMATION
- Featured on homepage: yes/no

## Forms and Documents Record

Recommended fields if a separate record type is used:

- Document title
- Document type
- Service area
- Current or archived status
- Last updated date
- Related page
- File attachment
- File type and size
- Owner or approving office: NEEDS_CONFIRMATION

Use this only if the site outgrows simple document lists on service pages.

## Media Library

Recommended folders or naming groups:

- public-notices
- meetings
- ordinances
- forms-documents
- permits
- community-center
- events
- photos

WordPress may not support true folders by default, so this may require either naming conventions or a lightweight media organization plugin.

## Reusable Blocks or Patterns

Recommended blocks:

- Official notice callout
- Quick link grid
- Document list
- Contact block
- Photo placeholder/replacement block
- Record archive list

## User Roles

Needs confirmation:

- Project lead or primary administrator
- Backup administrator
- Clerk/editor
- Records publisher
- Event/calendar editor
- Contributor role for draft-only users if needed

Keep admin accounts limited and use the lowest role that can complete the task.
Require multi-factor authentication for privileged accounts where possible.

## Search and Archive Needs

Minimum:

- Search standard pages and posts.
- List records by date.
- Keep old public notices and meeting records accessible.

Preferred:

- Filter notices by category.
- Filter meetings by year.
- Search ordinance records by number and title.
- Filter public documents by year, topic, type, and status if archive volume grows.

## Migration Mapping

Prototype page to WordPress:

| Prototype file | WordPress destination |
| --- | --- |
| `index.html` | Home page |
| `public-notices.html` | Public Notices page and archive |
| `meetings.html` | Meetings page and archive |
| `ordinances.html` | Ordinances page and archive |
| `building-permits.html` | Building Permits page |
| `resident-services.html` | Resident Services page |
| `community-center.html` | Community Center page |
| `community.html` | Community page and potential child pages |
| `contact.html` | Contact page |
