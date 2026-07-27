<?php
// Enable error reporting for debugging during setup (disable in production if desired)
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Set CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Parse request path
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Clean up route path
// E.g. /api/partners -> /partners
$route = str_replace('/api/index.php', '', $path);
$route = str_replace('/api', '', $route);
$route = '/' . ltrim($route, '/');
$route = rtrim($route, '/');
if ($route === '') {
    $route = '/';
}

// Initialize SQLite database
try {
    $db_file = __DIR__ . '/inquiries.db';
    $db = new PDO("sqlite:" . $db_file);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create tables if they don't exist
    $db->exec("CREATE TABLE IF NOT EXISTS contact_inquiries (
        id TEXT PRIMARY KEY,
        name TEXT,
        email TEXT,
        phone TEXT,
        message TEXT,
        created_at TEXT
    )");

    $db->exec("CREATE TABLE IF NOT EXISTS treasury_inquiries (
        id TEXT PRIMARY KEY,
        company_name TEXT,
        contact_person TEXT,
        email TEXT,
        phone TEXT,
        investment_amount REAL,
        message TEXT,
        created_at TEXT
    )");

    $db->exec("CREATE TABLE IF NOT EXISTS founder_applications (
        id TEXT PRIMARY KEY,
        founder_name TEXT,
        email TEXT,
        phone TEXT,
        net_worth REAL,
        investment_amount REAL,
        investment_interest TEXT,
        experience TEXT,
        message TEXT,
        created_at TEXT
    )");

    $db->exec("CREATE TABLE IF NOT EXISTS mfo_inquiries (
        id TEXT PRIMARY KEY,
        family_name TEXT,
        contact_person TEXT,
        email TEXT,
        phone TEXT,
        net_worth REAL,
        services_interested TEXT,
        message TEXT,
        created_at TEXT
    )");
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["detail" => "Database connection failed: " . $e->getMessage()]);
    exit();
}

// Seed Data
$mutual_funds = [
    [
        "id" => "mf1",
        "name" => "HDFC Liquid Fund",
        "amc" => "HDFC",
        "category" => "Liquid",
        "return_rate" => 5.2,
        "min_investment" => 10000000.0,
        "risk_level" => "Low",
        "description" => "Ideal for parking surplus funds for short periods with high liquidity"
    ],
    [
        "id" => "mf2",
        "name" => "ICICI Overnight Fund",
        "amc" => "ICICI",
        "category" => "Liquid",
        "return_rate" => 4.8,
        "min_investment" => 10000000.0,
        "risk_level" => "Low",
        "description" => "Perfect for weekend and overnight parking of business cash"
    ],
    [
        "id" => "mf3",
        "name" => "SBI Ultra Short Duration Fund",
        "amc" => "SBI",
        "category" => "Debt",
        "return_rate" => 6.5,
        "min_investment" => 10000000.0,
        "risk_level" => "Low",
        "description" => "Short-term debt fund for 1-3 month parking with better returns"
    ],
    [
        "id" => "mf4",
        "name" => "Axis Treasury Advantage Fund",
        "amc" => "Axis",
        "category" => "Debt",
        "return_rate" => 7.2,
        "min_investment" => 10000000.0,
        "risk_level" => "Medium",
        "description" => "Medium-term debt fund for 3-6 month parking"
    ],
    [
        "id" => "mf5",
        "name" => "Kotak Corporate Bond Fund",
        "amc" => "Kotak",
        "category" => "Debt",
        "return_rate" => 8.0,
        "min_investment" => 10000000.0,
        "risk_level" => "Medium",
        "description" => "Corporate bond fund for 6-12 month investment horizon"
    ],
    [
        "id" => "mf6",
        "name" => "Aditya Birla Money Manager Fund",
        "amc" => "Aditya Birla",
        "category" => "Liquid",
        "return_rate" => 5.0,
        "min_investment" => 10000000.0,
        "risk_level" => "Low",
        "description" => "Flexible liquid fund for business treasury management"
    ]
];

