# BENTUCO Web Interface - Visual Layout Guide

## Results Page Layout (When Bentuco is Selected)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MATERIAL RECOMMENDATIONS (Page Header)                    │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  Material Type Tabs (Navigation)                                             │
│  ┌──────┐ ┌───────────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌────────┐              │
│  │  🏗️  │ │    🏢     │ │ 🧱   │ │ 🏠   │ │  📏  │ │  🏛️   │              │
│  │Floor │ │Foundation │ │ Wall │ │ Roof │ │ Beam │ │ Column │              │
│  └──────┘ └───────────┘ └──────┘ └──────┘ └──────┘ └────────┘              │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ [Material Details Section - Currently showing Floor recommendations]         │
│                                                                              │
│  Left Side:                          Right Side:                            │
│  [Floor Image]                       Material Title with Icon               │
│  Floor Rating: A+                    Description of material                │
│  Lifespan: 50+ Years                                                        │
│                                      🔴 Best for These Hazards:             │
│                                      Ground shaking, typhoon, flood, ashfall │
│                                                                              │
│                                      ✓ Advantages:                          │
│                                      • Excellent seismic resistance          │
│                                      • Very strong and durable               │
│                                      • Fire-resistant and water-resistant   │
│                                                                              │
│                                      ✗ Considerations:                      │
│                                      • Heavy (needs strong foundation)       │
│                                      • Higher cost than alternatives         │
│                                      • Requires skilled labor                │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                  ⛰️ BENTUCO - Multi-Hazard-Resilient Building System        │
│                         [BENTUCO SPECIFIC SECTION]                          │
│                                                                              │
│  Design Approach Box: [Blue-tinted background]                              │
│  📋 Design Approach:                                                        │
│    • Stay anchored (typhoon uplift + shaking)...                           │
│    • Stay stiff and ductile (RC with proper...)...                         │
│    • Stay elevated or water-tolerant (flooding)...                         │
│    • Keep roof light and well-fastened...                                  │
│    • Avoid weak links at openings...                                       │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                              │
│  🏗️ Floors:                                                                │
│  ✓ Recommended: Steel-Reinforced Concrete (RCC) Floor                      │
│    Best overall balance for earthquakes, ash load, and typhoon stability.  │
│    Dense concrete resists water; reinforcement provides seismic ductility; │
│    supports ash accumulation; resists uplift when tied into frame.         │
│                                                                              │
│  ⚡ Alternative 1: Cement Backer Board Floor                               │
│    Non-combustible, water-resistant underlayment. Best used as substrate   │
│    layer, not main structural floor.                                       │
│                                                                              │
│  ⚡ Alternative 2: Plain Cement Concrete (PCC)                             │
│    Cost-effective but less crack-resistant than RCC. Good compression      │
│    strength for moderate conditions.                                       │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                              │
│  🧱 Walls:                                                                 │
│  ✓ Recommended: Reinforced Concrete (RC) Wall System                       │
│    Effective lateral system for ground shaking; resists high wind pressure │
│    and debris impact; moisture-tolerant for floods; supports increased     │
│    loads from ash.                                                         │
│                                                                              │
│  ⚡ Alternative: Confined Masonry Wall System                              │
│    Masonry units confined by RC tie columns and beams. Improved seismic    │
│    performance vs. unreinforced. Generally less ductile than full RC walls.│
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                              │
│  [Similar format for Roof, Foundation, Columns, Structural Members...]     │
│                                                                              │
│  ⚠️ Important Note:                                                         │
│  This is a conceptual design/selection document. Final sizing,              │
│  reinforcement, connections, and detailing must be done by a licensed      │
│  civil/structural engineer following applicable building codes and local   │
│  regulations.                                                               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ Safety Notice Box:                                                           │
│ These recommendations are based on general hazard assessments. Always       │
│ consult with licensed engineers...                                          │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ Navigation Buttons:                                                          │
│ [🏠 Back to Home]  [🔄 New Assessment]                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Key Styling Elements

### Color Scheme
- **Recommended** (✓): `#4CAF50` (Green)
- **Alternative** (⚡): `#FF9800` (Orange)
- **Section Background**: `rgba(229, 196, 138, 0.1)` (Light tan)
- **Border Accent**: `var(--highlight)` (Main theme color)
- **Design Approach Box**: `rgba(100, 149, 237, 0.1)` (Light blue)
- **Description Text**: `#888` (Gray muted)

### Typography Hierarchy
```
⛰️ BENTUCO - Multi-Hazard-Resilient Building System      [h4 - Title]
                                                          
📋 Design Approach Box                                    [Section Box]
                                                          
🏗️ Floors                                                 [h5 - Component]
✓ Recommended: Steel-Reinforced Concrete Floor            [Bold]
Description text in regular weight...                     [Regular]
                                                          
⚡ Alternative 1: Cement Backer Board Floor              [Bold]
Short description text...                                 [Italic gray]
```

### Information Density
- Each component gets a dedicated h5 section
- Recommended option prominently displayed first
- Alternatives clearly marked with ⚡ icon
- Performance details provided in italics
- Easy scanning with bold headings and consistent formatting

---

## Responsive Design Considerations

### Desktop (> 768px)
- Full layout with left/right material details
- BENTUCO section displays in full width below
- Smooth scrolling between sections

### Mobile (< 768px)
- Material tabs stack horizontally with scrolling
- BENTUCO section content may scroll vertically
- Typography scales down appropriately
- Touch-friendly spacing maintained

---

## Expected Behavior

### User Interaction Flow:
1. User selects "Upland" area type
2. Barangay search shows "Bentuco" with description
3. Click on Bentuco to select
4. Click "NEXT →" button
5. Results page loads with:
   - Standard material recommendation tabs at top
   - Below all tabs: Comprehensive BENTUCO section
   - All 8 hazards listed at top of page
   - Design approach highlighted
   - Components with recommendations + alternatives

### Navigation:
- Users can switch between material type tabs (Floor, Foundation, etc.)
- BENTUCO section remains visible as they scroll
- Back button returns to location selection
- New Assessment button resets the entire workflow

