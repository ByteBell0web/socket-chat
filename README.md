
# Chat-App

This is a chat app made using Nextjs,TypeScript, Node and Socket.io

## Features

- User can join Chat Room by entering their name
- Multiple Users can join the chat room and start chatting
- Sender's username and timestamp visible with every message

This project utilizes ESLint for code quality maintenance. Ensure coding standards by following the recommended formatting guidelines.

## Installation

Clone the repository:
```bash
git clone https://github.com/ByteBelle/socket-chat.git
```
Navigate to the project folder:
```bash
cd chat
```

### Backend

1. Install dependencies in root folder
```bash
npm install
```
2. Copy sample env to .env
```bash
cp .env.sample .env
```
  Change URL and port if changed in frontend
3. Start the server
 ```bash
 npm start
 ```
4. Check lint errors
 ```bash
 npm run lint
 ```

### Frontend

1. Navigate to client directory
```bash
cd client
```
2. Install dependencies in client
```bash
npm install
```
2. Copy sample env to .env
```bash
cp .env.sample .env
```
3. Start the nextjs app in development
 ```bash
 npm run dev
 ```
4. Check lint errors
 ```bash
 npm run lint
 ```


**Now your Project is ready to run.**

## File Structure

```bash
.
├──src # backend 
    ├── controllers # route controller
    ├── routes # Custom routes
    ├── socket # Socket Initialisation
    ├── validators
    ├── utils # Misc tools and stuffs
    │   ├── APIError
    │   ├── Async Handler
    │   └── APIResponse
    ├── app.js
    ├── index.js # entry file 
    └── constant.js
└── client # frontend directory
    ├── src
    │   ├── api
    │   ├── app
    │   │    ├── chat #page
    │   │    └── login #page
    │   ├── components
    │   │     ├── Connection
    │   │     └── Message
    │   ├── context
    │   ├── interfaces
    │   └── utils # Misc tools and stuffs
    └── public
```
