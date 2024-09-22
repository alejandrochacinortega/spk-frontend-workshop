"use strict";
console.log("WELCOME TO DEMO #3");
// Data
var data = [
    {
        "_id": "6154253b1bf82811286020d4",
        "index": 0,
        "guid": "4efa1bea-5f52-4291-b8d6-c1829ac13173",
        "isActive": false,
        "balance": "$2,929.74",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "eyeColor": "blue",
        "name": "Alma Casey",
        "gender": "female",
        "company": "LINGOAGE",
        "email": "almacasey@lingoage.com",
        "phone": "+1 (911) 435-2159",
        "address": "967 Crystal Street, Blende, Kansas, 4225",
        "tags": [
            "officia",
            "proident",
            "consectetur",
            "proident",
            "est",
            "ex",
            "in"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Gordon Grimes"
            },
            {
                "id": 1,
                "name": "Lillie Bradshaw"
            },
            {
                "id": 2,
                "name": "Stanley Garrison"
            }
        ],
        "favoriteFruit": "banana"
    },
    {
        "_id": "6154253b039de5b95e1342af",
        "index": 1,
        "guid": "f8aec6cf-0735-4741-b05f-ebb3c2ec7f1e",
        "isActive": true,
        "balance": "$3,337.29",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "blue",
        "name": "Bettye Kinney",
        "gender": "female",
        "company": "SUPREMIA",
        "email": "bettyekinney@supremia.com",
        "phone": "+1 (909) 428-2185",
        "address": "584 Lake Street, Grenelefe, Michigan, 2164",
        "tags": [
            "dolore",
            "non",
            "irure",
            "cupidatat",
            "adipisicing",
            "aute",
            "nostrud"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Stevens Mcbride"
            },
            {
                "id": 1,
                "name": "Rivas Johnston"
            },
            {
                "id": 2,
                "name": "Paulette Middleton"
            }
        ],
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "6154253be29798b3a8080e24",
        "index": 2,
        "guid": "b78aab7d-a628-4408-8bd0-efb30bad5cca",
        "isActive": true,
        "balance": "$2,510.84",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "brown",
        "name": "Ramos Rasmussen",
        "gender": "male",
        "company": "FUELWORKS",
        "email": "ramosrasmussen@fuelworks.com",
        "phone": "+1 (814) 549-3058",
        "address": "788 Wolf Place, Canoochee, Alabama, 5341",
        "tags": [
            "ex",
            "culpa",
            "dolore",
            "id",
            "ut",
            "ea",
            "cupidatat"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Kramer Schroeder"
            },
            {
                "id": 1,
                "name": "Gates Marsh"
            },
            {
                "id": 2,
                "name": "Marion Church"
            }
        ],
        "favoriteFruit": "apple"
    },
    {
        "_id": "6154253b9bd9a2ce292a6c79",
        "index": 3,
        "guid": "19aecca5-4079-4196-92e0-22c8f27c6873",
        "isActive": false,
        "balance": "$3,020.75",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "brown",
        "name": "Paula Garrett",
        "gender": "female",
        "company": "PAPRIKUT",
        "email": "paulagarrett@paprikut.com",
        "phone": "+1 (800) 565-2591",
        "address": "130 Carroll Street, Sanders, Guam, 5046",
        "tags": [
            "ad",
            "ipsum",
            "occaecat",
            "culpa",
            "magna",
            "ullamco",
            "ad"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Diana Delaney"
            },
            {
                "id": 1,
                "name": "Ines Burks"
            },
            {
                "id": 2,
                "name": "Connie Trevino"
            }
        ],
        "favoriteFruit": "banana"
    },
    {
        "_id": "6154253b13237de033fd8638",
        "index": 4,
        "guid": "bedd962c-4d7c-4e35-a4c1-3ac9d710b209",
        "isActive": true,
        "balance": "$3,860.67",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "blue",
        "name": "Patrick Fulton",
        "gender": "male",
        "company": "EXOTECHNO",
        "email": "patrickfulton@exotechno.com",
        "phone": "+1 (835) 414-2505",
        "address": "590 Glenmore Avenue, Santel, Maryland, 8121",
        "tags": [
            "magna",
            "non",
            "excepteur",
            "magna",
            "sunt",
            "cillum",
            "nostrud"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Rojas Ballard"
            },
            {
                "id": 1,
                "name": "Crystal Ware"
            },
            {
                "id": 2,
                "name": "Tyson Wright"
            }
        ],
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "6154253b6fdf817e46718959",
        "index": 5,
        "guid": "6179c7f3-5903-4e5f-be52-16b2c481337b",
        "isActive": false,
        "balance": "$2,437.03",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "green",
        "name": "Geraldine Clements",
        "gender": "female",
        "company": "COMTEXT",
        "email": "geraldineclements@comtext.com",
        "phone": "+1 (881) 493-3267",
        "address": "800 Schenectady Avenue, Eggertsville, Arkansas, 1384",
        "tags": [
            "aliquip",
            "aute",
            "et",
            "ad",
            "est",
            "do",
            "laborum"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Kathie Barr"
            },
            {
                "id": 1,
                "name": "Lynne Sims"
            },
            {
                "id": 2,
                "name": "Goldie Mcgee"
            }
        ],
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "6154253b1064133acb76f0df",
        "index": 6,
        "guid": "3f359f23-1b7a-48bc-8e49-25f33b279fef",
        "isActive": true,
        "balance": "$2,894.31",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "blue",
        "name": "Holt Coleman",
        "gender": "male",
        "company": "EXODOC",
        "email": "holtcoleman@exodoc.com",
        "phone": "+1 (875) 414-2748",
        "address": "152 Midwood Street, Cannondale, West Virginia, 9147",
        "tags": [
            "laboris",
            "dolor",
            "nisi",
            "commodo",
            "proident",
            "nostrud",
            "excepteur"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Rhea Chen"
            },
            {
                "id": 1,
                "name": "Mari Vaughn"
            },
            {
                "id": 2,
                "name": "Esther Banks"
            }
        ],
        "favoriteFruit": "apple"
    },
    {
        "_id": "6154253b6cc683b262a23714",
        "index": 7,
        "guid": "6b19a744-b5eb-4c11-acd6-65f10b35f3c1",
        "isActive": true,
        "balance": "$3,967.55",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "blue",
        "name": "Ora Cleveland",
        "gender": "female",
        "company": "APEX",
        "email": "oracleveland@apex.com",
        "phone": "+1 (919) 406-2469",
        "address": "692 Court Square, Groton, Nevada, 1584",
        "tags": [
            "voluptate",
            "elit",
            "adipisicing",
            "eu",
            "amet",
            "sint",
            "tempor"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Warner Bradford"
            },
            {
                "id": 1,
                "name": "Naomi Garcia"
            },
            {
                "id": 2,
                "name": "Fischer Frost"
            }
        ],
        "favoriteFruit": "strawberry"
    }
];
// TODO 2: Remove all the anys and make this field error free
var peopleWithEyeColor = function (data, eyeColor) {
    var result = data.filter(function (person) { return person.eyeColor === eyeColor; });
    console.log("1. People with ".concat(eyeColor, " eyes:"), result);
    return result;
};
peopleWithEyeColor(data, "blue");
var peopleYoungerThan = function (data, ageLimit) {
    var result = data.filter(function (person) { return person.age <= ageLimit; }).map(function (person) { return person.name; });
    console.log("2. People younger than ".concat(ageLimit, ":"), result);
    return result;
};
peopleYoungerThan(data, 30);
var peopleOlderThanContainsVowel = function (data, ageLimit, vowel) {
    var result = data.filter(function (person) { return person.age >= ageLimit; }).map(function (person) { return person.name; }).filter(function (name) { return name.toLocaleUpperCase().includes(vowel.toLocaleUpperCase()); });
    console.log("3. People older than ".concat(ageLimit, " whose name contains \"").concat(vowel, "\":"), result);
    return result;
};
peopleOlderThanContainsVowel(data, 30, "o");
var howManyPeopleLikeFruit = function (data, fruit) {
    var result = data.filter(function (person) { return person.favoriteFruit === fruit; }).length;
    console.log("4. Number of people who have \"".concat(fruit, "\" as their favorite fruit:"), result);
    return result;
};
howManyPeopleLikeFruit(data, "strawberry");
var getPersonById = function (data, id) {
    var result = data.find(function (person) { return person._id === id; });
    console.log("5. Person with unique id ".concat(id, ":"), result);
    return result;
};
getPersonById(data, "6154253b1bf82811286020d4");
