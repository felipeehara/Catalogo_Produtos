import Header from "@/app/components/Header/Header";
import { produtos } from "../../Data/Produtos";
import Footer from "@/app/components/Footer/Footer";
import { ButtonReturn } from "@/app/components/ButtonReturn/ButtonReturn";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function ProdutoDetalhes({ params }: {params:Promise<{id:string}>} ) {

  const {id} = await params 

  const produto = produtos.find(produtoFind => produtoFind.id === id) 
  if (!produto) redirect('/')

  return (
    <div>
      <Header />
      <div className="p-6 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <div>
            <ButtonReturn />
          </div>
          <div className="relative w-full">
            <Image
              className="w-full h-64 object-contain rounded-lg shadow-lg transition-transform transform hover:scale-105"
              src={produto.imagem}
              alt={produto.nome}
              width={500}
              height={500}
            />
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mt-6 hover:text-indigo-700 transition-colors duration-300">
            {produto.nome}
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Categoria: <span className="font-semibold">{produto.categoria}</span>
          </p>
          <p className="text-2xl text-indigo-600 font-bold mt-2">Preço: {produto.preco}</p>
          <p className="text-lg text-gray-800 mt-4">{produto.descricao}</p>

          <div className="mt-6 text-center">
            <Link
              href="#"
              className="inline-block px-6 py-3 mt-4 text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Comprar Agora
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
