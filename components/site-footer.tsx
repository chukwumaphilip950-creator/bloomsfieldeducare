import { GraduationCap } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-4 w-4" />
          </span>
          <span className="font-heading text-base font-semibold text-foreground">
            Bloomsfield Montessori Basic Schools
          </span>
        </a>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bloomsfield Montessori. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
