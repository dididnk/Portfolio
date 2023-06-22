const TS = "Technology & Strategy";
const rickain = 
{
    fullname : "Rickain LUBO ✪", 
    img : "include/img/wolf-1.jpeg",
    job : "Project, Database and Web Officer Nations Unies (OCHA)", 
    company : "CEO Wolf Technologies and MAKUTA application", 
};

const esteban = 
{
    fullname : "Esteban C. ✪",
    img :"include/img/Esteban.jpg",
    job : "Ingénieur Informatique", 
    company : TS, 
};

const valentin = 
{
    fullname : "Valentin R.",
    img :"include/img/VLR.jpg",
    job : "Ingénieur Informatique", 
    company : TS, 
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
const teams = [rickain, esteban, valentin, samuel, tabitha ];

const carouselElement = document.getElementById('carousel');

teams.forEach(person => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
  
    const boxElement = document.createElement('div');
    boxElement.classList.add('box');
  
    const imgElement = document.createElement('img');
    imgElement.src = person.img;
    imgElement.alt = person.fullname;
  
    const textElement = document.createElement('span');
    textElement.classList.add('text');
    textElement.textContent = person.fullname;
  
    const pElement = document.createElement('p');
    pElement.innerHTML = `${person.job}<br>${person.company}`;
  
    boxElement.appendChild(imgElement);
    boxElement.appendChild(textElement);
    boxElement.appendChild(pElement);
    cardElement.appendChild(boxElement);
    carouselElement.appendChild(cardElement);
    cardElement.style.marginRight = '5%';
  });
  
  
// owl carousel script
$(carouselElement).owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
  