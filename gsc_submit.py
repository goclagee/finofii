#!/usr/bin/env python3
"""
Google Search Console URL Submission
Submits newly generated pages to GSC for faster indexing
Requires: Google Service Account credentials JSON + GSC site_id
"""

import os
import json
import sys
from datetime import datetime
from pathlib import Path

try:
    from google.auth.transport.requests import Request
    from google.oauth2.service_account import Credentials
    import urllib.request
except ImportError:
    print("⚠️ Google auth libraries not installed. Skipping GSC submission.")
    print("   To enable: pip install google-auth google-auth-httplib2 google-auth-oauthlib")
    sys.exit(0)

print("🔗 Google Search Console URL Submission\n")

# Environment variables (set in GitHub Actions secrets)
gsc_creds_json = os.getenv("GSC_SERVICE_ACCOUNT_JSON")
gsc_site_id = os.getenv("GSC_SITE_ID")  # e.g., "sc-domain:finofii.com"

if not gsc_creds_json or not gsc_site_id:
    print("⚠️ GSC credentials not configured (set GSC_SERVICE_ACCOUNT_JSON + GSC_SITE_ID in GitHub Secrets)")
    print("   Skipping GSC submission this run.")
    sys.exit(0)

# Parse credentials
try:
    creds_dict = json.loads(gsc_creds_json)
    credentials = Credentials.from_service_account_info(
        creds_dict,
        scopes=['https://www.googleapis.com/auth/webmasters']
    )
    credentials.refresh(Request())
except Exception as e:
    print(f"❌ Failed to authenticate with GSC: {e}")
    sys.exit(1)

# URLs to submit (from today's generated pages)
base_url = "https://finofii.com"
urls_to_submit = [
    f"{base_url}/treasuryvsfd",
    f"{base_url}/treasuryvssip",
    f"{base_url}/treasuryvsca",
    f"{base_url}/idlecashstartups",
    f"{base_url}/idlecashmsmes",
    f"{base_url}/treasurydelhi",
    f"{base_url}/treasurybangalore",
    f"{base_url}/emergencyfundplanning",
    f"{base_url}/quarterlyplanning",
    f"{base_url}/taxoptimization",
]

submitted = 0
failed = 0

for url in urls_to_submit:
    try:
        submission_url = f"https://www.googleapis.com/webmasters/v3/sites/{gsc_site_id}/urlTestingTools/mobileFriendlyTest?fields=verdict&key={os.getenv('GOOGLE_API_KEY', '')}"
        
        # Simple submission via GSC API
        data = json.dumps({"requestUrl": url}).encode('utf-8')
        headers = {'Authorization': f'Bearer {credentials.token}', 'Content-Type': 'application/json'}
        
        req = urllib.request.Request(
            f"https://www.googleapis.com/webmasters/v3/sites/{gsc_site_id}/urlNotifications/publish",
            data=data,
            headers=headers,
            method='POST'
        )
        
        response = urllib.request.urlopen(req)
        if response.status == 200:
            print(f"✓ Submitted: {url}")
            submitted += 1
        else:
            print(f"⚠️ {url} (status: {response.status})")
            failed += 1
    except Exception as e:
        print(f"❌ {url}: {e}")
        failed += 1

print(f"\n✅ Submitted {submitted} URLs to GSC")
if failed > 0:
    print(f"⚠️ {failed} URLs failed or skipped")

sys.exit(0)
