const Application = require("./framework/Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parseJson");
const parseUrl = require("./framework/parseUrl");

const app = new Application();

app.use(parseUrl("http://localhost:3000"));
app.use(jsonParser);

app.addRouter(userRouter);

app.listen(3000, () => console.log("Server is rnning on port: 3000"));
