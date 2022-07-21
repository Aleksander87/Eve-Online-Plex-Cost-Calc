const pobierzWartoscPolaTextowego = document.getElementById('poletextowe');
const pobierzWynik = document.getElementById('wynik');

function policzIski() {

    if (pobierzWartoscPolaTextowego === "") {
        pobierzWynik.innerText = "Nic nie wpisałeś";
        
    } else {
        let plexIskValue = 4;
        pobierzWynik.innerHTML = '<h3> Potrzebujesz: ' + pobierzWartoscPolaTextowego.value * plexIskValue + ' milionów Isk.';

    }
}
