export class DynamicPropertyError extends Error {
  constructor(
    public message: string,
    public propertyName: string
  ) {
    super(message);
    this.name = `DynamicPropertyError/${propertyName}`;
  }
}
