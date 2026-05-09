---
name: "source-command-deploy-frontend"
description: "Deploy React Classroom Hub to Netlify with build verification"
---

# source-command-deploy-frontend

Use this skill when the user asks to run the migrated source command `deploy-frontend`.

## Command Template

# Deploy Frontend to Netlify

Complete deployment process for React frontends (Classroom Hub + Legacy) with build verification.

## Which Frontend to Deploy?

**Classroom Hub** (Primary - Port 5174)
- Path: `/Users/aurisp/repos/teacher-assistant/classroom-hub`
- Features: Flashcard practice, materials, interactive exams
- Netlify site: english-with-auris-portal

**Legacy Frontend** (Port 5173)
- Path: `/Users/aurisp/repos/teacher-assistant/frontend`
- Features: Classes, sessions, students management
- Status: Kept for teacher dashboard features

**Usually you deploy Classroom Hub** (the student-facing portal).

---

## Pre-Deployment Validation

**1. Verify Git Status**
```bash
git branch  # Should show * main
git status  # Check what's being committed
```

**2. Check API Endpoint Configuration**
```bash
# Check if VITE_API_URL is set correctly in Netlify
netlify env:list

# Should show: VITE_API_URL = https://teacher-assistant-api-1056846192318.europe-west1.run.app
```

**3. Build Locally (Catch Errors Early)**
```bash
cd /Users/aurisp/repos/teacher-assistant/classroom-hub
npm run build
```

Look for:
- ✅ "build complete" with no errors
- ❌ TypeScript errors (fix before deploying)
- ❌ Missing imports or unused variables

**4. Test Built Version Locally** (Optional but Recommended)
```bash
# After npm run build
npm run preview

# Open http://localhost:4173
# Test login, flashcards, navigation
```

---

## Deployment Steps

### Option 1: Auto-Deploy via Git Push (Recommended)

Netlify automatically deploys when you push to `main` branch.

```bash
# Commit your changes
git add classroom-hub/
git commit -m "Update frontend: [describe your changes]"

# Push to trigger auto-deploy
git push origin main
```

**Monitor deployment:**
```bash
# Watch deployment status
netlify deploy:list

# Or check Netlify dashboard:
# https://app.netlify.com/sites/english-with-auris-portal/deploys
```

### Option 2: Manual Deploy via CLI

```bash
cd /Users/aurisp/repos/teacher-assistant/classroom-hub

# Build
npm run build

# Deploy to production
netlify deploy --prod --dir=dist

# Follow prompts
```

---

## Post-Deployment Verification

**1. Check Deployment Status**
```bash
netlify deploy:list

# Or via API
netlify api listSiteDeploys --json | head -20
```

**2. Visit Production Site**
Open: https://english-with-auris-portal.netlify.app

**3. Test Critical Features**
- [ ] Login works (check for CORS errors in console)
- [ ] Can start flashcard practice session
- [ ] Cards load correctly
- [ ] "Again" button requeues cards
- [ ] Session completes successfully
- [ ] No 404 errors in network tab

**4. Check Browser Console**
Look for:
- ✅ No errors
- ❌ CORS errors → Backend CORS_ORIGINS missing frontend domain
- ❌ 404 on API calls → VITE_API_URL wrong or backend down
- ❌ 500 errors → Backend issue, check Cloud Run logs

**5. Verify API Connection**
```bash
# Test from command line
curl -s https://english-with-auris-portal.netlify.app

# Should return HTML (not error page)
```

---

## Common Issues & Fixes

**Issue**: Build fails with TypeScript errors
**Fix**: Fix errors locally first, test with `npm run build`

**Issue**: "Cannot read property of undefined" in production
**Fix**: Check if environment variables are set in Netlify dashboard

**Issue**: CORS errors when calling API
**Fix**: Ensure backend CORS_ORIGINS includes your Netlify domain
```bash
/opt/homebrew/share/google-cloud-sdk/bin/gcloud run services update teacher-assistant-api \
  --region europe-west1 \
  --update-env-vars CORS_ORIGINS=https://english-with-auris-portal.netlify.app
```

**Issue**: Blank page or "Failed to load module"
**Fix**: Check base URL in vite.config.ts, ensure assets are loading from correct path

**Issue**: Old version still showing after deployment
**Fix**: Hard refresh browser (Cmd+Shift+R), check Netlify deploy logs for completion

---

## Environment Variables in Netlify

**Check Current Values:**
```bash
netlify env:list
```

**Update API URL:**
```bash
netlify env:set VITE_API_URL https://teacher-assistant-api-1056846192318.europe-west1.run.app
```

**After Changing Env Vars:**
Trigger new deploy:
```bash
git commit --allow-empty -m "Trigger redeploy after env var change"
git push origin main
```

---

## Rollback (If Deployment Breaks)

**Via Netlify Dashboard:**
1. Go to: https://app.netlify.com/sites/english-with-auris-portal/deploys
2. Find previous working deployment
3. Click "..." → "Publish deploy"

**Via CLI:**
```bash
# List recent deploys
netlify deploy:list

# No direct rollback command, but you can:
# 1. Revert git commit
git revert HEAD
git push origin main

# 2. Or redeploy from specific commit
git checkout PREVIOUS_COMMIT_SHA
netlify deploy --prod --dir=classroom-hub/dist
git checkout main
```

---

## Build Optimization

**Check Build Size:**
```bash
cd classroom-hub
npm run build

# Check dist/ size
du -sh dist/

# Should be < 5MB for fast loading
```

**Reduce Bundle Size (if needed):**
- Remove unused dependencies
- Code-split large components
- Optimize images

---

## Next Steps After Deployment

1. Test all features thoroughly
2. Check analytics for errors (if configured)
3. Monitor for user reports of issues
4. Update AGENTS.md if any issues discovered

---

## Quick Reference

```bash
# Local build test
cd classroom-hub && npm run build

# Deploy
git push origin main

# Check status
netlify deploy:list

# Check env vars
netlify env:list

# View site
open https://english-with-auris-portal.netlify.app
```
