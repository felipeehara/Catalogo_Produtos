import Image from "next/image";

export interface infoEquipamentoProps {
    nomeEquipamento: string;
    imagem: string;
    alt:string;
}

export default function CardEquipamento(props: infoEquipamentoProps) {
  return (
    <div className="h-96 w-64 bg-white rounded-md">
        <h1 className="text-bold uppercase text-black text-center text-xl">{props.nomeEquipamento}</h1>
        <Image src={props.imagem} alt={props.alt} />

        <div className="flex items-center justify-center">
            <button className="uppercase text-black text-xl border border-black p-4 rounded-xl">Ver Informações</button>
        </div>
    </div>
  );
}
