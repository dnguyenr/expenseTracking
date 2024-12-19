import React from "react";

function ExpenseList({ expenses, onDeleteExpense }) {
    return (
        <div>
            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        {expense.name} - ${expense.amount} ({expense.category})
                        <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ExpenseList() {
//     const [expenses, setExpenses] = useState([]);

//     // Fetch expenses from the backend
//     useEffect(() => {
//         fetchExpenses();
//     }, []);

//     const fetchExpenses = async () => {
//         try {
//             const response = await axios.get("http://localhost:8000/expenses/");
//             setExpenses(response.data);
//         } catch (error) {
//             console.error("Error fetching expenses:", error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8000/expenses/${id}`);
//             console.log(`Expense with ID ${id} deleted successfully`);
//             // Refresh the expense list after deleting
//             fetchExpenses();
//         } catch (error) {
//             console.error("Error deleting expense:", error);
//         }
//     };

//     return (
//         <div>
//             <h2>Expense List</h2>
//             <ul>
//                 {expenses.map((expense) => (
//                     <li key={expense.id}>
//                         {expense.name} - ${expense.amount} ({expense.category})
//                         <button onClick={() => handleDelete(expense.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ExpenseList;
