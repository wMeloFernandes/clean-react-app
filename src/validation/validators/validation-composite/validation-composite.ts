import { Validation } from '@/presentation/login/protocols/validations'
import { FieldValidation } from '@/validation/protocols'

export class ValidationComposite implements Validation {
  constructor(readonly validators: FieldValidation[]) { }

  static build (validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators)
  }

  validate(fieldName: string, fieldValue: string): string {
    const validators = this.validators.filter(v => v.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(fieldValue)
      if (error) {
        return error.message
      }
    }
  }
}
