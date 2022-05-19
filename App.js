const projectsCard = document.querySelectorAll('.project-container');
const mainProjectTitle = document.querySelector('.main-introduction-title');
const mainProjectDesc = document.querySelector('.main-introduction-desc');

projectsCard.forEach(projectCard => {
    projectCard.addEventListener('mouseover', function(){
        let projectTitle = projectCard.getAttribute('data-title');
        let projectDesc = projectCard.getAttribute('data-description');

        mainProjectTitle.classList.add('fadeInAndOut');
        mainProjectDesc.classList.add('fadeInAndOut');

        mainProjectTitle.style.fontFamily = "Playfair Display, serif"
        mainProjectTitle.style.textTransform = "none"

        mainProjectDesc.style.fontFamily = "Montserrat, sans-serif"
        mainProjectDesc.style.fontWeight = '300'
        mainProjectDesc.style.letterSpacing = '-1.2px'

        mainProjectTitle.innerHTML = projectTitle;
        mainProjectDesc.innerHTML = projectDesc;

    })
})

projectsCard.forEach(projectCard => {
    projectCard.addEventListener('mouseout', function(){
        mainProjectTitle.classList.remove('fadeInAndOut');
        mainProjectDesc.classList.remove('fadeInAndOut');
        
        mainProjectTitle.style.fontFamily = "Montserrat, sans-serif"
        mainProjectTitle.style.textTransform = "uppercase"

        mainProjectDesc.style.fontFamily = "Playfair Display, serif"

        mainProjectTitle.innerHTML = "Hi, I am Mas Bagas Prasetio"
        mainProjectDesc.innerHTML = "I'm a frontend developer that has experience with HTML, CSS, JavaScript, Sass, and familiar with React.js"
    })
})