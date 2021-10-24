//! Varijable
//* Table.html
const primaryTable = document.getElementById('table-container'); //primaryTable.children[0].innerHTML za pristup tabeli
const table = document.getElementById('primary-table'); //* table


let students = [];
const buttons = {
    addButtons: document.getElementsByClassName('btnAdd'),
    removeButtons: document.getElementsByClassName('btnRemove'),
    updateButtons: document.getElementsByClassName('btnUpdate')
}
//* Index.html (db modal)
const getSourceBtn = document.getElementById('get-source-btn');
//* Parameters.html
const countRowTable = document.getElementById('rowTable');
const evaluationTable = document.querySelector('.gradesTable');
//* Pagination variables
let current_page = 1;        // promjenjiva
const records_per_page = 10;  // konstanta
//* Statistics.html
const statisticsTable = document.getElementById('statistics-table'); //* statistics
const statisticsMiniGradesTable = document.getElementById('statistics-table-grades'); //* statistics
//* columGrading.html
const inputForm = document.querySelector('.input-form__one-form');
// indikatori koje cu implementirati
const postojeciSpisak = 1

let tableDiv = [];
      
//! Inicijalizacija klasa
const parameters = new Parameters();
const store = new Firestore();
const calculation = new Calculation();
const localStore = new LocalStore();

//! Methods
//! Metode koje su implementirane u template

//? Table.html
//* metoda koja se poziva na klik kolone "UKLONITI"
function deleteStudent(btn) {
    const row = btn.parentNode.parentNode.parentNode;

    let studentIndex = row.children[0].innerText;
    // poziv funkcije iz store-a
    store.removeStudent(studentIndex, localStore.getActiveSource()).then(() => {
        // brisanje studente iz DOM-a
        const tBody = row.parentNode;
        for(let i = 0; i < tBody.children.length; i ++) {
            console.log('Student sa indeksom', tBody.children[i].children[0].innerText, 'je uklonjen iz tabele');
            if(tBody.children[i].children[0].innerText == studentIndex) {
                tBody.children[i].remove();
                return;
            }
        }
    })
};

//* metoda koja se poziva na klik kolone "DODATI"
async function addStudent(btn) {
    const row = btn.parentNode.parentNode.parentNode;
    // payload za cuvanje studenta u firebase

    let payload = {};
    for(let i = 0; i < row.children.length; i ++) {
        // izvlacimo id kolone cije ce ime takodje biti i ime propertija
        const id = row.children[i].id;
        
        if(row.children[i].className != 'removeAddRow') {
            if(id === 'number') payload[id] = Number(row.children[i].innerText);
            else payload[id] = row.children[i].innerText;
        }
    }

    // poziv metode iz store-a
    await store.saveStudent(payload, localStore.getActiveSource()).then(() => {
        parameters.setRowButton(row, 'delete');
        location.reload();
    })
};

//* metoda koja se poziva na klik kolone "Sačuvaj Izmjene"
async function updateStudent(btn) {
    const row = btn.parentNode.parentNode.parentNode;
    // payload za cuvanje studenta u firebase

    let payload = {};
    for(let i = 0; i < row.children.length; i ++) {
        // izvlacimo id kolone cije ce ime takodje biti i ime propertija
        const id = row.children[i].id;
        
        if(row.children[i].className != 'removeAddRow') {
            if(id === 'number') payload[id] = Number(row.children[i].innerText);
            else payload[id] = row.children[i].innerText;
            // dodajemo novi properti koji je zapravo id dokumenta u firebase tabeli
            payload.id = row.classList[row.classList.length - 1];
        }
    }
    // poziv metode iz store-a
    await store.updateStudent(payload, localStore.getActiveSource());
    parameters.setRowButton(row, 'delete');
};

//* metoda koja dodaje vrstu za upis novog studenta
function addRow(tableId) {
    // setovanje prazne vrste 
    let tbody = document.getElementById(tableId).getElementsByTagName('tbody')[0]; // get tbody


    // dodavanje prazne vrste u tabeli
    parameters.setRow(tbody); // todo: komentar u metodi


    // definisanje nove, dodate, vrste
    const newRow = tbody.lastChild; 

    // prikaz add buttona
    parameters.setRowButton(newRow, 'add');
} 

//* Pagination metode
function prevPage() {
    if (current_page > 1) {
        current_page--;
        parameters.currentData(current_page, records_per_page, students, table);
        // setovanje buttona za upravljanje vrstama
        parameters.defaultButtons(buttons, 'remove');
        // setujemo prikaz kolona u glavnoj tabeli
        parameters.setTableColumnView(table);
    }
}
function nextPage() {
    if (current_page < parameters.numPages(students, records_per_page)) {
        current_page++;
        parameters.currentData(current_page, records_per_page, students, table);
        // setovanje buttona za upravljanje vrstama
        parameters.defaultButtons(buttons, 'remove');
        // setujemo prikaz kolona u glavnoj tabeli
        parameters.setTableColumnView(table);
    }
}

//? Dialog metode iz tempate-a

