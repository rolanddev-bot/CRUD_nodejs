const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/node_api",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log('tout es bon !');
        else console.log("il y a une errer! :"+err );
    }

)
