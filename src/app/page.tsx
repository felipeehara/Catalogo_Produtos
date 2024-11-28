"use client";

import { useState } from "react";
import { produtos } from "../app/Data/Produtos"; 
import CardProduto from "./components/CardEquipamento/CardEquipamento";

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
      {/* Filtro e Busca */}
      <div className="flex justify-between mb-4">
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Buscar produto..."
            className="p-2 border border-gray-300 rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select
            className="p-2 border border-gray-300 rounded"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? "Todas as Categorias" : category}
              </option>
            ))}
          </select>
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
    </div>
  );
}
