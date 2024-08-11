

function addtodo(){
    const inputElement=[];
   const todoList= document.querySelector('.js-todo-name').value;
   const todoDate= document.querySelector('.js-todo-date').value;
   
   inputElement.push( `${todoList} ${todoDate}`);
   console.log(inputElement.length);
   let htmlLists='';
   document.querySelector('.js-todo-name').value='';
for(let count=0;count<inputElement.length;count++){
    
    const value=inputElement[count];// using variable inside the bracket well help access value inside an array
     const html= `<p>${value}</p>`;
     htmlLists+=html;

}
    console.log(htmlLists);
    document.querySelector('.js-todo-list').innerHTML= htmlLists;
    

}


