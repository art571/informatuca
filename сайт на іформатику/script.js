alert("мені лінь було робити в google site тому я створюю так");
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("hero-title");
  const text = title.textContent;
  title.textContent = "";
  let i = 0;

  const typing = setInterval(() => {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, 100);
});

