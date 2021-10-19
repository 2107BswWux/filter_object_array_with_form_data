console.log("script is linked");

// object array
// array is defined with square brackets []
// objects are defined with curly brackets {}
// we seperate each property with a comma at the after the value
// eg id: 123,
// the last value in the object array doesnt need a comma
let objectArray = [
    {
        id: 123,
        artist: 'Hiatus Kaiyote',
        album: 'Choose Your Weapon',
        price: 25,
        image:'./haitus.jpeg',
        genre:'rnb',
        showAll: 'all'
    },
    {
        id: 456,
        artist: 'Miles Davis',
        album: 'Kind Of Blue',
        price: 49.95,
        image:'./miles.jpeg',
        genre:'jazz',
        showAll: 'all'
    },
    {
        id: 678,
        artist: 'Tylet The Creator',
        album: 'Igor',
        price: 30,
        image:'./tyler.jpeg',
        genre:'rap',
        showAll: 'all'
    },
    {
        id: 462,
        artist: 'Ziggy Alberts',
        album: 'Laps Around The Sun',
        price: 51.95 ,
        image:'./ziggy.jpeg',
        genre:'folk',
        showAll: 'all'
    }
];

function objectArrayCardInfo(){
    // for loop - loops though specified code
    // declear a variable to act as a counter for when we are looping through the code
    let i = 0;
    for(i = 0; i<objectArray.length; i++){
        $('#cardContent').append(
            `
           
                    <div class="card card--style" style="width: 18rem;">
                        <div class="img-container">
                        <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                        </div>
                        
                        <div class="card-body">
                            <h5 class="card-title">${objectArray[i].artist}</h5>
                            <p class="card-text">${objectArray[i].album}</p>
                            <p class="card-text">$${objectArray[i].price}</p>
                            <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                                more info
                            </button>
                        </div>
                    </div>  
           
            `
        );
    };
};

function objectsLoop(){
    objectArrayCardInfo();
    $(".moreInformation").click(function(){
        // console.log("clicked");
        let i = 0;
        for(i = 0; i<objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                // console.log(objectArray[i].artist);
                // one way to clear data is use the jquery function
                // empty() - it removes all child nodes from the selected element
                $("#objectArrayModalInfo").empty().append(
                    `
                       <h2 class="modalTitle">${objectArray[i].artist}</h2>
                    `
                );
            }
        }
    });

}
objectsLoop();

$("#folk, #rap, #rnb, #jazz, #all").click(function(){
    $('#cardContent').empty();
    console.log('clicked');
    let i = 0;
    for(i = 0; i < objectArray.length; i++){
        if(this.id === objectArray[i].genre){
            $('#cardContent').append(
                `
               
                        <div class="card card--style" style="width: 18rem;">
                            <div class="img-container">
                            <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                            </div>
                            
                            <div class="card-body">
                                <h5 class="card-title">${objectArray[i].artist}</h5>
                                <p class="card-text">${objectArray[i].album}</p>
                                <p class="card-text">$${objectArray[i].price}</p>
                                <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                                    more info
                                </button>
                            </div>
                        </div>  
               
                `
            );
        } else if(this.id === objectArray[i].showAll){
            $('#cardContent').append(
                `
               
                        <div class="card card--style" style="width: 18rem;">
                            <div class="img-container">
                            <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                            </div>
                            
                            <div class="card-body">
                                <h5 class="card-title">${objectArray[i].artist}</h5>
                                <p class="card-text">${objectArray[i].album}</p>
                                <p class="card-text">$${objectArray[i].price}</p>
                                <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                                    more info
                                </button>
                            </div>
                        </div>                 
                `
            );
        }
        
           
    };
    

    // you will need to run modal function inside each function
    $(".moreInformation").click(function(){
        // console.log("clicked");
        let i = 0;
        for(i = 0; i<objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                // console.log(objectArray[i].artist);
                // one way to clear data is use the jquery function
                // empty() - it removes all child nodes from the selected element
                $("#objectArrayModalInfo").empty().append(
                    `
                       <h2 class="modalTitle">${objectArray[i].artist}</h2>
                    `
                );
            }
        }
    });




});


const priceSubmit = document.querySelector("#priceSubmit");
// radio btn data

function priceData(event){
    $('#cardContent').empty();
    event.preventDefault();

    let price = document.querySelector('input[name="price"]:checked').value;
    console.log(price);

    let i = 0;
    for(i = 0; i < objectArray.length; i++){
        if(price === 'low' && objectArray[i].price >= 20 && objectArray[i].price <= 30){
            $('#cardContent').append(
                `
                        <div class="card card--style" style="width: 18rem;">
                            <div class="img-container">
                            <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                            </div>
                            
                            <div class="card-body">
                                <h5 class="card-title">${objectArray[i].artist}</h5>
                                <p class="card-text">${objectArray[i].album}</p>
                                <p class="card-text">$${objectArray[i].price}</p>
                                <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                                    more info
                                </button>
                            </div>
                        </div>                 
                `
            );
        };
    };


    $(".moreInformation").click(function(){
        // console.log("clicked");
        let i = 0;
        for(i = 0; i<objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                // console.log(objectArray[i].artist);
                // one way to clear data is use the jquery function
                // empty() - it removes all child nodes from the selected element
                $("#objectArrayModalInfo").empty().append(
                    `
                       <h2 class="modalTitle">${objectArray[i].artist}</h2>
                    `
                );
            }
        }
    });
   
};


priceSubmit.addEventListener("click", priceData);






