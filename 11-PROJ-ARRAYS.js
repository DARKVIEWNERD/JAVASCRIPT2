const inputElement=[];

function addtodo(){
   
   const todoList= document.querySelector('.js-todo-name').value;
   const todoDate= document.querySelector('.js-todo-date').value;
   
   inputElement.push( `${todoList} ${todoDate}`);
   console.log(inputElement.length);
   let htmlLists='';
   document.querySelector('.js-todo-name').value='';
for(let count=0;count<inputElement.length;count++){
    
    const value=inputElement[count];// using variable inside the bracket well help access value inside an array
     const html= `<p>${value}</p><button>Delete</button>`;
     htmlLists+=html;

}
    console.log(htmlLists);
    document.querySelector('.js-todo-list').innerHTML= htmlLists;
    

}
const inputElement2=[];
function todo2(){
    const result=document.querySelector('.js-todo-name2').value;
    inputElement2.push(result);
    console.log(inputElement2);
}


