"use client"

import * as React from "react"
import { X } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

interface LightboxProps {
  images: { id: number; src: string; alt: string }[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [api, setApi] = React.useState<any>()

  React.useEffect(() => {
    if (api) {
      api.scrollTo(initialIndex)
    }
  }, [api, initialIndex])

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </Button>
      
      <div className="w-full h-full max-w-[90vw] max-h-[90vh] px-4 flex items-center justify-center">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id} className="flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1920}
                    height={1080}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                    quality={100}
                    priority
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white hover:text-white/80 bg-transparent border-none hover:bg-transparent" />
          <CarouselNext className="text-white hover:text-white/80 bg-transparent border-none hover:bg-transparent" />
        </Carousel>
      </div>
    </div>
  )
} 