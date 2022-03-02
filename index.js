const express = require("express")
const { sequelize,url } = require("./models")
const app = express();
const routes = require("./routes")

const PORT = process.env.port || 5003



app.use(express.json())
app.use("/", routes)





app.listen(PORT,()=>{

    sequelize.authenticate()
})