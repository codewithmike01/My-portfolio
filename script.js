/* eslint-disable prefer-const */
const ham = document.querySelector('.hide-ham');
const menuLink = document.querySelector('.desktop-menu');
const cancelMenu = document.querySelector('.cancel-dropDown');
const navLinks = Array.from(document.getElementsByClassName('link'));
const navH1 = document.querySelector('.greet');
const navP = document.querySelector('.banner-detail');
const letConnect = document.querySelector('.connect');
const logo = document.querySelector('.logo');
const projectSection = document.getElementById('project-show-case');
let count = 1;
let modalCount = 1;

// Creting Global elements ( For Cards)
const divImg = document.createElement('div');
divImg.setAttribute('class', 'project-img');

const writeUp = document.createElement('section');
writeUp.setAttribute('class', 'write-up');

const titleDetail = document.createElement('section');
titleDetail.setAttribute('class', 'title-detail-tag');

const descriptionPara = document.createElement('p');
descriptionPara.setAttribute('class', 'project-description');

const ulTech = document.createElement('ul');
ulTech.setAttribute('class', 'lang-tag');

const cardButton = document.createElement('button');
cardButton.setAttribute('class', 'see-project');
cardButton.setAttribute('type', 'button');

// Object storage for project details
const projectObj = {
  projectOne: {
    imageUrl: './images/imageprofile4x.png',
    name: 'Tonic',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    technology: ['html', 'css', 'javascript'],
    projectDetails: 'See project',
    liveLink: '#',
    sourceLink: '#',
  },
  projectTwo: {
    imageUrl: './images/MutiPostStory.svg',
    name: 'Multi-Post Stories',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    technology: ['html', 'css', 'javascript'],
    projectDetails: 'See project',
    liveLink: '#',
    sourceLink: '#',
  },
  projectThree: {
    imageUrl: './images/TonicColor.svg',
    name: 'Facebook 360',
    tags: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technology: ['html', 'css', 'Ruby on Rails', 'javascript'],
    projectDetails: 'See project',
    liveLink: '#',
    sourceLink: '#',
  },
  projectFour: {
    imageUrl: './images/Multipost2.svg',
    name: 'Uber Navigation',
    tags: ['Uber', 'Lead Developer', '2018'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car',
    technology: ['html', 'css', 'Ruby on Rails', 'javascript'],
    projectDetails: 'See project',
    liveLink: '#',
    sourceLink: '#',
  },
};

// Dynamically creating Cards
Object.keys(projectObj).forEach((k) => {
  const section = document.createElement('section');
  section.classList.add('project-card');
  const projectAll = projectObj[k];
  Object.keys(projectAll).forEach((k) => {
    // image
    if (k === 'imageUrl') {
      // Change Imagies of card on desktop view ( in Css media query)
      if (count === 1) {
        divImg.setAttribute('id', 'one');
      } else if (count === 2) {
        divImg.setAttribute('id', 'two');
      } else if (count === 3) {
        divImg.setAttribute('id', 'three');
      } else {
        divImg.setAttribute('id', 'four');
      }
      divImg.innerHTML = `<img src= ${projectAll[k]} alt="Tonic-Project Image" />`;
      section.appendChild(divImg.cloneNode(true));
      // eslint-disable-next-line brace-style
    }
    // name
    else if (k === 'name') {
      writeUp.innerHTML = `<p class='title'>${projectAll[k]}</p>`;
      // eslint-disable-next-line brace-style
    }
    // Tags
    else if (k === 'tags') {
      const listTags = projectAll[k];
      titleDetail.innerHTML = `<span class="tag-title">${listTags[0]}</span>
      <ul class="list-tag-title">
        <li>${listTags[1]}</li>
        <li>${listTags[2]}</li>
      </ul>`;
      writeUp.appendChild(titleDetail);
      // eslint-disable-next-line brace-style
    }
    // description
    else if (k === 'description') {
      descriptionPara.textContent = `${projectAll[k]}`;
      writeUp.appendChild(descriptionPara);
      // eslint-disable-next-line brace-style
    }
    // technology used
    else if (k === 'technology') {
      const listTechTag = projectAll[k];
      let listFill = '';

      // for dynamic tech tag length
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < listTechTag.length; i++) {
        listFill += `<li> ${listTechTag[i]}</li>`;
      }
      ulTech.innerHTML = `${listFill}`;
      writeUp.appendChild(ulTech);
      // eslint-disable-next-line brace-style
    }
    // button
    else if (k === 'projectDetails') {
      cardButton.innerHTML = `<span class="p">${projectAll[k]}</span>`;
      writeUp.appendChild(cardButton.cloneNode(true));
      section.appendChild(writeUp.cloneNode(true));
    }
  });
  // eslint-disable-next-line no-plusplus
  count++;
  projectSection.appendChild(section);
});

