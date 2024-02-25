import express from "express";
import { CurrentUserRouter } from "./routes/current-user";
import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { errorHanler } from "./middleware/errror-handler";

import { json } from 'body-parser';

const app = express();


app.use(json());

app.use(CurrentUserRouter)
app.use(signupRouter)
app.use(signinRouter);
app.use(errorHanler);



app.listen(3000, () => {
    console.log("auth server running on port 3000");

})