// Blog posts data — full article content rendered on detail pages.
// Each post is structured so the detail page can render rich, SEO-friendly content
// without needing images.

export const blogPosts = [
  {
    slug: "fd-vs-liquid-vs-overnight-funds",
    title: "FD vs Liquid vs Overnight Funds: Kya Better Hai?",
    excerpt:
      "None of them is \"better\" — each one wins for a different kind of money. A practical, no-jargon guide to matching your cash to the right instrument based on when you'll need it.",
    category: "Treasury",
    readTime: "6 min read",
    date: "2026-02-10",
    dateLabel: "Feb 2026",
    author: "Finofiii Editorial",
    metaDescription:
      "FD vs Liquid Funds vs Overnight Funds compared for Indian businesses. Returns, risk, liquidity, tax and a worked example to decide where to park idle cash.",
    keywords:
      "FD vs liquid funds, overnight funds, treasury management, idle cash, business cash management, liquid fund vs fixed deposit",
    content: [
      {
        type: "lead",
        text: "This is the question every business owner asks once they decide not to leave money idle in the current account. And the honest answer is a bit annoying: none of them is better. Each one is better for a different kind of money.",
      },
      {
        type: "paragraph",
        text: "The trick is to stop asking \"which has the highest return?\" and start asking \"when will I need this money, and how sure am I?\" Once you answer that, the choice is usually obvious.",
      },
      { type: "heading", text: "The three options, in one line each" },
      {
        type: "list",
        items: [
          "Fixed deposit (FD): you lend money to a bank for a fixed period at a fixed rate.",
          "Liquid fund: a mutual fund that holds very short-term debt (up to 91 days) and lets you withdraw whenever you like.",
          "Overnight fund: a mutual fund that lends for just one night, every night, against government collateral.",
        ],
      },
      { type: "heading", text: "Side by side" },
      {
        type: "table",
        headers: ["", "FD", "Liquid fund", "Overnight fund"],
        rows: [
          ["Return", "Fixed at booking", "Variable, follows short-term rates", "Variable, lowest and steadiest"],
          ["Risk", "Very low. Deposit insurance covers up to ₹5 lakh per depositor per bank", "Low, but credit risk exists", "Very low, but still a mutual fund"],
          ["Access to money", "At maturity. Early exit means a penalty", "Next working day, small instant option", "Next working day"],
          ["Exit cost", "Penalty on premature withdrawal", "Small load in the first 7 days", "Usually none"],
          ["Tax", "Interest taxable, TDS may be deducted", "Gains taxed as business income at your rate", "Same as liquid"],
          ["Best for", "Money you can lock", "Weeks to a few months", "Days to a couple of weeks"],
        ],
      },
      {
        type: "paragraph",
        text: "Note that the returns on the three are usually not far apart. The gap between them is often much smaller than the gap between any of them and a current account. So don't spend a week agonising over a few basis points.",
      },
      { type: "heading", text: "Where each one wins" },
      {
        type: "paragraph",
        text: "FD wins on certainty. You know the rate on day one and you know exactly what you will have on maturity. If you are saving for a known expense, like a machinery payment in eight months or a lease deposit, that predictability is valuable. The price you pay is flexibility. Break it early and the bank will cut the rate, usually by around half to one percent, and sometimes charge a penalty.",
      },
      {
        type: "paragraph",
        text: "Liquid funds win on balance. You get a return that tends to be slightly better than an overnight fund, and you are not locked in. For money that is idle but not yet assigned a date, this is the usual sweet spot. The trade-off is that you carry a little credit risk, so you should check what the fund holds.",
      },
      {
        type: "paragraph",
        text: "Overnight funds win on peace of mind. You are taking almost no risk, and you can pull the money out the next working day. The return is the lowest of the three, but for cash that might be needed soon, that is a fair price.",
      },
      { type: "heading", text: "Where each one loses" },
      {
        type: "paragraph",
        text: "FD loses on flexibility. If you can't predict your cash needs, you will either break FDs or end up borrowing to cover a gap while an FD sits there.",
      },
      {
        type: "paragraph",
        text: "Liquid funds lose on guarantees. Nothing is promised. The return can change month to month, and in a rare credit event a fund can take a hit.",
      },
      {
        type: "paragraph",
        text: "Overnight funds lose on return. They are not the place for money that will sit for three months. You'd be giving up a bit of income for flexibility you don't need.",
      },
      { type: "heading", text: "A worked example" },
      {
        type: "paragraph",
        text: "Say a company has ₹30 lakh of surplus above its working balance. Here is one way to divide it.",
      },
      {
        type: "list",
        items: [
          "₹10 lakh in an overnight fund. This is the GST, TDS and advance tax cash due in the next few weeks. It needs to be safe and ready.",
          "₹10 lakh in a liquid fund. This is the buffer for the next quarter's purchases and any surprises. Probably not needed for a couple of months.",
          "₹10 lakh in an FD. This is for the equipment payment due in about a year. Locked in at a known rate.",
        ],
      },
      {
        type: "paragraph",
        text: "There is nothing special about this exact split. The point is that each rupee gets a place based on its job.",
      },
      { type: "heading", text: "Five questions to decide in two minutes" },
      {
        type: "ordered-list",
        items: [
          "When will I need this money? Within days leans overnight. Weeks to months leans liquid. Beyond a few months leans FD.",
          "How sure am I about that date? If it's firm, an FD fits. If it's vague, stay flexible.",
          "Can I stomach a small chance of a dip? If you truly can't, prefer FD (up to the insured limit and with a strong bank) or overnight.",
          "Is this money borrowed or committed? If it is tax money or a payment already promised, keep it in the safest, most accessible option.",
          "Do I have approval to invest? For a company or LLP, make sure there's a board resolution or partner consent covering mutual funds and FDs.",
        ],
      },
      { type: "heading", text: "Tax, briefly" },
      {
        type: "paragraph",
        text: "FD interest is taxable, and the bank may deduct TDS, which you can adjust in your return. Gains on debt mutual funds are generally treated as business income for companies, LLPs and firms, taxed at your applicable rate. There is no special lower rate or indexation to lean on. The timing of when you recognise income can differ between an FD and a fund, so check with your CA, and compare returns after tax, not before.",
      },
      { type: "heading", text: "Mistakes worth avoiding" },
      {
        type: "list",
        items: [
          "Picking by the highest number. The highest return usually comes with the most catch.",
          "Locking everything in FDs. A business needs some room to move.",
          "Putting everything in one fund. Spread across options, or at least across more than one fund house.",
          "Using FDs and then borrowing. If you take an overdraft while an FD sits untouched, look at whether you can borrow against the FD instead of breaking it.",
          "Skipping the paperwork. Resolutions, KYC and clear records save a lot of trouble later.",
        ],
      },
      { type: "heading", text: "So, which is better?" },
      {
        type: "paragraph",
        text: "The one that matches the date you need the money. Overnight for days, liquid for weeks and months, FD for money you can lock. Most growing businesses end up using all three.",
      },
      {
        type: "callout",
        text: "If you want help turning this into a simple cash policy for your company, including the board approval and tax planning, the Finofiii team can help.",
      },
      {
        type: "disclaimer",
        text: "This article is for general information and is not investment advice. Mutual fund investments are subject to market risks. Please read scheme documents and consult your CA or financial advisor before investing.",
      },
    ],
  },
  {
    slug: "current-account-monetisation-complete-guide",
    title: "Current Account Monetisation: Complete Guide",
    excerpt:
      "In India, banks cannot pay interest on current accounts. Here's how to earn on idle cash, stop paying for things you shouldn't, and use your cash position to get better deals.",
    category: "Treasury",
    readTime: "8 min read",
    date: "2026-02-08",
    dateLabel: "Feb 2026",
    author: "Finofiii Editorial",
    metaDescription:
      "A complete guide to current account monetisation for Indian businesses: find your idle floor, earn on surplus cash, stop bank charge leaks, and use cash as leverage.",
    keywords:
      "current account monetisation, idle cash management, sweep FD, liquid funds, SME treasury, business cash management India",
    content: [
      {
        type: "lead",
        text: "Here is a question most founders have never asked their bank or their CA: what is my current account actually earning me?",
      },
      {
        type: "paragraph",
        text: "The honest answer is nothing. In India, banks cannot pay interest on current accounts. It is a payment account, built to move money in and out quickly. That is fine for the money you are about to spend. It is a quiet leak for everything else.",
      },
      {
        type: "paragraph",
        text: "\"Monetising\" your current account does not mean getting clever or taking risk. It means three plain things: earn something on money that is sitting around, stop paying for things you shouldn't be paying for, and use your cash position to get better deals. This guide covers all three.",
      },
      { type: "heading", text: "Start with one number: your floor" },
      {
        type: "paragraph",
        text: "Before you move a single rupee, find out how much of your balance is really idle.",
      },
      {
        type: "paragraph",
        text: "Pull your last 90 days of statements and note the lowest closing balance in that period. Call it your floor. That is money that never left the account, no matter what happened that quarter. Salaries went out, vendors got paid, GST was cleared, and this amount still sat there.",
      },
      {
        type: "paragraph",
        text: "A sensible rule: your floor, minus a safety cushion for surprises, is what you can start putting to work. The cushion is up to you. Many owners keep two to three weeks of expenses on top.",
      },
      {
        type: "paragraph",
        text: "A quick example. Say your floor is ₹50 lakh. At an illustrative 6.5% a year (actual returns change with the market), that money could earn about ₹3.25 lakh annually. No new customers, no extra sales. Just a better place to keep cash.",
      },
      { type: "heading", text: "Way 1: Earn on the surplus" },
      {
        type: "paragraph",
        text: "There are a few places surplus cash can go, and they differ mainly in how quickly you can get it back.",
      },
      {
        type: "table",
        headers: ["Option", "Best for", "Getting money back", "The catch"],
        rows: [
          ["Sweep-in / sweep-out FD", "Hands-off owners", "Automatic, same day", "Rates and minimum amounts vary by bank"],
          ["Overnight funds", "Cash you might need at short notice", "Next working day", "Returns are modest"],
          ["Liquid funds", "Weeks to a few months", "Next working day (some offer instant redemption up to a limit)", "Small exit load in the first 7 days; market risk exists"],
          ["Short-term FDs", "Money with a known idle period", "At maturity", "Early break means a penalty"],
          ["T-bills, CPs, CDs", "Larger, more experienced treasuries", "Tradable, or at maturity", "Needs a demat or broker; credit quality matters for CPs"],
        ],
      },
      {
        type: "paragraph",
        text: "For most SMEs, a mix of a sweep arrangement and a liquid or overnight fund covers 90% of the need. The rest is for bigger balances.",
      },
      {
        type: "paragraph",
        text: "One thing worth repeating: this is not about chasing the highest number. A fund that adds half a percent by taking credit risk is the wrong trade when the money is meant to be your cushion.",
      },
      { type: "heading", text: "Way 2: Stop the leaks" },
      {
        type: "paragraph",
        text: "Some of the easiest money you will \"earn\" is money you stop losing. Go through a few months of your current account statement and look for:",
      },
      {
        type: "list",
        items: [
          "Average monthly balance (AMB) penalties. If you pay these every month while also parking money elsewhere, your account structure is off.",
          "Transaction charges. NEFT, RTGS, cheque book, cash deposit and cash handling fees add up quickly for businesses with high volumes.",
          "Cheque bounce and return charges. Small each time, annoying in total.",
          "Services you pay for but don't use. Old SMS packs, extra accounts, dormant sub-accounts.",
        ],
      },
      {
        type: "paragraph",
        text: "Then call your relationship manager. Banks price these things differently for different customers, and a business that brings steady volumes and a decent balance has room to negotiate. Ask for lower transaction charges, a waiver of AMB or a lower threshold, and free collection services. The worst they can say is no.",
      },
      { type: "heading", text: "Way 3: Use cash as leverage" },
      { type: "paragraph", text: "This is the one people miss." },
      {
        type: "paragraph",
        text: "Early payment discounts. Some vendors offer terms like \"2/10 net 30\", meaning a 2% discount if you pay in 10 days instead of 30. That sounds small. Worked out over a year, it is equal to roughly 37% annualised. No fund in the market gives you that. If you have the cash, and the vendor offers the discount, take it.",
      },
      {
        type: "paragraph",
        text: "Reduce borrowing. If you hold an overdraft or cash credit limit and also keep idle money in your current account, you are paying interest on one hand and earning nothing on the other. Check whether your cash can be set against the borrowing. Even a partial reduction in the limit you use can save real money.",
      },
      {
        type: "paragraph",
        text: "Better terms from the bank. A healthy, well-managed balance is a bargaining chip. Use it when you are asking for loan pricing, guarantee limits or forex rates.",
      },
      {
        type: "paragraph",
        text: "Group companies. If you run several entities, moving cash between them to fund the one that needs it, instead of one borrowing while another sits on surplus, can help. In India this is regulated and you need to do it properly, through proper loan documentation and approvals. Check with your CA before you try it, especially for anything resembling notional pooling, which is restricted.",
      },
      { type: "heading", text: "Don't forget the tax side" },
      {
        type: "paragraph",
        text: "For companies, LLPs and firms, gains on debt mutual funds are generally taxed as part of business income at your applicable rate. FD interest is also taxable, and the bank may deduct TDS. Look at the post-tax return and not just the headline rate. Also make sure the tax money you've collected (GST, TDS, advance tax) is parked somewhere liquid and is back in your account before due dates.",
      },
      { type: "heading", text: "The paperwork people skip" },
      {
        type: "paragraph",
        text: "In a private limited company, someone should approve an investment policy: where surplus can go, how much, and who can operate it. In an LLP, the partners should agree in writing. It takes one meeting and one resolution, and it saves a lot of awkward questions at audit time.",
      },
      { type: "heading", text: "A simple 30-day plan" },
      {
        type: "list",
        items: [
          "Week 1: Pull 90 days of statements. Find your floor and your monthly charges.",
          "Week 2: Decide your cushion. Separate tax money from true surplus.",
          "Week 3: Talk to your bank about sweep options and charge waivers. Compare with a liquid or overnight fund.",
          "Week 4: Get the approval in writing, move the first tranche, and set a monthly review date.",
        ],
      },
      {
        type: "paragraph",
        text: "Start small. Move part of the surplus first, see how it feels for a month, and increase from there.",
      },
      { type: "heading", text: "What to track after this" },
      {
        type: "paragraph",
        text: "Two numbers are enough: the average balance you leave idle, and the yield you earn on your total cash. If the first goes down and the second goes up, it is working.",
      },
      {
        type: "callout",
        text: "We help SMEs and growing companies set up cash policies, board approvals and the compliance that goes with it. If you want a second pair of eyes on your numbers, the Finofiii team is happy to help.",
      },
      {
        type: "disclaimer",
        text: "This article is for general information and is not investment advice. Mutual fund investments are subject to market risks. Please read scheme documents and consult your CA or financial advisor before investing.",
      },
    ],
  },
];

export const getBlogPost = (slug) => blogPosts.find((p) => p.slug === slug);
