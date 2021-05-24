import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Spinner, Footer, Input } from '@/presentation/common'
import { LoginHeader } from '@/presentation/login/components'
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
          <button className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}> Criar conta</span>
          <div data-testid="error-wrap" className={Styles.errorWrap}>
            {state.isLoading ? <Spinner className={Styles.spinner} /> : null}
            {state.errorMessage ? <span className={Styles.error}>Error</span> : null}
          </div>
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}
