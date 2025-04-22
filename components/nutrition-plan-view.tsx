"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

interface NutritionPlan {
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

interface NutritionPlanViewProps {
  plan: NutritionPlan
}

export function NutritionPlanView({ plan }: NutritionPlanViewProps) {
  if (!plan) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg text-gray-500">No nutrition plan available. Please create a new plan.</p>
      </div>
    )
  }

  // Calculate total macros in grams
  const totalMacros = plan.macros.protein + plan.macros.carbs + plan.macros.fat

  // Calculate macro percentages
  const proteinPercentage = Math.round((plan.macros.protein / totalMacros) * 100)
  const carbsPercentage = Math.round((plan.macros.carbs / totalMacros) * 100)
  const fatPercentage = Math.round((plan.macros.fat / totalMacros) * 100)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Daily Nutrition Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Daily Calories</h3>
              <div className="text-3xl font-bold text-green-600">{plan.dailyCalories} kcal</div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Macronutrients</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Protein ({proteinPercentage}%)</span>
                    <span className="text-sm font-medium">{plan.macros.protein}g</span>
                  </div>
                  <Progress value={proteinPercentage} className="h-2 bg-gray-200" indicatorClassName="bg-blue-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Carbs ({carbsPercentage}%)</span>
                    <span className="text-sm font-medium">{plan.macros.carbs}g</span>
                  </div>
                  <Progress value={carbsPercentage} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Fat ({fatPercentage}%)</span>
                    <span className="text-sm font-medium">{plan.macros.fat}g</span>
                  </div>
                  <Progress value={fatPercentage} className="h-2 bg-gray-200" indicatorClassName="bg-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="meals" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="meals">Meal Plan</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="meals" className="mt-4">
          <div className="space-y-4">
            {plan.meals.map((meal, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{meal.name}</CardTitle>
                    <span className="text-sm text-gray-500">{meal.time}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {meal.foods.map((food, foodIndex) => (
                      <div key={foodIndex} className="flex justify-between py-1 border-b last:border-0">
                        <div>
                          <span className="font-medium">{food.name}</span>
                          <span className="text-sm text-gray-500 ml-2">({food.portion})</span>
                        </div>
                        <span>{food.calories} kcal</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t flex justify-between">
                    <span className="font-medium">Total Calories</span>
                    <span className="font-bold">{meal.totalCalories} kcal</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recommendations" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Nutritionist Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                {plan.recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
