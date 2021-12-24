var newYears = '1 Jan 2022'
const dayEl = document.getElementById('days')
const hourEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondeEl = document.getElementById('seconds')
const changeDate = document.getElementById('date')
changeDate.addEventListener('change' , myChange)
function countdown (){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    const totalsecond = (newYearsDate - currentDate) / 1000
    const days = Math.floor(totalsecond / 3600 / 24)
    const hours = Math.floor(totalsecond / 3600 ) % 24
    const minutes = Math.floor(totalsecond / 60) % 60
    const second = Math.floor(totalsecond % 60)
    dayEl.innerHTML = time(days);
    hourEl.innerHTML = time(hours);
    minsEl.innerHTML = time(minutes);
    secondeEl.innerHTML = time(second); 
}
function time(time){
    if(time < 10){
        return `0${time}`
    }else{
        return time
    }
}
function myChange(){
    const change = document.getElementById('date').value
    newYears = change
    console.log(change)
}
//countdown ();
setInterval(countdown, 1000)