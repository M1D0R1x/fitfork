"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { generateNutritionPlan } from "@/lib/nutrition-ai";

export function UserForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // Prevent multiple clicks
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
    medicalConditions: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSliderChange = (name: string, value: number[]) => {
    setFormData((prev) => ({ ...prev, [name]: value[0].toString() }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData((prev) => {
      const restrictions = [...prev.dietaryRestrictions];
      if (checked) {
        restrictions.push(value);
      } else {
        const index = restrictions.indexOf(value);
        if (index !== -1) {
          restrictions.splice(index, 1);
        }
      }
      return { ...prev, dietaryRestrictions: restrictions };
    });
  };

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    if (step === 1) {
      if (!formData.age) newErrors.age = "Age is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.height) newErrors.height = "Height is required";
      if (!formData.weight) newErrors.weight = "Weight is required";
      if (!formData.activityLevel) newErrors.activityLevel = "Activity level is required";
    } else if (step === 3) {
      if (!formData.goal) newErrors.goal = "Goal is required";
      if (!formData.mealPreference) newErrors.mealPreference = "Meal preference is required";
    }
    // Step 2 has no required fields, so no errors
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (isTransitioning || !validateStep()) return;
    setIsTransitioning(true);
    console.log(`Moving from step ${step} to ${step + 1}`); // Debug
    setStep((prev) => Math.min(prev + 1, 3)); // Prevent step > 3
    window.scrollTo(0, 0);
    setTimeout(() => setIsTransitioning(false), 300); // Re-enable after transition
  };

  const prevStep = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    console.log(`Moving from step ${step} to ${step - 1}`); // Debug
    setStep((prev) => Math.max(prev - 1, 1)); // Prevent step < 1
    window.scrollTo(0, 0);
    setTimeout(() => setIsTransitioning(false), 300); // Re-enable after transition
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep() || step !== 3) {
      console.log(`Submission blocked: step=${step}, valid=${validateStep()}`); // Debug
      return;
    }
    setIsLoading(true);
    console.log("Submitting form with data:", formData); // Debug

    try {
      const plan = await generateNutritionPlan(formData);
      console.log("Plan generated:", plan); // Debug
      router.push("/dashboard");
    } catch (error) {
      console.error("Error generating plan:", error);
      router.push("/dashboard");
    } finally {
      setIsLoading(false);
    }
  };

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
                      {errors.age && <p className="text-sm text-red-500">{errors.age}</p>}
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
                      {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
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
                      {errors.height && <p className="text-sm text-red-500">{errors.height}</p>}
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
                      {errors.weight && <p className="text-sm text-red-500">{errors.weight}</p>}
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
                    {errors.activityLevel && <p className="text-sm text-red-500">{errors.activityLevel}</p>}
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
                    <Label htmlFor="medicalConditions">Medical Conditions</Label>
                    <Textarea
                        id="medicalConditions"
                        name="medicalConditions"
                        placeholder="List any medical conditions (e.g., diabetes, hypertension)"
                        value={formData.medicalConditions}
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
                    {errors.goal && <p className="text-sm text-red-500">{errors.goal}</p>}
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
                    {errors.mealPreference && <p className="text-sm text-red-500">{errors.mealPreference}</p>}
                  </div>
                </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 ? (
                  <Button type="button" variant="outline" onClick={prevStep} disabled={isTransitioning}>
                    Previous
                  </Button>
              ) : (
                  <div></div>
              )}

              {step < 3 ? (
                  <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-green-600 hover:bg-green-700"
                      disabled={isTransitioning}
                  >
                    Next
                  </Button>
              ) : (
                  <Button
                      type="submit"
                      disabled={isLoading || isTransitioning}
                      className="bg-green-600 hover:bg-green-700"
                  >
                    {isLoading ? "Generating Plan..." : "Generate My Plan"}
                  </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
  );
}