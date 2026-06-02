# Publishing Checklist

This checklist covers the remaining steps to publish the static prototype through GitHub Pages.

The prototype is placeholder-only and should remain clearly treated as a draft review site until Town approval.

## Current Local Status

- Git repository initialized.
- Baseline commits created.
- Default branch renamed to `main`.
- GitHub Pages workflow added.
- Workflow publishes only the `prototype/` folder.
- Local prototype can run at `http://127.0.0.1:8088/`.

## Create GitHub Repository

Create a new GitHub repository named:

```text
mantee-website
```

Visibility decision:

- Public repository: easiest for GitHub Pages, but all planning docs in the repo are public.
- Private repository: better for planning docs, but GitHub Pages availability depends on the GitHub account/plan.

Recommended placeholder-safe option for review:

- Use a public repository only if the Town/project owner is comfortable with the planning docs being visible.
- Otherwise use a private repository and consider a separate public preview repo later.

## Connect Local Repo to GitHub

Replace `NEEDS_CONFIRMATION` with the actual repository URL from GitHub:

```powershell
git remote add origin NEEDS_CONFIRMATION
git push -u origin main
```

Example URL shape:

```text
https://github.com/ACCOUNT-NAME/mantee-website.git
```

## Enable GitHub Pages

In GitHub:

1. Open the repository.
2. Go to Settings.
3. Go to Pages.
4. Set Source to GitHub Actions.
5. Save if prompted.
6. Open Actions and run or re-run `Deploy Prototype to GitHub Pages`.

The workflow can also run automatically when pushing to `main`.

## Confirm Deployment

After the workflow finishes:

- Open the Pages URL.
- Confirm the homepage loads.
- Confirm navigation works.
- Confirm the Community page loads.
- Confirm `NEEDS_CONFIRMATION` labels are visible.
- Confirm no non-placeholder Town facts were accidentally published.

## After Preview Is Live

- Share the Pages URL for board/staff review.
- Use `docs/needs-confirmation-register.csv` during review.
- Log decisions in `docs/decision-log.md`.
- Keep the prototype public only as long as appropriate for review.
