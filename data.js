// Translation data for Convert Unlike to Like Fractions applet
// Follows mandatory snake_case naming and const appData export structure

const appData = {
  en: {
    "standard-ui": {
      buttons: {
        next: "Next",
        back: "Back", 
        continue: "Continue",
        start: "Start"
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
        like_fractions: "Like Fractions",
        example_fractions: "2/6, 3/4"
      },
      feedback: {
        step_complete: "Step completed!",
        tap_to_continue: "Tap to continue",
        step_locked: "Complete previous step first"
      }
    }
  }
};

export default appData;
