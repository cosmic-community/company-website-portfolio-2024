import { getPage, getServices, getTestimonials } from '@/lib/cosmic';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Markdown from '@/components/Markdown';
import Link from 'next/link';

export default async function Home() {
  const page = await getPage('home');
  const services = await getServices();
  const testimonials = await getTestimonials();

  if (!page) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Content Not Found</h1>
        <p className="text-muted-foreground">Please make sure the "Home" page exists in your Cosmic bucket.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <PageHero 
        title={page.title}
        image={page.metadata.hero_image}
        isHome={true}
      />

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-4xl">
        <Markdown content={page.metadata.content} className="prose-lg text-center mx-auto" />
      </section>

      {/* Featured Services */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
              <p className="text-muted-foreground mt-2">Expert solutions for your digital needs.</p>
            </div>
            <Link 
              href="/services" 
              className="hidden md:inline-flex text-primary font-medium hover:underline"
            >
              View all services →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link 
              href="/services" 
              className="text-primary font-medium hover:underline"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let's work together to create something amazing. Contact us today for a consultation.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-background text-primary px-8 py-3 rounded-md font-semibold hover:bg-background/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}