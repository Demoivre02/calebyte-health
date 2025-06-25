import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Zap, Smartphone, Code, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DigitalHealthInnovationPage() {
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
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Digital Health Innovation</h1>
              <p className="text-xl text-muted-foreground">
                Innovative digital health solutions and custom application development for Africa
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
                <h2 className="mb-4 text-3xl font-bold tracking-tight">Pioneering Digital Healthcare</h2>
                <p className="text-lg text-muted-foreground">
                  Our Digital Health Innovation services focus on developing cutting-edge digital solutions that 
                  address specific healthcare challenges across Africa. We partner with healthcare organizations 
                  to create custom applications, implement AI technologies, and build patient engagement tools 
                  that transform healthcare delivery.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Custom Application Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Tailored digital solutions designed to meet specific organizational needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Web-based healthcare platforms and portals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Hospital management and clinical workflow systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Integration with existing healthcare infrastructure</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-primary" />
                      AI and Machine Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Advanced algorithms that enhance diagnostic accuracy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>AI-powered treatment planning and optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Predictive analytics for preventive healthcare</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Natural language processing for medical documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      Patient Engagement Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Mobile health applications for patient empowerment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Telemedicine and remote consultation platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Patient portal and health record access systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Medication adherence and reminder systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Health education and wellness programs</span>
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
                  src="/pioneering.jpg"
                  alt="Digital Health Innovation Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/telehealth-1.jpg"
                    alt="Mobile health applications"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/p2.jpg"
                    alt="AI-powered healthcare solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      {/* <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Innovation Focus Areas</h2>
            <p className="text-lg text-muted-foreground">
              Cutting-edge technologies driving healthcare transformation in Africa
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Telemedicine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Remote consultation platforms optimized for African connectivity and healthcare needs
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>mHealth Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mobile health applications designed for diverse African populations and languages
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>IoT Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Internet of Things devices for remote patient monitoring and data collection
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Health</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure, decentralized health record systems and supply chain tracking
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Development Process */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Development Process</h2>
            <p className="text-lg text-muted-foreground">
              From concept to deployment, ensuring successful digital health innovations
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    1
                  </span>
                  Research & Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  User research, needs assessment, and solution design tailored to African healthcare contexts
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    2
                  </span>
                  Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Agile development with continuous feedback and iterative improvements
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    3
                  </span>
                  Testing & Validation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive testing including clinical validation and user acceptance testing
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    4
                  </span>
                  Deployment & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seamless deployment with ongoing maintenance, updates, and user support
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Impact */}
      <section className=" py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Innovation Impact</h2>
            <p className="text-lg text-muted-foreground">
              Transforming healthcare delivery through digital innovation
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Enhanced Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Digital solutions extend healthcare reach to underserved and remote communities
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Improved Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-powered tools and patient engagement platforms lead to better health outcomes
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Operational Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Streamlined workflows and automated processes improve healthcare efficiency
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
              Ready to Innovate Your Healthcare Delivery?
            </h2>
            <p className="mb-8 text-lg">
              Partner with us to develop cutting-edge digital health solutions that transform patient care.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Your Innovation Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
