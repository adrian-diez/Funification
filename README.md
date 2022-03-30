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


METHOD | ENDPOINT         | TOKEN |   ROLE  |       DESCRIPTION       | POST PARAMS                                     | RETURNS
-------|------------------|-------|---------|-------------------------|-------------------------------------------------|-----------------------------
POST   | /auth/signup     | -     |    ALL  | User Signup             | name, email, password, courses, avatar         | token
POST   | /auth/login      | -     |    ALL  | User Login              | email, password                                | token
GET    | /auth/check      | YES   |    ALL  | Auth Token check        | -                                              |

### Students Endpoints
METHOD | ENDPOINT         | TOKEN | DESCRIPTION                   | PARAMS                                         | RETURNS
-------|------------------|-------|------------------------------|-------------------------------------------------|----------------------------
GET    | /students/:id    | YES   |  Fetches their profile        | student id                                     | object with student name, messages, tests, points, reward log, courses and avatar
GET    | /students/:id/:courseid | YES | Shows a particular course   | student id, course id                        | object with the topics for that course
GET    | /students/:student_id | YES | T / A | Show a student's profile   |  student id  |object with student name, tests, points, reward log, and avatar
 
### Teachers Endpoints
METHOD | ENDPOINT         | TOKEN | ROLE (TEACHER / ADMIN / STUDENT) |DESCRIPTION                   | PARAMS            | RETURNS
-------|------------------|-------|-------|------------------------------|---------------------------------|----------------------------
GET    | /teachers/:id    | YES   | T / A | Fetches their profile        | teacher id                       | object with teacher name, messages, courses and avatar
GET    | /teachers/:id/students | YES | T / A | If admin, show all students; if teacher, only their students   | teacher id  | array with students name, id and classroom
GET    | /teachers/:id/students/:student_id | YES | T / A | Show a student's profile   | teacher id, student id  |object with student name, tests, points, reward log, and avatar

### Courses Endpoints
METHOD | ENDPOINT         | TOKEN | ROLE (TEACHER / ADMIN / STUDENT) |DESCRIPTION  | PARAMS                          | RETURNS
-------|------------------|-------|-------|------------------------------|---------------------------------|----------------------------
GET    | /courses         | YES      | ADMIN | Fetches all courses       | query: search string            | list of matching objects with courses name and id
GET    | /courses/:id     | YES      | ALL | Admin: Fetches a particular course      Teacher/Student: Fetches one of their courses  | course id           | object with course's name, id, array of students, array of topics, and teachers
POST   | /courses       | YES      | ADMIN | Create a course            | name, students, and teachers      | object with course's name and id
PUT    | /courses/:id    | YES      | T / A | Update a course         | name, students, topics, teachers | object with courses name and id
DELETE | /courses/:id    | YES      | T / A | Delete a course         | -                                 | object with courses name and id


### Topics Endpoints
METHOD | ENDPOINT         | TOKEN | ROLE (TEACHER / ADMIN / STUDENT) |DESCRIPTION                   | PARAMS            | RETURNS
-------|------------------|-------|-------|------------------------------|---------------------------------|----------------------------
GET    | /topics/:id      | YES   | ALL |  Admin: Fetches a particular topic      Teacher/Student: Fetches one of their topics        | topic id                       | object with teacher name, messages, courses and avatar

## Next features