//* metoda za setovanje formata pop-up-a za prikaz kolona
function setColumnsView() {
    document.querySelector('.modal-dialog').style.maxWidth = '500px';
    document.querySelector('.control-table-dialog').style.display = 'block';
    document.querySelector('.content-forms-dialog').style.display = 'none';

    // load maxpoints on inputs
    let maxPointsStats = JSON.parse(localStorage.getItem('maxPointsStats'));
    const inputs = document.querySelectorAll('.form-check-max-points');

    for(let object in maxPointsStats) {
        let input = Array.from(inputs).find(m => m.id === object);
        if(input) input.value = maxPointsStats[object];
    }
}
//* metoda za upravljanje kolonama 
function columnChange(e) {
    // definisanje kolone cija se vrijednost mijenja
    let changeColumn = {
        name: e.name,
        value: e.checked
    }
    // poziv local storage-a 
    const getColumns = localStorage.getItem('getColumns');
    const getColumnsParse = JSON.parse(getColumns);

    let newObjectPayload = {};
    // izmjena vrijednosti checkirane/ancekirane kolone u objektu 'getColumnsParse'
    Object.keys(getColumnsParse).map(key => {
        if(key === changeColumn.name) {
            return Object.assign(newObjectPayload, { [changeColumn.name]: Boolean(changeColumn.value) });
        }
        Object.assign(newObjectPayload, { [key]: getColumnsParse[key] });
    })

    // brisemo stari localStorage i kreiramo novi sa updejtovanim podacima
    localStorage.removeItem('getColumns');
    const jsonPayload = JSON.stringify(newObjectPayload)
    localStorage.setItem('getColumns', jsonPayload)

    // na osnovu vrijednosti iz localstorage-a setujemo vrijednost checkboxova (checked or unchecked)
    parameters.setColumnsCheckboxValue(); 

    // setujemo prikaz kolona u gslavnoj tabeli
    parameters.setTableColumnView(table, changeColumn);
}
//* metoda za podesavanje maksimalni broj poena za odabranu kolonu
function setMaxPoint(e) {
    if(e.key !== 'Enter' && e.key !== " ") { // u slucaju da nije pritisnut enter
        //* Dodajemo maksimalan broj bodova za svaku kolonu (provjeru znanja)
        //* i te vrijdnosti upisujemo u LocalStorage
        //* localstorage brisemo kada profesor uzme novi spisak studenata iz studentske sluzbe.
        if(localStorage.getItem('maxPointsStats')) {
            // uzimamo vrijednosti iz local storage-a i mijenjamo targetovanu kolonu
            let maxPointsStats = JSON.parse(localStorage.getItem('maxPointsStats'));
            maxPointsStats[e.target.id] = e.target.value;

            // automatski setujemo max poene za domace, testove, lab. vjezbe,
            maxPointsStats.t = 0;
            maxPointsStats.d = 0;
            maxPointsStats.labs = 0;
            for(let i = 1; i <= 5; i ++) {
                // testovi
                if(maxPointsStats[`t${i}`])  maxPointsStats.t = parseInt(maxPointsStats['t']) + parseInt(maxPointsStats[`t${i}`]);
                // domaci
                if(maxPointsStats[`d${i}`]) maxPointsStats.d = parseInt(maxPointsStats['d']) + parseInt(maxPointsStats[`d${i}`]);
                // labs
                if(maxPointsStats[`l${i}`]) maxPointsStats.labs = parseInt(maxPointsStats['labs']) + parseInt(maxPointsStats[`l${i}`]);
            }
            // konvertujemo rezultate testova, domaci i labs u string
            maxPointsStats.t = maxPointsStats.t.toString();
            maxPointsStats.d = maxPointsStats.d.toString();
            maxPointsStats.labs = maxPointsStats.labs.toString();
            // kolokvijum 1
            maxPointsStats.k1 = maxPointsStats.k1r;
            // kolokvijum 2
            maxPointsStats.k2 = maxPointsStats.k2r; 

            // brisemo stare vrijednosti iz local storage-a i dodajemo nove vrijednosti
            localStorage.removeItem('maxPointsStats');
            const jsonPayload = JSON.stringify(maxPointsStats);
            localStorage.setItem('maxPointsStats', jsonPayload);
        }
    }
}
//* metoda za brisanje vrijedosnih svig studenta iz kolona koje su ukonjene i snimanje u bazu
function saveDialogChanges() {
    // pitanje za dozvolu updade baze
    let test = confirm('Da li ste sigurni? Vrijednosti svih uklonjenih kolona biće eliminisane!');
     
    // ako je odgovor "Da"...
    if(test === true) {
        // svakom stundentu daje vrijednost '' za kolone koje su u local storage-u false
        let students = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        console.log('students', students);
        const evaluationPoints = store.queryEvaluationPoints();
        for(let i = 0; i < students.length; i++) {
            // Za svakog studenta imamo dvije metode:
            //* 1. prva metoda vraca rezultat vrijednosti svih kolona, stim da kod svake false kolone resutlat je '';
            //* 2. backend metoda koja updejtuje vrijednost kolona pojedinacnog studenta.
            //*    payload za backend metodu bice rezultat 1. metode.

            //? 1.
            let payload = calculation.studentColumnlessResult(students[i], evaluationPoints);
            //? 2.
            store.updateStudent(payload, localStore.getActiveSource(), true).then(() => {
                location.reload();
            })
        }

    }
};
//* metoda za search filter u tabeli
let searchTableTimer;
function searchTable(input) {
    if(input.value !== '') { // pozivamo filter metodu
        store.querySearchTable(input.value, localStore.getActiveSource(), 'index').then(response => {
            // load prve strane
            parameters.currentData(1, records_per_page, response, table);
            // setovanje buttona za upravljanje vrstama
            parameters.defaultButtons(buttons, 'remove');
            // setujemo prikaz kolona u glavnoj tabeli
            parameters.setTableColumnView(table);

            // prikazujemo search poruku ako nema rezultata
            // dolazi u obzir samo poslednji unijet input
            clearTimeout(searchTableTimer);
            searchTableTimer = setTimeout(() => {
                if(!response.length) document.getElementById('no-result-note').style.display = 'block';
                else document.getElementById('no-result-note').style.display = 'none';
            }, 1000);
        })
    } else { // eleminisemo filter

        // search poruku eliminisemo
        document.getElementById('no-result-note').style.display = 'none';

        store.queryAllStudents(localStore.getActiveSource()).then(response => {
            // console.log('All Students: ', response);
            // unosenje u tabelu podatke sa backanda
            if(response && response.length) {
                students = response; // dodavanje vrijednosti globalnoj promjenjivoj
                //! Pagination
                // todo: https://stackoverflow.com/questions/25434813/simple-pagination-in-javascript DONE
                // load prve strane
                parameters.currentData(1, records_per_page, response, table);
                // setovanje buttona za upravljanje vrstama
                parameters.defaultButtons(buttons, 'remove');
                // setujemo prikaz kolona u glavnoj tabeli
                parameters.setTableColumnView(table);
            } else {
                // setujemo prikaz kolona u glavnoj tabeli
                parameters.setTableColumnView(table);
            }
        });
    }
};
//* metoda za kreiranje obarsca tabele spremnu za konverovanje u PDF foramtu
function createPdfTable(obr) {
    // inicijalizacija globalne promjenjive
    let studentsList = students;

    //* uzimamo info o predmetu iz local storage-a
    const sourceInfo = JSON.parse(localStorage.getItem('sourceInfo'));
    // info za naslov
    let studyYear = sourceInfo ? Number(sourceInfo.studyYear) : 0;
    studyYear = `${studyYear}/${studyYear + 1}`;
    // fakultet
    let faculty = sourceInfo ? sourceInfo.faculty : '';
    // program
    let program = sourceInfo ? sourceInfo.program : '';
    // predmet
    let source = sourceInfo ? sourceInfo.source : '';
    // ECTS vrijednost
    let ectsCount = sourceInfo ? parseFloat(sourceInfo.ectsCount).toFixed(2).toString() : 0;

    // povecavamo sirinu dialoga
    document.querySelector('.modal-dialog').style.maxWidth = '80%';

    //* u zavisnosti na koji obrazac smo kliknuli razlicit je princip stvaranja tabele
    if(obr === 'obr1' || obr === 'obr2') {
        document.querySelector('.table-info__fakultet').children[0].innerText = faculty;
        document.querySelector('.table-info__program').children[1].children[0].innerText = program;
        document.querySelector('.table-info__source').children[1].children[0].innerText = source;
        document.querySelector('.table-info__ects').children[0].children[0].innerText = ectsCount;

        // brisemo prethodno dodane klase izabranog obrasca
        document.querySelector('.obr-table').classList.remove('obr1', 'obr2');
        // dodavanje tabeli klasu izabranog obrasca
        document.querySelector('.obr-table').classList.add(obr);

    }

    if(obr === 'obr1') {
        // popunjavamo informacije o predmetu
        document.querySelector('.modal-title--table-preview').innerText = `Obrazac za evidenciju osvojenih poena na predmetu i predlog ocjene, studijske ${studyYear}. godine`;   
        // kreiranje tabele
        parameters.setPdfTableContent('obr1', studentsList);
    }
    
    if(obr === 'obr2') {
        // popunjavamo informacije o predmetu
        document.querySelector('.modal-title--table-preview').innerText = `Obrazac za zaključne ocjene, studijske ${studyYear}. godine`;    
        // kreiranje tabele
        parameters.setPdfTableContent('obr2', studentsList);
    }

    //* uzimamo informacije iz input forme za 3. i 4. obrazac
    if(obr === 'obr3' || obr === 'obr4') {

        let knowledgeTestName = document.getElementById(`${obr}name`).value;
        let maxStudentsPerHall = document.getElementById(`${obr}hallStudentsCount`).value;
        let dateTestStart = document.getElementById(`${obr}date`).value.split("-").reverse().join("."); // formatiramo datum
        let groups = [];
        // izvlacenje infromacija iz svih kreiranih grupa
        const domGroups = obr === 'obr3' ? document.getElementById('differentGroupsTest') : document.getElementById('differentGroupsExam');
        if(domGroups && domGroups.children && domGroups.children.length) {
            for(let i = 0; i < domGroups.children.length; i ++) {
                item = domGroups.querySelector(`.group${i+1}`);
                let hallName = item.querySelector(`#hall${i+1}`).value
                let startTime = item.querySelector(`#starttime${i+1}`).value
                groups.push({
                    hallName: hallName,
                    startTime: startTime
                })
            } 
    
        }
        // pravimo payload za obracaz 3 i 4
        let infoObjectObr34 = {};
        infoObjectObr34.knowledgeTestName =  knowledgeTestName ? knowledgeTestName : ''
        infoObjectObr34.maxStudentsPerHall =  maxStudentsPerHall ? Number(maxStudentsPerHall) : ''
        infoObjectObr34.dateTestStart =  dateTestStart ? dateTestStart : ''
        infoObjectObr34.groups =  groups ? groups : ''

        // popunjavamo informacije o predmetu
        document.querySelector('.modal-title--table-preview').innerText = `${source} - Grupe za ${infoObjectObr34.knowledgeTestName} - ${infoObjectObr34.dateTestStart}.g.`;    
        // kreiranje tabele
        parameters.setPdfTableContent(obr, studentsList, infoObjectObr34);
    }

    // prikaz tabele u pop-up-u
    document.querySelector('.control-table-dialog').style.display = 'none';
    document.querySelector('.content-forms-dialog').style.display = 'block';
    $('#exampleModal').modal('toggle');
    $('#exampleModal').modal('show');
};
//* metoda za konvertovanje HTML-a u PDF
function convertToPdf() {
    //? https://www.encodedna.com/javascript/convert-html-table-to-pdf-using-javascript-without-a-plugin.htm
    
    // tabela za obrazac 1 i 2
    const htmlTableObr12 = document.getElementById('obr-table');
    // obrazac 1 ili 2
    const obrKind = Array.from(htmlTableObr12.classList).includes('obr1') ? 'obr1' : 'obr2'; // todo: ne radi
    // tabele za obracac 3 i 4
    const htmlTablesObr34 = document.getElementById('obr-multiTable');
    // naslob obrasca 
    const modelTitle = document.querySelector('.modal-title--table-preview').outerHTML;
    // dodatne informacije o predmetu
    const additationSourceInfo = document.querySelector('.table-info').outerHTML;
    
    //* Provjeravamo da li kreiramo tabelu za 1. i 2. ili za 3. i 4. obrazac
    // obrazac 1 i 2
    if(htmlTableObr12.children[1].children && htmlTableObr12.children[1].children.length > 0) {
        // kreiramo potpis liniju
        let footerTemplate = `
            <footer class="footer">
                <div><div></div></div>
                <p>(${obrKind === 'obr1' ? 'Predmetni nastavnik' : 'Prodekan za nastavu'})</p>
            </footer>
        `;
        // kreiramo css za PDF tabelu
        const style = `
        <style>
                body {
                    width: 80%;
                    margin: 2rem auto;
                }
                table {
                    border: 1px solid #dee2e6;
                    width: 100%;
                    margin-bottom: 1rem;
                    color: #212529;
                }
                table tr:nth-of-type(odd) {
                    background-color: rgba(0,0,0,.05);
                }
                table th {
                    vertical-align: middle !important;
                    text-align: center;
                }
                table td, table th {
                    text-align: center;
                    // border: 1px dashed #dee2e6;
                    padding: 2px;
                    vertical-align: middle !important;
                }
                h5 {
                    text-align: center;
                    font-weight: 800;
                    font-size: 1.378rem;
                }
                section {
                    padding: 1.5rem;
                    margin-bottom: 1.5rem;
                    background-color: #bee5eb;
                }
                .font-weight-bold {
                    font-weight: 700!;
                }
                footer {
                    align-self: flex-end;
                    bottom: 3px;
                    text-align: right;
                    margin: 4rem 0 1rem 0;
                }
                footer p {
                    font-size: .8rem;
                    line-height: 1.2rem;
                    color: #585858;
                    margin-top: 2px;
                }
                footer div div {
                    width: 270px;
                    margin-left: auto;
                    border: 1px solid #585858;
                }
            </style>
        `
        // kreiranje window objekta
        const win = window.open('','Obrazac', 'height=700,width=700');
    
        win.document.write('<html><head>'); 
        win.document.write('<title>Obrazac</title>'); // naslov za PDF header
        win.document.write(style); // dodajemo style za tabelu
        win.document.write('</head>'); 
        win.document.write('<body>'); 
        win.document.write(modelTitle); // naslov
        win.document.write(additationSourceInfo); // dodatne informacije
        win.document.write(htmlTableObr12.outerHTML);  // tabela
        win.document.write(footerTemplate) // footer
        win.document.write('</body></html>'); 
        win.document.close(); 
    
        win.print();
    } 
    // obrazac 3 i 4
    else if(htmlTablesObr34.children && htmlTablesObr34.children.length > 0) {
        // kreiramo css za PDF tabelu
        const style = `
            <style>
                table {
                    border: 1px solid #dee2e6;
                    width: 100%;
                    margin: 1rem;
                    color: #212529;
                    max-width: 380px;
                    min-width: 380px;
                    background-color:oldlace;
                    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
                }
                table tr:nth-of-type(odd) {
                    background-color: rgba(0,0,0,.05);
                }
                table th {
                    vertical-align: middle !important;
                    text-align: center;
                }
                table td, table th {
                    // border: 1px solid #dee2e6;
                    padding: .2px;
                    vertical-align: top;
                    text-align: center;
                }
                h5 {
                    text-align: center;
                    font-weight: 800;
                    font-size: 1.378rem;
                }
                div {
                    display: flex;
                    justify-content: left;
                    overflow: auto;
                    padding: 1.5rem;
                    margin-bottom: 1.5rem;
                    background-color: #f8f9fa;
                }
                .font-weight-bold {
                    font-weight: 700!;
                }
            </style>
        `
        // kreiranje window objekta
        const win = window.open('','', 'height=700,width=700');
    
        win.document.write('<html><head>'); 
        win.document.write('<title>Obrazac</title>'); // naslov za PDF header
        win.document.write(style); // dodajemo style za tabelu
        win.document.write('</head>'); 
        win.document.write('<body>'); 
        win.document.write(modelTitle); // naslov
        win.document.write(htmlTablesObr34.outerHTML);  // tabela
        win.document.write('</body></html>'); 
        win.document.close(); 
    
        win.print();
    }
}
//* metoda za dodavanje grupa u obrascima za testove i kolokvijume
function addGroup(kind) {
    let kindDefined;
    switch(kind) {
        case 'test':
            kindDefined = 'testa';
            break;
        case 'exam':
            kindDefined = 'kolokvijuma';
            break;
    }

    const groups = kind === 'test' ? document.querySelector('.differentGroupsTest') : document.querySelector('.differentGroupsExam');
    const countExistedGroups = groups ? groups.children.length : null;
    let template;
    
    try {
        if(countExistedGroups !== null) {
            // pravimo div u koji dodajemo tempale
            const newElement = document.createElement('div');
            newElement.className = `differentGroups__group group${countExistedGroups + 1}`
            // stvaramo template koji ce biti child novom elementu
            template = `
                <div class="row justify-content-between">
                    <div class="col groupTitle mb-2 font-italic">Grupa ${countExistedGroups + 1}</div>
                    <button onclick="closeGroup(this)" type="button" class="col-1 close" aria-label="Close" title="Ukloniti grupu">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="row">   
                    <div class="form-group col-6">
                        <label for="hall${countExistedGroups + 1}">Sala za održavanje ${kindDefined}</label>
                        <input type="text" name="hall" class="form-control" id="hall${countExistedGroups + 1}" placeholder="Pr: Sala L1">
                    </div>
                    <div class="form-group col-6">
                        <label for="starttime${countExistedGroups + 1}">Vrijeme početka ${kindDefined}</label>
                        <input type="text" name="starttime" class="form-control" id="starttime${countExistedGroups + 1}" placeholder="Pr: 16:00">
                    </div>
                </div>
            `;
            newElement.innerHTML = template;

            groups.appendChild(newElement);
        }

    } catch(e) {
        console.log(e);
        alert("Žao nam je. Nešto nije u redu sa dodavanjem grupa. Pokušajte ponovo kasnije.")
    }
};
function closeGroup(btn) {
    let groupsIdentify = document.querySelector('.differentGroupsTest').children.length ? document.querySelector('.differentGroupsTest') : document.querySelector('.differentGroupsExam');
    const groups = groupsIdentify ? groupsIdentify : null; 
    const group = btn.parentNode.parentNode;
    try {
        if(groups) {
            groups.removeChild(group);
        }
    } catch (e) {
        console.log(e);
        alert("Žao nam je. Nešto nije u redu sa brisanjem grupe. Pokušajte ponovo kasnije.")
    }
};

