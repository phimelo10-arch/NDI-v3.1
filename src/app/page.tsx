import { CommunityIntro } from './_components/community-intro';
import { ValueProposition } from './_components/value-proposition';
import { FeaturedContributors } from './_components/featured-contributors';
import { Pricing } from './_components/pricing';
import { NewMembers } from './_components/new-members';
import { ContentShowcase } from './_components/content-showcase';
import { BrotherOfTheWeek } from './_components/brother-of-the-week';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body text-foreground">
      <main className="container mx-auto flex-grow flex flex-col items-center justify-center p-4 sm:p-6 md:p-12">
        <div className="w-full max-w-3xl space-y-10 text-center">
          <CommunityIntro />
          <ValueProposition />
        </div>
        <FeaturedContributors />
        <div className="w-full max-w-3xl space-y-10 text-center">
          <Pricing />
        </div>
        <NewMembers />
        <ContentShowcase />
        <BrotherOfTheWeek />
      </main>
    </div>
  );
}
