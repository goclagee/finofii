// Blog posts data — full article content rendered on detail pages.
// Each post is structured so the detail page can render rich, SEO-friendly content
// without needing images.

export const blogPosts = [
  {
    slug: "fd-vs-liquid-vs-overnight-funds",
    title: "FD vs Liquid vs Overnight Funds: What is Better?",
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

blogPosts.push(
  {
    slug: "liquid-funds-explained",
    title: "Liquid Funds Explained",
    excerpt:
      "Made for the gap between a rigid FD and a zero-earning current account. What a liquid fund is, how it earns, the credit risk people skip, and five checks to pick a good one.",
    category: "Treasury",
    readTime: "7 min read",
    date: "2026-02-06",
    dateLabel: "Feb 2026",
    author: "Finofiii Editorial",
    metaDescription:
      "Liquid funds explained for Indian businesses: how they work, returns, credit risk, liquid vs overnight vs FD, how to pick one, tax treatment and common mistakes.",
    keywords:
      "liquid funds explained, liquid fund vs overnight fund, debt mutual funds, idle cash, SME treasury, liquid fund credit risk",
    content: [
      {
        type: "lead",
        text: "Sometimes a business knows its cash will sit unused for a while, maybe six weeks until a big payment, maybe three months until the next purchase cycle, but it can't say exactly when it will be needed. A fixed deposit feels too rigid for that. The current account earns nothing. Liquid funds were made for this gap.",
      },
      { type: "heading", text: "So what is a liquid fund?" },
      {
        type: "paragraph",
        text: "A liquid fund is a debt mutual fund that invests only in short-term instruments, with a maturity of up to 91 days. That is the SEBI rule, not a marketing line.",
      },
      { type: "paragraph", text: "The usual holdings are:" },
      {
        type: "list",
        items: [
          "Treasury bills (short-term government paper)",
          "Commercial papers, which are short-term borrowing by companies",
          "Certificates of deposit issued by banks",
          "TREPS and other overnight or call money lending",
        ],
      },
      {
        type: "paragraph",
        text: "Because everything matures within three months, the fund keeps rolling money over. Old papers mature, new ones are bought. The portfolio never has time to get exposed to big swings in interest rates.",
      },
      { type: "heading", text: "How it earns" },
      {
        type: "paragraph",
        text: "You earn from the interest on those papers, which builds up in the NAV each day. You don't receive a payout. You simply see the NAV creeping up, and you sell units when you need the money.",
      },
      {
        type: "paragraph",
        text: "Here is a rough picture. Say ₹20 lakh sits idle for three months and the fund earns an illustrative 6.8% a year. That comes to about ₹34,000 over the quarter. Actual returns change with market rates and will not be the same every month. But compared to the current account, where the same money earns zero, the difference is real.",
      },
      { type: "heading", text: "Liquid vs overnight vs FD" },
      {
        type: "table",
        headers: ["", "Overnight fund", "Liquid fund", "Fixed deposit"],
        rows: [
          ["What it holds", "One-day loans", "Papers up to 91 days", "Bank's deposit"],
          ["Return", "Lowest of the three, very steady", "Usually a little higher than overnight", "Fixed at booking"],
          ["Risk", "Very low", "Low, but credit risk exists", "Very low (bank risk)"],
          ["Access", "Next working day", "Next working day, small instant option", "At maturity, or break with a penalty"],
          ["Exit cost", "Usually none", "Small load if you exit within 7 days", "Penalty on early break"],
          ["Best for", "Cash needed in days", "Cash idle for weeks to a few months", "Money you can lock"],
        ],
      },
      {
        type: "paragraph",
        text: "In simple terms, overnight is for \"maybe tomorrow\", liquid is for \"probably not for a few weeks\", and FD is for \"definitely not until a set date\".",
      },
      { type: "heading", text: "What \"liquid\" really means here" },
      { type: "paragraph", text: "The name makes it sound like cash. It is close, but not exactly." },
      {
        type: "list",
        items: [
          "Redemption is generally processed the next working day. So if you need money on Thursday, put in the request on Wednesday.",
          "Instant redemption is offered by many fund houses, but it is capped. As things stand, the limit is a modest amount per day, so don't count on it for a large payment. Check the current limit with your fund.",
          "Exit load applies for the first week. It is small, and it reduces day by day until it reaches zero from the seventh day. Keep money for at least a week and you won't pay it.",
        ],
      },
      { type: "heading", text: "The part people skip: credit risk" },
      {
        type: "paragraph",
        text: "Liquid funds are low risk, but not no risk. Some of the papers they hold are issued by companies, and a company can, in a bad situation, fail to pay. This has happened in the Indian market in the past, which is why SEBI tightened the rules for liquid funds afterwards. They now have to hold a minimum portion in very liquid assets like government securities, T-bills and cash, and they have to value their holdings at market prices every day.",
      },
      {
        type: "paragraph",
        text: "That helps, but you still need to look at what a fund holds. A fund that earns a little extra usually does so by taking a little more risk.",
      },
      { type: "heading", text: "How to pick one, in five checks" },
      {
        type: "ordered-list",
        items: [
          "Look at the credit quality. Most of the portfolio should be in top-rated paper (A1+ for short-term, AAA for longer). Avoid a fund where a large share sits in lower-rated names.",
          "Check the concentration. If a big chunk is in one or two issuers, that is a warning sign.",
          "Compare the expense ratio. Returns here are modest, so cost matters more than people think.",
          "Look at fund size and the fund house. A very small fund can see big swings if a few large investors leave. A well-established fund house with a long record is a safer bet.",
          "Don't pick on last month's return alone. The highest number on the screen is often just the riskiest one.",
        ],
      },
      {
        type: "paragraph",
        text: "You don't need to hunt for the \"best\" fund. A boring, well-run fund with clean holdings is what you want.",
      },
      { type: "heading", text: "A simple way to use it in a business" },
      { type: "paragraph", text: "Most SMEs we speak to end up using a simple split." },
      {
        type: "list",
        items: [
          "Keep two to four weeks of expenses in the current account.",
          "Keep money for the next few days to two weeks in an overnight fund.",
          "Put the rest of the idle cash, the part you won't need for a month or more, in a liquid fund.",
          "Review once a month and move money between them as needed.",
        ],
      },
      {
        type: "paragraph",
        text: "If your cash needs are quite predictable, you can add FDs for the money that is truly locked in.",
      },
      { type: "heading", text: "Tax and paperwork" },
      {
        type: "paragraph",
        text: "For companies, LLPs and firms, gains from debt mutual funds are generally taxed as business income at your applicable rate. Because the NAV moves every day, you don't get a statement of interest like you do with an FD, so keep your transaction records safe for your CA. Also, make sure the investment is covered by a board resolution or partner approval, and that your entity KYC is done before you need to invest.",
      },
      { type: "heading", text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Treating it like a bank account. It isn't. Redemption takes time, and returns aren't fixed.",
          "Putting tomorrow's payroll in it. Keep money for immediate needs in the current account.",
          "Choosing by return alone. Look at what is behind the return.",
          "Moving money in and out every few days. The exit load adds up, and it is a hassle. If it is truly short-term, an overnight fund is the better choice.",
          "Forgetting about it. Set a monthly review date and stick to it.",
        ],
      },
      { type: "heading", text: "Quick answers" },
      {
        type: "list",
        items: [
          "Can I lose money in a liquid fund? It is possible, though uncommon, mainly through a credit event or a sharp market stress. It is not guaranteed like a bank deposit.",
          "How long should I stay invested? Anything from a week to a few months works. For longer, compare with short-term FDs and other debt funds.",
          "Is it better than an FD? Not always. It is more flexible, but the return isn't fixed. Choose based on how sure you are about when you'll need the money.",
        ],
      },
      { type: "heading", text: "The takeaway" },
      {
        type: "paragraph",
        text: "A liquid fund is a practical tool for cash that has no work to do for a few weeks or months. It earns more than a current account, stays flexible, and, if you choose carefully, carries little risk.",
      },
      {
        type: "callout",
        text: "If you want help setting up a cash policy, picking the right mix, or sorting out the approvals and tax side, the Finofiii team will be glad to help.",
      },
      {
        type: "disclaimer",
        text: "This article is for general information and is not investment advice. Mutual fund investments are subject to market risks. Please read scheme documents and consult your CA or financial advisor before investing.",
      },
    ],
  },
  {
    slug: "overnight-funds-explained",
    title: "Overnight Funds Explained",
    excerpt:
      "It lends money for one night, gets it back the next day, and lends it again. Why that simplicity makes overnight funds a tidy home for cash that has a job to do soon.",
    category: "Treasury",
    readTime: "6 min read",
    date: "2026-02-04",
    dateLabel: "Feb 2026",
    author: "Finofiii Editorial",
    metaDescription:
      "Overnight funds explained for Indian businesses: how they work, why risk is so low, expected returns, when they make sense vs liquid funds and FDs, tax and checks before investing.",
    keywords:
      "overnight funds explained, overnight fund vs liquid fund, TREPS, debt mutual funds, idle cash, treasury management",
    content: [
      {
        type: "lead",
        text: "If you have ever looked at a mutual fund list and wondered why one of them is called an \"overnight fund\", the name is the explanation. It lends money for one night, gets it back the next day, and lends it again. Every single day, on repeat.",
      },
      {
        type: "paragraph",
        text: "That sounds almost too simple to be useful. For a business with cash sitting around, it is exactly why it is useful.",
      },
      { type: "heading", text: "What an overnight fund actually does" },
      {
        type: "paragraph",
        text: "An overnight fund is a type of debt mutual fund. Under SEBI's rules, it can only invest in securities that mature in one day. In practice, most of the money goes into things like TREPS (tri-party repo) and reverse repo, which are basically very short, collateralised loans in the money market. The borrower puts up government securities as security, and the clearing house stands in the middle.",
      },
      {
        type: "paragraph",
        text: "So you are not lending to a company and hoping to get paid back. You are, through the fund, lending for one night against government collateral.",
      },
      { type: "heading", text: "Why the risk is so low" },
      {
        type: "paragraph",
        text: "Mutual fund returns move for two main reasons: interest rates change, or a borrower fails to pay.",
      },
      {
        type: "paragraph",
        text: "Interest rate risk is tiny, because the fund's money resets every day. When rates move, the fund simply reinvests at the new rate the next morning. There is no long bond sitting in the portfolio losing value.",
      },
      {
        type: "paragraph",
        text: "Credit risk is also very small, because the loans are backed by government securities and not by someone's promise.",
      },
      {
        type: "paragraph",
        text: "No mutual fund is risk-free, and nobody should say so. But among debt funds, overnight funds are about as plain as it gets.",
      },
      { type: "heading", text: "What returns to expect" },
      {
        type: "paragraph",
        text: "The return follows the overnight interest rates in the money market, which move with the RBI's policy rate. When the RBI raises rates, overnight funds earn more. When it cuts, they earn less. The NAV goes up a little every day, and the gain builds up slowly and steadily.",
      },
      {
        type: "paragraph",
        text: "A quick feel for the numbers. At an illustrative 6% a year, ₹10 lakh earns roughly ₹165 a day. Not exciting on any one day. Over a month of idle cash, it adds up to about ₹5,000, which is more than the current account gives you, which is nothing.",
      },
      {
        type: "paragraph",
        text: "One small detail people like to know: because the NAV is declared on business days, money invested before a weekend or holiday keeps earning through it. The gain for those days gets reflected in the NAV when the next business day's NAV is declared.",
      },
      { type: "heading", text: "How it compares" },
      {
        type: "table",
        headers: ["", "Current account", "Overnight fund", "Liquid fund"],
        rows: [
          ["Interest", "None", "Yes, modest", "Yes, usually a little higher"],
          ["Money available", "Instantly", "Next working day", "Next working day (instant option up to a limit)"],
          ["Main risk", "None, but inflation eats value", "Very low", "Low, slightly higher than overnight"],
          ["Exit load", "n/a", "Usually none", "Small, in the first 7 days"],
          ["Good for", "Daily payments", "Money you might need within days", "Money idle for weeks or months"],
        ],
      },
      { type: "heading", text: "When overnight funds make sense" },
      {
        type: "paragraph",
        text: "Overnight funds work best for cash that you are not sure when you'll need, but you do know is not for tomorrow morning.",
      },
      {
        type: "list",
        items: [
          "Tax money. GST, TDS or advance tax that you've collected and which is due on a certain date. Park it in an overnight fund and take it out a day or two ahead.",
          "Cash waiting for a payment. A large vendor payment, a customer advance that has to be returned, or a deposit pending clearance.",
          "Your safety buffer. Money you want available at short notice but don't want sitting at zero.",
          "Cash from a fundraise or an asset sale while you decide what to do with it.",
        ],
      },
      { type: "heading", text: "When they don't" },
      {
        type: "paragraph",
        text: "If you have money you won't touch for three months, a liquid fund or a short FD will usually earn more. Overnight funds are built for flexibility, not for the highest return. And if you need money the same minute, keep that in your current account. Redemption is not instant in the usual case, so don't put tomorrow's salary run there.",
      },
      { type: "heading", text: "Practical things to check before you invest" },
      {
        type: "list",
        items: [
          "Cut-off times. Each fund has a time by which your request needs to reach it for that day's NAV. Miss it and it goes to the next business day.",
          "Redemption timeline. Typically the next working day. Plan the withdrawal ahead of the date you actually need the money.",
          "Expense ratio. It is usually very low for these funds, but still compare. When returns are modest, a small difference in cost matters.",
          "Who is allowed to invest. Companies, LLPs, firms and trusts can generally invest, but your internal approval should be in place. A board resolution or partner consent is enough.",
          "Your KYC. Entity KYC for a company can take a little time, so complete it before you need it.",
        ],
      },
      { type: "heading", text: "What about tax?" },
      {
        type: "paragraph",
        text: "For businesses, gains from debt mutual funds are generally treated as business income and taxed at your applicable rate. There is no special lower rate or indexation benefit to count on. So look at returns after tax, and keep a record of the units you buy and sell, as your CA will need it at filing time.",
      },
      { type: "heading", text: "Quick answers" },
      {
        type: "list",
        items: [
          "Is an overnight fund the same as an FD? No. An FD has a fixed rate and a lock-in. An overnight fund has no lock-in, but the return is not fixed. It changes with market rates.",
          "Can I lose money? The chance is very low, but it is a mutual fund, so it is not guaranteed.",
          "How much should I keep in it? There is no fixed number. A good starting point is your tax and compliance money plus part of your surplus that you may need at short notice.",
          "Can I set it up to happen automatically? Many fund houses and platforms allow systematic transfers and redemptions. Check what your platform offers.",
        ],
      },
      { type: "heading", text: "The takeaway" },
      {
        type: "paragraph",
        text: "Overnight funds are not meant to make you rich. They are a tidy place to keep cash that has a job to do soon, earning something rather than nothing, with very little to worry about.",
      },
      {
        type: "callout",
        text: "If you want help working out how much of your business cash belongs in a fund like this, or setting up the approvals and tax planning around it, the Finofiii team can help.",
      },
      {
        type: "disclaimer",
        text: "This article is for general information and is not investment advice. Mutual fund investments are subject to market risks. Please read scheme documents and consult your CA or financial advisor before investing.",
      },
    ],
  },
  {
    slug: "what-to-do-with-idle-current-account-balance",
    title: "What to Do with Idle Current Account Balance",
    excerpt:
      "That gap between your closing balance and your lowest balance is money doing nothing. A practical, jargon-free way to split it into three buckets and put the surplus to work.",
    category: "Treasury",
    readTime: "7 min read",
    date: "2026-02-02",
    dateLabel: "Feb 2026",
    author: "Finofiii Editorial",
    metaDescription:
      "What to do with idle current account balance: a three-bucket framework for Indian businesses to separate operating cash, tax money and surplus, and where to park each.",
    keywords:
      "idle current account balance, idle cash management, three bucket cash framework, liquid funds, overnight funds, sweep FD, SME treasury",
    content: [
      {
        type: "lead",
        text: "Open your current account statement and look at the closing balance on any random day last month. Now look at the lowest balance in the whole month. If there is a big gap between the two, say ₹12 lakh sitting there for three weeks before it moves, that gap is money doing nothing.",
      },
      {
        type: "paragraph",
        text: "Most business owners know this and still leave it. The usual reasons: \"I might need it any day\", \"mutual funds are confusing\", or simply \"I'll sort it out next month\". Next month becomes next year.",
      },
      { type: "paragraph", text: "Here is a practical way to think about it, without jargon." },
      { type: "heading", text: "First, why this matters" },
      {
        type: "paragraph",
        text: "A current account in India pays no interest. Zero. It is built for payments, not for earning. And while your balance sits there, your costs keep rising with inflation.",
      },
      {
        type: "paragraph",
        text: "A rough example. Suppose ₹25 lakh stays idle in your current account for ten months of the year. If that money had been in a low-risk debt option earning around 6.5% (an illustrative figure, actual returns move with the market), you would have made roughly ₹1.35 lakh. For doing nothing except moving it. That is a month of salary for a junior team member, left on the table.",
      },
      { type: "heading", text: "Step 1: Split the money into three buckets" },
      { type: "paragraph", text: "Don't think of your balance as one big number. Think of it as three." },
      {
        type: "list",
        items: [
          "Bucket 1: Operating cash. What you need for the next 2 to 4 weeks: salaries, rent, vendor payments, regular expenses. This stays in the current account. Don't touch it.",
          "Bucket 2: Tax and compliance money. GST, TDS, advance tax, PF/ESI. This money is not really yours. It belongs to the government and has a due date. You can park it somewhere safe and liquid until that date, but it must be back in time. Many small businesses get into trouble here because they treat this money as spare cash and then scramble on the 20th.",
          "Bucket 3: Surplus. Whatever is left after buckets 1 and 2. This is the money that can actually work for you.",
        ],
      },
      { type: "heading", text: "Step 2: Pick the right place for each bucket" },
      {
        type: "paragraph",
        text: "There is no single \"best\" option. It depends on how soon you need the money.",
      },
      {
        type: "list",
        items: [
          "Money you may need within days: overnight funds. These invest in securities that mature the next day, so the interest rate risk is very small. Money comes back the next working day. Good for cash that might be needed at short notice.",
          "Money you won't need for a few weeks or months: liquid funds. These invest in short-term instruments with maturity up to 91 days. Returns are usually a little higher than overnight funds, with slightly more risk. Redemption is generally next working day, and many funds also offer an instant redemption option up to a limit. Check the exit load too. Liquid funds usually charge a small exit load if you withdraw within the first 7 days.",
          "Money you can lock for a longer time: fixed deposits. Predictable and simple. The catch is that breaking an FD early can cost you a penalty, so only lock what you are sure about.",
          "Don't want to think about it at all: sweep-in/sweep-out facility. Many banks offer an arrangement where anything above a threshold you set automatically moves into an FD, and comes back to the current account when the balance falls short. Less effort, but check the rate and the minimum amounts. Sometimes the return is lower than what you could get on your own.",
        ],
      },
      { type: "heading", text: "Step 3: Know the tax side before you start" },
      {
        type: "paragraph",
        text: "For companies, LLPs and firms, gains from debt mutual funds are generally taxed as part of business income at your applicable rate. FD interest is also taxable, and TDS may be cut by the bank. None of this is a reason to avoid investing, but it is a reason to check the post-tax return, not just the headline number. Your CA should look at this once and set the rule.",
      },
      { type: "heading", text: "Mistakes I see again and again" },
      {
        type: "list",
        items: [
          "Parking everything in one place. Even if it is a good option, keep some money in the current account for real needs.",
          "Chasing the highest return. A fund that gives 0.5% extra by taking credit risk is not worth it when the money is meant to be your safety cushion.",
          "Forgetting the tax calendar. Money invested for returns, but needed on the 20th for GST. Plan redemption dates.",
          "No approval trail. In a company or LLP, investing surplus funds should be backed by a board resolution or partner approval. Do it once, in writing, and avoid questions later.",
          "Doing it manually and then forgetting. If it needs your attention every week, it will fail in a busy month.",
        ],
      },
      { type: "heading", text: "A simple policy you can copy" },
      { type: "paragraph", text: "If you want something you can start with this week:" },
      {
        type: "list",
        items: [
          "Keep 3 to 4 weeks of expenses in the current account.",
          "Move tax money into a liquid or overnight option and set reminders for the due dates.",
          "Put the real surplus in liquid funds or a sweep FD.",
          "Review once a month, on a fixed date. Fifteen minutes is enough.",
        ],
      },
      {
        type: "paragraph",
        text: "That is it. You don't need a treasury department. You need a rule and a calendar reminder.",
      },
      { type: "heading", text: "One last thing" },
      {
        type: "paragraph",
        text: "Every business is different. Seasonal businesses, exporters and startups that have just raised money all need slightly different setups. If you want help building a cash policy for your company, along with the board resolution, tax planning and compliance side, our team works with businesses on exactly this.",
      },
      {
        type: "callout",
        text: "If you want help building a cash policy for your company — board resolution, tax planning and the compliance side included — the Finofiii team works with businesses on exactly this.",
      },
      {
        type: "disclaimer",
        text: "This article is for general information and is not investment advice. Mutual fund investments are subject to market risks. Please read the scheme documents and speak to your CA or financial advisor before investing.",
      },
    ],
  }
);

export const getBlogPost = (slug) => blogPosts.find((p) => p.slug === slug);