//? Parameters.html
//* metoda koja čuva broj bodova za svaku ocjenu 
function saveEvaluations(tableClass) {
    const tableGrades = document.getElementsByClassName(tableClass);
    if(tableGrades) {
        // definisanje kolona gdje se upisuju bodovi
        const evaluationF = document.getElementById('evaluationF').innerText,
              evaluationE = document.getElementById('evaluationE').innerText,
              evaluationD = document.getElementById('evaluationD').innerText,
              evaluationC = document.getElementById('evaluationC').innerText,
              evaluationB = document.getElementById('evaluationB').innerText,
              evaluationA = document.getElementById('evaluationA').innerText;

        // kreiranje payload-a za backend metodu
        const payload = {
            evaluationF: evaluationF,
            evaluationE: evaluationE,
            evaluationD: evaluationD,
            evaluationC: evaluationC,
            evaluationB: evaluationB,
            evaluationA: evaluationA,
            id: evaluationTable.id
        };
        // cuvanje izmjena u backend tabeli ocjene
        store.updateEvaluationPoints(payload);
    }
} 
//* metoda za upisivanje ime profesora i broj ECTS kredita u info tabeli
function writeRemainingSourceInfo(event) {
    // ideja jeste da se na Enter snimaju podaci
    if(event && event.key === 'Enter') {
        // definisanje vrijednosti koja je upisana i inputa u kojem je ta vrijednost upisana
        event.preventDefault();
        const value = event.path[0].textContent;
        const input = event.path[1].id;
        event.path[0].innerHTML = value;

        // upisivanje vrijednosti u local storage 
        if(localStorage.getItem('sourceInfo')) {
            let sourceInfo = JSON.parse(localStorage.getItem('sourceInfo'));
            sourceInfo[input] = value;
            // console.log(sourceInfo);

            localStore.setSourceInfo(sourceInfo, 'sourceInfo');
        }
    }
}

