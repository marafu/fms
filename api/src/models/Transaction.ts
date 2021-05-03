import { v4 } from 'uuid';


export default class Transaction {
  id: string;

  description: string;
  
  type: string;
  
  date: Date;
  
  amount: number;

  constructor(description: string, type: string, date: Date, amount: number) {
    this.id = v4()
    this.description = description
    this.type = type
    this.date = date
    this.amount = amount
  }
}