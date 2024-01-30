let check = false;
let form = document.createElement('form');
form.setAttribute('id', 'form');
let formWrapper = document.createElement('div');
formWrapper.classList.add(
  'form-group',
  'mt-5',
  'd-flex',
  'justify-content-center'
);

formWrapper.innerHTML = `
  <div class='row g-3 w-50'>
    <div class="col-md-6"> 
      <label class='form-label' for="firstname">First Name</label>
      <input
        class='form-control'
        type="text"
        name="firstname"
        id="first-name"
        placeholder="First Name"
        required
      />
    </div>  
    <div class="col-md-6">
      <label class='form-label' for="lastname">Last Name</label> 
      <input
        class='form-control'
        type="text"
        name="lastname"
        id="last-name"
        placeholder="Last Name"
        required
      />
    </div> 
   
    <div class="col-12">
      <label class='form-label' for="address">Address</label>  
      <textarea
        class='form-control'
        type="text"
        name="address"
        id="address"
        placeholder="Enter your Address"
        
      ></textarea>
    </div>  

    <div class="col-12">
      <p>Gender</p>
      <div class="form-check">
        <input
          type="radio"
          name='gender'
          id="male"
          value='male'
          class="form-check-input"
          required
        />
        <label class="form-check-label" for='male'>Male</label>
      </div> 
      <div class="form-check">
        <input
          type="radio"
          name='gender'
          id="female"
          value='female'
          class="form-check-input"
          required
        />
        <label class="form-check-label" for='female'>Female</label>
      </div> 
      <div class="form-check">
        <input
          type="radio"
          name='gender'
          id="other"
          value='other'
          class="form-check-input"
          required
        />
        <label class="form-check-label" for='other'>Other</label>
      </div> 
      <div class="form-check">
        <input
          type="radio"
          name='gender'
          id="prfernot"
          value='prefer not to say'
          class="form-check-input"
          required
        />
        <label class="form-check-label" for='prefernot'>Prefer not to say</label>
      </div> 
    </div> 

    <div class='col-12'>
      <p>Choice of food</p>
      <div class="form-check"> 
        <label class='form-check-label' for="coffee">Coffee</label>
        <input
          type="checkbox"
          name="choiceoffood"
          id="coffee"
          class="form-check-input"
          value='coffee'
          onclick=handleCheckbox(coffee)
        />
        </div>
        <div class="form-check"> 
          <label class='form-check-label' for="tea">Tea</label>
          <input
            type="checkbox"
            name="choiceoffood"
            id="tea"
            class="form-check-input"
            value='tea'
            onclick=handleCheckbox(tea)
          />
        </div>
        <div class="form-check"> 
          <label class='form-check-label' for="cooldrinks">Cool drinks</label>
          <input
            type="checkbox"
            name="choiceoffood"
            id="cooldrink"
            class="form-check-input"
            value='Cool drinks'
            onclick=handleCheckbox(cooldrink)
          />
        </div>
        <div class="form-check"> 
          <label class='form-check-label' for="samosa">Samosa</label>
          <input
            type="checkbox"
            name="choiceoffood"
            id="samosa"
            class="form-check-input"
            value='samosa'
            onclick=handleCheckbox(samosa)
          />
        </div>
        <div class="form-check"> 
          <label class='form-check-label' for="vadapav">Vadapav</label>
          <input
            type="checkbox"
            name="choiceoffood"
            id="Vadapav"
            class="form-check-input"
            value='vadapav'
            onclick=handleCheckbox(Vadapav)
          />
        </div>
    </div>

    
    <div class="col-md-5">
      <label class='form-label' for="state">State</label>  
      <input
        class='form-control'
        type="text"
        name="state"
        id="state"
        placeholder="State"
      />
    </div> 

    <div class="col-md-5">
      <label class='form-label' for="country">Country</label> 
      <input
        type="text"
        name="country"
        id="country"
        placeholder="Country"
        
        class="form-control"
      />
    </div> 

    <div class="col-md-2">
      <label class='form-label' for="pincode">Pincode</label>
      <input
        class='form-control'
        type="text"
        name="pincode"
        id="pincode"
        placeholder="Pincode"
        required
      />
    </div>
    
    <button class="btn btn-primary" type="submit" id="submit">Submit</button>
  <div>
`;

form.append(formWrapper);

form.addEventListener('submit', function handleForm(e) {
  e.preventDefault();
  var checkedBoxes = document.querySelectorAll(
    'input[name=choiceoffood]:checked'
  );
  const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());
  value['choiceoffood'] = checkedBoxes;
  if (!check) {
    createTable();
    check = true;
  }
  addData(value);
  form.reset();
});

document.body.append(form);

let tableContainer = document.createElement('div');
tableContainer.classList.add('mt-5', 'd-flex', 'flex-column');

let tableHeader = document.createElement('h2');
tableHeader.innerText = 'Table';
tableHeader.classList.add('align-self-center');

let tableWrapper = document.createElement('div');
tableWrapper.classList.add('table-responsive', 'align-self-center');

let table = document.createElement('table');
table.classList.add('table', 'table-dark', 'table-striped-columns');

var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
var tr_head = document.createElement('tr');
tr_head.innerHTML = `
    <th class=" text-center text-white p-3">First Name</th>
    <th class=" text-center text-white p-3">Last Name</th>
    <th class=" text-center text-white p-3">Address</th>
    <th class=" text-center text-white p-3">Gender</th>
    <th class=" text-center text-white p-3">Choice of food</th>
    <th class=" text-center text-white p-3">State</th>
    <th class=" text-center text-white p-3">Country</th>
    <th class=" text-center text-white p-3">Pincode</th>
  `;
thead.append(tr_head);
table.append(thead, tbody);

tableWrapper.append(table);

tableContainer.append(tableHeader, tableWrapper);

function createTable() {
  document.body.append(tableContainer);
}

//Displaying the data in table
function addData(data) {
  var tr = document.createElement('tr'); //row

  tr.innerHTML = `
    <td class="text-center p-3">${data?.firstname}</td>
    <td class="text-center p-3">${data?.lastname}</td>
    <td class="text-center p-3">${data?.address}</td>
    <td class="text-center p-3">${data?.gender}</td>
    <td class="text-center p-3">${data?.['choiceoffood'][0]?.value} & ${data?.['choiceoffood'][1]?.value}</td>
    <td class="text-center p-3">${data?.state}</td>
    <td class="text-center p-3">${data?.country}</td>
    <td class="text-center p-3">${data?.pincode}</td>
    `;

  tbody.append(tr);
}

function handleCheckbox(id) {
  var checkedBoxes = document.querySelectorAll(
    'input[name=choiceoffood]:checked'
  );
  if (checkedBoxes.length > 2) {
    id.checked = false;
  }
}
