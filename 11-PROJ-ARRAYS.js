const inputElement=[];

function addtodo(){
   const todoList= document.querySelector('.js-todo-name').value;
   
   inputElement.push(todoList);
   let htmlLists='';
   document.querySelector('.js-todo-name').value='';
for(let count=0;count<inputElement.length;count++){
    
    const value=inputElement[count];
     const html= `<p>${value}</p>`;
     htmlLists+=html;

}
    console.log(htmlLists);
    document.querySelector('.js-todo-list').innerHTML= htmlLists;
    

}

