import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-16 pt-8">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            
            <div className="flex items-start space-x-4">
              <div className="bg-muted p-3 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">hello@agency.com</p>
                <p className="text-muted-foreground">support@agency.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-muted p-3 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground">Mon-Fri 9am-6pm EST</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-muted p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Office</h3>
                <p className="text-muted-foreground">
                  123 Creative Avenue<br />
                  Suite 400<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}