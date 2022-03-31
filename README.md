# Funification (Learning For Points / LFP? Name subject to change)
Learn more, earn more. The web app to gamify your classes.

## Why
Funification is a web app designed to provide classes with a structure of points and rewards designed to make students engage with the topics more.

## Features
- [x] Create virtual classes where to introduce your students
- [x] Add material (both theory and practice)
- [x] Tracking of your students' grades in online and physical tests
- [x] Keep in touch with your students through messages inside the app!

## Routes


### Authentication Endpoints

The Authentication flow for the application is:


METHOD | ENDPOINT         | TOKEN |   ROLE  |       DESCRIPTION       | POST PARAMS                                    | RETURNS
-------|------------------|-------|---------|-------------------------|------------------------------------------------|-----------------------------
POST   | /auth/signup     | -     |    ALL  | User Signup             | name, email, password, courses, avatar         | token
POST   | /auth/login      | -     |    ALL  | User Login              | email, password                                | token
GET    | /auth/check      | YES   |    ALL  | Auth Token check        | -                                              |

### Users Endpoints
METHOD | ENDPOINT         | TOKEN |   ROLE  | DESCRIPTION                      | PARAMS                         | RETURNS
-------|------------------|-------|---------|----------------------------------|--------------------------------|----------------------------
GET    | /users           | YES   | ADMIN / TEACHER | Admin: finds users by name and/or role            Teacher: finds users in their courses by name and/or role| query: search string; role; group             | array of objects with user name, messages, tests, points, reward log, courses and avatar
GET    | /users/:user_id  | YES   | ADMIN / TEACHER | Finds a particular user  | user_id                  | object with user name, messages, tests, points, reward log, courses and avatar
POST   | /users           | YES   | ADMIN   | Creates a new user               | name, email, password, role    | object with name and email
PUT    | /users/:user_id  | YES   | ADMIN   | Updates a user                   | name, email, password, role, courses, avatar, group, tests, points | object with updated user
DELETE | /users/:user_id  | YES   | ADMIN   | Deletes a user                   | user_id                        | object with deleted user name and email
 

### Courses Endpoints
METHOD | ENDPOINT         | TOKEN | ROLE  |DESCRIPTION  | PARAMS                          | RETURNS
-------|------------------|-------|-------|------------------------------|---------------------------------|----------------------------
GET    | /courses         | YES      | ADMIN | Fetches all courses       | query: search string            | list of matching objects with courses name and id
GET    | /courses/:id     | YES      | ALL | Admin: Fetches a particular course      Teacher/Student: Fetches one of their courses  | course id           | object with course's name, id, array of students, array of topics, and teachers
POST   | /courses        | YES      | ADMIN | Create a course            | name, students, and teachers      | object with course's name and id
PUT    | /courses/:id    | YES      | TEACHER / ADMIN | Update a course         | name, students, topics, teachers | object with course's name and id
DELETE | /courses/:id    | YES      | TEACHER / ADMIN | Delete a course         | -                                 | object with deleted course's name and id


### Topics Endpoints
METHOD | ENDPOINT         | TOKEN | ROLE  |DESCRIPTION                   | PARAMS            | RETURNS
-------|------------------|-------|-------|------------------------------|---------------------------------|----------------------------
GET    | /topics/:id      | YES   | ALL |  Admin: Fetches a particular topic      Teacher/Student: Fetches one of their topics   | topic id     | topic
POST   | /topics          | YES      | TEACHER / ADMIN | Create a topic            | name, theory and practice (not required)   | object with topic's name and id
PUT   | /topics/:id       | YES      | TEACHER / ADMIN | Admin: Updates a particular topic      Teacher: Updates one of their topics    | name, theory, practice   | object with topic's name and id
DELETE  | /topics/:id     | YES      | TEACHER / ADMIN | Admin: Deletes a particular topic      Teacher: Deletes one of their topics     | -  | object with deleted topic's name and id

## Next features


