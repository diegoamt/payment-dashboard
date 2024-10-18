export interface Transaction {
    id: string;
    date: Date;
    description: string;
    amount: number;
}

export function TransactionItem({ id, date, description, amount }: Transaction) {
    return (
        <div className="p-5 bg-gray-100 rounded-lg flex gap-2 items-center">
            <div className="text-xl font-bold">$ {amount}</div>
            <div className="grow text-gray-800 text-sm">{description}</div>
            <div className="text-gray-800 text-sm">{date.toLocaleDateString()}</div>
        </div>
    )
}