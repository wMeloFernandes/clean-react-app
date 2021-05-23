import React, { memo } from 'react'
import Styles from './login-header.scss'
import Logo from '@/presentation/login/components/logo/logo'

const Spinner: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev Enquetes para Programdores</h1>
    </header>
  )
}

export default memo(Spinner)
