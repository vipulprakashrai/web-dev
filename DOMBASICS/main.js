// Grab a single element--
// const form = document.getElementById('my-form');
// console.log(form); 

// console.log(document.querySelector('container'));
// console.log(document.querySelector('h1'));

// Grab multiple element--
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');
// console.log(nodeItems);
// console.log(colItems);
//console.log(document.getElementsByTagName('li'));

//nodeItems.forEach(item => console.log(item));
//colItems.forEach(item => console.log(item));

// for(let i = 0; i < colItems.length; i++){
//     console.log(colItems[i]);
// }

//DOM manipulation--
const ul = document.querySelector('.items');
// ul.remove();  TO remove the things

// Multiple way of accessing the element under a parent.
// ul.firstElementChild.textContent = 'HTML';
// ul.children[1].innerText = 'CSS';
// ul.lastElementChild.innerHTML = '<h4>JavaScript</h4>';


// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'red';
// btn.style.textTransform = 'upperCase'; 

// Event Listener--
const btn = document.querySelector('.btn');

// btn.addEventListener('click', e => {
//     e.preventDefault(); // this is used becoz here we are using a btn inside a form element.
//     console.log(e);
// })

// btn.addEventListener('click', e => {
//     e.preventDefault();
// ul.firstElementChild.textContent = 'HTML';
// ul.children[1].innerText = 'CSS';
// ul.lastElementChild.innerHTML = '<h4>JavaScript</h4>';
// btn.style.backgroundColor = 'red';
// btn.style.textTransform = 'upperCase'; 
// })



// Form--

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userId = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userId.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }

}













