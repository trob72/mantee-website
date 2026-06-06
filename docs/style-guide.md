# Style Guide

This starter style guide defines the public-facing design direction for the Town of Mantee website prototype and future managed WordPress site.

For a reference-based visual direction from the Facebook materials and drone shots, see `docs/ui-theme-direction.md`.

## Design Goals

- Professional small-town civic hub
- Trustworthy and official
- Low-cost and maintainable
- Easy to use on phones
- Warm enough to reflect community identity
- Simple enough for long-term staff maintenance

## Color Palette

Use a restrained civic palette:

| Role | Color | Hex |
| --- | --- | --- |
| Deep navy | Primary headings, header, footer | `#17324D` |
| Muted green | Buttons, accents, section labels | `#4E6F58` |
| Cream/off-white | Page background | `#F8F4EA` |
| Warm gray | Borders and secondary panels | `#D8D1C3` |
| Charcoal | Main text | `#202124` |
| White | Cards and content surfaces | `#FFFFFF` |

Avoid neon colors, heavy gradients, and overly decorative effects.

## Typography

Recommended system font stack:

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Guidelines:

- Use clear hierarchy.
- Keep paragraphs short.
- Avoid very small text.
- Use large tap targets for mobile.
- Do not use decorative typefaces for official information.

## Logo And Identity

The prototype currently uses a draft Depot-based badge extracted from Town letterhead.

Guidelines:

- Use the badge as a civic identity marker in the site header and browser icon.
- Treat the "Epicenter of the Natchez Trace" wording as `NEEDS_CONFIRMATION` until the Town confirms it.
- Do not treat the extracted PNG as final production artwork.
- Before launch, create or obtain a clean transparent/vector version for WordPress, documents, favicon, and social sharing.
- Consider a simplified companion icon for very small sizes where the full badge becomes hard to read.

## Voice and Tone

Voice:

- Official
- Plainspoken
- Helpful
- Specific when facts are confirmed
- Transparent when facts still need confirmation

Avoid:

- Legal interpretation
- Promotional exaggeration
- Unconfirmed claims
- Vague calls to action

Preferred wording:

- "The website is the official source for Town information."
- "Details are being confirmed."
- "Contact information will be added after Town review."
- "Download the agenda" instead of "click here."

## Buttons and Links

Use large, clear buttons for common actions:

- View public notices
- View meeting records
- Find permit information
- Contact the Town

Use text links for supporting navigation and document links.

## Layout

- Mobile-first single-column layout.
- Use two or three columns only when there is enough space.
- Keep navigation short.
- Put urgent or official notices near the top.
- Use repeated page patterns so the WordPress build is easy to maintain.

## Photography

Use real local photography once approved.

Priority image needs:

- Town office or civic building
- Community Center exterior and interior
- Farmers Market
- Walking Track
- Mantee Depot
- Mantee History & Heritage Museum
- Community events
- Streetscape or welcome sign, if approved

Placeholder guidance:

- Use labeled placeholders in the prototype.
- Do not use generic stock photos for final municipal identity.
- Confirm permission before publishing identifiable people.
- Add descriptive alt text for meaningful images.

## Components

### Official Notice Banner

Use for:

- Confirming official source status
- Highlighting urgent public information
- Linking to public notices

### Quick Link Grid

Use for common resident tasks:

- Public Notices
- Meetings
- Building Permits
- Resident Services
- Community Center
- Contact

### Record List

Use for:

- Public notices
- Meeting agendas
- Meeting minutes
- Ordinances
- Events

Each record should show:

- Title
- Date
- Type/category
- Short approved description or `NEEDS_CONFIRMATION`
- Link to full record or file

### Confirmation Tag

Use `NEEDS_CONFIRMATION` visibly in draft content. Remove it only after the Town verifies the detail.

## Accessibility

- Keep contrast strong.
- Use semantic headings.
- Use clear focus styles.
- Do not rely on color alone for confirmation status.
- Add alt text for photos.
- Make buttons and navigation keyboard accessible.

## WordPress Design Notes

- Use the block editor where possible.
- Use a lightweight theme compatible with accessibility and responsive layouts.
- Avoid heavy page builders unless the Town specifically chooses one.
- Keep reusable patterns simple: notice list, document list, callout, quick links, photo section.
