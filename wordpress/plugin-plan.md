# WordPress Plugin Plan

This plan favors a low-cost managed WordPress site with as few plugins as possible. Specific plugin choices should be confirmed during implementation based on hosting environment, maintenance history, accessibility, and cost.

## Plugin Strategy

- Start with managed host features before adding plugins.
- Use the block editor where possible.
- Avoid heavy page builders.
- Avoid plugins that duplicate host-provided backups, caching, or security.
- Prefer well-maintained plugins with clear ownership and strong update history.
- Keep a written list of installed plugins and why each one is needed.
- Verify current plugin pricing, licensing, host compatibility, and maintenance history before installation.

## Candidate Launch Stack

The implementation report recommends a lean WordPress stack. These are candidates, not final approvals:

- Security/login protection: Wordfence or host-provided equivalent - NEEDS_CONFIRMATION.
- Forms: Gravity Forms Basic or comparable form plugin only if file uploads or structured request workflows are approved - NEEDS_CONFIRMATION.
- Events/calendar: The Events Calendar or simple WordPress posts/pages depending on event complexity - NEEDS_CONFIRMATION.
- Structured content: Custom Post Type UI and ACF if custom records are used for meetings, notices, ordinances, forms, or events - NEEDS_CONFIRMATION.
- Media organization: Media Library Assistant or comparable approach only if document volume requires it - NEEDS_CONFIRMATION.

Do not install all candidates by default. Install only what supports an approved workflow.

## Recommended Capability Areas

### Backups

Preferred source:

- Managed WordPress host backup feature

Plugin needed only if host backups are not adequate.

Needs confirmation:

- Backup frequency
- Retention period
- Restore process
- Account owner

### Security

Preferred source:

- Managed host security features
- Strong passwords
- Multi-factor authentication where available
- Limited administrator accounts

Plugin needed only if host security does not cover basic protections or if WordPress-level 2FA/login controls are required.

### Forms

Use only if the Town confirms a contact form is desired.

Needs confirmation:

- Whether contact form submissions are official records
- Where submissions are emailed or stored
- Spam protection approach
- Records retention expectations
- File upload rules
- Whether uploads contain sensitive information

If a contact form is not approved, use verified phone/email/address information instead.

### Events

Start simple.

Options:

- Use normal WordPress posts/pages for early event listings.
- Add an event plugin only if recurring events, calendars, or filtered listings become necessary.
- Use an event plugin for public meetings only if it improves staff workflow and record clarity.

Needs confirmation:

- Event owner
- Approval workflow
- Recurring events
- Whether community events outside Town control are included

### Public Records

Preferred approach:

- Use custom post types and fields if implementation budget allows.
- Otherwise use well-structured pages with document lists.
- Use a document library plugin only if records volume outgrows basic WordPress lists and search.

Capability needs:

- Date sorting
- Categories
- PDF attachments
- Search
- Archive by year

### SEO and Sharing

Minimum needs:

- Clear page titles
- Social share previews
- XML sitemap
- Search engine indexing

Use an SEO plugin only if the theme or host does not provide adequate basic metadata controls.

### Accessibility

Avoid relying on overlay widgets as the main accessibility solution.

Preferred approach:

- Build accessible page structure.
- Use accessible theme.
- Check contrast and keyboard navigation.
- Write meaningful link text and alt text.

### Analytics

Needs confirmation:

- Whether analytics are desired.
- Which analytics provider is acceptable.
- Privacy expectations.
- Who reviews reports.

Low-complexity options should be preferred.

## Plugins to Avoid Unless Justified

- Heavy visual page builders
- Multiple overlapping SEO plugins
- Multiple overlapping security plugins
- Plugins with unclear maintenance history
- Plugins that lock public records into proprietary shortcodes
- Plugins that require annual costs without a clear benefit
- Large document, payment, or e-commerce suites before the Town has approved the related policy workflow.

## Plugin Review Checklist

For each plugin, document:

- Purpose
- Free or paid
- Account owner
- Renewal cost
- Last update and compatibility
- Data stored
- Export path
- What happens if the plugin is removed

## Initial Plugin Budget Target

Target:

- A small, justified plugin stack beyond host-provided features.

Possible required plugins:

- Custom fields/content structure plugin: NEEDS_CONFIRMATION
- Forms plugin: NEEDS_CONFIRMATION
- Events plugin: NEEDS_CONFIRMATION
- WordPress-level security/2FA plugin: NEEDS_CONFIRMATION
- Media organization or document library plugin: NEEDS_CONFIRMATION

All final plugin choices are NEEDS_CONFIRMATION.
