import { Situacao } from "./Situacao";

export class Celular {
    id: number;
    marca: string;
    modelo: string;
    imei: string;
    imei02: string;
    serial: string;
    sub_modelo: string;
    versao_so: string;
    cor: string;
    alocado: boolean;
    observacao: string;
    estragado: boolean;
    data_aquisicao: Date;
    motivo_danificado: string;
    situacao_id: Situacao = new Situacao();
}