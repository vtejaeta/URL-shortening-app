# [URL-shortening-app built with MERN stack](https://shortly-url-react.herokuapp.com/)
<br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/65386350/97795716-837d4e00-1c2f-11eb-86b0-0e7493f2bcad.png" height="500" width="625" />
</p>

## Overview
Hello 👋, Welcome to my project of URL shortening app which was built with MERN stack. This helps in shortening the long url's using [Bitly API](https://dev.bitly.com/). This project was solution to a [Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G) intermediate level challenge. This is my first MERN stack web app.

Tech stack used in this project -
 - JavaScript Library: React
 - API: [Bitly API](https://dev.bitly.com/)
 - Authentication: JWT, Express
 - Database: MongoDB
 - State Management: Redux
 - Styling: CSS
 
 I came to know how data is transferred from backend to frontend, how to connect and query database, how authentication is done for the first time. 
 
 ## Prerequisites for this project
 - One should have Bitly access token ready, If you don't know how to create it please refer [Bitly](https://dev.bitly.com/docs/getting-started/authentication/)
 - Mongo URI is required to connect to MongoDB database. Also JWT secret is necessary for verifying JWT

## Environment Variables
Finally one should have file named `.env` with the Bitly access token and Mongo URI setup as follows
```js
// .env
NODE_ENV = [production or development]
PORT = [PORT number]
MONGO_URI = [Mongo URI]
JWT_SECRET = [JWT Secret]
BITLY_ACCESS_TOKEN = [Bitly Access token]
```

## How to install this project

1. Clone the project using the command `git clone https://github.com/vtejaeta/URL-shortening-app.git`
2. Move into the file directory you wish to run using `cd {folder_name}`.
3. Use the following command `npm install` or `yarn` to install the dependencies.
4. Navigate to frontend folder and try installing dependencies for frontend folder using the same command which is used earlier in Step-3.
5. After coming out from frontend folder path, that is in home directory, now you can run `npm run dev` or `yarn dev` to run the app in the development mode which runs frontend as well as backend at the same time using [concurrently](https://www.npmjs.com/package/concurrently) npm package. It can be viewed in browser at `http:localhost:3000`. Backend will be running at the `PORT` number you specified in `.env` file.
6. For bundling, navigate to frontend folder path and try running `npm run build` or `yarn build` which optimises build for better performance

### Questions

For questions related to using the project, please reachout to me through

- [Twitter](https://twitter.com/vtejaeta9493)
