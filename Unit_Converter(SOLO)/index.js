/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("btn-con")
const inputSpace = document.getElementById("input-space")
const lengUnit = document.getElementById("leng-unit")
const volUnit = document.getElementById("vol-unit")
const massUnit = document.getElementById("mass-unit")

convertBtn.addEventListener('click', function () {
    console.log("Clicked!")
    const inputVal = inputSpace.value
    console.log(inputVal)
    lengUnit.innerText = `${inputVal} meters = ${meterToFeet(inputVal)} feet | ${inputVal} feet = ${feetToMeter(inputVal)} meters`
    volUnit.innerText = `${inputVal} litres = ${litToGall(inputVal)} gallons | ${inputVal} gallons = ${gallToLit(inputVal)} litres`
    massUnit.innerText = `${inputVal} kilos = ${kgToPd(inputVal)} pounds | ${inputVal} pounds = ${pdToKg(inputVal)} kilos`
    
})

function meterToFeet(val){
    return (val*3.281).toFixed(3)
}

function feetToMeter(val){
    return (val/3.281).toFixed(3)
}

function litToGall(val){
    return (val*0.264).toFixed(3)
}

function gallToLit(val){
    return (val/0.264).toFixed(3)
}

function kgToPd(val){
    return (val*2.204).toFixed(3)
}

function pdToKg(val){
    return (val/2.204).toFixed(3)
}

