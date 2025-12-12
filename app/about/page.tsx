import { getPage } from '@/lib/cosmic';
import PageHero from '@/components/PageHero';
import Markdown from '@/components/Markdown';

export default async function About() {
  const page = await getPage('about-us');

  if (!page) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Content Not Found</h1>
        <p className="text-muted-foreground">Please make sure the "About Us" page exists in your Cosmic bucket.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16 pb-16">
      <PageHero 
        title={page.title}
        image={page.metadata.hero_image}
      />

      <section className="container mx-auto px-4 max-w-3xl">
        <Markdown content={page.metadata.content} />
      </section>
    </div>
  );
}