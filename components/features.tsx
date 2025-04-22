import { Brain, Utensils, Clock, Heart, Leaf, BarChart } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-green-600" />,
      title: "AI-Powered Recommendations",
      description: "Our advanced AI analyzes your data to create truly personalized nutrition plans.",
    },
    {
      icon: <Utensils className="h-10 w-10 text-green-600" />,
      title: "Customized Meal Plans",
      description: "Get meal plans that match your dietary preferences, restrictions, and nutritional needs.",
    },
    {
      icon: <Clock className="h-10 w-10 text-green-600" />,
      title: "Quick & Easy Setup",
      description: "Answer a few questions and get your personalized nutrition plan in minutes.",
    },
    {
      icon: <Heart className="h-10 w-10 text-green-600" />,
      title: "Health-Focused Approach",
      description: "Plans designed to improve your overall health, not just for weight management.",
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: "Dietary Restriction Friendly",
      description: "Support for all dietary needs including vegan, vegetarian, gluten-free, and more.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-green-600" />,
      title: "Progress Tracking",
      description: "Monitor your nutrition journey with easy-to-understand metrics and insights.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover how NutriAI transforms your nutrition planning experience
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/20">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
