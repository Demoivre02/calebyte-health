import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Users, GraduationCap, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CapacityBuildingAdvisoryPage() {
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
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Capacity Building & Advisory</h1>
              <p className="text-xl text-muted-foreground">
                Strategic consulting and training programs for healthcare organizations across Africa
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
                <h2 className="mb-4 text-3xl font-bold tracking-tight">Empowering Healthcare Systems</h2>
                <p className="text-lg text-muted-foreground">
                  Our Capacity Building & Advisory services strengthen healthcare systems across Africa by developing 
                  local expertise, improving regulatory frameworks, and building sustainable healthcare infrastructure. 
                  We work with governments, agencies, and organizations to create lasting positive change.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Regulatory Capacity Building
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Training programs for regulatory agencies across Africa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Development of regulatory frameworks and guidelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Good Clinical Practice (GCP) training and certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Regulatory harmonization initiatives</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      Global Regulatory Alignment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>ICH-GCP implementation and compliance consulting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>FDA, EMA, and WHO regulatory alignment strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Cross-border regulatory collaboration facilitation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>International quality standards implementation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Training & Workforce Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Clinical trial personnel training and certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>CRO partner development and training programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Healthcare technology training and adoption</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Continuing education and professional development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Train-the-trainer programs for sustainable capacity building</span>
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
                  src="/empowerment.jpg"
                  alt="Capacity Building Training Session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/capacity.jpg"
                    alt="Regulatory training workshop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/training.jpg"
                    alt="Healthcare professionals training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Training Programs</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive training solutions designed for African healthcare professionals
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>GCP Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  International Good Clinical Practice certification programs for clinical research professionals
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Affairs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive training on regulatory requirements and submission processes
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clinical data management systems training and best practices implementation
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quality systems development and implementation for healthcare organizations
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Impact & Outcomes</h2>
            <p className="text-lg text-muted-foreground">
              Building sustainable healthcare capacity across Africa
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Strengthened Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enhanced regulatory frameworks and healthcare systems that meet international standards
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Skilled Workforce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Trained healthcare professionals equipped with modern skills and knowledge
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sustainable Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Self-sustaining capacity building programs that continue to benefit communities
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
              Ready to Build Healthcare Capacity?
            </h2>
            <p className="mb-8 text-lg">
              Partner with us to strengthen your healthcare systems and develop local expertise.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
