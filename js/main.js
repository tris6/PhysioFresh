/* Scroll To */
function ScrollTo(id) {
  document.getElementById(id).scrollIntoView( {behavior: 'smooth'} );
}

/* Bodyparts Quiz Interface */
const bodypartContainer = document.getElementById('section_body-areas');
const bodypartChoices = document.getElementById('bodypart-choices');
const bodypartNeck = document.getElementById('bodypart-neck');

function LoadBodypart(bodypart) {
  bodypartChoices.classList.add('fade-out');
  setTimeout(() => { bodypartChoices.style.display = 'none' }, 450);
  setTimeout(() => { document.getElementById(bodypart).classList.add('fade-in') }, 500);
  setTimeout(() => { document.getElementById(bodypart).style.display = 'flex' }, 500);
  setTimeout(() => { bodypartChoices.classList.remove('fade-out')}, 600);
  setTimeout(() => { ScrollTo(bodypart) }, 600);
}

function ReturnToBodypartChoices(bodypart) {
  document.getElementById(bodypart).classList.add('fade-out');
  setTimeout(() => { document.getElementById(bodypart).style.display = 'none' }, 450);
  setTimeout(() => { bodypartChoices.classList.add('fade-in') }, 500);
  setTimeout(() => { bodypartChoices.style.display = 'flex' }, 500);
  setTimeout(() => { document.getElementById(bodypart).classList.remove('fade-out') }, 600);
  setTimeout(() => { ScrollTo('section_bodypart') }, 600);
}

/* FAQ Reveal Answer */
function revealAnswer(id) {
  const questionElement = document.getElementById(id);
  const number = id.charAt(id.length - 1);
  const answerNumber = "faq_answer_" + number;
  const answerElement = document.getElementById(answerNumber);

  if (questionElement.classList.contains('contracted')) {
    questionElement.classList.remove('contracted');
    questionElement.classList.add('expanded');
    answerElement.style.display = "flex";
  } else {
    questionElement.classList.remove('expanded');
    questionElement.classList.add('contracted');
    answerElement.style.display = "none";
  }
}