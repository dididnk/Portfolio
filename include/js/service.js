const servicesData = [
    {
        iconClass: "fas fa-brain",
        title: "Analyse",
        description: "Avec la méthode MERISE ou UML je peux faire l'étude d'un projet allant de l'analyse à la conception, utilisant les techniques de la méthode MERISE pour mieux adapter le problème jusqu'à mettre en place un modèle efficace selon le cas."
    },
    {
        iconClass: "fas fa-edit",
        title: "Conception",
        description: "Je peux tout aussi bien concevoir un logiciel en autonomie comme en équipe. Je suis autonome, rigoureux, appliqué, motivé et avec un esprit d'équipe constant peu importe la diversité. J'ai de projets réalisés en équipe et de nombreux projets personnels en cours."
    },
    {
        iconClass: "fas fa-paint-brush",
        title: "Design",
        description: "Un peu poussé, j'ai un goût particulier dans l'ergonomie, bien que je ne suis pas graphiste mais je suis créatif et je peux donc proposer un design lors de la conception d'un site ou d'une application."
    }
];

function createServiceElement(iconClass, title, description) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const boxElement = document.createElement('div');
    boxElement.classList.add('box');

    const iconElement = document.createElement('i');
    iconElement.classList.add(iconClass);

    const titleElement = document.createElement('p');
    titleElement.classList.add('text');
    titleElement.textContent = title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    boxElement.appendChild(iconElement);
    boxElement.appendChild(titleElement);
    boxElement.appendChild(descriptionElement);
    cardElement.appendChild(boxElement);

    return cardElement;
}

const servicesContainer = document.getElementById('services-carousel');

servicesData.forEach(service => {
    const serviceElement = createServiceElement(service.iconClass, service.title, service.description);
    servicesContainer.appendChild(serviceElement);
});

// Initialize Owl Carousel
$(document).ready(function(){
    $('#services-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

/**
             <!-- Personnels -->
            <details>
                <summary>Personnels</summary>
                <div class="max-width">
                    <div class="projets-content part2">
                        <div class="column projectsImage">
                            <img src="include/img/bible.jpg">
                        </div>
                        <div class="column right">
                            <h3 class="text"><span>EcoD✞s</span></h3>
                            <h4>Description</h4>
                            <p>
                                Plateforme chrétien.</p>
                            <h4>Objectif</h4>
                            <p>
                                Développer un site gratuit pour permettre aux chrétiens d'apprendre le discipolat.
                            </p>
                            <p>Des cours entièrement GRATUIT de nouveau convertis au gagneur d'âmes.</p>
                            <p>Des exercices pour tester vos connaissances Bibliques.</p>
                            <p>La partie témoignage pour s'inpirer ou ranconter son histoire dans le but d'encourager les
                                autres
                            </p>
                            <p><b>Taille de l'équipe/poste : </b>CEO</p>
                            <h4>Technologies</h4>
                            <ol>
                                <li>Html5 & Less : Font-end (static avec feuille de style)</li>
                                <li>Js : Front-end (dynamique)</li>
                            </ol>
                            <p>
                                <b><a href="https://dididnk.github.io/Ecodis/" target="_blank"> <span class="linkEts">EcoD✞s <i class="fas fa-link"></i></span></a></b>
                            </p>
                        </div>
                    </div>
                </div>
            </details> 
 */