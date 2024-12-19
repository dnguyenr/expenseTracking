import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

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

    // Add expense
    const handleAddExpense = async (newExpense) => {
        try {
            const response = await axios.post("http://localhost:8000/expenses/", newExpense);
            setExpenses((prevExpenses) => [...prevExpenses, response.data]);
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    };

    // Delete expense
    const handleDeleteExpense = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/expenses/${id}`);
            setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
        } catch (error) {
            console.error("Error deleting expense:", error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm onAddExpense={handleAddExpense} />
            <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        </div>
    );
}

export default App;