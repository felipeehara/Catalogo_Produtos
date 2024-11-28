import { imagens } from "../app/Data/Equipamentos"; // Ajuste o caminho conforme necessário
import CardEquipamento from "./components/CardEquipamento/CardEquipamento";

export default function Home() {
  return (
    <div>
      {imagens.map((equipamento, index) => (
        <CardEquipamento
          key={index}
          nomeEquipamento={equipamento.nome}
          imagem={equipamento.link}
          alt={equipamento.nome} 
        />
      ))}
    </div>
  );
}