$startup_deals = [
    [
        "id" => "deal1",
        "company_name" => "TechVenture AI",
        "logo_url" => "https://via.placeholder.com/100",
        "stage" => "Series A",
        "sector" => "Artificial Intelligence",
        "min_investment" => 10000000.0,
        "target_raise" => 500000000.0,
        "current_raise" => 350000000.0,
        "status" => "active",
        "description" => "Leading AI platform for enterprise automation",
        "highlights" => ["Backed by top-tier VCs", "3x revenue growth YoY", "Enterprise customers include Fortune 500"],
        "created_at" => "2025-08-01T00:00:00Z"
    ],
    [
        "id" => "deal2",
        "company_name" => "FinNext",
        "logo_url" => "https://via.placeholder.com/100",
        "stage" => "Pre-IPO",
        "sector" => "Fintech",
        "min_investment" => 25000000.0,
        "target_raise" => 2000000000.0,
        "current_raise" => 1800000000.0,
        "status" => "active",
        "description" => "Digital banking platform disrupting traditional finance",
        "highlights" => ["IPO planned for Q4 2025", "10M+ active users", "Profitable for 2 years"],
        "created_at" => "2025-07-15T00:00:00Z"
    ],
    [
        "id" => "deal3",
        "company_name" => "HealthTech Solutions",
        "logo_url" => "https://via.placeholder.com/100",
        "stage" => "Series B",
        "sector" => "Healthcare",
        "min_investment" => 15000000.0,
        "target_raise" => 800000000.0,
        "current_raise" => 600000000.0,
        "status" => "active",
        "description" => "AI-powered diagnostic and telemedicine platform",
        "highlights" => ["Partnership with major hospitals", "FDA approved", "Growing 200% annually"],
        "created_at" => "2025-07-20T00:00:00Z"
    ],
    [
        "id" => "deal4",
        "company_name" => "GreenEnergy Co",
        "logo_url" => "https://via.placeholder.com/100",
        "stage" => "Series C",
        "sector" => "Clean Energy",
        "min_investment" => 20000000.0,
        "target_raise" => 1500000000.0,
        "current_raise" => 1200000000.0,
        "status" => "upcoming",
        "description" => "Renewable energy solutions for industrial sector",
        "highlights" => ["Government contracts secured", "Carbon credit revenues", "Expanding to 5 countries"],
        "created_at" => "2025-08-10T00:00:00Z"
    ],
    [
        "id" => "deal5",
        "company_name" => "EduTech Global",
        "logo_url" => "https://via.placeholder.com/100",
        "stage" => "Pre-IPO",
        "sector" => "Education Technology",
        "min_investment" => 30000000.0,
        "target_raise" => 3000000000.0,
        "current_raise" => 2500000000.0,
        "status" => "upcoming",
        "description" => "Leading online education platform with global reach",
        "highlights" => ["50M+ students", "Operating in 25 countries", "IPO in 6 months"],
        "created_at" => "2025-08-05T00:00:00Z"
    ]
];

$partners = [
    ["id" => "p1", "name" => "HDFC AMC", "logo_url" => "https://via.placeholder.com/150x60?text=HDFC", "type" => "AMC", "category" => "treasury"],
    ["id" => "p2", "name" => "ICICI Prudential", "logo_url" => "https://via.placeholder.com/150x60?text=ICICI", "type" => "AMC", "category" => "treasury"],
    ["id" => "p3", "name" => "SBI Mutual Fund", "logo_url" => "https://via.placeholder.com/150x60?text=SBI", "type" => "AMC", "category" => "treasury"],
    ["id" => "p4", "name" => "Axis AMC", "logo_url" => "https://via.placeholder.com/150x60?text=AXIS", "type" => "AMC", "category" => "treasury"],
    ["id" => "p5", "name" => "Kotak Mahindra", "logo_url" => "https://via.placeholder.com/150x60?text=KOTAK", "type" => "AMC", "category" => "treasury"],
    ["id" => "p6", "name" => "Aditya Birla", "logo_url" => "https://via.placeholder.com/150x60?text=BIRLA", "type" => "AMC", "category" => "treasury"],
    ["id" => "p7", "name" => "UTI AMC", "logo_url" => "https://via.placeholder.com/150x60?text=UTI", "type" => "AMC", "category" => "treasury"],
    ["id" => "p8", "name" => "Nippon India", "logo_url" => "https://via.placeholder.com/150x60?text=NIPPON", "type" => "AMC", "category" => "treasury"],
    ["id" => "p9", "name" => "Sequoia Capital", "logo_url" => "https://via.placeholder.com/150x60?text=SEQUOIA", "type" => "VC", "category" => "founders"],
    ["id" => "p10", "name" => "Accel Partners", "logo_url" => "https://via.placeholder.com/150x60?text=ACCEL", "type" => "VC", "category" => "founders"],
    ["id" => "p11", "name" => "Tiger Global", "logo_url" => "https://via.placeholder.com/150x60?text=TIGER", "type" => "VC", "category" => "founders"],
    ["id" => "p12", "name" => "SoftBank", "logo_url" => "https://via.placeholder.com/150x60?text=SOFTBANK", "type" => "VC", "category" => "founders"],
    ["id" => "p13", "name" => "Lightspeed", "logo_url" => "https://via.placeholder.com/150x60?text=LIGHTSPEED", "type" => "VC", "category" => "founders"],
    ["id" => "p14", "name" => "Matrix Partners", "logo_url" => "https://via.placeholder.com/150x60?text=MATRIX", "type" => "VC", "category" => "founders"],
];

