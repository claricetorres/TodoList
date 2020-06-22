//all variables from html
const submit = document.getElementById('setTask');
const input = document.getElementById('write');
const lista = document.getElementById('lista');
//array that saves all the data:
var tasks =  [];
//makes enter work on input:

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      submit.click();
    }
});

//makes new tasks: li --> label --> input --> span 
function makesTasks(){
    var wholeTask = document.createElement('li');
    var checkWrapper = document.createElement('label');
    var checkbox = document.createElement('input');
    var classofWholetask = document.createAttribute('class');
    var spanText = document.createElement('span');
    var classofSpantext= document.createAttribute('class');
    classofWholetask.value = 'onetask';
    classofSpantext.value = 'taskvalue';
    lista.appendChild(wholeTask);
    wholeTask.appendChild(checkWrapper);
    checkWrapper.appendChild(checkbox);
    checkWrapper.appendChild(spanText);
    checkbox.setAttributeNode(classofWholetask);
    spanText.setAttributeNode(classofSpantext);
    checkbox.type = 'checkbox';
    spanText.innerText = input.value;
    tasks.push(input.value);
    input.value = '';
}
// whe u press the setTask button new tasks come up on the screen
function setTasks(){
    makesTasks();
    console.log(tasks);
}
//removes lis:
function byeLi(paramsone, paramstwo){
    for(let i = paramsone.length-1; i>=0; i--){
        if(paramsone[i].checked === true){
            tasks.splice(i, 1);
            paramstwo[i].remove();
        }
    }
}
//when the trashbin is pressed selected checkboxes are removed
function trashme(){
    var wholeTaskAfter = document.getElementsByClassName('onetask');
    var getwholeTask = document.getElementsByTagName('li');
    byeLi(wholeTaskAfter, getwholeTask);
    console.log(tasks);
}
