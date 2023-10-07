export class User {
  constructor(
    private _email: string,
    private _token: string,
    private _localId: string,
    private _expirationDate: Date
  ) {}

  public get expirationDate() {
    return this._expirationDate;
  }
}
