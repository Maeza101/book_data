const mongoose = require(`mongoose`)
//const LOCAL_URI = `mongodb://localhost:27017/user-data`;
const CLOUD_URI = `mongodb+srv://ntizo:Maeza101@cluster0.4zf1b9o.mongodb.net/user-data?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(CLOUD_URI).then(() => {
    console.log(`Database Connected`)
}).catch((err) => {
    console.log(`Failed to connect to database` + err)
});

module.exports = mongoose;