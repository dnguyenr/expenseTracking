from fastapi import FastAPI
from database import engine, Base
from routes import expenses
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

# Initialize Database
Base.metadata.create_all(bind=engine)

# Include Routes
app.include_router(expenses.router)




# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from this origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}


# Run: uvicorn main:app --reload