//? Studetnska služba

// upload predmeta(fajla) u storage
let globalFile = '';
function uploadSource(e) {
    if(e.target.files[0]) {
        const file = e.target.files[0];
        globalFile = file;
        // godina studija
        const studentYear = document.getElementById('service-years').value;
        // potvrda o tome da li se uploadnovani spisak azurira na vec postojeci
        const updateList = confirm('Da li želite da ažurirate postojeći spisak na taj način da sačuvate bodove studenata koji se nalaze u novom spisku?');

        //* Azuriranje spisak
        if(updateList === true) {
            // console.log(file.lastModifiedDate.toJSON());
            const reader = new FileReader();
            // ostali dio logike se nalazi u 'handleFileLoad' metodi
            reader.onload = handleFileLoad;
            reader.readAsText(file);
        } 
        //* Dodavanje novog spisak
        else {
            // importujemo fajl u firebase storage
            store.importSource(file, studentYear);
        }
    }
};
function handleFileLoad(event) {
    console.log('Uploading file: ', globalFile.name);
    let updateListUrl = event.target.result
    // response parse to DOM
    if(updateListUrl) {
        let xdoc;
        if(window.ActiveXObject) {
            xdoc = new ActiveXObject('Microsoft.XMLDOM'); // For IE6, IE5  
            xdoc.loadXML(updateListUrl);
        } else {
            const parser = new DOMParser();  
            xdoc = parser.parseFromString(updateListUrl, 'text/xml'); // For Firefox, Chrome etc 
        }
        // varijable
        const details = xdoc.getElementsByTagName('Worksheet')[0];
        const students = xdoc.getElementsByTagName('Worksheet')[1];
        const payload = calculation.xmlUncodeData(details, students);
        let studentYear = document.getElementById('service-years').value;
        // delete old xml file
        store.deleteFile(globalFile, studentYear).then((response) => {
            console.log('response', response);
            if(response) {
                // update database
                store.updateSourceList(payload.details, payload.students);
                // uploadujemo novi fajl
                store.importSource(globalFile, studentYear, true);
            }
        })
    }
}
// izlistati predmete iz cloud storage-a
async function getSourcesList() {
    // disablujemo button
    getSourceBtn.disabled = true;
    getSourceBtn.style.cursor = 'no-drop';
    // godina studija
    const studentYear = document.getElementById('service-years').value;

    let fileList = await store.getSources(studentYear);
    console.log('fileList', fileList);
    
    let listTemplate = ``;
    
    const newContent = document.querySelector('.content-list');
    const loader = document.getElementById('modal-loader');

    // pisemo template za listu
    if(fileList && fileList.length) {
        fileList.forEach(file => {
            //? string.split('.').slice(0, -1).join('.') // za eleminisanje ekstenzije
            listTemplate += `
                <li onClick="chooseSource('${file.url}')" class="list-item">${file.name.split('.').slice(0, -1).join('.')}</li>
            `
        });
        // ubacujemo template u html
        // console.log('listTemplate', listTemplate);
        document.getElementById('sources-list').innerHTML = listTemplate;
    } else {
        let paraph = document.createElement('p');
        let textNode = document.createTextNode('Pristupna baza je prazna.')
        paraph.appendChild(textNode);
        paraph.classList.add('empty-db-message');
        document.getElementById('sources-list').appendChild(paraph);

    }
    // loader sklanjamo i postavljamo sadrzaj sa listom predmeta
    loader.style.display = 'none';
    newContent.style.display = 'block';
};
//* GET XML file 
// odababir predmeta i upravljanje ocjenama studenata iz izabranog predmeta
function chooseSource(sourceUrl) {
    // ? https://www.c-sharpcorner.com/blogs/get-data-from-xml-content-using-javascript

    const DOMAIN_CROSS = "https://the-ultimate-api-challenge.herokuapp.com"

    // set loader true
    document.querySelector('.table-page-loader').style.display = 'flex';
    document.querySelector('.global-content').style.display = 'none';    

    // xml http request
    const xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    xhttp.open("GET", `${DOMAIN_CROSS}/${sourceUrl}`, false);
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');
    xhttp.send();

    // response parse to DOM
    let xdoc;
    if(window.ActiveXObject) {
        xdoc = new ActiveXObject('Microsoft.XMLDOM'); // For IE6, IE5  
        xdoc.async = 'false';  
        xdoc.loadXML(xhttp.response);
    } else {
        const parser = new DOMParser();  
        xdoc = parser.parseFromString(xhttp.response, 'text/xml'); // For Firefox, Chrome etc 
    }

    //* trazimo error u DOM responsu
    const loadDOMError = xdoc.getElementsByTagName('parsererror');
    // u slucaju da je parse to DOM error
    if(loadDOMError && loadDOMError.length) {
        alert('Nešto nije u redu sa fajlom. Pokušajte ponovo kasnije.');

        // set loader false
        document.querySelector('.table-page-loader').style.display = 'none';
        document.querySelector('.global-content').style.display = 'block';

        return
    } 
    // u slucaju da xml DOM ima regularan sadrzaj 
    else {
        // zatvaramo modal
        $('#student-services').modal('toggle');
        $('#student-services').modal('hide');
        
        const details = xdoc.getElementsByTagName('Worksheet')[0];
        const tables = xdoc.getElementsByTagName('Worksheet')[1];

        //* Upisivanje detalja o predmetu u local storage "sourceInfo":
        writeSourcesDetails(details);
        //* Kreiranje tabele i upisivanje studenata u njoj, ako tabela(predmet) ne postoji u firestore
        const studentProperties = calculation.getStudentProperties();
        writeStudentsInDb(tables, studentProperties).then(() => {
            // ako je button 'Postojeci spisak' bio nevidljiv, sada postaje vidljiv
            parameters.sourceNotYesSelected(localStore.getActiveSource());
            
            setTimeout(() => {
                // nakon dodavanja studenata u bazu idemo na tabelu gdje ce se studenti upisati u nju.
                window.location.href = '/parameters.html';

                // set loader false
                document.querySelector('.table-page-loader').style.display = 'none';
                document.querySelector('.global-content').style.display = 'block';
                
            }, 1000);
            
        });

    }
};
// Upisivanje detalja o predmetu u local storage "sourceInfo"
function writeSourcesDetails(details) {
    let sourceInfo = {};
    // 1. Naziv predmeta
    let predmet = Array.from(details.getElementsByTagName('Data')).find(m => m.textContent === 'Predmet');
    sourceInfo.source = predmet ? predmet.parentNode.parentNode.children[1].children[0].textContent : '';
    // 2. Studijski program
    let program = Array.from(details.getElementsByTagName('Data')).find(m => m.textContent === 'Program');
    sourceInfo.program = program ? program.parentNode.parentNode.children[1].children[0].textContent : '';
    // 3. Fakultet
    let faculty = Array.from(details.getElementsByTagName('Data')).find(m => m.textContent === 'Fakultet');
    sourceInfo.faculty = faculty ? faculty.parentNode.parentNode.children[1].children[0].textContent : '';
    // 4. Studijska godina
    let studyYear = Array.from(details.getElementsByTagName('Data')).find(m => m.textContent === 'Studijska Godina');
    sourceInfo.studyYear = studyYear ? studyYear.parentNode.parentNode.children[1].children[0].textContent : '';
    // f-ja za stavljavnje 'sourceInfo' u localstorage
    localStore.setSourceInfo(sourceInfo, 'sourceInfo');
}
// Kreiranje tabele i upisivanje studenata u njoj, ako tabela(predmet) ne postoji u firestore
async function writeStudentsInDb(tables, studentProperties) {
    // izvlacimo ime izabranog predmeta iz local storage-a
    let sourceName = localStorage.getItem('sourceInfo') && JSON.parse(localStorage.getItem('sourceInfo')).source;
    // prilagodjavamo ime predmeta za ime tabele u bazi
    const customizedSourceName = sourceName.toLowerCase().split(' ').join('-');

    let studentsTemplate = tables.getElementsByTagName('Row');
    // izvlacimo studente i dajemo im sve neophodne propertije
    let studentsList = [];
    if(studentsTemplate.length > 1) {
        for(let i = 1; i < studentsTemplate.length; i++) {
            studentsList.push({
                ...studentProperties,
                number: Number(studentsTemplate[i].children[0].children[0].innerHTML),
                year: studentsTemplate[i].children[1].children[0].innerHTML,
                index: `${studentsTemplate[i].children[0].children[0].innerHTML}/${studentsTemplate[i].children[1].children[0].innerHTML.substring(2,4)}`,
                name: studentsTemplate[i].children[2].children[0].innerHTML + ' ' + studentsTemplate[i].children[3].children[0].innerHTML,
            })
        }
        // provjeravamo da li u firestore-u vec postoji tabela sa spiskom studenata.
        // ako postoji onda samo studente ubacimo u tabelu
        // a ako ne postoji pravimo je i 'createStudentsTable' ubacujemo u firestore tabelu
        let checkChoosenTable = await store.checkSoruceTable(customizedSourceName);
        console.log('checkChoosenTable', checkChoosenTable);
        // ako predmet ne postoji u bazi onda kreiramo tabelu i ubacujemo spisak studenata iz studentske sluzbe
        checkChoosenTable || await store.createStudentsTable(studentsList, customizedSourceName);
    } else {
        alert('Nešto nije u redu sa odabranim predmetom i spiskom studenata u njemu.');
        return;
    }
}

