'use client';

export default function Newsletter() {
  return (
    <section className="bg-stone-900 text-stone-50 py-16 sm:py-24 mt-16 rounded-3xl mx-4 md:mx-8 mb-8 shadow-2xl">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Join the Cozy Home Community
        </h2>
        <p className="text-stone-300 mb-8 text-lg">
          Get our weekly curation of designer-approved spaces, organization hacks, and exclusive Amazon deals sent directly to your inbox.
        </p>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-6 py-3.5 rounded-full text-stone-900 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-shadow"
            required
          />
          <button 
            type="submit" 
            className="px-8 py-3.5 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-full transition-colors whitespace-nowrap shadow-lg hover:shadow-amber-900/50"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-stone-400 text-sm mt-5">
          No spam, ever. Just beautiful homes. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
