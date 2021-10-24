class Calculation {
    studentResults(row, evaluationPoints, studentObject = null) {
        let results = {};
 
        //* index
        let number, year;
        if(studentObject === null) {
            number = row.querySelector('#number') ? row.querySelector('#number').innerText : '';
            year = row.querySelector('#year') ? row.querySelector('#year').innerText : '';

        } else {
            number = studentObject.number;
            year = studentObject.year;
        }
        
        results.number = number;
        results.year = year;

        if(number && year) {
            results.index = `${number}/${year.substring(2,4)}`
        } else {
            results.index = '';
        }

        //* ime i prezime
        let name;
        if(studentObject === null) {
            name = row.querySelector('#name') ? row.querySelector('#name').innerText : '';
        } else {
            name = studentObject.name;
        }
        results.name = name;

        //* testovi
        let t1, t2, t3, t4, t5;
        if(studentObject === null) {
            t1 = row.querySelector('#t1') ? row.querySelector('#t1').innerText : '';
            t2 = row.querySelector('#t2') ? row.querySelector('#t2').innerText : '';
            t3 = row.querySelector('#t3') ? row.querySelector('#t3').innerText : '';
            t4 = row.querySelector('#t4') ? row.querySelector('#t4').innerText : '';
            t5 = row.querySelector('#t5') ? row.querySelector('#t5').innerText : '';

        } else {
            t1 = studentObject.t1;
            t2 = studentObject.t2;
            t3 = studentObject.t3;
            t4 = studentObject.t4;
            t5 = studentObject.t5;

        }

        results.t1 = t1;
        results.t2 = t2;
        results.t3 = t3;
        results.t4 = t4;
        results.t5 = t5;

        if(t1 || t2 || t3 || t4 || t5) {
            const test = Number(t1) + Number(t2) + Number(t3) + Number(t4) + Number(t5);
            results.t = test.toString();
        } else {
            results.t = '';
        }

        //* 1. kolokvijum
        let k1r, k1p;
        if(studentObject === null) {
            k1r = row.querySelector('#k1r') ? row.querySelector('#k1r').innerText : '';
            k1p = row.querySelector('#k1p') ? row.querySelector('#k1p').innerText : '';

        } else {
            k1r = studentObject.k1r;
            k1p = studentObject.k1p;
        }

        results.k1r = k1r;
        results.k1p = k1p;

        if(k1r || k1p) {
            const k1 = k1p.length ? k1p : k1r;
            results.k1 = k1.toString();
        } else {
            results.k1 = '';
        }

        //* 2. kolokvijum 
        let k2r, k2p;
        if(studentObject === null) {
            k2r = row.querySelector('#k2r') ? row.querySelector('#k2r').innerText : '';
            k2p = row.querySelector('#k2p') ? row.querySelector('#k2p').innerText : '';

        } else {
            k2r = studentObject.k2r;
            k2p = studentObject.k2p;
        }

        results.k2r = k2r;
        results.k2p = k2p;

        if(k2r || k2p) {
            const k2 = k2p.length ? k2p : k2r;
            results.k2 = k2.toString();
        } else {
            results.k2 = '';
        }

        //* domaci
        let d1, d2, d3, d4, d5;
        if(studentObject === null) {
            d1 = row.querySelector('#d1') ? row.querySelector('#d1').innerText : '';
            d2 = row.querySelector('#d2') ? row.querySelector('#d2').innerText : '';
            d3 = row.querySelector('#d3') ? row.querySelector('#d3').innerText : '';
            d4 = row.querySelector('#d4') ? row.querySelector('#d4').innerText : '';
            d5 = row.querySelector('#d5') ? row.querySelector('#d5').innerText : '';

        } else {
            d1 = studentObject.d1;
            d2 = studentObject.d2;
            d3 = studentObject.d3;
            d4 = studentObject.d4;
            d5 = studentObject.d5;

        }

        results.d1 = d1;
        results.d2 = d2;
        results.d3 = d3;
        results.d4 = d4;
        results.d5 = d5;

        if(d1 || d2 || d3 || d4 || d5) {
            const homeworks = Number(d1) + Number(d2) + Number(d3) + Number(d4) + Number(d5);
            results.homeworks = homeworks.toString();
        } else {
            results.homeworks = '';
        }

        //* labaratorijske vjezbe 


        let l1, l2, l3, l4, l5;
        if(studentObject === null) {
            l1 = row.querySelector('#l1') ? row.querySelector('#l1').innerText : '';
            l2 = row.querySelector('#l2') ? row.querySelector('#l2').innerText : '';
            l3 = row.querySelector('#l3') ? row.querySelector('#l3').innerText : '';
            l4 = row.querySelector('#l4') ? row.querySelector('#l4').innerText : '';
            l5 = row.querySelector('#l5') ? row.querySelector('#l5').innerText : '';

        } else {
            l1 = studentObject.l1;
            l2 = studentObject.l2;
            l3 = studentObject.l3;
            l4 = studentObject.l4;
            l5 = studentObject.l5;

        }

        results.l1 = l1;
        results.l2 = l2;
        results.l3 = l3;
        results.l4 = l4;
        results.l5 = l5;

        if(l1 || l2 || l3 || l4 || l5) {
            const labs = Number(l1) + Number(l2) + Number(l3) + Number(l4) + Number(l5);
            results.labs = labs.toString();
        } else {
            results.labs = '';
        }

        //* zbir kolokvijum
        let kolokvijumi = 0;
        if(results.k1 || results.k2) {
            kolokvijumi = Number(results.k1) + Number(results.k2);
            results.kol = kolokvijumi.toString();
        } else {
            results.kol = ''
        }

        //* zbir svih rezultata osim ispita
        let kolokvijumiNumber = results.kol.length ? Number(results.kol) : 0;
        let labsNumber = results.labs.length ? Number(results.labs) : 0;
        let homeworksNumber =  results.homeworks.length ? Number(results.homeworks) : 0;
        let testsNumber =  results.t.length ? Number(results.t) : 0;
        const dklZbir =  kolokvijumiNumber + labsNumber + homeworksNumber + testsNumber;
        results.dkl = dklZbir.toString();

        //* ispit
        let regular, corrective;
        if(studentObject === null) {
            regular = row.querySelector('#regular') ? row.querySelector('#regular').innerText : '';
            corrective = row.querySelector('#corrective') ? row.querySelector('#corrective').innerText : '';
        } else {
            regular = studentObject.regular;
            corrective = studentObject.corrective;
        }

        results.regular = regular;
        results.corrective = corrective;

        if(regular || corrective) {
            const exam = corrective.length ? corrective : regular;
            results.exam = exam.toString();
        } else {
            results.exam = '';  
        }

        //* davanje ID-a ako je ocjenjivanje po koloni
        if(studentObject !== null) {
            results.id = studentObject.id;
        }

        //* zbir
        const sum = Number(results.exam) + Number(results.dkl);
        results.sum = sum.toString();

        //* ocjena
        let mark;
        // identifikacija simbola ocjene
        if(results.sum >= evaluationPoints.evaluationA) {
            mark = 'A'
        } else if(results.sum >= evaluationPoints.evaluationB) {
            mark = 'B'
        } else if(results.sum >= evaluationPoints.evaluationC) {
            mark = 'C'
        } else if(results.sum >= evaluationPoints.evaluationD) {
            mark = 'D'
        } else if(results.sum >= evaluationPoints.evaluationE) {
            mark = 'E'
        } else {
            mark = 'F'
        }
        results.mark = mark;
        
        return results;
    };

    // kada se kolona oduzme i sacuvaju se novi rezultati
    studentColumnlessResult(studentRow, evaluationPoints) {
        /*
            !  studentRow.children.find() --- incorrect! // DOM ne podrzava js funkcije (find, map, filter, ...) 
            *  Array.from(studentRow.children).find() .. correct! // array DOM pretvaramo u array i sa njim regularno korisimo sve funckije
       
            https://stackoverflow.com/questions/43928315/filter-is-not-a-function/43928344
        */

        // localstorage value of checkboxex
        const getColumnsValue = JSON.parse(localStorage.getItem('getColumns'));

        // kolone koje imaju vrijednost 'false' u tabeli studentu vriujednost te kolone svodimo na ''(prazan string)
        for(let id in getColumnsValue) {
            if(getColumnsValue[id] === false) {
                let targetColumn = Array.from(studentRow.children).find(m => m.id === id)
                targetColumn.innerHTML = '';
            }
        } 
        
        // Pozivano funkciju iznad koja nam regulise sve nove konacne vrijednosti sa novim izmjenama
        const newResults = this.studentResults(studentRow, evaluationPoints);
        
        // dodajemo jos jedna property "id"
        const studentId = studentRow.classList[studentRow.classList.length - 1]; // poslednja klasa u vrsti je backend id studenta
        newResults.id = studentId;
        
        return newResults;
    };
    
    /* 
        ? Kalkulacija svih setovanih kolona u sledecih 7. statistika:
        * Broj studenata
        * Procenat
        * Maksimalno bodova
        * Prosjek
        * Bodova >= 90%
        * Bodova >= 50%
        * Bodova < 10%
    */
    statisticTable(students) {
        // inicijalizacija vrsta stats kolone
        let studentNumber = {}, 
            percentage = {},
            maxPoints = {},
            average = {},
            // koliko je studenata osvojilo vise od od 90, 50% (ili manje od 10%) maksimalnog broja bodova
            moreThan90perc = {},
            moreThan50perc = {},
            lessThan10perc = {};

        //* Pomocne varijable potrebne za izracunavanje vrijednosti varijabli iznad
        const studentCount = students.length; // ukupan broj studenata
        let studentSum = {}, // vrijednost potrebena za izracunavanje srednjeg prosjeka
            maxPointsStats = {}, // local storage za vrstu 'Maksimalno bodova'
            countStudents90perc = {},
            countStudents50perc = {},
            countStudents10perc = {};
        
        
        // prolazimo kroz sve studente u uzimamo podatke svih kolona za sve kolone iznad
        if(students.length) {

            //! 1. Broj studenata i pomocne varijable iza ostale stats-e

            //? posebna vrsta petlje gdje svakom propertiju u ovjektu 'studentNumber' inicijalno dajemo vrijednost 0
            //? kako bi mogli da ih brojimo u drugoj array petlji
            // takodje pupunjavamo variablu 'maxPointsStats' u localstorage sa incijalnim vrijednostima ''(prazan string)
            Array.from(students).forEach(student => {
                for(let property in student) {
                    studentNumber[property] = 0;
                    studentSum[property] = 0
                    // uslovi za procentualne bodove
                    countStudents90perc[property] = 0;
                    countStudents50perc[property] = 0;
                    countStudents10perc[property] = 0;
                    //localstorage 'maxPointsStats'
                    if(!localStorage.getItem('maxPointsStats')) {
                        switch(property) {
                            case 'dkl':
                                maxPointsStats[property] = '50';
                                break;
                            case 'sum':
                                maxPointsStats[property] = '100';
                                break;
                            default:
                                maxPointsStats[property] = '';
                        }
                    }
                }
            });
            // ako localstorage nije postojao setujemo ga nakon popunjavanja objekta propertijima
            if(maxPointsStats.hasOwnProperty('index')) {
                const jsonPayload = JSON.stringify(maxPointsStats);
                localStorage.setItem('maxPointsStats', jsonPayload);
            } else {
                maxPointsStats = JSON.parse(localStorage.getItem('maxPointsStats'));
            }

            // racunamo broj studenata koji su izlazili na odredjene kolokvijuje, testove i ostale provjere znanja
            Array.from(students).forEach(student => {
                for(let property in student) {
                    // inicijano broj svake provjere znanja svesti na 0;
                    if(![null, undefined, ''].includes(student[property])) {
                        //* Broj studenata
                        studentNumber[property] ++;
                        studentSum[property] += Number(student[property]);
                        
                        //* Pomocne varijable
                        const percent90 = (90 / 100) * Number(maxPointsStats[property]);
                        const percent50 = (50 / 100) * Number(maxPointsStats[property]);
                        const percent10 = (10 / 100) * Number(maxPointsStats[property]);

                        if(Number(student[property]) >= percent90) {
                            countStudents90perc[property] ++;
                        }
                        if(Number(student[property]) >= percent50) {
                            countStudents50perc[property] ++
                        }
                        if(Number(student[property]) < percent10) {
                            countStudents10perc[property] ++
                        }
                    }
                }
            });
            
            //! 2. Ostali stats-i

            //prolazimo kroz propertije 'studentNumber' objekta kako bi dobili ostale podatke
            for(let property in studentNumber) {
                if(studentNumber[property] != 0) {
                    //* Procenat
                    percentage[property] = Math.floor((studentNumber[property] / studentCount) * 100);
                    //* Prosjek
                    average[property] = parseFloat(studentSum[property]  / studentNumber[property]).toFixed(2);
                    //* Maksimalno bodova
                    maxPoints[property] = maxPointsStats[property];
                    //* Bodova >= 90%
                    moreThan90perc[property] = Math.floor(countStudents90perc[property] / Number(studentNumber[property]) * 100);
                    //* Bodova >= 50%
                    moreThan50perc[property] = Math.floor(countStudents50perc[property] / Number(studentNumber[property]) * 100);
                    //* Bodova < 10%
                    lessThan10perc[property] = Math.floor(countStudents10perc[property] / Number(studentNumber[property]) * 100);
                } else {
                    percentage[property] = '';
                    average[property] = '';
                    moreThan90perc[property] = '';
                    moreThan50perc[property] = '';
                    lessThan10perc[property] = '';
                } 
            }
        }

        return {
            studentNumber,
            percentage,
            maxPoints,
            average,
            moreThan90perc,
            moreThan50perc,
            lessThan10perc,
            studentCount
        }
    };
    statisticChart(students) {
        const studentsCount = students.length || 0;
        // inicijalizacija output varijabli
        let ai = {}, bi = {}, si = {}, di = {}, i = {}, ef = {};

        ai.count = 0; // A
        bi.count = 0; // B
        si.count = 0; // C
        di.count = 0; // D
        i.count = 0;  // E
        ef.count = 0; // F

        if(students.length) {
            // prolazimo kroz studente i brojimo konacne ocjene(simbole) svihg studenata
            students.forEach(student => {
                //? student.mark === 'F' && isto ako if(student.mark === 'F'){}
                student.mark === 'A' && ai.count ++
                student.mark === 'B' && bi.count ++
                student.mark === 'C' && si.count ++
                student.mark === 'D' && di.count ++
                student.mark === 'E' && i.count ++
                student.mark === 'F' && ef.count ++
            });
            //racunamo prosjek broja svih ocjena
            ai.percent = Math.floor((ai.count / studentsCount) * 100);
            bi.percent = Math.floor((bi.count / studentsCount) * 100);
            si.percent = Math.floor((si.count / studentsCount) * 100);
            di.percent = Math.floor((di.count / studentsCount) * 100);
            i.percent = Math.floor((i.count / studentsCount) * 100);
            ef.percent = Math.floor((ef.count / studentsCount) * 100);
        }

        return {
            ai,
            bi,
            si,
            di,
            i,
            ef,
        }
    }


    //* Inicijalizujemo propertije za studenta 
    getStudentProperties() {
        let object = {
            index: '',
            number: '',
            year: '',
            name: '',
            t1: '',
            t2: '',
            t3: '',
            t4: '',
            t5: '',
            t: '',
            k1r: '',
            k1p: '',
            k1: '',
            k2r: '',
            k2p: '',
            k2: '',
            d1: '',
            d2: '',
            d3: '',
            d4: '',
            d5: '',
            homeworks: '',
            regular: '',
            corrective: '',
            exam: '',
            l1: '',
            l2: '',
            l3: '',
            l4: '',
            l5: '',
            labs: '',
            kol: '',
            dkl: '',
            sum: '',
            mark: ''
        };
        return object;
    }

    //! Metode za azuriranje liste za odredjeni predmet

    // metoda za detekciju imena predmeta i svih studenata iz dokumenta 
    xmlUncodeData(details, students) {
        console.log('details', details);
        //* Preuzimamo naziv predmeta
        const sourceContent = Array.from(details.getElementsByTagName('Data')).find(m => m.textContent === 'Predmet');
        let source = sourceContent ? sourceContent.parentNode.parentNode.children[1].children[0].textContent : '';
        source && source.toLowerCase().split(' ').join('-');
    
        //* Preuzimanje liste studenata
        let studentsTemplate = students.getElementsByTagName('Row');
        // izvlacimo studente
        let studentsList = [];
        if(studentsTemplate.length > 1) {
            for(let i = 1; i < studentsTemplate.length; i++) {
                studentsList.push({
                    name: studentsTemplate[i].children[2].children[0].innerHTML + ' ' + studentsTemplate[i].children[3].children[0].innerHTML
                })
            }
        }
        return {
            details: source,
            students: studentsList
        }

    }
}

