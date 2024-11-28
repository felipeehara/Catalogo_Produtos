'use client';

import Header from "@/app/components/Header/Header";
import { produtos } from "../../Data/Produtos";
import { useState, useEffect } from "react";
import Head from "next/head";

interface Produto {
  id: string;
  nome: string;
  imagem: string;
  categoria: string;
  preco: string;
  descricao: string;
}

export default function ProdutoDetalhes({ params }: { params: { id: string } }) {
  const [produto, setProduto] = useState<Produto | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params.id) {
      const produtoEncontrado = produtos.find((p) => p.id === params.id);
      if (produtoEncontrado) {
        setProduto(produtoEncontrado);
      }
      setIsLoading(false);
    }
  }, [params.id]);

  if (isLoading) return <div className="text-center text-xl text-gray-700">Carregando...</div>;
  if (!produto) return <div className="text-center text-xl text-red-600">Produto não encontrado</div>;

  return (
    <div>
      <Header/>
      <div className="p-6 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <div className="relative w-full">
            
            <img
              className="w-full h-64 object-contain rounded-lg shadow-lg transition-transform transform hover:scale-105"
              src={produto.imagem}
              alt={produto.nome}
            />
          
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mt-6 hover:text-indigo-700 transition-colors duration-300">{produto.nome}</h1>
          <p className="text-lg text-gray-700 mt-2">Categoria: <span className="font-semibold">{produto.categoria}</span></p>
          <p className="text-2xl text-indigo-600 font-bold mt-2">Preço: {produto.preco}</p>
          <p className="text-lg text-gray-800 mt-4">{produto.descricao}</p>

          <div className="mt-6 text-center">
            <a
              href="#"
              className="inline-block px-6 py-3 mt-4 text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Comprar Agora
            </a>
          </div>
        </div>
      </div>
    </div>  
  );
}
