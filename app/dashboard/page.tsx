"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NutritionPlanView } from "@/components/nutrition-plan-view";
import { Button } from "@/components/ui/button";
import { getCurrentNutritionPlan } from "@/lib/nutrition-ai";
import { useRouter } from "next/navigation";

interface NutritionPlan {
  id: string;
  dailyCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  meals: Array<{
    name: string;
    time: string;
    foods: Array<{
      name: string;
      portion: string;
      calories: number;
      protein: number; // Added
      carbs: number;   // Added
      fat: number;     // Added
    }>;
    totalCalories: number;
  }>;
  recommendations: string[];
}

export default function Dashboard() {
  const router = useRouter();
  const [plan, setPlan] = useState<NutritionPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const currentPlan = getCurrentNutritionPlan();
      setPlan(currentPlan);
    } catch (error) {
      console.error("Error loading nutrition plan:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container py-12 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl">Loading your nutrition plan...</p>
            </div>
          </main>
          <Footer />
        </div>
    );
  }

  if (!plan) {
    return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-6">No Nutrition Plan Found</h1>
              <p className="text-gray-500 mb-8">You don't have a nutrition plan yet. Create one to get started!</p>
              <Button onClick={() => router.push("/get-started")} className="bg-green-600 hover:bg-green-700">
                Create Nutrition Plan
              </Button>
            </div>
          </main>
          <Footer />
        </div>
    );
  }

  return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Your Nutrition Plan</h1>
            <NutritionPlanView plan={plan} />
            <div className="mt-8 flex justify-center">
              <Button onClick={() => router.push("/get-started")} variant="outline" className="mr-4">
                Create New Plan
              </Button>
              <Button onClick={() => window.print()} className="bg-green-600 hover:bg-green-700">
                Print Plan
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}