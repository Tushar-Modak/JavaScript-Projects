const addBtn = document.querySelector('.btn');
const textInput = document.querySelector('.form-control');
const parent = document.querySelector('#parent');
console.dir(addBtn);
addBtn.addEventListener('click',(e)=>{
    console.log('clicked!!!');
    let currenBtn = e.currentTarget;
    let task = textInput.value;
    let newLi = document.createElement('li');
    newLi.className = 'list-group-item d-flex justify-content-between mt-2';
    newLi.innerHTML =  `<h4 class="flex-grow-1">${task}</h4>
    <button class="btn btn-warning mx-3" onclick="editHandler(this)">Edit</button>
    <button class="btn btn-danger" onclick="removeHandler(this)">Delete</button>`;
    
    parent.appendChild(newLi);

    textInput.value = '';

    if(parent.children.length > 0){
       let emptyMsg = document.querySelector('.emptyMsg');
       emptyMsg.remove();
    }
});

function removeHandler(element){
    let parentE = element.parentElement;
    parentE.remove();
    if(parent.children.length <= 0){
        console.log('Zero item');
        let emptyMsg =document.createElement('h4');
        emptyMsg.classList.add('emptyMsg');
        emptyMsg.textContent = 'The To-Do List is empty. Need to add task!';
        emptyMsg.style.color = 'red';
        emptyMsg.style.textAlign = 'center';
        parent.append(emptyMsg);
    }
}

function editHandler(element){

    if(element.textContent == 'Edit'){
        element.textContent = 'Done';
        let previousElemnt = element.previousElementSibling;
        console.log(previousElemnt);
        inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'form-control';
        inputField.value = previousElemnt.textContent;

        element.parentElement.replaceChild(inputField,previousElemnt);
    }else{
        element.textContent = 'Edit';
        let previousElemnt = element.previousElementSibling;
        console.log(previousElemnt);
        item = document.createElement('h4');
        item.className = 'flex-grow-1';
        item.textContent = previousElemnt.value;

        element.parentElement.replaceChild(item,previousElemnt);
    }
}