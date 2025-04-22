import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserForm } from "@/components/user-form"

export default function GetStarted() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Get Your Personalized Nutrition Plan</h1>
          <p className="text-gray-500 mb-8">
            Answer a few questions about yourself, your dietary preferences, and your goals to receive your AI-generated
            nutrition plan.
          </p>
          <UserForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
