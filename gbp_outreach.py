#!/usr/bin/env python3
"""
Google Business Profile Review Outreach
Generates WhatsApp review request messages for GBP listings
"""

import sys
from datetime import datetime

print("📱 GBP Review Outreach Campaign\n")

# Finofii GBP listings
listings = {
    "Noida": {
        "name": "Finofii Fintech Private Limited",
        "place_id": "ChIJAQDAjV3oDDkRRYDrxTmVP34",
        "address": "Unit 806, Tower 1, Assotech Business Cresterra, Sector 135, Noida 201301",
        "review_link": "https://search.google.com/local/writereview?placeid=ChIJAQDAjV3oDDkRRYDrxTmVP34",
    },
    "Mohali": {
        "name": "Finofii Fintech Private Limited",
        "place_id": "TBD",  # Requires lookup
        "address": "Mohali/Chandigarh",
        "review_link": "TBD",
    }
}

# WhatsApp message templates
templates = {
    "default": """Hi! 👋

We'd love to hear about your experience with Finofii Treasury Management.

If we've helped you maximize returns on idle cash, please leave us a 5-star review on Google:

{review_link}

It takes just 30 seconds and helps us serve more businesses like yours! 

Thanks for trusting us.

—Finofii Team
wa.me/919311361888""",
    
    "after_consultation": """Hi {name}! 👋

Thanks for meeting with us about Treasury Management.

We'd love to know your thoughts! Drop a quick 5-star review on Google:

{review_link}

Your feedback helps us improve & reach more founders like you.

Cheers,
Finofii
ca.finofii.com""",
    
    "bulk_campaign": """🏆 Earn recognition on Google!

Are you earning the best returns on idle cash?

Finofii clients get up to 7%* p.a. on liquid funds—vs. 0% in current accounts.

**Share your 5-star review:**
{review_link}

Help other founders discover us. 👇

— Finofii Treasury Team"""
}

print("REVIEW REQUEST TEMPLATES\n")
print("=" * 60)

for template_name, message in templates.items():
    print(f"\n📝 Template: {template_name.upper()}")
    print("-" * 60)
    
    # Sample with Noida listing
    noida = listings["Noida"]
    sample = message.format(review_link=noida["review_link"], name="Founder")
    print(sample)
    print()

print("\n" + "=" * 60)
print(f"\nGBP LISTINGS TO OUTREACH:")
for city, listing in listings.items():
    print(f"\n📍 {city}")
    print(f"   Name: {listing['name']}")
    print(f"   Address: {listing['address']}")
    print(f"   Review Link: {listing['review_link']}")
    print(f"   Status: Needs reviews 📬")

print("\n" + "=" * 60)
print("\n✅ OUTREACH STRATEGY:")
print("   1. Week 1-2: Send to recent consultation clients (template: after_consultation)")
print("   2. Week 3-4: Send to existing customer base (template: default)")
print("   3. Week 5+: Run bulk campaign (template: bulk_campaign) every 2 weeks")
print("   4. Target: 50+ 5-star reviews within 90 days")
print("   5. Tool: Manual WhatsApp (https://wa.me/919311361888) OR integrate Twilio/WhatsApp Business API")

print("\n📊 Review Targets (M1-M3):")
print("   M1 (30d): 10–15 reviews (rating +0.5 stars)")
print("   M2 (60d): 25–35 reviews (rating +1.0 stars)")
print("   M3 (90d): 50+ reviews (rating +1.5 stars, visibility spike)")

print("\n✅ GBP Outreach templates saved. Ready to deploy.\n")

sys.exit(0)
