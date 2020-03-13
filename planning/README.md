Proposal #1
Project Name:
Budgety App

Description:
This app will allow users to be able to create a monthly budget that they can save.
Users will be able to click into a month - create a budget, edit/update their budget and also delete the budget for that month. 

Models:
Month
    name
    balance: 0

Expense
    name
    value
    FK = Month


Income
    name
    value
    FK = Month

**Is it possible to link two models to 1 model using the common model as the foreign key?**

Proposal #2
Project Name: 
Gamer's D-Lite

Description: 
A place where gamers can come and review different games of their choosing. 
Users can expect to create a user profile, Create a post , Delete/Edit their posts and comment under other posts.

Models:
Post
    username
    image
    body

Comment
    username
    body
    post= FK

User
    username
    password
    bio
    gamesPlayed: []
    post = FK



Proposal #3
Project Name: 
SQUAD UP

Description: 
A place where gamers can come and find teammates for different games.
Users can expect to create a user profile, Create a post , Delete/Edit their posts and comment under other posts.

Models:
Post
    username
    body

Comment
    username
    body
    post= FK
