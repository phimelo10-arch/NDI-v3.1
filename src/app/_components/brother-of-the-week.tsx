import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';

const brotherOfTheWeekImage = placeholderData.placeholderImages.find(p => p.id === 'profile-juniorsantander');

export function BrotherOfTheWeek() {
  if (!brotherOfTheWeekImage) return null;

  return (
    <div className="w-full max-w-3xl mt-20 text-center">
      <div className="flex justify-center mb-4">
        <Trophy className="h-8 w-8 text-yellow-400" />
      </div>
      <h2 className="text-2xl font-bold mb-8 font-headline text-primary">Irmão da SEMANA</h2>
      <Card className="bg-card border-accent shadow-lg shadow-accent/20">
        <CardContent className="p-8">
          <Image
            alt={brotherOfTheWeekImage.description}
            src={brotherOfTheWeekImage.imageUrl}
            data-ai-hint={brotherOfTheWeekImage.imageHint}
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-accent mx-auto"
          />
          <p className="text-xl font-bold text-foreground mt-4 font-headline">@juniorsantander</p>
          <div className="mt-8 text-left bg-background/50 p-6 rounded-lg">
            <p className="font-bold text-primary text-lg mb-2 font-headline">Palavras do Presidente:</p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground whitespace-pre-line">
              {"Mano, o cara tem 17 ofertas, ganha mais de 30k de LUCRO por mes, e simplesmente fica na CALL até de madrugada, mesmo com dor de dente, para ajudar os parceiros a subirem campanhas de infoproduto 3 filhos pra cuidar, esposa no pé as vezes... e ele mesmo SE OFERECEU, pra dar aula SEMANAIS pra galera que tá começando no mercado digital Que Deus te abençoe meu irmão Junior, você é uma benção nas nossas vidas "}
            </blockquote>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
