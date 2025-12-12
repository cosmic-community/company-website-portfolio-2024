import { Testimonial } from '@/lib/types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const photoUrl = testimonial.metadata.client_photo?.imgix_url 
    ? `${testimonial.metadata.client_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`
    : null;

  return (
    <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
      <Quote className="w-8 h-8 text-primary/20 mb-6" />
      
      <blockquote className="text-lg font-medium leading-relaxed mb-6">
        "{testimonial.metadata.quote}"
      </blockquote>
      
      <div className="flex items-center gap-4">
        {photoUrl ? (
          <img 
            src={photoUrl} 
            alt={testimonial.title} 
            className="w-12 h-12 rounded-full object-cover border border-border"
            width={48}
            height={48}
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
            {testimonial.title.charAt(0)}
          </div>
        )}
        
        <div>
          <div className="font-bold">{testimonial.title}</div>
          <div className="text-sm text-muted-foreground">{testimonial.metadata.role_company}</div>
        </div>
      </div>
    </div>
  );
}