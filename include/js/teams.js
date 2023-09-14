const TS = "Technology & Strategy";

const teamMembers = [
    {
        fullname: "Rickain L. ✪",
        img: "include/img/wolf-1.jpeg",
        job: "Chief Executive Officer",
        company: "WOLF TECHNOLOGIES",
    },
    {
        fullname: "Esteban C. ✪",
        img: "include/img/Esteban.jpg",
        job: "Ingénieur Informatique",
        company: TS,
    },
    {
        fullname: "Valentin R.",
        img: "include/img/VLR.jpg",
        job: "Ingénieur Informatique",
        company: TS,
    },
    {
        fullname: "Samuel A.",
        img: "include/img/sam-1.jpeg",
        job: "Ingénieur Informatique",
        company: "Freelance",
    },
    {
        fullname: "Dunia-Tabitha N.",
        img: "include/img/tab-1.jpeg",
        job: "Cheffe de projet e-business",
        company: "Incomm",
    },
];

function createTeamMemberCard(member) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const boxElement = document.createElement('div');
    boxElement.classList.add('box');

    const imgElement = document.createElement('img');
    imgElement.src = member.img;
    imgElement.alt = member.fullname;

    const textElement = document.createElement('span');
    textElement.classList.add('text');
    textElement.textContent = member.fullname;

    const pElement = document.createElement('p');
    pElement.innerHTML = `${member.job}<br>${member.company}`;

    boxElement.appendChild(imgElement);
    boxElement.appendChild(textElement);
    boxElement.appendChild(pElement);
    cardElement.appendChild(boxElement);

    return cardElement;
}

const carouselElement = document.getElementById('carousel');

teamMembers.forEach(member => {
    const cardElement = createTeamMemberCard(member);
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
