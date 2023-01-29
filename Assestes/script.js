let myTasks=[];
const addTask = document.getElementById("btn");
const ulEl = document.getElementById("ul-el");
let inputEl = document.getElementById("task");
const clearButton =document.getElementById("clear-el");
const tasksFromLocalStorage = JSON.parse(localStorage.getItem("myTasks"));

if (tasksFromLocalStorage) {
    myTasks = tasksFromLocalStorage;
    render(myTasks);
  }


addTask.addEventListener('click',function(){
    if(inputEl.value != ''){
    myTasks.push(inputEl.value);
    inputEl.value='';
    }
  localStorage.setItem("myTasks", JSON.stringify(myTasks));

    console.log(myTasks)
    render(myTasks);

})


// function render(tasks){
//     let listTasks="";
//     for(let i=0;i<tasks.length;i++){
//         // listTasks += `
//         //     <li>
//         //          ${tasks[i]}
//         //     </li>`;

//         listTasks+=`
//         <dl>
//         <dt> <label><input type="checkbox">${tasks[i]}</label> </dt>
//       </dl>        
//         `;
//     }
//     ulEl.innerHTML = listTasks
// }

function render(tasks){
    let listTasks="";
    for(let i=0;i<tasks.length;i++){
        listTasks += `
            <li>
                <label>
                    <input type="checkbox">
                    ${tasks[i]}
                </label>
            </li>`;
    }
    ulEl.innerHTML = listTasks
}

clearButton.addEventListener('click',function(){
    myTasks=[];
    ulEl.innerHTML='';
    localStorage.clear();
})