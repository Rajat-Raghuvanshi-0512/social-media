const app = require("./backend/app");
const next = require("next")
const ConnectToMongo = require("./backend/Database/connection");

const dev = process.env.NODE_ENV !== "production"

const newapp = next({ dev })
const handle = newapp.getRequestHandler()
//Connect to DataBase 
ConnectToMongo()

const PORT = process.env.PORT || 5000

newapp.prepare().then(() => {

    app.get("*", (req, res) => {
        return handle(req, res)
    })
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT} 🔥`)
    })

}).catch(ex => {
    console.log(ex.stack);
})
