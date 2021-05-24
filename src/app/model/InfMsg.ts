export type MSG_STATUS = 'OK' | 'ERROR';
export interface InfMsg {
    status: MSG_STATUS;
    timeStamp: string;
    msg?:string;
  }