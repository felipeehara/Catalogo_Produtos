'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-20 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg">© 2024 Sua Empresa. Todos os direitos reservados.</p>
        <div className="mt-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-indigo-300 transition-colors duration-300 mx-4"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-indigo-300 transition-colors duration-300 mx-4"
          >
            Instagram
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-indigo-300 transition-colors duration-300 mx-4"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
