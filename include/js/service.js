const analyste = 
{
    icone : "fas fa-brain", 
    title : "Analyse",
    description : "Avec la méthode MERISE ou UML je peux faire l'étude d'un projet allant de l'analyse à la conception,utilisant les techniques de la méthode MERISE pour mieux adapter le problème jusqu'à mettre en place un modèle efficace selon le cas.", 
};

const services = [analyste, analyste, analyste];
//const teams = [rickain, michael];

const serviceElement = document.getElementById('serviceContent');

services.forEach(service => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
  
    const boxElement = document.createElement('div');
    boxElement.classList.add('box');
  
    //const iconeElement = document.createElement('i');
    //iconeElement.classList.add(service.icone);
  
    const titleElement = document.createElement('p');
    titleElement.classList.add('text');
    titleElement.textContent = service.title;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = service.description;
  
    boxElement.appendChild(iconeElement);
    boxElement.appendChild(titleElement);
    boxElement.appendChild(descriptionElement);
    cardElement.appendChild(boxElement);
    serviceElement.appendChild(cardElement);
  });

  $(serviceElement).owlCarousel({});