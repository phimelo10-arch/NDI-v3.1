export function CommunityIntro() {
  return (
    <>
      <div className="w-full shadow-2xl rounded-2xl overflow-hidden border-4 border-primary/20">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Dj5SwhQpyC8?controls=0&rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
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
