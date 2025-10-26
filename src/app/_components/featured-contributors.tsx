"use client";
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { ChevronDown } from 'lucide-react';

const contributors = [
  'profile-carlodeamorim',
  'profile-danilojuliao',
  'profile-mtlucas',
  'profile-ferreiirx',
  'profile-gs4nc',
  'profile-gabrielgterra',
  'profile-juniorsantander'
].map(id => placeholderData.placeholderImages.find(p => p.id === id)).filter(Boolean);

const duplicatedContributors = [...contributors, ...contributors, ...contributors, ...contributors];

export function FeaturedContributors() {
  return (
    <div className="relative w-full overflow-hidden py-8 mt-10">
      <div className="flex justify-center my-4">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="font-bold mb-2 text-xl md:text-2xl font-headline text-center" style={{ color: '#4DB8FF' }}>Irmãos QUE MAIS AJUDARAM na última semana</h3>
      <p className="text-sm text-muted-foreground mb-6 text-center">(atualizado em 09/09/2025)</p>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-slow space-x-8">
          {duplicatedContributors.map((contributor, index) => (
            contributor && (
              <div key={index} className="flex-shrink-0 flex flex-col items-center space-y-2 text-center w-32">
                <Image
                  alt={contributor.description}
                  src={contributor.imageUrl}
                  data-ai-hint={contributor.imageHint}
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-2 border-primary"
                />
                <p className="text-sm font-semibold text-foreground truncate">{contributor.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
