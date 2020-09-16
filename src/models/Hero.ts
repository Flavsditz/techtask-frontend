export default class Hero {
  private readonly _name: string;
  private readonly _ability: string;

  constructor(name: string, ability: string) {
    this._name = name;
    this._ability = ability;
  }

  get name(): string {
    return this._name;
  }

  get ability(): string {
    return this._ability;
  }

  static fromJson(jsonData: Record<string, any>): Hero {
    return new Hero(
      this.extractInfoOr(jsonData, "name", ""),
      this.extractInfoOr(jsonData, "ability", "")
    );
  }

  private static extractInfoOr(
    jsonData: Record<string, any>,
    key: string,
    elseValue: any
  ) {
    return Object.prototype.hasOwnProperty.call(jsonData, key)
      ? jsonData[key]
      : elseValue;
  }
}
