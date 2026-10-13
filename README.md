# lukeacharbonneau.com

Personal website, built with [Astro](https://astro.build) as a fully static site (no client-side JavaScript) and hosted on AWS S3 + CloudFront.

Live: https://www.lukeacharbonneau.com/

## Development

Requires Node 22+ (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
npm run preview  # serve dist/ locally
```

## Editing content

| What                    | Where                    |
| ----------------------- | ------------------------ |
| Name, links, nav        | `src/data/site.ts`       |
| Projects                | `src/data/projects.ts`   |
| Resume (HTML version)   | `src/data/resume.ts`     |
| Resume / thesis PDFs    | `public/files/`          |
| Page text               | `src/pages/*.astro`      |
| Colors, fonts, spacing  | `src/styles/global.css`  |

Images go in `src/assets/` and are converted to responsive WebP at build time.

## Infrastructure

Everything lives in `infra/site.yaml` (CloudFormation, deployed to **us-east-1**):

- Private S3 bucket, readable only by CloudFront (Origin Access Control)
- CloudFront distribution with HTTP/3, security headers (CSP, HSTS, etc.), apex to `www` redirect, and real 404s
- ACM certificate (DNS-validated in Route 53) and Route 53 alias records
- An IAM role GitHub Actions assumes via OIDC to deploy (no long-lived AWS keys)

Expected cost: about $0.50/month for the Route 53 hosted zone, plus a few cents of CloudFront/S3 usage.

### Deploys

- `.github/workflows/ci.yml` builds every PR and branch push.
- `.github/workflows/deploy.yml` builds `main`, syncs `dist/` to S3 and invalidates CloudFront.

The deploy workflow reads three GitHub repository **variables** (Settings → Secrets and variables → Actions → Variables), all from the stack outputs:

| Variable                     | Stack output     |
| ---------------------------- | ---------------- |
| `AWS_DEPLOY_ROLE_ARN`        | `DeployRoleArn`  |
| `SITE_BUCKET`                | `BucketName`     |
| `CLOUDFRONT_DISTRIBUTION_ID` | `DistributionId` |

### One-time cutover from the old setup

1. Create the stack without the domain attached, and test it on its `*.cloudfront.net` URL:
   ```sh
   aws cloudformation deploy --region us-east-1 --stack-name personal-website \
     --template-file infra/site.yaml --capabilities CAPABILITY_IAM \
     --parameter-overrides HostedZoneId=<zone id> AttachDomain=false
   ```
   (Add `CreateGitHubOidcProvider=false` if the account already has the GitHub OIDC provider.)
2. Set the three GitHub variables, then run the Deploy workflow manually (Actions → Deploy → Run workflow).
3. Remove `lukeacharbonneau.com` / `www.lukeacharbonneau.com` from the old CloudFront distribution (or Amplify app) and delete the old `A`/`AAAA`/`CNAME` records for those names in Route 53.
4. Re-run step 1 with `AttachDomain=true`.
5. Clean up the old resources: the old distribution/Amplify app, the public `luke-charbonneau-personal-website-files` bucket, and the unused Amplify backend (AppSync API, DynamoDB table, IAM roles in the `amplify-amplifyf691645fde574-staging-*` CloudFormation stacks).

## License

GPLv3. Feel free to use this as a template; a link back is appreciated but not required.
