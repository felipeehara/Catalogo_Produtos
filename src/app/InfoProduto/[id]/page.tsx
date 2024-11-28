'use client'; 

import { produtos } from "../../Data/Produtos";
import { useState, useEffect } from "react";

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

  if (isLoading) return <div>Carregando...</div>;
  if (!produto) return <div>Produto não encontrado</div>;

  return (
    <div className="p-4">
      <div className="max-w-lg mx-auto">
        <img className="w-full h-64 object-cover" src={produto.imagem} alt={produto.nome} />
        <h1 className="text-3xl font-bold mt-4">{produto.nome}</h1>
        <p className="text-xl text-gray-700 mt-2">Categoria: {produto.categoria}</p>
        <p className="text-lg text-gray-900 font-bold mt-2">Preço: {produto.preco}</p>
        <p className="mt-4">{produto.descricao}</p>
      </div>
    </div>
  );
}
