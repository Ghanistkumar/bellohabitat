export interface JourneyMilestone {
  step: string;
  era: string;
  title: string;
  subtitle: string;
  category: 'Roots' | 'Craft Guild' | 'Identity' | 'Transition' | 'Consultancy' | 'Integration' | 'Vision';
  description: string;
  detailedStory: string;
  image: string;
  craftFocus: string[];
  locationTag: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  division: 'bello' | 'Vaastukalaa';
  divisionLabel: string;
  tagline: string;
  description: string;
  deliverables: string[];
  craftDetails: string;
  image: string;
  accentNote: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'ARCHITECTURE' | 'INTERIORS' | 'TRADITIONAL CRAFT' | 'WOODWORK' | 'TEMPLES' | 'COMMERCIAL' | 'RESIDENTIAL';
  categoryLabel: string;
  division: 'Bello Habitat' | 'Vaastukalaa' | 'Collaborative Duality';
  location: string;
  year: string;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  idea: string;
  designApproach: string;
  craftsmanship: string;
  materials: string[];
  dimensionsOrArea?: string;
  isFeatured?: boolean;
}

export interface CraftStage {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  tooling: string;
  materiality: string;
  image: string;
}

export const COMPANY_INFO = {
  name: "Bello Habitat Consultancy",
  craftDivision: "Vaastukalaa",
  tagline: "Where generations of Indian craftsmanship meet contemporary architecture.",
  subTagline: "From hand-carved wood to contemporary habitats.",
  motto: "WE DESIGN YOUR LIFESTYLE IN BETTER WAYS.",
  legacyYears: "45+",
  legacyNote: "Carrying forward four decades of family woodworking, temple architecture, and traditional wood carving heritage in Gujarat.",
  office: {
    title: "Design Studio & Consultancy Office",
    address: "306, Ishaan Square, Near Tapovan Circle, Tapovan Circle to Visat Circle Road, Chandkheda, Ahmedabad – 382424",
    landmark: "Between Tapovan Circle & Visat Circle",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM (By Appointment)"
  },
  workshop: {
    title: "Vaastukalaa Woodcraft Atelier & Workshop",
    address: "89, Sankalp Industrial Park, Opposite Ekta Industrial Park, Nana Chiloda, Ahmedabad",
    landmark: "Nana Chiloda Industrial Corridor",
    hours: "Mon – Sat: 9:00 AM – 6:30 PM (Atelier Visits by Prior Appointment)"
  },
  phones: [
    { label: "Primary Studio", number: "+91 81281 94663", clean: "+918128194663" },
    { label: "Consultancy & Atelier", number: "+91 93165 35404", clean: "+919316535404" }
  ],
  email: "himanshu@bellohc.com",
  website: "bellohc.com"
};

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    step: "01",
    era: "The Genesis",
    title: "THE BEGINNING",
    subtitle: "Artisanal Woodworking & Traditional Roots",
    category: "Roots",
    description: "Deep in the cultural heartlands of Gujarat, our journey began with master carvers, fragrant raw teakwood logs, and hand chisels passed through generations.",
    detailedStory: "Before modern computer-aided design or industrialized joinery, our lineage took form in humble wooden workshops. Each log was selected by hand for its grain density and seasonal curing, governed by the time-honored principles of indigenous Indian woodcraft.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    craftFocus: ["Aged Teak Selection", "Classical Hand Chisels", "Indigenous Joinery"],
    locationTag: "Ahmedabad Craft Quarter"
  },
  {
    step: "02",
    era: "The Heritage",
    title: "THE LEGACY",
    subtitle: "Decades of Devotional & Classical Wood Carving",
    category: "Craft Guild",
    description: "Four decades of dedicated practice refining temple sanctums, traditional Gujarati haveli ornamentation, and sacred geometry.",
    detailedStory: "The workshop developed mastery in multi-layered relief carvings, floral arabesques, and intricate temple pillars. The generational knowledge of how wood breathes, responds to climate, and holds sacred energy became an instinctual heritage.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    craftFocus: ["High-Relief Floral Carving", "Temple Shikhar Geometries", "Natural Oil Rubs"],
    locationTag: "Old Haveli Woodcraft Tradition"
  },
  {
    step: "03",
    era: "The Atelier",
    title: "Vaastukalaa",
    subtitle: "The Dedicated Craft-Focused Identity",
    category: "Identity",
    description: "Formalized as Vaastukalaa, creating bespoke traditional temples, royal swings (jhulas), carved jharokhas, and timeless heirloom furniture.",
    detailedStory: "Vaastukalaa became a revered destination for patrons seeking non-industrialized, museum-grade woodwork. From grand home mandirs with hand-turned sangeda columns to brass-accented swings, every creation preserved cultural soul in private residences.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    craftFocus: ["Traditional Mandir Architecture", "Hand-Turned Sangeda", "Heirloom Jhulas"],
    locationTag: "Nana Chiloda Atelier"
  },
  {
    step: "04",
    era: "The Convergence",
    title: "THE EVOLUTION",
    subtitle: "Transition Toward Architectural Scale & Space",
    category: "Transition",
    description: "Recognizing that exquisite craft requires sympathetic architectural envelopes, the practice expanded into spatial planning, light, and materiality.",
    detailedStory: "As contemporary lifestyle evolved, clients desired spaces that were clean, breathable, and filled with natural daylight, yet without losing the warmth and sacred grounding of traditional Indian craft. The dialogue between architecture and artisanal woodwork began.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    craftFocus: ["Spatial Volume", "Natural Daylight Integration", "Vastu Shastra Alignments"],
    locationTag: "Studio Dialogue"
  },
  {
    step: "05",
    era: "The Consultancy",
    title: "BELLO HABITAT",
    subtitle: "Comprehensive Architecture & PMC Practice",
    category: "Consultancy",
    description: "Establishment of Bello Habitat Consultancy at Ishaan Square, offering architecture, interior design, landscape, Vastu, and project management.",
    detailedStory: "Bello Habitat was created to deliver turnkey architectural excellence. With a dedicated team of architects, site engineers, and project managers, the consultancy oversees projects from early schematic sketches through structural execution and PMC.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    craftFocus: ["Full-Scale Architecture", "Commercial & Residential Interiors", "Turnkey PMC"],
    locationTag: "Chandkheda Design Studio"
  },
  {
    step: "06",
    era: "The Synthesis",
    title: "TODAY",
    subtitle: "Harmonizing Ancient Craft with Contemporary Luxury",
    category: "Integration",
    description: "A rare symbiosis: cutting-edge modern architectural volumes enriched with deeply tactile, custom-carved woodwork from our own atelier.",
    detailedStory: "Unlike standard architectural firms that outsource finishes to generic contractors, Bello Habitat seamlessly coordinates between our Chandkheda design studio and our Nana Chiloda craft workshop. Modern minimalism is elevated by artisanal depth.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    craftFocus: ["Bespoke Interior Habitations", "Integrated Woodcraft Art", "Sustainable Indian Living"],
    locationTag: "Ahmedabad & Gujarat"
  },
  {
    step: "07",
    era: "The Horizon",
    title: "THE FUTURE",
    subtitle: "Creating Timeless Habitations Where Heritage Lives",
    category: "Vision",
    description: "Pioneering enduring architectural landmarks where cultural memory, biophilic sustainability, and artisanal craftsmanship coexist forever.",
    detailedStory: "We envision architecture not as temporary trends, but as enduring shelters of family narrative. Through research in regional Gujarati materials, lime plasters, stone masonry, and regenerative forestry for our woodwork, we build for generations ahead.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    craftFocus: ["Generational Architecture", "Heritage Revival", "Conscious Materiality"],
    locationTag: "Future Landmarks"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  // CATEGORY 01 — BELLO HABITAT
  {
    id: "arch-consultancy",
    name: "Architecture Consultancy",
    division: "bello",
    divisionLabel: "Bello Habitat Consultancy",
    tagline: "Form, climate responsiveness, and spatial poetry.",
    description: "End-to-end architectural planning for luxury private residences, farmhouses, and commercial institutions, combining passive cooling, daylight studies, and regional context.",
    deliverables: ["Schematic Masterplanning", "3D Architectural Visualization", "Structural & MEP Coordination", "Municipal & Bye-law Compliance"],
    craftDetails: "Harmonizing contemporary concrete, glass, and steel with custom tactile wooden screens and cantilevered porticos.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Studio Practice"
  },
  {
    id: "interior-design",
    name: "Interior Design",
    division: "bello",
    divisionLabel: "Bello Habitat Consultancy",
    tagline: "Curated atmospheres tailored to refined lifestyles.",
    description: "Bespoke spatial design encompassing custom layouts, acoustic warmth, lighting design, curated stone finishes, and tailored furniture configurations.",
    deliverables: ["Comprehensive Layout Blueprints", "Material & Finish Schedules", "Custom Lighting Layouts", "Bespoke Millwork Details"],
    craftDetails: "Integrating custom Vaastukalaa millwork seamlessly into modern, minimalist interior backdrops.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Bespoke Habitation"
  },
  {
    id: "landscape-design",
    name: "Landscape Design",
    division: "bello",
    divisionLabel: "Bello Habitat Consultancy",
    tagline: "Living courtyards, stone waterbodies, and native foliage.",
    description: "Crafting contemplative exterior environments that extend indoor living into nature, featuring native flora, sandstone paving, and shaded verandas.",
    deliverables: ["Courtyard & Terrace Design", "Native Flora Selection", "Water Feature Engineering", "External Illumination Plans"],
    craftDetails: "Teakwood pergolas, outdoor swings, and carved stone-wood water spouts reflecting traditional Gujarati courtyards.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Biophilic Living"
  },
  {
    id: "vastu-consultancy",
    name: "Vastu Consultancy",
    division: "bello",
    divisionLabel: "Bello Habitat Consultancy",
    tagline: "Ancient spatial harmony applied with contemporary logic.",
    description: "Scientific analysis of energy vectors, cardinal directions, and elemental balance (Panchabhuta) seamlessly woven into modern architectural layouts.",
    deliverables: ["Compass & Grid Energy Mapping", "Zonal Element Rectification", "Brahmasthan Openness Design", "Entrance & Functional Zoning"],
    craftDetails: "Implementing Vastu alignments organically without forcing awkward or regressive architectural geometries.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Sacred Spatial Geometry"
  },
  {
    id: "architectural-works",
    name: "Architectural Works & Facades",
    division: "bello",
    divisionLabel: "Bello Habitat Consultancy",
    tagline: "Engineered building envelopes with artisanal character.",
    description: "Specialized exterior envelope construction including ventilated rain-screens, terracotta louvers, custom brise-soleil, and monolithic stone cladding.",
    deliverables: ["Facade Detail Drawings", "Thermal Performance Engineering", "Material Weathering Analysis", "On-Site Installation Supervision"],
    craftDetails: "Hand-finished teak slats and weather-treated wooden louvers integrated into high-performance glass facades.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Engineered Envelope"
  },
  {
    id: "renovation-pm",
    name: "Renovation Project Management",
    division: "bello",
    divisionLabel: "Bello Habitat Consultancy",
    tagline: "Breathing contemporary life into historic and existing structures.",
    description: "Structural retrofitting, space re-planning, and complete modernization of existing homes and bungalows while honoring original character.",
    deliverables: ["Structural Feasibility Audits", "Phased Demolition & Reconstruction", "Services Modernization (Plumbing/HVAC)", "Finishing Quality Audits"],
    craftDetails: "Restoring aged wood elements, re-incorporating vintage carvings into minimalist contemporary frames.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Adaptive Reuse"
  },
  {
    id: "commercial-interiors",
    name: "Commercial Interior Works",
    division: "bello",
    divisionLabel: "Bello Habitat Consultancy",
    tagline: "Sophisticated corporate, retail, and experiential spaces.",
    description: "Distinguished workplace environments and high-end boutique retail spaces that command brand prestige, ergonomic excellence, and acoustic balance.",
    deliverables: ["Executive Boardroom Suites", "Acoustic Wall Paneling", "Reception Statement Installations", "Turnkey Commercial Fit-out"],
    craftDetails: "Architectural wood-fluted walls, brass-inlaid conference tables, and heritage reception backdrop panels.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Corporate Prestige"
  },
  {
    id: "pmc-consultancy",
    name: "Project Management Consultancy (PMC)",
    division: "bello",
    divisionLabel: "Bello Habitat Consultancy",
    tagline: "Rigorous quality control, budget guardianship, and timeline discipline.",
    description: "Complete site representation safeguarding the client's interests through detailed BOQs, contractor auditing, daily site logs, and precision timelines.",
    deliverables: ["Comprehensive BOQ & Cost Control", "Contractor Procurement & Vetting", "Daily Quality & Safety Audits", "Milestone-Driven Handover"],
    craftDetails: "Ensuring zero compromise between 3D design intent, material grade, and final on-site craftsmanship execution.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Execution Guardianship"
  },

  // CATEGORY 02 — Vaastukalaa (TRADITIONAL CRAFT DIVISION)
  {
    id: "traditional-temples",
    name: "Traditional Temples & Mandirs",
    division: "Vaastukalaa",
    divisionLabel: "Vaastukalaa Craft Division",
    tagline: "Sacred sanctums carved according to ancient Shilpa Shastra.",
    description: "Grand freestanding mandir structures and architectural shrine complexes executed in solid teak, marble, and brass, embodying divine proportions.",
    deliverables: ["Shikhar & Mandap Architecture", "Detailed Iconographic Carvings", "Concealed Warm Lighting Details", "Integrated Storage & Diya Drawers"],
    craftDetails: "Hand-chiseled peacocks, kalash crests, and fluted pillars crafted by master artisans with four decades of lineage.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Sacred Sanctum"
  },
  {
    id: "home-temples",
    name: "Home Temples (Bespoke Puja Units)",
    division: "Vaastukalaa",
    divisionLabel: "Vaastukalaa Craft Division",
    tagline: "Intimate devotion tailored for modern apartment and bungalow spaces.",
    description: "Custom wall-hung or floor-mounted mandirs engineered for contemporary homes, blending minimalist brass accents with ornate carved backdrops.",
    deliverables: ["Space-Optimized Layouts", "Ventilated Incense Channels", "Brass Inlays & Bells", "Treated Fire-Safe Finishes"],
    craftDetails: "Backlit jaali screens in Burma teakwood paired with brushed champagne brass bells and soft-closing storage.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Modern Devotion"
  },
  {
    id: "wooden-swings",
    name: "Wooden Swings / Jhula",
    division: "Vaastukalaa",
    divisionLabel: "Vaastukalaa Craft Division",
    tagline: "The quintessential soul of Gujarati domestic living.",
    description: "Handcrafted wooden swings suspended by cast brass or wrought-iron links, featuring turned sangeda spindles and ergonomic curved seating.",
    deliverables: ["Solid CP Teak Plank Construction", "Hand-Turned Side Spindles", "Structural Ceiling Load Anchors", "Hand-Polished Natural Finishes"],
    craftDetails: "Carved backrests featuring floral filigree, paired with brass peacock or elephant suspension chains.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Heritage Heirloom"
  },
  {
    id: "jharokhas",
    name: "Carved Jharokhas & Wall Windows",
    division: "Vaastukalaa",
    divisionLabel: "Vaastukalaa Craft Division",
    tagline: "Architectural overhangs and sculptural wall balconies.",
    description: "Ornamental wooden balconies, mirror frames, and visual portals inspired by the royal architecture of Gujarat and Rajasthan.",
    deliverables: ["Aged Teakwood Joinery", "Intricate Bracket Supports", "Antique Brass Hardware", "Custom Wall-Mount Structural Brackets"],
    craftDetails: "Hand-carved mesh screens (jaalis) casting poetic geometric shadows across living rooms and foyers.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Architectural Portal"
  },
  {
    id: "traditional-furniture",
    name: "Traditional Sofas, Chairs & Consoles",
    division: "Vaastukalaa",
    divisionLabel: "Vaastukalaa Craft Division",
    tagline: "Seating that carries historical grandeur into the contemporary salon.",
    description: "Bespoke low-height seating, carved formal settees, solid wood dining tables, and entryway consoles engineered for lifetime longevity.",
    deliverables: ["Mortise & Tenon Structural Joinery", "Custom Belgian Linen / Silk Upholstery", "Curved Armrests & Lion-Paw Legs", "Hand-Rubbed Matte Wax Sealant"],
    craftDetails: "Each frame hand-shaped without modern synthetic veneers, allowing the genuine solid grain to age gracefully.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Living Room Heritage"
  },
  {
    id: "rath-chariots",
    name: "Rath / Traditional Chariots",
    division: "Vaastukalaa",
    divisionLabel: "Vaastukalaa Craft Division",
    tagline: "Monuments on wheels crafted for festive temple processions.",
    description: "Rare traditional woodwork expertise constructing ceremonial wooden raths, temple festival chariots, and palanquins with structural timber engineering.",
    deliverables: ["Heavy Structural Timber Chassis", "Hand-Turned Wooden Wheels", "Mythological Narrative Carvings", "Load-Bearing Axle Joinery"],
    craftDetails: "Preserving rare guild knowledge found only in a handful of artisan families across Western India.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Devotional Monument"
  },
  {
    id: "sangeda-craft",
    name: "Sangeda Woodturning Art",
    division: "Vaastukalaa",
    divisionLabel: "Vaastukalaa Craft Division",
    tagline: "Precision rotational woodturning and classical lacquer work.",
    description: "The time-honored Gujarati art of lathe-turned wooden pillars, balusters, table legs, and jhula supports characterized by smooth concentric contours.",
    deliverables: ["Centric Spindle Turning", "Fluted & Spiral Contours", "Hand-Finished Satin Luster", "Architectural Balustrades"],
    craftDetails: "Turned by hand on indigenous lathe chucks by master artisans with intuitive tactile precision.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Rotational Mastery"
  },
  {
    id: "decorative-elements",
    name: "Decorative Wooden Elements & Jaalis",
    division: "Vaastukalaa",
    divisionLabel: "Vaastukalaa Craft Division",
    tagline: "Tactile relief panels, wooden brackets, and ceiling medallions.",
    description: "Custom geometric and floral jaali partitions, coffered wooden ceiling beams, carved cornice moldings, and heirloom wall panels.",
    deliverables: ["Architectural Partition Screens", "Bespoke Ceiling Beam Coffer Systems", "Intricate Wall Art Medallions", "Custom Antique Inlays"],
    craftDetails: "Translating traditional Gujarati stepwell motifs and jali patterns into contemporary spatial dividers.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Spatial Filigree"
  },
  {
    id: "customized-carving",
    name: "Customized Wooden Carving",
    division: "Vaastukalaa",
    divisionLabel: "Vaastukalaa Craft Division",
    tagline: "One-of-a-kind bespoke artistic woodwork commissioned by architects.",
    description: "Translating custom sketches, family insignias, sacred motifs, or bespoke architectural textures into solid teak or rosewood masterpieces.",
    deliverables: ["Artisan Sample Carvings", "1:1 Scale Paper Stencil Layouts", "Client In-Progress Atelier Reviews", "Hand-Polished Final Installation"],
    craftDetails: "Sculpted completely by hand using traditional carbon steel gouges without robotic CNC homogenization.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Artisan Signature"
  },
  {
    id: "handcrafted-products",
    name: "Traditional Handcrafted Wooden Products",
    division: "Vaastukalaa",
    divisionLabel: "Vaastukalaa Craft Division",
    tagline: "Artisanal decor, chests (patara), and heritage gifting artifacts.",
    description: "Curated heirloom artifacts including brass-banded Gujarati pataras (dowry chests), carved mirror frames, bookstands, and devotional accessories.",
    deliverables: ["Authentic Brass Hardware", "Solid Wood Joinery", "Natural Carnauba Wax Polish", "Archival Longevity"],
    craftDetails: "Functional craft pieces that grow richer with patina over decades of household living.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    accentNote: "Living Heirloom"
  }
];

