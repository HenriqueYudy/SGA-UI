import { MobileEmail } from './mobileEmail';
import { Chip } from './chip';
import { Colaborador } from './colaborador';
import { Celular } from './celular';

export class ColaboradorCelular {
    id: number;
    celular_id:  Celular = new Celular();
    colaborador_id: Colaborador = new Colaborador();
    data_comodato: Date;
    data_devolucao: Date;
    chip_id: Chip = new Chip();
    email_id: MobileEmail = new MobileEmail();
    termo_assinado : boolean;
    acessorios: string;
}