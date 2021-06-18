export type STATUS = 'LEIDO' | 'BORRADO'
export interface Message {
    $key?: string; //Angular necesita este campo.
    name: string;
    phone: string;
    email: string;
    message: string;
    politicalPrivacy: boolean;
    fecha_hora?: number;
    estado?:STATUS;
  }
