const counters = document.querySelectorAll('.counter');

const CHUNKS = 200; // number of counts to target

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / CHUNKS; 

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1); // count speed, to show increment effect.
    } else {
      counter.innerText = target; // finalize count to exact target.
    }
  };

  updateCounter();
});
