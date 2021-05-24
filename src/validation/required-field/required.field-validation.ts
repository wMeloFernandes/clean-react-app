import { FieldValidation } from '@/validation/required-field/protocols'
import { RequiredFieldError } from '@/validation/required-field/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) { }

  validate(value: string): RequiredFieldError {
    return value ? null : new RequiredFieldError()
  }
}
