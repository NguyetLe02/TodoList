import express from "express"
import mysql from "mysql"
import cors from "cors"


const app = express()

app.use(cors())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist"
})



app.use(express.json())

app.get("/", (req, res) => {
    res.json("hello backend")
})

app.get("/user", (req, res) => {
    const q = "SELECT * FROM user"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/signup", (req, res) => {
    const q = "INSERT INTO user (name,account, password) VALUES (?)";
    const values = [
        req.body.name,
        req.body.account,
        req.body.password
    ];
    // const values = ['quang','quang@gmail.com','123456'];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.post("/login", (req, res) => {
    const q = "SELECT * FROM user WHERE account = ? AND password =?";
    const values = [
        req.body.account,
        req.body.password
    ];

    db.query(q, [values[0], values[1]], (err, data) => {
        if (err) return res.json(err)
        if (data[0]) return res.json(data[0])
        else return res.json("false");
    });
})


app.get("/tasks", (req, res) => {
    const q = "SELECT * FROM tasks ";

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data);
    });
})

// app.put("/tasks", (req, res) => {
//     const q = "UPDATE tasks SET 'important' = ? WHERE id =?"
//     const taskID = req.params.id;

//     const value = req.body.important

//     return(taskID, value);

//     db.query(q, [value,taskID],(err, data) => {
//         if (err) return res.json(err)
//         return res.json(data);
//     });
// })


app.listen(8800, () => {
    console.log("Connect ");
})