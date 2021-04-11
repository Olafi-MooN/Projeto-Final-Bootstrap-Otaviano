let bookmarks = [
    
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

    if (!bookmarks[0]) {
        return table.innerHTML = '<h3>Nenhum book adicionado</h3>'
    }

    bookmarks.forEach((item, index) => {
        itemsForTable = elementsInTableHTML(index) + itemsForTable;
    });
    table.innerHTML = itemsForTable;

    deleteItem();
    searchIdAlterItem();
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

function searchIdAlterItem() {
    var btnAlter = document.querySelectorAll('.btn-alter');
    btnAlter.forEach((item) => {
        item.addEventListener('click', (e) => {
            document.querySelector('.modal-alter-item').style.display = "flex";
            bookmarks.forEach((value, index) => {
                if(Number(e.target.id) === value.id){
                    document.querySelector('.inputId').value = value.id;
                }
            })
        })
    })
}

function alterItemIntable() {
    var inputId = document.querySelector('.inputId').value;
    var inputDescriptionAlter = document.querySelector('.inputDescriptionAlter').value;
    var inputLinkAlter = document.querySelector('.inputLinkAlter').value;

    if (inputDescriptionAlter === '' || inputLinkAlter === '') {
        return alert('Preencha todos os campos')
    }

    bookmarks.forEach(item => {
        if (item.id === Number(inputId)) {
            item.name = inputDescriptionAlter;
            item.link = inputLinkAlter;
        }
    })

    inputDescriptionAlter = '';
    inputLinkAlter = '';

    document.querySelector('.modal-alter-item').style.display = "none";
}

window.addEventListener("load", () => {
    updateTable();   
});

// Permite adicionar um elemento da tabela e no array bookmarks
document.querySelector('.btnAdd').addEventListener("click", () => {
    newItemInTable();
    updateTable();
});

// Permite Alterar um elemento da tabela e no array bookmarks
document.querySelector('.btnAlter').addEventListener("click", () => {
    alterItemIntable();
    updateTable();
});

document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.modal-alter-item').style.display = "none";
})