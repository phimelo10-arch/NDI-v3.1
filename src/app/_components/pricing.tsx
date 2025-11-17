"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Check, ChevronDown, Hourglass } from 'lucide-react';

const features = [
  "Grupo no WhatsApp",
  "Servidor no Discord",
  "Calls diárias para tirar suas dúvidas",
  "Aulas Semanais GRATUITAS sobre infoproduto",
  "Acesso aos Mentores da Comunidade"
];

const totalSpots = 50;
const remainingSpots = 17;
const filledSpots = totalSpots - remainingSpots;
const progressValue = (filledSpots / totalSpots) * 100;

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export function Pricing() {
  const handleAddToCart = () => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'AddToCart');
    }
  };

  return (
    <div className="space-y-4 my-12">
      <div className="flex justify-center my-4">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">"network dos irmãos 💰💸" - marketing digital</p>
        <h3 className="text-xl md:text-2xl font-bold mt-4 font-headline text-primary">Após 100 membros - R$37 no pix</h3>
      </div>
      <div className="space-y-4 mt-8">
        <Card className="border-accent shadow-lg shadow-accent/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="font-bold font-headline">Lote 2: R$18,00</p>
                <p className="text-sm text-gold flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                  </span>
                  ABERTO AGORA
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-left mt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full mt-4">
              <Button asChild size="lg" className="w-full bg-gold text-black hover:bg-gold/90 text-lg font-bold animate-pulse-dopamine" onClick={handleAddToCart}>
                <Link href="https://pay.cakto.com.br/jxytgx9">Entrar na Comunidade por R$18</Link>
              </Button>
            </div>
            <Progress value={progressValue} className="w-full mt-4 h-2 [&>div]:bg-gold" />
            <p className="text-sm font-bold text-gold mt-2 text-center">{remainingSpots} vagas restantes</p>
            <p className="text-sm text-muted-foreground text-center mt-2">Após esgotarem, o preço subirá para R$37,00.</p>
          </CardContent>
        </Card>

        <div className="flex justify-center my-4">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>

        <Card id="lote-3" className="bg-muted/30 border-dashed">
          <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="font-bold font-headline">Lote 3: R$37,00</p>
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
