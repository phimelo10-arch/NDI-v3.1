import { ChevronDown } from 'lucide-react';

export function TestimonialsVideo() {
  return (
    <div className="w-full max-w-3xl mt-20 text-center">
        <div className="flex justify-center my-4">
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
        <div className="w-full shadow-2xl rounded-2xl overflow-hidden border-4 border-primary/20">
            <div className="aspect-w-9 aspect-h-16">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/gSH4MUk1P84"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>
        </div>
    </div>
  );
}
