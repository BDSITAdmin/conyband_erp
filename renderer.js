document.addEventListener('DOMContentLoaded', function () {
  // Event listener for the logo
  document.getElementById('logoImage').addEventListener('click', function () {
      openTab('Main');
  });

  // Event listeners for section buttons (tabs)
  document.getElementById('watchButton').addEventListener('click', function () {
      openTab('Watch', [
          {
              id: 1,
              name: 'Apple Watch',
              price: '299',
              orderId: 'ORD001',
              date: '2024-10-19',
              itemCategory: 'Electronics',
              quantity: 2,
              action: 'Shipped'
          },
          {
              id: 2,
              name: 'Samsung Galaxy Watch',
              price: '249',
              orderId: 'ORD002',
              date: '2024-10-18',
              itemCategory: 'Electronics',
              quantity: 1,
              action: 'Processing'
          },
          {
              id: 3,
              name: 'Watch',
              price: '199',
              orderId: 'ORD003',
              date: '2024-10-17',
              itemCategory: 'Accessories',
              quantity: 3,
              action: 'Delivered'
          }
      ]);
  });

  document.getElementById('itemButton').addEventListener('click', function () {
      openTab('Item', [
          {
              id: 1,
              name: 'Item1',
              price: '999',
              orderId: 'ORD004',
              date: '2024-10-19',
              itemCategory: 'Luxury',
              quantity: 1,
              action: 'Shipped'
          },
          {
              id: 2,
              name: 'Item2',
              price: '699',
              orderId: 'ORD005',
              date: '2024-10-18',
              itemCategory: 'Mid-range',
              quantity: 2,
              action: 'Processing'
          },
          {
              id: 3,
              name: 'Item3',
              price: '149',
              orderId: 'ORD006',
              date: '2024-10-17',
              itemCategory: 'Budget',
              quantity: 5,
              action: 'Delivered'
          }
      ]);
  });

  // Function to handle opening a specific tab and populating the table
  function openTab(tabName, data) {
      const sectionTitle = document.getElementById('sectionTitle');
      const addButton = document.getElementById('addWatch'); // Same button for both tabs, renamed appropriately
      const tableBody = tabName === 'Watch' ? document.getElementById('watchTableBody') : document.getElementById('itemTableBody'); // Dynamic table body selection
      const table = document.querySelector('.data-table');

      // Clear the table content before repopulating
      tableBody.innerHTML = '';

      // Populate the table with the corresponding data
      if (data) {
          data.forEach(item => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${item.id}</td>
                  <td>${item.name}</td>
                  <td>${item.price}</td>
                  <td>${item.orderId}</td>
                  <td>${item.date}</td>
                  <td>${item.itemCategory}</td>
                  <td>${item.quantity}</td>
                  <td>${item.action}</td>
              `;
              tableBody.appendChild(row);
          });
      }

      // Show the selected tab and update section title
      sectionTitle.textContent = `${tabName} List`;

      if (tabName === 'Watch') {
          document.getElementById('watchTab').hidden = false;
          document.getElementById('itemTab').hidden = true;
          addButton.textContent = 'Add New Watch'; // Update Add button text
      } else if (tabName === 'Item') {
          document.getElementById('itemTab').hidden = false;
          document.getElementById('watchTab').hidden = true;
          addButton.textContent = 'Add New Item'; // Update Add button text
      } else if (tabName === 'Main') {
          document.getElementById('watchTab').hidden = true;
          document.getElementById('itemTab').hidden = true;
          sectionTitle.textContent = 'Welcome To Conyband'; // Reset title
      }
  }

  // Modal Handling for Watch
  const watchModal = document.getElementById('modal');
  const closeButton = document.querySelector('.close-button');

  // Show modal when 'Add Watch' button is clicked
  document.getElementById('addWatch').addEventListener('click', function () {
      const section = document.getElementById('sectionTitle').textContent.split(' ')[0];
      if (section === 'Watch' || section === 'Item') {
          watchModal.style.display = 'block';
          document.getElementById('modalTitle').textContent = `Add New ${section}`;
      }
  });

  // Close modal when 'X' is clicked
  closeButton.addEventListener('click', function () {
      watchModal.style.display = 'none';
  });

  // Close modal when clicked outside
  window.addEventListener('click', function (event) {
      if (event.target === watchModal) {
          watchModal.style.display = 'none';
      }
  });

  // Handle form submission for adding new Watch
  document.getElementById('addNewBtn').addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const category = document.getElementById('category').value;
      const quantity = document.getElementById('quantity').value;
      const id = document.getElementById('watchId').value;

      if (name && category && quantity && id) {
          alert(`Added ${name} (ID: ${id}) with quantity ${quantity} to ${category}.`);
          watchModal.style.display = 'none';
      } else {
          alert('Please fill in all fields');
      }
  });

  // Modal Handling for Item
  const itemModal = document.getElementById('itemModal'); // Add new modal for Item

  // Show modal when 'Add Item' button is clicked
  document.getElementById('addItem').addEventListener('click', function () {
      const section = document.getElementById('sectionTitle').textContent.split(' ')[0];
      if (section === 'Watch' || section === 'Item') {
          itemModal.style.display = 'block';
          document.getElementById('itemModalTitle').textContent = `Add New ${section}`;
      }
  });

  // Close modal when 'X' is clicked
  document.querySelector('#itemModal .close-button').addEventListener('click', function () {
      itemModal.style.display = 'none';
  });

  // Close modal when clicked outside
  window.addEventListener('click', function (event) {
      if (event.target === itemModal) {
          itemModal.style.display = 'none';
      }
  });

  // Handle form submission for adding new Item
  document.getElementById('addItemBtn').addEventListener('click', function () {
      const itemName = document.getElementById('itemName').value;
      const itemCategory = document.getElementById('itemCategory').value;
      const itemQuantity = document.getElementById('itemQuantity').value;
      const itemId = document.getElementById('itemId').value;

      if (itemName && itemCategory && itemQuantity && itemId) {
          alert(`Added ${itemName} (ID: ${itemId}) with quantity ${itemQuantity} to ${itemCategory}.`);
          itemModal.style.display = 'none';
      } else {
          alert('Please fill in all fields');
      }
  });
});