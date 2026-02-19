// GUBAT RESILIENT HOUSING - Main Application JavaScript

// Global state management
const userSelections = {
    area: null,
    barangay: null,
    hazards: []
};

// Data storage - will be moved to backend files
const allBarangays = [
    { name: "Ariman", types: ["coastal", "rural"], description: "Coastal and rural area with agricultural activities", hazards: ["flood", "sea-level-rise", "ground-shaking"] },
    { name: "Bagacay", types: ["coastal", "rural", "upland"], description: "Mixed area with coastal, rural and upland characteristics", hazards: ["flood", "storm-surge", "rain-landslide"] },
    { name: "Balud Del Norte (Poblacion)", types: ["coastal", "rural"], description: "Coastal poblacion area with residential establishments", hazards: ["flood", "storm-surge", "sea-level-rise"] },
    { name: "Balud Del Sur (Poblacion)", types: ["coastal", "rural"], description: "Southern coastal poblacion area", hazards: ["flood", "storm-surge", "sea-level-rise"] },
    { name: "Benguet", types: ["rural", "upland"], description: "Upland area with agricultural terraces", hazards: ["rain-landslide", "ashfall", "earthquake-landslide"] },
    { name: "Bentuco", types: ["rural", "upland"], description: "Hazard-prone barangay with multi-hazard resilient building recommendations. Upland rural area with farming activities prone to flooding, earthquakes, volcanic ash fall, typhoons, erosion/landslide and drought-related soil movement.", hazards: ["rain-landslide", "earthquake-landslide", "flood", "ground-shaking", "ashfall", "typhoon", "soil-erosion", "drought"] },
    { name: "Beriran", types: ["rural", "upland"], description: "Upland agricultural community", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Buenavista", types: ["coastal", "rural"], description: "Coastal rural area with scenic views", hazards: ["flood", "storm-surge", "sea-level-rise"] },
    { name: "Bulacao", types: ["rural"], description: "Agricultural area with irrigation systems", hazards: ["flood", "ground-shaking"] },
    { name: "Cabigaan", types: ["rural", "upland"], description: "Upland farming community", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Cabiguhan", types: ["rural", "upland"], description: "Upland rural area with local markets", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Carriedo", types: ["rural", "upland"], description: "Agricultural barangay in upland area", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Casili", types: ["rural", "upland"], description: "Rural community with farming activities in upland", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Cogon", types: ["coastal", "rural"], description: "Coastal agricultural area", hazards: ["flood", "sea-level-rise", "storm-surge"] },
    { name: "Cota Na Daco (Poblacion)", types: ["urban"], description: "Urban poblacion area with mixed residential and commercial", hazards: ["flood", "ground-shaking", "typhoon"] },
    { name: "Dita (Estillero)", types: ["rural", "upland"], description: "Upland rural area", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Jupi (Estillero)", types: ["rural", "upland"], description: "Upland rural residential area", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Lapinig (Estillero)", types: ["rural", "upland"], description: "Upland agricultural community", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Luna-Candol (Poblacion)", types: ["urban"], description: "Urban poblacion area with commercial establishments", hazards: ["flood", "ground-shaking", "typhoon"] },
    { name: "Manapao", types: ["rural", "upland"], description: "Upland agricultural community", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Manook (Poblacion)", types: ["urban"], description: "Urban poblacion area", hazards: ["ground-shaking", "typhoon"] },
    { name: "Naagtan", types: ["rural"], description: "Rural agricultural area", hazards: ["flood", "ground-shaking"] },
    { name: "Nato", types: ["rural", "upland"], description: "Upland farming community", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Nazareno", types: ["rural", "upland"], description: "Agricultural barangay in upland", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Ogao", types: ["coastal", "rural"], description: "Coastal rural community", hazards: ["flood", "storm-surge", "sea-level-rise"] },
    { name: "Paco", types: ["rural", "upland"], description: "Upland agricultural area", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Panganiban (Poblacion)", types: ["urban", "coastal"], description: "Urban coastal poblacion with commercial activities", hazards: ["flood", "ground-shaking", "storm-surge", "sea-level-rise"] },
    { name: "Paradijon (Poblacion)", types: ["urban"], description: "Urban poblacion area", hazards: ["flood", "ground-shaking", "typhoon"] },
    { name: "Patag", types: ["rural", "upland"], description: "Flat agricultural land in upland", hazards: ["flood", "rain-landslide"] },
    { name: "Payawin", types: ["rural", "upland"], description: "Upland farming community", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Pinontingan (Poblacion)", types: ["urban"], description: "Urban poblacion area vulnerable to flooding, storm surge, sea level rise, earthquakes, tsunamis, volcanic ash fall, and typhoons. Multi-story buildings must address water pressure and debris impact from surge and tsunami, seismic forces, strong wind resistance, and ash accumulation with reinforced concrete structures, elevated foundations, metal roofing, and composite framing systems for coastal urban resilience.", hazards: ["flood", "storm-surge", "sea-level-rise", "ground-shaking", "tsunami", "ashfall", "typhoon"] },
    { name: "Rizal", types: ["coastal", "rural"], description: "Coastal rural area with black sand beaches vulnerable to flooding, storm surge, sea level rise, earthquakes, tsunamis, volcanic ash fall, and typhoons. Buildings must address water pressure and debris impact from surge and tsunami, seismic forces, strong wind resistance, and ash accumulation with reinforced concrete structures, elevated foundations, metal roofing, and composite framing systems for coastal rural resilience.", hazards: ["flood", "storm-surge", "sea-level-rise", "ground-shaking", "tsunami", "ashfall", "typhoon"] },
    { name: "San Ignacio", types: ["rural", "coastal"], description: "Coastal rural agricultural community vulnerable to flooding, storm surge, sea level rise, earthquakes, tsunamis, volcanic ash fall, and typhoons. Buildings must address water pressure and debris impact from surge and tsunami events, seismic forces from ground shaking, strong wind forces from typhoons, and ash accumulation with resilient concrete structures, elevated foundations, secure metal roofing, and composite framing systems.", hazards: ["flood", "storm-surge", "sea-level-rise", "ground-shaking", "tsunami", "ashfall", "typhoon"] },
    { name: "Sangat", types: ["rural", "upland"], description: "Upland rural barangay with farming activities", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Santa Ana", types: ["rural", "upland"], description: "Upland agricultural community", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Tabi", types: ["rural", "upland"], description: "Upland rural area with traditional farming", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Tagaytay", types: ["rural", "upland"], description: "Elevated area with scenic views and agricultural land", hazards: ["rain-landslide", "earthquake-landslide", "ashfall"] },
    { name: "Tigkiw", types: ["rural", "upland"], description: "Upland agricultural community", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Tiris", types: ["coastal", "upland", "rural"], description: "Mixed coastal-upland-rural area", hazards: ["flood", "storm-surge", "rain-landslide", "sea-level-rise"] },
    { name: "Togawe", types: ["rural", "upland"], description: "Mountainous barangay with cool climate and farming", hazards: ["rain-landslide", "ashfall", "earthquake-landslide"] },
    { name: "Union", types: ["rural", "upland"], description: "Upland community with agricultural activities", hazards: ["rain-landslide", "earthquake-landslide"] },
    { name: "Villareal", types: ["rural", "upland"], description: "Upland agricultural barangay", hazards: ["rain-landslide", "earthquake-landslide"] }
];

// Hazard data
const hazardData = [
    { id: "flood", name: "Flood", description: "Area experiences regular flooding during heavy rains or storm surge", icon: "💧" },
    { id: "rain-landslide", name: "Rain-Induced Landslide", description: "Landslides caused by heavy rainfall and saturated soil", icon: "⛰️" },
    { id: "earthquake-landslide", name: "Earthquake-Induced Landslides", description: "Landslides triggered by seismic activity and ground shaking", icon: "🏔️" },
    { id: "soil-erosion", name: "Soil Erosion", description: "Erosion of surface soils and topsoil from water and wind movement", icon: "🌊" },
    { id: "drought", name: "Drought / Soil Movement", description: "Dry spell conditions causing soil shrinkage, cracking, and settlement", icon: "☀️" },
    { id: "storm-surge", name: "Storm Surge", description: "Coastal flooding from tropical cyclones and strong winds", icon: "🌊" },
    { id: "sea-level-rise", name: "Sea Level Rise", description: "Coastal areas affected by rising sea levels", icon: "📈" },
    { id: "ground-shaking", name: "Ground Shaking", description: "Seismic activity and earthquake ground motion", icon: "⚡" },
    { id: "tsunami", name: "Tsunami", description: "Large ocean waves caused by underwater earthquakes or landslides", icon: "🌊" },
    { id: "ashfall", name: "Ash Fall", description: "Volcanic ash accumulation from nearby active volcanoes", icon: "🌋" },
    { id: "typhoon", name: "Typhoons", description: "Strong tropical cyclones with high winds, heavy rain, and debris impact", icon: "🌀" }
];

// Materials data
const materialsData = {
    floor: [
        { 
            name: "Steel-Reinforced Concrete (RCC) Floor", 
            category: "Floor Material",
            priority: "Recommended",
            applicableHazards: "Ground shaking, typhoon, flood, ashfall",
            description: "Best overall balance for earthquakes, ash load, and typhoon stability.",
            performance: {
                flood: "Dense concrete resists water exposure; prolonged flooding can promote steel corrosion if reinforcement is poorly covered. Use good cover, proper curing, and waterproofing.",
                "ground-shaking": "Steel reinforcement provides ductility and tensile capacity, reducing brittle cracking and improving seismic performance.",
                ashfall: "High load capacity supports added vertical loads from ash accumulation.",
                typhoon: "Heavy, rigid slab improves stability and resists uplift/lateral vibration when tied into structural frame."
            },
            pros: [
                "Excellent seismic resistance with ductility",
                "Very strong and durable",
                "Fire-resistant and water-resistant",
                "Good load-bearing capacity for ash accumulation",
                "Excellent uplift and lateral force resistance"
            ],
            cons: [
                "Heavy (needs strong foundation)",
                "Higher cost than alternatives",
                "Requires skilled labor and proper detailing",
                "Risk of corrosion if waterproofing is poor"
            ]
        },
        {
            name: "Cement Backer Board Floor",
            category: "Floor Material",
            priority: "Alternative",
            applicableHazards: "Flood, ground shaking, ashfall",
            description: "Non-combustible, water-resistant underlayment. Best used as a layer within a system, not as main structural floor.",
            performance: {
                flood: "Water- and mold-resistant; maintains integrity as a base layer.",
                "ground-shaking": "Stable, rigid base can reduce tile/finish cracking when installed correctly.",
                ashfall: "Non-combustible and abrasion-resistant."
            },
            pros: [
                "Water-resistant and mold-resistant",
                "Non-combustible",
                "Reduces tile/finish cracking",
                "Abrasion-resistant to ash"
            ],
            cons: [
                "Limited structural capacity as standalone floor",
                "Best used as a substrate layer",
                "Depends on underlying structural system"
            ]
        },
        {
            name: "Plain Cement Concrete (PCC) Floor",
            category: "Floor Material",
            priority: "Alternative",
            applicableHazards: "Flood, ground shaking, ashfall",
            description: "Simple and cost-effective; strong in compression but less crack-resistant than RCC.",
            performance: {
                flood: "Dense surface tolerates temporary submersion; cracks may form with prolonged exposure and movement.",
                "ground-shaking": "Can handle moderate shaking if thick and well-cured, but more prone to cracking vs RCC.",
                ashfall: "Non-combustible; can carry ash loads reasonably well."
            },
            pros: [
                "Cost-effective option",
                "Good compression strength",
                "Simple construction",
                "Non-combustible"
            ],
            cons: [
                "More prone to cracking than RCC",
                "Limited tensile strength",
                "Poor seismic performance without reinforcement",
                "Risk of cracks from prolonged flooding"
            ]
        }
    ],
    foundation: [
        { 
            name: "Pile Foundation with Reinforced Concrete", 
            category: "Foundation Type",
            priority: "Recommended",
            applicableHazards: "Flood, ground shaking, soil erosion, drought, ashfall",
            description: "Deep foundation transferring loads to stable soil/rock.",
            performance: {
                flood: "Reduces reliance on flood-weakened surface soils.",
                "ground-shaking": "Helps reduce differential settlement; strong uplift and lateral resistance.",
                "soil-erosion": "Bypasses erodible layers.",
                drought: "Less surface-soil shrink/swell impact.",
                ashfall: "Supports additional vertical loads."
            },
            pros: [
                "Excellent for flood-prone and coastal areas",
                "Minimizes settlement in soft soils",
                "Good earthquake resistance when properly designed",
                "Strong uplift and lateral resistance",
                "Bypasses erodible surface layers",
                "Reduces differential settlement"
            ],
            cons: [
                "High construction cost",
                "Complex construction process",
                "Requires specialized equipment",
                "Needs proper geotechnical investigation"
            ]
        },
        {
            name: "Pier Foundation with Reinforced Concrete",
            category: "Foundation Type",
            priority: "Alternative",
            applicableHazards: "Flood, ground shaking, soil erosion, drought",
            description: "Short vertical supports elevating the structure above flood level.",
            performance: {
                flood: "Elevates living space above water level.",
                "ground-shaking": "Some movement tolerance, but depends on detailing.",
                "soil-erosion": "Less dependence on unstable topsoil.",
                drought: "Reduced cracking from minor soil movement."
            },
            pros: [
                "Excellent flood protection by elevation",
                "Less dependence on unstable topsoil",
                "Reduced impact from soil movement",
                "Lower cost than pile foundations",
                "Allows water drainage underneath"
            ],
            cons: [
                "Typically less robust than piles for extreme seismic/wind demands",
                "Moderate uplift resistance",
                "Requires proper detailing for good performance",
                "Less suitable for very soft soils"
            ]
        },
        {
            name: "Plain Concrete with Stone Aggregate Foundation",
            category: "Foundation Material",
            priority: "Secondary",
            applicableHazards: "Moderate flooding, stable ground",
            description: "Durable and economical under moderate demands.",
            performance: {
                flood: "Tolerates water exposure reasonably well.",
                "ground-shaking": "Limited crack/bending resistance."
            },
            pros: [
                "Cost-effective option",
                "Durable under moderate conditions",
                "Good compression strength"
            ],
            cons: [
                "Lower crack/bending resistance than reinforced concrete",
                "Limited seismic performance",
                "Poor tensile strength",
                "Not recommended for high-hazard areas"
            ]
        }
    ],
    wall: [
        { 
            name: "Reinforced Concrete (RC) Wall System", 
            category: "Wall Structural System",
            priority: "Recommended",
            applicableHazards: "Ground shaking, typhoon, flood, ashfall",
            description: "RC walls with steel reinforcement acting as load-bearing and lateral-force-resisting elements.",
            performance: {
                "ground-shaking": "Effective lateral system; strong stiffness with ductile detailing.",
                typhoon: "Resists high wind pressure and debris impact.",
                flood: "More moisture-tolerant than many lightweight systems.",
                ashfall: "Supports increased loads transferred from roof/walls."
            },
            pros: [
                "Excellent earthquake and wind resistance",
                "Fire-resistant and durable",
                "Strong structural integrity",
                "Good moisture tolerance",
                "Excellent seismic performance with proper detailing",
                "High compressive and tensile strength"
            ],
            cons: [
                "Expensive material and labor costs",
                "Very heavy; requires strong foundation",
                "Poor thermal insulation without additional materials",
                "Requires skilled labor for proper reinforcement"
            ]
        },
        {
            name: "Confined Masonry Wall System",
            category: "Wall Structural System",
            priority: "Alternative",
            applicableHazards: "Ground shaking, typhoon, flood, ashfall",
            description: "Masonry units confined by RC tie columns and tie beams.",
            performance: {
                "ground-shaking": "Improved performance versus unreinforced masonry due to confinement.",
                typhoon: "Handles moderate wind loads when properly tied and anchored.",
                flood: "Durable in wet conditions with good plastering/waterproofing.",
                ashfall: "Can support moderate loads."
            },
            pros: [
                "More economical than full RC walls",
                "Improved seismic performance with confinement",
                "Good wind resistance when properly detailed",
                "Durable in wet conditions",
                "Moderate cost savings"
            ],
            cons: [
                "Generally less ductile than full RC walls",
                "Less robust than full RC in severe earthquakes/typhoons",
                "Requires expert detailing for high-hazard areas",
                "Dependent on proper confinement quality"
            ]
        },
        {
            name: "Concrete Hollow Block (CHB) Wall",
            category: "Wall Material",
            priority: "Secondary",
            applicableHazards: "Moderate earthquake, typhoon",
            description: "Economical and lighter than solid concrete, but needs strong reinforcement.",
            performance: {
                "ground-shaking": "Can work well if properly reinforced, grouted, and anchored.",
                typhoon: "Moderate wind resistance when well-detailed."
            },
            pros: [
                "Economical option",
                "Lighter than solid concrete",
                "Can work with proper reinforcement",
                "Moderate construction speed"
            ],
            cons: [
                "Without strong detailing, can underperform in severe hazards",
                "Requires careful grouting and reinforcement",
                "More prone to cracking than solid RC",
                "Limited capacity in high-seismic zones"
            ]
        }
    ],
    roof: [
        { 
            name: "Hip Roof with Metal Roofing", 
            category: "Roof Structure",
            priority: "Recommended",
            applicableHazards: "Typhoon, ground shaking, ashfall, heavy rain",
            description: "Sloped roof in all directions with strong wind performance, good drainage, and ash shedding.",
            performance: {
                typhoon: "Reduced uplift due to aerodynamic form; performs well under wind from multiple directions.",
                "flood-rain": "Efficient runoff reduces water accumulation.",
                "ground-shaking": "Stable geometry; lower collapse tendency when well-connected.",
                ashfall: "Sloped planes help ash slide off, reducing overload risk."
            },
            pros: [
                "Excellent wind resistance for typhoon-prone areas",
                "Metal roofing sheds ash fall effectively",
                "Proper anchoring provides earthquake resistance",
                "Good water drainage",
                "Aerodynamic form reduces wind uplift",
                "Effective ash shedding from sloped planes"
            ],
            cons: [
                "More expensive than gabled roofs",
                "Metal can be noisy during heavy rain",
                "Requires proper installation to prevent leaks",
                "Complex joint design needs careful detailing"
            ]
        },
        {
            name: "Metal Roofing Material",
            category: "Roofing Material",
            priority: "Recommended",
            applicableHazards: "Typhoon, ashfall, flooding",
            description: "Lightweight, durable metal covering for excellent hazard performance.",
            performance: {
                typhoon: "High wind resistance when screwed/fastened correctly to braced framing.",
                "flood-rain": "Sheds water quickly.",
                ashfall: "Smooth surface sheds ash; coating helps resist acidic ash corrosion.",
                landslide: "Light weight reduces impact mass."
            },
            pros: [
                "High wind resistance when properly fastened",
                "Quick water shedding",
                "Smooth surface for ash runoff",
                "Lightweight (reduces seismic demand)",
                "Long lifespan with proper coating",
                "Corrosion-resistant with appropriate coating"
            ],
            cons: [
                "Noise during heavy rain (mitigated with sound dampening)",
                "Requires proper fastening and bracing",
                "Initial cost moderate to high",
                "Thermal expansion/contraction requires expansion joints"
            ]
        },
        {
            name: "Dutch Gable Roof",
            category: "Roof Structure",
            priority: "Secondary",
            applicableHazards: "Typhoon, ground shaking",
            description: "Provides attic space/light but adds complex joints.",
            performance: {
                "flood-rain": "Good runoff, but seams are more leak-prone.",
                "ground-shaking": "More complexity and some added weight can increase vulnerability.",
                ashfall: "Ridges/joints can collect ash and clog drainage.",
                typhoon: "Good if reinforced, but gable portions can be more wind-sensitive."
            },
            pros: [
                "Provides attic space and additional headroom",
                "Good water runoff when designed well",
                "Architectural flexibility"
            ],
            cons: [
                "Complex joints create leak points",
                "Ash traps at ridges and junctions",
                "Higher maintenance requirements",
                "Gable portions more wind-sensitive",
                "Added weight increases seismic demand"
            ]
        },
        {
            name: "Clay Tile Roofing",
            category: "Roofing Material",
            priority: "Secondary",
            applicableHazards: "Flood, ashfall",
            description: "Heavy, traditional roofing with good water repellency.",
            performance: {
                "flood-rain": "Water-repellent; good runoff.",
                "ground-shaking": "Heavy mass increases seismic forces significantly (main drawback).",
                ashfall: "Non-combustible, cleanable if dry.",
                typhoon: "Only good if every tile is clipped/wired correctly; can become windborne debris."
            },
            pros: [
                "Water-repellent; good runoff",
                "Non-combustible and durable",
                "Cleanable surface",
                "Excellent longevity",
                "Good aesthetic appeal"
            ],
            cons: [
                "Heavy mass significantly increases seismic forces",
                "Can become windborne debris if not perfectly secured",
                "Requires every tile to be clipped/wired in high wind areas",
                "High initial and maintenance cost",
                "Brittle; tiles can crack from earthquakes"
            ]
        }
    ],
    beam: [
        { 
            name: "Reinforced Concrete Beam with Steel Reinforcement", 
            category: "Beam Types",
            priority: "Recommended",
            applicableHazards: "Ground shaking, typhoon, ashfall",
            description: "Structural beams with proper reinforcement detailing for multi-hazard performance.",
            performance: {
                "ground-shaking": "Good seismic performance with proper reinforcement and ductile detailing.",
                typhoon: "Resists lateral forces from wind and provides stability.",
                ashfall: "Transfers roof/wall loads effectively."
            },
            pros: [
                "Excellent load-bearing capacity",
                "Good seismic performance with proper detailing",
                "Fire-resistant",
                "Durable and long-lasting",
                "Can provide both vertical and lateral support",
                "Allows flexible connection design"
            ],
            cons: [
                "Heavy weight increases seismic forces",
                "Complex formwork required",
                "Curing time delays construction",
                "Requires skilled labor for reinforcement"
            ]
        }
    ],
    column: [
        { 
            name: "Circular Reinforced Concrete Column", 
            category: "Column Types",
            priority: "Recommended",
            applicableHazards: "Ground shaking, typhoon, ashfall, ground movement",
            description: "Columns with circular cross-section and confinement reinforcement for optimal multi-hazard performance.",
            performance: {
                "ground-shaking": "No weak axis; performs well under multi-directional shaking.",
                typhoon: "Smoother wind flow reduces localized pressure; even stress distribution.",
                ashfall: "Better confinement supports heavier axial loads.",
                "ground-movement": "Handles irregular lateral pressure more effectively from landslides/settlement."
            },
            pros: [
                "High compressive strength for multi-story buildings",
                "Excellent earthquake resistance when properly confined",
                "Fire-resistant and durable",
                "Uniform strength in all directions",
                "Better confinement behavior than rectangular",
                "Handles multi-directional seismic motion well",
                "Smoother wind flow reduces local pressures",
                "Can support heavier axial loads from ash accumulation"
            ],
            cons: [
                "Slightly more complex formwork than rectangular",
                "Requires proper confinement reinforcement detailing",
                "Difficult to modify after construction",
                "Heavier weight increases earthquake inertia"
            ]
        },
        {
            name: "Stilt Column (Elevated Support)",
            category: "Column Types",
            priority: "Secondary",
            applicableHazards: "Flood",
            description: "Vertical supports elevating structure above flood level.",
            performance: {
                flood: "Great for floods by elevating living space.",
                "ground-shaking": "Needs strong bracing/anchorage for wind and quakes.",
                typhoon: "Requires robust connections and lateral bracing."
            },
            pros: [
                "Excellent flood protection through elevation",
                "Allows water flow underneath",
                "Keeps living areas away from water/debris",
                "Reduced flood damage to building"
            ],
            cons: [
                "Great for floods but needs strong bracing/anchorage for wind and quakes",
                "Requires robust lateral bracing system",
                "More complex connections needed",
                "Limited effectiveness without proper seismic detailing",
                "Must be carefully designed for high wind areas"
            ]
        },
        {
            name: "Rectangular Reinforced Concrete Column",
            category: "Column Types",
            priority: "Alternative",
            applicableHazards: "Ground shaking, typhoon",
            description: "Standard rectangular columns with steel reinforcement.",
            performance: {
                "ground-shaking": "Has strong and weak axes; requires good reinforcement.",
                typhoon: "Good performance if properly sized and detailed."
            },
            pros: [
                "Standard design with well-established practices",
                "Good load-bearing capacity",
                "Easier formwork in some cases",
                "Flexible integration with beam systems"
            ],
            cons: [
                "Has weak and strong axes; can cause irregular response",
                "Requires careful orientation for bidirectional motion",
                "Less efficient confinement than circular sections",
                "May require larger sections for equivalent performance"
            ]
        }
    ]
};

// Application state
let currentStep = 1;
const totalSteps = 3;

// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const pageTransition = document.getElementById('page-transition');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const mobileNavMenu = document.getElementById('mobile-nav-menu');

// Page references
const pages = {
    home: document.getElementById('home-page'),
    location: document.getElementById('location-page'),
    results: document.getElementById('results-page'),
    article: document.getElementById('article-detail-page')
};

// Initialize application
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);
    }, 500);
    
    renderBarangayList();
    renderHazards();
    renderAreaStats();
    renderDirectory();
    setupEventListeners();
});

// Team member details function
function showTeamDetails(teamType) {
    const teamDetails = {
        'layout-design': {
            title: 'Layout and Design Experts',
            members: 3,
            description: 'UI/UX designers, graphic artists, and layout specialists responsible for the visual design and user experience of the application.',
            skills: ['UI/UX Design', 'Graphic Design', 'Layout Design', 'User Experience', 'Visual Design']
        },
        'programming': {
            title: 'Programming Team',
            members: 3,
            description: 'Frontend and backend developers who built the application and maintain its technical infrastructure.',
            skills: ['JavaScript', 'HTML/CSS', 'Frontend Development', 'Backend Development', 'Database Management']
        },
        'information': {
            title: 'Information Experts',
            members: 5,
            description: 'Content creators, researchers, and documentation specialists who provide accurate information and educational materials.',
            skills: ['Content Writing', 'Research', 'Documentation', 'Educational Content', 'Information Management']
        },
        'data': {
            title: 'Data Experts',
            members: 5,
            description: 'Data analysts and statisticians who manage hazard data, barangay information, and statistical analysis.',
            skills: ['Data Analysis', 'Statistics', 'Hazard Mapping', 'Data Management', 'Geographic Information Systems']
        },
        'engineering': {
            title: 'Engineering & Architecture Experts',
            members: 5,
            description: 'Structural engineers, architects, and construction specialists who provide technical expertise on building materials and methods.',
            skills: ['Structural Engineering', 'Architecture', 'Construction Management', 'Building Codes', 'Material Science']
        },
        'navigators': {
            title: 'Navigators',
            members: 14,
            description: 'Community leaders, local guides, and field coordinators who help navigate local areas and coordinate with communities.',
            skills: ['Community Coordination', 'Local Knowledge', 'Field Navigation', 'Community Outreach', 'Local Government Liaison']
        }
    };

    const team = teamDetails[teamType];
    if (team) {
        const message = `
${team.title}
Team Size: ${team.members} members

${team.description}

Key Skills:
${team.skills.map(skill => `• ${skill}`).join('\n')}
        `;
        
        alert(message);
    }
}

// Event listeners setup
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
}

// Material details functions
function showMaterialDetails(materialType) {
    // Remove active class from all tabs
    document.querySelectorAll('.material-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    const clickedTab = document.querySelector(`.material-tab[onclick="showMaterialDetails('${materialType}')"]`);
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
    
    // Hide all material details
    document.querySelectorAll('.materials-details').forEach(details => {
        details.classList.remove('active');
    });
    
    // Show selected material details
    const materialDetails = document.getElementById(`${materialType}-details`);
    if (materialDetails) {
        materialDetails.classList.add('active');
        updateMaterialDetails(materialType);
    }
    
    // Scroll to details if on mobile
    if (window.innerWidth < 768) {
        materialDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function updateMaterialDetails(materialType) {
    const materials = materialsData[materialType];
    if (!materials || materials.length === 0) return;
    
    // Show the first (recommended) material
    const recommendedMaterial = materials[0];
    
    // Update hazards list
    const hazardsList = document.getElementById(`${materialType}-hazards-list`);
    if (hazardsList) {
        hazardsList.textContent = recommendedMaterial.applicableHazards;
    }
    
    // Update pros list
    const prosList = document.getElementById(`${materialType}-pros-list`);
    if (prosList) {
        prosList.innerHTML = recommendedMaterial.pros.map(pro => `<li>${pro}</li>`).join('');
    }
    
    // Update cons list
    const consList = document.getElementById(`${materialType}-cons-list`);
    if (consList) {
        consList.innerHTML = recommendedMaterial.cons.map(con => `<li>${con}</li>`).join('');
    }
    
    // Update title
    const titleElement = document.querySelector(`#${materialType}-details .material-title-large`);
    if (titleElement) {
        // Get icon based on material type
        const icons = {
            'floor': '🏗️',
            'floor_system': '🏗️',
            'foundation': '🏢',
            'wall': '🧱',
            'roof': '🏠',
            'beam': '📏',
            'tie-beam': '📏',
            'lintel-beam': '📏',
            'column': '🏛️'
        };
        const icon = icons[materialType] || '📦';
        titleElement.innerHTML = `${icon} ${recommendedMaterial.name}`;
    }

    // Display alternatives if they exist
    const alternativesContainer = document.getElementById(`${materialType}-alternatives`);
    if (alternativesContainer) {
        const alternatives = materials.slice(1); // Get all alternatives (everything after the first)
        
        if (alternatives.length > 0) {
            alternativesContainer.style.display = 'block';
            const alternativesHTML = alternatives.map((alt, index) => `
                <div class="alternative-option">
                    <div class="alternative-icon">⚡</div>
                    <div class="alternative-details">
                        <div class="alternative-name">Alternative ${index + 1}: ${alt.name}</div>
                        <div class="alternative-description">${alt.description}</div>
                        <div class="alternative-pros-cons">
                            <div class="alt-pros"><strong>Pros:</strong> ${alt.pros.slice(0, 2).join('; ')}</div>
                            <div class="alt-cons"><strong>Cons:</strong> ${alt.cons.slice(0, 2).join('; ')}</div>
                        </div>
                    </div>
                </div>
            `).join('');
            alternativesContainer.innerHTML = `
                <div class="alternatives-header">
                    <h4>Alternative Options</h4>
                </div>
                ${alternativesHTML}
            `;
        } else {
            alternativesContainer.style.display = 'none';
        }
    }
}

// Statistics and rendering functions
function renderAreaStats() {
    const container = document.getElementById('area-stats-grid');
    if (!container) return;
    
    // Fixed area counts as specified
    const areaCounts = {
        coastal: 12,
        rural: 28,
        urban: 6,
        upland: 26
    };
    
    // Get sample barangays for each area type
    const sampleBarangays = {
        coastal: ["Rizal", "Buenavista", "Balud Del Norte", "Ogao"],
        rural: ["Bulacao", "Naagtan", "Beriran", "Carriedo"],
        urban: ["Cota Na Daco", "Luna-Candol", "Manook", "Paradijon"],
        upland: ["Benguet", "Tagaytay", "Togawe", "Tiris"]
    };
    
    // Area type details
    const areaTypes = [
        {
            type: "coastal",
            icon: "🌊",
            name: "Coastal Areas",
            count: areaCounts.coastal,
            description: "Near coastline with saltwater exposure",
            sample: sampleBarangays.coastal.join(", ")
        },
        {
            type: "rural",
            icon: "🌾",
            name: "Rural Areas",
            count: areaCounts.rural,
            description: "Agricultural and residential areas",
            sample: sampleBarangays.rural.join(", ")
        },
        {
            type: "urban",
            icon: "🏙️",
            name: "Urban Areas",
            count: areaCounts.urban,
            description: "Densely populated commercial areas",
            sample: sampleBarangays.urban.join(", ")
        },
        {
            type: "upland",
            icon: "⛰️",
            name: "Upland Areas",
            count: areaCounts.upland,
            description: "Elevated areas with sloping terrain",
            sample: sampleBarangays.upland.join(", ")
        }
    ];
    
    container.innerHTML = areaTypes.map(area => `
        <div class="area-stat-card">
            <div class="area-stat-icon">${area.icon}</div>
            <div class="area-stat-value">${area.count}</div>
            <div class="area-stat-label">${area.name}</div>
            <div style="color: var(--text-muted); font-size: 0.85em; margin-top: 5px;">${area.description}</div>
            <div class="area-stat-barangays">Sample: ${area.sample}</div>
        </div>
    `).join('');
}

function renderDirectory() {
    const container = document.getElementById('directory-results');
    if (!container) return;
    
    container.innerHTML = allBarangays.map(barangay => {
        const typeBadges = barangay.types.map(type => {
            const typeNames = {
                'coastal': 'Coastal',
                'rural': 'Rural',
                'urban': 'Urban',
                'upland': 'Upland'
            };
            return `<span class="type-badge ${type}">${typeNames[type]}</span>`;
        }).join('');
        
        const hazardIcons = barangay.hazards.map(hazard => {
            const hazardInfo = hazardData.find(h => h.id === hazard);
            return hazardInfo ? hazardInfo.icon : '';
        }).join(' ');
        
        return `
            <div class="directory-item">
                <div class="directory-item-name">${barangay.name}</div>
                <div class="directory-item-types">
                    ${typeBadges}
                </div>
                <div style="color: var(--text-muted); font-size: 0.9em; margin: 10px 0; line-height: 1.5;">
                    ${barangay.description}
                </div>
                <div class="directory-item-hazards">
                    ${barangay.hazards.map(hazard => {
                        const hazardInfo = hazardData.find(h => h.id === hazard);
                        return `<span class="hazard-tag">${hazardInfo ? hazardInfo.name : hazard}</span>`;
                    }).join('')}
                </div>
                <div style="margin-top: 10px; color: var(--accent-color); font-size: 1em;">
                    ${hazardIcons}
                </div>
            </div>
        `;
    }).join('');
}

function searchDirectory() {
    const searchInput = document.getElementById('directory-search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('.directory-item');
    
    let hasResults = false;
    
    items.forEach(item => {
        const barangayName = item.querySelector('.directory-item-name').textContent.toLowerCase();
        const barangayTypes = item.querySelector('.directory-item-types').textContent.toLowerCase();
        
        if (barangayName.includes(searchTerm) || barangayTypes.includes(searchTerm) || searchTerm === '') {
            item.style.display = 'block';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });
    
    // Show message if no results
    const container = document.getElementById('directory-results');
    let emptyMessage = container.querySelector('.directory-empty');
    
    if (!hasResults && searchTerm !== '') {
        if (!emptyMessage) {
            emptyMessage = document.createElement('div');
            emptyMessage.className = 'directory-empty';
            emptyMessage.innerHTML = `
                <div style="font-size: 3em; color: var(--accent-color); margin-bottom: 15px;">🔍</div>
                <h3 style="color: var(--highlight); margin-bottom: 10px;">No barangays found</h3>
                <p>Try searching with a different name or browse all barangays by clearing the search.</p>
            `;
            container.appendChild(emptyMessage);
        }
    } else if (emptyMessage) {
        emptyMessage.remove();
    }
}

// Navigation functions
function toggleMobileMenu() {
    mobileNavMenu.classList.toggle('active');
}

function closeMobileMenu() {
    mobileNavMenu.classList.remove('active');
}

function goToPage(pageName) {
    closeMobileMenu();
    triggerPageTransition(() => {
        Object.values(pages).forEach(page => {
            page.classList.remove('active');
        });
        
        pages[pageName].classList.add('active');
        
        if (pageName === 'location') {
            resetSteps();
        }
        
        if (pageName === 'results') {
            // Initialize the first material details
            setTimeout(() => {
                updateMaterialDetails('floor');
            }, 100);
        }
        
        window.scrollTo(0, 0);
    });
}

// Scroll to About section on home page
function scrollToAbout() {
    closeMobileMenu();
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
        aboutSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function startBuildingGuide() {
    goToPage('location');
}

function triggerPageTransition(callback) {
    pageTransition.classList.remove('reverse');
    pageTransition.classList.add('active');
    
    setTimeout(() => {
        if (callback) callback();
        
        setTimeout(() => {
            pageTransition.classList.remove('active');
            pageTransition.classList.add('reverse');
            
            setTimeout(() => {
                pageTransition.classList.remove('reverse');
            }, 800);
        }, 300);
    }, 400);
}

// Area selection functions
function showAreaDetails(areaType) {
    // Remove active class from all tabs
    document.querySelectorAll('.area-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    const clickedTab = document.querySelector(`.area-tab[onclick="showAreaDetails('${areaType}')"]`);
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
    
    // Hide all area details
    document.querySelectorAll('.area-details').forEach(details => {
        details.classList.remove('active');
    });
    
    // Show selected area details
    const areaDetails = document.getElementById(`${areaType}-details`);
    if (areaDetails) {
        areaDetails.classList.add('active');
    }
    
    // Scroll to details if on mobile
    if (window.innerWidth < 768) {
        areaDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function selectArea(areaType) {
    userSelections.area = areaType;
    userSelections.barangay = null; // Reset barangay when area changes
    
    // Update tab styling to show selection
    document.querySelectorAll('.area-tab').forEach(tab => {
        tab.classList.remove('selected');
        const indicator = tab.querySelector('.selected-indicator');
        if (indicator) {
            indicator.remove();
        }
    });
    
    const selectedTab = document.querySelector(`.area-tab[onclick="showAreaDetails('${areaType}')"]`);
    if (selectedTab) {
        selectedTab.classList.add('selected');
        
        // Add a checkmark indicator
        const indicator = document.createElement('div');
        indicator.className = 'selected-indicator';
        indicator.innerHTML = '✓';
        selectedTab.style.position = 'relative';
        selectedTab.appendChild(indicator);
    }
    
    // Filter barangays for this area
    filterBarangaysByArea(areaType);
    
    // Show success message
    const selectBtn = event.target;
    const originalText = selectBtn.textContent;
    selectBtn.textContent = '✓ SELECTED!';
    selectBtn.style.background = 'linear-gradient(135deg, var(--success), #66bb6a)';
    selectBtn.disabled = true;
    
    setTimeout(() => {
        selectBtn.textContent = originalText;
        selectBtn.style.background = 'linear-gradient(135deg, var(--accent-color), var(--accent-light))';
        selectBtn.disabled = false;
    }, 1500);
    
    // Remove auto-proceed - let user click Next button
    // Enable next button if validation passes
    if (validateStep(1)) {
        // User must manually click Next button now
        // setTimeout(() => {
        //     nextStep();
        // }, 800);
    }
}

function filterBarangaysByArea(areaType) {
    const filteredBarangays = allBarangays.filter(barangay => 
        barangay.types.includes(areaType)
    );
    
    renderBarangayList(filteredBarangays);
}

// Step management functions
function nextStep() {
    if (currentStep >= totalSteps) {
        showResults();
        return;
    }
    
    if (!validateStep(currentStep)) {
        return;
    }
    
    currentStep++;
    updateStepDisplay();
}

function prevStep() {
    if (currentStep <= 1) return;
    
    currentStep--;
    updateStepDisplay();
}

function resetSteps() {
    currentStep = 1;
    userSelections.area = null;
    userSelections.barangay = null;
    userSelections.hazards = [];
    
    // Reset area selection
    document.querySelectorAll('.area-tab').forEach(tab => {
        tab.classList.remove('selected', 'active');
        const indicator = tab.querySelector('.selected-indicator');
        if (indicator) {
            indicator.remove();
        }
    });
    
    // Reset barangay selection
    document.querySelectorAll('.barangay-result-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    document.getElementById('selected-barangay').classList.remove('active');
    
    // Reset area tabs to show coastal by default
    document.querySelector('.area-tab[onclick="showAreaDetails(\'coastal\')"]').classList.add('active');
    document.querySelectorAll('.area-details').forEach(details => {
        details.classList.remove('active');
    });
    document.getElementById('coastal-details').classList.add('active');
    
    updateStepDisplay();
    renderBarangayList();
}

function validateStep(step) {
    switch(step) {
        case 1:
            if (!userSelections.area) {
                alert('Please select an area type first');
                return false;
            }
            return true;
        case 2:
            if (!userSelections.barangay) {
                alert('Please select a barangay first');
                return false;
            }
            return true;
        default:
            return true;
    }
}

function updateStepDisplay() {
    const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;
    document.getElementById('progress-line').style.width = `${progressWidth}%`;
    
    for (let i = 1; i <= totalSteps; i++) {
        const step = document.getElementById(`step-${i}`);
        step.classList.remove('active', 'completed');
        
        if (i < currentStep) {
            step.classList.add('completed');
        } else if (i === currentStep) {
            step.classList.add('active');
        }
    }
    
    // Show/hide step containers - only steps 1 and 2 exist
    document.getElementById('step1-container').style.display = currentStep === 1 ? 'block' : 'none';
    document.getElementById('step2-container').style.display = currentStep === 2 ? 'block' : 'none';
    
    document.getElementById('prev-btn').disabled = currentStep === 1;
    
    if (currentStep === totalSteps) {
        document.getElementById('next-btn').textContent = 'VIEW RESULTS →';
    } else {
        document.getElementById('next-btn').textContent = 'NEXT →';
    }
    
    window.scrollTo(0, pages.location.offsetTop + 200);
}

// Barangay selection functions
function renderBarangayList(filteredBarangays = null) {
    const container = document.getElementById('barangay-results');
    const barangaysToDisplay = filteredBarangays || allBarangays;
    
    container.innerHTML = '';
    
    barangaysToDisplay.forEach(barangay => {
        const item = document.createElement('div');
        item.className = 'barangay-result-item';
        item.dataset.barangay = barangay.name;
        item.dataset.types = barangay.types.join(',');
        
        const hazardIcons = barangay.hazards.map(hazard => {
            const hazardInfo = hazardData.find(h => h.id === hazard);
            return hazardInfo ? hazardInfo.icon : '';
        }).join(' ');
        
        item.innerHTML = `
            <div class="barangay-name">${barangay.name}</div>
            <div class="barangay-type">${barangay.types.join(', ').toUpperCase()}</div>
            <div style="color: var(--text-muted); font-size: 0.9em; margin: 10px 0; line-height: 1.5;">
                ${barangay.description}
            </div>
            <div class="barangay-hazards">
                ${barangay.hazards.map(hazard => {
                    const hazardInfo = hazardData.find(h => h.id === hazard);
                    return `<span class="hazard-tag">${hazardInfo ? hazardInfo.name : hazard}</span>`;
                }).join('')}
            </div>
            <div style="margin-top: 10px; color: var(--accent-color); font-size: 1em;">
                ${hazardIcons}
            </div>
        `;
        
        item.addEventListener('click', () => selectBarangay(barangay));
        container.appendChild(item);
    });
}

function searchBarangays() {
    const searchInput = document.getElementById('barangay-search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('.barangay-result-item');
    
    items.forEach(item => {
        const barangayName = item.dataset.barangay.toLowerCase();
        if (barangayName.includes(searchTerm) || searchTerm === '') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function selectBarangay(barangay) {
    document.querySelectorAll('.barangay-result-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    const selectedItem = document.querySelector(`.barangay-result-item[data-barangay="${barangay.name}"]`);
    if (selectedItem) {
        selectedItem.classList.add('selected');
    }
    
    userSelections.barangay = barangay;
    
    // Set specific hazards for each barangay
    if (barangay.name === "Ariman") {
        userSelections.hazards = ["flood", "storm-surge", "sea-level-rise", "ground-shaking", "tsunami", "ashfall", "typhoon"];
    } else if (barangay.name === "Benguet") {
        userSelections.hazards = ["flood", "rain-landslide", "ground-shaking", "ashfall", "typhoon"];
    } else if (barangay.name === "Bentuco") {
        userSelections.hazards = ["rain-landslide", "earthquake-landslide", "flood", "ground-shaking", "ashfall", "typhoon", "soil-erosion", "drought"];
    } else if (barangay.name === "Bagacay") {
        userSelections.hazards = ["flood", "storm-surge", "sea-level-rise", "ground-shaking", "tsunami", "ashfall", "typhoon"];
    } else if (barangay.name === "Balud Del Norte (Poblacion)") {
        userSelections.hazards = ["flood", "storm-surge", "sea-level-rise", "ground-shaking", "tsunami", "ashfall", "typhoon"];
    } else {
        userSelections.hazards = barangay.hazards || [];
    }
    
    document.getElementById('selected-barangay-name').textContent = barangay.name;
    document.getElementById('selected-barangay-desc').textContent = `${barangay.description} | Types: ${barangay.types.join(', ')}`;
    document.getElementById('selected-barangay').classList.add('active');
    
    selectedItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove auto-proceed - let user click Next button
    // setTimeout(() => {
    //     showResults();
    // }, 1000);
}

// Hazard selection functions
function renderHazards() {
    // Since we removed the hazard selection step, this function is no longer needed
    // Keeping it for reference but not executing the grid rendering
    return;
}

function toggleHazard(hazardId) {
    // Since we removed the hazard selection step, this function is no longer needed
    // Keeping it for reference but not executing
    return;
}

function selectCommonHazards() {
    // Since we removed the hazard selection step, this function is no longer needed
    // Keeping it for reference but not executing
    return;
}

// Results function
function showResults() {
    const subtitle = document.getElementById('results-subtitle');
    if (userSelections.barangay) {
        // Get hazard names
        const hazardNames = userSelections.hazards.map(hazardId => {
            const hazard = hazardData.find(h => h.id === hazardId);
            return hazard ? hazard.name : hazardId;
        }).join(', ');
        
        let additionalInfo = '';
        if (userSelections.barangay.name === "Ariman") {
            additionalInfo = `
                <div style="margin-top: 15px; padding: 20px; background: rgba(229, 196, 138, 0.1); border-radius: 8px; border-left: 4px solid var(--highlight);">
                    <h4 style="color: var(--highlight); margin-bottom: 15px;">🏗️ Ariman Specific Recommendations:</h4>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🧱 Walls</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Full reinforced concrete wall system<br>
                            <em style="color: #888; font-size: 0.85rem;">Water- and impact-resistant; ductile in earthquakes; best tsunami survivability; strong roof anchorage</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Confined masonry (CHB + RC tie columns/beams)<br>
                            <em style="color: #888; font-size: 0.85rem;">Better than unreinforced masonry; good for floods, earthquakes, typhoons</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏗️ Foundation</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Reinforced concrete pile foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Deep anchorage reduces scour; improves soft-soil performance; supports elevation for surge/SLR</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Precast concrete foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Strong but depends on transport/installation and joint quality</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏠 Roofing</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Metal roofing with hip roof structure<br>
                            <em style="color: #888; font-size: 0.85rem;">Lightweight for quakes; corrosion-resistant; best wind resistance; good drainage</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Concrete slab roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Very strong for wind/water/fire/ash but heavy and costly</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏛️ Columns</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> RCC columns with proper seismic detailing<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable and strong for water hazards, quakes, ash loads, and typhoon winds</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Composite columns (steel + concrete)<br>
                            <em style="color: #888; font-size: 0.85rem;">Combines ductility + stiffness; good multi-hazard option if corrosion is controlled</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🔧 Beams</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Composite beams (steel + concrete)<br>
                            <em style="color: #888; font-size: 0.85rem;">Ductility + strength under quake/wind/wave forces; needs corrosion protection</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> RCC beams<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable and water/fire resistant, but heavier; requires proper seismic detailing</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 10px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏢 Floors</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Steel-reinforced concrete floor slab<br>
                            <em style="color: #888; font-size: 0.85rem;">Flood-tolerant, ductile in earthquakes, strong for ash loads, resists uplift</em>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255, 152, 0, 0.1); border-radius: 5px; font-size: 0.85rem;">
                        <strong style="color: #FF9800;">💡 Note:</strong> Alternatives may be suitable based on budget, availability, or specific site conditions. Consult with local engineers for final recommendations.
                    </div>
                </div>
            `;
        } else if (userSelections.barangay.name === "Benguet") {
            additionalInfo = `
                <div style="margin-top: 15px; padding: 20px; background: rgba(229, 196, 138, 0.1); border-radius: 8px; border-left: 4px solid var(--highlight);">
                    <h4 style="color: var(--highlight); margin-bottom: 15px;">🏔️ Benguet Specific Recommendations:</h4>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🧱 Walls</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Full Reinforced Concrete Wall System (RCW)<br>
                            <em style="color: #888; font-size: 0.85rem;">Resists flooding, landslide forces, earthquakes (ductility), typhoons, and ash loads</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Fiber cement board (non-structural)<br>
                            <em style="color: #888; font-size: 0.85rem;">Lightweight for interior/upper walls; must be properly framed for wind/earthquakes</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏗️ Foundation</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Pile foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Best for unstable soils; anchors to stable strata; reduces settlement in quakes</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Pier foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Elevates house for floods; reduces soil disturbance on slopes</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏠 Roofing</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Metal roofing with hip roof structure<br>
                            <em style="color: #888; font-size: 0.85rem;">Lightweight for quakes; wind-resistant; sheds rain/ash; coated for corrosion</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Clay tiles<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable but heavy for earthquakes; risky in typhoons unless mechanically secured</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏛️ Columns</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Composite column (steel + concrete)<br>
                            <em style="color: #888; font-size: 0.85rem;">Best strength/ductility balance for quakes and wind; protects steel from corrosion</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Circular RC column<br>
                            <em style="color: #888; font-size: 0.85rem;">Cost-effective; uniform strength in all directions; good for quake + wind</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🔧 Beams</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Composite beams (steel + concrete)<br>
                            <em style="color: #888; font-size: 0.85rem;">Very good seismic/diaphragm performance; handles lateral forces well</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Standard RC beams<br>
                            <em style="color: #888; font-size: 0.85rem;">Good performance but less ductile than composite options</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 10px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏢 Floors</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Suspended/raised floor<br>
                            <em style="color: #888; font-size: 0.85rem;">Flood protection by elevating living space; good in quakes/typhoons if engineered</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Steel-reinforced concrete slab<br>
                            <em style="color: #888; font-size: 0.85rem;">Water-resistant, ductile, non-combustible; heavy enough to resist wind uplift</em>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255, 152, 0, 0.1); border-radius: 5px; font-size: 0.85rem;">
                        <strong style="color: #FF9800;">💡 Note:</strong> Benguet's upland terrain requires special attention to slope stability and foundation design. Consult with geotechnical engineers for site-specific recommendations.
                    </div>
                </div>
            `;
        } else if (userSelections.barangay.name === "Bentuco") {
            additionalInfo = `
                <div style="margin-top: 15px; padding: 20px; background: rgba(229, 196, 138, 0.1); border-radius: 8px; border-left: 4px solid var(--highlight);">
                    <h4 style="color: var(--highlight); margin-bottom: 15px;">⛰️ BENTUCO - Multi-Hazard-Resilient Building System</h4>
                    
                    <div style="margin-bottom: 15px; padding: 10px; background: rgba(100, 149, 237, 0.1); border-radius: 5px; border-left: 3px solid #6495ED;">
                        <strong style="color: #6495ED;">📋 Design Approach:</strong>
                        <ul style="font-size: 0.9rem; margin: 8px 0 0 20px; color: #888;">
                            <li>Stay anchored (typhoon uplift + shaking) using robust foundation and continuous load path</li>
                            <li>Stay stiff and ductile (RC with proper reinforcement detailing) for earthquakes</li>
                            <li>Stay elevated or water-tolerant (flooding) with corrosion protection</li>
                            <li>Keep roof light and well-fastened (earthquake + typhoon) while shedding rain and ash</li>
                            <li>Avoid weak links at openings (lintels) and between members (tie beams, proper connectors)</li>
                        </ul>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏗️ Floors</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Recommended:</strong> Steel-Reinforced Concrete (RCC) Floor<br>
                            <em style="color: #888; font-size: 0.85rem;">Best overall balance for earthquakes, ash load, and typhoon stability. Dense concrete resists water; reinforcement provides seismic ductility; supports ash accumulation; resists uplift when tied into frame.</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 1:</strong> Cement Backer Board Floor<br>
                            <em style="color: #888; font-size: 0.85rem;">Non-combustible, water-resistant underlayment. Best used as substrate layer, not main structural floor.</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 2:</strong> Plain Cement Concrete (PCC)<br>
                            <em style="color: #888; font-size: 0.85rem;">Cost-effective but less crack-resistant than RCC. Good compression strength for moderate conditions.</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🧱 Walls</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Recommended:</strong> Reinforced Concrete (RC) Wall System<br>
                            <em style="color: #888; font-size: 0.85rem;">Effective lateral system for ground shaking; resists high wind pressure and debris impact; moisture-tolerant for floods; supports increased loads from ash.</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Confined Masonry Wall System<br>
                            <em style="color: #888; font-size: 0.85rem;">Masonry units confined by RC tie columns and beams. Improved seismic performance vs. unreinforced. Generally less ductile than full RC walls.</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏠 Roof</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Recommended:</strong> Hip Roof with Metal Roofing<br>
                            <em style="color: #888; font-size: 0.85rem;">Strong all-direction wind performance. Efficient runoff reduces water accumulation. Sloped planes help ash slide off. Aerodynamic form reduces uplift. Lightweight reduces earthquake forces.</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 1:</strong> Dutch Gable Roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Provides attic space but complex joints are leak-prone and ash-traps. More complexity adds weight and vulnerability.</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 2:</strong> Metal Roofing Material<br>
                            <em style="color: #888; font-size: 0.85rem;">Lightweight with high wind resistance when properly fastened. Smooth surface sheds ash; coating resists acidic corrosion.</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏢 Foundation</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Recommended:</strong> Pile Foundation with Reinforced Concrete<br>
                            <em style="color: #888; font-size: 0.85rem;">Deep foundation reduces reliance on flood-weakened surface soils. Bypasses erodible layers. Reduces differential settlement in earthquakes. Strong uplift resistance. Supports additional ash loads.</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Pier Foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Elevates structure above flood level. Less dependence on unstable topsoil. Moderate uplift resistance (less than piles). Good for flood protection.</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏛️ Columns</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Recommended:</strong> Circular Reinforced Concrete Column<br>
                            <em style="color: #888; font-size: 0.85rem;">Uniform strength in all directions. No weak axis; performs well under multi-directional shaking. Smoother wind flow reduces localized pressure. Better confinement for heavier ash loads.</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 1:</strong> Stilt Column (Elevated Support)<br>
                            <em style="color: #888; font-size: 0.85rem;">Great for floods by elevating structure. Requires strong bracing/anchorage for wind and quakes.</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 2:</strong> Rectangular Reinforced Concrete Column<br>
                            <em style="color: #888; font-size: 0.85rem;">Standard design. Has strong and weak axes; requires careful orientation for bidirectional motion.</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🔧 Critical Structural Members</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Recommended:</strong> Reinforced Concrete Tie Beams<br>
                            <em style="color: #888; font-size: 0.85rem;">Connects columns to improve overall integrity. Reduces column spreading in earthquakes. Prevents frame separation. Distributes roof/ash loads. Increases stiffness against wind.</em><br>
                            <strong style="color: #FF9800;">⚡ Secondary but Important:</strong> Reinforced Concrete Lintel Beams<br>
                            <em style="color: #888; font-size: 0.85rem;">Supports wall loads over doors/windows. Prevents collapse above openings. Transfers loads around weak opening areas. Maintains structural continuity.</em>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255, 152, 0, 0.1); border-radius: 5px; font-size: 0.85rem;">
                        <strong style="color: #FF9800;">⚠️ Important Note:</strong> This is a conceptual design/selection document. Final sizing, reinforcement, connections, and detailing must be done by a licensed civil/structural engineer following applicable building codes and local regulations.
                    </div>
                </div>
            `;
        } else if (userSelections.barangay.name === "Bagacay") {
            additionalInfo = `
                <div style="margin-top: 15px; padding: 20px; background: rgba(229, 196, 138, 0.1); border-radius: 8px; border-left: 4px solid var(--highlight);">
                    <h4 style="color: var(--highlight); margin-bottom: 15px;">🌊 Bagacay Specific Recommendations:</h4>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🧱 Walls</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Full reinforced concrete wall system<br>
                            <em style="color: #888; font-size: 0.85rem;">Water/debris resistant for flood-surge-SLR; ductile in earthquakes; best tsunami survival; strong for typhoons/ash</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Confined masonry (CHB + RC tie columns/beams)<br>
                            <em style="color: #888; font-size: 0.85rem;">Flood-durable, improved seismic behavior; good roof anchorage and ash-load capacity</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏗️ Foundation</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Reinforced concrete pile foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Deep anchorage reduces scour/erosion; improves quake performance; supports elevation for surge/SLR</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Precast concrete foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Strong but joint/installation quality critical for earthquake performance</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏠 Roofing</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Metal roofing with hip roof structure<br>
                            <em style="color: #888; font-size: 0.85rem;">Lightweight for earthquakes; corrosion-resistant; good typhoon performance; sheds ash well</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Concrete slab roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Very strong for flood/wind/fire/ash but heavy and costly; needs full engineering</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏛️ Columns</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> RCC columns with proper detailing<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable and strong for water hazards, typhoon loads, and ash weight; avoids brittle quake failure</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Composite steel + concrete columns<br>
                            <em style="color: #888; font-size: 0.85rem;">Combines concrete stiffness with steel ductility for water + seismic demands</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🔧 Beams</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Composite beams (steel + concrete)<br>
                            <em style="color: #888; font-size: 0.85rem;">Best all-around for ductility (earthquakes), wind (typhoons), wave/impact (surge/tsunami), heavy ash loads</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> RCC beams<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable and water/fire resistant but heavier; requires good seismic detailing</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 10px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏢 Floors</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Steel-reinforced concrete slab<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable when submerged, ductile in quakes, resists uplift, supports ash loads</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Hollow core slab<br>
                            <em style="color: #888; font-size: 0.85rem;">Lighter and durable, but performance depends heavily on connection detailing</em>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255, 152, 0, 0.1); border-radius: 5px; font-size: 0.85rem;">
                        <strong style="color: #FF9800;">💡 Note:</strong> Bagacay's mixed coastal-rural-upland terrain requires comprehensive multi-hazard planning. Consider elevation strategies for flood/tsunami protection while ensuring slope stability.
                    </div>
                </div>
            `;
        } else if (userSelections.barangay.name === "Balud Del Norte (Poblacion)") {
            additionalInfo = `
                <div style="margin-top: 15px; padding: 20px; background: rgba(229, 196, 138, 0.1); border-radius: 8px; border-left: 4px solid var(--highlight);">
                    <h4 style="color: var(--highlight); margin-bottom: 15px;">🏖️ Balud Del Norte Specific Recommendations:</h4>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🧱 Walls</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Full reinforced concrete wall system<br>
                            <em style="color: #888; font-size: 0.85rem;">Water/debris-impact resistant for flood-surge-SLR; ductile in earthquakes; best tsunami survival; strong roof anchorage for typhoons</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Confined masonry (CHB + RC tie columns/beams)<br>
                            <em style="color: #888; font-size: 0.85rem;">Flood-durable, better seismic performance; good wind/debris resistance, supports ash loads</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏗️ Foundation</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Reinforced concrete pile foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Deep support reduces scour/erosion; improves earthquake performance; allows elevation for surge/SLR</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Raft/mat foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Good load distribution on weak soil; must be elevated/drained to be flood-safe</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏠 Roofing</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Metal roofing with hip roof structure<br>
                            <em style="color: #888; font-size: 0.85rem;">Corrosion-resistant when coated; lightweight for earthquakes; highly wind-resistant; reduces ash buildup</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Concrete slab roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Very strong but heavy; requires full engineering for earthquake safety</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏛️ Columns</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> RCC columns with proper seismic detailing<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable in wet/saline exposure; better seismic behavior; strong anchorage against typhoon uplift</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Stilt columns (RC/steel)<br>
                            <em style="color: #888; font-size: 0.85rem;">Excellent elevation; needs strong wind bracing; avoid wood for durability/fire risk</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🔧 Beams</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Composite beams (steel + concrete)<br>
                            <em style="color: #888; font-size: 0.85rem;">Ductility + strength under earthquake, typhoon, surge/tsunami forces, and heavy ash loads</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> RCC beams<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable and water/fire resistant but heavier; requires strong seismic detailing</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 10px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏢 Floors</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Suspended/elevated floor system<br>
                            <em style="color: #888; font-size: 0.85rem;">Keeps living space above flood/surge/tsunami water; lighter for earthquakes; well-braced for typhoons</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Reinforced concrete floor slab<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable in flood/surge exposure; ductile in earthquakes; resists uplift; supports ash loads</em>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255, 152, 0, 0.1); border-radius: 5px; font-size: 0.85rem;">
                        <strong style="color: #FF9800;">💡 Note:</strong> Balud Del Norte's coastal poblacion location requires comprehensive flood protection strategies. Consider elevation, proper drainage, and corrosion-resistant materials for long-term durability.
                    </div>
                </div>
            `;
        } else if (userSelections.barangay.name === "Pinontingan (Poblacion)") {
            additionalInfo = `
                <div style="margin-top: 15px; padding: 20px; background: rgba(63, 81, 181, 0.1); border-radius: 8px; border-left: 4px solid var(--highlight);">
                    <h4 style="color: var(--highlight); margin-bottom: 15px;">🏖️ PINONTINGAN - Urban Coastal Multi-Hazard Resilient Building System</h4>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🧱 Walls</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Full reinforced concrete wall system with RC shear walls<br>
                            <em style="color: #888; font-size: 0.85rem;">Water- and impact-resistant for flood/surge; ductile with rebar for earthquakes; best tsunami survivability; heavy/rigid for typhoon winds; supports ash loads</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 1:</strong> Fiber cement board (non-structural)<br>
                            <em style="color: #888; font-size: 0.85rem;">Lightweight for interior/upper walls; requires proper steel/treated-wood framing for wind/earthquake safety</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 2:</strong> Confined masonry (CHB + RC tie columns/beams)<br>
                            <em style="color: #888; font-size: 0.85rem;">More resilient than unreinforced CHB in floods/quakes/typhoons; supports ash loads but generally less robust than full RC</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏗️ Foundation</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Reinforced concrete pile foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable in wet/saline coastal exposure; ductile with steel for earthquakes; strong anchorage against typhoon uplift; supports elevation for surge/SLR</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 1:</strong> Precast concrete foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Fast/quality-controlled construction; joint/connection reliability is key weakness in earthquakes and coastal conditions</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 2:</strong> Raft/mat foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Good load distribution for weak coastal soils; must be elevated/drained for flood safety</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 3:</strong> Stilt or pier foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Excellent elevation for flood/surge/tsunami flow-through; requires strong wind bracing and proper anchoring for seismic forces</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏠 Roof</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred Structure:</strong> Hip roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Best for typhoons (reduced uplift), balanced in earthquakes, sheds water/ash effectively; more aerodynamic in tsunami/wind events</em><br>
                            <strong style="color: #4CAF50;">✓ Preferred Material:</strong> Metal roofing<br>
                            <em style="color: #888; font-size: 0.85rem;">Lightweight (better in earthquakes), corrosion-resistant when coated, sheds ash/water, performs well in typhoons when properly fastened</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative Structure:</strong> Gable or gabled-hip roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Can work but need extra bracing; gabled-hip more complex and leak-prone at joints</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative Material:</strong> Concrete slab roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Very strong for wind/water/fire/ash but too heavy unless fully engineered for earthquakes; expensive and needs excellent waterproofing</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🎯 Columns & Beams</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred Beams:</strong> Composite beams (steel+concrete)<br>
                            <em style="color: #888; font-size: 0.85rem;">Best all-around for quake/wind/wave/ash loads; needs corrosion protection in coastal environment</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative Beams:</strong> Reinforced concrete (RCC) beams<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable and strong but heavier; requires good seismic detailing</em><br>
                            <strong style="color: #4CAF50;">✓ Preferred Columns:</strong> Reinforced concrete columns<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable and strong for wind/water/seismic forces with proper detailing; thick concrete provides coastal corrosion protection</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative Columns:</strong> Composite steel+concrete (high-performance)<br>
                            <em style="color: #888; font-size: 0.85rem;">Combines concrete stiffness with steel ductility; requires expert design and maintenance for corrosion control</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏢 Floors</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Steel-reinforced concrete floor (concrete slab)<br>
                            <em style="color: #888; font-size: 0.85rem;">Water-resistant, non-combustible, strong diaphragm for earthquakes, resists typhoon uplift when well anchored, carries ash loads</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Hollow core slab<br>
                            <em style="color: #888; font-size: 0.85rem;">Lighter weight than solid slab; requires careful seismic connections and protection from coastal salt-spray corrosion</em>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255, 152, 0, 0.1); border-radius: 5px; font-size: 0.85rem;">
                        <strong style="color: #FF9800;">⚠️ Important Note:</strong> Pinontingan's urban coastal poblacion location requires comprehensive multi-hazard protection strategies. Final sizing, reinforcement, connections, and detailing must follow applicable building codes and coastal engineering expertise. Consider elevation, waterproofing, proper drainage, and corrosion-resistant materials for long-term durability in combined flood, surge, tsunami, seismic, and typhoon exposure.
                    </div>
                </div>
            `;
        } else if (userSelections.barangay.name === "Rizal") {
            additionalInfo = `
                <div style="margin-top: 15px; padding: 20px; background: rgba(25, 103, 210, 0.1); border-radius: 8px; border-left: 4px solid var(--highlight);">
                    <h4 style="color: var(--highlight); margin-bottom: 15px;">🏖️ RIZAL - Coastal Rural Multi-Hazard Resilient Building System</h4>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🧱 Walls</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Full reinforced concrete wall system with RC shear walls<br>
                            <em style="color: #888; font-size: 0.85rem;">Best overall against water + debris impact (flood/surge/SLR); earthquakes (ductile with rebar); typhoons (rigid/heavy, anchors roof); supports ash loads</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 1:</strong> Fiber cement board (non-structural)<br>
                            <em style="color: #888; font-size: 0.85rem;">Lightweight for interiors/upper walls; must be properly framed for wind and earthquakes</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 2:</strong> Confined masonry (CHB with RC tie beams/columns)<br>
                            <em style="color: #888; font-size: 0.85rem;">Better than unreinforced CHB in floods/earthquakes; good for wind/ash; typically less robust than full RC</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏗️ Foundation</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Reinforced concrete pile foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable in wet/saline coastal exposure; ductile with steel for earthquakes; strong anchorage against typhoon uplift; supports elevation for surge/SLR</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 1:</strong> Precast concrete foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Good quality control but joints/assembly can reduce seismic reliability if not executed perfectly</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 2:</strong> Raft/mat foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Great for uneven soil and distributing earthquake loads; must be elevated/drained for flood safety</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative 3:</strong> Stilt or pier foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Stilt excellent for elevation in flood/surge/tsunami flow-through; needs strong bracing. Pier workable for light structures; must be strongly anchored for wind/quakes</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏠 Roof</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred Structure:</strong> Hip roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Best all-around for typhoons (reduced uplift); sheds rain/ash effectively; stable geometry in earthquakes</em><br>
                            <strong style="color: #4CAF50;">✓ Preferred Material:</strong> Metal roofing<br>
                            <em style="color: #888; font-size: 0.85rem;">Lightweight for earthquakes; can be securely fastened for typhoons; sheds water/ash; must use corrosion-resistant coating in coastal salt-spray</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative Structure:</strong> Gable or gabled-hip roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Can work but needs extra bracing/careful detailing; more vulnerable to typhoon winds and leakage</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative Material:</strong> Concrete slab roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Excellent for wind/water/fire/ash but too heavy unless whole structure engineered for earthquakes; costly and needs good waterproofing</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🎯 Columns & Beams</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred Beams:</strong> Composite beams (steel+concrete)<br>
                            <em style="color: #888; font-size: 0.85rem;">Best overall balance: ductile in earthquakes; strong for typhoons/tsunami forces; supports heavy ash loads; protect steel from corrosion</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative Beams:</strong> RCC beams<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable, fire- and water-resistant, strong for ash loads; heavier so needs good seismic detailing</em><br>
                            <strong style="color: #4CAF50;">✓ Preferred Columns:</strong> Reinforced concrete (RCC) columns<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable and strong for flood/surge/typhoons; good seismic performance with proper detailing; supports ash loads; coastal corrosion protection</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative Columns:</strong> Stilt or composite columns<br>
                            <em style="color: #888; font-size: 0.85rem;">Stilt columns add elevation for flood/surge/tsunami flow-through; require heavy bracing. Composite steel+concrete combines stiffness with ductility if corrosion managed</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏢 Floors</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Steel-reinforced concrete floor (concrete slab)<br>
                            <em style="color: #888; font-size: 0.85rem;">Water-resistant, non-combustible, strong for ash loads, good diaphragm action for earthquakes, resists typhoon uplift when well anchored</em><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Hollow core slab<br>
                            <em style="color: #888; font-size: 0.85rem;">Lighter weight than solid slab; requires careful seismic connections and protection from coastal salt-spray corrosion</em>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255, 152, 0, 0.1); border-radius: 5px; font-size: 0.85rem;">
                        <strong style="color: #FF9800;">⚠️ Important Note:</strong> Rizal's coastal rural location with black sand beaches requires comprehensive multi-hazard protection strategies. Final sizing, reinforcement, connections, and detailing must follow applicable building codes and coastal engineering expertise. Consider elevation, waterproofing, proper drainage, and corrosion-resistant materials for long-term durability in combined flood, surge, tsunami, seismic, and typhoon exposure. Proper foundation design and soil investigation are critical for black sand beach stability.
                    </div>
                </div>
            `;
        } else if (userSelections.barangay.name === "San Ignacio") {
            additionalInfo = `
                <div style="margin-top: 15px; padding: 20px; background: rgba(25, 103, 210, 0.1); border-radius: 8px; border-left: 4px solid var(--highlight);">
                    <h4 style="color: var(--highlight); margin-bottom: 15px;">🏖️ SAN IGNACIO - Coastal Rural Multi-Hazard Resilient Building System</h4>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🧱 Walls</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Full reinforced concrete (RC) wall system with RC shear walls as the primary lateral system<br>
                            <em style="color: #888; font-size: 0.85rem;">Best overall performance against water and debris impact (flood/surge/sea level rise); excellent ductility in earthquakes (with continuous rebar); strong resistance to typhoon wind forces (rigid, heavy, good roof anchorage); good capability for ash load distribution; shear walls should be the primary design choice.</em><br><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Confined masonry (concrete hollow blocks with RC tie beams and columns)<br>
                            <em style="color: #888; font-size: 0.85rem;">Better than unreinforced CHB in floods and earthquakes; good resistance to wind and ash loads; typically less robust than full RC in surge/tsunami impact and seismic shaking. Trade-off: Lower cost, but reduced ductility and impact resistance.</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏗️ Foundation</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred Material:</strong> Reinforced concrete (RC) foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Highly durable in wet and saline coastal exposure; provides ductile response with steel reinforcement during seismic events; strong anchorage capability against typhoon uplift forces; excellent support for accumulated ash loads on upper structure.</em><br><br>
                            <strong style="color: #4CAF50;">✓ Preferred Structure:</strong> Pile foundation (deep piles, 8-12 meters minimum)<br>
                            <em style="color: #888; font-size: 0.85rem;">Provides deep anchorage to prevent scour and erosion in flood/surge/sea-level-rise events; improves performance in soft coastal soils; limits differential settlement and liquefaction risk during earthquakes; supports elevation for surge and sea level rise protection; allows water and debris flow-through without resistance.</em><br><br>
                            <strong style="color: #FF9800;">⚡ Alternative Structure:</strong> Raft or mat foundation<br>
                            <em style="color: #888; font-size: 0.85rem;">Excellent for distributing earthquake loads and accommodating uneven soil settlement; must be combined with elevation platform and good drainage system for flood safety; requires thicker concrete for structural depth. Trade-off: Simpler for soft soils, but needs elevation and drainage features for coastal applicability.</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🏠 Roof</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred Structure:</strong> Hip roof geometry<br>
                            <em style="color: #888; font-size: 0.85rem;">Best all-around design for typhoons (greatly reduces uplift forces); naturally sheds rain and ash accumulation; provides stable geometry during seismic shaking; minimizes interior leakage at roof-wall intersections compared to gable roofs.</em><br><br>
                            <strong style="color: #4CAF50;">✓ Preferred Material:</strong> Metal roofing (corrugated steel or aluminum, corrosion-resistant coating)<br>
                            <em style="color: #888; font-size: 0.85rem;">Lightweight for earthquake loads; can be securely fastened with appropriate pattern to resist typhoon uplift; excellent water and ash shedding; must use high-quality corrosion-resistant coating or stainless steel for long-term durability in coastal salt-spray environment.</em><br><br>
                            <strong style="color: #FF9800;">⚡ Alternative Structure:</strong> Gable or gable-hip roof<br>
                            <em style="color: #888; font-size: 0.85rem;">Can work in multi-hazard context but needs extra diagonal bracing and careful detailing at roof-wall intersections; more vulnerable to typhoon wind uplift at ridge and eaves. Trade-off: Lower cost, but higher complexity and wind vulnerability.</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">🔧 Columns & Beams</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred Columns:</strong> Reinforced concrete (RCC) circular columns, minimum 400mm diameter<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable and strong for flood, surge, and typhoon forces; excellent seismic performance with proper detailing and confinement; good support for accumulated ash loads; circular cross-section provides better seismic performance than square.</em><br><br>
                            <strong style="color: #4CAF50;">✓ Preferred Beams:</strong> Composite beams (structural steel + reinforced concrete composite action)<br>
                            <em style="color: #888; font-size: 0.85rem;">Best overall balance—provides ductility in earthquakes, strong resistance to typhoon and tsunami impact forces, excellent capacity for heavy ash loads; requires proper corrosion protection of steel components in coastal environment (paint, epoxy, or stainless).</em><br><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Reinforced concrete (RCC) beams<br>
                            <em style="color: #888; font-size: 0.85rem;">Durable, fire-resistant, water-resistant; strong for ash load support; heavier mass increases seismic demand; requires good detailing for ductility. Trade-off: Simplicity and durability, but heavier than composite and needs better seismic design.</em>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: var(--text-light); margin-bottom: 8px;">📐 Floors</h5>
                        <div style="font-size: 0.9rem; line-height: 1.4;">
                            <strong style="color: #4CAF50;">✓ Preferred:</strong> Steel-reinforced concrete floor slabs (solid or composite)<br>
                            <em style="color: #888; font-size: 0.85rem;">Water-resistant and non-combustible; strong capacity for accumulated ash loads; provides good diaphragm action for seismic load distribution; resists typhoon uplift forces when properly anchored to supporting beams and columns.</em><br><br>
                            <strong style="color: #FF9800;">⚡ Alternative:</strong> Hollow core or composite floor slabs<br>
                            <em style="color: #888; font-size: 0.85rem;">Lighter than solid concrete; reduces overall structural weight for earthquakes; still provides good water and ash resistance; limits clear span and creates more joints. Trade-off: Weight reduction, but more complex detailing.</em>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255, 152, 0, 0.1); border-radius: 5px; font-size: 0.85rem;">
                        <strong style="color: #FF9800;">⚠️ Important Note:</strong> San Ignacio's coastal rural agricultural community location requires comprehensive multi-hazard protection strategies addressing flooding, storm surge, sea level rise, earthquakes, tsunamis, volcanic ash fall, and typhoons. Final sizing, reinforcement, connections, and detailing must follow applicable building codes and coastal engineering expertise. Consider elevation, waterproofing, proper drainage, corrosion-resistant materials for salt-spray protection, and secure anchoring of all components for long-term durability in combined hazard exposure.
                    </div>
                </div>
            `;
        }
        
        subtitle.innerHTML = `
            <strong>Barangay:</strong> ${userSelections.barangay.name}<br>
            <strong>Area Type:</strong> ${userSelections.barangay.types.join(', ')}<br>
            <strong>Identified Hazards:</strong> ${hazardNames || 'None identified'}
            ${additionalInfo}
        `;
    }
    
    goToPage('results');
}

// Search functionality
function openSearch() {
    searchModal.classList.add('active');
    searchInput.focus();
}

function closeSearch() {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.classList.remove('active');
    searchResults.innerHTML = '';
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = '';
    
    if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
    }
    
    const results = [];
    
    allBarangays.forEach(barangay => {
        if (barangay.name.toLowerCase().includes(query) || 
            barangay.types.some(type => type.toLowerCase().includes(query))) {
            results.push({
                type: 'barangay',
                name: barangay.name,
                description: barangay.description,
                area: barangay.types.join(', ')
            });
        }
    });
    
    hazardData.forEach(hazard => {
        if (hazard.name.toLowerCase().includes(query) || 
            hazard.description.toLowerCase().includes(query)) {
            results.push({
                type: 'hazard',
                name: hazard.name,
                description: hazard.description,
                icon: hazard.icon
            });
        }
    });
    
    if (results.length > 0) {
        searchResults.classList.add('active');
        
        results.forEach(result => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.style.cssText = `
                padding: 15px;
                margin-bottom: 10px;
                background: rgba(255,255,255,0.05);
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            
            div.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                    <span style="font-size: 1.2em;">${result.type === 'barangay' ? '📍' : result.icon}</span>
                    <strong style="color: var(--highlight);">${result.name}</strong>
                </div>
                <div style="color: var(--text-muted); font-size: 0.9em;">${result.description}</div>
            `;
            
            div.addEventListener('click', () => {
                if (result.type === 'barangay') {
                    const barangay = allBarangays.find(b => b.name === result.name);
                    if (barangay) {
                        goToPage('location');
                        setTimeout(() => {
                            selectBarangay(barangay);
                        }, 500);
                    }
                }
                closeSearch();
            });
            
            div.addEventListener('mouseenter', () => {
                div.style.background = 'rgba(216, 113, 99, 0.2)';
            });
            
            div.addEventListener('mouseleave', () => {
                div.style.background = 'rgba(255,255,255,0.05)';
            });
            
            searchResults.appendChild(div);
        });
    } else {
        searchResults.classList.add('active');
        searchResults.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding: 20px;">
                No results found for "${query}"
            </div>
        `;
    }
}

// Global event listeners
searchModal.addEventListener('click', function(e) {
    if (e.target === this) {
        closeSearch();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        closeSearch();
    }
});

document.addEventListener('click', function(e) {
    if (mobileNavMenu.classList.contains('active') && 
        !e.target.closest('#mobile-nav-menu') && 
        !e.target.closest('.mobile-menu-btn')) {
        closeMobileMenu();
    }
});

// Toggle team section expand/collapse
function toggleTeamSection(sectionId) {
    const membersDiv = document.getElementById(sectionId + '-members');
    const chevron = document.getElementById(sectionId + '-chevron');
    
    if (membersDiv.style.display === 'none' || membersDiv.style.display === '') {
        membersDiv.style.display = 'block';
        chevron.classList.add('rotated');
    } else {
        membersDiv.style.display = 'none';
        chevron.classList.remove('rotated');
    }
}

// ============================================
// LEARN SECTION FUNCTIONS
// ============================================

let articles = []; // Global variable for articles

// Load articles from JSON file
async function loadArticles() {
    try {
        const response = await fetch('data/articles.json');
        articles = await response.json();
        renderArticles();
    } catch (error) {
        console.error('Error loading articles:', error);
    }
}

// Display barangays by area type category
function showAreaTypeBarangays(areaType) {
    const barangayList = document.getElementById('barangay-list');
    
    // Filter barangays by area type
    const filteredBarangays = allBarangays.filter(barangay => 
        barangay.types.includes(areaType)
    );
    
    // Update active tab
    document.querySelectorAll('.area-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.closest('.area-tab').classList.add('active');
    
    // Clear previous results
    barangayList.innerHTML = '';
    
    // Render barangays
    filteredBarangays.forEach(barangay => {
        const div = document.createElement('div');
        div.className = 'barangay-item';
        
        // Create area type badges with borders
        const areaTypesBadges = barangay.types.map(type => 
            `<span class="area-type-badge">${type.charAt(0).toUpperCase() + type.slice(1)}</span>`
        ).join('');
        
        // Create hazard badges with borders
        const hazardsBadges = barangay.hazards.map(hazard => 
            `<span class="hazard-badge">${hazard}</span>`
        ).join('');
        
        div.innerHTML = `
            <div class="barangay-name">${barangay.name}</div>
            <div class="barangay-info">
                <div class="barangay-info-item">
                    <span class="barangay-info-label">Area Type:</span>
                    <div class="barangay-info-value">${areaTypesBadges}</div>
                </div>
                <div class="barangay-info-item">
                    <span class="barangay-info-label">Hazards:</span>
                    <div class="barangay-info-value">${hazardsBadges}</div>
                </div>
            </div>
        `;
        
        // Add click event to select the barangay
        div.addEventListener('click', () => {
            selectBarangayFromLearn(barangay);
        });
        
        barangayList.appendChild(div);
    });
    
    // Scroll to barangay list
    document.getElementById('barangay-list-container').scrollIntoView({ behavior: 'smooth' });
}

// Search barangays in learn section
document.addEventListener('DOMContentLoaded', () => {
    const areaSearchInput = document.getElementById('area-search-input');
    if (areaSearchInput) {
        areaSearchInput.addEventListener('input', (e) => {
            const searchQuery = e.target.value.toLowerCase();
            const barangayList = document.getElementById('barangay-list');
            
            if (searchQuery.trim() === '') {
                barangayList.innerHTML = '';
                return;
            }
            
            const filteredBarangays = allBarangays.filter(barangay =>
                barangay.name.toLowerCase().includes(searchQuery) ||
                barangay.types.some(type => type.toLowerCase().includes(searchQuery)) ||
                barangay.hazards.some(hazard => hazard.toLowerCase().includes(searchQuery))
            );
            
            barangayList.innerHTML = '';
            
            filteredBarangays.forEach(barangay => {
                const div = document.createElement('div');
                div.className = 'barangay-item';
                
                // Create area type badges with borders
                const areaTypesBadges = barangay.types.map(type => 
                    `<span class="area-type-badge">${type.charAt(0).toUpperCase() + type.slice(1)}</span>`
                ).join('');
                
                // Create hazard badges with borders
                const hazardsBadges = barangay.hazards.map(hazard => 
                    `<span class="hazard-badge">${hazard}</span>`
                ).join('');
                
                div.innerHTML = `
                    <div class="barangay-name">${barangay.name}</div>
                    <div class="barangay-info">
                        <div class="barangay-info-item">
                            <span class="barangay-info-label">Area Type:</span>
                            <div class="barangay-info-value">${areaTypesBadges}</div>
                        </div>
                        <div class="barangay-info-item">
                            <span class="barangay-info-label">Hazards:</span>
                            <div class="barangay-info-value">${hazardsBadges}</div>
                        </div>
                    </div>
                `;
                
                div.addEventListener('click', () => {
                    selectBarangayFromLearn(barangay);
                });
                
                barangayList.appendChild(div);
            });
        });
    }
    
    // Load and render articles
    loadArticles();
});

// Select barangay from learn section and go to building guide
function selectBarangayFromLearn(barangay) {
    userSelections.barangay = barangay;
    goToPage('location');
    setTimeout(() => {
        selectBarangay(barangay);
    }, 500);
}

// Scroll to learn section
function scrollToLearn() {
    const learnSection = document.getElementById('learn-section');
    if (learnSection) {
        learnSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// ARTICLES SECTION FUNCTIONS
// ============================================

// Render article cards
function renderArticles() {
    const articlesGrid = document.getElementById('articles-grid');
    
    if (!articlesGrid || !articles || articles.length === 0) {
        return;
    }
    
    articlesGrid.innerHTML = '';
    
    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.style.cursor = 'pointer';
        card.onclick = () => showArticle(article.id);
        
        card.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-body">
                <span class="article-category">${article.category}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <a href="#" class="article-read-more" onclick="event.preventDefault(); event.stopPropagation();">Learn more →</a>
            </div>
        `;
        
        articlesGrid.appendChild(card);
    });
}

// Show article in detail view
function showArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    
    if (!article) return;
    
    const articleContent = document.getElementById('article-content');
    
    if (articleContent) {
        // Add headline and byline to content
        articleContent.innerHTML = `
            <div style="margin-bottom: 30px;">
                <h2 style="margin-bottom: 10px;">${article.headline}</h2>
                <p style="color: var(--accent-light); font-style: italic; margin-bottom: 20px;">${article.byline}</p>
                <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 30px;">
            </div>
            ${article.content}
        `;
    }
    
    // Go to article page
    goToPage('article');
}

// Scroll to articles section
function scrollToArticles() {
    const articlesSection = document.getElementById('articles-section');
    if (articlesSection) {
        articlesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Learn Section Functions
function showAreaTypeBarangays(areaType) {
    // Mark active tab
    const tabs = document.querySelectorAll('.learn-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.closest('.learn-tab').classList.add('active');

    // Filter and display barangays
    const barangayGrid = document.getElementById('barangay-list');
    const filteredBarangays = allBarangays.filter(b => b.types.includes(areaType));
    
    barangayGrid.innerHTML = '';
    filteredBarangays.forEach(barangay => {
        const card = document.createElement('div');
        card.className = 'learn-barangay-card';
        card.innerHTML = `
            <div class="learn-barangay-name">${barangay.name}</div>
            <div class="learn-barangay-type">${barangay.types.join(', ')}</div>
        `;
        card.onclick = () => {
            startBuildingGuide();
            setTimeout(() => selectArea(areaType), 100);
            setTimeout(() => selectBarangay(barangay), 300);
        };
        barangayGrid.appendChild(card);
    });
}

// Initialize learn section on page load
document.addEventListener('DOMContentLoaded', function() {
    const learnSection = document.getElementById('learn-section');
    if (learnSection) {
        // Initialize with coastal area barangays
        const barangayGrid = document.getElementById('barangay-list');
        const coastalBarangays = allBarangays.filter(b => b.types.includes('coastal'));
        
        barangayGrid.innerHTML = '';
        coastalBarangays.forEach(barangay => {
            const card = document.createElement('div');
            card.className = 'learn-barangay-card';
            card.innerHTML = `
                <div class="learn-barangay-name">${barangay.name}</div>
                <div class="learn-barangay-type">${barangay.types.join(', ')}</div>
            `;
            card.onclick = () => {
                startBuildingGuide();
                setTimeout(() => selectArea('coastal'), 100);
                setTimeout(() => selectBarangay(barangay), 300);
            };
            barangayGrid.appendChild(card);
        });

        // Add search functionality
        const searchInput = document.getElementById('area-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase();
                const cards = document.querySelectorAll('.learn-barangay-card');
                
                cards.forEach(card => {
                    const name = card.querySelector('.learn-barangay-name').textContent.toLowerCase();
                    if (name.includes(searchTerm)) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
    }
});

