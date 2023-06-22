const express =require("express");
const app =express();
const url="https://104.211.219.98/train/trains";
const https=require("https");
var shit=[];
const options = {
    headers: {
        'Authorization' : 'Basic ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODc0MTM2OTgsImNvbXBhbnlOYW1lIjoiVmFyZGhhbWFuIGNsZyIsImNsaWVudElEIjoiODEwMDY2ZWUtOWVlMC00MTc4LTgzMjgtODA1ODJiYzc1OWNiIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwODgxQTAyNDYifQ.ANIgBqTb2WgM3qHPinJmxkG7_BdoWNOALYx2leBMekA"
      },
    rejectUnauthorized: false

  };

const request = https.request(url,options, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });
  
    response.on('end', () => {
        const body = JSON.parse(data);
        shit.push(body);
    });
})
  
request.on('error', (error) => {
    console.log('An error', error);
});
  
request.end() 
app.get("/",(req,res)=>{
    res.send(shit[0]);
});
app.listen(3000,function(){
    console.log("server started");
})