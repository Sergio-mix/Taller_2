
let petsList = [];

function addPets(pMicrochip, pSpecies, pSize, pRace, pSex, pDangerousness, pLocation, pDirection, pPhotography, pOwner, pLocationPet) {
    let newPet = {
        microchip: pMicrochip,
        species: pSpecies,
        size: pSize,
        race: pRace,
        sex: pSex,
        dangerousness: pDangerousness,
        location: pLocation,
        direction: pDirection,
        photography: pPhotography,
        owner: pOwner,
        locationPet: pLocationPet

    };
    petsList.push(newPet);
    console.log(newPet);
}

document.querySelector('#button-register').addEventListener('click', savePets);

function savePets() {
    let sMicrochip = document.querySelector('#txtMicrochip').value;
    let sSpecies = document.querySelector('#txtSpecies').value;
    let sSize = document.querySelector('#txtSize').value;
    let sRace = document.querySelector('#txtRace').value;
    let sSex = document.querySelector('#txtSex').value;
    let sDangerousness = document.querySelector('#txtDangerousness').value;
    let sLocation = document.querySelector('#txtLocation').value;
    let sDirection = document.querySelector('#txtDirection').value;
    let sPhotography = document.querySelector('#photography').value;
    let sOwner = document.querySelector('#txtOwner').value;
    let sLocationPet = document.querySelector('#txtLocationPet').value;
    addPets(sMicrochip, sSpecies, sSize, sRace, sSex, sDangerousness, sLocation, sDirection, sPhotography, sOwner, sLocationPet);
}

function fillSpeciesField(){
  
    let cbxSpecies=document.div.txtSpecies;
    let option=document.createElement("Dog");

   cbxSpecies.appendChild(option);
} 

