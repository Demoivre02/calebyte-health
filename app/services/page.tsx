import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive healthcare solutions designed to meet the evolving needs of modern healthcare organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-16">
            {/* Service 1 */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative h-[600px] w-full overflow-hidden rounded-lg md:order-2">
                <Image
                  src="/telehealth.jpg"
                  alt="Health Technology Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight">Health Technology Solutions</h2>
                <p className="text-muted-foreground">
                  <span className="font-bold"> What We Do</span>  <br /> 
                      Clinical Trial Services (Calebyte BioSolutions): <br />
                      <span className="text-sm">
                      - Trial feasibility and site readiness in Ethiopia and other African markets. <br />
                      - Clinical trial management and monitoring. <br />
                      - Regulatory strategy and submissions (aligned with EFDA, USFDA, EMA). <br />
                      - Biostatistics, data management, and digital platforms for trials. <br />
                      - Pharmacovigilance and safety reporting. <br />
                      - Local workforce development and training. <br /> <br /> 
                      </span>
                      <span className="font-bold">Health Data & Digital Solutions: </span> <br />

                      <span className="text-sm">
                      - Health data collection, curation, and analytics for African populations. <br />
                      - AI-driven insights for clinical and public health interventions. <br />
                      - Custom digital health tools for clinical trial support. <br /> <br />
                      </span>

                      <span className="font-bold">Capacity Building & Advisory:</span> <br />
                      <span className="text-sm">
                      - Regulatory capacity building for African agencies (EFDA and others). <br />
                      - Consulting on global regulatory alignment. <br />
                      - Training programs for trial site personnel and CRO partners. <br /> <br />
                    </span>
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Telehealth Platforms</p>
                      <p className="text-sm text-muted-foreground">
                        Secure, user-friendly virtual care solutions that connect providers and patients.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Remote Patient Monitoring</p>
                      <p className="text-sm text-muted-foreground">
                        Systems that enable continuous tracking of patient health metrics outside traditional care
                        settings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Healthcare Data Analytics</p>
                      <p className="text-sm text-muted-foreground">
                        Advanced analytics tools that transform healthcare data into actionable insights.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/conference.jpg"
                  alt="Healthcare Consulting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Healthcare Consulting</h2>
                <p className="text-muted-foreground">
                  Our expert consultants provide strategic guidance to help healthcare organizations navigate complex
                  challenges and achieve their goals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Operational Efficiency</p>
                      <p className="text-sm text-muted-foreground">
                        Streamline workflows and processes to reduce costs and improve service delivery.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Technology Implementation</p>
                      <p className="text-sm text-muted-foreground">
                        Expert guidance on selecting and implementing healthcare technology solutions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Regulatory Compliance</p>
                      <p className="text-sm text-muted-foreground">
                        Navigate complex healthcare regulations and ensure your organization stays compliant.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:order-2">
                <Image
                  src="/data-center.jpg"
                  alt="Digital Health Innovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight">Digital Health Innovation</h2>
                <p className="text-muted-foreground">
                  We partner with healthcare organizations to develop and implement innovative digital health solutions
                  that address specific challenges.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Custom Application Development</p>
                      <p className="text-sm text-muted-foreground">
                        Tailored digital solutions designed to meet your organization's unique needs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">AI and Machine Learning</p>
                      <p className="text-sm text-muted-foreground">
                        Advanced algorithms that enhance diagnostic accuracy and treatment planning.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Patient Engagement Tools</p>
                      <p className="text-sm text-muted-foreground">
                        Digital solutions that empower patients to take an active role in their healthcare journey.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Service Process</h2>
            <p className="text-lg text-muted-foreground">
              We follow a structured approach to ensure successful outcomes for every client engagement.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </span>
                  Discovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We begin by thoroughly understanding your organization's unique challenges, goals, and existing
                  systems.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </span>
                  Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our team develops a customized strategy and solution design tailored to your specific needs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </span>
                  Implementation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We work closely with your team to implement solutions with minimal disruption to your operations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </span>
                  Ongoing Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our relationship continues with training, maintenance, and continuous improvement of your solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Transform Your Healthcare Organization?</h2>
            <p className="mb-8 text-lg">
              Contact us today to discuss how our services can address your specific challenges and goals.
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
