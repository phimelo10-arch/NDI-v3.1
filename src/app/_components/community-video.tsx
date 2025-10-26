export function CommunityVideo() {
    return (
        <div className="w-full shadow-2xl rounded-2xl overflow-hidden border-4 border-primary/20">
            <div className="aspect-w-16 aspect-h-9">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Dj5SwhQpyC8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>
      </div>
    )
}
