import Image from 'next/image';
import { ChevronDown, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import placeholderData from '@/lib/placeholder-images.json';

const whatsappIcon = placeholderData.placeholderImages.find(p => p.id === 'whatsapp-icon');
const discordIcon = placeholderData.placeholderImages.find(p => p.id === 'discord-icon');

const targetAudience = [
    { text: "Se sente sozinho", highlight: " e gostaria de trocar ideia sobre ofertas e negócios no digital." },
    { text: "é INTELIGENTE", highlight: ", mas não consegue tirar nada no Papel, pq pensa MUITO e é perfeccionista dms" },
    { text: "É iniciante", highlight: ", e quer entrar no grupo pra ir aprendendo com a galera." },
    { text: "Precisa de sócio", highlight: " (por falta de verba ou porque não dá pra fazer tudo sozinho)." },
];

export function ValueProposition() {
  return (
    <div className="space-y-6 text-base md:text-lg leading-relaxed">
      <div className="flex justify-center my-4">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
      <p className="text-gold text-sm animate-pulse">Aqui, ninguém solta a mão de ninguém!</p>
      <p className="text-xl md:text-2xl font-headline">
        <span className="text-primary">A missão é um <span className="font-bold">AJUDAR o OUTRO</span> ta lgd?</span>
      </p>
      <p>
        Aqui é todo mundo no corre, na luta... mas com sorriso no rosto, por que a gente sabe que <span className="font-bold">UMA HORA VAI DAR CERTO.</span>
      </p>
      <Card className="text-left bg-card pt-10 shadow-sm border my-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full bg-gold py-1 text-center">
            <span className="font-bold text-background text-sm tracking-widest">COMUNIDADE</span>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-center items-center space-x-4 mb-4">
            {whatsappIcon && (
              <Image
                alt={whatsappIcon.description}
                src={whatsappIcon.imageUrl}
                data-ai-hint={whatsappIcon.imageHint}
                width={40}
                height={40}
                className="object-contain animate-soft-pulse"
              />
            )}
            {discordIcon && (
              <Image
                alt={discordIcon.description}
                src={discordIcon.imageUrl}
                data-ai-hint={discordIcon.imageHint}
                width={40}
                height={30}
                className="object-contain animate-soft-pulse"
              />
            )}
          </div>
          <p className="text-center font-headline">o <span className="text-gold font-bold">NETWORK DOS IRMÃOS</span> é pra quem:</p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            {targetAudience.map((item, index) => (
              <li key={index}>
                <span className="font-bold text-primary">{item.text}</span>{item.highlight}
              </li>
            ))}
          </ul>
          <hr className="my-6 border-dashed border-border" />
          <div className="flex flex-col items-center text-center">
            <AlertTriangle className="h-6 w-6 text-muted-foreground mb-2" />
            <p id="the-rule" className="font-bold text-xl md:text-2xl font-headline text-primary">A ÚNICA REGRA É:</p>
          </div>
          <p className="text-center font-semibold mt-2">UM AJUDANDO O OUTRO. SEMPRE!</p>
          <p className="text-center text-sm text-muted-foreground">Sem individualismo. Sem estrelismo.</p>
        </CardContent>
      </Card>
    </div>
  );
}
