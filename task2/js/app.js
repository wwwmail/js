function send_request_api(){

    let filterSelect = document.getElementById('type-filter');
    let typeOfSelect = filterSelect.options[filterSelect.selectedIndex].value;

    let filterValue = document.getElementById('filter-id-value').value;

    if(filterValue){

        getPostById(filterValue);

    }else{

        switch(typeOfSelect) {
            case 'posts':  

                getPosts(typeOfSelect);

                break;

            case 'comments':  

                getComments(typeOfSelect);

                break;
            case 'albums':  

                getAlbums(typeOfSelect);

                break;
            case 'photos':  

                getPhotos(typeOfSelect);

                break;
            case 'users':

                getUsers(typeOfSelect);

                break;
            case 'todos':  

                getTodos(typeOfSelect);

                break;
        }

    }

}

function createDataForPosts(dataArray){
    //console.log(dataArray);
    let filterContent = document.getElementById('filter-content');
    filterContent.innerHTML = '';

    let table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-bordered'); 
    let tableHead = document.createElement('thead');
    let rowHead = document.createElement('tr');

    let cellHead1 = document.createElement('th');
    cellHead1.appendChild(document.createTextNode('userId'));
    let cellHead2 = document.createElement('th');
    cellHead2.appendChild(document.createTextNode('id'));
    let cellHead3 = document.createElement('th');
    cellHead3.appendChild(document.createTextNode('title'));
    let cellHead4 = document.createElement('th');
    cellHead4.appendChild(document.createTextNode('body'));

    rowHead.appendChild(cellHead1);
    rowHead.appendChild(cellHead2);
    rowHead.appendChild(cellHead3);
    rowHead.appendChild(cellHead4);
    tableHead.appendChild(rowHead);
    table.appendChild(tableHead); 

    let tableBody = document.createElement('tbody');

    dataArray.forEach(function(item, i, arr) {  

        let row = document.createElement('tr');
        let cell1 = document.createElement('td');
        cell1.appendChild(document.createTextNode(item.userId));

        let cell2 = document.createElement('td');
        cell2.appendChild(document.createTextNode(item.id));

        let cell3 = document.createElement('td');
        cell3.appendChild(document.createTextNode(item.title));

        let cell4 = document.createElement('td');
        cell4.appendChild(document.createTextNode(item.body));

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);

        tableBody.appendChild(row);

        table.appendChild(tableBody);


    });

    filterContent.appendChild(table);

}

function getPosts(type){


    axios.get('https://jsonplaceholder.typicode.com/' + type)
        .then(function (response) {
        // handle success
        localStorage.setItem('posts',JSON.stringify(response.data));

        createDataForPosts(response.data);

    })
        .catch(function (error) {
        // handle error
        console.log(error);
    });
}




function getComments(type){

    let filterContent = document.getElementById('filter-content');
    filterContent.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/' + type)
        .then(function (response) {
        // handle success

        let table = document.createElement('table');
        table.classList.add('table');
        table.classList.add('table-bordered'); 
        let tableHead = document.createElement('thead');
        let rowHead = document.createElement('tr');

        let cellHead1 = document.createElement('th');
        cellHead1.appendChild(document.createTextNode('postId'));
        let cellHead2 = document.createElement('th');
        cellHead2.appendChild(document.createTextNode('id'));
        let cellHead3 = document.createElement('th');
        cellHead3.appendChild(document.createTextNode('name'));
        let cellHead4 = document.createElement('th');
        cellHead4.appendChild(document.createTextNode('email'));
        let cellHead5 = document.createElement('th');
        cellHead5.appendChild(document.createTextNode('body'));

        rowHead.appendChild(cellHead1);
        rowHead.appendChild(cellHead2);
        rowHead.appendChild(cellHead3);
        rowHead.appendChild(cellHead4);
        rowHead.appendChild(cellHead5);
        tableHead.appendChild(rowHead);
        table.appendChild(tableHead); 

        let tableBody = document.createElement('tbody');

        response.data.forEach(function(item, i, arr) {  

            let row = document.createElement('tr');
            let cell1 = document.createElement('td');
            cell1.appendChild(document.createTextNode(item.postId));

            let cell2 = document.createElement('td');
            cell2.appendChild(document.createTextNode(item.id));

            let cell3 = document.createElement('td');
            cell3.appendChild(document.createTextNode(item.name));

            let cell4 = document.createElement('td');
            cell4.appendChild(document.createTextNode(item.email));

            let cell5 = document.createElement('td');
            cell5.appendChild(document.createTextNode(item.body));

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);

            tableBody.appendChild(row);


            table.appendChild(tableBody);


        });

        filterContent.appendChild(table);

    })
        .catch(function (error) {
        // handle error
        console.log(error);
    });

}

