var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm7.staticflickr.com/6105/6381606819_df560e1a51.jpg",
        description: "Flannel glossier typewriter 3 wolf moon cold-pressed vaporware taiyaki ennui narwhal XOXO vegan poutine thundercats. Disrupt edison bulb vegan swag tousled sustainable. Humblebrag blue bottle lyft sustainable. Butcher mumblecore next level tousled, woke cardigan locavore ramps trust fund deep v gochujang fanny pack thundercats live-edge bushwick. Normcore disrupt roof party woke, sartorial echo park irony activated charcoal poke flexitarian tacos everyday carry gastropub cardigan. Butcher biodiesel gluten-free, chartreuse poke typewriter activated charcoal. Tacos you probably haven't heard of them blog, ugh godard asymmetrical lomo gochujang. Shoreditch swag snackwave gentrify air plant keytar asymmetrical. Umami williamsburg hell of austin quinoa chia heirloom edison bulb kickstarter church-key organic subway tile blog neutra butcher. Schlitz tousled lo-fi, kickstarter vegan yuccie polaroid craft beer gastropub hashtag crucifix."

    },    
    {
        name: "Pine Flats", 
        image: "https://farm9.staticflickr.com/8454/7930198240_856a39bf27.jpg",
        description: "Flannel glossier typewriter 3 wolf moon cold-pressed vaporware taiyaki ennui narwhal XOXO vegan poutine thundercats. Disrupt edison bulb vegan swag tousled sustainable. Humblebrag blue bottle lyft sustainable. Butcher mumblecore next level tousled, woke cardigan locavore ramps trust fund deep v gochujang fanny pack thundercats live-edge bushwick. Normcore disrupt roof party woke, sartorial echo park irony activated charcoal poke flexitarian tacos everyday carry gastropub cardigan. Butcher biodiesel gluten-free, chartreuse poke typewriter activated charcoal. Tacos you probably haven't heard of them blog, ugh godard asymmetrical lomo gochujang. Shoreditch swag snackwave gentrify air plant keytar asymmetrical. Umami williamsburg hell of austin quinoa chia heirloom edison bulb kickstarter church-key organic subway tile blog neutra butcher. Schlitz tousled lo-fi, kickstarter vegan yuccie polaroid craft beer gastropub hashtag crucifix."
    },    
    {
        name: "Rolling Hill", 
        image: "https://farm2.staticflickr.com/1076/826745086_e1c145c054.jpg",
        description: "Flannel glossier typewriter 3 wolf moon cold-pressed vaporware taiyaki ennui narwhal XOXO vegan poutine thundercats. Disrupt edison bulb vegan swag tousled sustainable. Humblebrag blue bottle lyft sustainable. Butcher mumblecore next level tousled, woke cardigan locavore ramps trust fund deep v gochujang fanny pack thundercats live-edge bushwick. Normcore disrupt roof party woke, sartorial echo park irony activated charcoal poke flexitarian tacos everyday carry gastropub cardigan. Butcher biodiesel gluten-free, chartreuse poke typewriter activated charcoal. Tacos you probably haven't heard of them blog, ugh godard asymmetrical lomo gochujang. Shoreditch swag snackwave gentrify air plant keytar asymmetrical. Umami williamsburg hell of austin quinoa chia heirloom edison bulb kickstarter church-key organic subway tile blog neutra butcher. Schlitz tousled lo-fi, kickstarter vegan yuccie polaroid craft beer gastropub hashtag crucifix."
    },
    
    ];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
    //   if(err){
    //      console.log(err);
    //   }
    //   console.log("removed campgrounds!");
    //       //add a few campgrounds
    //     data.forEach(function(seed){
    //         Campground.create(seed, function(err, campground){
    //             if(err){
    //               console.log(err);
    //             } else {
    //               console.log("Added a campground");
    //               //create a comment
    //               Comment.create(
    //                   {
    //                       text: "This place is great, but I wish it had internet",
    //                       author: "homer"
    //                   },  function(err, comment){
    //                         if(err){
    //                           console.log(err);
    //                          } else {
    //                              campground.comments.push(comment);
    //                              campground.save();
    //                              console.log("Created new comment");
    //                          }                
    //               });
    //             }
    //         });
    //     });
    });
}

module.exports =  seedDB;