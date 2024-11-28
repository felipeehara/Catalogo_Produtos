import Link from "next/link";

type CardProdutoProps = {
  nomeProduto: string;
  imagem: string;
  categoria: string;
  preco: string;
  id: string;
};

export default function CardProduto({
  nomeProduto,
  imagem,
  categoria,
  preco,
  id,
}: CardProdutoProps) {
  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40 relative h-[500px]">
      <img
        className="w-full h-64 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
        src={imagem}
        alt={nomeProduto}
      />
      <div className="px-6 py-4 flex flex-col justify-between h-full">
        <div>
          <div className="font-extrabold text-2xl text-gray-900 mb-2 hover:text-indigo-600 transition-colors duration-300">
            {nomeProduto}
          </div>
          <p className="text-gray-600 text-base mb-2">Categoria: {categoria}</p>
          <p className="text-gray-800 font-semibold text-xl mb-4">{preco}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gray-100 px-6 py-4">
          <Link
            href={`/InfoProduto/${id}`}
            className="text-white bg-gradient-to-r from-blue-500 to-indigo-600 text-lg font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 w-full block text-center transition-all duration-300"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}
