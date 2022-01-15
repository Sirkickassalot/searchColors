
    let colors = [ 
        'Pink', 
        'Black', 
        'Green', 
        'Red', 
        'Yellow', 
        'Orange', 
        'Blue',
        'Brown',
        'Purple',
        'Cyan'
    ];
    //Selects element passed in
    function selectElement(selector){
        return document.querySelector(selector)
    }
    // Clears the content inside of the search-results div
    function clearResults(){
        selectElement('.search-results').innerHTML = "";
    }



    function getResults(){
        const search = selectElement('.searchBar').value;

        clearResults();

        if(search.length > 0){
            
        }

        for (let i = 0; i < colors.length; i++){
            if(
                colors[i].toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ){
                selectElement('.search-results').innerHTML += `
                    <div class ="search-results-item" style="background-color:${colors[i]};">
                        <span class = 'search-item' >${colors[i]}</span>
                    </div>
                
                `;

            } console.log(selectElement('.search-results').innerHTML)
        }
    }

    selectElement('.searchBar').addEventListener('keyup', getResults);