function getAlbums(type){

    let filterContent = document.getElementById('filter-content');
    filterContent.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/' + type)
        .then(function (response) {
        // handle success

        let table = document.createElement('table');
        table.classList.add('table');
        table.classList.add('table-bordered'); 
        let tableHead = document.createElement('thead');
        let rowHead = document.createElement('tr');

        let cellHead1 = document.createElement('th');
        cellHead1.appendChild(document.createTextNode('userId'));
        let cellHead2 = document.createElement('th');
        cellHead2.appendChild(document.createTextNode('id'));
        let cellHead3 = document.createElement('th');
        cellHead3.appendChild(document.createTextNode('title'));


        rowHead.appendChild(cellHead1);
        rowHead.appendChild(cellHead2);
        rowHead.appendChild(cellHead3);

        tableHead.appendChild(rowHead);
        table.appendChild(tableHead); 

        let tableBody = document.createElement('tbody');

        response.data.forEach(function(item, i, arr) {  

            let row = document.createElement('tr');
            let cell1 = document.createElement('td');
            cell1.appendChild(document.createTextNode(item.userId));

            let cell2 = document.createElement('td');
            cell2.appendChild(document.createTextNode(item.id));

            let cell3 = document.createElement('td');
            cell3.appendChild(document.createTextNode(item.title));

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);

            tableBody.appendChild(row);

            table.appendChild(tableBody);

        });

        filterContent.appendChild(table);

    })
        .catch(function (error) {
        // handle error
        console.log(error);
    });

}




function getPhotos(type){

    let filterContent = document.getElementById('filter-content');
    filterContent.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/' + type)
        .then(function (response) {
        // handle success

        let table = document.createElement('table');
        table.classList.add('table');
        table.classList.add('table-bordered'); 
        let tableHead = document.createElement('thead');
        let rowHead = document.createElement('tr');

        let cellHead1 = document.createElement('th');
        cellHead1.appendChild(document.createTextNode('albumId'));
        let cellHead2 = document.createElement('th');
        cellHead2.appendChild(document.createTextNode('id'));
        let cellHead3 = document.createElement('th');
        cellHead3.appendChild(document.createTextNode('title'));
        let cellHead4 = document.createElement('th');
        cellHead4.appendChild(document.createTextNode('url'));
        let cellHead5 = document.createElement('th');
        cellHead5.appendChild(document.createTextNode('thumbnailUrl'));

        rowHead.appendChild(cellHead1);
        rowHead.appendChild(cellHead2);
        rowHead.appendChild(cellHead3);
        rowHead.appendChild(cellHead4);
        rowHead.appendChild(cellHead5);
        tableHead.appendChild(rowHead);
        table.appendChild(tableHead); 

        let tableBody = document.createElement('tbody');

        response.data.forEach(function(item, i, arr) {  

            let row = document.createElement('tr');
            let cell1 = document.createElement('td');
            cell1.appendChild(document.createTextNode(item.albumId));

            let cell2 = document.createElement('td');
            cell2.appendChild(document.createTextNode(item.id));

            let cell3 = document.createElement('td');
            cell3.appendChild(document.createTextNode(item.title));

            let cell4 = document.createElement('td');
            cell4.appendChild(document.createTextNode(item.url));

            let cell5 = document.createElement('td');
            cell5.appendChild(document.createTextNode(item.thumbnailUrl));

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);

            tableBody.appendChild(row);

            table.appendChild(tableBody);

        });

        filterContent.appendChild(table);

    })
        .catch(function (error) {
        // handle error
        console.log(error);
    });

}


function getTodos(type){

    let filterContent = document.getElementById('filter-content');
    filterContent.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/' + type)
        .then(function (response) {
        // handle success

        let table = document.createElement('table');
        table.classList.add('table');
        table.classList.add('table-bordered'); 
        let tableHead = document.createElement('thead');
        let rowHead = document.createElement('tr');

        let cellHead1 = document.createElement('th');
        cellHead1.appendChild(document.createTextNode('userId'));
        let cellHead2 = document.createElement('th');
        cellHead2.appendChild(document.createTextNode('id'));
        let cellHead3 = document.createElement('th');
        cellHead3.appendChild(document.createTextNode('title'));
        let cellHead4 = document.createElement('th');
        cellHead4.appendChild(document.createTextNode('completed'));

        rowHead.appendChild(cellHead1);
        rowHead.appendChild(cellHead2);
        rowHead.appendChild(cellHead3);
        rowHead.appendChild(cellHead4);
        tableHead.appendChild(rowHead);
        table.appendChild(tableHead); 

        let tableBody = document.createElement('tbody');

        response.data.forEach(function(item, i, arr) {  

            let row = document.createElement('tr');
            let cell1 = document.createElement('td');
            cell1.appendChild(document.createTextNode(item.userId));

            let cell2 = document.createElement('td');
            cell2.appendChild(document.createTextNode(item.id));

            let cell3 = document.createElement('td');
            cell3.appendChild(document.createTextNode(item.title));

            let cell4 = document.createElement('td');
            cell4.appendChild(document.createTextNode(item.completed));

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);

            tableBody.appendChild(row);

            table.appendChild(tableBody);

        });

        filterContent.appendChild(table);

    })
        .catch(function (error) {
        // handle error
        console.log(error);
    });

}




