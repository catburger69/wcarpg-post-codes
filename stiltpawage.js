   // Replace the URL with your published Google Sheets URL
   var sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR19v7nl548UU_SSOXlZQzbe73C9DD8Bj5MC6bsR9xPhKx9cS0DV7wj3tR_ioyJUu23RxKMvRR7mKma/pubhtml?gid=207083610&single=true";
    fetch(sheetUrl)
        .then(response => response.text())
        .then(data => {
            
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(data, 'text/html');
            
            // This is where you enter the row number
            var cellValue = htmlDoc.querySelector('table tr:nth-child(5) td:nth-child(5)').textContent.trim();
         // This is where you enter the ID
            document.getElementById('stiltpawage').innerText = cellValue;
        })
        .catch(error => console.error('Error:', error));