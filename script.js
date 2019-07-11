const google = document.querySelector('#google');
const googlePic = document.querySelector('#google-pic');
const googleInput = document.querySelector('#google-input');

const editBtn = document.querySelector('#edit-btn');
const editPanel = document.querySelector('#edit-panel');
const editList = document.querySelector('#edit-list');
const editItems = document.querySelectorAll('.edit-item');
const googleStyles = document.querySelectorAll('.google-style');
const borderStyles = document.querySelectorAll('.border-style');
const colorStyles = document.querySelectorAll('.color-style');
const opacityRange = document.querySelector('#opacity-range');
const closeSubPanelBtn = document.querySelector('#close-sub-panel-btn');

let editIsOpen = false;
let subEditOpenId;
let subEditIsOpen = false;

for(item of editItems) {
  item.addEventListener('click', openSubPanel);
}
for(style of borderStyles) {
  style.addEventListener('click', setBorderStyle);
}
for(style of googleStyles) {
  style.addEventListener('click', setGoogleStyle);
}
for(style of colorStyles) {
  style.addEventListener('click', setColor);
}

editBtn.addEventListener('click', toggleEdit);
opacityRange.addEventListener('input', setOpacity);
closeSubPanelBtn.addEventListener('click', closeSubPanel);

function toggleEdit(e) {
  if(editPanel.classList.contains('back')) {
    closeSubPanel();
  } else {
    if(editIsOpen) {
      // close edit panel
      editPanel.classList.remove('close');
      editPanel.classList.remove('edit-panel-two');
      editList.classList.remove('open');
      editIsOpen = false;
      closeSubPanel();
    } else {
      // open edit panel
      editPanel.classList.add('close');
      editPanel.classList.add('edit-panel-two');
      editList.classList.add('open');
      editIsOpen = true;
    }
  }
}

function openSubPanel(e) {
  if(!subEditIsOpen) {
    let opening = e.target.attributes.name.value;
    subEditOpenId = opening;
    editPanel.classList.add('back');
    editPanel.classList.remove('close');
    document.querySelector(`#${opening}`).style.display = 'block';
    closeSubPanelBtn.style.display = 'block';
    subEditIsOpen = true;
  } else {
    closeSubPanel();
    let opening = e.target.attributes.name.value;
    subEditOpenId = opening;
    editPanel.classList.add('back');
    editPanel.classList.remove('close');
    document.querySelector(`#${opening}`).style.display = 'block';
    closeSubPanelBtn.style.display = 'block';
    subEditIsOpen = true;
  }
  editList.style.display = 'none';
}

function closeSubPanel(e) {
  document.querySelector(`#${subEditOpenId}`).style.display = 'none';
  closeSubPanelBtn.style.display = 'none';
  subEditIsOpen = false;
  editList.style.display = 'block';
  editPanel.classList.remove('back');
  editPanel.classList.add('close');
}

function setGoogleStyle(e) {
  googlePic.innerText = event.target.innerText;
  setActive();
}

function setBorderStyle(e) {
  google.style.borderRadius = event.target.attributes.name.value;
  setActive();
}

function setColor(e) {
  if(event.target.id === 'color-style-1') {
    google.style.border = '1px solid #ccc';
    googlePic.style.color = '#f40';
    google.style.backgroundColor = '#fff';
    googleInput.style.backgroundColor = '#fff';
  } else if(event.target.id === 'color-style-2') {
    google.style.border = '1px solid #ccc';
    googlePic.style.color = '#444';
    google.style.backgroundColor = '#fff';
    googleInput.style.backgroundColor = '#fff';
  } else if(event.target.id === 'color-style-3') {
    google.style.border = '1px solid #444';
    googlePic.style.color = '#eee';
    google.style.backgroundColor = '#444';
    googleInput.style.backgroundColor = '#444';
  } else {

  }
  setActive();
}

function setOpacity(e) {
  google.style.opacity = e.target.value;
}

function setActive(e) {
  if(event.target.classList.contains('active')) {
    // target is active
  } else {
    // target isnt active
    // delete from last active
    let eachItem = event.target.parentElement.children;
    console.log(eachItem);

    /*
    for(item of eachItem) {
      if(item.classList.contains('active')) {
        // item.classList.remove('active');
        // item.firstElementChild.remove();
        console.log(item.firstElementChild);
      }
    }
    // add active to new target
    event.target.classList.add('acitve');
    let newLine = document.createElement('div');
    newLine.className = 'active-border';
    event.target.appendChild(newLine);
  */
  }
}

// toggleEdit();
