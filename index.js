const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const app = express()

app.use(express.json())
let books = []

const uri = 'mongodb+srv://superadmin:-.-5xpXw@cluster0.lfmue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})
let db, booksCollection

async function connect() {
    await client.connect()
    db = client.db('test')
    booksCollection = db.collection('books')
}
connect()



app.get('/books', (req, res) => {
  
    res.status(200).json(books)
})


app.get('/books/:id', (req, res) =>{
    //input
    let id = req.params.id

     let book = {} 

    //process

    //output
    res.status(200).json(book)

})

app.post('/books', (req, res) => { 
    //input
    let newtitle = req.body.title 
    let newprice = req.body.price 
    let newunit = req.body.unit 
    let newisbn = req.body.isbn 
    let newimageurl = req.body.imageurl 

    let newBook = {
        title: newtitle, 
        price: newprice,
        unit: newunit,
        isbn: newisbn,
        imageurl: newimageurl,
    }
    let bookID = 0

    //process

   books.push(newBook) 
   bookID = books.length - 1 

    //output

    res.status(201).json(bookID)
})

const port = 3000
app.listen(port, () => console.log(`Server started again at ${port}`))