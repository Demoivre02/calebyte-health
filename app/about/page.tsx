import Image from "next/image"
import { Award, Clock, Target, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">About Calebyte Health & Innovations</h1>
            <div className="flex flex-col items-center justify-center space-y-4 gap-4 ">
              <p className="text-md text-wrap text-justify text-muted-foreground">
                                Who We Are
                  Calebyte Health & Innovations is a trailblazing health technology and innovation company driving the next wave of healthcare transformation in Africa. Founded by regulatory and clinical research experts, our mission is to build scalable, sustainable, and globally integrated clinical trial ecosystems starting in Ethiopia. <br/> <br />

                  Our multidisciplinary team brings expertise in regulatory science, oncology drug development, AI-driven health solutions, and healthcare infrastructure. Through our flagship Contract Research Organization (CRO), Calebyte BioSolutions, we empower global biotech, pharma, and academic partners to conduct high-quality clinical trials in African populations—helping bridge equity gaps and accelerating access to life-saving therapies. <br /> <br />

                  We believe Africa holds untapped potential to be a critical contributor to global health innovation, and we’re building the digital and physical foundations to make that vision a reality.
              </p>
                <div className="text-md text-wrap text-center text-muted-foreground">
                <p className="text-xl text-primary my-2 font-bold text-center">Vision</p>
                    To be Africa’s leading catalyst for data-driven healthcare innovation and global clinical research partnerships.
                </div>
              <div>
              <div className="text-md text-wrap text-center text-muted-foreground">
                <p className="text-xl text-primary font-bold text-center my-2">Mission</p>
                <ul className="">
                  <li>Enable and scale clinical trials across Africa.</li>
                  <li>Build sustainable local health innovation capacity.</li>
                  <li>Harness data and AI to drive healthcare breakthroughs.</li>
                  <li>Bridge global pharma and biotech with African trial sites.</li>
                  
                
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image src="/about-us.png" alt="Calebyte team" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2015, Calebyte Health & Innovations began with a simple yet powerful vision: to bridge the
                gap between healthcare and technology. Our founders, a team of healthcare professionals and technology
                experts, recognized the untapped potential of digital innovation in improving patient care.
              </p>
              <p className="text-muted-foreground">
                What started as a small consulting firm has grown into a comprehensive healthcare technology company,
                serving clients across the country. Throughout our journey, we've remained committed to our core values
                of innovation, excellence, and patient-centered care.
              </p>
              <p className="text-muted-foreground">
                Today, Calebyte Health & Innovations is at the forefront of healthcare transformation, developing
                solutions that empower providers, engage patients, and improve outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do at Calebyte Health & Innovations.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="text-center">
                <Target className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4">Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We constantly push boundaries to develop forward-thinking solutions that address healthcare's most
                  pressing challenges.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Award className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4">Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We are committed to the highest standards of quality in everything we do, from product development to
                  client service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4">Collaboration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We believe in the power of partnership, working closely with clients and stakeholders to achieve
                  shared goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Clock className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4">Adaptability</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We embrace change and continuously evolve our approaches to meet the dynamic needs of the healthcare
                  industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experts guiding Calebyte Health & Innovations toward a healthier future.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="dr-emily.jpg"
                  alt="Dr. Emily Chen"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Emily Chen</h3>
              <p className="text-primary">Chief Executive Officer</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Former hospital administrator with 15+ years of healthcare leadership experience.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/johnson.jpg"
                  alt="Marcus Johnson"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Marcus Johnson</h3>
              <p className="text-primary">Chief Technology Officer</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Tech innovator with a background in healthcare IT systems and data security.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/sarah.jpg"
                  alt="Dr. Sarah Williams"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Sarah Williams</h3>
              <p className="text-primary">Chief Medical Officer</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Board-certified physician with expertise in clinical workflows and patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Approach</h2>
              <p className="text-muted-foreground">
                At Calebyte Health & Innovations, we believe that effective healthcare solutions must be both
                technologically advanced and deeply human-centered. Our approach combines rigorous research, innovative
                design, and collaborative implementation.
              </p>
              <p className="text-muted-foreground">
                We begin by thoroughly understanding the unique challenges and goals of each healthcare organization we
                work with. This foundation allows us to develop customized solutions that address specific needs rather
                than offering one-size-fits-all products.
              </p>
              <p className="text-muted-foreground">
                Throughout the development and implementation process, we maintain close partnerships with our clients,
                ensuring that our solutions integrate seamlessly with existing workflows and truly enhance the
                healthcare experience for both providers and patients.
              </p>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image src="approach.jpg" alt="Our approach" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
