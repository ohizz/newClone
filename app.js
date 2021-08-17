

      const tabs = [...document.querySelectorAll('advicess div')];
      const news = document.querySelector('.news');
      const tab = document.querySelectorAll('.tab');
      const btn = document.querySelector('.next');

      // const tabLength = tab.lengt
      const size = tab[0].clientWidth;
      let counter = 1;
      news.style.transform = 'translateX(' + (-size * counter) + 'px)';

      function handleClick() {
        if (counter >= tab.length - 1) return;
        news.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        news.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }

      function handleTransition() {
        if (tab[counter].id === 'lastclone') {
          news.style.transition = 'none';
          counter = tab.length - 2;
          news.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        if (tab[counter].id === 'firstclone') {
          news.style.transition = 'none';
          counter = tab.length - counter;
          news.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
      }

      let elementsArray = document.querySelectorAll('.advicess div');
      window.addEventListener('scroll', fadeIn);

      function fadeIn() {
        for (var i = 0; i < elementsArray.length; i++) {
          var elem = elementsArray[i];
          var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
          if (distInView < 0) {
            elem.classList.add('active');
          } else {
            elem.classList.remove('active');
          }
        }
      }

      function handleLoad() {
        const backgroundLoad = document.querySelector('.backgroundLoading');
        const fadeIn = setInterval(() => {
          if (!backgroundLoad.style.opacity) {
            backgroundLoad.style.opacity = .5;
            backgroundLoad.style.zIndex = -1;
          }
          if (backgroundLoad.style.opacity > 0) {
            backgroundLoad.style.opacity -= 0.8;

          } else {
            clearInterval(fadeIn);
          }
        }, 4000);
      }
      window.addEventListener('load', handleLoad);
      news.addEventListener('transitionend', handleTransition);
      btn.addEventListener('click', handleClick);