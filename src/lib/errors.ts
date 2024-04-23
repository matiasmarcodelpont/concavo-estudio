class ErrorFactory extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}

export class DoesNotExistError extends ErrorFactory {
  static code = 'not_exist'
}
