const steps = [
  {
    number: "01",
    title: "Observe & Understand",
    description: "We observe each child to understand their interests, pace, and unique way of learning.",
  },
  {
    number: "02",
    title: "Guide & Inspire",
    description: "Teachers act as guides, offering hands-on materials that encourage independent discovery.",
  },
  {
    number: "03",
    title: "Grow & Flourish",
    description: "Children build confidence, responsibility, and a genuine love of learning that lasts a lifetime.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            The Montessori Approach
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            How we help every child succeed
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span className="font-heading text-5xl font-semibold text-primary-foreground/40">{step.number}</span>
              <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
              <p className="leading-relaxed text-primary-foreground/85">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
