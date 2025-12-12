import { CosmicImage } from '@/lib/types';

interface PageHeroProps {
  title: string;
  image?: CosmicImage;
  isHome?: boolean;
}

export default function PageHero({ title, image, isHome = false }: PageHeroProps) {
  const imageUrl = image?.imgix_url 
    ? `${image.imgix_url}?w=1600&h=600&fit=crop&auto=format,compress`
    : 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=600&fit=crop&auto=format';

  return (
    <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/70 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-md">
          {isHome ? (
            "Building Digital Excellence"
          ) : (
            title
          )}
        </h1>
        {isHome && (
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
            We are a creative digital agency crafting beautiful experiences for brands across the globe.
          </p>
        )}
      </div>
    </div>
  );
}