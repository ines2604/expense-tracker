let no = 0;

function addItem() {
    let total_income = document.getElementById("income");
    let total_expenses = document.getElementById("expenses");
    let balance = document.getElementById('balance');

    no += 1;

    let type = document.getElementById("entry-type").value;
    let categorie = document.getElementById("category").value;
    let expense_amount = document.getElementById("expense-amount").value;
    let date = document.getElementById("expense-date").value;

    if (expense_amount == null || expense_amount === "") {
        alert("please enter the amount");
        return;
    }
    if (expense_amount < 0) {
        alert("please enter a positive amount");
        return;
    }
    if (date == null || date === "") {
        alert("please enter the date");
        return;
    }

    let tbody = document.getElementById("expense-list");

    const newrow = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");
    const cell6 = document.createElement("td");

    cell1.textContent = no;
    cell2.textContent = categorie;
    cell3.textContent = expense_amount;
    cell4.textContent = type;
    cell5.textContent = date;

    const img = document.createElement('img');
    img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrsZcrNhw4m7pSUCp5kXOVBUh38c5ifhMcw&s');
    img.style.width = "20px";
    img.style.height = "20px";
    img.style.cursor = "pointer";
    img.style.margin = "0 auto";
    img.style.display = "block";
    img.onclick = function() { deleterow(newrow, expense_amount, type); };

    cell6.appendChild(img);

    newrow.appendChild(cell1);
    newrow.appendChild(cell2);
    newrow.appendChild(cell3);
    newrow.appendChild(cell4);
    newrow.appendChild(cell5);
    newrow.appendChild(cell6);

    tbody.appendChild(newrow);

    if (type === "Income") {
        total_income.textContent = parseInt(total_income.textContent) + parseInt(expense_amount);
    } else if (type === "Expense") {
        total_expenses.textContent = parseInt(total_expenses.textContent) + parseInt(expense_amount);
    }
    balance.textContent = parseInt(total_income.textContent) - parseInt(total_expenses.textContent);
}

function deleterow(row, amount, type) {
    let total_income = document.getElementById("income");
    let total_expenses = document.getElementById("expenses");
    let balance = document.getElementById('balance');

    // Soustraire le montant de l'entrée supprimée du total correspondant
    if (type === "Income") {
        total_income.textContent = parseInt(total_income.textContent) - parseInt(amount);
    } else if (type === "Expense") {
        total_expenses.textContent = parseInt(total_expenses.textContent) - parseInt(amount);
    }

    // Mettre à jour le solde
    balance.textContent = parseInt(total_income.textContent) - parseInt(total_expenses.textContent);

    // Supprimer la ligne du tableau
    row.parentNode.removeChild(row);

    // Mettre à jour les numéros de ligne
    updaterowNumbers();
}

function updaterowNumbers() {
    let tbody = document.getElementById("expense-list");
    let rows = tbody.getElementsByTagName("tr");
    no = 0;
    for (let i = 0; i < rows.length; i++) {
        no += 1;
        rows[i].getElementsByTagName("td")[0].textContent = no;
    }
}
