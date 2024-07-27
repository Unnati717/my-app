# my-app

Short Project Structure
C:\
└── Users
    └── KIIT
        └── Desktop
            └── my-app
                ├── backend
                │   ├── app.py
                │   ├── config.py
                │   ├── requirements.txt
                │   └── venv (this will be created)
                └── frontend (this will be created by create-react-app)

# Test Case Web Application

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Create a virtual environment and activate it.
   ```sh
   python -m venv venv
   .\venv\Scripts\activate

pip install -r requirements.txt

python
>>> from app import db
>>> db.create_all()
>>> exit()

python app.py

** FRONTEND **

npm install

REACT_APP_API_URL=http://localhost:5000

npm start



