import React, { useContext } from 'react'
import Styles from './form-status.scss'
import Spinner from '@/presentation/common/spinner/spinner'
import Context from '@/presentation/common/context/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {state.mainError && (
        <span data-testid="main-error" className={Styles.error}>
          {state.mainError}
        </span>
      )}
    </div>
  )
}

export default FormStatus
