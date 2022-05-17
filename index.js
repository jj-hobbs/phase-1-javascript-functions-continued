// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun()
saturdayFun("bathe my dog")


function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

mondayWork()
mondayWork("work from home")

function wrapAdjective(result = "") {
    const innerFunction = function (empathetic = "a hard worker") {
        return `You are ${result}${empathetic}${result}!`
    };
    return innerFunction
}