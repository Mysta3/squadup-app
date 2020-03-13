# PLANNING

## Component Hierarchy & FlowChart

![Diagram Picture](https://i.imgur.com/XpLjElB.jpg)
![Request Response Cycle](https://i.imgur.com/68rCukJ.jpg)

## FrontEnd

### Structure

- App
  - Header
  - Landing Page
  - SignUp Page
  - Home page
    - Posts
  - PostDetail
    - Comments
  - CommentEdit
  - NewPost Page

### Progress Tracking

- Trello Board

## BackEnd

### Models

- User

  - username
  - password

- Post

  - title
  - body
  - image
  - created_at
  - user foreign key

- Comment
  - user_comment
  - body
  - post foreign key
  - user foreign key
