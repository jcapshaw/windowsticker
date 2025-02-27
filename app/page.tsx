"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Heading with fade-in effect */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Welcome to the VIN Lookup Tool
      </motion.h1>

      {/* Subtitle with delay */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-700 mb-4"
      >
        Retrieve your Toyota window sticker easily.
      </motion.p>

      {/* Button with hover/tap effects */}
      <Link href="/vin">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-red-700 transition"
        >
          Get Toyota Window Sticker
        </motion.button>
      </Link>
    </main>
  );
}
