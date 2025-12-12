import { Service } from '@/lib/types';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const iconUrl = service.metadata.service_icon?.imgix_url 
    ? `${service.metadata.service_icon.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`
    : null;

  return (
    <Link 
      href={`/services/${service.slug}`}
      className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 flex flex-col h-full"
    >
      {iconUrl && (
        <div className="mb-4 p-3 bg-muted w-fit rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          <img 
            src={iconUrl} 
            alt="" 
            className="w-8 h-8 object-cover"
            width={32}
            height={32}
          />
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      
      <p className="text-muted-foreground mb-6 flex-grow">
        {service.metadata.short_description}
      </p>
      
      <div className="flex items-center text-sm font-medium text-primary mt-auto">
        Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}