export const CRAFT_STAGES: CraftStage[] = [
  {
    id: "raw-wood",
    stepNumber: "01",
    title: "RAW WOOD",
    tagline: "Selecting cured timber with seasoned grain density.",
    description: "We work primarily with sustainably sourced Central Indian Teak (CP Sagwan), Burma Teak, and indigenous Sheesham. Every timber beam is naturally seasoned to reach optimal moisture equilibrium, preventing warping across Ahmedabad's dry summers and humid monsoons.",
    tooling: "Moisture meters, timber grain calipers, traditional grading hand-planes",
    materiality: "Seasoned CP Teakwood, Indian Rosewood, Sheesham",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "design-study",
    stepNumber: "02",
    title: "DESIGN & GEOMETRY",
    tagline: "Harmonizing Shilpa Shastra with contemporary blueprints.",
    description: "Before a single chisel touches wood, the proportions are mapped on full-scale 1:1 paper stencils. Sacred Vastu alignments, Golden Ratio proportions, and structural joinery calculations are verified between our architects and master craftsmen.",
    tooling: "1:1 Drafting stencils, compass dividers, CAD coordination overlays",
    materiality: "Architectural blueprint vellum, graphite, geometric grids",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "carving",
    stepNumber: "03",
    title: "HAND CARVING",
    tagline: "The patient strike of wooden mallet against forged steel.",
    description: "Our artisans utilize over twenty distinct hand-ground gouges and chisels. The process begins with deep roughing cuts, followed by multi-tiered relief carving where intricate floral vines, temple kalash motifs, and geometric fretwork emerge from the solid wood.",
    tooling: "Tempered carbon steel chisels, buffalo-horn mallets, curvature gouges",
    materiality: "Solid heartwood block, natural wood fibers",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "detail-joinery",
    stepNumber: "04",
    title: "DETAIL & JOINERY",
    tagline: "Classical wood-to-wood joinery built to endure centuries.",
    description: "We reject superficial nails and flimsy screws in core structural elements. Instead, our atelier adheres to classical mortise-and-tenon, sliding dovetails, and pegged joints that accommodate wood's natural micro-movement without ever fracturing.",
    tooling: "Japanese pull saws, rebate planes, precision wooden marking gauges",
    materiality: "Interlocking timber tenons, wooden dowels, brass alignment pins",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "finishing",
    stepNumber: "05",
    title: "HAND FINISH & PATINA",
    tagline: "Multiple stages of hand-sanding and breathable organic oils.",
    description: "Finishing is never about encasing wood in synthetic plastic film. We meticulously hand-sand through ascending grit grades, applying natural beeswax, linseed rubs, and low-VOC breathable PU lacquers that enhance the natural golden luminescence of the teak grain.",
    tooling: "Natural horsehair buffing brushes, linen rags, micro-mesh sanders",
    materiality: "Carnauba wax, cold-pressed linseed oil, matte architectural sealant",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "space-installation",
    stepNumber: "06",
    title: "SPACE & INSTALLATION",
    tagline: "Where the crafted artifact anchors the contemporary habitat.",
    description: "The culmination: the finished architectural woodwork or temple sanctum is carefully transported and installed into its bespoke residential or commercial setting, perfectly aligned with lighting, floor finishes, and architectural sightlines.",
    tooling: "Laser leveling systems, concealed structural anchors, micro-adjusters",
    materiality: "Finished habitation, ambient illumination, sacred space",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "the-teak-courtyard-bungalow",
    title: "The Teak Courtyard Residence",
    category: "ARCHITECTURE",
    categoryLabel: "Architecture & Integrated Craft",
    division: "Collaborative Duality",
    location: "Bopal-Ambli Road, Ahmedabad",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "A modern monolithic concrete and exposed brick bungalow centered around a tranquil water courtyard, shaded by custom operable teakwood brise-soleil.",
    idea: "The client requested a private sanctuary in Ahmedabad's urban landscape that honored their joint family roots while maintaining a calm, minimalist architectural presence with zero visual clutter.",
    designApproach: "Bello Habitat designed a thermal-mass oriented floorplan utilizing north-facing courtyards and deep overhangs. Vaastukalaa crafted full-height vertical pivot screens from reclaimed teak that modulate afternoon sunlight into poetic shadow patterns.",
    craftsmanship: "The central living room features a custom 8-foot suspended Burma teak swing with hand-cast brass joints, paired with hand-planed ceiling rafters that draw eyes toward the open sky.",
    materials: ["Board-Formed Concrete", "Wire-Cut Red Brick", "Reclaimed CP Teak", "Kota Stone Flooring", "Cast Brass Hardware"],
    dimensionsOrArea: "8,500 sq.ft Built-Up",
    isFeatured: true
  },
  {
    id: "sanctum-of-light-mandir",
    title: "Sanctum of Light — Bespoke Home Mandir",
    category: "TEMPLES",
    categoryLabel: "Traditional Sacred Architecture",
    division: "Vaastukalaa",
    location: "Sindhu Bhavan Road, Ahmedabad",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "A temple sanctum sculpted in pure white Makrana marble and hand-carved sagwan timber, with recessed 24k gold leaf accents and sacred Shilpa Shastra proportions.",
    idea: "A devotional haven created within a luxury penthouse, requiring seamless acoustic isolation from the urban buzz while generating an immediate sense of divine quietude.",
    designApproach: "Vastu orientations dictated the Northeast placement. The sanctum balances floating minimalist stone pedestals with a handcrafted stepped ceiling dome (shikhar) carved entirely in the Vaastukalaa workshop.",
    craftsmanship: "Over 600 hours of artisanal hand-carving produced the continuous floral fretwork frieze and lotus medallion, illuminated by soft concealed 2700K warm LED light.",
    materials: ["Solid Sagwan (Teakwood)", "Makrana Pristine White Marble", "Hand-Beaten Brass Bells", "24K Gold Leaf Inlay"],
    dimensionsOrArea: "320 sq.ft Sanctum",
    isFeatured: true
  },
  {
    id: "the-serene-duplex-interior",
    title: "The Earth & Ash Modern Duplex",
    category: "INTERIORS",
    categoryLabel: "Luxury Residential Interiors",
    division: "Bello Habitat",
    location: "Bodakdev, Ahmedabad",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "A warm minimalist apartment interior blending micro-cement walls, lime-wash textures, fluted walnut paneling, and tailored low-profile furnishings.",
    idea: "Creating a tactile home for a family returning from abroad who sought international spatial elegance without sterile modernism.",
    designApproach: "Neutral earthy tones, concealed flush-door joinery, and expansive open-plan zones that celebrate Gujarat's natural daylight.",
    craftsmanship: "Custom hand-turned dining table in solid walnut with sculpted pedestal legs created by Vaastukalaa's woodturners using sangeda principles.",
    materials: ["Italian Travertine", "Micro-Concrete Plaster", "American Walnut", "Brushed Bronze", "Linen Fabrics"],
    dimensionsOrArea: "4,200 sq.ft Duplex",
    isFeatured: true
  },
  {
    id: "the-heritage-patio-villa",
    title: "The Veranda Farmhouse Estate",
    category: "RESIDENTIAL",
    categoryLabel: "Residential Architecture & Landscape",
    division: "Collaborative Duality",
    location: "Sanand Countryside, Gujarat",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "An expansive single-level country residence embracing climate-responsive verandas, pitched terracotta roofs, and handcrafted Gujarati jharokhas.",
    idea: "A weekend family retreat connecting generations, surrounded by organic mango groves and quiet agricultural horizon.",
    designApproach: "Deep 12-foot wraparound shaded colonnades keeping interior temperatures 6 degrees cooler during peak Gujarat summers without active AC.",
    craftsmanship: "Re-imagined Gujarati wooden brackets (todas) and hand-carved lintels supporting the roof overhangs, custom shaped in the Nana Chiloda workshop.",
    materials: ["Mangalore Clay Tiles", "Dhrangadhra Yellow Sandstone", "Weathered Teak Timber", "Lime Plaster"],
    dimensionsOrArea: "12,000 sq.ft Estate",
    isFeatured: false
  },
  {
    id: "artisanal-executive-headquarters",
    title: "Symphony Corporate Studio",
    category: "COMMERCIAL",
    categoryLabel: "Commercial Architecture & PMC",
    division: "Bello Habitat",
    location: "SG Highway, Ahmedabad",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "An executive headquarters balancing high-tech corporate acoustics with bespoke fluted woodwork and hand-carved heritage entrance reception portals.",
    idea: "A leading industrial consultancy required a corporate headquarters that communicated both technological rigor and deep regional integrity.",
    designApproach: "Strict Vastu zoning of director suites, ergonomic acoustic paneling, and an open collaborative central atrium.",
    craftsmanship: "The executive boardroom features a monolithic 22-foot single-slab timber conference table with concealed induction charging and brushed brass wire conduits.",
    materials: ["Acoustic Timber Louvers", "Dholpur Stone", "Low-Iron Architectural Glass", "Blackened Steel"],
    dimensionsOrArea: "14,500 sq.ft Office",
    isFeatured: false
  },
  {
    id: "heirloom-jhula-pavilion",
    title: "The Royal Swarna Jhula Pavilion",
    category: "TRADITIONAL CRAFT",
    categoryLabel: "Heirloom Craft & Custom Woodwork",
    division: "Vaastukalaa",
    location: "Gandhinagar Residence, Gujarat",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "A museum-grade suspended teakwood jhula with intricate peacock finials, sangeda turned pillars, and antique cast brass links.",
    idea: "Commissioned as an heirloom wedding gift destined to be passed down through generations within a prominent Gujarat family.",
    designApproach: "Designed to anchor a double-height courtyard, visible from both ground-floor living areas and first-floor gallery corridors.",
    craftsmanship: "Each curved backrest is chiseled from a single block of mature CP Teak, sealed with organic beeswax without toxic synthetic coats.",
    materials: ["Selected CP Sagwan (Teak)", "Hand-Forged Brass Peacock Chains", "Natural Velvet Upholstery", "Beeswax Sealant"],
    dimensionsOrArea: "Bespoke 7ft x 3.5ft Heirloom",
    isFeatured: true
  },
  {
    id: "haveli-jharokha-facade",
    title: "Carved Jharokha & Jaali Study",
    category: "WOODWORK",
    categoryLabel: "Custom Woodwork & Architectural Elements",
    division: "Vaastukalaa",
    location: "Heritage Quarter, Ahmedabad",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "A masterwork wooden jharokha featuring operable micro-fretwork shutters, stepped cornice brackets, and hand-finished antique brass studs.",
    idea: "Restoration and adaptation of traditional Pol house architectural elements into a luxury contemporary penthouse feature wall.",
    designApproach: "Harmonizing antique proportioning with modern concealed magnetic catches and indirect wall-grazing warm lighting.",
    craftsmanship: "Authentic mortise and tenon joinery requiring no external fasteners, allowing seasonal timber respiration.",
    materials: ["Century-Old Salvaged Teak", "Hand-Cut Jaali Mesh", "Brass Rivets", "Natural Linseed Polish"],
    dimensionsOrArea: "Custom Architectural Installation",
    isFeatured: false
  },
  {
    id: "biophilic-terrace-courtyard",
    title: "The Stepped Stone & Timber Penthouse Terrace",
    category: "INTERIORS",
    categoryLabel: "Interior & Landscape Synthesis",
    division: "Bello Habitat",
    location: "Shela, Ahmedabad",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "A sky terrace featuring natural slate water channels, cantilevered teak benches, and micro-climate landscaping overlooking the Ahmedabad skyline.",
    idea: "Transforming an exposed concrete rooftop into an outdoor living salon for stargazing, family gatherings, and morning meditation.",
    designApproach: "Deep planters with drip irrigation and indigenous flowering jasmine, cooled by an acoustic fountain and shaded by timber louvers.",
    craftsmanship: "Marine-treated teak decking with hidden fastener clips paired with carved sandstone water runnels.",
    materials: ["Marine Grade Teak", "Silver Grey Slate", "Copper Planter Liners", "Native Gujarat Flora"],
    dimensionsOrArea: "2,200 sq.ft Sky Terrace",
    isFeatured: false
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    num: "01",
    title: "Thoughtful Design",
    text: "Every wall, opening, and shadow is conceived with rigorous empathy for how the inhabitants move, rest, and gather across seasons."
  },
  {
    num: "02",
    title: "Honest Functionality",
    text: "Architecture must serve daily life without pretension. Storage is intuitive, circulation is effortless, and natural ventilation cools naturally."
  },
  {
    num: "03",
    title: "Timeless Aesthetics",
    text: "We avoid ephemeral design fads. Our visual language is anchored in balanced proportions, natural patinas, and quiet tactile luxury."
  },
  {
    num: "04",
    title: "Living Craftsmanship",
    text: "A machine can replicate form, but only the artisan's hand imbues spirit. Our 45+ year woodworking lineage breathes soul into every room."
  },
  {
    num: "05",
    title: "Cultural Identity & Vastu",
    text: "Rooted in Ahmedabad's rich architectural ethos, we honor sacred spatial geometries without compromising contemporary clarity."
  },
  {
    num: "06",
    title: "Practical PMC Execution",
    text: "A poetic sketch is only as good as its site execution. We maintain unyielding oversight over materials, costs, engineering, and timelines."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "DISCOVER",
    subtitle: "Understanding Life & Land",
    description: "In-depth dialogue to comprehend your family's daily rhythms, spiritual values, lifestyle aspirations, and site micro-climate."
  },
  {
    step: "02",
    name: "ENVISION",
    subtitle: "Architectural Direction",
    description: "Developing the overarching spatial concept, massing volumes, solar orientation, and the synergy between built form and open landscape."
  },
  {
    step: "03",
    name: "DESIGN",
    subtitle: "Precision Detailing",
    description: "Detailed 2D working blueprints, 3D experiential renders, structural engineering coordination, and exact material schedules."
  },
  {
    step: "04",
    name: "CRAFT",
    subtitle: "Atelier Prototyping",
    description: "Hand-carving custom mandirs, swings, and millwork in our Nana Chiloda workshop, with client prototype review sessions."
  },
  {
    step: "05",
    name: "EXECUTE",
    subtitle: "Rigorous Site PMC",
    description: "On-site quality supervision, contractor management, daily progress auditing, and strict fidelity to architectural drawings."
  },
  {
    step: "06",
    name: "DELIVER",
    subtitle: "The Living Habitation",
    description: "Final acoustic and lighting tuning, installation of heirloom woodcraft, and seamless handover of your timeless space."
  }
];

