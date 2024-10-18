import { FormEvent, useState } from "react";
import { TransactionItem, Transaction } from "../transactionItem";

interface TransactionsProps {
    transactions: Transaction[];
}

export function Transactions({ transactions }: TransactionsProps) {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState(transactions);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        setFilteredTransactions(transactions.filter(
            (transaction) => transaction.date >= new Date(fromDate) && transaction.date <= new Date(toDate)));
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>From: </label>
                    <input value={fromDate} onChange={(e) => setFromDate(e.target.value)} type="date" />
                </div>
                <div>
                    <label>To: </label>
                    <input value={toDate} onChange={(e) => setToDate(e.target.value)} type="date" />
                </div>
                <button className="bg-blue-700 text-white p-2 cursor-pointer" type="submit">Apply filter</button>
            </form>
            <ul className="my-5 flex flex-col gap-3">
                {filteredTransactions.map(({ id, date, description, amount }) =>
                    <li key={id}>
                        <TransactionItem id={id} description={description} amount={amount} date={date} />
                    </li>
                )}
            </ul>
        </>
    )
}