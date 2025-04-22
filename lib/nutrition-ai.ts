// nutrition-ai.ts
const FALLBACK_PLANS = {
  lose: {
    dailyCalories: 1800,
    macros: { protein: 135, carbs: 157, fat: 60 },
    meals: [
      {
        name: "Breakfast",
        time: "8:00 AM",
        foods: [
          { name: "Greek Yogurt", portion: "1 cup", calories: 150, protein: 20, carbs: 8, fat: 5 },
          { name: "Berries", portion: "1/2 cup", calories: 40, protein: 0.5, carbs: 10, fat: 0.2 },
          { name: "Almonds", portion: "1 oz", calories: 160, protein: 6, carbs: 6, fat: 14 },
        ],
        totalCalories: 350,
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        foods: [
          { name: "Grilled Chicken Breast", portion: "4 oz", calories: 180, protein: 35, carbs: 0, fat: 4 },
          { name: "Quinoa", portion: "1/2 cup", calories: 110, protein: 4, carbs: 20, fat: 2 },
          { name: "Mixed Vegetables", portion: "1 cup", calories: 80, protein: 2, carbs: 15, fat: 1 },
        ],
        totalCalories: 370,
      },
      {
        name: "Snack",
        time: "3:30 PM",
        foods: [
          { name: "Apple", portion: "1 medium", calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
          { name: "Peanut Butter", portion: "1 tbsp", calories: 95, protein: 3.5, carbs: 3, fat: 8 },
        ],
        totalCalories: 190,
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        foods: [
          { name: "Baked Salmon", portion: "5 oz", calories: 240, protein: 28, carbs: 0, fat: 14 },
          { name: "Brown Rice", portion: "1/2 cup", calories: 110, protein: 2.5, carbs: 23, fat: 1 },
          { name: "Steamed Broccoli", portion: "1 cup", calories: 55, protein: 4, carbs: 11, fat: 0.6 },
        ],
        totalCalories: 405,
      },
      {
        name: "Evening Snack",
        time: "9:00 PM",
        foods: [
          { name: "Cottage Cheese", portion: "1/2 cup", calories: 90, protein: 12, carbs: 3, fat: 2.5 },
          { name: "Pineapple", portion: "1/2 cup", calories: 40, protein: 0.4, carbs: 10, fat: 0.1 },
        ],
        totalCalories: 130,
      },
    ],
    recommendations: [
      "Focus on protein-rich foods to maintain muscle mass during weight loss",
      "Stay hydrated by drinking at least 8 glasses of water daily",
      "Limit processed foods and added sugars",
      "Include fiber-rich foods to help with satiety",
      "Consider eating smaller, more frequent meals to manage hunger",
    ],
  },
  maintain: {
    dailyCalories: 2200,
    macros: { protein: 110, carbs: 248, fat: 73 },
    meals: [
      {
        name: "Breakfast",
        time: "7:30 AM",
        foods: [
          { name: "Oatmeal", portion: "1 cup cooked", calories: 150, protein: 5, carbs: 27, fat: 3 },
          { name: "Banana", portion: "1 medium", calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
          { name: "Almond Butter", portion: "1 tbsp", calories: 98, protein: 3.4, carbs: 3, fat: 9 },
        ],
        totalCalories: 353,
      },
      {
        name: "Lunch",
        time: "12:00 PM",
        foods: [
          { name: "Turkey Sandwich", portion: "1 sandwich", calories: 350, protein: 25, carbs: 40, fat: 10 },
          { name: "Mixed Greens Salad", portion: "2 cups", calories: 15, protein: 1, carbs: 3, fat: 0.2 },
          { name: "Olive Oil Dressing", portion: "1 tbsp", calories: 120, protein: 0, carbs: 0, fat: 14 },
        ],
        totalCalories: 485,
      },
      {
        name: "Snack",
        time: "3:00 PM",
        foods: [
          { name: "Greek Yogurt", portion: "1 cup", calories: 150, protein: 20, carbs: 8, fat: 5 },
          { name: "Granola", portion: "1/4 cup", calories: 120, protein: 3, carbs: 15, fat: 5 },
        ],
        totalCalories: 270,
      },
      {
        name: "Dinner",
        time: "6:30 PM",
        foods: [
          { name: "Grilled Chicken", portion: "5 oz", calories: 225, protein: 43, carbs: 0, fat: 5 },
          { name: "Sweet Potato", portion: "1 medium", calories: 115, protein: 2, carbs: 26, fat: 0.1 },
          { name: "Roasted Vegetables", portion: "1 cup", calories: 80, protein: 2, carbs: 15, fat: 1 },
        ],
        totalCalories: 420,
      },
      {
        name: "Evening Snack",
        time: "8:30 PM",
        foods: [
          { name: "Dark Chocolate", portion: "1 oz", calories: 170, protein: 2, carbs: 13, fat: 12 },
          { name: "Strawberries", portion: "1 cup", calories: 50, protein: 1, carbs: 12, fat: 0.4 },
        ],
        totalCalories: 220,
      },
    ],
    recommendations: [
      "Maintain a balanced diet with a variety of foods from all food groups",
      "Stay consistent with meal timing to regulate hunger and energy levels",
      "Include both plant and animal sources of protein",
      "Choose whole grains over refined carbohydrates",
      "Practice mindful eating to avoid overeating",
    ],
  },
  gain: {
    dailyCalories: 2800,
    macros: { protein: 175, carbs: 315, fat: 93 },
    meals: [
      {
        name: "Breakfast",
        time: "7:00 AM",
        foods: [
          { name: "Whole Eggs", portion: "3 large", calories: 210, protein: 18, carbs: 1, fat: 15 },
          { name: "Whole Grain Toast", portion: "2 slices", calories: 160, protein: 6, carbs: 30, fat: 2 },
          { name: "Avocado", portion: "1/2 medium", calories: 120, protein: 1, carbs: 6, fat: 11 },
          { name: "Fruit Smoothie", portion: "16 oz", calories: 250, protein: 5, carbs: 50, fat: 3 },
        ],
        totalCalories: 740,
      },
      {
        name: "Mid-Morning Snack",
        time: "10:00 AM",
        foods: [
          { name: "Protein Shake", portion: "1 serving", calories: 150, protein: 25, carbs: 5, fat: 3 },
          { name: "Banana", portion: "1 large", calories: 120, protein: 1.5, carbs: 30, fat: 0.5 },
          { name: "Peanut Butter", portion: "2 tbsp", calories: 190, protein: 7, carbs: 6, fat: 16 },
        ],
        totalCalories: 460,
      },
      {
        name: "Lunch",
        time: "1:00 PM",
        foods: [
          { name: "Grilled Steak", portion: "6 oz", calories: 420, protein: 50, carbs: 0, fat: 24 },
          { name: "Brown Rice", portion: "1 cup", calories: 220, protein: 5, carbs: 45, fat: 2 },
          { name: "Steamed Vegetables", portion: "1 cup", calories: 80, protein: 2, carbs: 15, fat: 1 },
        ],
        totalCalories: 720,
      },
      {
        name: "Afternoon Snack",
        time: "4:00 PM",
        foods: [
          { name: "Trail Mix", portion: "1/3 cup", calories: 270, protein: 6, carbs: 25, fat: 18 },
          { name: "Greek Yogurt", portion: "1 cup", calories: 150, protein: 20, carbs: 8, fat: 5 },
        ],
        totalCalories: 420,
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        foods: [
          { name: "Salmon Fillet", portion: "6 oz", calories: 350, protein: 34, carbs: 0, fat: 23 },
          { name: "Quinoa", portion: "1 cup", calories: 220, protein: 8, carbs: 39, fat: 4 },
          { name: "Roasted Vegetables", portion: "1.5 cups", calories: 120, protein: 3, carbs: 20, fat: 2 },
        ],
        totalCalories: 690,
      },
    ],
    recommendations: [
      "Eat calorie-dense foods to help reach your calorie surplus",
      "Focus on nutrient-rich foods rather than empty calories",
      "Consume protein with each meal to support muscle growth",
      "Consider eating before bed to prevent overnight catabolism",
      "Stay consistent with your eating schedule",
    ],
  },
  muscle: {
    dailyCalories: 2600,
    macros: { protein: 195, carbs: 260, fat: 72 },
    meals: [
      {
        name: "Breakfast",
        time: "6:30 AM",
        foods: [
          { name: "Egg Whites", portion: "4 large", calories: 70, protein: 14, carbs: 1, fat: 0.2 },
          { name: "Whole Eggs", portion: "2 large", calories: 140, protein: 12, carbs: 1, fat: 10 },
          { name: "Oatmeal", portion: "1 cup cooked", calories: 150, protein: 5, carbs: 27, fat: 3 },
          { name: "Blueberries", portion: "1/2 cup", calories: 40, protein: 0.5, carbs: 10, fat: 0.2 },
        ],
        totalCalories: 400,
      },
      {
        name: "Mid-Morning",
        time: "9:30 AM",
        foods: [
          { name: "Protein Shake", portion: "1 serving", calories: 150, protein: 25, carbs: 5, fat: 3 },
          { name: "Banana", portion: "1 medium", calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
        ],
        totalCalories: 255,
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        foods: [
          { name: "Grilled Chicken Breast", portion: "6 oz", calories: 270, protein: 53, carbs: 0, fat: 6 },
          { name: "Sweet Potato", portion: "1 medium", calories: 115, protein: 2, carbs: 26, fat: 0.1 },
          { name: "Broccoli", portion: "1 cup", calories: 55, protein: 4, carbs: 11, fat: 0.6 },
        ],
        totalCalories: 440,
      },
      {
        name: "Pre-Workout",
        time: "3:30 PM",
        foods: [
          { name: "Greek Yogurt", portion: "1 cup", calories: 150, protein: 20, carbs: 8, fat: 5 },
          { name: "Apple", portion: "1 medium", calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
          { name: "Almonds", portion: "1 oz", calories: 160, protein: 6, carbs: 6, fat: 14 },
        ],
        totalCalories: 405,
      },
      {
        name: "Post-Workout",
        time: "5:30 PM",
        foods: [
          { name: "Whey Protein", portion: "1 scoop", calories: 120, protein: 24, carbs: 3, fat: 1 },
          { name: "Dextrose", portion: "25g", calories: 100, protein: 0, carbs: 25, fat: 0 },
        ],
        totalCalories: 220,
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        foods: [
          { name: "Lean Beef", portion: "5 oz", calories: 275, protein: 35, carbs: 0, fat: 15 },
          { name: "Brown Rice", portion: "1 cup", calories: 220, protein: 5, carbs: 45, fat: 2 },
          { name: "Mixed Vegetables", portion: "1 cup", calories: 80, protein: 2, carbs: 15, fat: 1 },
        ],
        totalCalories: 575,
      },
      {
        name: "Before Bed",
        time: "9:30 PM",
        foods: [
          { name: "Cottage Cheese", portion: "1 cup", calories: 180, protein: 24, carbs: 6, fat: 5 },
          { name: "Casein Protein", portion: "1 scoop", calories: 120, protein: 24, carbs: 3, fat: 1 },
        ],
        totalCalories: 300,
      },
    ],
    recommendations: [
      "Consume protein within 30 minutes after your workout",
      "Space protein intake evenly throughout the day",
      "Stay hydrated to support muscle recovery and growth",
      "Include complex carbohydrates before workouts for energy",
      "Consider creatine supplementation for increased strength and muscle mass",
    ],
  },
  health: {
    dailyCalories: 2000,
    macros: { protein: 100, carbs: 225, fat: 67 },
    meals: [
      {
        name: "Breakfast",
        time: "7:30 AM",
        foods: [
          { name: "Overnight Oats", portion: "1 cup", calories: 300, protein: 10, carbs: 50, fat: 8 },
          { name: "Mixed Berries", portion: "1/2 cup", calories: 40, protein: 0.5, carbs: 10, fat: 0.2 },
          { name: "Chia Seeds", portion: "1 tbsp", calories: 60, protein: 3, carbs: 6, fat: 4 },
        ],
        totalCalories: 400,
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        foods: [
          { name: "Mediterranean Salad", portion: "2 cups", calories: 150, protein: 5, carbs: 15, fat: 8 },
          { name: "Grilled Chicken", portion: "4 oz", calories: 180, protein: 35, carbs: 0, fat: 4 },
          { name: "Olive Oil Dressing", portion: "1 tbsp", calories: 120, protein: 0, carbs: 0, fat: 14 },
          { name: "Whole Grain Bread", portion: "1 slice", calories: 80, protein: 3, carbs: 15, fat: 1 },
        ],
        totalCalories: 530,
      },
      {
        name: "Snack",
        time: "3:30 PM",
        foods: [
          { name: "Hummus", portion: "1/4 cup", calories: 100, protein: 2, carbs: 9, fat: 6 },
          { name: "Carrot Sticks", portion: "1 cup", calories: 50, protein: 1, carbs: 12, fat: 0.2 },
        ],
        totalCalories: 150,
      },
      {
        name: "Dinner",
        time: "6:30 PM",
        foods: [
          { name: "Baked Salmon", portion: "4 oz", calories: 200, protein: 22, carbs: 0, fat: 13 },
          { name: "Quinoa", portion: "1/2 cup", calories: 110, protein: 4, carbs: 20, fat: 2 },
          { name: "Roasted Vegetables", portion: "1.5 cups", calories: 120, protein: 3, carbs: 20, fat: 2 },
        ],
        totalCalories: 430,
      },
      {
        name: "Evening Snack",
        time: "8:30 PM",
        foods: [
          { name: "Greek Yogurt", portion: "3/4 cup", calories: 100, protein: 15, carbs: 6, fat: 3 },
          { name: "Walnuts", portion: "1/4 cup", calories: 160, protein: 4, carbs: 4, fat: 15 },
        ],
        totalCalories: 260,
      },
    ],
    recommendations: [
      "Focus on whole, unprocessed foods",
      "Include a variety of colorful fruits and vegetables daily",
      "Choose lean proteins and plant-based protein sources",
      "Incorporate omega-3 rich foods like fatty fish, walnuts, and flaxseeds",
      "Limit added sugars, sodium, and highly processed foods",
    ],
  },
};

interface UserData {
  age: string;
  gender: string;
  height: string;
  weight: string;
  activityLevel: string;
  goal: string;
  dietaryRestrictions: string[];
  allergies: string;
  preferences: string;
  mealPreference: string;
  medicalConditions: string;
}

interface Food {
  name: string;
  portion: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface Meal {
  name: string;
  time: string;
  foods: Food[];
  totalCalories: number;
}

export interface NutritionPlan {
  id: string;
  dailyCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  meals: Meal[];
  recommendations: string[];
}

export async function generateNutritionPlan(userData: UserData): Promise<NutritionPlan> {
  try {
    const aiPlan = await tryGenerateWithAI(userData);
    if (aiPlan) {
      return aiPlan;
    }
    return getFallbackPlan(userData);
  } catch (error) {
    console.error("Error in generateNutritionPlan:", error);
    return getFallbackPlan(userData);
  }
}

async function tryGenerateWithAI(userData: UserData): Promise<NutritionPlan | null> {
  try {
    // Check if AI SDK is available (optional, for environments without AI)
    let generateText, openai;
    try {
      const aiModule = await import("ai");
      const openaiModule = await import("@ai-sdk/openai");
      generateText = aiModule.generateText;
      openai = openaiModule.openai;
    } catch (error) {
      console.error("AI SDK not available:", error);
      return null;
    }

    // Check for API key (replace with actual check in production)
    const hasApiKey = false; // process.env.OPENAI_API_KEY in production
    if (!hasApiKey) {
      console.log("No OpenAI API key available, using fallback plan");
      return null;
    }

    const prompt = `
      Generate a personalized nutrition plan based on the following information:
      
      Age: ${userData.age}
      Gender: ${userData.gender}
      Height: ${userData.height} cm
      Weight: ${userData.weight} kg
      Activity Level: ${userData.activityLevel}
      Goal: ${userData.goal}
      Dietary Restrictions: ${userData.dietaryRestrictions.join(", ")}
      Allergies: ${userData.allergies}
      Food Preferences: ${userData.preferences}
      Preferred Meals Per Day: ${userData.mealPreference}
      Medical Conditions: ${userData.medicalConditions}
      
      Provide a detailed nutrition plan with:
      1. Daily calorie target
      2. Macronutrient breakdown (protein, carbs, fat in grams)
      3. ${userData.mealPreference} meal suggestions with food items, portions, calories, and macronutrients (protein, carbs, fat in grams)
      4. General nutrition recommendations tailored to the user's goal and medical conditions
      
      Format the response as a JSON object:
      {
        "dailyCalories": number,
        "macros": {
          "protein": number,
          "carbs": number,
          "fat": number
        },
        "meals": [
          {
            "name": string,
            "time": string,
            "foods": [
              {
                "name": string,
                "portion": string,
                "calories": number,
                "protein": number,
                "carbs": number,
                "fat": number
              }
            ],
            "totalCalories": number
          }
        ],
        "recommendations": [string]
      }
    `;

    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      prompt,
      system:
          "You are a professional nutritionist with expertise in creating personalized meal plans. Generate detailed, realistic nutrition plans based on user data, considering medical conditions.",
    });

    const plan = JSON.parse(text) as NutritionPlan;
    const planWithId = { ...plan, id: generateUniqueId() };
    saveNutritionPlan(planWithId);
    return planWithId;
  } catch (error) {
    console.error("Error in AI generation:", error);
    return null;
  }
}

function getFallbackPlan(userData: UserData): NutritionPlan {
  const goalType = userData.goal as keyof typeof FALLBACK_PLANS;
  const basePlan = FALLBACK_PLANS[goalType] || FALLBACK_PLANS.maintain;

  const mealCount = parseInt(userData.mealPreference) || 3;
  let adjustedMeals = [...basePlan.meals];

  if (mealCount < adjustedMeals.length) {
    adjustedMeals = adjustedMeals.slice(0, mealCount);
  } else if (mealCount > adjustedMeals.length) {
    const snacks = [
      {
        name: "Additional Snack",
        time: "11:00 AM",
        foods: [{ name: "Protein Bar", portion: "1 bar", calories: 200, protein: 20, carbs: 15, fat: 7 }],
        totalCalories: 200,
      },
      {
        name: "Additional Snack",
        time: "3:00 PM",
        foods: [{ name: "Mixed Nuts", portion: "1 oz", calories: 170, protein: 5, carbs: 6, fat: 15 }],
        totalCalories: 170,
      },
      {
        name: "Additional Snack",
        time: "9:00 PM",
        foods: [{ name: "Casein Protein", portion: "1 scoop", calories: 120, protein: 24, carbs: 3, fat: 1 }],
        totalCalories: 120,
      },
    ];

    for (let i = adjustedMeals.length; i < mealCount && i - adjustedMeals.length < snacks.length; i++) {
      adjustedMeals.push(snacks[i - adjustedMeals.length]);
    }
  }

  const recommendations = [...basePlan.recommendations];
  if (userData.medicalConditions) {
    recommendations.push("Consult a healthcare professional to tailor this plan to your medical conditions.");
  }

  const plan: NutritionPlan = {
    id: generateUniqueId(),
    dailyCalories: basePlan.dailyCalories,
    macros: basePlan.macros,
    meals: adjustedMeals,
    recommendations,
  };

  saveNutritionPlan(plan);
  return plan;
}

function generateUniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function saveNutritionPlan(plan: NutritionPlan): void {
  if (typeof window !== "undefined") {
    try {
      const existingPlansJson = localStorage.getItem("nutritionPlans");
      const existingPlans = existingPlansJson ? JSON.parse(existingPlansJson) : [];
      existingPlans.push(plan);
      localStorage.setItem("nutritionPlans", JSON.stringify(existingPlans));
      localStorage.setItem("currentPlan", JSON.stringify(plan));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }
}

export function getCurrentNutritionPlan(): NutritionPlan | null {
  if (typeof window !== "undefined") {
    try {
      const planJson = localStorage.getItem("currentPlan");
      if (!planJson) return null;

      // Parse and add default macronutrients if missing (for backward compatibility)
      const plan = JSON.parse(planJson) as NutritionPlan;
      const normalizedPlan: NutritionPlan = {
        ...plan,
        meals: plan.meals.map((meal) => ({
          ...meal,
          foods: meal.foods.map((food) => ({
            name: food.name,
            portion: food.portion,
            calories: food.calories,
            protein: food.protein ?? 0, // Default to 0 if missing
            carbs: food.carbs ?? 0,
            fat: food.fat ?? 0,
          })),
        })),
      };
      return normalizedPlan;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  }
  return null;
}

export function getAllNutritionPlans(): NutritionPlan[] {
  if (typeof window !== "undefined") {
    try {
      const plansJson = localStorage.getItem("nutritionPlans");
      if (!plansJson) return [];

      // Normalize plans for backward compatibility
      const plans = JSON.parse(plansJson) as NutritionPlan[];
      return plans.map((plan) => ({
        ...plan,
        meals: plan.meals.map((meal) => ({
          ...meal,
          foods: meal.foods.map((food) => ({
            name: food.name,
            portion: food.portion,
            calories: food.calories,
            protein: food.protein ?? 0,
            carbs: food.carbs ?? 0,
            fat: food.fat ?? 0,
          })),
        })),
      }));
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return [];
    }
  }
  return [];
}