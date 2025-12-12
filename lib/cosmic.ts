import { createBucketClient } from '@cosmicjs/sdk';
import { Page, Service, Testimonial } from './types';

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || 'empty-bucket',
  readKey: process.env.COSMIC_READ_KEY || 'empty-key',
  writeKey: process.env.COSMIC_WRITE_KEY || 'empty-key',
});

export async function getPage(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'pages',
        slug,
      })
      .props(['id', 'slug', 'title', 'metadata', 'type'])
      .depth(1);
      
    return response.object as Page;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'services',
      })
      .props(['id', 'slug', 'title', 'metadata', 'type'])
      .depth(1);
      
    return response.objects as Service[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'services',
        slug,
      })
      .props(['id', 'slug', 'title', 'metadata', 'type'])
      .depth(1);
      
    return response.object as Service;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching service:', error);
    return null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'testimonials',
      })
      .props(['id', 'slug', 'title', 'metadata', 'type'])
      .depth(1);
      
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching testimonials:', error);
    return [];
  }
}