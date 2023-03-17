const express   = require('express');

const { Canvas } = require("canvas");

const JsBarcode = require('jsbarcode');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// // Create a new canvas
// const canvas = new Canvas();
// JsBarcode(canvas,"hello", {
//   lineColor: "#0aa",
//   width:4,
//   height:40,
//   displayValue: false
// });

// Get Data URL and save it to the DB
app.get('/',(req,res)=>{
     res.render('index',{data:''});
})

app.post('/',(req,res)=>{
  console.log('dfd',req.body.qrcodee);
  const canvas = new Canvas();
 JsBarcode(canvas,req.body.qrcodee,{
  lineColor: "#0aa",
  width:4,
  height:40,
  displayValue: false
  });
     canvas.toDataURL('image/png', (err, png) => {
    console.log(png);
    res.render('index',{data:png});
  })
})

// app.get('/',(req,res)=>{
//   canvas.toDataURL('image/png', (err, png) => {
//     console.log(png);
//     res.render('index',{data:''});
//   })
// });

app.listen(3000,console.log(`server run at 3000`));

