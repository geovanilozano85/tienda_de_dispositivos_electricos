const form = document.getElementById("transactionForm");
        
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let transactionFormData = new FormData(form);
            insertRowInTransactionTable(transactionFormData);
        });
        
        function insertRowInTransactionTable(transactionFormData) {
            let transactionTableRef = document.getElementById("transactionTable");
            let newTransactionRowRef = transactionTableRef.insertRow(-1);
                                
            let fullnameCell = newTransactionRowRef.insertCell(0);
            fullnameCell.textContent = transactionFormData.get("transactionFullname");
            
            let numberCell = newTransactionRowRef.insertCell(1);
            numberCell.textContent = transactionFormData.get("transactionNumber");
            
            let emailCell = newTransactionRowRef.insertCell(2);
            emailCell.textContent = transactionFormData.get("transactionEmail");

            let AdressCell = newTransactionRowRef.insertCell(3);
            AdressCell.textContent = transactionFormData.get("transactionAdress");


            let AgeCell = newTransactionRowRef.insertCell(4);
            AgeCell.textContent = transactionFormData.get("transactionAge");

            let nationalityCell = newTransactionRowRef.insertCell(5);
            nationalityCell.textContent = transactionFormData.get("transactionNationality");

            let GenderCell = newTransactionRowRef.insertCell(6);
            GenderCell.textContent = transactionFormData.get("transactionGender");

            let passworsCell = newTransactionRowRef.insertCell(7);
            passworsCell.textContent = transactionFormData.get("transactionpasswors");





        }
      