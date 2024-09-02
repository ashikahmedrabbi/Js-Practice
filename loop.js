// var i;
// var names="Bristy Khatun";

// for(i=0;i<names.length;i++){
  
// } console.log(i);



    let daysInMonth = 30;
    let daysInWeek = 7;
    let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    let calendar = '';

    
    for (let i = 0; i < daysInWeek; i++) {
        calendar += dayNames[i] + '\t';
    }
    calendar += '\n'; 
    
  
    for (let day = 1; day <= daysInMonth; day++) {
       
        calendar += day + '\t';
        
        
        if (day % daysInWeek === 0) {
            calendar += '\n';
        }
    }
    
 
    console.log(calendar);




