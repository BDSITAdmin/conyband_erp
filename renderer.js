document.getElementById('watchButton').addEventListener('click', function() {
    showSection('Watch', [
      { id: 1, name: 'Apple Watch', price: '299' },
      { id: 2, name: 'Samsung Galaxy Watch', price: '249' },
      { id: 3, name: 'Watch ', price: '199' },
    ]);
  });
  
  document.getElementById('itemButton').addEventListener('click', function() {
    showSection('Item', [
      { id: 1, name: 'watch1', price: '999' },
      { id: 2, name: 'Watch2', price: '699' },
      { id: 3, name: 'Watch3', price: '149' },
    ]);
  });
  
  function showSection(sectionName, data) {
    // Update section title
    document.getElementById('sectionTitle').textContent = sectionName + ' List';
  
    // Get the table and table body elements
    const table = document.getElementById('dataTable');
    const tableBody = document.getElementById('tableBody');
  
    // Clear any previous table rows
    tableBody.innerHTML = '';
  
    // Populate the table with new data
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
      `;
      tableBody.appendChild(row);
    });
  
    // Show the table
    table.hidden = false;
  }
  