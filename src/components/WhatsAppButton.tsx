import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '258876450559'; // Include country code
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}