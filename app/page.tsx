"use client";

import { useState, useEffect } from "react";

import { Transaction } from "./components/transactionItem";
import { Transactions } from "./components/transactions";

const getTransactions = () => {
  return new Promise<Transaction[]>((resolve, reject) => {
    const transactions = [
      { id: '1', description: 'payment 1', date: new Date('2024-05-01'), amount: 300 },
      { id: '2', description: 'payment 2', date: new Date('2024-02-02'), amount: 150 },
      { id: '3', description: 'payment 3', date: new Date('2024-06-03'), amount: 400 },
    ];

    setTimeout(() => resolve(transactions as Transaction[]), 1000);
  });
}

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data:Transaction[] = await getTransactions();
        setTransactions(data);
      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if(isError) {
    return <div>something went wrong getting the transations</div>
  }

  if(isLoading) {
    return <div>loading...</div>
  }
  
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-2xl text-center">Payment transaction dashbaord</h1>
      <Transactions transactions={transactions} />
    </main>
  );
}
