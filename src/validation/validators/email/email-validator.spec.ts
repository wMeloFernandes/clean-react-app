import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

describe('EmailValidation', () => {
  test('Should return error if email is invalid', async () => {
    const sut = new EmailValidation('email')
    const error = sut.validate(faker.internet.email())
    expect(error).toEqual(new InvalidFieldError())
  })
})
