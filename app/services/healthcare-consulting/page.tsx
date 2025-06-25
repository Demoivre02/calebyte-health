import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, MessageSquare, TrendingUp, Shield, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HealthcareConsultingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6">
              <Button variant="ghost" asChild>
                <Link href="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Services
                </Link>
              </Button>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Healthcare Consulting</h1>
              <p className="text-xl text-muted-foreground">
                Strategic guidance for healthcare organizations navigating complex challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight">Expert Strategic Guidance</h2>
                <p className="text-lg text-muted-foreground">
                  Our healthcare consulting services provide expert strategic guidance to help healthcare organizations 
                  across Africa navigate complex challenges, optimize operations, and achieve their goals. We combine 
                  deep industry knowledge with practical experience to deliver actionable solutions.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Operational Efficiency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Process optimization and workflow streamlining</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Cost reduction strategies and resource optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Performance measurement and improvement programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Service delivery enhancement and patient satisfaction</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Technology Implementation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Healthcare technology selection and evaluation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Digital transformation roadmap development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>System integration and interoperability planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Change management and user adoption strategies</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Regulatory Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Regulatory compliance assessment and gap analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Quality management system development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Risk management and mitigation strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Audit preparation and compliance monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Policy development and implementation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Images Section */}
            <div className="space-y-6">
              <div className="relative md:h-[700px] h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/consulting.jpg"
                  alt="Healthcare Consulting Strategy Session"
                  fill
                  className="object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Consulting Approach</h2>
            <p className="text-lg text-muted-foreground">
              A structured methodology that ensures successful outcomes for every engagement
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    1
                  </span>
                  Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive evaluation of current state, challenges, and opportunities
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    2
                  </span>
                  Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Development of tailored strategies aligned with organizational goals
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    3
                  </span>
                  Implementation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Guided execution with change management and stakeholder engagement
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    4
                  </span>
                  Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Continuous monitoring and improvement to ensure sustainable results
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      {/* <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Deep domain knowledge across critical healthcare areas
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Healthcare Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strategic planning, market analysis, and organizational development for healthcare providers
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Digital Health</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Digital transformation, telehealth implementation, and health technology adoption
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quality Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clinical quality initiatives, patient safety programs, and accreditation support
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Financial Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Revenue optimization, cost management, and financial sustainability planning
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Population Health</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Community health programs, preventive care strategies, and health outcome improvements
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Affairs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regulatory compliance, policy development, and government relations
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Ready to Transform Your Healthcare Organization?
            </h2>
            <p className="mb-8 text-lg">
              Let our expert consultants guide you through your healthcare transformation journey.
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
