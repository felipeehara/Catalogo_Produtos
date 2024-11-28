'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logoCimerian from "../../../../public/Images/logo_cimerianeditado.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu no mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black bg-opacity-10 text-gray-800 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
            <Image
              src={logoCimerian}
              alt="Logo Cimerian"
              width={200} 
              height={40}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Botão Hamburger para mobile */}
        <button
          className="lg:hidden text-3xl text-gray-800 ml-10"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navegação para desktop */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="text-lg hover:text-blue-600 transition-colors duration-300 text-white">
            Home
          </Link>
          <Link href="/" className="text-lg hover:text-blue-600 transition-colors duration-300 text-white">
            Produtos
          </Link>
          <Link href="/" className="text-lg hover:text-blue-600 transition-colors duration-300 text-white">
            Sobre
          </Link>
          <Link href="/" className="text-lg hover:text-blue-600 transition-colors duration-300 text-white">
            Contato
          </Link>
        </nav>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-100 text-gray-800 py-4 px-6 space-y-4 shadow-inner`}
      >
        <Link href="/" className="block text-lg hover:text-blue-600 transition-colors duration-300">
          Home
        </Link>
        <Link href="/" className="block text-lg hover:text-blue-600 transition-colors duration-300">
          Produtos
        </Link>
        <Link href="/" className="block text-lg hover:text-blue-600 transition-colors duration-300">
          Sobre
        </Link>
        <Link href="/" className="block text-lg hover:text-blue-600 transition-colors duration-300">
          Contato
        </Link>
      </div>
    </header>
  );
}
