const inputElement=[];


function render(){
    let htmlLists='';
    inputElement.forEach((valueobject,i)=> {
        const{name,duedate}=valueobject;
         const html= 
         `<div>${name}</div>
         <div>${duedate}</div>
         <button class="Delete-button js-delete"
         >Delete</button>`;//error misused of function that's why there bug like stay button etc.
         htmlLists+=html;
    });
    
    document.querySelector('.js-todo-list').innerHTML= htmlLists;
    console.log(htmlLists);
    document.querySelectorAll('.js-delete')
    .forEach((deleteButton,i)=>{
        deleteButton.addEventListener('click',()=>{
            inputElement.splice(i,1);
            render();
        });

    });
}
document.querySelector('.js-button').addEventListener('click',()=>{
    addtodo();
});
function addtodo(){
   
 
   const todoList= document.querySelector('.js-todo-name').value;
   const todoDate= document.querySelector('.js-todo-date').value;
   
   inputElement.push( {name: todoList,duedate: todoDate});
  // console.log(inputElement.length);
  

    document.querySelector('.js-todo-name').value='';
   // document.querySelector('.js-todo-date').value='';
    render();
}
const inputElement2=[];
function todo2(){
    const result=document.querySelector('.js-todo-name2').value;
    inputElement2.push(result);
    console.log(inputElement2);
}


