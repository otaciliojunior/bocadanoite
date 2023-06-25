document.addEventListener("DOMContentLoaded", function() {
    var parallaxElements = document.querySelectorAll(".parallax-effect");
  
    function parallaxEffect() {
      var scrollPosition = window.pageYOffset;
  
      for (var i = 0; i < parallaxElements.length; i++) {
        var elementOffset = parallaxElements[i].offsetTop;
        var windowHeight = window.innerHeight;
  
        if (scrollPosition > elementOffset - windowHeight && scrollPosition <= elementOffset + windowHeight) {
            var parallaxValue = (elementOffset - scrollPosition) * 0.5;
  
          parallaxElements[i].style.transform = "translateY(" + parallaxValue + "px)";
        }
      }
    }
  
    window.addEventListener("scroll", parallaxEffect);
    window.addEventListener("resize", parallaxEffect);
  
    parallaxEffect();
  });

  // Selecione todos os links que possuem o atributo href começando com #
const links = document.querySelectorAll('a[href^="#"]');

// Adicione um evento de clique a cada link
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Impede o comportamento padrão do link

    // Obtenha o alvo do link usando o atributo href
    const target = document.querySelector(link.getAttribute('href'));

    // Verifique se o alvo existe e execute a rolagem suave
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth' // Cria o efeito de rolagem suave
      });
    }
  });
});

  