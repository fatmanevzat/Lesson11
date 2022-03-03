const firstname = "Ahmet";
const hayvan = ["kedi", "fare", "köpek", 5];
const insan = {
   firstname : "Ahmet" ,
   surname : "k",
   "family" : "Aydin",
   age : 32
}

console.log(hayvan[2])
console.log(insan.firstname)
console.log(insan)

console.log(insan.age)
console.log(insan ["surname"])
console.log(insan["family"])

let arama = "age";
console.log(insan["agee"])


const myCar = {
    brand : "Volvo",
    model : "2022",
    color : "black",
    km : 2000,
    fuel : "Benzin"
}
myCar.vites = "auto";
myCar.km = 30000;
console.log(myCar)

function carCreator(brand, model, color, km) {
    this. brand = brand;
    this. model = model;
    this. color = color;
    this.km = km;
}
const honda = new carCreator("honda", "civic", "blue", 15000)
console.log(honda)


const newBoot = {
    name : "fullStack",
    lessons : ["JS", "React", "Nodjs"],
    teachers : {
        teacher_1 :{
            name : "Mustafa",
            surName : "Türkçe"
        },
        teacher_2 :{
            name : "Firat",
            surName : "Tarih"
        }
    }
}
console.log(newBoot)
console.log(newBoot.teachers.teacher_2.name)
console.log(newBoot.lessons[1])


const user = {
    firstname : "Fatma",
    lastname : "Yalçin",
    country : "Turkey",
    fullname : function (params) {
        return this.firstname.toUpperCase() + " " + this.lastname.toUpperCase() + " " + params + " yaşinda"
    }
}
console.log(user.fullname(43))
document.write(user.fullname(43))

console.log(user)
delete user.country;
console.log(user)


const person = {
    firstname : "Nuh",
    lastname : "Yalçin",
    age : 46
}
for (const key in person) {
    console.log(key)
    }

    const values = Object.values(person)
    console.log(values)

    const entries = Object.entries(person)
    console.log(entries)


    const today = new Date()
    console.log(today)
    const spesificDate = new Date("12-03-2021 11:30")
    console.log(spesificDate.getDate())
    console.log(spesificDate. getMonth())
    console.log(spesificDate.getFullYear())
    console.log(spesificDate.toLocaleString())