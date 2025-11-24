"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckSquare, ChevronDown, Hourglass, Package, ShieldCheck, Infinity, BadgeCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { communityFeatures, toolsFeatures } from '@/lib/features';


const totalSpots = 50;
const initialRemainingSpots = 17;


declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export function Pricing() {
  const [remainingSpots, setRemainingSpots] = useState(initialRemainingSpots);
  const [progressValue, setProgressValue] = useState(((totalSpots - initialRemainingSpots) / totalSpots) * 100);
  const animationTriggered = useRef(false);
  const pricingRef = useRef<HTMLDivElement>(null);


  const handleAddToCart = () => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'AddToCart');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;
          
          let spots = initialRemainingSpots;
          const interval = setInterval(() => {
            spots -= 1;
            if (spots <= 5) { // Stop at a low number to maintain urgency
              clearInterval(interval);
              spots = 5;
            }
            setRemainingSpots(spots);
            const filledSpots = totalSpots - spots;
            setProgressValue((filledSpots / totalSpots) * 100);
          }, 5000); // Decrease every 5 seconds
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = pricingRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="space-y-4 my-12" ref={pricingRef}>
      <div className="flex justify-center my-4">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 font-headline text-primary">Quer entrar na nossa comunidade, irmão?</h2>
        <h3 className="text-xl md:text-2xl font-bold mt-4 font-headline text-primary">Lote 3 (Após 300 membros): R$47 no pix</h3>
      </div>
      <div className="space-y-4 mt-8">
        <Card className="border-accent shadow-lg shadow-accent/20">
          <CardHeader className="pt-6 pb-4 text-center">
            <div className="mb-2">
              <p className="text-sm text-gold flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                </span>
                ABERTO AGORA
              </p>
              <p className="font-bold font-headline">Lote 2: R$18,00</p>
            </div>
             <div className='px-6'>
                <Progress value={progressValue} className="w-full mt-4 h-2 [&>div]:bg-gold" />
                <p className="text-sm font-bold text-gold mt-2 text-center">{remainingSpots} vagas restantes</p>
            </div>
            <hr className="border-dashed border-border mt-4" />
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left mb-6">
              <div>
                <ul className="space-y-3">
                  {communityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <feature.icon className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="flex items-center gap-3 font-semibold mb-3">
                  <Package className="h-5 w-5 text-gold" />
                  Pacote Premium de Ferramentas (7 entregáveis)
                </p>
                <ul className="space-y-3">
                  {toolsFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <feature.icon className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background/50 border border-border rounded-lg p-4">
                <div className="w-full">
                  <Button asChild size="lg" className="w-full bg-gold text-black hover:bg-gold/90 text-lg font-bold animate-pulse-dopamine" onClick={handleAddToCart}>
                    <Link href="https://pay.cakto.com.br/jxytgx9_651328">Receber tudo por apenas R$18</Link>
                  </Button>
                </div>
                <div className="flex justify-center items-center gap-4 mt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <ShieldCheck className="h-4 w-4 text-green-500" />
                        <span>Pagamento Seguro</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Infinity className="h-4 w-4 text-green-500" />
                        <span>Acesso Vitalício</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BadgeCheck className="h-4 w-4 text-green-500" />
                        <span>7 Dias de Garantia</span>
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center my-4">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>

        <Card id="lote-3" className="bg-muted/30 border-dashed">
          <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="font-bold font-headline">Lote 3: R$47,00</p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Hourglass className="h-4 w-4" /> ESPERANDO liberar
              </p>
            </div>
            <Button variant="outline" disabled>Aguardando lote 2 acabar</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
