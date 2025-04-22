"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { generateNutritionPlan } from "@/lib/nutrition-ai"

export function UserForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "moderate",
    goal: "maintain",
    dietaryRestrictions: [] as string[],
    allergies: "",
    preferences: "",
    mealPreference: "3",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSliderChange = (name: string, value: number[]) => {
    setFormData((prev) => ({ ...prev, [name]: value[0].toString() }))
  }

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData((prev) => {
      const restrictions = [...prev.dietaryRestrictions]
      if (checked) {
        restrictions.push(value)
      } else {
        const index = restrictions.indexOf(value)
        if (index !== -1) {
          restrictions.splice(index, 1)
        }
      }
      return { ...prev, dietaryRestrictions: restrictions }
    })
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Generate plan using AI or fallback
      const plan = await generateNutritionPlan(formData)

      // Navigate to dashboard with the plan
      router.push("/dashboard")
    } catch (error) {
      console.error("Error generating plan:", error)

      // Even if there's an error, we should still have a fallback plan
      // so we can redirect to the dashboard
      router.push("/dashboard")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1/3 h-2 rounded-full mx-1 ${i <= step ? "bg-green-600" : "bg-gray-200 dark:bg-gray-700"}`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500">
            Step {step} of 3:{" "}
            {step === 1 ? "Basic Information" : step === 2 ? "Dietary Preferences" : "Goals & Preferences"}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => handleRadioChange("gender", value)}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    name="height"
                    type="number"
                    placeholder="Enter your height"
                    value={formData.height}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    name="weight"
                    type="number"
                    placeholder="Enter your weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Activity Level</Label>
                <RadioGroup
                  value={formData.activityLevel}
                  onValueChange={(value) => handleRadioChange("activityLevel", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sedentary" id="sedentary" />
                    <Label htmlFor="sedentary">Sedentary (little or no exercise)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="light" />
                    <Label htmlFor="light">Light (exercise 1-3 times/week)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="moderate" />
                    <Label htmlFor="moderate">Moderate (exercise 3-5 times/week)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="active" id="active" />
                    <Label htmlFor="active">Active (exercise 6-7 times/week)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very_active" id="very_active" />
                    <Label htmlFor="very_active">Very Active (intense exercise daily)</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Dietary Restrictions</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    { id: "vegetarian", label: "Vegetarian" },
                    { id: "vegan", label: "Vegan" },
                    { id: "gluten_free", label: "Gluten-Free" },
                    { id: "dairy_free", label: "Dairy-Free" },
                    { id: "keto", label: "Keto" },
                    { id: "paleo", label: "Paleo" },
                    { id: "low_carb", label: "Low-Carb" },
                    { id: "low_fat", label: "Low-Fat" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.id}
                        checked={formData.dietaryRestrictions.includes(item.id)}
                        onCheckedChange={(checked) => handleCheckboxChange(item.id, checked as boolean)}
                      />
                      <Label htmlFor={item.id}>{item.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="allergies">Food Allergies or Intolerances</Label>
                <Textarea
                  id="allergies"
                  name="allergies"
                  placeholder="List any food allergies or intolerances"
                  value={formData.allergies}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferences">Food Preferences</Label>
                <Textarea
                  id="preferences"
                  name="preferences"
                  placeholder="List foods you particularly enjoy or dislike"
                  value={formData.preferences}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Nutrition Goal</Label>
                <RadioGroup value={formData.goal} onValueChange={(value) => handleRadioChange("goal", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lose" id="lose" />
                    <Label htmlFor="lose">Weight Loss</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maintain" id="maintain" />
                    <Label htmlFor="maintain">Weight Maintenance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gain" id="gain" />
                    <Label htmlFor="gain">Weight Gain</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="muscle" id="muscle" />
                    <Label htmlFor="muscle">Muscle Building</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="health" id="health" />
                    <Label htmlFor="health">General Health Improvement</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Preferred Number of Meals Per Day</Label>
                <div className="pt-6 pb-2">
                  <Slider
                    defaultValue={[3]}
                    min={2}
                    max={6}
                    step={1}
                    onValueChange={(value) => handleSliderChange("mealPreference", value)}
                  />
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                  </div>
                </div>
                <p className="text-center text-sm">{formData.mealPreference} meals per day</p>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <Button type="button" onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                Next
              </Button>
            ) : (
              <Button type="submit" disabled={isLoading} className="bg-green-600 hover:bg-green-700">
                {isLoading ? "Generating Plan..." : "Generate My Plan"}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
