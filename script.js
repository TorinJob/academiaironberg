document.addEventListener("DOMContentLoaded", function() {
    // Função para alternar a visibilidade das respostas nas FAQs
    function toggleFaqAnswer(event) {
        var answer = event.target.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    }

    // Adiciona evento de clique para todas as perguntas nas FAQs
    var faqQuestions = document.querySelectorAll(".faq-item h3");
    faqQuestions.forEach(function(question) {
        question.addEventListener("click", toggleFaqAnswer);
    });

    // Função para ajustar o tamanho das imagens e vídeos
    function adjustMediaSize() {
        var images = document.querySelectorAll(".Fotos img, .Eventos img");
        var videos = document.querySelectorAll(".Videos video");

        images.forEach(function(img) {
            img.style.width = "100%";
            img.style.height = "auto";
        });

        videos.forEach(function(video) {
            video.style.width = "100%";
            video.style.height = "auto";
        });
    }

    // Chama a função para ajustar o tamanho das mídias ao carregar a página
    adjustMediaSize();

    // Adiciona evento de redimensionamento da janela para ajustar o tamanho das mídias
    window.addEventListener("resize", adjustMediaSize);
});
