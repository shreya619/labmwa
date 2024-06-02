document.addEventListener('DOMContentLoaded', () => {
    const calculateTotalButton = document.getElementById('calculate-total');
    const ticketQuantitySelect = document.getElementById('ticket-quantity');
    const ticketTypeSelect = document.getElementById('ticket-type');
  
    calculateTotalButton.addEventListener('click', () => {
      const ticketQuantity = parseInt(ticketQuantitySelect.value);
      const ticketType = ticketTypeSelect.options[ticketTypeSelect.selectedIndex].value;
  
      let totalPrice = 0;
  
      if (ticketType === 'general-admission') {
        totalPrice = ticketQuantity * 50;
      } else if (ticketType === 'vip') {
        totalPrice = ticketQuantity * 100;
      } else if (ticketType === 'platinum') {
        totalPrice = ticketQuantity * 200;
      }
  
      alert(`The total price for ${ticketQuantity} ${ticketType} tickets is $${totalPrice}.`);
    });
  });
  