export const WHY_US_PILLARS = [
  {
    title: "CRAFTSMANSHIP",
    badge: "45+ Year Woodworking Lineage",
    description: "Carrying four decades of master woodworking, temple carving, and traditional sangeda joinery directly into modern residences without middlemen."
  },
  {
    title: "PERSONALIZATION",
    badge: "Zero Generic Templates",
    description: "Every home, temple, and commercial space is crafted exclusively around the client's spiritual nuances, spatial requirements, and family legacy."
  },
  {
    title: "DESIGN + EXECUTION",
    badge: "Integrated Turnkey PMC",
    description: "We bridge the historic divide between visionary architectural concept and gritty ground-level site execution with unyielding accountability."
  },
  {
    title: "HERITAGE",
    badge: "Deep Gujarat Cultural Roots",
    description: "Steeped in Ahmedabad's UNESCO World Heritage craftsmanship traditions—from stepwell geometries to wooden pol house carvings."
  },
  {
    title: "MULTIDISCIPLINARY",
    badge: "Unified Practice Under One Roof",
    description: "Architecture, interior design, landscape, sacred Vastu consultancy, custom woodwork, and project management synchronized effortlessly."
  },
  {
    title: "ATTENTION TO DETAIL",
    badge: "Obsession with Proportion & Grain",
    description: "From timber moisture calibration to 1mm joinery tolerances and micro-shadow reveals, perfection is our fundamental baseline."
  }
];

