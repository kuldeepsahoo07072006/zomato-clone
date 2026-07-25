function searchRestaurant(){

    let input =
    document.getElementById("searchBox")
    .value
    .toLowerCase();

    let cards =
    document.querySelectorAll(".card");

    cards.forEach(card => {

        let name =
        card.querySelector("h3")
        .innerText
        .toLowerCase();

        if(name.includes(input)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });
}