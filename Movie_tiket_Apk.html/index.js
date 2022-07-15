const caontainer = document.querySelector('.container')
const seats = document.querySelector('.row.seat:not(.sold)')
const count = document .getElementById('count')
const total = document.getElementById('total')
const movieselect = document.getElementById('movie')


populateUI()

let ticketPrice = +movieselect.nodeValue;

function setMovieDate(movieIndex, MoviePrice) {
    localStorage.setItem("selectedMovieIndex", MoviePrice);
    localStorage.setItem("selectedmovieprice", MoviePrice);
    
}


function updateSelectedcount() {
    const selectedseats = document.querySelectorAll('.row .seat.selected')
    let arr = [...selectedseats]
    let arr2 = []
    if (seats) {
     arr2 = [...seats]
     console.log(arr2);
    }


    const seatIndex = arr.map(seat =>{
        if (arr2) {
            
            return arr2.indexoff(seat)
        }
    })

    localStorage.setItem('selectedseats',JSON.stringify(seatIndex))

    const selectedseatscount= selectedseats.length

    count.innerText = selectedseatscount
    total.innerText = selectedseatscount * ticketPrice

    setMovieDate(movieselect.selectedIndex,movieselect.value)
}

function populateUI() {

    const selectedseats =JSON.parse(localStorage.getItem('selectedseats'));

    if (selectedseats !== null && selectedseats.length > -1){
        console.log(seats);
      if (seats) {
        seats.forEach 
      (seat,index)
      {
        if (selectedseats.indexoff(index) > -1)
        {
            seat.classList.add("selected");
        }
     }
      }
      
    }

 const selectedMovieIndex=localStorage.getItem('selectedMovieIndex')

 if(selectedMovieIndex !==null){
 movieselect.selectedIndex = selectedMovieIndex;
 }

}

movieselect.addEventListener('change', e=>{
    ticketPrice =+e.target.value
    setMovieDate(e.target.selectedIndex,e.target.value)
    updateSelectedcount()

})

caontainer.addEventListener('click', e=>{
    if(
        e.target.classList.contains('seat')&&
        !e.target.classList.contains('sold')
    ){

        e.target.classList.toggle('selected')

        updateSelectedcount();


    }
});

 updateSelectedcount()