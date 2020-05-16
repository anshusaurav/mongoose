// Answer here for tasks.md

// Q1 Answer here...
var userSchema = new Schema({
    name: {
      type: String,
    },
    age: {
      type: Number,
      
    },
    email: {
      type: String,
    }
  })

// Q2 Answer here...
var userSchema = new Schema({
    name: {
      type: String,
    },
    age: {
      type: Number,
      default: 0
      
    },
    email: {
      type: String,
      lowercase: true
    }
  })

// Q3 Answer here...
var userSchema = new Schema({
    name: {
      type: String,
    },
    age: {
      type: Number,
      default: 0
      
    },
    email: {
      type: String,
      lowercase: true
    },
    password:{
        type: String,
        minlength: 5
    },
    createdAt:{
        type: Date, 
        default: Date.now
    }
  })
// Q4 Answer here...
var addressSchema = new Schema({
    village: {
      type: String,
    },
    city: {
      type: String
      
    },
    state: {
      type: String,
      lowercase: true
    },
    pin:{
        type: String,
        minlength: 5
    },
    user:{
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
  })



// Q5 Answer here...
var addressSchema = new Schema({
    village: {
      type: String,
    },
    city: {
      type: String,
      required: true
      
    },
    state: {
      type: String,
      required: true
    },
    pin:{
        type: String,
        minlength: 5
    },
    user:{
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
  })
// Q6 Answer here...
var userSchema = new Schema({
    name: {
      type: String,
    },
    age: {
      type: Number,
      default: 0
      
    },
    email: {
      type: String,
      lowercase: true
    },
    password:{
        type: String,
        minlength: 5
    },
    createdAt:{
        type: Date, 
        default: Date.now
    },
    favourites: {
        type: [String]
    }
  })
// Q7 Answer here...
var userSchema = new Schema({
    name: {
      type: String,
    },
    age: {
      type: Number,
      default: 0
      
    },
    email: {
      type: String,
      lowercase: true
    },
    password:{
        type: String,
        minlength: 5
    },
    createdAt:{
        type: Date, 
        default: Date.now
    },
    favourites: {
        type: [String]
    }
  }, { timestamps: true})
// Q8 Answer here...
var addressSchema = new Schema({
    village: {
      type: String,
    },
    city: {
      type: String,
      required: true
      
    },
    state: {
      type: String,
      required: true
    },
    pin:{
        type: String,
        minlength: 5
    },
    user:{
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
  }, { timestamps: true})
/*


9. Insert into database some users through user model.
  - create an express application(not express-generator) named sample in root
  - create a user schema
  - create user model based on schema
  - connect to mongodb database using mongoose.connect()
  - insert user into database using Model.create() OR model.save() function
  - check into your local mongo database for inserted data 

10. query a single document(user) using mongoose
  - use Model.find({_id: 'some-id'})
  - use Model.findOne({_id: 'some-id'})
  - use Model.findById(id)

Mention the difference between them in comments, if any ?

11. Update a user 
  - use Model.update
  - use Model.updateOne
  - use Model.findByIdAndUpdate(id)

12. delete a user using Model.findByIdAndDelete()
*/