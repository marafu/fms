import React, {createContext, useState, useContext} from 'react'

export enum Value {
  on = 1,
  off = 0,
}

export interface Modal {
  isVisibleModal: Value;
  setIsVisibleModal: (value: Value) => void;

}

const ModalContext =  createContext<Modal>({isVisibleModal: Value.off, setIsVisibleModal: () => console.warn('Error')});


const ModalProvider: React.FC = ({children}) => {
  const [isVisibleModal, setIsVisibleModal] = useState(0);
  return (
    <ModalContext.Provider value={{isVisibleModal, setIsVisibleModal}}>
      {children}
    </ModalContext.Provider>)
} 

function useModal () {
  const {isVisibleModal, setIsVisibleModal} = useContext(ModalContext)
  function disableModal(): void {
    setIsVisibleModal(Value.off)
  }
  function enableModal(): void {
    setIsVisibleModal(Value.on)
    console.log('clicou' + Value.on)
  }
  return {isVisibleModal, enableModal, disableModal}
}

export {useModal, ModalProvider}