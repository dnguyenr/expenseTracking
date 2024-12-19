
import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import axios from "axios";

function App() {
    const [expenses, setExpenses] = useState([]);

    // Fetch expenses from the backend
    const fetchExpenses = async () => {
        try {
            const response = await axios.get("http://localhost:8000/expenses/");
            setExpenses(response.data);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        }
    };

    // Function to handle adding a new expense
    const handleExpenseAdded = () => {
        fetchExpenses(); // Refresh the expense list
    };

    // Fetch expenses when the component loads
    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div>
            <h1>Expense Tracker</h1>
            {/* Pass handleExpenseAdded to ExpenseForm */}
            <ExpenseForm onExpenseAdded={handleExpenseAdded} />
            {/* Pass expenses to ExpenseList */}
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default App;

