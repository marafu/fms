import React, {InputHTMLAttributes, useState, useEffect, useRef, useCallback} from 'react';
import {SvgIconProps} from '@material-ui/core'
import {useField} from '@unform/core' 

import { Container, Error } from './styles';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  description: string;
  icon?: React.ElementType<SvgIconProps>
}

const Input: React.FC<InputProps> = ({description, className, name, icon: Icon, children, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  
  const inputRef = useRef<HTMLInputElement>(null)
  
  const {defaultValue, error, fieldName, registerField} = useField(name);
  
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, [])
  
  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  },[])
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container className={className} isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      <label htmlFor={name} className="sr-only">{description}</label>
      {Icon ? <Icon style={{fontSize:20, marginRight: '16px'}} />: null}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur} 
        defaultValue={defaultValue} 
        ref={inputRef} 
        {...rest}/>  
        {error && (
          <Error title={error}>
            <ErrorOutlineIcon style={{color:'#c53030', fontSize: 20}} />
          </Error>
        )}
    </Container>
  );
}

export default Input;