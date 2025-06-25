import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Database, Brain, BarChart, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HealthDataDigitalSolutionsPage() {
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
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Health Data & Digital Solutions</h1>
              <p className="text-xl text-muted-foreground">
                AI-driven insights and digital health tools for African populations
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
                <h2 className="mb-4 text-3xl font-bold tracking-tight">Transforming Healthcare with Data</h2>
                <p className="text-lg text-muted-foreground">
                  Our Health Data & Digital Solutions leverage cutting-edge artificial intelligence and machine learning 
                  to extract meaningful insights from African health data, enabling better clinical decision-making and 
                  improved patient outcomes across the continent.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Health Data Collection & Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Comprehensive health data collection systems for African populations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Real-time data processing and validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Population health analytics and trend identification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Epidemiological surveillance and reporting systems</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      AI-Driven Clinical Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Machine learning algorithms for predictive healthcare analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Clinical decision support systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Risk stratification and early warning systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Treatment optimization recommendations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      Custom Digital Health Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Mobile health applications for patient engagement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Clinical trial support platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Electronic health record systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Telemedicine and remote monitoring solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Integration with existing healthcare infrastructure</span>
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
                  src="/transforming.jpg"
                  alt="Health Data Analytics Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/telehealth-1.jpg"
                    alt="Digital health tools"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/custom.jpg"
                    alt="AI-powered healthcare"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      {/* <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Technology Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Cutting-edge technologies powering our health data and digital solutions
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced ML algorithms for predictive analytics and pattern recognition in health data
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Big Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Scalable infrastructure for processing large volumes of health data in real-time
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cloud Computing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure, HIPAA-compliant cloud solutions for data storage and processing
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cross-platform mobile applications optimized for African connectivity conditions
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Key Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Impact & Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Transforming healthcare delivery across Africa through data-driven solutions
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Improved Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-powered insights enable early detection, personalized treatment plans, and better patient outcomes
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Streamlined workflows and predictive analytics reduce healthcare costs and improve efficiency
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Access Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Digital tools extend healthcare reach to underserved communities across Africa
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
              Ready to Harness the Power of Health Data?
            </h2>
            <p className="mb-8 text-lg">
              Discover how our AI-driven solutions can transform your healthcare delivery and improve patient outcomes.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
