// Your code here
const createEmployeeRecord = (array) => {
    let r;
    return r = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [], 
    timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecords){
    return employeeRecords.map(createEmployeeRecord)
}

function createTimeInEvent(employee, time){
    let date = time.split(" ")[0]
    let hour = time.split(" ")[1]

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return employee
}

function createTimeOutEvent(employee, time){
    let date = time.split(" ")[0]
    let hour = time.split(" ")[1]

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return employee
}

function hoursWorkedOnDate(employee, date){
    let x = employee.timeInEvents.find(function(e){ 
        return e.date === date
    })
    let y = employee.timeOutEvents.find(function(e){ 
        return e.date === date
    })

return (y.hour - x.hour)/100

}

function wagesEarnedOnDate(employee, date){
   let earnedWage = hoursWorkedOnDate(employee, date) * employee.payPerHour
   return parseInt(earnedWage)
}

function allWagesFor(employee){
    let daysIn = employee.timeInEvents.map(e => e.date)

    let payOut = daysIn.reduce(function(total, e){
        return total + wagesEarnedOnDate(employee, e)
    }, 0)
    return payOut 
}

function findEmployeeByFirstName(array, name){
    return array.find(e => e.firstName == name)
}

function calculatePayroll(array){
    return array.reduce(function(total, e){
        return total + allWagesFor(e)
    }, 0)
}