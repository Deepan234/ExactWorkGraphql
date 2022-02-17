const {gql} = require('apollo-server');

module.exports = gql`
type Query{
    school(
        id:ID
        name:String,
        about:String,
        location:String,
        contactNo:String,
        distance:String,
        emailId:String,
        free:String,
        affilation:String,
        rating:String,
        website:String  
    ):[School]
    schoolById(id:ID): School
}
type Mutation{
    addSchool(school: SchoolInput): School
}
input SchoolInput{
    name:String,
    about:String,
    location:String,
    contactNo:String,
    distance:String,
    emailId:String,
    free:String,
    affilation:String,
    rating:String,
    website:String 
}

type School{
id:ID!
name:String,
about:String,
location:String,
contactNo:String,
distance:String,
emailId:String,
free:String,
affilation:String,
rating:String,
website:String
}`

