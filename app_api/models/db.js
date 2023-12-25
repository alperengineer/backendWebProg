var mongoose = require( 'mongoose');
var dbURI='mongodb+srv://aokucukcal:+123456+@cluster0.xzj7kv5.mongodb.net/mekanbul';
// var dbURI = 'mongodb://localhost/mekanbul';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresine bağlandı");
});
mongoose.connection.on("error",function(){
    console.log("bağlantıda hata");
});
mongoose.connection.on("disconnected",function(){
    console.log(" bağlantı koptu");
});
//uygulama kapandığında kapat
process.on("SIGINT",function(){
    mongoose.connection.closed();
    console.log("Uygulama kapatıldı");
    process.exit(0);
})
require("./venue");