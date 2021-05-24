export class UnexpectedError extends Error {
  constructor() {
    super('Unexpected Error. Try again later!')
    this.name = 'UnexpectedError'
  }
}