// prilikom zatvaranja studentske sluzbe (popup-a)
function closeStudentServices() {
    // vracanje prvog template-a vidljivog prilikom ponovnog otvaranja sluzbe
    // i enableujemo button
    const oldContent = document.getElementById('content-basic');
    const newContent = document.querySelector('.content-list');
    const loader = document.getElementById('modal-loader');
    const surcesList = document.getElementById('sources-list');
    
    setTimeout(() => {
        getSourceBtn.disabled = false;
        getSourceBtn.style.cursor = 'pointer';
        oldContent.style.display = 'block';
        newContent.style.display = 'none';
        loader.style.display = 'none';
        surcesList.innerHTML = '';
    }, 1000);
}


//? ColumnGrading

//* metoda za pretragu stedenata po broju indexa
async function studentSearch() {
    // inicijalizacija i definisanje varijabli
    const indexNumber = document.getElementById('index-number').value,
          clearNumber = document.getElementById('clear-number').checked,
          loader = document.querySelector('.column-grading-page-loader');
          
    // isprazniti output forme
    document.getElementById('formsGrading').innerHTML = '';
    // poziv ka backendu akcija:
    //* querySearchTable(payload, source, filter)
    loader.style.display = 'block';
    const students = await store.querySearchTable(Number(indexNumber), localStore.getActiveSource(), 'number');
    loader.style.display = 'none';
    // pisemo template formu
    parameters.tamplateStudentList(students, clearNumber);
    
}
//* metoda za ocjenu studenta po izabranoj koloni
async function gradedStudent(student, index) {
    // Varijable
    // pravimo basic objekat za studenta
    let arrayOfProps =  student.split(',');
    let studentObject = {};
    for(let i = 0; i < arrayOfProps.length; i = i + 2) {
        studentObject[arrayOfProps[i]] = arrayOfProps[i + 1];
    }
    // ima kolone
    const nameOfColumn = document.getElementById('name-of-column').value;
    // polje za bodove
    const gradesInput = document.getElementById(`grade-input-${index}`).value;
    // predmet
    const source = localStore.getActiveSource();
    // update ocjene za setovanu kolonu
    studentObject[nameOfColumn] = gradesInput;
    // property 'number' konvertujemo u broj
    studentObject.number = Number(studentObject.number);

    // podesavanje prikaza broja bodova za nove studente
    localStore.setMemoryNumber(gradesInput);

    // kalkulacija bodova nakon dodavanja novih bodova
    const evaluationPoints = await store.queryEvaluationPoints();
    // konacni rezultati
    const studentResults = calculation.studentResults(null, evaluationPoints, studentObject); 
    
    console.log('studentResults', studentResults);
    // updajtovanje studenta
    await store.updateStudent(studentResults, source);
    document.getElementById(`two-form__form-${index}`).style.display = 'none';
    

}
//! Listeneri
addEventListener();


