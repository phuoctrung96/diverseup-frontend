import { useEffect, useState } from 'react';

export const confirmValidate = (
  confirm: string,
  password: string,
  setError: any,
  watch: any,
  clearErrors: any
) => {
  const [validateTimeout, setValidateTimeout] = useState<any>(false);

  useEffect(() => {
    if (validateTimeout != false) {
      clearTimeout(validateTimeout);
    }
    setValidateTimeout(
      setTimeout(() => {
        if (confirm !== password) {
          setError('confirm', {
            type: 'confirm',
            message: 'Passwords do not match',
          });
        } else {
          clearErrors();
        }
      }, 500)
    );
  }, [watch('confirm'), watch('password')]);
};
