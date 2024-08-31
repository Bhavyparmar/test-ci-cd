const express = require('express')
let webdriver = require("selenium-webdriver"); 
const app = express()
const port = 3000
app.use(express.json());
app.post('/', async(req, res) => {
  let {data}=req.body;
  if (!data) {
    return res.status(404).send({msg:"Please Gave Data"})
  }
  /*let driver =  new webdriver.Builder() 
  .forBrowser("chrome").build(); 
  driver.get("https://www.mca.gov.in/content/mca/global/en/home.html");
  let result=await driver.executeScript(`return encrypt('${data}')`)
  res.send({data:result})
  driver.close()*/
  res.send({msg:data})
})

app.get('/',async(req,res)=>{
  res.send({msg:"Get Request from the server"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})