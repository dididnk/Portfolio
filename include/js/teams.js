const rickain = 
{
    fullname : "Rickain LUBO ✪", 
    img : "include/img/wolf-1.jpeg",
    job : "Project, Database and Web Officer Nations Unies (OCHA)", 
    company : "CEO Wolf Technologies and MAKUTA application", 
};

const michael = 
{
    fullname : "Michael R. ✪",
    img : "include/img/MRA.jpg", 
    job : "MyFire Executive Development Engineer", 
    company : "Technology & Strategy", 
};

const esteban = 
{
    fullname : "Esteban C. ✪",
    img :"include/img/Esteban.jpg",
    job : "Ingénieur Informatique", 
    company : michael.company, 
};

const valentin = 
{
    fullname : "Valentin R.",
    img :"include/img/VLR.jpg",
    job : "Ingénieur Informatique", 
    company : michael.company, 
};
const samuel = 
{
    fullname : "Samuel A.",
    img :"include/img/sam-1.jpeg",
    job : "Ingénieur Informatique", 
    company : "Freelance", 
};
const tabitha = {
    fullname: "Dunia-Tabitha N.",
    img: "include/img/tab-1.jpeg",
    job: "CEO",
    company: "Djohannie Beauty"
  };
const teams = [rickain, michael, esteban, valentin, samuel, tabitha ];

const carouselElement = document.getElementById('carousel');

teams.forEach(person => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
  
    const boxElement = document.createElement('div');
    boxElement.classList.add('box');
  
    const imgElement = document.createElement('img');
    imgElement.src = person.img;
    imgElement.alt = person.fullname;
  
    const textElement = document.createElement('div');
    textElement.classList.add('text');
    textElement.textContent = person.fullname;
  
    const pElement = document.createElement('p');
    pElement.innerHTML = `${person.job}<br>${person.company}`;
  
    boxElement.appendChild(imgElement);
    boxElement.appendChild(textElement);
    boxElement.appendChild(pElement);
    cardElement.appendChild(boxElement);
    carouselElement.appendChild(cardElement);
    cardElement.style.marginRight = '12px';
  });
  
  
  $(carouselElement).owlCarousel({  });
  