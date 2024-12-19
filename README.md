# expenseTracking
Ensure React (npm start) and FastAPI (uvicorn main:app --reload) are running.

Install Node.js 16
1/ nvm install 16
2/ nvm use 16

# Overview
The Expense Tracker is a web application built with a FastAPI backend and a React frontend. It allows users to track their expenses by adding, viewing, and categorizing them. This project demonstrates a full-stack implementation of a simple expense management system with a focus on scalability and modern web technologies.

# Features
- Add Expenses: Users can add expenses with details like name, amount, and category.
- View Expenses: A dynamic list of all expenses is displayed.
- Categorization: Expenses can be categorized for better organization.
- API Integration: Fully functional API to handle expense-related operations.
- Cross-Origin Requests: Configured backend CORS to enable seamless communication between frontend and backend.

# Technologies Used
- Frontend
React: For building the user interface.
Axios: For handling API requests.
React Hooks: For managing state and side effects.
- Backend
FastAPI: A modern Python framework for building APIs.
SQLAlchemy: For database management.
SQLite: A lightweight database for storing expenses.
- Development Tools
Uvicorn: ASGI server for running the FastAPI backend.
npm: Package manager for managing frontend dependencies.

# Usage
1. Navigate to http://localhost:3000 in your browser.
2. Add a new expense using the form on the homepage.
3. View all expenses in the dynamic list.

# Future Enhancements
- Add user authentication for personalized expense tracking.
- Support for filtering and sorting expenses by date or category.
- Integration with external APIs for currency conversion.
- Advanced reporting and analytics.

## Contributing
# Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -m "Add feature-name").
4. Push to the branch (git push origin feature-name).
5. Open a pull request.
