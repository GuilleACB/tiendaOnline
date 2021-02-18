export interface Message {
    $key?: string; //Angular necesita este campo.
    name: string;
    phone: string;
    email: string;
    message: string;
    politicalPrivacy: boolean;
  }