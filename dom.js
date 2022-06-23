var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
    // console.log('working')
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // console.log(li)
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}
