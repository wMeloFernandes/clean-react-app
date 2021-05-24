import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, readonly minLength: number) { }
  validate(value: string): InvalidFieldError {
    return value.length > this.minLength ? null : new InvalidFieldError()
  }
}
