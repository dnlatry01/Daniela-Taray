// Selecting draggable and droppable 
const items = document.querySelectorAll('.item');
const targets = document.querySelectorAll('.target');
let score = 0;

// DRAG START
items.forEach(item => {
    item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text', event.target.id);
        item.classList.add('dragging');
    });
});

// DROP
targets.forEach(target => {
    target.addEventListener('dragover', event => {
        event.preventDefault();
    });

    target.addEventListener('drop', event => {
        event.preventDefault();

        const draggedItemId = event.dataTransfer.getData('text');
        const draggedItem = document.getElementById(draggedItemId);
        const matchId = target.getAttribute('data-match');

        // Check if the dragged item matches the target
        if (draggedItemId === matchId) {
            target.appendChild(draggedItem);  // Move item to correct spot
            target.classList.add('correct');  // Add success indication
            score += 1;
            document.getElementById('status').textContent = "Correct!";
        } else {
            document.getElementById('status').textContent = "Try Again!";
        }
        
        document.getElementById('score').textContent = score; // Update score
    });
});

// DRAG END (resetting styles)
items.forEach(item => {
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});