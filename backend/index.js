const express = require('express')
const app = express()
const port = 3000

//dummy dataobese
let users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
  ];

function authendicate (userName, password) {
const obj = JSON.parse(users) 
let user = obj[0].username
}