$mfo_services = [
    ["id" => "1", "name" => "Private Wealth Management", "description" => "Comprehensive wealth management tailored to your family's unique goals", "icon" => "wallet"],
    ["id" => "2", "name" => "Estate Planning", "description" => "Strategic planning for wealth transfer and legacy preservation", "icon" => "file-text"],
    ["id" => "3", "name" => "Real Estate Advisory", "description" => "Expert guidance on real estate investments and portfolio management", "icon" => "home"],
    ["id" => "4", "name" => "Investment Banking", "description" => "Corporate finance and M&A advisory services", "icon" => "briefcase"],
    ["id" => "5", "name" => "Tax Planning", "description" => "Optimize tax efficiency across all your investments", "icon" => "calculator"],
    ["id" => "6", "name" => "Lending Solutions", "description" => "Customized lending and credit facilities", "icon" => "credit-card"],
    ["id" => "7", "name" => "Insurance Solutions", "description" => "Comprehensive insurance planning and risk management", "icon" => "shield"],
    ["id" => "8", "name" => "Immigration Services", "description" => "Global mobility and citizenship planning", "icon" => "globe"],
    ["id" => "9", "name" => "Philanthropy Advisory", "description" => "Strategic philanthropic planning and foundation management", "icon" => "heart"]
];

// Helper to read JSON request body
function get_json_input() {
    $input = file_get_contents('php://input');
    return json_decode($input, true) ?? [];
}

