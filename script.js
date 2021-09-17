var planter = document.getElementsByClassName("container")
var currentDay = document.getElementById("currentDay")



function runTime(){
    var now = moment();
    var time = now.format("MMM Do, YYYY, h:mm:ssA")
    

    currentDay.textContent = time
   
}

setInterval(runTime, 1000);
runTime()
buildCont()




    
    
function buildCont(){
    var hourz = [ 
        {hour: "9AM"}, 
        {hour: "10AM"},
        {hour: "11AM"}, 
        {hour: "12PM"}, 
        {hour: "1PM"},
        {hour: "2PM"},
        {hour: "3PM"},
        {hour: "4PM"},
        {hour: "5PM"},
        {hour: "6PM"},
    ];
    timez = hourz.length
    for(var i = 0; i < timez; i++){
        $("<div>", {
            id: "rowst" + i,
            class: "rowst"
        }).appendTo("#containa")
        $("<div>", {
            id: "timeBox" + i,
            class: "timeBox ends"
        }).text(hourz[i].hour).appendTo("#rowst" + i)
        $("<div>", {
            id: "textBox" + i,
            class: "task"
        }).appendTo("#rowst" + i)
        $("<input>", {
            id: "taskInput"+ i,
            type: "text",
            class: "taskInput",
            placeholder: "Set Task"
        }).appendTo("#textBox" + i)
        $("<button>", {
            id: "addBtn" + i,
            class: "btn"
        }).text("ADD").appendTo("#rowst" + i)
        $("#addBtn" + i).click(function(e){
            var index = e.target.id.replace(/[^0-9]/g, "")
            console.log(index)
            localStorage.setItem(index, $("#taskInput" + index).val())
        })
    }


    function grabData(){
        for(var i = 0; i < 10; i++) {
            if(localStorage.getItem(i) !== null){
                $("#taskInput" + i).val(localStorage.getItem(i))
            }
            
        }
        
    }
    grabData()


    function colorChanger() {
        var currentHour = moment().format("HH")
        
        for(var i = 9; i < 19; i++) {
            if(currentHour > i) {
                $("#rowst" + (i - 9)).css("background-color", "grey")
            } else if( currentHour < i) {
                $("#rowst" + (i - 9)).css("background-color", "green")
            } else {
                $("#rowst" + (i - 9)).css("background-color", "red")
            }
        }
    }

    colorChanger()
    // if(hourz.length  > boxNum){
    //     fullCont.after(fullCont)
    //     boxNum++
    // } 

    
}
