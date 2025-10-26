import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';

const introImage = placeholderData.placeholderImages.find(p => p.id === 'community-intro-video-placeholder');

export function CommunityIntro() {
  if (!introImage) return null;

  return (
    <>
      <div className="w-full shadow-2xl rounded-2xl overflow-hidden border-4 border-primary/20">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            alt={introImage.description}
            src={introImage.imageUrl}
            data-ai-hint={introImage.imageHint}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="space-y-6 text-base md:text-lg leading-relaxed mt-10">
        <div>
          <p className="font-semibold text-2xl font-headline" style={{ color: '#4DB8FF' }}>Link da minha comunidade</p>
          <p className="text-sm text-muted-foreground">"network dos irmãos 💰💸" - marketing digital</p>
        </div>
        <p>A gente fica compartilhando <span className="font-bold text-foreground">CADA DETALHE</span> do que estamos fazendo para fazer dinheiro no marketing digital</p>
      </div>
    </>
  );
}
