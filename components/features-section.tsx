import { Heart, Lightbulb, ShieldCheck, Users } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Safe & Nurturing",
    description: "A caring environment where every child feels secure, valued, and supported to thrive.",
  },
  {
    icon: Lightbulb,
    title: "Creative Learning",
    description: "Hands-on Montessori activities that spark curiosity, imagination, and a love of discovery.",
  },
  {
    icon: Users,
    title: "Dedicated Teachers",
    description: "Passionate, trained educators who guide each pupil with patience and personalized attention.",
  },
  {
    icon: ShieldCheck,
    title: "Strong Moral Values",
    description: "We build character, responsibility, and leadership alongside academic excellence.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
        <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
          A foundation for confident, lifelong learners
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
              <feature.icon className="h-6 w-6" />
            </span>
            <h3 className="font-heading text-xl font-semibold text-card-foreground">{feature.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
