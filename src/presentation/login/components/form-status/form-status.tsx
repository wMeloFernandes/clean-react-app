import React, { useContext } from 'react'
import Styles from './form-status.scss'
import Spinner from '@/presentation/common/spinner/spinner'
import Context from '@/presentation/common/context/form/form-context'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && < Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
