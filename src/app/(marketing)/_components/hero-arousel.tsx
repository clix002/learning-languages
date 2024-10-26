"use client";

import Autoplay from "embla-carousel-autoplay";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
export
const HeroCarousel = () => {
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const images = [
    { src: "/hero/1.svg", id: "1a" },
    { src: "/hero/7.svg", id: "1" },
    { src: "/hero/1.svg", id: "11a" },
    { src: "/hero/2.svg", id: "2" },
    { src: "/hero/3.svg", id: "3" },
  ];
    return ( 
        <Carousel
        className="relative w-[240px] h-[240px] lg:w-[454px] lg:h-[454px]"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex aspect-square items-center justify-center p-6">
          {images.map(({ src, id }) => (
            <CarouselItem key={id}>
              <Card className="border-none bg-transparent shadow-none transition-all">
                <CardContent>
                  <Image
                    src={src}
                    width={601}
                    height={592}
                    alt="imagenes hero"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
          {/* {images.map(({ src, id }) => (
          <CarouselItem key={id}>
            <Image src={src} width={601} height={592} alt="imagenes hero" />
          </CarouselItem>
        ))} */}
        </CarouselContent>
      </Carousel>
     );
}
 
