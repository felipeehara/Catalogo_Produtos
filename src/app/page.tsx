"use client";

import { useState } from "react";
import { produtos } from "../app/Data/Produtos"; 
import CardProduto from "./components/CardEquipamento/CardEquipamento";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = produtos.filter((produto) => {
    const matchesSearch = produto.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || produto.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", "eletronicos", "roupas", "livros"]; 

  return (
    <div className="p-4">
      <Header/>
      {/* Filtro e Busca */}
<div className="flex justify-between mb-4">
  <div className="relative w-1/3">
    <input
      type="text"
      placeholder="Buscar produto..."
      className="p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-blue-500 transition-all duration-300 w-80 ml-2 md:w-[450px]"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {/* Ícone de Busca */}
    <div className="absolute left-3 top-3 text-gray-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0012.55 12.55z"
        />
      </svg>
    </div>
  </div>
</div>


      {/* Lista de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((produto) => (
          <CardProduto
            key={produto.id}
            nomeProduto={produto.nome}
            imagem={produto.imagem}
            categoria={produto.categoria}
            preco={produto.preco}
            id={produto.id}
          />
        ))}
      </div>

      <Footer/>
    </div>
  );
}
