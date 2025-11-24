"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Check, ChevronDown, Hourglass, Gem, Globe, Lock, Headphones, Smartphone, Ticket, BrainCircuit, Package, CheckSquare, Dna, Palette, Pin, Plug, Languages, ShieldCheck, Infinity, BadgeCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const communityFeatures = [
  { icon: Globe, text: "Acesso à Comunidade" },
  { icon: Lock, text: "Servidor exclusivo no Discord" },
  { icon: Headphones, text: "Salas 1, 2 e 3 para estudo e networking" },
  { icon: Smartphone, text: "Link do grupo no WhatsApp (com suporte real)" },
  { icon: Ticket, text: "Acesso prioritário aos eventos e workshops" },
  { icon: BrainCircuit, text: "Contato direto com mentores e irmãos experientes" },
];

const toolsFeatures = [
  { icon: CheckSquare, text: "11 VSLs prontas para copiar e vender imediatamente" },
  { icon: Dna, text: "Clonador de Páginas (copie páginas que vendem)" },
  { icon: Palette, text: "Pack com +70 criativos profissionais" },
  { icon: Palette, text: "Pack extra de criativos — Volume 2" },
  { icon: Pin, text: "Guia para instalar Pixel Cakto (passo a passo)" },
  { icon: Plug, text: "Fornecedor para comprar seguidores com segurança" },
  { icon: Languages, text: "Pack PLR em espanhol para criar novos produtos" },
];


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
        <p className="text-sm text-muted-foreground mb-1">"network dos irmãos 💰💸" - marketing digital</p>
        <h3 className="text-xl md:text-2xl font-bold mt-4 font-headline text-primary">Lote 3 (Após 300 membros): R$47 no pix</h3>
      </div>
      <div className="space-y-4 mt-8">
        <Card className="border-accent shadow-lg shadow-accent/20">
          <CardHeader className="pt-6 pb-2 text-center">
            <div className="mb-4">
              <p className="font-bold font-headline">Lote 2: R$18,00</p>
              <p className="text-sm text-gold flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                </span>
                ABERTO AGORA
              </p>
            </div>
            <CardTitle className="flex items-center justify-center gap-2 text-xl font-headline text-foreground">
              <Gem className="h-6 w-6 text-gold" />
              <span>Você recebe no Network dos Irmãos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
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
                <Progress value={progressValue} className="w-full mt-4 h-2 [&>div]:bg-gold" />
                <p className="text-sm font-bold text-gold mt-2 text-center">{remainingSpots} vagas restantes</p>
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
