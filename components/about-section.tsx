import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-border shadow-md">
            <Image
              src="/classroom-activity.png"
              alt="A young child concentrating on a Montessori wooden learning activity"
              width={400}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-md">
            <Image
              src="/teacher-children.png"
              alt="A kind teacher reading a picture book with two young children"
              width={400}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Our Philosophy
          </span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            Inspiring young minds to grow, explore, and succeed
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            We believe that every child is unique and possesses great potential. Through personalized learning
            experiences, dedicated teachers, and modern educational resources, we help our pupils achieve academic
            excellence.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Our goal is to develop confident, creative, responsible, and lifelong learners through the Montessori
            approach to education — while nurturing strong moral values and leadership skills for an ever-changing
            world.
          </p>
        </div>
      </div>
    </section>
  )
}
