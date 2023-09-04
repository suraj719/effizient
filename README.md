
# Effizient

A customized SOP generator https://effizientsop.vercel.app/


## Tech Stack

**Frontend:** React, Bootstrap, react-loader-spinner

**Backend:** Node, Express, MongoDB, Nodemailer


## Demo

Insert gif or link to demo


## Installation

To run this project in your local system, follow these instructions: 

1. clone the repo

```bash
git clone https://github.com/suraj719/effizient.git
```
2. navigate to client directory
```
cd client
```
3. install the dependencies
```
npm install
```
4. start the client server
```
npm start
```
5. now, navigate to server directory and install the dependencies
```
npm install
```
6. Create .env file and add these environment variables
```
PORT = 5000
MONGO_URL = "your mongo uri"
Email = "email from which u want to send mail"
Password = "it's password"
clientId = ""
clientSecret = ""
refreshToken = ""
```
7. You should create a new project in the google cloud console and create api credentials and then paste these credentials in .env
8. go to https://developers.google.com/oauthplayground/ and use these credentials to generate a refresh token. paste this generated token in .env
8. Now, start the server
```
npm start
```
10. replace the url with localhost link in client/src/components/Form.js
