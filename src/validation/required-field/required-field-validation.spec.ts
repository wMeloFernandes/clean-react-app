import { RequiredFieldValidation } from '@/validation/required-field/required.field-validation'
import { RequiredFieldError } from '@/validation/required-field/errors'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', async () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', async () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})