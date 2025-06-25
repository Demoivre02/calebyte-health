import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Stethoscope, Users, FileText, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ClinicalTrialServicesPage() {
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
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Clinical Trial Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive end-to-end clinical trial management and regulatory support across Africa
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
                <h2 className="mb-4 text-3xl font-bold tracking-tight">Calebyte BioSolutions</h2>
                <p className="text-lg text-muted-foreground">
                  Our Clinical Trial Services division provides comprehensive support for pharmaceutical and biotech companies 
                  looking to conduct clinical research across Africa. We combine local expertise with international standards 
                  to ensure successful trial outcomes.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Trial Feasibility & Site Readiness
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Comprehensive feasibility assessments for African markets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Site identification and selection across multiple countries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Infrastructure assessment and preparation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Patient population analysis and recruitment strategies</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Regulatory Strategy & Submissions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>EFDA (Ethiopian FDA) regulatory submissions and approvals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>USFDA and EMA regulatory alignment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Multi-country regulatory strategy development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Ethics committee submissions and approvals</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Clinical Trial Management & Monitoring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Full-service clinical trial management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>On-site and remote monitoring services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Biostatistics and data management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Pharmacovigilance and safety reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Local workforce development and training</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Images Section */}
            <div className="space-y-6">
              <div className="relative md:h-[700px] h-[300p] w-full overflow-hidden rounded-lg">
                <Image
                  src="/trial.jpg"
                  alt="Clinical Trial Services - Research facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/feasibility.jpg"
                    alt="Clinical research team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/monitoring.jpg"
                    alt="Medical consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Why Choose Our Clinical Trial Services</h2>
            <p className="text-lg text-muted-foreground">
              Leverage our deep understanding of African healthcare systems and regulatory environments
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deep understanding of African healthcare systems, cultural contexts, and regulatory requirements
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>International Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Compliance with ICH-GCP guidelines and alignment with FDA, EMA, and other international standards
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Technology Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced clinical trial management systems and digital tools for efficient trial execution
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
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Ready to Start Your Clinical Trial in Africa?
            </h2>
            <p className="mb-8 text-lg">
              Contact our clinical trial experts to discuss your research objectives and regulatory requirements.
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
