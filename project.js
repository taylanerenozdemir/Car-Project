
const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElemet = document.querySelector("#url");

//UI objesini başlatma

const ui = new UI();

//Tüm eventleri yükleme

eventListeners();

function eventListeners()
{
    form.addEventListener("submit",addCar);
}

function addCar(e)
{
    e.preventDefault();
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElemet.value;

    if(title == null || price == null || url == null)
    {
            //Hata
        alert("Lütfen Gerekli Bütün Alanları Doldurunuz");
    }
    else
    {
            //Yeni Araç
        const newCar = new Car(title,price,url);

        ui.addCarToUI(newCar); //Arayüze araç ekleme
    }
}