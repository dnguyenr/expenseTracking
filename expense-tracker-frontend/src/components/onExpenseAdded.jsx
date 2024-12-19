import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import axios from "axios";

function App() {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get("http://localhost:8000/expenses/");
            setExpenses(response.data);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        }
    };

    const handleExpenseAdded = () => {
        fetchExpenses(); // Refresh the expense list when a new expense is added
    };

    React.useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div>
            <h1>Expense Tracker</h1>
            {/* Pass handleExpenseAdded to ExpenseForm */}
            <ExpenseForm onExpenseAdded={handleExpenseAdded} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default App;
