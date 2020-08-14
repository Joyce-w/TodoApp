const form = document.querySelector('.addToDo')
const list = document.querySelector('.list')
const clearbtn = document.querySelector('#clearbtn')
let toDoList = JSON.parse(localStorage.getItem('list')) || [];



//load previously stored tasks onto list
  for(let i = 0; i < toDoList.length; i ++){
  let newSpan = document.createElement('span');
  let newLi = document.createElement('li');
  newLi.append(newSpan);
  list.appendChild(newLi);

  newSpan.innerText = toDoList[i].task;
  newSpan.completed = toDoList[i].completed  ? true : false
  
  if (newSpan.completed){
    newSpan.classList.toggle('completed');
  }
  list.appendChild(newLi)

  let removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  newLi.append(removeBtn);



}

list.addEventListener('click', function(e){
  console.log(e)
  //strike through li if clicked
  if(e.target.classList.toggle('completed')){
  }

  // remove li from toDoList when Remove button is clicked
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
    
    //filter()
    toDoList = toDoList.filter(function (item) {
    let todoText = e.target.previousElementSibling.innerText;
    return item.task !== todoText;
    })
    
    // save the changes to localStorage
    localStorage.setItem('list', JSON.stringify(toDoList));
    }
})



//upon click, add submission to list
form.addEventListener('submit', function(e){
  e.preventDefault();
  
  let newItem = document.querySelector('#toDoItem').value

  let newLi = document.createElement('li');
  let newSpan = document.createElement('span');
  newLi.append(newSpan);
  list.appendChild(newLi);
  newSpan.innerText = newItem;

  let removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  newLi.append(removeBtn);


  toDoList.push({
    task: newItem, 
    completed: undefined
  })

  localStorage.setItem('list', JSON.stringify(toDoList));

  form.reset();
})
