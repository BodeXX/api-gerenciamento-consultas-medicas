import  express  from "express";
import mongoose from "mongoose";

const app = express();

const mongoURI = "mongodb://127.0.0.1:27017/medicapp";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(mongoURI)
    .then(() => {
        console.log("Successfully connected to MongoDB");

        import('./routes/router.js').then(routerModule => {
            app.use("/", routerModule.default);
        });

        app.listen(3000, function () {
            console.log("Listening to port 3000");
        });
    })
    .catch(err => {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    });
