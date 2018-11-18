//Describe tests
var mocha = require('mocha');
var assert = require('assert');
var FoodModel = require('../routes/index.js');
var food;
// Create a food that ready for Read
before(function(){
        food = new FoodModel ({
        Food_Name: '7UP',
        Buy_Date: 'a',
        Expired_date:'a',
        best_before_date: 'a',
        Food_type: 'a'
    });
    food.save();
});

describe('Update a Record', function() {
    it('Change Drink name', function (done) {
        FoodModel.findOneAndUpdate({Food_Name: '7UP'}, {Food_Name: 'CocaCola'},{new: true}).then(function(){
            FoodModel.findOne({Food_Name: '7UP'}).then(function(result){
                assert(result === null);
            })
        });
        done();
    });
});
