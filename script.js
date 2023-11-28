const form = document.createElement("form");
form.id="form";
document.body.append(form);
const title = document.createElement("h1");
title.id = "title";
title.textContent = "Form Data's";
document.body.append(title);
const description = document.createElement("p");
description.id = "description";
description.textContent = "Form and Table will be added dynamically using Javascript DOM Manipulation"; 
document.body.append(description);
let form1=document.createElement("div");
form1.className="form-group";
form.append(form1);

const firstNameLable = createLable("first-name", "First Name:");
const firstNameInput = createInput("text", "first-name", "Enter your first name","true");
const lastNameLable = createLable("las-tname", "Last Name:");
const lastNameInput = createInput("text", "last-name", "Enter your last name","true");
const addressLable = createLable("address", "enter your address:");
const addressTextArea = createTextarea("address", "30", "5");
const pinCodeLable = createLable("pincode", "PinCode:");
const pinCodeInput = createInput("text", "pincode", "Enter your PinCode","true");
const genderLable = createLable("gender", "Gender:","true");
const genderSelect = createGender("gender", ["Select ur gender","Male", "Female", "Transgender","true"]);
const foodLable = createLable("food", "Food:");
const foodInput = createInput("text", "food", "Enter ur fvrt food");
const stateLable = createLable("state", "State:");
const stateInput = createInput("text", "state", "Enter ur state");
const countryLable = createLable("country", "Country:");
const countryInput = createInput("text", "country", "Enter ur Country");
const submitButton = createButton("submit", "submit", "Submit", submitform,"btn");
const clearButton = createClearbutton("button1", "button", "Clear");
// document.body.append(form);
form1.append(
  firstNameLable,
  firstNameInput,
  lastNameLable,
  lastNameInput,
  addressLable,
  addressTextArea,
  pinCodeLable,
  pinCodeInput,
  genderLable,
  genderSelect,
  foodLable,
  foodInput,
  stateLable,
  stateInput,
  countryLable,
  countryInput,
  submitButton,
  clearButton
);

const table = document.createElement("table");
table.className="table";
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");
const tableHeaderRow = document.createElement("tr");
const tableHeadertext = [
  "First Name",
  "Last Name",
  "Address",
  "PinCode",
  "Gender",
  "Food",
  "State",
  "Country",
];
tableHeadertext.forEach((element) => {
  let th = document.createElement("th");
  th.textContent = element;
  tableHeaderRow.append(th);
});
tableHead.append(tableHeaderRow);
table.append(tableHead, tableBody);
document.body.append(table);

function createLable(forAttr, textContent) {
  let lable = document.createElement("label");
  lable.htmlFor = forAttr;
  lable.textContent = textContent;
  return lable;
}
function createInput(type, id, placeholder,required) {
  let input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.placeholder = placeholder;
  input.required=required;
  return input;
}
function createTextarea(id, colAttr, rowAttr) {
  const textarea = document.createElement("textarea");
  textarea.id = id;
  textarea.cols = colAttr;
  textarea.rows = rowAttr;
  return textarea;
}
function createGender(id, options,required) {
  let select = document.createElement("select");
  select.id = id;
  select.required=required;

  options.forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element;
    select.append(option);
  });
  return select;
}
function createClearbutton(id, type, textContent) {
  const Clear = document.createElement("button");
  Clear.id = id;
  Clear.type = type;
  Clear.textContent = textContent;
  Clear.addEventListener("click", () => {
    form.reset();
    tableBody.innerText="";
  });
  return Clear;

}
function createButton(id, type, textContent, onClickFunction, className) {
  const button = document.createElement("button");
  button.id = id;
  button.type = type;
  button.textContent = textContent;
  button.addEventListener("click", onClickFunction);
  button.className=className;
  return button;
}
function submitform(event) {
  event.preventDefault();
  const rowDatas = [
    firstNameInput.value,
    lastNameInput.value,
    addressTextArea.value,
    pinCodeInput.value,
    genderSelect.value,
    foodInput.value,
    stateInput.value,
    countryInput.value
  ];

  const newRow = tableBody.insertRow();
  rowDatas.forEach((ele) => {
    const cell = newRow.insertCell();
    cell.textContent = ele;
  });
}