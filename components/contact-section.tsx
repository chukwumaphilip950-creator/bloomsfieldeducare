import { MapPin, Phone, Mail, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="overflow-hidden rounded-3xl border border-border bg-secondary/50 p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
              Join our growing family
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Give your child the gift of a strong foundation. Reach out to learn more about admissions, schedule a
              visit, or ask any questions.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-foreground">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                123 Learning Avenue, Bloomsfield
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <a href="tel:+2348135523875" className="transition-colors hover:text-primary">
                  +234 813 552 3875
                </a>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                admissions@bloomsfieldschools.com
              </li>
            </ul>
          </div>

          <form className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                Parent / Guardian Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                className="rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your child and what you'd like to know..."
                className="resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <Button type="submit" size="lg" className="mt-2 w-full rounded-full">
              <GraduationCap className="h-4 w-4" />
              Request Information
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
