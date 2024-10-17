const express=require('express');
const app=express();
let port=3000;
const path=require('path');
const regCollection=require('./model/model');

const template_path=path.join(__dirname, '../template/views');

app.set('view engine','hbs');
app.set('views',template_path);

app.use(express.urlencoded({extended:false}));

require('./db/db');

app.get('/',(req,res)=>{
    res.render('extregister');
})

app.get('/exthome', (req, res) => {
    res.render('exthome');
});

app.get('/extabout', (req, res) => {
    res.render('extabout');
});

app.post('/exthome',async(req,res)=>{
    const regdata=new regCollection({
        fname:req.body.fname,
        lname:req.body.lname,
        dob:req.body.dob,
        email:req.body.email,
        password:req.body.password,
        phn:req.body.phn
    });
    const postdata=await regdata.save();
    res.send(postdata);
})

app.listen(port,()=>{
    console.log('listening ${port}');
})