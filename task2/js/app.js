//alert(1234);
function send_request_api(){
    
    let filterSelect = document.getElementById("type-filter");
    let typeOfSelect = filterSelect.options[filterSelect.selectedIndex].value;
    
    let filterValue = document.getElementById("filter-id-value").value;
    
    
    console.log(filterValue);
    fetch('https://jsonplaceholder.typicode.com/' + typeOfSelect)
  .then(response => response.json())
  .then(json => console.log(json));
}