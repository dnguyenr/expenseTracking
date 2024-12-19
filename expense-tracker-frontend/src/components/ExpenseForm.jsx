import React, { useState } from "react";
import axios from "axios";

function ExpenseForm({ onExpenseAdded }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form refresh
        const newExpense = { name, amount: parseFloat(amount), category };

        try {
            // Send the new expense to the backend
            await axios.post("http://localhost:8000/expenses/", newExpense);

            console.log("Expense added successfully!");

            // Call the parent-provided callback
            if (onExpenseAdded && typeof onExpenseAdded === "function") {
                onExpenseAdded();
            }

            // Reset the form
            setName("");
            setAmount("");
            setCategory("");
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Expense</h3>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Category:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;

// import React, { useState } from "react";
// import axios from "axios";

// function ExpenseForm({ onExpenseAdded }) {
//     const [name, setName] = useState("");
//     const [amount, setAmount] = useState("");
//     const [category, setCategory] = useState("");

//     const handleSubmit = async (event) => {
//         event.preventDefault(); // Prevent form refresh
//         const newExpense = { name, amount: parseFloat(amount), category };

//         try {
//             // Send the new expense to the backend
//             const response = await axios.post("http://127.0.0.1:8000/expenses/", newExpense);
//             console.log("Expense added:", response.data);

//             // Notify the parent component (if needed)
//             onExpenseAdded(response.data);

//             // Reset the form
//             setName("");
//             setAmount("");
//             setCategory("");
//         } catch (error) {
//             console.error("Error adding expense:", error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h3>Add New Expense</h3>
//             <div>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Amount:</label>
//                 <input
//                     type="number"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Category:</label>
//                 <input
//                     type="text"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     required
//                 />
//             </div>
//             <button type="submit">Add Expense</button>
//         </form>
//     );
// }

// export default ExpenseForm;