function getUsers(type){

    let filterContent = document.getElementById('filter-content');
    filterContent.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/' + type)
        .then(function (response) {
        // handle success

        let table = document.createElement('table');
        table.classList.add('table');
        table.classList.add('table-bordered'); 
        let tableHead = document.createElement('thead');
        let rowHead = document.createElement('tr');

        let cellHead1 = document.createElement('th');
        cellHead1.appendChild(document.createTextNode('id'));
        let cellHead2 = document.createElement('th');
        cellHead2.appendChild(document.createTextNode('name'));
        let cellHead3 = document.createElement('th');
        cellHead3.appendChild(document.createTextNode('username'));
        let cellHead4 = document.createElement('th');
        cellHead4.appendChild(document.createTextNode('email'));            
        let cellHead5 = document.createElement('th');
        cellHead5.appendChild(document.createTextNode('address'));

        rowHead.appendChild(cellHead1);
        rowHead.appendChild(cellHead2);
        rowHead.appendChild(cellHead3);
        rowHead.appendChild(cellHead4);
        rowHead.appendChild(cellHead5);
        tableHead.appendChild(rowHead);
        table.appendChild(tableHead); 

        let tableBody = document.createElement('tbody');

        response.data.forEach(function(item, i, arr) {  

            let row = document.createElement('tr');
            let cell1 = document.createElement('td');
            cell1.appendChild(document.createTextNode(item.id));

            let cell2 = document.createElement('td');
            cell2.appendChild(document.createTextNode(item.name));

            let cell3 = document.createElement('td');
            cell3.appendChild(document.createTextNode(item.username));

            let cell4 = document.createElement('td');
            cell4.appendChild(document.createTextNode(item.email));

            let cell5 = document.createElement('td');

            let ul = document.createElement('ul');
            let ul2 = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');
            let liChild1 = document.createElement('li');
            let liChild2 = document.createElement('li');

            //let span = document.createElement('span');

            li1.appendChild(document.createTextNode(item.address.street));
            li2.appendChild(document.createTextNode(item.address.suite));
            li3.appendChild(document.createTextNode(item.address.city));
            li4.appendChild(document.createTextNode(item.address.zipcode));

            liChild1.appendChild(document.createTextNode(item.address.geo.lat));
            liChild2.appendChild(document.createTextNode(item.address.geo.lng));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);

            ul2.appendChild(liChild1);
            ul2.appendChild(liChild2);

            ul.appendChild(ul2);

            cell5.appendChild(ul);

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);

            tableBody.appendChild(row);

            table.appendChild(tableBody);

        });

        filterContent.appendChild(table);

    })
        .catch(function (error) {
        // handle error
        console.log(error);
    });

}


function getPostById(id){

    let filterContent = document.getElementById('filter-content');
    filterContent.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(function (response) {
        // handle success

        let table = document.createElement('table');
        table.classList.add('table');
        table.classList.add('table-bordered'); 
        let tableHead = document.createElement('thead');
        let rowHead = document.createElement('tr');

        let cellHead1 = document.createElement('th');
        cellHead1.appendChild(document.createTextNode('userId'));
        let cellHead2 = document.createElement('th');
        cellHead2.appendChild(document.createTextNode('id'));
        let cellHead3 = document.createElement('th');
        cellHead3.appendChild(document.createTextNode('title'));
        let cellHead4 = document.createElement('th');
        cellHead4.appendChild(document.createTextNode('body'));

        rowHead.appendChild(cellHead1);
        rowHead.appendChild(cellHead2);
        rowHead.appendChild(cellHead3);
        rowHead.appendChild(cellHead4);
        tableHead.appendChild(rowHead);
        table.appendChild(tableHead); 

        let tableBody = document.createElement('tbody');

        let row = document.createElement('tr');
        let cell1 = document.createElement('td');
        cell1.appendChild(document.createTextNode(response.data.userId));

        let cell2 = document.createElement('td');
        cell2.appendChild(document.createTextNode(response.data.id));

        let cell3 = document.createElement('td');
        cell3.appendChild(document.createTextNode(response.data.title));

        let cell4 = document.createElement('td');
        cell4.appendChild(document.createTextNode(response.data.body));

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);

        tableBody.appendChild(row);

        table.appendChild(tableBody);

        filterContent.appendChild(table);

    })
        .catch(function (error) {
        // handle error
        console.log(error);
    });
}


window.onload = function () {

    let postsLocal = localStorage.getItem('posts');

    if(postsLocal){

        createDataForPosts(JSON.parse(postsLocal));
    }
}