console.log("Hello!");

// Initialize variables 

let ingredients = [
    {
        name: 'Whole wheat bun',
        cost: 20,
        count: 0,
    },
    {
        name: 'Patty',
        cost: 10,
        count: 0,
    },
    {
        name: 'Cheese',
        cost: 10,
        count: 0,
    },
    {
        name: 'Tomatoes',
        cost: 20,
        count: 0,
    },
    {
        name: 'Onions',
        cost: 20,
        count: 0,
    },
    {
        name: 'Lettuce',
        cost: 20,
        count: 0,
    }
    
];

// Ingredient update

var total = 20

function updates(i,n){
    ingredients[n].count = i
    document.getElementById("ingre-name"+n).innerHTML = ingredients[n].name + " - "+ingredients[n].count
    total = total + ingredients[n].cost
    document.getElementById("price").innerHTML = "INR " + total
}

var i1 = 0
document.getElementById("1").addEventListener('click',function(){
    let n = 1
    updates(i1+1,n)
    i1++
})

var i2 = 0
document.getElementById("2").addEventListener('click',function(){
    let n = 2
    updates(i2+1,n)
    i2++
})

var i3 = 0
document.getElementById("3").addEventListener('click',function(){
    let n = 3
    updates(i3+1,n)
    i3++
})

var i4 = 0
document.getElementById("4").addEventListener('click',function(){
    let n = 4
    updates(i4+1,n)
    i4++
})

var i5 = 0
document.getElementById("5").addEventListener('click',function(){
    let n = 5
    updates(i5+1,n)
    i5++
})

function alertfunc() {
    alert("Total amount you have to pay is Rs." + total)
} 