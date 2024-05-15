Abstract:
The Voting App documentation provides a comprehensive overview of the database structure and functionality, catering to various user stories. Authenticated users can create, manage, and share polls, including the ability to keep track of their polls, share them with friends, view aggregate results, and delete unwanted polls. They can also create polls with multiple options and add new options if needed. Additionally, users, whether authenticated or not, can view and vote on all polls, as well as see the results in chart format using tools like Chart.js or Google Charts. This documentation serves as a guide for developers, outlining the database models, schema, and implementation details necessary to build and maintain the Voting App.

User stories:
•	As an authenticated user, I can keep my polls and come back later to access them.
•	As an authenticated user, I can share my polls with my friends.
•	As an authenticated user, I can see the aggregate results of my polls.
•	As an authenticated user, I can delete polls that I decide I don't want anymore.
•	As an authenticated user, I can create a poll with any number of possible items.
•	As an unauthenticated or authenticated user, I can see and vote on everyone's polls.
•	As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
•	As an authenticated user, if I don't like the options on a poll, I can create a new option.


Problem Statement:

 In the landscape of digital engagement, there exists a conspicuous absence of a comprehensive polling platform that seamlessly integrates essential features for users to create, share, and interact with polls. Existing solutions lack the sophistication required to securely manage user-generated polls, provide insightful result visualization, and deliver seamless authentication experiences. This presents a unique opportunity to develop an innovative voting application that not only bridges these gaps but also sets new standards for usability, security, and scalability. Thus, the challenge at hand is to conceptualize and execute a feature-rich polling app that not only meets but exceeds the expectations of users, positioning it as the go-to platform for poll creation and participation. This project seeks to address this challenge by developing a robust, user-centric polling application that revolutionizes the way individuals engage with polls online.


               
Database Models
User Model
•	Fields:
•	username: String - Unique username of the user.
•	password: String - Hashed password of the user.
•	created: Date - Date of user registration.
•	polls: Array of ObjectId - References to polls created by the user.
•	Middleware:
•	Pre-save middleware to hash the user's password.
Poll Model
•	Fields:
•	user: ObjectId - Reference to the user who created the poll.
•	created: Date - Date of poll creation.
•	question: String - Question of the poll.
•	options: Array of Objects - Options of the poll, including option text and votes count.
•	voted: Array of ObjectId - References to users who have voted on the poll.
•	Hooks:
•	Pre-remove hook to remove the poll reference from the user who created it.



index.js
This file is responsible for setting up the database connection using Mongoose. It exports the User and Poll models, making them accessible throughout the application.
poll.js
This model defines the structure of a poll, including its user creator, creation date, question, options, and users who have voted on the poll. It also includes a pre-remove hook to remove the poll reference from the user who created it when the poll is deleted.
user.js
This model defines the structure of a user, including their username, password (hashed), creation date, and polls they have created. It includes pre-save middleware to hash the user's password before saving it to the database and a method to compare passwords during authentication.

  
Tech Stacks Used:-
HTML/CSS
Express
MongoDB
Javascript
Mongoose
REACT
NODE JS
GIT
JWT


Detailed working :

### 1. User Authentication:
- Users can register or log in to the MERN Vote app.
- Upon registration, users provide a unique username and a password.
- The password is securely hashed before storing it in the database.
- Once logged in, users receive an authentication token, which is used for subsequent interactions with the app.

### 2. Poll Creation:
- Authenticated users can create polls by providing a question and multiple options.
- Each poll is associated with the user who created it.
- Poll data, including the question, options, and user ID, is saved in the database.

### 3. Poll Viewing:
- Users can view existing polls, including the question and available options.
- Polls are displayed in a list format, allowing users to browse through them.

### 4. Poll Voting:
- Authenticated users can vote on polls by selecting one of the available options.
- Each user can only vote once per poll.
- When a user votes on a poll, the vote count for the selected option is incremented.
- The user's vote is recorded to prevent multiple votes on the same poll.

### 5. Result Visualization:
- After voting, users can view the results of the poll.
- Results are displayed in a visually appealing format, such as a bar chart or pie chart.
- Users can see the percentage of votes for each option, allowing them to understand the poll's outcome easily.

### 6. Poll Management:
- Authenticated users have the option to delete polls they've created.
- Deleting a poll removes it from the system and updates any associated user profiles.

### 7. Data Persistence:
- User data, including profiles and authentication tokens, is stored securely in the database.
- Poll data, including questions, options, and vote counts, is also saved in the database.
- MongoDB is used as the database system, providing scalability and flexibility for storing large volumes of data.

### 8. Backend Architecture:
- The backend of the MERN Vote app is built using Node.js and Express.js.
- Express.js handles HTTP requests and routes them to the appropriate endpoints.
- Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js, is used to interact with the MongoDB database.
- Middleware functions are used for authentication and error handling, ensuring the security and reliability of the application.

### 9. Frontend Architecture:
- The frontend of the MERN Vote app is built using React.js.
- React components are used to create a dynamic and interactive user interface.
- Redux or Context API may be used for state management, allowing for efficient data flow between components.
- Axios or Fetch API is used for making HTTP requests to the backend API endpoints.

### 10. Deployment:
- The MERN Vote app can be deployed to a cloud platform like Heroku, AWS, or Azure.
- Continuous Integration/Continuous Deployment (CI/CD) pipelines may be set up to automate the deployment process.
- Environment variables are used to manage sensitive information, such as database credentials and API keys, securely.

Overall, the MERN Vote app provides a user-friendly platform for creating, sharing, and participating in polls. Its modular architecture, combined with robust backend and frontend technologies, ensures scalability, performance, and a seamless user experience.

Running in your dev environment:
Include a .env file in the server directory with the following environment variables.
PORT = 4000
DATABASE = 'mongodb://username/vote'
SECRET = 'ThisIsATemporarySecretKey'


Getting started:
The mern-vote should have npm and required module installed.
Cd server and run npm start
Cd client and run npm start



 

Conclusion:- 
In conclusion, the MERN Vote app represents a significant milestone in our journey of le In conclusion, the MERN Vote app represents a significant milestone in our journey of learning and implementing full-stack web development technologies. Through this project, we have gained hands-on experience in building a robust and feature-rich application using the MongoDB, Express.js, React.js, and Node.js (MERN) stack.

Throughout the development process, we encountered various challenges, which we overcame through diligent research, experimentation, and collaboration. From user authentication and data management to frontend design and deployment, every aspect of the project presented an opportunity for learning and growth.



The MERN Vote app not only showcases our technical skills in software development but also demonstrates our ability to conceptualize, design, and implement a practical solution to a real-world problem. With its intuitive user interface, seamless functionality, and scalable architecture, the app offers users a convenient platform for creating, sharing, and participating in polls.

As we reflect on our journey with the MERN Vote app, we are proud of our accomplishments and grateful for the knowledge and experiences gained along the way. This project serves as a testament to our dedication, perseverance, and passion for continuous learning in the field of web development.

Moving forward, we remain committed to further refining and enhancing the MERN Vote app, as well as exploring new opportunities for innovation and growth in the ever-evolving landscape of technology.

Thank you to everyone who contributed to the success of this project, and we look forward to continuing our journey of exploration and discovery in the world of software development.


 
Thank-you!
