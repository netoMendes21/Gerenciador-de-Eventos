import { Id } from "../../../../core/src";
import Evento from "../model/Evento";

export default function criarEventoVazio(): Partial<Evento> {
  return {
    id: Id.novo(),
    nome: "",
    descricao: "",
    data: new Date(),
    local: "",
    publicoEsperado: 1,
    imagem: "",
    imagemBackground: "",
  };
}
