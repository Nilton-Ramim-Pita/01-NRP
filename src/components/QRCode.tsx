import React from 'react';

export function QRCode() {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/258876450559`;
  
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <img
        src={qrCodeUrl}
        alt="WhatsApp QR Code"
        className="w-48 h-48"
      />
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
        Escaneie para conversar no WhatsApp
      </p>
    </div>
  );
}