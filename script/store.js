// Konekcija sa firebaseom i upiti za firestore

class Firestore {
    //? Table.html 
    async queryAllStudents(source) {
        let tableName = source ? source : '';
        let students = [];
        try {
            await db.collection(tableName).orderBy('number').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    students.push({
                        ...doc.data(),
                        id: doc.id
                    });
                })
            })
            return students;
        } catch(error) {
            alert('Nešto nije u redu sa listom studenata. Pokušajte opet kasnije.');
        }   
    };
    async removeStudent(index, source) {
        try {
            let tableName = source ? source : '';
            await db.collection(tableName).where('index', '==', index).get().then(snapshot => {
                snapshot.forEach(doc => {
                    doc.ref.delete(); 
                })
            })
        } catch(error) {
            console.log(error);
        }
    };
    async saveStudent(payload, source) {
        if(payload) {
            let tableName = source ? source : '';
            await db.collection(tableName).add(payload).then(() => {
                alert(`Uspiješno ste dodali novog studenta sa indeksom: ${payload.index}.`);

            }).catch(() => {
                alert('Greška pri pokušaju dodavanja novog studenta!');
            });
        }
    };
    async updateStudent(payload, source, popupCall = false) {
        if(payload) {
            let tableName = source ? source : '';
            let newObject = {};
            // punjenje objekta newObject sa svim propertijama iz objekta payload osim ID propertija.
            Object.keys(payload).map(key => {
                if(key !== 'id') {
                    Object.assign(newObject, {[key]: payload[key]});
                }
            });

            await db.collection(tableName).doc(payload.id).update(newObject).then(() => {
                if(popupCall === false) {
                    alert(`Uspiješno ste izvršili izmjenu studenta sa indeksom: ${payload.index}.`);
                }
            }).catch(error => {
                console.log(error);
                alert('Greška pri pokušaju izmjene podataka odabranog studenta!');
            })
        }
    };
    async queryCountStudents(source) {
        let studentsCount = [];
        let tableName = source ? source : '';
        try {
            await db.collection(tableName).get().then(querySnapshot => {
                studentsCount = querySnapshot.size;
            })
            return studentsCount;
        } catch(error) {
            alert('Nešto nije u redu sa listom studenata. Pokušajte opet kasnije.');
        }   
    };
    async querySearchTable(payload, source, filter) {
        let result = [];
        let tableName = source ? source : '';
        try {
            await db.collection(tableName).where(filter, '==', payload).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    result.push({
                        ...doc.data(),
                        id: doc.id
                    })
                })
            })
            return result;
        } catch(error) {
            console.log(error);
            alert('Došlo je do greške prilikom pretrage.')
        }
    }

    //? Parameters.html
    async saveEvaluationPoints(payload) {
        try {
            let newObject = {};
            // uzimamo u obzir sve propertije payloada  osim ID-a.
            Object.keys(payload).map(key => {
                if(key !== 'id') {
                    Object.assign(newObject, {[key]: payload[key]});
                }
            });
            await db.collection('ocjene').doc(payload.id).set(newObject);
        } catch(error) {
            alert('Greška prilikom čuvanja bodova!');
        }
    };
    async updateEvaluationPoints(payload) {
        if(payload) {
            let newObject = {};
            // uzimamo u obzir sve propertije payloada  osim ID-a.
            Object.keys(payload).map(key => {
                if(key !== 'id') {
                    Object.assign(newObject, {[key]: payload[key]});
                }
            });

            await db.collection('ocjene').doc(payload.id).update(newObject).then(() => {
                alert('Uspješno su izmjene izvršene.')
            }).catch(error => {
                alert('Greška pri pokušaju izmjene podataka!');
            })


        }
    }
    async queryEvaluationPoints() {
        let evaluationPoints = [];
        try {
            await db.collection('ocjene').get().then(querySnapshot => {
                if(querySnapshot && querySnapshot.size) {
                    querySnapshot.forEach(doc => {
                       evaluationPoints.push({
                           ...doc.data(),
                           id: doc.id
                       });
                    })
                }
            })
            return evaluationPoints.length > 0 ? evaluationPoints[0] : null;
        } catch(error) {
            alert('Nešto nije u redu sa bazom. Pokušajte ponovo kasnije.');
        }
    };

    //? Studetnska služba
    // upload predmet u storage
    importSource(file, studentYear, update = false) {
        // 1. get reference
        let storageRef = storage.ref(studentYear + '/' + file.name);
        // 2. upload file and metadata
        let uploadTask = storageRef.put(file);

        uploadTask.on('state_changed', snapshot => {
            let process = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            // progress div
            document.getElementById('progress-div').style.display = 'flex';
            //progress child
            const progressBar = document.getElementById('progress-bar');
            progressBar.style.width = process + '%';
            progressBar.innerText = process;

            if(process === 100) {
                setTimeout(() => {
                    document.getElementById('progress-div').style.display = 'none';
                    if(!update) {
                        alert('Fajl je uspješno otpremljen u pristupnu bazu.')
                    } else {
                        alert('Fajl je uspješno otpremljen u pristupnu bazu. Stari fajl je izbrisan, a lista studenata uspješno ažurirana u bazu podataka.')
                    }
                }, 1000)
            }

        }, error => {
            console.log(error.message);
            alert('Nešto nije u redu sa čuvanjem fajla. Pokušajte ponovo kasnije.')
        });
    };
    // izlistavanje predmeta iz storage-a
    async getSources(studentYear) {
        // stvaramo referencu
        let storageRef = storage.ref();
        // let listRef = storageRef.child('sources');
        let listRef = storageRef.child(studentYear);

        const oldContent = document.getElementById('content-basic');
        const loader = document.getElementById('modal-loader');
        
        
        try {
            // pokrecemo loader u vremenu izmedju dva modala
            oldContent.style.display = 'none';
            loader.style.display = 'block';

            let fileList = Array();
            // trazimo 'otisak' itema u storage
            const res = await listRef.listAll();

            // izdvajamo listu fajlova
            let files = res.items;

            // prolazimo kroz listu i uzmamo ime i url od itema
            for(let i = 0; i < files.length; i++) {
                let listElement = {};
                let url = await files[i].getDownloadURL();
                console.log(files[i]);

                listElement.url = url;
                listElement.name = files[i].name;

                fileList.push(listElement);
            }

            return fileList;
        } catch(error) {
            console.log(error);
            oldContent.style.display = 'block';
            loader.style.display = 'none';
            alert('Problem pri izlistavanju predmeta! Molimo Vas pokušajte ponovo kasnije.');
        }  
    };
    // provjeravamo da li posotji tabela(predmet) u bazi koji smo izabrali u studentskoj sluzbi
    async checkSoruceTable(name) {
        let isExisted = new Boolean();
        try {
            await db.collection(name).get().then(snapshot => {
                isExisted = snapshot.empty ? false : true; 
            });
            return isExisted;
        } catch(e) {
            alert('Nešto nije u redu sa serverom. Pokušajte ponovo kasnije.');
        }
    };
    // todo: interesantan kod za diplomski
    async createStudentsTable(studentsList, tableName) {
        try {
            if(studentsList && studentsList.length) {
                const batch = db.batch(); // vreca za niz dokumenata koje ubacujemo u tabelu
                for(let i = 0; i < studentsList.length; i++) {
                    // await db.collection(tableName).add(studentsList[i]);
                    const docRef = await db.collection(tableName).doc();
                    batch.set(docRef, studentsList[i]); // ubacivanje svakog studenta u vrecu
                }
                batch.commit(); // komitujemo studente iz vrece u bazu
            }
        } catch (error) {
            alert('Problem pri upisivanju studenata u bazu podataka. Pokušajte ponovo kasnije.')
        }
    };
    // brisanje svih dokumenata jedne tabele
    async emptyTable(tableName) {
        try {
            await db.collection(tableName).get().then(snapshot => {
                snapshot.forEach(doc => {
                    doc.ref.delete();
                })
            })
        } catch(e) {
            console.log(e);
        }
    }
    // Metode za azuriranje liste za odredjeni predmet
    async updateSourceList(source, newListStudents) {
        const customazedName = source.toLowerCase().split(' ').join('-');
        try {
            // provjeravamo da li predmet vec postoji 
            let checkChoosenTable = await this.checkSoruceTable(customazedName);
            if(checkChoosenTable) {
                // ako postoji prezueti iz baze podatke za sve studente
                const oldListStudents = await this.queryAllStudents(customazedName);
                // ubacujemo podatke studentima iz nove liste
                for(let i = 0; i < newListStudents.length; i ++) {
                    // pronalazimo studenta iz stare liste i prebacujemo njegove podatke studentu iz nove liste
                    let findedStudent = oldListStudents.find(m => m.name === newListStudents[i].name);
                    newListStudents[i] = {...findedStudent};
                }
                // brisemo citav sadrzaj tabele
                await this.emptyTable(customazedName);
                // kreiramo istu tabelu sa azuriranom listom
                await this.createStudentsTable(newListStudents, customazedName);

            } else {
                alert('Predmet koji želite da ažurirate ne postoji u pristupnoj bazi.');
                return;
            }
        } catch(e) {
            alert('Nešto nije u redu sa sa bazom. Pokušajte ponov kasnije');
        }
    }
    // Metoda za brisenje fajla iz cloud storage-a
    async deleteFile(file, studentYear) {
        try {
            const fileName = file.name;
            // Get ref
            let storageRef = storage.ref();
            let fileRef = storageRef.child(`${studentYear}/${fileName}`)
            await fileRef.delete();
            return true
        } catch(e) {
            alert('Stari fajl se ne može izbrisati iz storage-a. Proces je zaustavljen. Provjerite da li fajl koji želite da ažurirate postoji u pristupnoj bazi.');
            return false;
        }
    }
};

