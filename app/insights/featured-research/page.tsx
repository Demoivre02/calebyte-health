import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturedResearchPage() {
  const researchItems = [
    {
      title: "AI in Global Health",
      bullets: [
        "The Role of Artificial Intelligence in Achieving the Sustainable Development Goals",
        "Read on The Lancet Digital Health (Open Access)"
      ],
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6957485/"
    },
    {
      title: "Digital Health in Africa",
      bullets: [
        "The State of Digital Health in Africa",
        "Download from WHO Africa"
      ],
      link:"https://www.iqvia.com/-/media/iqvia/pdfs/mea/white-paper/iqvia-digital-health-system-maturity-in-africa.pdf"
    },
    {
      title: "Clinical Research Capacity in Africa",
      bullets: [
        "Building Clinical Trial Capacity in Low-Resource Settings",
        "Read on BMC Trials (Open Access)"
      ],
      link:"https://ahpworkforce.com/research-capacity-building/building-research-capacity-in-low-resource-settings/"
    },
    {
      title: "Data Science for Health Equity",
      bullets: [
        "Ethical and Inclusive Data Science for African Health Systems",
        "Read via Frontiers in Digital Health"
      ],
      link:"https://www.fic.nih.gov/News/GlobalHealthMatters/september-october-2020/Pages/data-science-in-africa-dsiafrica-elsi.aspx"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/insights" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Insights
              </Link>
            </Button>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">📚 Featured Research</h1>
            <p className="text-xl text-muted-foreground">
              Open Access Articles & Reports on healthcare innovation and global health initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Research Content */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <ol className="space-y-8 list-decimal list-inside">
              {researchItems.map((item, index) => (
                <li key={index} className="text-lg font-semibold">
                  {item.title}
                  <ul className="mt-4 ml-6 space-y-2 list-disc list-inside">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-base font-normal text-muted-foreground">
                        {bullet.includes("Read on") || bullet.includes("Download") || bullet.includes("Read via") ? (
                          <Link href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                            <span className="inline-flex items-center gap-1 text-primary hover:underline cursor-pointer">
                              {bullet} <ExternalLink className="h-3 w-3" />
                            </span>
                          </Link>
                        ) : (
                          bullet
                        )}
                      </li>
                      
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Explore More Research</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Discover additional insights and resources across our other categories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/insights/expert-insights">Expert Insights</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/insights/toolkits-templates">Toolkits & Templates</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/insights/project-spotlights">Project Spotlights</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
