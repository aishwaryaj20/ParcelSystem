var data = [

    {

        id: 10,

        search: "PARCEL1",

        sequence: 1,

        group: "Mumbai"

    },

    {

        id: 11,

        name: "PARCEL2",

        sequence: 2,

        group: "Mumbai"

    },

    {

        id: 13,

        name: "PARCEL3",

        sequence: 3,

        group: "Mumbai"

    },

    {

        id: 19,

        name: "PARCEL4",

        sequence: 4,

        group: "Delhi"

    },

    {

        id: 18,

        name: "PARCEL5",

        sequence: 5,

        group: "Delhi"

    },

    {

        id: 21,

        name: "PARCEL6",

        sequence: 6,

        group: "Kolkata"

    },

    {

        id: 12,

        name: "PARCEL7",

        sequence: 7,

        group: "Kolkata"

    },

    {

        id: 22,

        name: "PARCEL8",

        sequence: 8,

        group: "Kolkata"

    },

    {

        id: 23,

        name: "PARCEL9",

        sequence: 9,

        group: "Kolkata"

    },

    {

        id: 24,

        name: "PARCEL10",

        sequence: 10,

        group: "Mumbai"

    },

    {

        id: 25,

        name: "PARCEL11",

        sequence: 11,

        group: "Mumbai"

    },

    {

        id: 31,

        name: "PARCEL12",

        sequence: 12,

        group: "Mumbai"

    },

    {

        id: 34,

        name: "PARCEL13",

        sequence: 13,

        group: "Mumbai"

    },

    {

        id: 35,

        name: "PARCEL14",

        sequence: 14,

        group: "Delhi"

    },

    {

        id: 41,

        name: "PARCEL15",

        sequence: 15,

        group: "Delhi"

    },

    {

        id: 42,

        name: "PARCEL16",

        sequence: 16,

        group: "Delhi"

    },

    {

        id: 43,

        name: "PARCEL17",

        sequence: 17,

        group: "Delhi"

    },

    {

        id: 44,

        name: "PARCEL18",

        sequence: 18,

        group: "Kolkata"

    },

    {

        id: 53,

        name: "PARCEL19",

        sequence: 19,

        group: "Kolkata"

    },

    {

        id: 57,

        name: "PARCEL20",

        sequence: 20,

        group: "Kolkata"

    }

];
const parcelContainer = document.querySelector("#parcel-container");
const parcelNameInput = document.querySelector("#parcel-name");
const groupSelect = document.querySelector("#parcel-group");
const deleteButton = document.querySelector("#delete");
const refreshButton = document.querySelector("#refresh");
const showFinalButton = document.querySelector("#show-final");
const selectedParcel = document.querySelector("#selected-parcel");


function renderParcels() {
  parcelContainer.innerHTML = "";
  data.forEach((parcel) => {
    const parcelElement = document.createElement("div");
    parcelElement.classList.add("parcel");
    if(parcel.group=='Kolkata'){
      parcelElement.style.backgroundColor = '#ff4da6';
    }if(parcel.group=='Delhi'){
       parcelElement.style.backgroundColor = '#33ffd6';
    }if(parcel.group=='Mumbai'){
       parcelElement.style.backgroundColor = '#8c1aff';
    }
    parcelElement.innerHTML = parcel.name;
    parcelElement.dataset.id = parcel.id;
    parcelContainer.appendChild(parcelElement);
  });
}

var terms = new Array();
var max = 6;
            
for (i=1;i<=max;i++) { 
    terms[i] = new Array();
}
            
terms[1]['search'] = 'parcel1'; 
terms[1]['des'] = ' PARCEL1'; 


terms[2]['search'] = 'parcel2'; 
terms[2]['des'] = 'PARCEL2'; 


terms[3]['search'] = 'parcel3'; 
terms[3]['des'] = 'PARCEL3'; 


terms[4]['search'] = 'parcel4'; 
terms[4]['des'] = 'PARCEL4'; 


terms[5]['search'] = 'parcel5'; 
terms[5]['des'] = 'PARCEL5'; 


terms[6]['search'] = 'parcel6'; 
terms[6]['des'] = 'PARCEL6'; 

            
function search() {
    var input = document.getElementById('searchbar').value.toLowerCase();
    var i=0;
    var list="";
    var pos=-1;
                
    if(input!="") { 
        for(i=1; i<=max; i++) { 
            pos= terms[i]['search'].indexOf(input);
            
            if(pos!=-1) { 
                list= list + '<a class="search_lnk" href="'+terms[i]['lnk']+'">' + terms[i]['des'] + '</a>' + '<br>'; 
            }   
            pos=-1;
        }
        console.log(list);
        if(list==""){ 
            document.getElementById("listing").innerHTML = "";
            document.getElementById("listing").style.display = "none";
        } else { 
            document.getElementById("listing").innerHTML = list;
            document.getElementById("listing").style.display = "block";
        }
    }
}

function getSelectedParcel() {
  return parcelContainer.querySelector(".selected");
}


function selectParcel(parcelElement) {
  parcelContainer.querySelectorAll(".parcel").forEach((p) => {
    p.classList.remove("selected");
  });
  parcelElement.classList.add("selected");
  selectedParcel.innerHTML = `${parcelElement.innerHTML}`;
}

function deleteParcel() {
  const selected = getSelectedParcel();
  if (!selected) {
    return;
  }
  const selectedIndex = data.findIndex(
    (parcel) => parcel.id === parseInt(selected.getAttribute('data-id'))
  );
  data.splice(selectedIndex, 1);
  renderParcels();
}


function refreshParcelList() {
  location.reload(true);
}


function showFinalList() {
  console.log(data);
}

parcelContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("parcel")) {
    selectParcel(event.target);
  }
});


deleteButton.addEventListener("click", deleteParcel);
refreshButton.addEventListener("click", refreshParcelList);
showFinalButton.addEventListener("click", showFinalList);

renderParcels();