import mockData from './paginationData.js';

var main_container = document.createElement('div');
main_container.classList.add(
  'container',
  'd-flex',
  'justify-content-center',
  'align-items-center',
  'flex-wrap',
  'm-1'
);

let header = document.createElement('h1');
header.id = 'title';
header.innerHTML = 'Dom Pagination';
header.classList.add('text-center');

let description = document.createElement('p');
description.setAttribute('id', 'description');
description.innerText =
  'Pagination is the method of separating digital content into different pages on a website. Users can navigate between these pages by clicking below Buttons.';
description.classList.add('text-center');

//Creating Table headers
let tableWrapper = document.createElement('div');
tableWrapper.classList.add(
  'table',
  'table-responsive',
  'd-flex',
  'justify-content-center',
  'mt-4'
);
let table = document.createElement('table');
table.classList.add('table', 'table-bordered', 'w-auto');
table.id = 'table';

let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

// let th1 = document.createElement('th');
// th1.innerText = 'ID';
// th1.classList.add('table-primary');
// let th2 = document.createElement('th');
// th2.innerText = 'Name';
// th2.classList.add('table-primary');
// let th3 = document.createElement('th');
// th3.innerText = 'Email';
// th3.classList.add('table-primary');

var tr_head = document.createElement('tr');
// tr_head.classList.add('table-success');
// th1.append(idhead);
// th2.append(namehead);
// th3.append(mailhead);
tr_head.innerHTML = `
<th class="table-primary text-center p-3">ID</th>
<th class="table-primary text-center p-3">Name</th>
<th class="table-primary text-center p-3">Email</th>
`;

thead.append(tr_head);

//Displaying the data in table
function displayData(data, count, page) {
  table.appendChild(thead);

  for (let i = (0 + 1) * (page - 1) * 10; i < count * page; i++) {
    var tr = document.createElement('tr'); //row
    // var td1 = document.createElement('td'); //data cells
    // var td2 = document.createElement('td'); //data cells
    // var td3 = document.createElement('td'); //data cells

    tr.innerHTML = `
    <td class="text-center p-2">${data[i].id}</td>
    <td class="text-center p-2">${data[i].name}</td>
    <td class="text-center p-2">${data[i].email}</td>
    `;
    // //ID
    // td1.innerText = data[i].id;
    // td1.classList.add('table-success');

    // //Name
    // td2.innerText = data[i].name;
    // td2.classList.add('table-success');

    // //Email
    // td3.innerText = data[i].email;
    // td3.classList.add('table-success');

    //Append
    // tr.append(td1, td2, td3);
    tbody.append(tr);
  }
  table.append(tbody);
}

tableWrapper.append(table);

//Pagination;
let pager = document.createElement('div');
pager.id = 'buttons';
pager.classList.add(
  'd-flex',
  'justify-content-center',
  'align-items-center',
  'flex-wrap'
);

var current_page = 1;
var dataCount = 10;

//Previous
let prev = document.createElement('btn');
prev.innerText = 'Previous';
prev.id = 'Previous';
prev.classList.add('btn', 'btn-outline-secondary');
pager.append(prev);

let page_count = Math.ceil(mockData.length / dataCount);

//Display how many pagination for the given data
for (let i = 0; i < page_count; i++) {
  let num = document.createElement('btn');
  num.innerText = `${i + 1}`;
  num.id = `${i + 1}`;
  num.classList.add('btn', 'btn-outline-secondary');
  num.classList.add('m-1');
  pager.append(num);
  if (i == 0) {
    num.classList.add('active');
    displayData(mockData, dataCount, 1);
  }
}

//Next
let next = document.createElement('btn');
next.innerText = 'Next';
next.id = 'Next';
next.classList.add('btn', 'btn-outline-secondary');
pager.append(next);

pager.addEventListener('click', (e) => {
  if (e.target.id == 'Previous') {
    if (current_page > 1) {
      current_page = `${parseInt(current_page) - 1}`;
      handlePagination(current_page);
    }
  } else if (e.target.id == 'Next') {
    if (current_page < 10) {
      current_page = `${parseInt(current_page) + 1}`;
      handlePagination(current_page);
    }
  } else {
    handlePagination(e.target.id);
  }
});

const handlePagination = (page) => {
  current_page = page;

  //Remove the active
  let activeElement = document.getElementsByClassName('active');
  for (let item of activeElement) {
    console.log('s', item);
    if (item.className.includes('active')) {
      item.classList.remove('active');
    }
  }

  //Adding the active to current page
  let present_page = document.getElementById(`${current_page}`);
  present_page.classList.add('active');

  //Clearing the current data and calling to next page data
  table.innerHTML = '';
  displayData(mockData, dataCount, current_page);
};

main_container.append(header, description, pager, tableWrapper);
document.body.append(main_container);
