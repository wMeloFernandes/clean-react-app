import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) { }

  validate(value: string): RequiredFieldError {
    return value ? null : new RequiredFieldError()
  }
}