//? Mounted
function addEventListener() {
    
    //? Load stranice gdje se nalazi tabela
    document.addEventListener('DOMContentLoaded', event => { // table page
        
        parameters.sourceNotYesSelected(localStore.getActiveSource());
        
        if(getSourceBtn != null) { //! /index.html
            const selectYear = document.getElementById('service-years');
            console.log(selectYear.value);
            if(selectYear.value == '------') {
                // 'Odabir predmeta' button
                getSourceBtn.disabled = true;
                getSourceBtn.style.cursor = 'no-drop';
                // 'Izaberite fajl...' button
                document.getElementById('validatedCustomFile').disabled = true;
                document.getElementById('validatedCustomFile').style.cursor = 'no-drop';
            }

        }

        if(primaryTable != null) { //! /table.html
            //* set loader
            // po defaultu sva tri elemnta su na display none
            const loader = document.querySelector('.table-page-loader');
            const tableSection = document.querySelector('.table-section');
            const tablePatternSection = document.querySelector('.tablePatterns-section');

            loader.style.display = 'block';
            
            // kreiranje local storage-a ako ga nema,
            // a ako ga ima onda setujemo kolone u tabeli u zavsnosti kakvi su one setovane u local storage-u
            if(localStorage.getItem('getColumns')) {
                // const getColumns = localStorage.getItem('getColumns');
                // ... na osnovu podataka iz localstorage prikazujemo odredjene kolone u tabeli
            } else {
                const columns = {
                    t1: false,
                    t2: false,
                    t3: false,
                    t4: false,
                    t5: false,
                    k1r: false,
                    k1p: false,
                    exam: true,
                    corrective: true,
                    k2r: false,
                    k2p: false,
                    d1: false,
                    d2: false,
                    d3: false,
                    d4: false,
                    d5: false,
                    l1: false,
                    l2: false,
                    l3: false,
                    l4: false,
                    l5: false,

                }
                const jsonColumn = JSON.stringify(columns);
                localStorage.setItem('getColumns', jsonColumn);
            }
            // na osnovu vrijednosti iz localstorage-a setujemo vrijednost checkboxova (checked or unchecked)
            parameters.setColumnsCheckboxValue();

            tableDiv = primaryTable;
            
            parameters.defaultTable(tableDiv)
            parameters.defaultButtons(buttons, 'add');
            if(postojeciSpisak == 1) { // ako kliknemo na postojeci spisak
                // poziv ka backendu
                store.queryAllStudents(localStore.getActiveSource()).then(response => {
                    console.log('All Students: ', response);
                    // unosenje u tabelu podatke sa backanda
                    if(response && response.length) {
                        students = response; // dodavanje vrijednosti globalnoj promjenjivoj
                        //! Pagination
                        // todo: https://stackoverflow.com/questions/25434813/simple-pagination-in-javascript DONE
                        // load prve strane
                        parameters.currentData(1, records_per_page, response, table);
                        // setovanje buttona za upravljanje vrstama
                        parameters.defaultButtons(buttons, 'remove');
                        // setujemo prikaz kolona u glavnoj tabeli
                        parameters.setTableColumnView(table);

                        // uklanjanje loadera
                        loader.style.display = 'none';
                        tableSection.style.display = 'block';
                        tablePatternSection.style.display = 'block';
                    } else {
                        // setujemo prikaz kolona u glavnoj tabeli
                        parameters.setTableColumnView(table);
                    }

                });
            }
        }
        if(statisticsTable != null) { //! /statistics.html
            //* set loader
            // po defaultu sva tri elemnta su na display none
            const loader = document.querySelector('.table-page-loader');
            const content = document.querySelector('.statistics__content');

            loader.style.display = 'block';

            store.queryAllStudents(localStore.getActiveSource()).then(response => {
                students = response; // dodavanje vrijednosti globalnoj promjenjivoj

                //* Statistics table
                // kalkulacija statistike vezane za tabelu
                const tableStatsCalc = calculation.statisticTable(response);
                //load statistics table
                parameters.currentStatisticsTable(statisticsTable, tableStatsCalc);
                // setujemo prikaz kolona u glavnoj tabeli
                parameters.setTableColumnView(statisticsTable);

                //* Statistics Chars
                // kalkulacija statistike vezane za grafikon i mini tabelu
                const chartStats = calculation.statisticChart(response);
                //load statistics chart
                parameters.currentStatisticsChart(chartStats);
                //load grades mini table
                parameters.currentStatisticsTableGrades(statisticsMiniGradesTable, chartStats);

                // eliminisemo loader i prikazujemo sadrzaj
                loader.style.display = 'none';
                content.style.display = 'block';

            })

        }
        if(countRowTable != null) { //! /parameters.html

            // setovanje loader za kolonu za prikazivanje poslednjeg studenta
            const loaderTemplate = `
                <div id="modal-loader" class="text-center modal-loader table-cell-loader">
                    <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                </div>
            `;
            document.getElementById('lastStudent').innerHTML = loaderTemplate;

            //* Tabela sa prvom i poslednjoj vrstom studenta

            store.queryCountStudents(localStore.getActiveSource()).then(response => {
                document.getElementById('lastStudent').innerHTML = response + 1;
            });      
            
            //* Informacije o predmetu
            const getSourceInfo = JSON.parse(localStorage.getItem('sourceInfo'));
            parameters.writeSourceInfo(getSourceInfo);

            //* Tabela sa ocjenama

            store.queryEvaluationPoints().then(response => {
                console.log('Evaluation Points', response);

                //ako na backendu ne postoji tabela "ocjene" automatski je pravimo sa vrijednostima svake ocjene 0.
                if(!response) {
                    const payload = {
                        evaluationF: '0',
                        evaluationE: '50',
                        evaluationD: '60',
                        evaluationC: '70',
                        evaluationB: '80',
                        evaluationA: '90',
                        id: 'evaluationPoints'
                    };
                    // cuvanje izmjena u backend tabeli ocjene
                    store.saveEvaluationPoints(payload).then(() => {
                        // upusujemo bodove za ocjene u UI tabelu ocjene sve osim id propertija.
                        for(evaluation in payload) {
                            if(evaluation !== 'id') {
                                document.getElementById(evaluation).innerText = payload[evaluation];
                            }
                        }
                        // tabeli "ocjene" dodajemo isti id kao iz backend tabele
                        evaluationTable.setAttribute('id', payload.id);
                    })
                } else {
                    // upusujemo bodove za ocjene u UI tabelu ocjene sve osim id propertija.
                    for(evaluation in response) {
                        if(evaluation !== 'id') {
                            document.getElementById(evaluation).innerText = response[evaluation];
                        }
                    }
                    // tabeli "ocjene" dodajemo isti id kao iz backend tabele
                    evaluationTable.setAttribute('id', response.id);
                }
            });
        }
        if(inputForm != null) { //! /columnGrading.html
            // popunjavamo select input dostpunim kolonama
            let select = document.getElementById('name-of-column');
            let columns = localStorage.getItem('getColumns') ? JSON.parse(localStorage.getItem('getColumns')) : null;
            let usedColumn = {};
            if(columns) {
                for(property in columns) {
                    if(columns[property] === true) {
                        let option = new Option(property, property)
                        select.add(option, undefined);
                    }
                }
            }
        }
    });

    //? Updated

    if(getSourceBtn != null) { //! /index.html
        //? Kada select ima vrijednost enableujemo buttone
        //? u modalu 'Dobrodošli u pristupnu bazu'
        document.addEventListener('click', () => {
            // select input
            const selectYear = document.getElementById('service-years');
            if(selectYear.value != '------') {
                // 'Odabir predmeta' button
                getSourceBtn.disabled = false;
                getSourceBtn.style.cursor = 'pointer';
                // 'Izaberite fajl...' button
                document.getElementById('validatedCustomFile').disabled = false;
                document.getElementById('validatedCustomFile').style.cursor = 'pointer';
            }
        })
    }

    if(primaryTable != null) { //! /table.html
        
        //? Na promjenu vrijednosti kolone glavne tabele
        document.addEventListener('keyup', event => {
            if(event.key !== 'Enter' && event.key !== " " && event.path[0].contentEditable === 'true') { // u slucaju da nije pritisnut enter
                console.log(event.key);
                // uklanjanje 'UKLONI' buttona
                // ako nova vrsta za dodavanje studenta, onda ADD btn ostaje
                const childElementCount = event.path[1].childElementCount;
                const addBtnStatus = event.path[1].children[childElementCount - 1].children[0].children[1];
                if(addBtnStatus.style.display === 'none') parameters.setRowButton(event.path[1], 'update'); 


                store.queryEvaluationPoints().then(response => {
                    // konacni rezultati
                    const studentResults = calculation.studentResults(event.path[1], response); 
        
                    // upisivanje rezultata u tabelu 
                    parameters.writeStudentResults(studentResults, event.path[1]) 
                })
    
            }
        }, false)

        //? Klik na head-kolonu. Sortiranje vrsta po kolonama
        // prolazimo kroz sve kolone head-vrste i setujemo click event za njih
        // izuzev kolone "Upravljanje"
        const headRow = table.children[0] ? table.children[0].children[0] : '';
        if(headRow) {
            // sve kolone uzimamo u obzir osim prve(index) i poslednje(buttons)
            for(let i = 1; i < headRow.children.length - 1; i++) {
                let sortIconsDiv = headRow.children[i].children[0].children[0]
                sortIconsDiv.addEventListener('click', event => {
                    // prije novog sorta svim sort ikonicama vratiti defaultnu boju
                    let allIcons = document.getElementsByClassName('bi');
                    Array.from(allIcons).forEach(icon => {
                        icon.style.fill = '#212529';
                        icon.style["boxShadow"] = 'unset';
                    });
                    // pronalazimo ikonicu u eventu
                    const icon = event.path.find(m => m.localName === 'svg');
                    // akitnoj sort ikonici dodijeljuje boju
                    icon.style.fill = '#0B94BA';
                    icon.style["boxShadow"] = "-1px 4px 8px 0px rgba(152,152,152,0.75) inset";
                    // pronalazimo kolonu cije podatke pokusavamo da srotiramo
                    const targetCol = icon.parentNode.parentNode.parentNode.className;

                    // ako je akrivan sort u rastucem poretku onda setujemo metodu za opadajuci poredak
                    if(icon.classList[1] && icon.classList[1].includes('down')) {
                        parameters.sortTable(table, 'asc', targetCol);
                    } else if(icon.classList[1] && icon.classList[1].includes('up')) {
                        // u svakom drugom slucaju setujemo sort sa uzlaznim poretkom
                        parameters.sortTable(table, 'desc', targetCol);
                    }
                })
            }
        }
    }
}

