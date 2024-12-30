import iconsUrl from '../images/icons.svg';

const icons = [
  `${iconsUrl}#icon-antenna`,
  `${iconsUrl}#icon-clock`,
  `${iconsUrl}#icon-diagram`,
  `${iconsUrl}#icon-astronaut`,
];
  
  // Знайти ul
  const ul = document.querySelector('.icon-features');
  
  // Перевірка: чи існує ul

    icons.forEach(icon => {
      // Створити li
      const li = document.createElement('li');
      li.className = "icon-item-features";
      li.innerHTML = `
        <a href="" class="icon-link-features link">
          <svg class="icon-our" width="64" height="64">
            <use href=${icon}></use>
          </svg>
        </a>`;
      
      // Додати li до ul
      ul.appendChild(li);
    });
      
  
