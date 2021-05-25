import React from 'react'
import { Login } from '@/presentation/login/login'
import { makeRemoteAuthentication } from '@/main/factories/authentication/remote-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  const url = 'http://fordevs.herokuapp.com/api/login'
  return (
    <Login
      authentication={makeRemoteAuthentication(url)}
      validation={makeLoginValidation()}
    />
  )
}
