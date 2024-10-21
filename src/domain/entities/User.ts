export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    private _cpf: string
  ) {
    this.setCpf(_cpf);
  }

  get cpf(): string {
    return this._cpf;
  }

  private setCpf(cpf: string): void {
    if (!this.isValidCpfFormat(cpf)) {
      throw new Error('CPF inválido');
    }
    this._cpf = cpf;
  }

  private isValidCpfFormat(cpf: string): boolean {
    return /^\d{11}$/.test(cpf);
  }
}