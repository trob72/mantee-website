# Migration Plan

This plan outlines how to move from the static prototype to a managed WordPress website.

## Phase 1: Planning and Confirmation

- Review site map.
- Review content inventory.
- Confirm primary navigation.
- Confirm page ownership.
- Confirm unknown facts marked `NEEDS_CONFIRMATION`.
- Gather approved local photography.
- Gather existing public records.
- Confirm `.gov` domain goal and authorized contact.
- Begin `.gov` request preparation after an authorized municipal contact is identified.
- Confirm whether the first launch is a current-use site with historical archives backfilled later.

## Phase 2: Hosting and WordPress Setup

- Choose managed WordPress host.
- Evaluate candidate hosts from the implementation report, including Pressable and DreamPress, against current pricing, features, support, backups, staging, and Town ownership requirements.
- Create Town-owned hosting account.
- Configure administrator accounts.
- Select lightweight theme.
- Prefer a native block theme and WordPress block editor unless staff testing shows it is not workable.
- Configure basic site settings.
- Configure backup and security settings.
- Configure multi-factor authentication where available.
- Configure HTTPS.
- Prepare `.gov` domain DNS once approved.

## Phase 3: Content Structure

- Create core pages.
- Configure navigation.
- Configure homepage.
- Set up public notice structure.
- Set up meeting record structure.
- Set up ordinance archive structure.
- Set up event structure only if needed.
- Configure media naming conventions.

## Phase 4: Content Migration

- Move prototype page copy into WordPress.
- Replace placeholder labels with confirmed content.
- Upload approved current-use documents first.
- Upload approved local photos.
- Add alt text.
- Build record archives by year or category.
- Create a historical archive backfill backlog for older records.
- Use original digital files where available.
- Scan only when necessary, and OCR scans when practical.
- Keep unconfirmed content unpublished or visibly labeled during review.

## Launch Priority Order

The implementation report recommends launching in phases rather than waiting for every historical record.

Recommended first-launch priority:

1. Core service pages and contact information.
2. Current and upcoming public notices.
3. Current-year meeting schedules, agendas, packets, and approved minutes.
4. Ordinances currently in force: NEEDS_CONFIRMATION.
5. Building permit and related forms: NEEDS_CONFIRMATION.
6. Community Center page and rental request process: NEEDS_CONFIRMATION.
7. Community pages or sections for Farmers Market, Walking Track, Mantee Depot, and Mantee Heritage & History Museum.
8. Historical backfile digitization backlog.

This order is a planning recommendation and requires Town approval.

## Phase 5: Review

- Staff review.
- Board or authorized review: NEEDS_CONFIRMATION.
- Review all pages on mobile.
- Check links and documents.
- Confirm no private or draft documents are public.
- Confirm Facebook links point to website pages.
- Confirm accessibility basics.
- Test staging-to-production workflow if staging is available.
- Test backup restore access.
- Confirm the website does not replace any legally required notice channel unless explicitly approved by counsel or the proper authority.

## Phase 6: Launch

- Final approval.
- Point domain to website.
- Verify HTTPS.
- Publish website announcement.
- Share official website URL on Facebook.
- Start maintenance SOP.

## Phase 7: Post-Launch

- Review first public notice posting.
- Review first meeting agenda/minutes posting.
- Gather resident feedback.
- Update content inventory.
- Schedule monthly and quarterly maintenance.
- Begin historical archive backfill queue.
- Review first backup restore test schedule.

## First 30-Day Action Sequence

Planning sequence adapted from the implementation report:

### Days 1-7

- Prepare `.gov` request.
- Choose managed WordPress host after verifying current costs and features.
- Confirm repository rules and records naming conventions.
- Complete content inventory and migration tracker.

### Days 8-14

- Approve navigation and page layouts.
- Stand up WordPress staging.
- Install base theme and only approved launch plugins.
- Define custom post types and taxonomies if used.
- Define user roles.

### Days 15-21

- Populate core pages.
- Import current-year notices, agendas, minutes, ordinances, and approved forms as available.
- Draft clerk posting SOP and month-end archive process.

### Days 22-30

- Test accessibility basics, MFA, backups, restore access, mobile rendering, and document links.
- Conduct internal review with officials.
- Launch publicly after approval.
- Announce the website through existing channels, including Facebook.

## Content Migration Notes

Prototype content is intentionally plain so it can be copied into WordPress block editor pages without special tooling.

Recommended mapping:

- Page headings become WordPress headings.
- Quick links become button blocks or simple link cards.
- Record lists become query/list blocks or custom post type archives.
- Photo placeholders become approved local images.
- `NEEDS_CONFIRMATION` labels remain until reviewed.

## Data and Ownership Notes

Before launch, confirm:

- Town owns hosting account.
- Town owns domain registration or `.gov` account.
- Town owns administrator credentials.
- At least two authorized people can access recovery information.
- Public records are stored in a way that can be exported.
- No plugin or page builder creates avoidable lock-in for public records.

## Rollback Plan

Needs confirmation:

- Who can approve rollback.
- Whether old site or temporary landing page exists.
- How backups are restored.
- How residents are notified if launch is delayed.