// Router
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($route === '/' || $route === '') {
        echo json_encode(["message" => "Welcome to Finofii API"]);
    } 
    elseif ($route === '/partners') {
        $type = $_GET['type'] ?? null;
        $category = $_GET['category'] ?? null;
        
        $filtered = array_values(array_filter($partners, function($p) use ($type, $category) {
            if ($type && $p['type'] !== $type) return false;
            if ($category && $p['category'] !== $category) return false;
            return true;
        }));
        echo json_encode($filtered);
    } 
    elseif ($route === '/treasury/funds') {
        $category = $_GET['category'] ?? null;
        
        $filtered = array_values(array_filter($mutual_funds, function($f) use ($category) {
            if ($category && $f['category'] !== $category) return false;
            return true;
        }));
        echo json_encode($filtered);
    } 
    elseif ($route === '/founders/deals') {
        $status = $_GET['status'] ?? null;
        
        $filtered = array_values(array_filter($startup_deals, function($d) use ($status) {
            if ($status && $d['status'] !== $status) return false;
            return true;
        }));
        echo json_encode($filtered);
    } 
    elseif ($route === '/founders/stats') {
        $total_deals = count($startup_deals);
        $total_capital = array_sum(array_column($startup_deals, 'current_raise'));
        $active_deals = count(array_filter($startup_deals, function($d) {
            return $d['status'] === 'active';
        }));
        
        echo json_encode([
            "total_deals" => $total_deals,
            "total_capital_invested" => $total_capital,
            "active_deals" => $active_deals
        ]);
    } 
    elseif ($route === '/mfo/services') {
        echo json_encode($mfo_services);
    } 
    else {
        http_response_code(404);
        echo json_encode(["detail" => "Not Found"]);
    }
} 
elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = get_json_input();
    
    if ($route === '/contact') {
        if (empty($input['name']) || empty($input['email']) || empty($input['phone']) || empty($input['message'])) {
            http_response_code(422);
            echo json_encode(["detail" => "Missing required fields"]);
            exit();
        }
        
        $id = uniqid('contact_', true);
        $created_at = gmdate('Y-m-d\TH:i:s\Z');
        
        $stmt = $db->prepare("INSERT INTO contact_inquiries (id, name, email, phone, message, created_at) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([$id, $input['name'], $input['email'], $input['phone'], $input['message'], $created_at]);
        
        echo json_encode([
            "id" => $id,
            "name" => $input['name'],
            "email" => $input['email'],
            "phone" => $input['phone'],
            "message" => $input['message'],
            "created_at" => $created_at
        ]);
    } 
    elseif ($route === '/treasury/calculate') {
        if (!isset($input['invested_amount']) || !isset($input['days'])) {
            http_response_code(422);
            echo json_encode(["detail" => "Missing invested_amount or days"]);
            exit();
        }
        
        $amount = (float)$input['invested_amount'];
        $days = (int)$input['days'];
        $rate = (float)($input['annual_return_rate'] ?? 5.0);
        
        $daily_rate = $rate / 365 / 100;
        $profit = $amount * $daily_rate * $days;
        $total_value = $amount + $profit;
        
        echo json_encode([
            "invested_amount" => $amount,
            "days" => $days,
            "annual_return_rate" => $rate,
            "profit" => round($profit, 2),
            "total_value" => round($total_value, 2)
        ]);
    } 
    elseif ($route === '/treasury/inquiry') {
        if (empty($input['company_name']) || empty($input['contact_person']) || empty($input['email']) || empty($input['phone']) || !isset($input['investment_amount'])) {
            http_response_code(422);
            echo json_encode(["detail" => "Missing required fields"]);
            exit();
        }
        
        $id = uniqid('treasury_', true);
        $created_at = gmdate('Y-m-d\TH:i:s\Z');
        
        $stmt = $db->prepare("INSERT INTO treasury_inquiries (id, company_name, contact_person, email, phone, investment_amount, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $id, 
            $input['company_name'], 
            $input['contact_person'], 
            $input['email'], 
            $input['phone'], 
            (float)$input['investment_amount'], 
            $input['message'] ?? null, 
            $created_at
        ]);
        
        echo json_encode([
            "id" => $id,
            "company_name" => $input['company_name'],
            "contact_person" => $input['contact_person'],
            "email" => $input['email'],
            "phone" => $input['phone'],
            "investment_amount" => (float)$input['investment_amount'],
            "message" => $input['message'] ?? null,
            "created_at" => $created_at
        ]);
    } 
    elseif ($route === '/founders/application') {
        if (empty($input['founder_name']) || empty($input['email']) || empty($input['phone']) || !isset($input['net_worth']) || !isset($input['investment_amount']) || empty($input['investment_interest']) || empty($input['experience'])) {
            http_response_code(422);
            echo json_encode(["detail" => "Missing required fields"]);
            exit();
        }
        
        $id = uniqid('founder_', true);
        $created_at = gmdate('Y-m-d\TH:i:s\Z');
        
        // Convert interest array to comma-separated string
        $interest = is_array($input['investment_interest']) ? implode(',', $input['investment_interest']) : $input['investment_interest'];
        
        $stmt = $db->prepare("INSERT INTO founder_applications (id, founder_name, email, phone, net_worth, investment_amount, investment_interest, experience, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $id,
            $input['founder_name'],
            $input['email'],
            $input['phone'],
            (float)$input['net_worth'],
            (float)$input['investment_amount'],
            $interest,
            $input['experience'],
            $input['message'] ?? null,
            $created_at
        ]);
        
        echo json_encode([
            "id" => $id,
            "founder_name" => $input['founder_name'],
            "email" => $input['email'],
            "phone" => $input['phone'],
            "net_worth" => (float)$input['net_worth'],
            "investment_amount" => (float)$input['investment_amount'],
            "investment_interest" => is_array($input['investment_interest']) ? $input['investment_interest'] : explode(',', $input['investment_interest']),
            "experience" => $input['experience'],
            "message" => $input['message'] ?? null,
            "created_at" => $created_at
        ]);
    } 
    elseif ($route === '/mfo/inquiry') {
        if (empty($input['family_name']) || empty($input['contact_person']) || empty($input['email']) || empty($input['phone']) || !isset($input['net_worth']) || empty($input['services_interested'])) {
            http_response_code(422);
            echo json_encode(["detail" => "Missing required fields"]);
            exit();
        }
        
        $id = uniqid('mfo_', true);
        $created_at = gmdate('Y-m-d\TH:i:s\Z');
        
        $services = is_array($input['services_interested']) ? implode(',', $input['services_interested']) : $input['services_interested'];
        
        $stmt = $db->prepare("INSERT INTO mfo_inquiries (id, family_name, contact_person, email, phone, net_worth, services_interested, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $id,
            $input['family_name'],
            $input['contact_person'],
            $input['email'],
            $input['phone'],
            (float)$input['net_worth'],
            $services,
            $input['message'] ?? null,
            $created_at
        ]);
        
        echo json_encode([
            "id" => $id,
            "family_name" => $input['family_name'],
            "contact_person" => $input['contact_person'],
            "email" => $input['email'],
            "phone" => $input['phone'],
            "net_worth" => (float)$input['net_worth'],
            "services_interested" => is_array($input['services_interested']) ? $input['services_interested'] : explode(',', $input['services_interested']),
            "message" => $input['message'] ?? null,
            "created_at" => $created_at
        ]);
    } 
    else {
        http_response_code(404);
        echo json_encode(["detail" => "Not Found"]);
    }
} 
else {
    http_response_code(405);
    echo json_encode(["detail" => "Method Not Allowed"]);
}
