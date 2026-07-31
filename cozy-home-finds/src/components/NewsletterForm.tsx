"use client";

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto p-4 bg-[#8A947B]/30 border border-[#C9A66B]/50 rounded-full">
        <p className="text-[#FAF8F4] font-medium text-sm">
          Welcome to the community! Check your inbox to confirm.
        </p>
      </div>
    );
  }

  return (
    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={subscribe}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address" 
        className="flex-1 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#2F2F2F] placeholder:text-[#8A947B] focus:outline-none focus:ring-4 focus:ring-[#C9A66B]/50 transition-all disabled:opacity-50 border border-[#DDD6C8]"
        required
        disabled={status === 'loading'}
      />
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="px-8 py-3.5 bg-[#C9A66B] hover:bg-[#B89B5E] text-[#2F2F2F] font-semibold rounded-full transition-colors whitespace-nowrap shadow-lg hover:shadow-[#4E5B47]/30 disabled:opacity-70"
      >
        {status === 'loading' ? 'Joining...' : 'Subscribe'}
      </button>
      
      {status === 'error' && (
        <p className="text-red-300 text-sm absolute -bottom-6 left-0 right-0">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
}
