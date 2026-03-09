
const container = document.getElementById("usersContainer");
const loadBtn = document.getElementById("loadUsers");
const colorBtn = document.getElementById("changeColor");

loadBtn.addEventListener("click", fetchUsers);

function fetchUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {

            container.innerHTML = "";

            users.forEach(user => {

                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            `;

                container.appendChild(card);
            });

        });

}

colorBtn.addEventListener("click", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.classList.toggle("color-change");
    });

});
