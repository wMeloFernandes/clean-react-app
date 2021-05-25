import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/presentation/router/router'
import { makeLogin } from '@/main/factories/login/login-factory'
import '@/presentation/common/styles/global.scss'

ReactDOM.render(<Router makeLogin={makeLogin} />, document.getElementById('main'))
