<script>
document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".expand-card");
  const visual = document.querySelector(".growth-visual");

  cards.forEach(card => {
    card.addEventListener("click", () => {

      // закрываем все
      cards.forEach(c => c.classList.remove("open"));

      // открываем текущую
      card.classList.add("open");

      // обновляем стадию ростка
      const stage = card.dataset.stage;
      visual.setAttribute("data-stage", stage);
    });
  });

});
</script>
