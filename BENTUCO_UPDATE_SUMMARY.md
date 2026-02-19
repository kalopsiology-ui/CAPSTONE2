# BENTUCO System Data Update Summary

## Overview
Successfully updated the GIA (Geohazard-Informed Architecture) database with the comprehensive **BENTUCO - Multi-Hazard-Resilient Building System** documentation.

**Location Context:** Bentuco is a hazard-prone barangay in an upland area vulnerable to:
- Flooding
- Strong ground shaking/earthquakes
- Volcanic ash fall
- Typhoons
- Erosion/landslides
- Drought-related soil movement

---

## Files Updated

### 1. **data/materials.json** - Building Components Library
Significantly expanded with BENTUCO-specific recommendations and alternatives:

#### **Floor Systems (4 options)**
- ✅ **Steel-Reinforced Concrete (RCC) Floor** (Recommended)
  - Performance data for: flood, ground-shaking, ashfall, typhoon
- Cement Backer Board Floor (Alternative)
- Plain Cement Concrete Floor (Alternative)
- Reinforced Concrete Floor System (Structural system)
- Suspended/Raised Floor (Alternative system)
- Timber Floor System (Secondary option)

#### **Foundation Systems (3 options)**
- ✅ **Pile Foundation with Reinforced Concrete** (Recommended)
  - Performance across: flood, ground-shaking, soil-erosion, drought, ashfall
- Pier Foundation with Reinforced Concrete (Alternative)
- Plain Concrete with Stone Aggregate (Secondary)

#### **Wall Systems (3 options)**
- ✅ **Reinforced Concrete (RC) Wall System** (Recommended)
  - Performance across: ground-shaking, typhoon, flood, ashfall
- Confined Masonry Wall System (Alternative)
- Concrete Hollow Block (CHB) Wall (Secondary)

#### **Roof Systems (4 options)**
- ✅ **Hip Roof with Metal Roofing** (Recommended)
  - Aerodynamic form for multi-directional wind performance
  - Efficient ash shedding capability
- Metal Roofing Material (Recommended roofing)
  - Lightweight, high wind resistance, excellent ash runoff
- Dutch Gable Roof (Secondary - complex joints problematic)
- Clay Tile Roofing (Secondary - too heavy for seismic areas)

#### **Structural Members**
- ✅ **Circular Reinforced Concrete Columns** (Recommended)
  - Uniform strength in all directions
  - Better confinement and multi-directional shaking resistance
- Stilt Columns for flood elevation (Secondary)
- Rectangular Columns (Alternative)
- **Reinforced Concrete Tie Beams** (Recommended)
  - Reduces column spreading in earthquakes
  - Prevents frame separation
- **Reinforced Concrete Lintel Beams** (Secondary but important)
  - Prevents collapse above openings
  - Critical for structural continuity

---

### 2. **data/hazards.json** - Hazard Database
Added two missing hazard types relevant to BENTUCO:
- ✅ **Soil Erosion** - Surface soil and topsoil loss from water/wind
- ✅ **Drought / Soil Movement** - Dry spell conditions causing shrinkage and settlement

Also improved descriptions for existing hazards:
- Enhanced specificity on earthquake-induced vs. rain-induced landslides
- Clarified volcanic ash fall mechanisms
- Added context about debris impact for typhoons

**Total Hazards: 11** (previously 9)

---

### 3. **data/barangays.json** - Bentuco Profile
Completely updated Bentuco barangay entry with:

#### Updated Hazard Profile
All 8 applicable hazards documented:
- rain-landslide
- earthquake-landslide  
- flood
- ground-shaking
- ashfall
- typhoon
- soil-erosion
- drought

#### Added BENTUCO System Data
New `bentuco_system` object containing:

**System Information:**
- Full system name and purpose
- Design disclaimer (requires structural engineer for final design)

**Design Approach - 5 Key Principles:**
1. Stay anchored (typhoon uplift + shaking) with robust foundation
2. Stay stiff and ductile (RC with proper reinforcement) for earthquakes
3. Stay elevated or water-tolerant (flooding) with corrosion protection
4. Keep roof light and well-fastened while managing rain/ash
5. Avoid weak links at openings and member connections

**Recommended Components:**
- Floors: Steel-Reinforced Concrete (RCC) with RC floor system
- Walls: Reinforced Concrete (RC) Wall System
- Roof: Hip Roof with Metal Roofing
- Foundation: Pile Foundation with Reinforced Concrete
- Columns: Circular Reinforced Concrete with confinement
- Structural Members: Tie Beams and Lintel Beams

---

## Key Design Features for Bentuco

### Why These Choices?

**Steel-Reinforced Concrete Floors**
- Dense concrete tolerates flood exposure
- Reinforcement provides seismic ductility
- Carries ash accumulation loads
- Resists typhoon-induced uplifting

**Pile Foundations**
- Bypasses flood-weakened surface soils
- Reduces differential settlement in earthquakes
- Avoids erodible topsoil layers
- Strong uplift resistance for typhoons
- Supports ash load additions

**RC Wall System**
- Effective lateral resistance for ground shaking
- High wind pressure and debris impact resistance
- Moisture tolerant for flood conditions
- Supports additional loads from ash

**Hip Roof with Metal Roofing**
- Aerodynamic shape reduces wind uplift
- Multi-directional wind performance
- Smooth metal surface sheds ash effectively
- Lightweight reduces seismic forces
- Efficient water drainage

**Circular Reinforced Concrete Columns**
- No weak structural axis (uniform in all directions)
- Better confinement for earthquake ductility
- Smooth wind flow reduces localized pressure
- Better support for heavy ash loads

**Tie & Lintel Beams**
- Distribute loads and prevent column spreading
- Prevent collapse above openings
- Create structural continuity
- Critical for seismic performance

---

## Implementation Notes

This documentation represents:
- **Conceptual Design Level** - Component selection and rationale
- **Not Final Design** - Must be detailed by licensed structural engineer
- **Code Compliance Required** - Follow all applicable building codes
- **Professional Engineering** - Sizing, reinforcement, connections require expert design
- **Site Investigation Required** - Geotechnical investigation needed for final foundation design

---

## Data Structure Impact

### For UI/Applications:
- Filter by hazard: Will now show 8 hazards for Bentuco
- Component recommendations: Each lists priority (Recommended/Alternative/Secondary)
- Performance details: Each component now has hazard-specific performance descriptions
- Decision support: Pro/con lists support informed material selection

### For Analysis:
- Bentuco-specific building system recommendations available
- Performance matrices for each component across 8 hazard types
- Comparative analysis possible (why recommended vs. alternative options)
- Design principles documented for reference

---

## Quality Assurance
✅ All JSON files validated for syntax
✅ Cross-referenced hazards between files
✅ Comprehensive coverage of 7 building component types
✅ Documented alternatives and reasoning
✅ Performance data for all major hazard types
✅ Professional engineering disclaimers included

