
export class Command {
  public key:string;
  public children?:Command[];
  public text:string;
  public textAfterExecute?:string;
  public execute?:(obj:any) => void;

  constructor(values:any = {}) {
    Object.assign(this, values);
  }
}
