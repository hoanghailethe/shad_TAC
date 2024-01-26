import HeroCarousel from "@/components/MyComponent/HeroCarousel/page"
import OutImpressiveStats from"./OutImpressiveStats" 

export default function Home() {
  return (
    <main className="flex flex-col m-auto">
      {/* HERO CAROU */}
      <HeroCarousel />

      {/* PROJECTS  */}
          {/* STATS  */}
          {/* all categories */}
      <OutImpressiveStats />

      {/* PRODUCTS and SERVICES  */}
      <ServiceCategories />
      
      {/* AWARDS  and TEAM   */}

      {/* COMMITMENT  */}

      {/* WORK PROCESS  */}

      {/* CONTACTs  */}

      {/* FOOTER  */}
    </main>
  )
}
