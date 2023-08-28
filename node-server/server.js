const express = require('express')
const app = express()

console.log("We are in server.js")

app.get('/', function (req, res) {
  res.send('Hello World')
})

// query param
app.get('/queryparam', function (req, res) {
  let query = req.query["name"]

  res.send(`This is the name sent in queery ${query}`)
})

// route param :/name - of the param //http://localhost:9000/routeprm/Jeffery/info
app.get('/routeprm/:name/info', function (req, res) {
  let routeParam = req.params["name"]

  res.send(`This is the name sent in Route param ${routeParam}`)
})

app.get('/helloapi', function (req, res) {
    console.log(req.headers) 
  
  let deviceType = req.headers['user-agent']
  console.log(deviceType) 
  if (deviceType.indexOf("Android") >= 0) {
      res.json({
        "Device":"Mobile",
        "Status" : 102,
        "Message" : "Please switch off during session!!!"
    })
  } else {
    res.json({
      "Name":"Jason",
      "Status" : 2000,
      "Session" : "MERNStack"
  }) 
  }
   
})


console.log("We are listening at 9000")
app.listen(9000) //localhost:9000


//nodemon - node monitoring module, which listens to change and restarts api when needed