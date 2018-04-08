# To Do Fancy (REST API Documentation)


### Tools

Name|Function
---|---
Express|Server side
JWT(jsonwebtoken)|Creating token
dotenv|Credential code
Mongoose|ODM
Insomnia|-

### User Basic Routing API
Route|Function|Acces
---|---|--
/api/user/list|Read all user|Admin
/api/user/createuser|Create user|Admin
/api/user/deleteuser/:id|Delete user|Admin
/api/user/registeruser|Sign Up / Register User|Admin,etc
/api/user/signin|Sign In / Login|etc..


### Task Basic Routing API

Route|Function
---|---
/api/task/list|Read all task
/api/task/createtask|Create new task
/api/task/updatetask/:id|Update task
/api/task/deletetask/:id|Delete task
/api/task/checklist/:id|Checklist task
/api/task/completetask|Read all complete task
/api/task/uncompletetask|Read all uncomplete task