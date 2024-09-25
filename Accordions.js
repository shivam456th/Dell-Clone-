function accordion(e) {
  e.preventDefault();

  // Find the closest Accordion element
  const accordion = e.target.closest('.Accordion');
  
  // Find the corresponding container (parent of the Accordion)
  const container = accordion.parentElement;

  // Toggle the container_show class to expand/collapse
  container.classList.toggle('container_show');

  // Toggle the question_hide class to hide/show the question
  accordion.querySelector('.question').classList.toggle('question_hide');
  
  // Optionally toggle the span arrow direction here
  accordion.querySelector('span').classList.toggle('down_show');
}
