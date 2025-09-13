# Interactive Fraction Conversion Applet - Build Instructions

## Project Overview
Build an interactive educational applet that teaches students how to convert unlike fractions to like fractions. The applet follows a step-by-step visual tutorial with 26 total screens across 3 main steps.

## Learning Objective
Students will learn to convert unlike fractions (2/6, 3/4) to like fractions (4/12, 9/12) through:
1. Finding the LCM of denominators
2. Converting the first fraction using the LCM
3. Converting the second fraction using the LCM

## File Structure (MANDATORY COMPLIANCE)
```
project-root/
├── index.html              ✅ MANDATORY - Entry point with step selection
├── step1.html              📄 LCM calculation screens (1-6)
├── step2.html              📄 First fraction conversion (7-17)
├── step3.html              📄 Second fraction conversion (18-26)
├── data.js                 ✅ MANDATORY - Translations with const appData = {}
├── assets/                 ✅ MANDATORY
│   └── audio/
│       ├── click.mp3       🔊 Interaction feedback
│       └── success.mp3     🔊 Step completion
└── instructions.md         📋 This file
```

## Design Requirements (STRICT COMPLIANCE)

### Typography
- Font family: `Arial, sans-serif` (MANDATORY)

### Color Palette (EXACT HEX VALUES)
```css
--color-correct-base: #219150;    /* Green for 6-related elements */
--color-orange-base: #FF7F3F;     /* Orange for 4-related elements */
--color-blue-base: #3498DB;       /* Blue for LCM/result elements */
--color-gold-base: #F1C40F;       /* Gold for action buttons */
--color-white-base: #FFFFFF;      /* White backgrounds */
```

### Responsive Design
- Must work at: 960×540, 1920×1080, 3840×2160
- No horizontal/vertical scrollbars allowed
- Use `clamp()` for responsive scaling

### Interactive Elements
- Action buttons MUST have tap animations (`transform: scale(0.95)` on active)
- Action buttons MUST have pulsating glow effects
- Text in interactive elements MUST have `pointer-events: none` and shadows
- Audio feedback MANDATORY for all student interactions

## Screen-by-Screen Content

### Index.html - Step Selection Screen
**Layout:**
- Left sidebar: Step 1, Step 2, Step 3 buttons (same as storyboard)
- Main area: Shows "2/6, 3/4" fractions
- Bottom: "Tap each step to learn how to convert unlike fractions to like fractions."

**Interactions:**
- Click Step 1 → Navigate to step1.html (always available)
- Click Step 2 → Navigate to step2.html (DISABLED until Step 1 complete)
- Click Step 3 → Navigate to step3.html (DISABLED until Step 2 complete)

### Step1.html - Find LCM (Screens 1-6)
**Content Flow:**
1. **Screen 1:** Show "Find the LCM of two denominators" + "6, 4"
2. **Screen 2:** Begin LCM calculation table - Add division by 2: "6, 4 | 2" with "3, 2" below
3. **Screen 3:** Continue LCM table - Add division by 3: "3, 2 | 3" with "1, 2" below  
4. **Screen 4:** Complete LCM table - Final division by 2: "1, 2 | 2" with "1, 1" below
5. **Screen 5:** Show calculation: "LCM of 6 and 4 = 2 × 3 × 2 = 12"
6. **Screen 6:** Full LCM calculation table with color-coded prime factors and final result

**Visual Elements:**
- LCM calculation table (similar to long division format)
- Prime factors highlighted in blue
- Sequential number appearance with each tap
- Color coding: Green (6), Orange (4), Blue (factors)

**Navigation:**
- Tap anywhere to advance to next screen within step
- Back to index.html option
- Continue to Step 2 option

### Step2.html - Convert First Fraction (Screens 7-17)
**Content Flow:**
7. **Screen 7:** "Find the equivalent fraction of the first fraction using the LCM as the denominator"
8. **Screen 8:** Show "2/6" highlighted
9. **Screen 9:** Add equals sign: "2/6 ="
10. **Screen 10:** Show "2 × 2" in numerator position
11. **Screen 11:** Show "6 × 2" in denominator position
12. **Screen 12:** Add equals: "2×2/6×2 ="
13. **Screen 13:** Show result: "4/12"
14. **Screen 14-17:** Progressive visual showing transformation with arrow

