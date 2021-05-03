import {ValidationError} from 'yup'

interface ErrorsTypes {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError) {
  const myValidationError: ErrorsTypes = {}
  
  err.inner.forEach(error => {
    const key = error.path
    myValidationError[key ? key :'error'] = error.message 
  })

  return myValidationError
}