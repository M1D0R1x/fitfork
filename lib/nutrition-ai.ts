// Mock data for fallback when AI generation fails
const FALLBACK_PLANS = {
  lose: {
    dailyCalories: 1800,
    macros: {
      protein: 135,
      carbs: 157,
      fat: 60,
    },
    meals: [
      {
        name: "Breakfast",
        time: "8:00 AM",
        foods: [
          { name: "Greek Yogurt", portion: "1 cup", calories: 150 },
          { name: "Berries", portion: "1/2 cup", calories: 40 },
          { name: "Almonds", portion: "1 oz", calories: 160 },
        ],
        totalCalories: 350,
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        foods: [
          { name: "Grilled Chicken Breast", portion: "4 oz", calories: 180 },
          { name: "Quinoa", portion: "1/2 cup", calories: 110 },
          { name: "Mixed Vegetables", portion: "1 cup", calories: 80 },
        ],
        totalCalories: 370,
      },
      {
        name: "Snack",
        time: "3:30 PM",
        foods: [
          { name: "Apple", portion: "1 medium", calories: 95 },
          { name: "Peanut Butter", portion: "1 tbsp", calories: 95 },
        ],
        totalCalories: 190,
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        foods: [
          { name: "Baked Salmon", portion: "5 oz", calories: 240 },
          { name: "Brown Rice", portion: "1/2 cup", calories: 110 },
          { name: "Steamed Broccoli", portion: "1 cup", calories: 55 },
        ],
        totalCalories: 405,
      },
      {
        name: "Evening Snack",
        time: "9:00 PM",
        foods: [
          { name: "Cottage Cheese", portion: "1/2 cup", calories: 90 },
          { name: "Pineapple", portion: "1/2 cup", calories: 40 },
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
    macros: {
      protein: 110,
      carbs: 248,
      fat: 73,
    },
    meals: [
      {
        name: "Breakfast",
        time: "7:30 AM",
        foods: [
          { name: "Oatmeal", portion: "1 cup cooked", calories: 150 },
          { name: "Banana", portion: "1 medium", calories: 105 },
          { name: "Almond Butter", portion: "1 tbsp", calories: 98 },
        ],
        totalCalories: 353,
      },
      {
        name: "Lunch",
        time: "12:00 PM",
        foods: [
          { name: "Turkey Sandwich", portion: "1 sandwich", calories: 350 },
          { name: "Mixed Greens Salad", portion: "2 cups", calories: 15 },
          { name: "Olive Oil Dressing", portion: "1 tbsp", calories: 120 },
        ],
        totalCalories: 485,
      },
      {
        name: "Snack",
        time: "3:00 PM",
        foods: [
          { name: "Greek Yogurt", portion: "1 cup", calories: 150 },
          { name: "Granola", portion: "1/4 cup", calories: 120 },
        ],
        totalCalories: 270,
      },
      {
        name: "Dinner",
        time: "6:30 PM",
        foods: [
          { name: "Grilled Chicken", portion: "5 oz", calories: 225 },
          { name: "Sweet Potato", portion: "1 medium", calories: 115 },
          { name: "Roasted Vegetables", portion: "1 cup", calories: 80 },
        ],
        totalCalories: 420,
      },
      {
        name: "Evening Snack",
        time: "8:30 PM",
        foods: [
          { name: "Dark Chocolate", portion: "1 oz", calories: 170 },
          { name: "Strawberries", portion: "1 cup", calories: 50 },
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
    macros: {
      protein: 175,
      carbs: 315,
      fat: 93,
    },
    meals: [
      {
        name: "Breakfast",
        time: "7:00 AM",
        foods: [
          { name: "Whole Eggs", portion: "3 large", calories: 210 },
          { name: "Whole Grain Toast", portion: "2 slices", calories: 160 },
          { name: "Avocado", portion: "1/2 medium", calories: 120 },
          { name: "Fruit Smoothie", portion: "16 oz", calories: 250 },
        ],
        totalCalories: 740,
      },
      {
        name: "Mid-Morning Snack",
        time: "10:00 AM",
        foods: [
          { name: "Protein Shake", portion: "1 serving", calories: 150 },
          { name: "Banana", portion: "1 large", calories: 120 },
          { name: "Peanut Butter", portion: "2 tbsp", calories: 190 },
        ],
        totalCalories: 460,
      },
      {
        name: "Lunch",
        time: "1:00 PM",
        foods: [
          { name: "Grilled Steak", portion: "6 oz", calories: 420 },
          { name: "Brown Rice", portion: "1 cup", calories: 220 },
          { name: "Steamed Vegetables", portion: "1 cup", calories: 80 },
        ],
        totalCalories: 720,
      },
      {
        name: "Afternoon Snack",
        time: "4:00 PM",
        foods: [
          { name: "Trail Mix", portion: "1/3 cup", calories: 270 },
          { name: "Greek Yogurt", portion: "1 cup", calories: 150 },
        ],
        totalCalories: 420,
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        foods: [
          { name: "Salmon Fillet", portion: "6 oz", calories: 350 },
          { name: "Quinoa", portion: "1 cup", calories: 220 },
          { name: "Roasted Vegetables", portion: "1.5 cups", calories: 120 },
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
    macros: {
      protein: 195,
      carbs: 260,
      fat: 72,
    },
    meals: [
      {
        name: "Breakfast",
        time: "6:30 AM",
        foods: [
          { name: "Egg Whites", portion: "4 large", calories: 70 },
          { name: "Whole Eggs", portion: "2 large", calories: 140 },
          { name: "Oatmeal", portion: "1 cup cooked", calories: 150 },
          { name: "Blueberries", portion: "1/2 cup", calories: 40 },
        ],
        totalCalories: 400,
      },
      {
        name: "Mid-Morning",
        time: "9:30 AM",
        foods: [
          { name: "Protein Shake", portion: "1 serving", calories: 150 },
          { name: "Banana", portion: "1 medium", calories: 105 },
        ],
        totalCalories: 255,
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        foods: [
          { name: "Grilled Chicken Breast", portion: "6 oz", calories: 270 },
          { name: "Sweet Potato", portion: "1 medium", calories: 115 },
          { name: "Broccoli", portion: "1 cup", calories: 55 },
        ],
        totalCalories: 440,
      },
      {
        name: "Pre-Workout",
        time: "3:30 PM",
        foods: [
          { name: "Greek Yogurt", portion: "1 cup", calories: 150 },
          { name: "Apple", portion: "1 medium", calories: 95 },
          { name: "Almonds", portion: "1 oz", calories: 160 },
        ],
        totalCalories: 405,
      },
      {
        name: "Post-Workout",
        time: "5:30 PM",
        foods: [
          { name: "Whey Protein", portion: "1 scoop", calories: 120 },
          { name: "Dextrose", portion: "25g", calories: 100 },
        ],
        totalCalories: 220,
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        foods: [
          { name: "Lean Beef", portion: "5 oz", calories: 275 },
          { name: "Brown Rice", portion: "1 cup", calories: 220 },
          { name: "Mixed Vegetables", portion: "1 cup", calories: 80 },
        ],
        totalCalories: 575,
      },
      {
        name: "Before Bed",
        time: "9:30 PM",
        foods: [
          { name: "Cottage Cheese", portion: "1 cup", calories: 180 },
          { name: "Casein Protein", portion: "1 scoop", calories: 120 },
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
    macros: {
      protein: 100,
      carbs: 225,
      fat: 67,
    },
    meals: [
      {
        name: "Breakfast",
        time: "7:30 AM",
        foods: [
          { name: "Overnight Oats", portion: "1 cup", calories: 300 },
          { name: "Mixed Berries", portion: "1/2 cup", calories: 40 },
          { name: "Chia Seeds", portion: "1 tbsp", calories: 60 },
        ],
        totalCalories: 400,
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        foods: [
          { name: "Mediterranean Salad", portion: "2 cups", calories: 150 },
          { name: "Grilled Chicken", portion: "4 oz", calories: 180 },
          { name: "Olive Oil Dressing", portion: "1 tbsp", calories: 120 },
          { name: "Whole Grain Bread", portion: "1 slice", calories: 80 },
        ],
        totalCalories: 530,
      },
      {
        name: "Snack",
        time: "3:30 PM",
        foods: [
          { name: "Hummus", portion: "1/4 cup", calories: 100 },
          { name: "Carrot Sticks", portion: "1 cup", calories: 50 },
        ],
        totalCalories: 150,
      },
      {
        name: "Dinner",
        time: "6:30 PM",
        foods: [
          { name: "Baked Salmon", portion: "4 oz", calories: 200 },
          { name: "Quinoa", portion: "1/2 cup", calories: 110 },
          { name: "Roasted Vegetables", portion: "1.5 cups", calories: 120 },
        ],
        totalCalories: 430,
      },
      {
        name: "Evening Snack",
        time: "8:30 PM",
        foods: [
          { name: "Greek Yogurt", portion: "3/4 cup", calories: 100 },
          { name: "Walnuts", portion: "1/4 cup", calories: 160 },
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
}

interface UserData {
  age: string
  gender: string
  height: string
  weight: string
  activityLevel: string
  goal: string
  dietaryRestrictions: string[]
  allergies: string
  preferences: string
  mealPreference: string
}

interface Food {
  name: string
  portion: string
  calories: number
}

interface Meal {
  name: string
  time: string
  foods: Food[]
  totalCalories: number
}

export interface NutritionPlan {
  id: string
  dailyCalories: number
  macros: {
    protein: number
    carbs: number
    fat: number
  }
  meals: Meal[]
  recommendations: string[]
}

export async function generateNutritionPlan(userData: UserData): Promise<NutritionPlan> {
  try {
    // First try to use AI to generate a plan
    const aiPlan = await tryGenerateWithAI(userData)
    if (aiPlan) {
      return aiPlan
    }

    // If AI generation fails, use fallback plan
    return getFallbackPlan(userData)
  } catch (error) {
    console.error("Error in generateNutritionPlan:", error)

    // Always return a valid plan even if there's an error
    return getFallbackPlan(userData)
  }
}

async function tryGenerateWithAI(userData: UserData): Promise<NutritionPlan | null> {
  try {
    // Import dynamically to prevent issues if the AI SDK is not available
    const { generateText } = await import("ai")
    const { openai } = await import("@ai-sdk/openai")

    // Check if we have an API key (this would be set in a real environment)
    // For demo purposes, we'll simulate not having one to use the fallback
    const hasApiKey = false // In production, check process.env.OPENAI_API_KEY

    if (!hasApiKey) {
      console.log("No OpenAI API key available, using fallback plan")
      return null
    }

    // Create a prompt for the AI model
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
      
      Please provide a detailed nutrition plan with:
      1. Daily calorie target
      2. Macronutrient breakdown (protein, carbs, fat)
      3. ${userData.mealPreference} meal suggestions with food items, portions, and calories
      4. General nutrition recommendations
      
      Format the response as a JSON object with the following structure:
      {
        "dailyCalories": number,
        "macros": {
          "protein": number (grams),
          "carbs": number (grams),
          "fat": number (grams)
        },
        "meals": [
          {
            "name": string (e.g., "Breakfast"),
            "time": string (e.g., "8:00 AM"),
            "foods": [
              {
                "name": string,
                "portion": string,
                "calories": number
              }
            ],
            "totalCalories": number
          }
        ],
        "recommendations": [string]
      }
    `

    // Use the AI SDK to generate the nutrition plan
    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      prompt,
      system:
        "You are a professional nutritionist with expertise in creating personalized meal plans. Generate detailed, realistic nutrition plans based on user data.",
    })

    // Parse the response
    const plan = JSON.parse(text) as NutritionPlan

    // Add a unique ID to the plan
    const planWithId = {
      ...plan,
      id: generateUniqueId(),
    }

    // Save the plan to local storage
    saveNutritionPlan(planWithId)

    return planWithId
  } catch (error) {
    console.error("Error in AI generation:", error)
    return null
  }
}

function getFallbackPlan(userData: UserData): NutritionPlan {
  // Select the appropriate fallback plan based on the user's goal
  const goalType = userData.goal as keyof typeof FALLBACK_PLANS
  const basePlan = FALLBACK_PLANS[goalType] || FALLBACK_PLANS.maintain

  // Adjust the number of meals based on user preference
  const mealCount = Number.parseInt(userData.mealPreference) || 3
  let adjustedMeals = [...basePlan.meals]

  // If user wants fewer meals than in the fallback plan, remove some
  if (mealCount < adjustedMeals.length) {
    adjustedMeals = adjustedMeals.slice(0, mealCount)
  }
  // If user wants more meals, add snacks
  else if (mealCount > adjustedMeals.length) {
    const snacks = [
      {
        name: "Additional Snack",
        time: "11:00 AM",
        foods: [{ name: "Protein Bar", portion: "1 bar", calories: 200 }],
        totalCalories: 200,
      },
      {
        name: "Additional Snack",
        time: "3:00 PM",
        foods: [{ name: "Mixed Nuts", portion: "1 oz", calories: 170 }],
        totalCalories: 170,
      },
      {
        name: "Additional Snack",
        time: "9:00 PM",
        foods: [{ name: "Casein Protein", portion: "1 scoop", calories: 120 }],
        totalCalories: 120,
      },
    ]

    for (let i = adjustedMeals.length; i < mealCount && i - adjustedMeals.length < snacks.length; i++) {
      adjustedMeals.push(snacks[i - adjustedMeals.length])
    }
  }

  // Create the final plan
  const plan: NutritionPlan = {
    id: generateUniqueId(),
    dailyCalories: basePlan.dailyCalories,
    macros: basePlan.macros,
    meals: adjustedMeals,
    recommendations: basePlan.recommendations,
  }

  // Save the plan to local storage
  saveNutritionPlan(plan)

  return plan
}

// Helper function to generate a unique ID
function generateUniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

// Helper function to save the nutrition plan to local storage
function saveNutritionPlan(plan: NutritionPlan): void {
  if (typeof window !== "undefined") {
    try {
      // Get existing plans or initialize empty array
      const existingPlansJson = localStorage.getItem("nutritionPlans")
      const existingPlans = existingPlansJson ? JSON.parse(existingPlansJson) : []

      // Add new plan
      existingPlans.push(plan)

      // Save back to local storage
      localStorage.setItem("nutritionPlans", JSON.stringify(existingPlans))

      // Set current plan
      localStorage.setItem("currentPlan", JSON.stringify(plan))
    } catch (error) {
      console.error("Error saving to localStorage:", error)
      // Continue execution even if localStorage fails
    }
  }
}

// Function to get the current nutrition plan
export function getCurrentNutritionPlan(): NutritionPlan | null {
  if (typeof window !== "undefined") {
    try {
      const planJson = localStorage.getItem("currentPlan")
      return planJson ? JSON.parse(planJson) : null
    } catch (error) {
      console.error("Error reading from localStorage:", error)
      return null
    }
  }
  return null
}

// Function to get all nutrition plans
export function getAllNutritionPlans(): NutritionPlan[] {
  if (typeof window !== "undefined") {
    try {
      const plansJson = localStorage.getItem("nutritionPlans")
      return plansJson ? JSON.parse(plansJson) : []
    } catch (error) {
      console.error("Error reading from localStorage:", error)
      return []
    }
  }
  return []
}
