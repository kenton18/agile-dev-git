var express = require('express');
var router = express.Router();
let url = require('url');
let mongoose = require("mongoose");
var app = express();


mongoose.connect('mongodb://localhost/FoodDB');// { useNewUrlParser: true }
mongoose.set('useFindAndModify', false);
let db = mongoose.connection;

db.on('error', ()=>{
    console.log('error connect')
  });
db.once("open", function(){
    console.log('connected')
  })
  
db.once("close", function(){
    console.log('disconnected')
  })
  
let Schema = mongoose.Schema;
let foodSchema = new Schema({
    Food_Name: String,
    Buy_Date:String,
    Expired_date:String,
    best_before_date: String,
    Food_type : String
},{
  versionKey: false
});
  
  
let FoodModel = mongoose.model('data_set', foodSchema)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'layout' });
});
/* GET input page. */

router.get('/test', function(req, res, next) {
  res.render('input', { title: 'input' });
});

router.get('/test', function(req, res, next) {
  res.render('input', { title: 'input' });
});

router.get('/inputed', function(req, res, next) {
  let Food_Name = req.query.Food_Name;
  console.log(Food_Name);
  let Buy_Date = req.query.Buy_Date;
  console.log(Buy_Date);
  let Expired_date = req.query.Expired_date;
  console.log(Expired_date);
  let best_before_date = req.query.best_before_date;
  console.log(best_before_date);
  let Food_type = req.query.Food_type;
  console.log(Food_type);
  FoodModel.create({
    Food_Name:Food_Name,
    Buy_Date:Buy_Date,
    Expired_date:Expired_date,
    best_before_date:best_before_date,
    Food_type:Food_type,},
    (err) => {
      if (!err){
          console.log("create success ");
      }
      else
      {
          throw err;
      }
  });
  res.render('input_success');
});



module.exports = router;
module.exports = FoodModel;
