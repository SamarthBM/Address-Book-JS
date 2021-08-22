/**
 * Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number and email.
 * 
 * @author: Samarth BM.
 */


// Importing personInfo class file.
const PersonInfo = require("./PersonInfoData.js");
const prompt = require('prompt-sync')();

//Ability to add user-defined values to the PersonInfoData

try{
    let personInfo = new PersonInfo();
    personInfo.fName = prompt("Enter First Name : "); 
    personInfo.lName = prompt("Enter Last Name : "); 
    personInfo.addressName = prompt("Enter Address : "); 
    personInfo.cityName = prompt("Enter City : "); 
    personInfo.stateName = prompt("Enter State : "); 
    personInfo.zipNumber = prompt("Enter Zip : "); 
    personInfo.phoneNumberInput = prompt("Enter Phone Number : "); 
    personInfo.emailInput = prompt("Enter Email : "); 
    console.log(personInfo.toString());
} catch ( e ) {
    console.error(e);
}