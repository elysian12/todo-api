# Task-Manager API
Task Manager is an Api built in Node.js,basic todo app with CRUD functionalities

## Setup 
```bash
npm install
```
## Usage
```bash
npm start
```
## API Endpoints :
HTTP route prefix : http://localhost:3000/api/v1/
|   Route     |     Method  | Description|
| ----------- | ----------- | ---------- |
| /tasks      | GET       | get all the task|
| /task/:id   | GET       | get a single task|
| /tasks      | POST      | create a task|
| /task/:id   | DELETE    | delete a task|
| /task/:id   | PUT/PATCH | update a task|

## Get All the Tasks :
##### HTTP route : http://localhost:3000/api/v1/tasks


##### Response :
```bash
[
{
_id: "6182a4fdf5983834a27fe552",
name: "testing create task",
completed: false,
__v: 0
},
{
_id: "6182d0503a07e858af6cc95a",
name: "flutter app",
completed: true,
__v: 0
}
]
```

## Get a Single Task :
##### HTTP route : http://localhost:3000/api/v1/tasks/:id

##### Response :
```bash
{
_id: "6182a4fdf5983834a27fe552",
name: "testing create task",
completed: false,
__v: 0
}
```

## Create a Task :
##### HTTP route : http://localhost:3000/api/v1/tasks
##### Json Payload :
```bash
{
	"name":"flutter widget",
	"completed":true
}
```

##### Response :
```bash
{
    "name": "flutter widget",
    "completed": true,
    "_id": "61838c5903f59697ca7f1c16",
    "__v": 0
}
```
## Delete a Task :
##### HTTP route : http://localhost:3000/api/v1/tasks/:id

##### Response :
```bash
{
    "success": true,
    "task": {
        "deletedCount": 1
    }
}
```
## Update a Task :

##### Response :
```bash
Work in progress..
```

## Contact me :
* LinkedIn : [Connect me on LinkedIn](https://www.linkedin.com/in/aman-singh-elysian12/)
* Twitter : [Follow me](https://twitter.com/Amanofficial32)
* Instagram : [Follow me](https://www.instagram.com/amanasr7071/)


