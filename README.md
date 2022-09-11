# Guidelines

## Requirements

Iris <iriszidon@gmail.com>
	
Wed, Sep 7, 5:38 PM (17 hours ago)
	
to me

Advanced Hands-on:

Implement a utility in JS that prints “simple” objects. 

“Simple” objects are defined as follows:

Each property can be of the following types:

    Object – assume that object is also a "simple" object

    Primitive - number, boolean or string only


The program should navigate the object structure and print the structure. Here's an example: 

const person = {

age: 55,	

name: {

		firstName: `Luke`,

		lastName: ‘Skywalker’

	}

}

The output of your utility when run on the person object above should be something like this:


Object:

----------------------------------------

age = 55
name = 

Object:

----------------------------------

            firstName = "Luke"

            lastName = "Skywalker"


Make sure to follow the format above. Indentation should be 1 tab. The line divider should be 20 characters long.


 

General guidelines:

    You can assume your input contains only “Simple” objects as defined above

    Total time for the exercise is 1 hour, please do not exceed the allocated time

    Start with a basic working implementation and then extend to Arrays

    Make sure exceptions are handled properly 

    Make sure the API to use this utility is convenient to use 

    You may use Google for help. You cannot use external libraries or any other external code. 

Write the code as though you are writing production code

-------------old assi9gnmrnt
Use the file `data.csv` as the data source.

Implement the following APIs, using memory only - no external DB.
<br>
**Keep efficiency in mind, the user base (data.csv) can grow exponentially
<br>
Searching the data linearly is not a good enough solution**
```
Get user by Id
    - GET /users/a2ee2667-c2dd-52a7-b9d8-1f31c3ca4eae
    - Should return the requested user details 

Example required response:
{
    "id": "ae8da2bf-69f6-5f40-a5e6-2f1fedb5cea6",
    "name": "Ricardo Wise",
    "dob": "13/1/1973",
    "country": "AE"
}

Get xxx
    - GET /structure
    - Should navigate the object structure and print the structure

Get users list by country
    - GET /users?country=US
    - Should return a list of all users from requested country

Get users list by age
    - GET /users?age=30
    - Should return all users which are of age 30 at the time of the request

Get users list by name
    - GET /users?name=Susan
    - Should return all users which name matches the requested name
    - Matching names rules:
        - Full match - for input "Susan James" should return all users with name "Susan James".
        - Full first name or last name - for input "Susan" should return all users with that first or last name.
        - Partial match (minimum 3 chars) - for input "Sus", should return all users with first or last name that begin with "Sus".
        - Should support non case sensitive search (Searching for "susan" should return users with name "Susan").

Example required response for list of users:
[    
    {
        "id": "ae8da2bf-69f6-5f40-a5e6-2f1fedb5cea6",
        "name": "Ricardo Wise",
        "dob": "13/1/1973",
        "country": "AE"
    }
]

Delete user by id
    - DELETE /users/a2ee2667-c2dd-52a7-b9d8-1f31c3ca4eae
    - Should delete the user, after the call the user will not be returned by any of the previous APIs.
```

You can either take the `data.csv` file and create a new project in your preferred language/environment, or use the attached boilerplate written in node.js and implement only the logic part.

## Using boilerplate

### Use this repo as template

Please don't fork it, by using the template button this repo will be cloned under your space.

![template](https://i.ibb.co/0fq7CHp/template.png)

### Install node
Follow the instructions here:
https://nodejs.org/en/download/

### Start up the service
```
npm install
node index.js
```
