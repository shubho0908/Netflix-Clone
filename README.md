# Netflix Clone with React JS, Redux and Firebase


This project is a Netflix clone made using React JS, Redux and Firebase for authentication. It has all the amazing animations and UI as the original Netflix site. Additionally, it also features sections like Movies and TV shows where users can find a variety of content.

## Features


Netflix-like animations and UI
Signup and Signin using Firebase Authentication
Movies and TV Shows sections
Wishlist/My List functionality
User authentication with Firebase


## Technologies Used


React JS
Redux
Firebase


## Installation


Clone the repository
Install dependencies using npm install
Start the development server using npm start
Open localhost:3000 in your web browser to view the app.


## Firebase Configuration


This app uses Firebase Authentication for user signup and signin. To configure your Firebase app, follow these steps:


Go to the Firebase console and create a new project.
Enable Authentication using Email/Password.
Copy the Firebase config object and replace the values in src/firebase.js.
Enable Firestore for your Firebase project.
In Firestore, create a new collection called users and add a new document for each user with the following fields: displayName (string), email (string), photoURL (string), wishlist (array).


## Screenshots

Sign In Page

![image](https://user-images.githubusercontent.com/81776711/221105156-f6f6cc34-5992-4743-878b-461fe3837b86.png)


Sign Up Page

![image](https://user-images.githubusercontent.com/81776711/221105292-60256fee-7d7c-40e2-91b5-70eaf4fababe.png)

![image](https://user-images.githubusercontent.com/81776711/221105334-5e838f20-ccdb-445f-a006-33d64150d80e.png)

![image](https://user-images.githubusercontent.com/81776711/221105378-b12aa92a-0c6b-4545-85e4-85149ce30589.png)

![image](https://user-images.githubusercontent.com/81776711/221105420-931a94e0-a4cf-4aba-bf23-4df9c5bb65af.png)


## Acknowledgements

[TMDB API](https://www.themoviedb.org/documentation/api)


## Conclusion


This Netflix clone is a great example of a React JS application that uses Firebase Authentication for user management. It has all the features of the original Netflix site and provides a great user experience. The project can be further enhanced by adding more sections and integrating other APIs.
