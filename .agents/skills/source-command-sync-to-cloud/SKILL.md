---
name: "source-command-sync-to-cloud"
description: "Sync all local data (materials, classes, students, assignments) to Supabase cloud database"
---

# source-command-sync-to-cloud

Use this skill when the user asks to run the migrated source command `sync-to-cloud`.

## Command Template

# Sync Local Data to Cloud

Run this after making changes locally or after deploying the backend to ensure cloud database is up to date.

## When to Run

- After adding new materials locally
- After creating new classes or students
- After creating new assignments
- After initial backend deployment
- Before testing student portal with new data

## Run Sync

```bash
cd /Users/aurisp/repos/teacher-assistant
PYTHONPATH=/Users/aurisp/repos/teacher-assistant/backend /Users/aurisp/repos/teacher-assistant/.venv310/bin/python -m app.services.supabase_sync_v2
```

## What Gets Synced

- ✅ Classes (21 classes)
- ✅ Class schedules
- ✅ Students (46 students)
- ✅ Class memberships
- ✅ Materials (9 materials)
- ✅ Assignments (all assignments with dual-write support)
- ✅ Flashcard sets
- ✅ Flashcard entries
- ✅ Review states and logs

## Expected Output

```
🔄 Starting Supabase sync...
📚 Synced 21/21 classes
📅 Synced 25/29 schedules
👥 Synced 46/46 students
🔗 Synced 41/41 memberships
📚 Synced 9/9 materials
📝 Synced X/X assignments
🃏 Synced X/X flashcard sets
📇 Synced X/X flashcard entries
✅ Sync completed
```

## Verify Sync

**Option 1: Check Supabase Dashboard**

https://supabase.com/dashboard/project/qsytiaugayyudseuozvz

Navigate to:
- Table Editor → classes (should show 21 rows)
- Table Editor → students (should show 46 rows)
- Table Editor → materials (should show 9 rows)
- Table Editor → assignments (should show your assignments)

**Option 2: Query via API**

```bash
# Test classes endpoint
curl -s "https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/classes?limit=5" | python3 -c "import sys, json; data = json.load(sys.stdin); print(f'Found {len(data)} classes')"

# Test materials endpoint
curl -s "https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/materials?limit=10" | python3 -c "import sys, json; data = json.load(sys.stdin); print(f'Found {len(data)} materials')"
```

**Option 3: Check Student Portal**

1. Open https://english-with-auris-portal.netlify.app
2. Log in with test student account
3. Navigate to Assignments page
4. Verify new assignments appear

## Troubleshooting

**Issue**: Sync fails with "SUPABASE_URL must be set"

**Fix**: Ensure .env file has all Supabase credentials:
```bash
cat backend/.env | grep SUPABASE
```

Should show:
- SUPABASE_URL
- SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

**Issue**: Sync succeeds but data not visible in portal

**Fix**: Check Cloud Run environment variables match Supabase credentials:
```bash
/check-env-vars
```

**Issue**: Duplicate key errors during sync

**Fix**: Sync is idempotent - it updates existing records by ID. This is expected behavior.

## Integration with Deployment

**Typical workflow:**

1. Make changes locally (add materials, create assignments)
2. Test locally at http://localhost:5173
3. Run `/sync-to-cloud` to push to Supabase
4. Deploy backend: `/deploy-backend`
5. Verify on student portal: https://english-with-auris-portal.netlify.app

## Notes

- Sync is **one-way**: Local SQLite → Cloud Supabase
- Sync is **idempotent**: Safe to run multiple times
- Sync uses **upsert**: Updates existing records, creates new ones
- Assignment creation now uses **dual-write**: Automatically writes to both DBs
- Only materials, classes, students, and flashcards need periodic sync
- Assignments sync automatically on creation via dual-write pattern
