export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Contact Us</h1>
      <div className="prose prose-stone lg:prose-lg">
        <p>
          We love hearing from our readers and partnering with brands that align with our cozy aesthetic!
        </p>
        
        <h3 className="text-2xl font-serif mt-8 mb-4">Collaborations & Partnerships</h3>
        <p>
          If you are a brand looking to collaborate on sponsored content, product reviews, or social media campaigns, please email us directly. We are always looking for aesthetic, renter-friendly, and high-quality home finds to share with our audience.
        </p>

        <h3 className="text-2xl font-serif mt-8 mb-4">Get In Touch</h3>
        <p>
          For all inquiries, please email us at:<br />
          <strong><a href="mailto:smith9802j@gmail.com" className="text-stone-600 hover:text-stone-900">smith9802j@gmail.com</a></strong>
        </p>
        
        <p className="mt-8 text-sm text-stone-500">
          *Please allow 24-48 business hours for a response.
        </p>
      </div>
    </div>
  );
}
