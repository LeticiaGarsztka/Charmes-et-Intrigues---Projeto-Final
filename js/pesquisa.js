const input = document.querySelector("#barra-pesquisa");
const results = document.querySelector("#resultados-pesquisa"); // Crie esse container no HTML

let items = [];

function normalize(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");
}

async function fetchItems() {
    try {
        const response = await fetch("../php/pesquisa.php");
        items = await response.json();
    } catch (error) {
        console.error("Erro ao buscar itens:", error);
    }
}

function mostrarResultados(lista) {
    results.innerHTML = lista.length
        ? lista.map(item => `<li>${item.nome}</li>`).join("")
        : "<li>Nenhum resultado encontrado</li>";
}

input.addEventListener("input", () => {
    const term = normalize(input.value.trim());

    if (term.length === 0) {
        results.innerHTML = "";
        return;
    }

    const encontrados = items.filter(item => normalize(item.nome).includes(term));

    mostrarResultados(encontrados);
});

fetchItems();
