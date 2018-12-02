//Describe tests
var mocha = require('mocha');
var assert = require('assert');
var FoodModel = require('../routes/index.js');
var food;

    // Create a food that ready for delete
    before(function(){
         food = new FoodModel ({
            Food_Name: 'Orange',
            Buy_Date: 'a',
            Expired_date:'b',
            best_before_date: 'c',
            Food_type: 'd'
        });
        food.save();
    });

describe('Delete Record', function() {
    this.timeout(0);
    it('Deletes one record from MongoDB', function (done) {
       FoodModel.findOneAndDelete({
            Food_Name: 'Orange',
            Buy_Date: 'a',
            Expired_date:'b',
            best_before_date: 'c',
            Food_type: 'd'
        }, function(result){

            FoodModel.find({
                Food_Name: 'Orange',
                Buy_Date: 'a',
                Expired_date:'b',
                best_before_date: 'c',
                Food_type: 'd'
            }, function(err, result){
                console.log(result)
                console.log(typeof(result))
                if(result.length) {
                    assert(false);
                    
                }
                done();
                
            })
        })
        
    });
});
