## Simple "Node.js + Swagger UI"
### Installation
```
git clone https://github.com/ndb796/Simple-Node-and-SwaggerUI.git
cd Simple-Node-and-SwaggerUI
npm install --save express
```
### Run
```
node app.js
```
### Test
http://localhost:3000/docs
### How to customize?
```
app.js: This is Node.js API main source code.
public/swagger.yaml: You can modify swagger ui code.
public/docs/index.html: You can update swagger ui's yaml file URL. (If you use real server, you should change URL path.)
```
