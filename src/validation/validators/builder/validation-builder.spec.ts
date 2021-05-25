import { EmailValidation } from '@/validation/validators/email/email-validation'
import { RequiredFieldValidation } from '@/validation/validators/required-field/required.field-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'
import { ValidationBuilder } from './validation-builder'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', async () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return EmailValidation', async () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return MinLengthValidation', async () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = ValidationBuilder.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('Should return a list of validations', async () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).required().min(5).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, 5),
      new EmailValidation(field)
    ])
  })
})
