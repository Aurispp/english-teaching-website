---
name: "source-command-deploy-backend"
description: "Deploy FastAPI backend to Google Cloud Run with environment validation"
---

# source-command-deploy-backend

Use this skill when the user asks to run the migrated source command `deploy-backend`.

## Command Template

# Deploy Backend to Google Cloud Run

Complete deployment checklist for FastAPI backend with environment variable validation.

## Pre-Deployment Validation

**1. Verify Git Status**
```bash
git branch  # Should show * main
git status  # Should be clean (or only expected changes)
```

**2. Check Environment Variables Locally**
Ensure your local `.env` has all required Supabase credentials:
- SUPABASE_URL
- SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

**3. Test Backend Locally**
```bash
# Start backend
cd /Users/aurisp/repos/teacher-assistant
./scripts/dev.sh

# Test in another terminal
curl http://localhost:8000/api/srs/students/me/flashcards/stats
```

---

## Deployment Steps

**1. Generate New JWT Secret (for security)**
```bash
openssl rand -hex 32
```
Copy this value - you'll use it in the deployment command.

**2. Deploy to Cloud Run**
```bash
/opt/homebrew/share/google-cloud-sdk/bin/gcloud run deploy teacher-assistant-api \
  --source ./backend \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --set-env-vars="ENVIRONMENT=cloud,ENABLE_ORCHESTRATOR=false,DATABASE_URL=YOUR_DATABASE_URL,CORS_ORIGINS=https://english-with-auris-portal.netlify.app,SUPABASE_URL=YOUR_SUPABASE_URL,SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY,SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY,JWT_SECRET_KEY=PASTE_GENERATED_SECRET_HERE"
```

**3. Wait for Deployment to Complete**
The command will show:
- Building Container
- Creating Revision
- Routing traffic
- Service URL (should be: https://teacher-assistant-api-1056846192318.europe-west1.run.app)

---

## Post-Deployment Verification

**1. Check Deployment Status**
```bash
/opt/homebrew/share/google-cloud-sdk/bin/gcloud run services describe teacher-assistant-api \
  --region europe-west1 \
  --format="value(status.latestReadyRevisionName)"
```

**2. Verify Environment Variables**
```bash
/opt/homebrew/share/google-cloud-sdk/bin/gcloud run services describe teacher-assistant-api \
  --region europe-west1 \
  --format="value(spec.template.spec.containers[0].env)" | grep -E "SUPABASE_URL|CORS_ORIGINS"
```

**3. Check Logs for Errors**
```bash
/opt/homebrew/share/google-cloud-sdk/bin/gcloud run services logs read teacher-assistant-api \
  --region europe-west1 \
  --limit 50
```

Look for:
- "Application startup complete" ✅
- Any "ValueError" or "Exception" ❌
- Database connection errors ❌

**4. Test API Endpoint**
```bash
# Test a public endpoint
curl -s https://teacher-assistant-api-1056846192318.europe-west1.run.app/healthz

# Should return: {"status":"ok"}
```

**5. Test from Frontend**
Open https://english-with-auris-portal.netlify.app in browser:
- Check console for errors
- Try logging in
- Test flashcard practice session
- Verify no CORS errors

---

## Common Issues & Fixes

**Issue**: Build fails with "No such file or directory"
**Fix**: Make sure you're in project root `/Users/aurisp/repos/teacher-assistant`

**Issue**: "SUPABASE_URL and SUPABASE_ANON_KEY must be set"
**Fix**: Check that all Supabase env vars are in the --set-env-vars command

**Issue**: CORS errors in browser
**Fix**: Verify CORS_ORIGINS includes `https://english-with-auris-portal.netlify.app`

**Issue**: 500 errors in logs
**Fix**: Check Cloud Run logs for specific error, often database connection or missing env var

---

## Rollback (If Deployment Fails)

```bash
# List recent revisions
/opt/homebrew/share/google-cloud-sdk/bin/gcloud run revisions list --service=teacher-assistant-api --region=europe-west1

# Rollback to previous revision
/opt/homebrew/share/google-cloud-sdk/bin/gcloud run services update-traffic teacher-assistant-api \
  --region=europe-west1 \
  --to-revisions=PREVIOUS_REVISION_NAME=100
```

---

## Next Steps

After backend deployment succeeds:
1. Test all API endpoints
2. Check frontend still works
3. Monitor logs for 5-10 minutes
4. Update AGENTS.md if any new issues discovered
