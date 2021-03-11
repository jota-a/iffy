
// CAROUSEL CONTAINER
  // specifies panel-fullImg as the container for flickity carousels
  var carouselContainers = document.querySelectorAll('.panel');

  for (var i = 0; i < carouselContainers.length; i++) {
    var container = carouselContainers[i];
    initCarouselContainer(container);
  }

  //creating
  function initCarouselContainer(container) {
    var carousel = container.querySelector('.carousel');
    var flkty = new Flickity(carousel, {
      wrapAround: true,
      prevNextButtons: true,
      draggable: true,
      pageDots: false,
      imagesLoaded: true,
      lazyLoad: true,
      dragThreshold: 20,
      cellAlign:'center'
    });

  //   var carouselStatus = container.querySelector('.carousel-status');
  //
  //   // carousel slide counter function
  //   function updateStatus() {
  //     var slideNumber = flkty.selectedIndex + 1;
  //     carouselStatus.textContent = slideNumber + ' / ' + flkty.slides.length;
  //   }
  //   updateStatus();
  //   //when a slide is in focus, the number is updated
  //   flkty.on('select', updateStatus);
  //
  //   // carousel static click to advance slide
  //   flkty.on('staticClick', function(event, pointer, cellElement, cellIndex) {
  //     if (!cellElement) {
  //       return;
  //     }
  //
  //     if (cellIndex == flkty.selectedIndex) {
  //       flkty.next();
  //     } else {
  //       flkty.select(cellIndex);
  //     }
  //   });
  //
  //   //removes hidden class on page load and resizes carousel
  //   carousel.classList.remove('is-hidden');
  //   // trigger redraw for transition
  //   carousel.offsetHeight;
  //   // init Flickity
  //   new Flickity(carousel);
  }
