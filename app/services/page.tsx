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
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Health Technology Solutions</h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive healthcare technology services driving clinical research and innovation across Africa.
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
                <div className="flex-1 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    <Card className="border-l-4 border-l-primary">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Clinical Trial Services</CardTitle>
                        <CardDescription className="text-sm">Calebyte BioSolutions - End-to-end clinical trial management</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>• Trial feasibility and site readiness • Clinical trial management</p>
                          <p>• Regulatory strategy (EFDA, USFDA, EMA) • Biostatistics & data management</p>
                          <p>• Pharmacovigilance • Local workforce development</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-l-4 border-l-primary">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Health Data & Digital Solutions</CardTitle>
                        <CardDescription className="text-sm">AI-driven insights and digital health tools</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>• Health data collection & analytics for African populations</p>
                          <p>• AI-driven insights for clinical interventions</p>
                          <p>• Custom digital health tools for clinical trial support</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-l-4 border-l-primary">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Capacity Building & Advisory</CardTitle>
                        <CardDescription className="text-sm">Strategic consulting and training programs</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>• Regulatory capacity building for African agencies</p>
                          <p>• Global regulatory alignment consulting</p>
                          <p>• Training programs for trial personnel and CRO partners</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Button asChild className="w-fit">
                    <Link href="/contact" className="inline-flex items-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="flex-shrink-0 lg:w-1/2">
                  <div className="relative h-[575px] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/telehealth-1.jpg"
                      alt="Health Technology Solutions - Clinical research and healthcare innovation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/black.jpeg"
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
