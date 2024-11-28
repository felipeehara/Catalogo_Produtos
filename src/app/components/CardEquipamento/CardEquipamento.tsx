import Link from "next/link";

type CardProdutoProps = {
  nomeProduto: string;
  imagem: string;
  categoria: string;
  preco: string;
  id: string;
};

export default function CardProduto({ nomeProduto, imagem, categoria, preco, id }: CardProdutoProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-64 object-cover" src={imagem} alt={nomeProduto} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nomeProduto}</div>
        <p className="text-gray-700 text-base">Categoria: {categoria}</p>
        <p className="text-gray-900 font-bold text-lg">Preço: {preco}</p>
      </div>
      <div className="px-6 py-4">
        <Link href={`/InfoProduto/${id}`} className="text-blue-500 hover:underline">
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}
