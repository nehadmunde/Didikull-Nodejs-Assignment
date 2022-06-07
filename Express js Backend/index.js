const express=require('express');
const cors=require('cors');
const port =process.env.PORT || 8000
const app=express();
const data=[]

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(data)
})

app.post('/post',(req,res)=>{
   console.log(req.body)
   data.push(req.body)
   res.send(req.body)
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})