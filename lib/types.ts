export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  type: string;
  created_at: string;
  modified_at: string;
  metadata: Record<string, any>;
}

export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    hero_image: CosmicImage;
    content: string;
    seo_description?: string;
  };
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    short_description: string;
    full_description?: string;
    service_icon?: CosmicImage;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote: string;
    role_company: string;
    client_photo?: CosmicImage;
  };
}

export interface CosmicResult<T> {
  objects: T[];
  total: number;
}