# UI Theme Direction

This document translates the current reference material into a high-level visual direction for the Town of Mantee website prototype and future WordPress site.

The references reviewed include:

- Town of Mantee Facebook profile and post screenshots.
- Heritage and History Museum event and photo references.
- Black-Eyed Pea Festival announcement reference.
- Memorial Highway dedication event reference.
- Drone stills of the Mantee water tower, town crossroads, lake, and rural landscape.
- Provided drone video file as future motion/context reference. The video was not visually reviewed in this pass because local video tooling was unavailable.

## Working Theme

**Official Civic, Rural Heritage**

The site should feel like an official municipal website that still carries the texture of Mantee as a specific place.

It should not feel like:

- A generic government template.
- A tourism landing page.
- A social media feed copied into a website.
- A nostalgic poster site with weak public-service function.

It should feel:

- Official.
- Local.
- Calm.
- Useful.
- Warm.
- Proud of heritage.
- Easy for residents to scan.

## Style Read From References

### Facebook Presence

The Facebook page establishes a simple, familiar public-announcement rhythm:

- Town name first.
- Short updates.
- Events and photos.
- Community participation.
- Dark interface in screenshots, but the website should not copy Facebook dark mode.

Takeaway:

Use the website as the official source, but make updates feel easy to recognize and share. Notices and events should feel direct and current, not buried.

### Heritage and Museum References

The museum material has a strong local-history feel:

- Warm indoor wood tones.
- Display cases.
- Framed photos and artifacts.
- Patriotic and Mississippi Humanities references.
- Grand opening and event-flyer energy.

Takeaway:

Use heritage warmth as an accent layer. The museum/depot/history content can carry more warmth and texture than the public notices/records sections.

### Event/Festival References

The event graphics lean toward:

- Deep navy.
- Cream paper tones.
- Heritage red.
- Gold/tan accents.
- Bold display typography in the graphic assets themselves.
- Community celebration.

Takeaway:

The website can borrow the palette and rhythm, but should not use decorative poster typography for core government UI. Event graphics can appear as approved images later; the site UI should remain clean.

### Drone/Aerial References

The drone stills add the strongest visual identity:

- Water tower with "Mantee" is the clearest official/local hero candidate.
- Crossroads, tree canopy, rural horizon, and open land show place context.
- Lake and landscape support community identity.
- "Wolverine Country" imagery is local but less official for a municipal homepage.

Takeaway:

Use the Mantee water tower/crossroads shot as the primary civic hero if approved. Use wider landscape/lake/town shots as secondary bands or community backdrops.

## Visual Positioning

Recommended balance:

- 55% Civic Classic
- 30% Rural Heritage
- 15% Service First

Why:

- The site must first be trustworthy and official.
- The town identity should be visible and specific.
- Residents still need fast access to notices, meetings, permits, services, and contact information.

## Palette Direction

Keep the existing civic palette, but refine how it is used.

### Core Colors

| Role | Color | Use |
| --- | --- | --- |
| Deep navy | Existing primary | Header, footer, hero overlay, official records, headings |
| Muted green | Existing accent | Buttons, civic action links, local/place accents |
| Cream/off-white | Existing background | Page background and heritage warmth |
| Warm gray | Existing structure | Borders, dividers, quiet panels |
| Charcoal | Existing text | Body copy and readable content |

### New Accent Candidates

| Role | Suggested Use |
| --- | --- |
| Heritage red | Small accents for events/history only, not primary buttons |
| Muted gold/tan | Labels, heritage dividers, event/date accents |
| Weathered white | Cards over photo sections |
| Deep evergreen | Optional richer green for landscape/community bands |

Do not let red, gold, or poster colors take over the official UI. They should feel like heritage accents, not a rebrand.

## Typography Direction

Recommended:

- Keep system sans-serif for official UI and body text.
- Use strong, plain headings.
- Use weight and spacing for hierarchy rather than decorative fonts.
- Let event flyer images carry decorative typography when they are approved assets.

Optional future refinement:

- A restrained serif accent could be tested for heritage section titles only, but should not be used for core navigation, notices, buttons, or service content.

Avoid:

- Script fonts in website UI.
- Western/poster-style type for official records.
- Overly playful event typography outside approved event images.

## Photography Direction

### Primary Hero

Best candidate:

- Drone shot with the "MANTEE" water tower and crossroads.

Why:

- It immediately identifies place.
- It feels official without needing a seal.
- It shows rural context.
- It gives the homepage a strong first-viewport signal.

Treatment:

- Use as full-width hero backdrop.
- Apply deep navy overlay for text readability.
- Keep text simple and official.
- Do not overcrop the water tower on desktop.
- On mobile, crop to preserve the tower and enough landscape context.

### Secondary Backdrops

Good candidates:

- Wider town/lake aerials.
- Community landscape views.
- Museum/depot exterior when available.

Use for:

- Community identity section.
- History/museum sections.
- Event/community bands.

### Photo Cards

Use real photos for:

- Mantee Depot.
- Heritage and History Museum.
- Walking Track.
- Farmers Market.
- Community Center.

Card treatment:

- Simple 16:9 images.
- No heavy filters.
- Short official captions.
- `NEEDS_CONFIRMATION` label until facts are approved.

### People in Photos

Use caution:

- Museum opening and event photos may include identifiable people.
- Do not publish identifiable people in the municipal prototype unless permission/public-use approval is confirmed.
- Prefer buildings, signs, rooms, display cases, grounds, and wide event context.

## Homepage Hierarchy

Recommended homepage order:

1. Hero: Town of Mantee with water tower/crossroads backdrop.
2. Official source strip or short civic alert.
3. Public information: notices and meetings.
4. Resident quick actions.
5. Community identity: Depot, Museum, Walking Track, Farmers Market.
6. Community/heritage backdrop band.
7. Contact footer.

This keeps the site official first, then local and warm.

## Component Direction

### Header

- Keep deep navy.
- Keep navigation simple.
- Avoid social-media-style header treatment.

### Buttons

- Primary buttons: muted green.
- Secondary buttons: white/cream with navy text.
- Use consistent height and radius.
- Avoid bright Facebook blue except for an external Facebook link if needed.

### Notice/Record Cards

- More structured and official than community cards.
- Use left border, date, status, and clear action.
- No decorative imagery in records unless the record is an event.

### Community Cards

- More visual.
- Real photo first.
- Short factual copy.
- Link to community page/section.

### Events

- Event graphics can be shown as approved images later.
- Website event entries should still include plain-text date, time, location, and approval status.

## What To Avoid

- Making the whole site dark because Facebook screenshots are dark.
- Making the whole site look like a festival poster.
- Using unapproved Facebook photos as final website assets.
- Publishing screenshots of Facebook posts as official content.
- Overusing patriotic colors or graphics.
- Hiding public records behind community imagery.
- Turning the homepage into a tourism landing page.

## WordPress Translation

The future WordPress site should recreate this direction with:

- A block theme.
- Reusable hero pattern.
- Public information record list pattern.
- Quick link button pattern.
- Community card pattern.
- Photo-backed band pattern.
- Simple event listing pattern.

Avoid building a design that depends on custom code that staff cannot maintain.

## Next UI Iteration Recommendation

Before replacing placeholders, create one visual mock pass using the current references:

- Use the Mantee water tower drone shot as a test hero image.
- Test a community band with a wide landscape/lake shot.
- Keep card placeholders for Depot, Museum, Walking Track, and Farmers Market until approved individual photos are selected.
- Introduce heritage red/gold only as small accents in event/history areas.
- Keep public records sections plain and highly readable.

Do this in the prototype, then review before committing to WordPress styling.
