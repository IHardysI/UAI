"use client"

import { useState, useEffect } from "react"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious,
  CarouselNext,
  CarouselPagination,
  type CarouselApi
} from "@/components/ui/carousel"
import CheckCardSm from "@/components/ui/CheckCardSm"
import { cn } from "@/components/lib/utils"

interface CardItem {
  id: string
  label: string
  variant?: "default" | "gray" | "green" | "yellow" | "skeleton"
}

export default function DatabaseCardSet() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // Sample data for the carousel with 5 different sets
  const cardSets = [
    {
      title: "User Database",
      items: [
        { id: "1-1", label: "Create user profile fields", variant: "default" },
        { id: "1-2", label: "Set up authentication logic", variant: "green" },
        { id: "1-3", label: "Design user permissions", variant: "default" },
        { id: "1-4", variant: "skeleton", label: "Add new card" }
      ]
    },
    {
      title: "Product Catalog",
      items: [
        { id: "2-1", label: "Define product schema", variant: "default" },
        { id: "2-2", label: "Create product search index", variant: "gray" },
        { id: "2-3", label: "Set up category hierarchy", variant: "default" },
        { id: "2-4", variant: "skeleton", label: "Add new card" }
      ]
    },
    {
      title: "Order Processing",
      items: [
        { id: "3-1", label: "Design order tables", variant: "green" },
        { id: "3-2", label: "Create order status workflow", variant: "default" },
        { id: "3-3", label: "Set up payment processing links", variant: "default" },
        { id: "3-4", label: "Security vulnerability detected", variant: "yellow" },
        { id: "3-5", variant: "skeleton", label: "Add new card" }
      ]
    }
  ]

  // Second page data
  const cardSetsPage2 = [
    {
      title: "Analytics",
      items: [
        { id: "4-1", label: "Set up data warehouse schema", variant: "default" },
        { id: "4-2", label: "Design metrics collection", variant: "default" },
        { id: "4-3", label: "Create reporting views", variant: "green" },
        { id: "4-4", label: "Data validation failing", variant: "yellow" },
        { id: "4-5", variant: "skeleton", label: "Add new card" }
      ]
    },
    {
      title: "System Configuration",
      items: [
        { id: "5-1", label: "Define global settings table", variant: "gray" },
        { id: "5-2", label: "Create environment variables", variant: "default" },
        { id: "5-3", label: "Set up feature flags", variant: "default" },
        { id: "5-4", variant: "skeleton", label: "Add new card" }
      ]
    }
  ]

  const allPages = [cardSets, cardSetsPage2]

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full max-w-[1300px] flex flex-col items-center">
      <div className="w-full relative overflow-hidden">
        <Carousel 
          setApi={setApi} 
          className="w-full"
          opts={{
            align: "start",
            dragFree: true,
          }}
        >
          <CarouselContent>
            {allPages.map((page, pageIndex) => (
              <CarouselItem key={pageIndex} className="pl-6 md:basis-auto">
                <div className="flex" style={{ gap: "30px" }}>
                  {page.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="w-[370px] flex-shrink-0">
                      <h2 className="text-2xl font-bold mb-6 text-center">{section.title}</h2>
                      <div className="space-y-4">
                        {section.items.map((item) => (
                          <CheckCardSm
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            variant={item.variant as any}
                            className={cn(
                              "transition-all duration-300",
                              item.variant === "skeleton" ? "hover:border-cBlack/50" : ""
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-center gap-4 mt-[35px]">
            <CarouselPrevious className="h-[30px] w-[30px] static" />
            <div className="flex items-center gap-2">
              <CarouselPagination />
            </div>
            <CarouselNext className="h-[30px] w-[30px] static" />
          </div>
        </Carousel>
      </div>
    </div>
  )
} 