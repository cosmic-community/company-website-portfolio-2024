// app/services/[slug]/page.tsx
import { getService, getServices } from '@/lib/cosmic';
import Markdown from '@/components/Markdown';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services" className="text-primary hover:underline">
          Return to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-16 pt-8">
      <div className="container mx-auto px-4">
        <Link 
          href="/services" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-border pb-12">
            {service.metadata.service_icon && (
              <div className="flex-shrink-0 bg-muted rounded-xl p-4">
                <img 
                  src={`${service.metadata.service_icon.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                  alt=""
                  className="w-24 h-24 object-cover rounded-lg"
                  width={96}
                  height={96}
                />
              </div>
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{service.title}</h1>
              <p className="text-xl text-muted-foreground">{service.metadata.short_description}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {service.metadata.full_description ? (
              <Markdown content={service.metadata.full_description} />
            ) : (
              <p className="text-muted-foreground italic">No detailed description available.</p>
            )}
          </div>
          
          <div className="mt-16 bg-muted/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in our {service.title} service?</h3>
            <p className="text-muted-foreground mb-6">Let's discuss how we can help your business grow.</p>
            <Link 
              href="/contact" 
              className="inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us About This
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}