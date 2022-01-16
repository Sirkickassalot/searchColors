
    let colors = [ 
        'Pink', 
        'Cyan', 
        'Green', 
        'Red', 
        'White',
        'Yellow', 
        'Orange', 
        'Blue',
        'Brown',
        'Purple',
        'Grey',
        'Magenta',
        'Navy',
        'Teal',
        'Lavender',
        'Maroon',
        'Beige',
        'Olive',
        'Coral',
        'Lime'
    ];
    //Selects element passed in
    function selectIndex(selector){
        return document.querySelector(selector)
    }
    // Clears the content inside of the search-results div
    function clearResults(){
        selectIndex('.search-results').innerHTML = "";
    }



    function getResults(){
        const search = selectIndex('.searchBar').value;

        clearResults();

        if(search.length > 0){
            
        }

        for (let i = 0; i < colors.length; i++){
            if(
                colors[i].toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ){
                selectIndex('.search-results').innerHTML += `
                    <div class ="search-results-item" style="background-color:${colors[i]};">
                        <span class = 'search-item' >${colors[i]}</span>
                    </div>
                
                `;

            } console.log(selectIndex('.search-results').innerHTML)
        }
    }

    selectIndex('.searchBar').addEventListener('keyup', getResults);
