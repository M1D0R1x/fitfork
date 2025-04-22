export function Testimonials() {
  const testimonials = [
    {
      quote:
        "NutriAI completely transformed my approach to healthy eating. The personalized meal plans are easy to follow and actually delicious!",
      author: "Sarah J.",
      role: "Fitness Enthusiast",
    },
    {
      quote:
        "As someone with multiple food allergies, finding suitable meal plans was always a challenge. NutriAI made it effortless.",
      author: "Michael T.",
      role: "Software Developer",
    },
    {
      quote: "The AI recommendations are spot on! It's like having a personal nutritionist without the high cost.",
      author: "Priya K.",
      role: "Healthcare Professional",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from people who have transformed their nutrition with NutriAI
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm"
            >
              <div>
                <p className="text-gray-500 italic dark:text-gray-400">"{testimonial.quote}"</p>
              </div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
