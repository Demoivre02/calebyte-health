import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, HeartPulse, Lightbulb, Stethoscope, Zap, Heart, Shield, Shuffle, Target, Brain } from "lucide-react"
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
                src="/hero.jpg"
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
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">
              We combine healthcare expertise with technological innovation to deliver exceptional solutions for Africa.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We develop smart, scalable health technologies that solve real-world challenges.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Vitality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our solutions promote holistic well-being rooted in tradition and science.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built on transparency, quality, and a commitment to ethical healthcare.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shuffle className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bridging modern medicine with Africa's rich herbal and healing knowledge.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Designed to uplift communities and transform healthcare access across Africa.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Brain className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Driven by data, insights, and artificial intelligence to optimize health outcomes.
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
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 rounded-lg border bg-background p-6">
              <h3 className="text-xl font-bold">Clinical Trial Services</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Trial feasibility and site readiness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Clinical trial management & monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Regulatory strategy & submissions</span>
                </li>
              </ul>
              <Button variant="outline" className="mt-2" asChild>
                <Link href="/services" className="inline-flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4 rounded-lg border bg-background p-6">
              <h3 className="text-xl font-bold">Health Data and Clinical Solutions</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Health data collection & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>AI-driven insights for clinical interventions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Custom digital health tools</span>
                </li>
              </ul>
              <Button variant="outline" className="mt-2" asChild>
                <Link href="/services" className="inline-flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4 rounded-lg border bg-background p-6">
              <h3 className="text-xl font-bold">Capacity Building & Advisory</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Regulatory capacity building for agencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Global regulatory alignment consulting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Training programs for trial personnel</span>
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
                {/* <div>
                  <p className="font-semibold">Dr. Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Medical Director, Wellness Medical Group</p>
                </div> */}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 italic text-muted-foreground">
                  "Their healthcare analytics platform provided insights that helped us reduce costs by 23% while
                  improving patient outcomes."
                </p>
                {/* <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">CTO, Regional Health System</p>
                </div> */}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 italic text-muted-foreground">
                  "Calebyte's consulting team guided us through a complex digital transformation with expertise and
                  professionalism."
                </p>
                {/* <div>
                  <p className="font-semibold">Lisa Rodriguez</p>
                  <p className="text-sm text-muted-foreground">CEO, Community Health Partners</p>
                </div> */}
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