export const TESTIMONIAL_PLACEHOLDERS = [
  {
    id: "quote-1",
    clientLabel: "[Client Testimonial — Private Residence Patron]",
    projectType: "Bespoke Bungalow Architecture & Custom Mandir",
    location: "Bopal-Ambli, Ahmedabad",
    quote: "The seamless integration between Bello Habitat's modern architectural vision and Vaastukalaa's traditional wood carving was unlike anything we experienced with other firms. Our home feels simultaneously contemporary and deeply grounded in our ancestral heritage.",
    note: "Verified client feedback will replace this editorial placeholder."
  },
  {
    id: "quote-2",
    clientLabel: "[Client Testimonial — Penthouse Interior Client]",
    projectType: "Luxury Duplex Interior & Heirloom Jhula",
    location: "Sindhu Bhavan Road, Ahmedabad",
    quote: "Visiting their Nana Chiloda workshop and seeing our handcrafted teakwood swing and mandir carved before our eyes gave us immense appreciation for true Indian craftsmanship. Their PMC team managed the entire execution flawlessly.",
    note: "Verified client feedback will replace this editorial placeholder."
  },
  {
    id: "quote-3",
    clientLabel: "[Client Testimonial — Commercial Space Director]",
    projectType: "Corporate Studio & Executive Millwork",
    location: "SG Highway, Ahmedabad",
    quote: "Bello Habitat Consultancy understood how to marry corporate technological efficiency with warm, prestigious handcrafted woodwork. The attention to detailing, Vastu alignment, and acoustic performance exceeded our highest expectations.",
    note: "Verified client feedback will replace this editorial placeholder."
  }
];
