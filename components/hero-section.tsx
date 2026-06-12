import Image from "next/image"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Now accepting new pupils
          </span>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Welcome to Bloomsfield Montessori Basic Schools
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            We are committed to providing quality education in a safe, nurturing, and stimulating environment, helping
            every child grow into a confident, creative, and lifelong learner.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full" nativeButton={false} render={<a href="#contact" />}>
              Enroll Your Child
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent"
              nativeButton={false}
              render={<a href="#about" />}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wqvVpwrSoO5HyhBg6wjyYd1RtFkLAw.jpg"
              alt="Professional portrait of a character with black hair and red eyes wearing a black turtleneck"
              width={720}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
            <p className="font-heading text-2xl font-semibold text-primary">Every child</p>
            <p className="text-sm text-muted-foreground">is unique &amp; full of potential</p>
          </div>
        </div>
      </div>
    </section>
  )
}
