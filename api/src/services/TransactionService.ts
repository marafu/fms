import { Request, Response } from 'express';
import Transaction from '../models/Transaction';


const transactionsList: Transaction[] = [];

export const TransactionService = {
  async save(request: Request, response: Response) {
    const { description, date, amount } = request.body;
    const valueAmount = Number(amount);
    const valueDate = new Date(date)
   
    if (valueAmount < 0) {
      const type:any = 'expense';
      const transactionExpense = new Transaction(description, type, valueDate, valueAmount);
      transactionsList.push(transactionExpense);
      return response.status(200).send();
    }

    const type:any = 'income';
    const transactionIncome = new Transaction(description, type, valueDate, valueAmount);
    transactionsList.push(transactionIncome);
    return response.status(200).send();
  },
  async show(request: Request, response: Response) {
    return response.json(transactionsList);
  },
  async delete(request: Request, response: Response) {
    const {id} = request.params
    const findById = transactionsList.find(transaction => transaction.id === id)
    transactionsList.splice(findById, 1)
    return response.json();
  },
};
