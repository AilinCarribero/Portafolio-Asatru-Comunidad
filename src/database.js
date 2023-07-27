const mongoose = require('mongoose');
const { mongodb } = require ('./keys')

mongoose.connect(mongodb.URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( database => console.log(`base de dato conectada`))
    .catch(err => console.log(err));