**Visual Elements:**
- Large fraction displays with proper mathematical formatting
- Multiplication steps shown clearly
- Arrow showing transformation from 2/6 to 4/12
- Green color coding for original fraction, blue for result

**Reusable Components:**
- Fraction component (numerator, line, denominator)
- Multiplication expression component
- Arrow/transformation indicator

### Step3.html - Convert Second Fraction (Screens 18-26)
**Content Flow:**
18. **Screen 18:** "Find the equivalent fraction of the second fraction using the LCM as the denominator"
19. **Screen 19:** Show "3/4" highlighted
20. **Screen 20:** Add equals: "3/4 ="
21. **Screen 21:** Show "3 × 3" in numerator
22. **Screen 22:** Show "4 × 3" in denominator
23. **Screen 23:** Add equals: "3×3/4×3 ="
24. **Screen 24:** Show result: "9/12"
25. **Screen 25:** Show both results: "4/12, 9/12"
26. **Screen 26:** Final screen: "Unlike Fractions → Like Fractions" with before/after comparison

**Visual Elements:**
- Same fraction component structure as Step 2
- Orange color coding for original fraction, blue for result
- Final comparison showing transformation from "2/6, 3/4" to "4/12, 9/12"

## Animation Specifications

### "Appear" Animation
```css
.appear-animation {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.appear-animation.visible {
  opacity: 1;
}
```

### Sequential Timing
- Each new element appears 0.3s after previous
- User can tap to speed up or advance to next screen
- Smooth transitions between all states

### Mandatory Button Animations
```css
.action-button {
  transition: transform 0.2s ease;
  animation: pulse 2s infinite;
  box-shadow: 0 0 10px rgba(241, 196, 15, 0.5);
}

.action-button:active {
  transform: scale(0.95);
}

@keyframes pulse {
  0% { box-shadow: 0 0 10px rgba(241, 196, 15, 0.5); }
  50% { box-shadow: 0 0 20px rgba(241, 196, 15, 0.8); }
  100% { box-shadow: 0 0 10px rgba(241, 196, 15, 0.5); }
}
```

## Component Architecture

### Reusable Components Needed

**1. Fraction Component**
```javascript
// Properties: numerator, denominator, color, size
// Handles: proper mathematical formatting, responsive sizing
// Styling: fraction line, aligned numbers, shadows on text
```

**2. Step Navigation Component**
```javascript
// Properties: currentStep, totalSteps
// Handles: step highlighting, navigation between files
// Styling: sidebar layout, active state indicators
```

**3. Animation Controller**
```javascript
// Handles: sequential element appearance, timing control
// Properties: elements array, timing delays, user interaction
```

## Translation Structure (data.js)
```javascript
const appData = {
  en: {
    "standard-ui": {
      buttons: {
        next: "Next",
        back: "Back",
        continue: "Continue"
      },
      labels: {
        step: "Step"
      },
      navigation: {
        step_1: "Step 1",
        step_2: "Step 2", 
        step_3: "Step 3"
      }
    },
    "content-ui": {
      instructions: {
        main_instruction: "Tap each step to learn how to convert unlike fractions to like fractions.",
        find_lcm: "Find the LCM of two denominators.",
        convert_first: "Find the equivalent fraction of the first fraction using the LCM as the denominator.",
        convert_second: "Find the equivalent fraction of the second fraction using the LCM as the denominator."
      },
      math_content: {
        lcm_calculation: "LCM of 6 and 4 = 2 × 3 × 2 = 12",
        unlike_fractions: "Unlike Fractions",
        like_fractions: "Like Fractions"
      },
      feedback: {
        step_complete: "Step completed!",
        tap_to_continue: "Tap to continue"
      }
    }
  }
};

export default appData;
```

## Build Process Recommendations

### Phase 1: Setup & Structure
1. Create all 4 HTML files with basic structure
2. Set up data.js with all required translations
3. Create assets folder with placeholder audio files
4. Implement basic navigation between files

### Phase 2: Core Components
1. Build reusable Fraction component
2. Create Step Navigation sidebar
3. Set up screen progression system within each step file
4. Implement basic responsive layout

### Phase 3: Content & Animation
1. Add all mathematical content for each screen
2. Implement sequential "appear" animations
3. Add proper color coding and styling
4. Test animation timing and user interaction

### Phase 4: Polish & Compliance
1. Add mandatory button animations and audio feedback
2. Verify responsive behavior across all test resolutions
3. Ensure offline functionality
4. Final testing of complete user flow