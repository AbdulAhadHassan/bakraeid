


// var userInp = prompt('Enter date')


// var dobh = new Date('January 2, 1970').getTime()
// var oldDateh = new Date().getTime()

// var finalDateh = dob-oldDate
// var conVarh = finalDate / (1000 * 60 * 60 * )
// // document.write(Math.floor(conVar))
// // console.log(oldDate)





function clockUpdate(){
    const now = new Date()
    const sec = now.getSeconds().toString().padStart(2,0)
    const min = now.getMinutes().toString().padStart(2,0)
    const hour = now.getHours().toString().padStart(2,0)
    var dob = new Date('Jun 16 2024').getTime()
    var oldDate = new Date().getTime()
    
    var finalDate = oldDate - dob
    var conVar = (finalDate / (1000 * 60 * 60 * 24 ))*(-1)
    
    
    if(conVar > 30){
        month = Math.floor(conVar/30)
        conVar = (conVar-(30 * month))
    }
    else{
        month= 0
    }
    
    
    
    
document.getElementById("month").textContent = `${Math.floor(month)}`;
document.getElementById("day").textContent = `${Math.floor(conVar)}`
document.getElementById("hour").textContent = `${hour}`
document.getElementById("min").textContent = `${min}`
document.getElementById("sec").textContent = `${sec}`

}

clockUpdate();
setInterval(clockUpdate , 1000)
 