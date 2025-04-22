import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-24 bg-green-50 dark:bg-green-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About FitFork</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Revolutionizing nutrition planning with artificial intelligence
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Our Mission</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  At FitFork, we believe that proper nutrition should be accessible to everyone. Our mission is to
                  democratize personalized nutrition by leveraging the power of artificial intelligence to create
                  customized meal plans that cater to individual needs, preferences, and goals.
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Traditional nutrition planning often involves expensive consultations with dietitians or
                  nutritionists, making it inaccessible to many. FitFork bridges this gap by providing expert-level
                  nutrition guidance at a fraction of the cost.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Our AI-powered platform takes into account your unique characteristics, dietary restrictions, and
                  health goals to generate nutrition plans that are not only scientifically sound but also practical and
                  enjoyable to follow.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="FitFork Mission"
                    className="rounded-lg shadow-xl"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-green-50 dark:bg-green-950/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">How FitFork Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                  <span className="text-xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Input Your Data</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Provide information about your age, weight, height, activity level, dietary preferences, and health
                  goals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                  <span className="text-xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-bold">AI Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our advanced AI algorithms analyze your data and generate a personalized nutrition plan based on
                  scientific principles.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                  <span className="text-xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-bold">Receive Your Plan</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get a comprehensive nutrition plan with daily calorie targets, macronutrient breakdown, meal
                  suggestions, and recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Ready to Transform Your Nutrition?</h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400 mb-8">
              Join thousands of users who have improved their health with personalized nutrition plans from FitFork.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/get-started">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
