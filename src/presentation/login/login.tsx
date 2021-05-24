import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Footer, Input } from '@/presentation/common'
import { LoginHeader, FormStatus } from '@/presentation/login/components'
import Context from '@/presentation/common/context/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

export const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button data-testid="submit" className={Styles.submit} type="submit" disabled>Entrar</button>
          <span className={Styles.link}> Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}
