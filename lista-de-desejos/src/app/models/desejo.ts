import { Produto } from "./produto";

export interface Desejo {
  produto: Produto;
  prioridade: 'baixa' | 'media' | 'alta';
}