/* Modal
 Creating Global Elements (For Modal)
 */

const modalHead = document.createElement('div');
modalHead.setAttribute('class', 'modal-head');

const CancelDiv = document.createElement('div');
CancelDiv.classList.add('image-cancel"');

const h4 = document.createElement('h4');

const mainModal = document.createElement('div');
mainModal.setAttribute('class', 'main-modal');

const modalTags = document.createElement('div');
modalTags.setAttribute('class', 'modal-tags');

const modalImage = document.createElement('div');
modalImage.setAttribute('class', 'main-image');

const flexDesk = document.createElement('div');
flexDesk.setAttribute('class', 'flexDesk');

const pModal = document.createElement('p');

const flexRight = document.createElement('div');
flexRight.setAttribute('class', 'flex-right');

const rule = document.createElement('hr');

const ulModal = document.createElement('ul');

const liveButton = document.createElement('div');
liveButton.setAttribute('class', 'button-live');

const liveButton1 = document.createElement('div');

const cardLine = document.createElement('div');
cardLine.setAttribute('class', 'card-line');

const cardModal = Array.from(document.getElementsByClassName('see-project'));

// Modal Creation
Object.keys(projectObj).forEach((k) => {
  const projectModalAll = projectObj[k];
  const sectionModal = document.createElement('section');
  sectionModal.classList.add('modal-container');
  const modalCard = document.createElement('div');
  modalCard.classList.add('modal-card');
  Object.keys(projectModalAll).forEach((k) => {
    const widthScreen = 991;
    if (k === 'name') {
      h4.textContent = `${projectModalAll[k]}`;
      CancelDiv.innerHTML = '<div class="image-cancel">&times</div>';
      modalHead.appendChild(h4);
      modalHead.appendChild(CancelDiv);
      modalCard.appendChild(modalHead.cloneNode(true));
    }
    if (k === 'imageUrl') {
      if (window.screen.width > widthScreen) {
        if (modalCount === 1) {
          // eslint-disable-next-line operator-linebreak
          modalImage.innerHTML =
            '<img src="./images/DeskImg1.png" alt="Image of project" />';
        } else if (modalCount === 2) {
          // eslint-disable-next-line operator-linebreak
          modalImage.innerHTML =
            '<img src="./images/DeskImg2.png" alt="Image of project" />';
        } else if (modalCount === 3) {
          // eslint-disable-next-line operator-linebreak
          modalImage.innerHTML =
            '<img src="./images/DEskImg3.png" alt="Image of project" />';
        } else {
          // eslint-disable-next-line operator-linebreak
          modalImage.innerHTML =
            '<img src="./images/DeskImg4.png" alt="Image of project" />';
        }
      } else {
        modalImage.innerHTML = `<img src="${projectModalAll[k]}" alt="Image of project" />`;
      }
      mainModal.appendChild(modalImage);
      modalCard.append(mainModal);
    }
    if (k === 'tags') {
      const listModalTags = projectModalAll[k];
      modalTags.innerHTML = `<span class="tag-title">${listModalTags[0]}</span>
      <ul class="list-tag-title">
        <li>${listModalTags[1]}</li>
        <li>${listModalTags[2]}</li>
      </ul>`;
      mainModal.append(modalTags);
      modalCard.appendChild(mainModal);
    }
    if (k === 'description') {
      pModal.textContent = `${projectModalAll[k]}`;
      flexDesk.appendChild(pModal);
      mainModal.appendChild(flexDesk);
    }

    if (k === 'technology') {
      const listModal = projectModalAll[k];
      let listModalFill = '';

      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < listModal.length; j++) {
        listModalFill += `<li> ${listModal[j]}`;
      }
      ulModal.innerHTML = `${listModalFill}`;
      flexRight.appendChild(ulModal);
      flexRight.appendChild(rule);
      flexDesk.appendChild(flexRight);
    }

    if (k === 'liveLink') {
      liveButton.innerHTML = `<a href="${projectModalAll[k]}" >See live
      <span><img src="./images/seeLive.svg" alt="See live project icon"/></span>
    </a>`;
      flexRight.appendChild(liveButton);
    }

    if (k === 'sourceLink') {
      liveButton1.innerHTML = `<a href="${projectModalAll[k]}" >See source
      <span><img src="./images/sourceGit.svg" alt="See source project icon"/></span>
    </a>`;
      liveButton.appendChild(liveButton1);
      flexRight.appendChild(liveButton);
    }
  });
  // eslint-disable-next-line no-plusplus
  modalCount++;
  sectionModal.appendChild(modalCard);
  sectionModal.appendChild(cardLine);
  document.body.appendChild(sectionModal.cloneNode(true));
});

