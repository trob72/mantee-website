# Static Preview Plan

This plan describes how to publish the placeholder prototype for board/staff review using GitHub Pages.

The preview should be treated as a draft prototype only. It is not the live official Town website.

## What Gets Published

The GitHub Pages workflow publishes only the `prototype/` folder.

Included:

- Static HTML pages
- Shared CSS
- Shared JavaScript
- Placeholder image asset
- Prototype README

Not included in the public preview:

- Planning docs
- Board review docs
- WordPress planning docs
- Internal decision log
- Confirmation register

Those files remain in the repository but are not part of the Pages artifact.

## Before Publishing

- Confirm the repository visibility decision: public or private - NEEDS_CONFIRMATION.
- Confirm who owns the GitHub organization or account - NEEDS_CONFIRMATION.
- Confirm whether board/staff are comfortable reviewing a placeholder public preview - NEEDS_CONFIRMATION.
- Confirm that all visible prototype content is still safe as draft placeholder content.

## GitHub Pages Setup

1. Create a GitHub repository.
2. Push this local repository to GitHub.
3. In GitHub, open the repository settings.
4. Go to Pages.
5. Set source to GitHub Actions.
6. Push to `main` or `master`, or run the workflow manually.
7. Use the generated Pages URL for review.

## Suggested Remote Setup Commands

Replace the remote URL with the real repository URL:

```powershell
git remote add origin NEEDS_CONFIRMATION
git push -u origin master
```

If the GitHub repository uses `main` instead of `master`:

```powershell
git branch -M main
git push -u origin main
```

## Preview Review Notes

Reviewers should check:

- Whether the navigation labels make sense.
- Whether the homepage priorities feel right.
- Whether the community identity sections are useful.
- Whether the placeholder pages match expected Town workflows.
- Which `NEEDS_CONFIRMATION` items can be resolved.

Reviewers should not treat the prototype as final approved public information.

## When to Move Beyond Static Preview

Move to WordPress staging after:

- Launch scope is approved.
- A managed WordPress host is selected.
- Domain ownership path is confirmed.
- Primary content facts are confirmed.
- Responsible staff or roles are assigned.
