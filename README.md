Quil - User Management System 🧵

Quil is a full-stack user management web application built using Node.js, Express, MongoDB, and EJS with session-based authentication. It features separate flows for users and admins, with full CRUD operations and secure session handling.

🌐 Live Demo

[Coming Soon]

🚀 Features

👤 User:

Register and log in

Access a user home page

View product cards fetched from dummyjson API

Secure logout with session management

🔧 Admin:

Register and log in

Create new users

Edit existing users

Search/find users

Delete users

Block and unblock users

Full user management dashboard

🧐 Key Highlights

Session-based authentication using express-session

Proper cache management — Chrome's back/forward cache (bfcache) issue resolved

Clean UI rendered with EJS

Organized route structure with middlewares and services

Separate admin and user views

Landing page available at base / route

🛠 Tech Stack

Backend: Node.js, Express.js

Frontend: EJS, HTML, CSS

Database: MongoDB with Mongoose

Authentication: Sessions (express-session)

Packages Used:express, mongoose, dotenv, bcrypt, express-session, connect-mongo, method-override, body-parser, and more

📁 Folder Structure

Quil/
├── public/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── services/
│   ├── utils/
│   ├── views/
│   │   ├── admin/
│   │   └── users/
│   └── ...
├── .env
├── server.js
├── package.json
└── README.md

⚙️ Installation & Setup

Clone the repo:

git clone https://github.com/Abhinks151/Quil-User-Management.git
cd Quil-User-Management

Install dependencies:

npm install

Configure environment variables:

Create a .env file and add your MongoDB URI and session secret:

MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

Run the application:

npm start

Visit:

http://localhost:3000

🤝 Contributions

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

📜 License

This project is open-source and free to use under the MIT License.

🤛 Author

Made with effort and learning by Abhin (Abhinks151)Aspiring Software Engineer | Building real-world backend systems one project at a time.
