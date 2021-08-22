/**
 * Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number and email.
 * 
 * @author: Samarth BM.
 */


// Importing personInfo class file.
const PersonInfo = require("./PersonInfoData.js");
const prompt = require('prompt-sync')();


var personInfo = new PersonInfo("Samarth", "BM", "Layout", "DVG", "Ktaka", "577004", "9874563214", "sam@gmail.com");
console.log(personInfo.toString());

//Ability to add user-defined values to the PersonInfoData
personInfo.firstName = prompt("Enter First Name : "); 
personInfo.lastName = prompt("Enter Last Name : "); 
personInfo.address = prompt("Enter Address : "); 
personInfo.city = prompt("Enter City : "); 
personInfo.state = prompt("Enter State : "); 
personInfo.zip = prompt("Enter Zip : "); 
personInfo.phoneNumber = prompt("Enter Phone Number : "); 
personInfo.email = prompt("Enter Email : "); 
console.log(personInfo.toString());