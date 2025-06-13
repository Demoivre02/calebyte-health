import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, HeartPulse, Lightbulb, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Bytes of Data, Breakthroughs in Health
              </h1>
              <p className="text-xl text-muted-foreground">
                Advancing clinical research and healthcare innovation across Africa with data-driven solutions, global partnerships, and cutting-edge technologies.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/hero.png"
                alt="Building Africa's clinical research infrastructure"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Calebyte Health</h2>
            <p className="text-lg text-muted-foreground">
              We combine healthcare expertise with technological innovation to deliver exceptional solutions.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <HeartPulse className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Patient-Centered Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our solutions prioritize patient needs, improving outcomes and satisfaction through personalized care
                  approaches.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Innovative Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We leverage cutting-edge technologies to create solutions that address complex healthcare challenges.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Stethoscope className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Clinical Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our team of healthcare professionals ensures all solutions meet the highest clinical standards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive healthcare solutions designed to meet your specific needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 rounded-lg border bg-background p-6">
              <h3 className="text-xl font-bold">Health Technology Solutions</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Telehealth platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Remote patient monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Healthcare data analytics</span>
                </li>
              </ul>
              <Button variant="outline" className="mt-2" asChild>
                <Link href="/services" className="inline-flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4 rounded-lg border bg-background p-6">
              <h3 className="text-xl font-bold">Healthcare Consulting</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Operational efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Technology implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Regulatory compliance</span>
                </li>
              </ul>
              <Button variant="outline" className="mt-2" asChild>
                <Link href="/services" className="inline-flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from healthcare organizations that have partnered with us.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 italic text-muted-foreground">
                  "Calebyte's telehealth solution transformed our practice, allowing us to reach more patients while
                  maintaining high-quality care."
                </p>
                <div>
                  <p className="font-semibold">Dr. Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Medical Director, Wellness Medical Group</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 italic text-muted-foreground">
                  "Their healthcare analytics platform provided insights that helped us reduce costs by 23% while
                  improving patient outcomes."
                </p>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">CTO, Regional Health System</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 italic text-muted-foreground">
                  "Calebyte's consulting team guided us through a complex digital transformation with expertise and
                  professionalism."
                </p>
                <div>
                  <p className="font-semibold">Lisa Rodriguez</p>
                  <p className="text-sm text-muted-foreground">CEO, Community Health Partners</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Healthcare Approach?
            </h2>
            <p className="mb-8 text-lg">
              Partner with Calebyte Health & Innovations to bring cutting-edge solutions to your organization.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
