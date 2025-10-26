"use client"
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowRight, MessageSquare } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';

const contentImages = placeholderData.placeholderImages.filter(p => p.id.startsWith('content-example-'));

export function ContentShowcase() {
  return (
    <div className="w-full max-w-6xl mt-20 text-center">
      <div className="flex justify-center mb-4">
        <MessageSquare className="h-8 w-8 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-bold text-primary mb-2 font-headline">Tipo de coisas que falamos no grupo e no DISCORD</h2>
      <p className="text-foreground mb-8 max-w-3xl mx-auto">
        Infoprodutos, SaaS, Ofertas, Low Ticket, Quiz, Mineração, Modelagem de ofertas, mercado hot, packs, ferramentas gratuitas, rateios, compartilhamento de senhas, desenvolvimento páginas, funis de vendas, X1 WhatsApp, Automação, Criativo, estrutura de anuncios, Meta Ads, Google Ads
      </p>
      <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
        <span>Deslize para o lado</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {contentImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Image
                  alt={image.description}
                  src={image.imageUrl}
                  data-ai-hint={image.imageHint}
                  width={400}
                  height={800}
                  className="rounded-lg object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
