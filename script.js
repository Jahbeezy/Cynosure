var currentDay = document.getElementById("currentDay")

//This function takes the moment formats it then displays it in the currentDay
function runTime(){
    var now = moment();
    var time = now.format("MMM Do, YYYY, h:mm:ssA")
    

    currentDay.textContent = time
   
}


// setInterval refreshes the runTime function every second
setInterval(runTime, 1000);
runTime()
buildCont()




//this function will run as the page opens up
function buildCont(){
    //the times that i want to display
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
    //set timez equal to hourz.length for my for loop
    timez = hourz.length
    // i = 0; for everytime i is less than timez; i increase by 1
    for(var i = 0; i < timez; i++){
        //create my row column and append it to the the main container using jQuery
        $("<div>", {
            id: "rowst" + i,
            class: "rowst"
        }).appendTo("#containa")
        //followed the same proceedure to recreate my layout from the html
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
        //add button with function on click setting index to just the numbers of the 
        //array above then it cobines it with the taskInput and sends it to the local storage
        $("#addBtn" + i).click(function(e){
            var index = e.target.id.replace(/[^0-9]/g, "")
            localStorage.setItem(index, $("#taskInput" + index).val())
            
        })
    }

//if theres a task in the localStorage this will grab it and display it
    function grabData(){
        for(var i = 0; i < 10; i++) {
            if(localStorage.getItem(i) !== null){
                $("#taskInput" + i).val(localStorage.getItem(i))
            }
            
        }
        
    }
    grabData()

//this changes the colors of the rows wether its before after or currently the hour
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
    

    
}
