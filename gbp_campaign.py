#!/usr/bin/env python3
"""
Finofii GBP WhatsApp Review Campaign Manager
Generates weekly outreach messages for Google Business Profile reviews
"""

import json
from datetime import datetime, timedelta

print("📱 GBP WhatsApp Review Campaign Generator\n")
print("=" * 70)

# Finofii GBP listings
listings = {
    "Noida": {
        "name": "Finofii Fintech",
        "address": "Unit 806, Sector 135, Noida 201301",
        "place_id": "ChIJAQDAjV3oDDkRRYDrxTmVP34",
        "review_link": "https://search.google.com/local/writereview?placeid=ChIJAQDAjV3oDDkRRYDrxTmVP34",
    }
}

# Campaign phases (weekly rotation)
campaigns = {
    "Week 1-2: Warm Leads": {
        "template": "after_consultation",
        "audience": "Recent consultation/demo attendees",
        "message": """Hi {name}! 👋

Thanks for your time discussing Treasury Management with Finofii.

We'd love your feedback! Drop a 5-star review on Google:
{review_link}

Takes 30 seconds & helps us reach more founders like you.

Cheers,
Finofii Team
finofii.com""",
        "estimated_contacts": 15,
    },
    
    "Week 3-4: Existing Customers": {
        "template": "customer_testimonial",
        "audience": "Active Finofii customers",
        "message": """Hi {name}! ⭐

You've been using Finofii for {duration}. Thanks for the trust!

Would you mind sharing your experience on Google? 
{review_link}

Your review helps us reach other startups looking for 7%+ returns.

Thanks,
Finofii""",
        "estimated_contacts": 25,
    },
    
    "Week 5-6: Bulk Campaign": {
        "template": "bulk_outreach",
        "audience": "Broad founder network (LinkedIn/email)",
        "message": """🏆 Maximize Your Idle Cash Returns

Are you earning 0% in current accounts?

Finofii clients earn up to 7%* on liquid funds.

**Try free:** finofii.com
**Share your experience:** {review_link}

Help us reach more founders. Leave a 5-star review! ⭐

— Finofii Team""",
        "estimated_contacts": 50,
    },
}

print("\n📋 GBP REVIEW CAMPAIGN ROADMAP (90 Days)\n")

for week_phase, details in campaigns.items():
    print(f"\n{week_phase}")
    print("-" * 70)
    print(f"Audience: {details['audience']}")
    print(f"Target contacts: ~{details['estimated_contacts']}")
    print(f"\nMessage:")
    print(details['message'].replace("{name}", "Founder").replace("{duration}", "2 months").replace("{review_link}", "Google Review Link"))
    print()

# Campaign statistics
total_contacts = sum(c["estimated_contacts"] for c in campaigns.values())
estimated_review_rate = 0.30  # 30% conversion
estimated_reviews = int(total_contacts * estimated_review_rate)

print("\n" + "=" * 70)
print(f"\n📊 90-DAY CAMPAIGN PROJECTIONS")
print(f"   Total contacts: ~{total_contacts}")
print(f"   Estimated 5-star reviews (30% conversion): {estimated_reviews}+")
print(f"   Impact on rating: +1.5-2 stars (visibility spike in local search)")
print()

print("✅ ACTION ITEMS:")
print("   1. Copy messages above → WhatsApp Business API OR")
print("      Manually send via wa.me/919311361888")
print("   2. Personalize each message with recipient name/duration")
print("   3. Send in batches:")
print("      • Week 1-2: Consultation attendees (Mondays)")
print("      • Week 3-4: Active customers (Wednesdays)")
print("      • Week 5+: Bulk campaigns bi-weekly")
print()

print("📈 Track Results:")
print("   GSC → Search Console → Finofii property → \"Insights\" tab")
print("   You'll see: reviews count, rating, local search clicks, etc")
print()

# Export campaign as JSON for easy reference
campaign_data = {
    "generated_at": datetime.now().isoformat(),
    "listing": listings["Noida"],
    "campaigns": campaigns,
    "target_reviews_90d": estimated_reviews,
}

with open("/tmp/gbp_campaign.json", "w") as f:
    json.dump(campaign_data, f, indent=2)

print("✅ Campaign data saved to: /tmp/gbp_campaign.json\n")

