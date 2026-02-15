document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("i.mi").forEach(icon => {
    const name = [...icon.classList].find(c => c.startsWith("mi-"));
    if (!name) return;

    icon.innerHTML = `
      <svg aria-hidden="true">
        <use href="https://cdn.jsdelivr.net/gh/sathishdhud/maaney-awesome/maaney-icons.svg#${name}"></use>
      </svg>
    `;
  });
});
