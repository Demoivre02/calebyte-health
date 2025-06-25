import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Brain, FileText, Calendar, BarChart3, HelpCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Telehealth: Beyond the Pandemic",
    excerpt: "How telehealth is evolving from a pandemic necessity to a permanent fixture in healthcare delivery.",
    date: "April 15, 2023",
    author: "Dr. Emily Chen",
    category: "Technology",
    image: "/article1.jpeg",
    slug: "future-of-telehealth",
  },
  {
    id: 2,
    title: "Artificial Intelligence in Clinical Decision Support",
    excerpt: "Exploring how AI is enhancing diagnostic accuracy and treatment planning in modern healthcare.",
    date: "March 22, 2023",
    author: "Marcus Johnson",
    category: "Innovation",
    image: "/article2.jpeg",
    slug: "ai-clinical-decision-support",
  },
  {
    id: 3,
    title: "Improving Patient Engagement Through Digital Tools",
    excerpt: "Strategies for leveraging technology to enhance patient participation in their healthcare journey.",
    date: "February 10, 2023",
    author: "Dr. Sarah Williams",
    category: "Patient Care",
    image: "/article3.jpeg",
    slug: "patient-engagement-digital-tools",
  },
  {
    id: 4,
    title: "Healthcare Data Security: Best Practices for 2023",
    excerpt: "Essential strategies to protect sensitive healthcare information in an increasingly digital landscape.",
    date: "January 28, 2023",
    author: "Alex Thompson",
    category: "Security",
    image: "/article4.jpeg",
    slug: "healthcare-data-security",
  },
  {
    id: 5,
    title: "Remote Patient Monitoring: Clinical Outcomes and ROI",
    excerpt: "Analyzing the impact of remote monitoring technologies on patient outcomes and healthcare costs.",
    date: "December 12, 2022",
    author: "Dr. Emily Chen",
    category: "Technology",
    image: "/article5.jpeg",
    slug: "remote-patient-monitoring",
  },
  {
    id: 6,
    title: "Navigating Healthcare Regulatory Changes in 2023",
    excerpt:
      "A guide to understanding and adapting to the latest regulatory developments affecting healthcare organizations.",
    date: "November 30, 2022",
    author: "Lisa Rodriguez",
    category: "Compliance",
    image: "/article6.jpeg",
    slug: "healthcare-regulatory-changes",
  },
]

export default function InsightsPage() {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Insights & Resources</h1>
            <p className="text-xl text-muted-foreground">
              Expert perspectives on healthcare innovation, technology trends, and industry best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image src="/article1.jpeg" alt="Featured post" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Featured</span>
                <span>Technology</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> April 15, 2023
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">The Future of Telehealth: Beyond the Pandemic</h2>
              <p className="text-muted-foreground">
                How telehealth is evolving from a pandemic necessity to a permanent fixture in healthcare delivery. This
                comprehensive analysis explores emerging trends, regulatory developments, and best practices for
                healthcare organizations.
              </p>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                  <Image
                    src="dr-emily.jpg"
                    alt="Dr. Emily Chen"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Dr. Emily Chen</p>
                  <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
                </div>
              </div>
              <Button asChild>
                <Link href="/insights/future-of-telehealth" className="inline-flex items-center gap-2">
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Tabs */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Explore Our Insights</h2>
            <p className="text-lg text-muted-foreground">
              Click on any category below to explore our comprehensive insights and resources.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/insights/featured-research">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>📚 Featured Research</CardTitle>
                  <CardDescription>Open Access Articles & Reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• AI in Global Health</p>
                    <p>• Digital Health in Africa</p>
                    <p>• Clinical Research Capacity</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    Explore Research <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/insights/expert-insights">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>🧠 Expert Insights</CardTitle>
                  <CardDescription>Blogs & Opinion Articles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• AI in Clinical Trials</p>
                    <p>• Traditional & Modern Medicine</p>
                    <p>• Industry Expert Opinions</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    Read Insights <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/insights/toolkits-templates">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>📘 Toolkits & Templates</CardTitle>
                  <CardDescription>Practical Resources & Tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Digital Health Implementation</p>
                    <p>• Health Data Governance</p>
                    <p>• Regulatory Systems</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    Access Tools <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/insights/upcoming-events">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>📅 Upcoming Events</CardTitle>
                  <CardDescription>Webinars & Conferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Global Digital Health Forum</p>
                    <p>• Africa Health Agenda</p>
                    <p>• Industry Conferences</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    View Events <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/insights/project-spotlights">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>📊 Project Spotlights</CardTitle>
                  <CardDescription>Case Studies & Success Stories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• mTrac in Uganda</p>
                    <p>• SmartCare in Zambia</p>
                    <p>• Real-world Implementations</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    View Projects <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50">
              <Link href="/insights/understanding-our-work">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>📖 Understanding Our Work</CardTitle>
                  <CardDescription>Explainers & FAQs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Pharmacovigilance Introduction</p>
                    <p>• AI in Public Health</p>
                    <p>• Regulatory Science Basics</p>
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

      {/* Resources */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Resources & Guides</h2>
            <p className="text-lg text-muted-foreground">
              Practical tools and in-depth guides to help you navigate healthcare challenges.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Telehealth Implementation Guide</CardTitle>
                <CardDescription>
                  A comprehensive guide to selecting, implementing, and optimizing telehealth solutions for your
                  organization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Platform selection criteria</li>
                  <li>• Staff training best practices</li>
                  <li>• Patient engagement strategies</li>
                  <li>• Regulatory compliance checklist</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">Download Guide</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Healthcare Data Security Toolkit</CardTitle>
                <CardDescription>
                  Essential resources for protecting patient data and ensuring compliance with healthcare privacy
                  regulations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Risk assessment templates</li>
                  <li>• Security policy frameworks</li>
                  <li>• Staff training materials</li>
                  <li>• Incident response protocols</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">Download Toolkit</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Updated</h2>
            <p className="mb-8 text-lg">
              Subscribe to our newsletter to receive the latest insights, resources, and industry updates.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input placeholder="Your email address" className="bg-primary-foreground text-foreground" />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