const modalAll = Array.from(document.getElementsByClassName('modal-container'));
const modalImageCancel = Array.from(
  // eslint-disable-next-line comma-dangle
  document.getElementsByClassName('image-cancel')
);

// Add the display None Class
Object.keys(modalAll).forEach((k) => {
  if (k === '0') {
    modalAll[k].classList.add('class', 'modalOne');
  } else if (k === '1') {
    modalAll[k].classList.add('class', 'modaltwo');
  } else if (k === '2') {
    modalAll[k].classList.add('class', 'modalthree');
  } else if (k === '3') {
    modalAll[k].classList.add('class', 'modalfour');
  }
});

// Show modal
Object.keys(cardModal).forEach((k) => {
  cardModal[k].addEventListener('click', () => {
    if (k === '0') {
      modalAll[k].classList.toggle('modalOne');
    } else if (k === '1') {
      modalAll[k].classList.toggle('modaltwo');
    } else if (k === '2') {
      modalAll[k].classList.toggle('modalthree');
    } else if (k === '3') {
      modalAll[k].classList.toggle('modalfour');
    }
  });
});

// Close Modal
Object.keys(modalImageCancel).forEach((k) => {
  modalImageCancel[k].addEventListener('click', () => {
    if (k === '0') {
      modalAll[k].classList.toggle('modalOne');
    } else if (k === '1') {
      modalAll[k].classList.toggle('modaltwo');
    } else if (k === '2') {
      modalAll[k].classList.toggle('modalthree');
    } else if (k === '3') {
      modalAll[k].classList.toggle('modalfour');
    }
  });
});

// Reload on screen size change
window.addEventListener('resize', () => {
  window.location.reload();
});

/* Mobile Menu */
function closeMobileMenu() {
  menuLink.classList.toggle('hide');
  navH1.classList.toggle('blur');
  navP.classList.toggle('blur');
  letConnect.classList.toggle('blur');
  ham.classList.toggle('blur');
  logo.classList.toggle('blur');
}

ham.addEventListener('click', closeMobileMenu);

cancelMenu.addEventListener('click', closeMobileMenu);

Object.keys(navLinks).forEach((k) => {
  if (k !== '') {
    navLinks[k].addEventListener('click', closeMobileMenu);
  }
});

// FORM VALIDATION & LOCAL STORAGE
const formOne = document.getElementById('formOne');
const inputName = document.getElementById('name');
const email = document.getElementById('email');
const textArea = document.getElementById('textArea');
const lStorage = window.localStorage.getItem('data');
const formEntry = {};
let errorMsg = document.getElementById('errorMsg');
let emailTest = '';
let formTest = false;

// eslint-disable-next-line no-trailing-spaces
/* Get lowercase of each vale in 
email for testing real user case value */

// Validation Starts
email.addEventListener('keyup', () => {
  emailTest = email.value.toLowerCase();
});

formOne.addEventListener('submit', (e) => {
  if (emailTest !== email.value) {
    errorMsg.innerText = 'Email should be lowercase.';
    if (formTest === false) {
      errorMsg.classList.toggle('hideErr');
    }
    formTest = true;
    // To remove the errMsg when email input is clicked
    email.addEventListener('click', () => {
      if (formTest === true) {
        errorMsg.classList.toggle('hideErr');
      }
      formTest = false;
    });
    e.preventDefault();
  } else errorMsg = '';
});

// Local Storage Get user input Data
function getUserData() {
  formEntry[inputName.name] = inputName.value;
  formEntry[email.name] = email.value;
  formEntry[textArea.name] = textArea.value;
  let items = JSON.stringify(formEntry);
  localStorage.setItem('data', `${items}`);
}

// Set user input value
function setUserData() {
  const holdObj = JSON.parse(lStorage);
  inputName.value = holdObj.userName;
  email.value = holdObj.replyto;
  textArea.value = holdObj.message;
}

// on keyup to listen to User input
formOne.addEventListener('keyup', () => {
  getUserData();
});

// Check and set user input value only when local storage is not empty
if (lStorage) {
  setUserData();
}
