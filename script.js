window.onload = function(){
    update();
    tableBody = document.getElementById('tableBody');
}

function deleteTask(itemIndex){
    taskListArrayStr = localStorage.getItem('taskItem');
    taskListArray = JSON.parse(taskListArrayStr);
    taskListArray.splice(itemIndex,1);
    localStorage.setItem('taskItem', JSON.stringify(taskListArray) );
    update();
}


function  getAndUpdate(){

    textValueStr = document.getElementById('text-item').value;

    if( localStorage.getItem('taskItem') == null ){
        taskListArray = [];
        taskListArray.push(textValueStr);
        localStorage.setItem('taskItem', JSON.stringify(taskListArray) );
        
        
    }
    else{
        taskListArraystr = localStorage.getItem('taskItem');
        taskListArray = JSON.parse(taskListArraystr);
        taskListArray.push(textValueStr);
        localStorage.setItem('taskItem', JSON.stringify(taskListArray) );
    }
    document.getElementById('text-item').value = null;
    update();
    }


    function update(){
        if( localStorage.getItem('taskItem') == null ){
            taskListArray = [];

           // console.log("this is if condition")            
            //taskListArray.push(textValueStr);
            localStorage.setItem('taskItem', JSON.stringify(taskListArray) );
           // console.log("updating list");            
        }
        else{            
            //console.log("this is else condition")
            taskListArraystr = localStorage.getItem('taskItem');
            taskListArray = JSON.parse(taskListArraystr);
           
           // console.log(typeof(taskListArray));
            //console.log(taskListArray);
            //taskListArray.push(textValueStr);
            //localStorage.setItem('taskItem', JSON.stringify(taskListArray) );            
        }
        str  =" ";
        taskListArray.forEach((element,index)=> {
            str += `
            <tr>
            <td scope="row"  align="center" width="200"> ${element}</td>
            <td scope="row"><button onclick="deleteTask(${index})"  >Delete</button></td>
            </tr>`
        });    
    tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = str; 
}
// update();


function add(){
    
    if (document.getElementById('text-item').value == ''){
        alert('Please fill the task !!');
        return;
    }
    
    getAndUpdate();
    console.log("Update List");
};


function clearStorage(){
    if (confirm("Do you really want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update();
    }
}