//! Manipulacija sa localstorage-om
class LocalStore {
    setSourceInfo(payload, name) {
        // brisemo posojece podatke iz localstorage-a
        if(localStorage.getItem(name)) localStorage.removeItem(name);
        // kreiramo novi sa azuriranim podacima
        localStorage.setItem(name, JSON.stringify(payload));
    };
    // parametar koji se salje kao payload za svaki upit prema firestore-u
    getActiveSource() {
        let name = '';
        if(localStorage.getItem('sourceInfo')) name = JSON.parse(localStorage.getItem('sourceInfo')).source;   
        if(name !== '') name = name.toLocaleLowerCase().split(' ').join('-');
        return name;
    }

    //? Memory number 
    getMemoryNumber() {
        // todo: ako je ima da se returnuje
        let result = null;
        if (localStorage.getItem('memoryNumber')) result = JSON.parse(localStorage.getItem('memoryNumber'));

        return result;
    };
    setMemoryNumber(number) {
        // ako ne postoji u local storage-u
        if(!localStorage.getItem('memoryNumber')) {
            localStorage.setItem('memoryNumber', JSON.stringify(number));
        }
        // ako postoji ako nije isti
        else if(localStorage.getItem('memoryNumber') && JSON.parse(localStorage.getItem('memoryNumber')) != number) {
            // izbrisemo stari i dodamo novi orperty u local storage-u
            localStorage.removeItem('memoryNumber');
            localStorage.setItem('memoryNumber', JSON.stringify(number));
        }
    }
}