import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExpertInsightsPage() {
  const insightItems = [
    {
      title: "AI in Clinical Trials",
      bullets: [
        "How AI is Reshaping Clinical Research",
        "Blog by Harvard Health"
      ],
      link:"https://learn.hms.harvard.edu/insights/all-insights/ai-clinical-research-opportunities-limitations-and-what-comes-next"
    },
    {
      title: "Bridging Traditional and Modern Medicine",
      bullets: [
        "The Integration of African Traditional Medicine into National Health Systems",
        "WHO Bulletin Article"
      ],
      link:"https://pmc.ncbi.nlm.nih.gov/articles/PMC11204987/"
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
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">🧠 Expert Insights</h1>
            <p className="text-xl text-muted-foreground">
              Blogs & Opinion Articles from industry experts and thought leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Content */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <ol className="space-y-8 list-decimal list-inside">
              {insightItems.map((item, index) => (
                <li key={index} className="text-lg font-semibold">
                  {item.title}
                  <ul className="mt-4 ml-6 space-y-2 list-disc list-inside">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-base font-normal text-muted-foreground">
                        {bullet.includes("Blog by") || bullet.includes("Article") ? (
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
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Explore More Insights</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Discover additional insights and resources across our other categories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/insights/featured-research">Featured Research</Link>
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
