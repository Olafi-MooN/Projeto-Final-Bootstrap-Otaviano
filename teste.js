let bookmarks = [
    {
        id: 0,
        name: "Desvendado o javascript",
        link: "https//google.com.br/link"
    },
    {
        id: 1,
        name: "Desvendado o javascript",
        link: "https//google.com.br/link"
    },
    {
        id: 2,
        name: "Desvendado o javascript",
        link: "https//google.com.br/link"
    }
]

let contadorId = bookmarks.length;

function elementsInTableHTML(index) {
    return `
    <tr>
        <th scope="row"> ${bookmarks[index].id}</th>
        <td>${bookmarks[index].name}</td>
        <td>${bookmarks[index].link}</td>
        <td>
        <button type="button" class="btn btn-warning btn-alter" id="${bookmarks[index].id}">Alterar</button>
        <button type="button" class="btn btn-danger btn-delete" id="${bookmarks[index].id}">Deletar</button>
        </td>
    </tr>
    `;
}

function updateTable() {
    var table = document.querySelector('.tablejs');
    var itemsForTable = '';

    bookmarks.forEach((item, index) => {
        itemsForTable = elementsInTableHTML(index) + itemsForTable;
    });
    table.innerHTML = itemsForTable;

    deleteItem();
}

function deleteItem() {
    var btnDelete = document.querySelectorAll('.btn-delete');
    btnDelete.forEach((item) => {
        item.addEventListener('click', (e) => {
            bookmarks.map((value, index) => {
                if(Number(e.target.id) === value.id){
                    const indexBook = bookmarks.indexOf(bookmarks[index]);
                    console.log(indexBook)
                    if(indexBook > -1) {
                        bookmarks.splice(indexBook, 1)
                    }
                    updateTable();
                }
            })
        })
    })
}

function newItemInTable() {
    var description = document.querySelector('.inputDescription');
    var link = document.querySelector('.inputLink');

    if (description.value === '' && link.value === '') {
        return alert('Preencha, todo os campos');
    }

    bookmarks.push({
        id: contadorId + 1,
        name: description.value,
        link: link.value
    })

    contadorId = contadorId + 1;
}

// Falta fazer o alter table completo
function alterItemInTable() {
    var btnAlter = document.querySelectorAll('.btn-alter');
    btnAlter.forEach((item) => {
        item.addEventListener('click', (e) => {
            bookmarks.map((value, index) => {
                if(Number(e.target.id) === value.id){
                    // Falta terminar aqui
                }
            })
        })
    })
}

window.addEventListener("load", () => {
    updateTable();   
});

// Permite adicionar um elemento no tabala e no array bookmarks
document.querySelector('.btnAdd').addEventListener("click", () => {
    newItemInTable();
    updateTable();
});
