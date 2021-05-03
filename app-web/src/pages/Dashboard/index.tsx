import React, {useState, useEffect, useRef, useCallback} from 'react';
import axios from 'axios'
import * as Yup from 'yup';


import { Container, Overlay, Content, ModalForm, InputGroup, ButtonGroup } from './styles';

import { Form } from '@unform/web'
import {FormHandles} from '@unform/core'


import Balance from '../../components/Balance'
import Transaction from '../../components/Transaction'
import List from '../../components/Transaction/List'
import Title from '../../components/Transaction/List/Title'
import Item from '../../components/Transaction/List/Item'
import Modal from '../../components/Transaction/Modal'
import Button from '../../components/Button'
import Input from '../../components/Input'

import DescriptionIcon from '@material-ui/icons/Description';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import getValidationErrors from '../../utils/getValidationErrors'

interface ITransactionObject {
  id: string;
  description: string;
  type: string;
  date: Date;
  amount: number;
}

const Dashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const formRef = useRef<FormHandles>(null)
  const [transactionList, setTransactionList] = useState<Array<ITransactionObject>>([])
  
  const submitHandler = useCallback(async (data: Object) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        description: Yup.string().min(3, 'No mínimo 3 digitos'),
        amount: Yup.number().required().typeError('O valor não é válido'),
        date: Yup.date().required().typeError('É necessário uma data')
      })
      await schema.validate(data, {
        abortEarly: false
      })

      const res = await axios.post('http://10.0.0.103:8888/api/v1/transactions', data)
      if (res.status === 200){
        const response = await axios.get('http://localhost:8888/api/v1/transactions')
        setTransactionList(response.data)
        setIsVisible(false)
      }
      
    } catch (error) {
      const errors = getValidationErrors(error)
      formRef.current?.setErrors(errors)
    }
  }, [])

  useEffect(() => {
    async function getItems() {
      const response = await axios.get('http://localhost:8888/api/v1/transactions')
      setTransactionList(response.data)
      console.log(response.data)
    }
    getItems()
  }, []);

  return (
      <Container>
        <Balance/>
        <Transaction>
          <button className="new" onClick={() => setIsVisible(true)}>
            <span>Nova Transação</span>
          </button>
          <h2 className="sr-only">Transações</h2>
            <List>
            <Title titleOne="Descrição" titleTwo="Valor" titleThree="Data"/>
              {transactionList.map(item => (
                <Item 
                  id={item.id} 
                  description={item.description} 
                  type={item.type} 
                  date={item.date} 
                  amount={item.amount}
                />))
                }
              </List>
          {isVisible && (
            <Modal>
            <Overlay  onClick={() => setIsVisible(false)}></Overlay>
            <Content>
              <ModalForm>
                <h2>Nova transação</h2>
                <Form 
                  ref={formRef}
                  autoComplete="off" 
                  onSubmit={submitHandler}
                  >
                  <InputGroup>
                    <Input 
                      description="Descrição" 
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Descrição"
                      icon={DescriptionIcon}/>
                  </InputGroup>
                  <InputGroup>
                    <Input 
                      description="Valor" 
                      type="number"
                      step="0.01"
                      id="amount"
                      name="amount"
                      placeholder="Valor"
                      icon={AttachMoneyOutlinedIcon}/>
                    <small className="help">Use o sinal - (negativo) para despesas e , (vírgula) para casas decimais</small>
                  </InputGroup>
                  <InputGroup>
                    <Input 
                      description="Data" 
                      type="date"
                      id="date"
                      name="date"
                      placeholder="Data"
                      icon={CalendarTodayIcon}/>
                  </InputGroup>
                  <ButtonGroup>
                    <Button type="reset" id="cancel" className="cancel" name="cancel" onClick={() => setIsVisible(false)}>Cancelar</Button>
                    <Button type="submit" id="submit" className="submit" name="submit">Enviar</Button>
                  </ButtonGroup>
                </Form>
              </ModalForm>
            </Content>
          </Modal>)}
        </Transaction>
      </Container>
  );
}

export default Dashboard;