const headerH1 = document.getElementById('JS_element_1')
let huidigUur = new Date().getHours()

if (huidigUur > 17 || huidigUur < 6){
    headerH1.innerHTML = 'Goede Avond!'
} else if (huidigUur > 10 && huidigUur < 17){
    headerH1.innerHTML = 'Goedemiddag!'
} else {
    headerH1.innerHTML = 'Goedemorgen!'
}

const knopSoftSkills = document.getElementById('main_div_icons_soft-skills');
const lijstSoftSkills = document.getElementById('main_div_skills_soft-skills');

knopSoftSkills.addEventListener('click', showLijstSoftSkills);
lijstSoftSkills.addEventListener('click', showKnopSoftSkills);

function showLijstSoftSkills(){
    knopSoftSkills.style.display = 'none';
    lijstSoftSkills.style.display = 'block';
}
function showKnopSoftSkills(){
    knopSoftSkills.style.display = 'block';
    lijstSoftSkills.style.display = 'none';
}
//Laat de Soft Skills switchen

const knopCert = document.getElementById('main_div_icons_cert');
const lijstCert = document.getElementById('main_div_skills_cert');

knopCert.addEventListener('click', showLijstCert);
lijstCert.addEventListener('click', showKnopCert);

function showLijstCert(){
    knopCert.style.display = 'none';
    lijstCert.style.display = 'block';
}
function showKnopCert(){
    knopCert.style.display = 'block';
    lijstCert.style.display = 'none';
}

// Laat de Certificaten switchen

const knopTalen = document.getElementById('main_div_icons_talen');
const lijstTalen = document.getElementById('main_div_skills_talen');

knopTalen.addEventListener('click', showLijstTalen);
lijstTalen.addEventListener('click', showKnopTalen);

function showLijstTalen(){
    knopTalen.style.display = 'none';
    lijstTalen.style.display = 'block';
}
function showKnopTalen(){
    knopTalen.style.display = 'block';
    lijstTalen.style.display = 'none';
}