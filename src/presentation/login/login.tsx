import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/common/spinner/spinner'
import Header from '@/presentation/login/components/login-header/login-header'
import Footer from '@/presentation/common/footer/footer'
import Input from '@/presentation/common/input/input'

export const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}> Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}
