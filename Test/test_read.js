//Describe tests
var mocha = require('mocha');
var assert = require('assert');
var FoodModel = require('../routes/index.js');
var food;

// Create a food that ready for Read
before(function(){
    food = new FoodModel ({
        Food_Name: 'Cake',
        Buy_Date: 'c',
        Expired_date:'d',
        best_before_date: 'e',
        Food_type: 'f'
    });
    food.save();
});

describe('Read a Record', function() {
    it('Read a Cake Record', function (done) {
        FoodModel.findOne({Food_Name: 'Cake'}).then(function(result){
            assert(result.Food_Name ==='Cake');
        });
        done();
    });
});