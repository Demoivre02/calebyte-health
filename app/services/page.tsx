import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Stethoscope, Database, Users, MessageSquare, Zap } from "lucide-react"
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

      {/* Service Tabs */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Explore Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Click on any service below to learn more about our comprehensive healthcare solutions.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/services/clinical-trial-services">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Clinical Trial Services</CardTitle>
                  <CardDescription>End-to-end clinical trial management and regulatory support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Trial feasibility and site readiness</p>
                    <p>• Regulatory strategy (EFDA, USFDA, EMA)</p>
                    <p>• Biostatistics & data management</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/services/health-data-digital-solutions">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Health Data & Digital Solutions</CardTitle>
                  <CardDescription>AI-driven insights and digital health tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Health data collection & analytics</p>
                    <p>• AI-driven clinical insights</p>
                    <p>• Custom digital health tools</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/services/capacity-building-advisory">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Capacity Building & Advisory</CardTitle>
                  <CardDescription>Strategic consulting and training programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Regulatory capacity building</p>
                    <p>• Global regulatory alignment</p>
                    <p>• Training programs for personnel</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/services/healthcare-consulting">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Healthcare Consulting</CardTitle>
                  <CardDescription>Strategic guidance for healthcare organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Operational efficiency optimization</p>
                    <p>• Technology implementation</p>
                    <p>• Regulatory compliance</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/services/digital-health-innovation">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Digital Health Innovation</CardTitle>
                  <CardDescription>Innovative digital health solutions and development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Custom application development</p>
                    <p>• AI and machine learning</p>
                    <p>• Patient engagement tools</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>
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
