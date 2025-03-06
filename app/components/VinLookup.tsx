"use client";

import { useState } from "react";

export default function VinLookup() {
  const [vin, setVin] = useState("");
  const [error, setError] = useState<string | null>(null);

  const fetchSticker = () => {
    if (!vin || vin.length < 17) {
      setError("Please enter a valid 17-character VIN.");
      return;
    }

    setError(null); // Reset previous errors
    const url = `https://www.toyotaofdowntownla.com/api/OEMProgramsCommon/ToyotaDDOAWindowSticker?vin=${vin}`;

    // Open the window sticker in a new tab
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Toyota/Lexus Window Sticker Lookup</h1>
      <input
        type="text"
        placeholder="Enter VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
        className="p-2 border rounded w-full max-w-md"
      />
      <button
        onClick={fetchSticker}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Get Window Sticker
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
