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
    it('Deletes one record from MongoDB', function (done) {
       FoodModel.findOneAndDelete({
            Food_Name: 'Orange',
            Buy_Date: 'a',
            Expired_date:'b',
            best_before_date: 'c',
            Food_type: 'd'
        }).then(FoodModel.findOne({
            Food_Name: 'Orange',
            Buy_Date: 'a',
            Expired_date:'b',
            best_before_date: 'c',
            Food_type: 'd'
        }).then(function(result){
            assert(result === null);
        })
    );
    done();
    });
});