import { getServices } from '@/lib/cosmic';
import ServiceCard from '@/components/ServiceCard';

export default async function Services() {
  const services = await getServices();

  return (
    <div className="flex flex-col gap-12 pb-16 pt-8">
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive suite of digital services to help your business thrive in the modern world.
          </p>
        </div>

        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No services found. Please add some services to your Cosmic bucket.</p>
          </div>
        )}
      </section>
    </div>
  );
}