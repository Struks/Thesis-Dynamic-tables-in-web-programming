// klasa vezana za parametre i osnovne informacijec u tabeli
class Parameters {
    constructor(rowCount, colCount) { 
        this.rowCount = rowCount;
        this.colCount = colCount;
    };
    defaultTable(tableDiv) {
        let template = '';
        template = `
            <thead>
                <th class="index" scope="col">Index</th>
                <th class="number" scope="col">
                    <div class="cell-content"> 
                        Br
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="year" scope="col">
                    <div class="cell-content"> 
                        God
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="name" scope="col">
                    <div class="cell-content"> 
                        Prezime i ime
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="t1" scope="col">
                    <div class="cell-content"> 
                        T1
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="t2" scope="col">
                    <div class="cell-content"> 
                        T2
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="t3" scope="col">
                    <div class="cell-content"> 
                        T3
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="t4" scope="col">
                    <div class="cell-content"> 
                        T4
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="t5" scope="col">
                    <div class="cell-content"> 
                        T5
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="d1" scope="col">
                    <div class="cell-content"> 
                        D1
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="d2" scope="col">
                    <div class="cell-content"> 
                        D2
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="d3" scope="col">
                    <div class="cell-content"> 
                        D3
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="d4" scope="col">
                    <div class="cell-content"> 
                        D4
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="d5" scope="col">
                    <div class="cell-content"> 
                        D5
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="l1" scope="col">
                    <div class="cell-content"> 
                        L1
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="l2" scope="col">
                    <div class="cell-content"> 
                        L2
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="l3" scope="col">
                    <div class="cell-content"> 
                        L3
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="l4" scope="col">
                    <div class="cell-content"> 
                        L4
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="l5" scope="col">
                    <div class="cell-content"> 
                        L5
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="k1r" scope="col">
                    <div class="cell-content"> 
                    K1r
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="k1p" scope="col">
                    <div class="cell-content"> 
                    K1p
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="k2r" scope="col">
                    <div class="cell-content"> 
                    K2r
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="k2p" scope="col">
                    <div class="cell-content"> 
                    K2p
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="regular" scope="col">
                    <div class="cell-content"> 
                    Redovni ispit
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="corrective" scope="col">
                    <div class="cell-content"> 
                        Popravni ispit
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>

                <!-- Konacni rezultati -->
                <th class="t" scope="col">
                    <div class="cell-content"> 
                        Testovi
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="homeworks" scope="col">
                    <div class="cell-content"> 
                        Domaći
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="labs" scope="col">
                    <div class="cell-content"> 
                        Lab. vježbe
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="k1" scope="col">
                    <div class="cell-content"> 
                        Kol1
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="k2" scope="col">
                    <div class="cell-content"> 
                        Kol2
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="dkl" scope="col">
                    <div class="cell-content"> 
                        D+K+L
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="exam" scope="col">
                    <div class="cell-content"> 
                        Ispit
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="sum" scope="col">
                    <div class="cell-content"> 
                        Zbir
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="mark" scope="col">
                    <div class="cell-content"> 
                        Ocjena
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div> 
                    </div>
                </th>
                <th class="buttons" scope="col">Upravljanje</th>
                
            </thead>
            <tbody class="list" id="table-list">
                <tr class="tr tableRow">
                    <td id="index"></td>
                    <td contenteditable="true" id="number"></td>
                    <td contenteditable="true" id="year"></td>
                    <td contenteditable="true" id="name"></td>
                    <td contenteditable="true" class="aba" id="t1"></td>
                    <td contenteditable="true" id="t2"></td>
                    <td contenteditable="true" id="t3"></td>
                    <td contenteditable="true" id="t4"></td>
                    <td contenteditable="true" id="t5"></td>
                    <td contenteditable="true" id="d1"></td>
                    <td contenteditable="true" id="d2"></td>
                    <td contenteditable="true" id="d3"></td>
                    <td contenteditable="true" id="d4"></td>
                    <td contenteditable="true" id="d5"></td>
                    <td contenteditable="true" id="l1"></td>
                    <td contenteditable="true" id="l2"></td>
                    <td contenteditable="true" id="l3"></td>
                    <td contenteditable="true" id="l4"></td>
                    <td contenteditable="true" id="l5"></td>
                    <td contenteditable="true" id="k1r"></td>
                    <td contenteditable="true" id="k1p"></td>
                    <td contenteditable="true" id="k2r"></td>
                    <td contenteditable="true" id="k2p"></td>
                    <td contenteditable="true" id="regular"></td>
                    <td contenteditable="true" id="corrective"></td>
                    <td id="t"></td>
                    <td id="homeworks"></td>
                    <td id="labs"></td>
                    <td id="k1"></td>
                    <td id="k2"></td>
                    <td id="dkl"></td>
                    <td id="exam"></td>
                    <td id="sum"></td>
                    <td id="mark"></td>
                    <td class="removeAddRow" id="removeAddRow">
                        <span class="table-remove">
                            <button 
                                onClick="deleteStudent(this)" 
                                type="button" 
                                id="btnRemove"
                                class="btn btn-danger btn-rounded btn-sm my-0 btnRemove"
                            >UKLONITI</button>

                            <button 
                                onClick="addStudent(this)" 
                                type="button" 
                                id="btnAdd"
                                class="btn btn-secondary btn-rounded btn-sm my-0 btnAdd"
                            >DODATI</button>

                            <button 
                                onClick="updateStudent(this)" 
                                type="button" 
                                id="btnUpdate"
                                class="btn btn-secondary btn-rounded btn-sm my-0 btnUpdate"
                            >Sačuvati Izmjene</button>
                        </span>
                    </td>
                </tr>
            </tbody>
        `;
        tableDiv.children[0].innerHTML = template;
    };
    async currentData(page, records_per_page, data, table) {
        if(data.length) {
            // pagnation variables
            let btn_next = document.getElementById("btn_next");
            let btn_prev = document.getElementById("btn_prev");
            let page_span = document.getElementById("page");

            // validate page
            if (page < 1) page = 1;
            if (page > this.numPages(data, records_per_page)) page = this.numPages(data, records_per_page);

            let list = '';
            //* template trenutni je defaultni template 
            for (let i = (page - 1) * records_per_page; i < (page * records_per_page) && i < data.length; i++) {
                list += `
                <tr class="tr tableRow ${data[i].id}">
                    <td id="index">${data[i].index}</td>
                    <td contenteditable="true" id="number">${data[i].number}</td>
                    <td contenteditable="true" id="year">${data[i].year}</td>
                    <td contenteditable="true" id="name">${data[i].name}</td>
                    <td contenteditable="true" id="t1">${data[i].t1}</td>
                    <td contenteditable="true" id="t2">${data[i].t2}</td>
                    <td contenteditable="true" id="t3">${data[i].t3}</td>
                    <td contenteditable="true" id="t4">${data[i].t4}</td>
                    <td contenteditable="true" id="t5">${data[i].t5}</td>
                    <td contenteditable="true" id="d1">${data[i].d1}</td>
                    <td contenteditable="true" id="d2">${data[i].d2}</td>
                    <td contenteditable="true" id="d3">${data[i].d3}</td>
                    <td contenteditable="true" id="d4">${data[i].d4}</td>
                    <td contenteditable="true" id="d5">${data[i].d5}</td>
                    <td contenteditable="true" id="l1">${data[i].l1}</td>
                    <td contenteditable="true" id="l2">${data[i].l2}</td>
                    <td contenteditable="true" id="l3">${data[i].l3}</td>
                    <td contenteditable="true" id="l4">${data[i].l4}</td>
                    <td contenteditable="true" id="l5">${data[i].l5}</td>
                    <td contenteditable="true" id="k1r">${data[i].k1r}</td>
                    <td contenteditable="true" id="k1p">${data[i].k1p}</td>
                    <td contenteditable="true" id="k2r">${data[i].k2r}</td>
                    <td contenteditable="true" id="k2p">${data[i].k2p}</td>
                    <td contenteditable="true" id="regular">${data[i].regular}</td>
                    <td contenteditable="true" id="corrective">${data[i].corrective}</td>
                    <td id="t">${data[i].t}</td>
                    <td id="homeworks">${data[i].homeworks}</td>
                    <td id="labs">${data[i].labs}</td>
                    <td id="k1">${data[i].k1}</td>
                    <td id="k2">${data[i].k2}</td>
                    <td id="dkl">${data[i].dkl}</td>
                    <td id="exam">${data[i].exam}</td>
                    <td id="sum">${data[i].sum}</td>
                    <td id="mark">${data[i].mark}</td>
                    <td class="removeAddRow" id="removeAddRow">
                        <span class="table-remove">
                            <button 
                                onClick="deleteStudent(this)" 
                                type="button"
                                id="btnRemove"
                                class="btn btn-danger btn-rounded btn-sm my-0 btnRemove"
                            >UKLONITI</button>

                            <button 
                                onClick="addStudent(this)" 
                                type="button"
                                id="btnAdd"
                                class="btn btn-secondary btn-rounded btn-sm my-0 btnAdd"
                            >DODATI</button>

                            <button 
                                onClick="updateStudent(this)" 
                                type="button" 
                                id="btnUpdate"
                                class="btn btn-secondary btn-rounded btn-sm my-0 btnUpdate"
                            >Sačuvati Izmjene</button>
                        </span>
                    </td>
                </tr>
                `;
            }

            // upisavanja broja stranice u labelu
            page_span.innerHTML = page;

            // "prethodni" button disableujemo ako je stranica 1
            if (page == 1) {
                btn_prev.classList.add('no-more-prev');
            } else {
                btn_prev.classList.remove('no-more-prev');
            }

            // "sledeci" button disableujemo ako je stranica poslednja
            if (page == this.numPages(data, records_per_page)) {
                btn_next.classList.add('no-more-next');
            } else {
                btn_next.classList.remove('no-more-next');
            }
            
            // podatke jedne stranice ubacujemo u tabelu
            table.children[1].innerHTML = list;
        }
    }
    numPages(data, records_per_page) {
        // racunanje broja stranica za peginaciju
        return Math.ceil(data.length / records_per_page);
    }
    getNameColumns(columns) { //? za prvu tabelu u parametrima
        // imena kolona cije nam lokacije trebaju
        let columnWithIndex,
            columnWithYear,
            columnWithFullName;

        // rezultat funkcije
        let result = [];

        if(columns && columns.length) {
            for(let i = 0; i < columns.length; i++) {
                switch (columns[i].innerHTML) {
                    case 'Br':
                        columnWithIndex = i;
                        break;
                    case 'Prezime i ime':
                        columnWithFullName = i;
                        break;
                    case 'God':
                        columnWithYear = i;
                        break;
                    default:
                        break;
                }
            }
            result = { // pravimo objekt koji će biti rezultat funkcije 
                columnWithIndex: columnWithIndex,
                columnWithYear: columnWithYear,
                columnWithFullName: columnWithFullName
            }
        } else {
            result = null;
        }

        // console.log('result', result);
    };
    // prikaz 'DODATI/UKLONITI/Sacuvati Izmjene' buttona na prilikom prazne ili tabele sa prikazanim studentima
    defaultButtons(buttons, showButtons) { 
        if(showButtons == 'add') {
            // add buttons
            for(let i = 0; i < buttons.addButtons.length; i++) {
                buttons.addButtons[i].style = "display: inheir";
            }
            // remove buttons
            for(let i = 0; i < buttons.removeButtons.length; i++) {
                buttons.removeButtons[i].style = "display: none";
            } 
            // update buttons
            for(let i = 0; i < buttons.updateButtons.length; i++) {
                buttons.updateButtons[i].style = "display: none";
            }
        } else if(showButtons == 'remove') {
            // add buttons
            for(let i = 0; i < buttons.addButtons.length; i++) {
                buttons.addButtons[i].style = "display: none";
            }
            // remove buttons
            for(let i = 0; i < buttons.removeButtons.length; i++) {
                buttons.removeButtons[i].style = "display: inheir";
            }
            // update buttons
            for(let i = 0; i < buttons.updateButtons.length; i++) {
                buttons.updateButtons[i].style = "display: none";
            }
        } else if(showButton == 'update') {
            // add buttons
            for(let i = 0; i < buttons.addButtons.length; i++) {
                buttons.addButtons[i].style = "display: none";
            }
            // remove buttons
            for(let i = 0; i < buttons.removeButtons.length; i++) {
                buttons.removeButtons[i].style = "display: none";
            }
            // update buttons
            for(let i = 0; i < buttons.updateButtons.length; i++) {
            }
        }
    };
    setRowButton(row, button) {
        const childElementCount = row.childElementCount;
        let buttons = row.children[childElementCount - 1].children[0].children;
        switch(button) {
            case 'delete':
                buttons[0].style = 'display: inheir';
                buttons[1].style = 'display: none';
                buttons[2].style = 'display: none';
                break;
            case 'add':
                buttons[0].style = 'display: none';
                buttons[1].style = 'display: inheir';
                buttons[2].style = 'display: none';
                break;
            case 'update':
                buttons[0].style = 'display: none';
                buttons[1].style = 'display: none';
                buttons[2].style = 'display: inheir';
                break;
        }
    };
    writeStudentResults(results, row) {
        try {
            // potraga za kolonama i upisiavanje vrijednosti u njima
            for(let i = 0; i < row.children.length - 1; i++) {
                let id = row.children[i].id

                // posto property za svaku kolonu ima isti naziv kao i id te kolone 
                // onda informacije iz "results" svakoj koloni dodajemo na sl nacin:
                if(results[id] !== row.children[i].innerText) row.children[i].innerText = results[id];
            }
        } catch(error) {
            console.log(error);
        }

    }

    //* Dodavanje vrste za upis studenta
    setRow(tbody) {
        // insert row
        let newRow = tbody.insertRow();
        
        // dodijeljivanje klasa vrsti
        const classList = ['tr', 'tableRow'];
        newRow.classList.add(...classList);
        console.log('ps', tbody.rows[tbody.rows.length - 2]);
        const lastExistRow = Array.from(tbody.rows[tbody.rows.length - 2].children) // uzimamo poslednju postojecu kolonu
        console.log('array', lastExistRow);
        
        // novoj vrsti dodajemo sve kolone prethodne vrste, s tim da su vriejdnosti '',
        // osim poslednje kolone gdje se nalaze buttoni.
        for(let i = 0; i < lastExistRow.length; i++) {
            const column = lastExistRow[i];

            if(i === lastExistRow.length - 1) {
                // ako je poslednja kolona "BUTTON" kolona, onda uzimamo nepromjenjenu kolonu
                let newCell = newRow.insertCell();
                newCell.setAttribute('contentEditable', column.contentEditable);
                newCell.setAttribute('id', column.id);
                newCell.classList.add('removeAddRow');

                newCell.innerHTML = `
                    <span class="table-remove">
                        <button 
                            onClick="deleteStudent(this)" 
                            type="button"
                            id="btnRemove"
                            class="btn btn-danger btn-rounded btn-sm my-0 btnRemove"
                        >UKLONITI</button>

                        <button 
                            onClick="addStudent(this)" 
                            type="button"
                            id="btnAdd"
                            class="btn btn-secondary btn-rounded btn-sm my-0 btnAdd"
                        >DODATI</button>

                        <button 
                            onClick="updateStudent(this)" 
                            type="button" 
                            id="btnUpdate"
                            class="btn btn-secondary btn-rounded btn-sm my-0 btnUpdate" 
                        >Sačuvati Izmjene</button>
                    </span>
                `;

            } else {

                let newCell = newRow.insertCell();
                newCell.setAttribute('contentEditable', column.contentEditable);
                newCell.setAttribute('id', column.id);
                newCell.style.display = column.style.display;
                newCell.innerHTML = '';
                newCell.innerText = '';
            }
        }

        newRow.children[1].focus();
    
    };

    //* Metoda za dodavanje vrijednostima checkboxova u popup-u
    setColumnsCheckboxValue() {
        // template checkboxes
        const templateColumns = document.querySelectorAll('.additationsColumns');
        // localstorage value of checkboxex
        const getColumnsValue = JSON.parse(localStorage.getItem('getColumns'));

        // vrijednosti iz localstorage-a prepisujemo vrijednostima iz template-a.
        for(let column in getColumnsValue) {
            // pronalazenje pravog checkboxa
            let columnFromTemplate = null;
            templateColumns.forEach(element => {
                if(element.name === column) {
                    columnFromTemplate = element;
                }
            })
            // dodavanje vrijednosti pronadjenom checkboxu
            if(columnFromTemplate.name === column) {
                // debugger
                columnFromTemplate.value = getColumnsValue[column];
                columnFromTemplate.checked = getColumnsValue[column];
            }
        }
    };

    //* Metoda za prikaz kolona na glavnoj tabeli koje smo odabrali/ ili nismo u popup-u "Kolone"
    setTableColumnView(table, changeColumn = null) {
        //* variables
        const tableId = table.id
        const getColumnsValue = JSON.parse(localStorage.getItem('getColumns'));
        const columnsHead = table.getElementsByTagName('th');
        // varijabla koja nam govori koliko poslednjih kolona u tabeli ne uzimamo u razmatranje
        let lastColumnsCount;
        if(tableId === 'statistics-table') lastColumnsCount = 3;
        else lastColumnsCount = 5;

        //! Logika za prikaz CORE kolona: D,L,T,K2 
        //* Prvo cemo razmotri da li rezultantne kolone ostaju ili se macinjaju (D, T i K2) (jedan od nacina)
        let homeWorks,
            tests,
            labs,
            kol2,
            kol1;

        // definisemo trazene kolone
        for(let i = 0; i < columnsHead.length - lastColumnsCount; i++) { // 5 poslednjih kolona je ubrajamo jer su one staticne
            if(columnsHead[i].className === 'homeworks') {
                homeWorks = columnsHead[i];
            } else if(columnsHead[i].className === 't') {
                tests = columnsHead[i];
            } else if(columnsHead[i].className === 'labs') {
                labs = columnsHead[i];
            } else if(columnsHead[i].className === 'k2') {
                kol2 = columnsHead[i];
            } else if(columnsHead[i].className === 'k1') {
                kol1 = columnsHead[i];
            }
        }

        //* Ako i jedna kolona koja ulazi u proracun navedenih kolona se prikazuje u tabeli navedene kolona ostaje vidljiva
        // domaci
        const homeworksCells = table.querySelectorAll('#homeworks')
        if(getColumnsValue.d1 === true || getColumnsValue.d2 === true || getColumnsValue.d3 === true ||
           getColumnsValue.d4 === true || getColumnsValue.d5 === true) {
            // head cell
            homeWorks.style.display = "table-cell";
            // all other cells
            for(let i = 0; i < homeworksCells.length; i++) {
                homeworksCells[i].style.display = "table-cell";
            }
        } else {
            // head cell
            homeWorks.style.display = "none";
            // all other cells
            for(let i = 0; i < homeworksCells.length; i++) {
                homeworksCells[i].style.display = "none";
            }
        }
        // test
        const testsCells = table.querySelectorAll('#t')
        if(getColumnsValue.t1 === true || getColumnsValue.t2 === true || getColumnsValue.t3 === true ||
           getColumnsValue.t4 === true || getColumnsValue.t5 === true) {
            // head cell
            tests.style.display = "table-cell";
            // all other cells
            for(let i = 0; i < testsCells.length; i++) {
                testsCells[i].style.display = "table-cell";
                // console.log(testsCells[i].innerHTML);
            }
        } else {
            // head cell
            tests.style.display = "none";
            // all other cells
            for(let i = 0; i < testsCells.length; i++) {
                testsCells[i].style.display = "none";
            }
        }
        // labaratorije
        const labsCells = table.querySelectorAll('#labs')
        if(getColumnsValue.l1 === true || getColumnsValue.l2 === true || getColumnsValue.l3 === true ||
           getColumnsValue.l4 === true || getColumnsValue.l5 === true) {
            // head cell
            labs.style.display = "table-cell";
            // all other cells
            for(let i = 0; i < labsCells.length; i++) {
                labsCells[i].style.display = "table-cell";
            }
        } else {
            // head cell
            labs.style.display = "none";
            // all other cells
            for(let i = 0; i < labsCells.length; i++) {
                labsCells[i].style.display = "none";
            }
        }
        // 1. kolovijum
        const kol1Cells = table.querySelectorAll('#k1')
        if(getColumnsValue.k1p === true || getColumnsValue.k1r === true ) {
            // head cell
            kol1.style.display = "table-cell";
            // all other cells
            for(let i = 0; i < kol1Cells.length; i++) {
                kol1Cells[i].style.display = "table-cell";
            }
        } else {
            // head cell
            kol1.style.display = "none";
            // all other cells
            for(let i = 0; i < kol1Cells.length; i++) {
                kol1Cells[i].style.display = "none";
            }
        }
        // 2. kolokvijum
        const kol2Cells = table.querySelectorAll('#k2')
        if(getColumnsValue.k2p === true || getColumnsValue.k2r === true ) {
            // head cell
            kol2.style.display = "table-cell";
            // all other cells
            for(let i = 0; i < kol2Cells.length; i++) {
                kol2Cells[i].style.display = "table-cell";
            }
        } else {
            // head cell
            kol2.style.display = "none";
            // all other cells
            for(let i = 0; i < kol2Cells.length; i++) {
                kol2Cells[i].style.display = "none";
            }
        }

        //! Logika za citanje vrijednosti iz localstoage-a i prikaz kolona iz pop up-a

        //* Poziv metode klikom na checkbox u Dialogu 
        if(changeColumn) {
            let cellsOfColumn = table.querySelectorAll(`#${changeColumn.name}`);
            if(changeColumn.value === false) {
                // Brisanje Head kolone
                table.getElementsByClassName(changeColumn.name)[0].style.display = 'none'

                // Brisanje svih polja u koloni
                for(let i = 0; i < cellsOfColumn.length; i++) {
                    cellsOfColumn[i].style.display = 'none';
                }
            } else {
                // Dodavanje Head kolone
                table.getElementsByClassName(changeColumn.name)[0].style.display = 'table-cell'
                // Dodavanje svih polja u koloni
                for(let i = 0; i < cellsOfColumn.length; i++) {
                    cellsOfColumn[i].style.display = 'table-cell';
                }
            }

        } 
        //* Poziv metode na load stranice table.html 
        else {
            // ako je kolona u localstorage-u na false u templatu joj dajemo display: none
            for(let column in getColumnsValue) {
                // debugger;
                if(getColumnsValue[column] === false) {
                    // brisanje Head kolone
                    table.getElementsByClassName(column)[0].style.display = 'none';
                    
                    // brisanje svih polja u koloni
                    let columnForAllStudent = table.querySelectorAll(`#${column}`);
                    for(let i = 0; i < columnForAllStudent.length; i++) {
                        columnForAllStudent[i].style.display = 'none';
                    }
                }
            }
        }   
    }

    // metoda za sortiranje tabele asc i desc order
    sortTable(tables, order, targetCol) {
        // todo: Metoda za sortiranje tabele:
        // todo: https://www.educba.com/bootstrap-sort-table/


        let sort, i, x, y, tableSort;

        // tables = document.getElementById('primary-table');

        //? The while loop is used for sorting data until this table rows do not end.
        sort = true;
        while(sort) {
            sort = false;
            let tblrow = tables.rows;

            //? The “for loop” is used for sorting table row without going through the header row of the table.
            for(i = 1; i < tblrow.length - 1; i++) {
                tableSort = false;

                //? Two elements use for comparing for sorting content as per if statement and condition.
                
                x = Array.from(tblrow[i].getElementsByTagName('td')).find(m => m.id === targetCol);

                if(x) {
                    // numericka pozicija targetovane kolone u vrsti
                    const xIndex = x.cellIndex;
    
                    y = tblrow[i + 1].getElementsByTagName('td')[xIndex];
    
                    // sortiranje se vrsi na dva nacina: opadajuce i rastucem poretku
                    // u zavisnosti na koju ikonicu kliknemo dobicemo odgvarajuci poredak
                    if(order === 'asc') {
                        // vrijednost konverujemo broj osim ako nije ime i ocjena(mark)
                        if(targetCol !== 'name' && targetCol !== 'mark') {
                            if(Number(x.innerHTML) > Number(y.innerHTML)) {
                                tableSort = true;
                                break;
                            }    
                        } else {
                            if(x.innerHTML.toUpperCase() > y.innerHTML.toUpperCase()) {
                                tableSort = true;
                                break;
                            }
                        }
                    } else if(order === 'desc') {
                        // vrijednost konverujemo broj osim ako nije ime i ocjena(mark)
                        if(targetCol !== 'name' && targetCol !== 'mark') {
                            if(Number(x.innerHTML) < Number(y.innerHTML)) {
                                tableSort = true;
                                break;
                            }    
                        } else {
                            if(x.innerHTML.toUpperCase() < y.innerHTML.toUpperCase()) {
                                tableSort = true;
                                break;
                            }
                        }
                    }
                }
            }   

            //? The “if statement” and sort variable become true because of sorting content completed till the last row.
            if(tableSort) {
                tblrow[i].parentNode.insertBefore(tblrow[i + 1], tblrow[i]);
                
                sort = true;
            }
        }
    }

    //! Obrazac tabele
    setPdfTableContent(tableForm, students, infoObject = null) {
        // getColumns from localstorage
        const getColumns = JSON.parse(localStorage.getItem('getColumns'));
        // inicijalizacija promjenjivih koje su nam potrebne za krairanje head tabele
        let homeworkCount = 0,
            testsCount = 0,
            labsCount = 0,
            k2Count = 0;

        // provjeravamo koje provjere znanja ukljucujemo u tabelu
        for(let property in getColumns) {
            if(property.includes('d') && getColumns[property] === true) {
                homeworkCount += 1;
            } else if(property.includes('t') && getColumns[property] === true) {
                testsCount += 1;
            } else if(property.includes('l') && getColumns[property] === true) {
                labsCount += 1;
            } else if(property.includes('k2r') && getColumns[property] === true) {
                k2Count += 1;
            }
        }

        //* Obrazac 1 template
        // todo: interesantan kod za diplomski rad 
        if(tableForm === 'obr1') {
            // postavljamo odgovarajuci parent div
            document.getElementById('obr-table').style.display = 'table';
            document.getElementById('obr-multiTable').style.display = 'none';

            //* Head tabele: nazivi kolona 
            let theadTemplate = `
                    <tr>
                        <th rowspan='3'>Redni broj</th>
                        <th rowspan='3'>Evidencioni broj</th>
                        <th rowspan='3'>Ime i Prezime studenta</th>
                        <th colspan='${2 + 1 + k2Count + labsCount + testsCount + homeworkCount}'>Broj osvojenih poena za svaki oblik provjere znanja studenta</th>
                        <th rowspan='3'>Ukupan broj poena</th>
                        <th rowspan='3'>Predlog ocjene</th>
                    </tr>
                    <tr>
                        <th id="homeworkCount" colspan='${homeworkCount}'>Domaći zadaci</th>
                        <th id="testsCount" colspan='${testsCount}'>Testovi</th>
                        <th id="labsCount" colspan='${labsCount}'>Labaratorijske vježbe</th>
                        <th colspan='${1 + k2Count}'>Kolokvijumi</th>
                        <th colspan='2'>Završni ispit</th>
                    </tr>
                    <tr>
                        <th id="d1">I</th>
                        <th id="d2">II</th>
                        <th id="d3">II</th>
                        <th id="d4">IV</th>
                        <th id="d5">V</th>

                        <th id="t1">I</th>
                        <th id="t2">II</th>
                        <th id="t3">II</th>
                        <th id="t4">IV</th>
                        <th id="t5">V</th>

                        <th id="l1">I</th>
                        <th id="l2">II</th>
                        <th id="l3">II</th>
                        <th id="l4">IV</th>
                        <th id="l5">V</th>

                        <th id="k1">I</th>
                        <th id="k2">II</th>

                        <th>Redovni</th>
                        <th>Popravni</th>
                    </tr>
            `;
            const table = document.getElementById('obr-table');
            // resetujemo content tabele
            table.children[0].innerHTML = '';
            table.children[1].innerHTML = '';
            // popunjavanje tabele templateom koji smo kreirali iznad
            table.children[0].innerHTML = theadTemplate;

            //* Body tabele: dodavanje studenata
            if(students && students.length) {
                // dodajemo studente u tabelu
                students.forEach((student, index) => {
                    let evaluation = '';
                    switch(student.mark) {
                        case 'F':
                            evaluation = 'nedovoljan';
                            break;
                        case 'E':
                            evaluation = 'dovoljan';
                            break;
                        case 'D':
                            evaluation = 'zadovoljavajući';
                            break;
                        case 'C':
                            evaluation = 'dobar';
                            break;
                        case 'B':
                            evaluation = 'vrlodobar';
                            break;
                        case 'A':
                            evaluation = 'odličan';
                            break;
                    }
                    // pisemo template za novu vrstu
                    let rowTemplate = `
                        <td class="count">${index + 1 || ''}</td>
                        <td class="index" id="index">${student.index || ''}</td>
                        <td class="name">${student.name || ''}</td>

                        <td class="d1">${student.d1 || ''}</td>
                        <td class="d2">${student.d2 || ''}</td>
                        <td class="d3">${student.d3 || ''}</td>
                        <td class="d4">${student.d4 || ''}</td>
                        <td class="d5">${student.d5 || ''}</td>
                        
                        <td class="t1">${student.t1 || ''}</td>
                        <td class="t2">${student.t2 || ''}</td>
                        <td class="t3">${student.t3 || ''}</td>
                        <td class="t4">${student.t4 || ''}</td>
                        <td class="t5">${student.t5 || ''}</td>

                        <td class="l1">${student.l1 || ''}</td>
                        <td class="l2">${student.l2 || ''}</td>
                        <td class="l3">${student.l3 || ''}</td>
                        <td class="l4">${student.l4 || ''}</td>
                        <td class="l5">${student.l5 || ''}</td>

                        <td>${student.k1 || ''}</td>
                        <td class="k2Count">${student.k2 || ''}</td>

                        <td>${student.regular || ''}</td>
                        <td>${student.corrective || ''}</td>

                        <td>${student.sum || ''}</td>

                        <td>${student.mark} (${evaluation})</td>

                    `;
                    // vrstu ubacujemo u body tabele(tbody)
                    let newRow = table.children[1].insertRow();
                    // ubacujemo template u vrstu
                    newRow.innerHTML = rowTemplate;

                    //* Eliminisemo kolone(provjere znanja) koje u predmetu nisu koriscene
                    //domaci
                    for(let i = 5; i > homeworkCount; i--) {
                        // body kolona
                        newRow.querySelector(`.d${i}`).style.display = 'none';
                    }
                    //testovi
                    for(let i = 5; i > testsCount; i--) {
                        // body kolona
                        newRow.querySelector(`.t${i}`).style.display = 'none';
                    }
                    //labaratorije
                    for(let i = 5; i > labsCount; i--) {
                        // body kolona
                        newRow.querySelector(`.l${i}`).style.display = 'none';
                    }
                    // drugi kolokvijum
                    if(k2Count === 0) newRow.querySelector('.k2Count').style.display = 'none';
                })
            }

            //* Eliminisemo kolone(provjere znanja) koje u predmetu nisu koriscene
            //domaci
            for(let i = 5; i > homeworkCount; i--) {
                // head kolona
                table.querySelector(`#d${i}`).style.display = 'none';
            }
            if(homeworkCount === 0) table.querySelector('#homeworkCount').style.display = 'none';
            // testovi
            console.log('table', table);
            for(let i = 5; i > testsCount; i--) {
                // head kolona
                table.querySelector(`#t${i}`).style.display = 'none';
            }
            if(testsCount === 0) table.querySelector('#testsCount').style.display = 'none';
            // labaratorije
            for(let i = 5; i > labsCount; i--) {
                // head kolona
                table.querySelector(`#l${i}`).style.display = 'none';
                // body kolona
                table.querySelector(`.l${i}`).style.display = 'none';
            }
            if(labsCount === 0) table.querySelector('#labsCount').style.display = 'none';
            // drugi kolokvijum
            if(k2Count === 0) table.querySelector('#k2').style.display = 'none';
        } 
        //* Obrazac 2 template
        else if(tableForm === 'obr2') {
            // postavljamo odgovarajuci parent div
            document.getElementById('obr-table').style.display = 'table';
            document.getElementById('obr-multiTable').style.display = 'none';

            //* Head tabele: nazivi kolona 
            let theadTemplate = `
                <tr>
                    <th rowspan="2">Redni broj</th>
                    <th rowspan="2">Evidencioni broj</th>
                    <th rowspan="2">Ime i Prezime studenta</th>
                    <th colspan="2">Broj osvojenih poena</th>
                    <th rowspan="2">Ukupan broj poena</th>
                    <th rowspan="2">Predlog ocjene</th>
                </tr>
                <tr>
                    <th>U toku semestra</th>
                    <th>Na završnom ispitu</th>
                </tr>
            `;
            const table = document.getElementById('obr-table');
            // resetujemo content tabele
            table.children[0].innerHTML = '';
            table.children[1].innerHTML = '';
            // popunjavanje tabele templateom koji smo kreirali iznad
            table.children[0].innerHTML = theadTemplate;

            //* Body tabele: dodavanje studenata
            if(students && students.length) {
                students.forEach((student, index) => {
                    let evaluation = '';
                    switch(student.mark) {
                        case 'F':
                            evaluation = 'nedovoljan';
                            break;
                        case 'E':
                            evaluation = 'dovoljan';
                            break;
                        case 'D':
                            evaluation = 'zadovoljavajući';
                            break;
                        case 'C':
                            evaluation = 'dobar';
                            break;
                        case 'B':
                            evaluation = 'vrlodobar';
                            break;
                        case 'A':
                            evaluation = 'odličan';
                            break;
                    }
                    // pisemo template za novu vrstu
                    let rowTemplate = `
                    <td>${index + 1 || ''}</td>
                    <td id="index">${student.index || ''}</td>
                    <td>${student.name || ''}</td>
                    <td>${student.dkl || ''}</td>
                    <td>${student.exam || ''}</td>
                    <td>${student.sum || ''}</td>
                    <td>${student.mark} (${evaluation})</td>
                    `;

                    // vrstu ubacujemo u body tabele(tbody)
                    let newRow = table.children[1].insertRow();
                    // ubacujemo template u vrstu
                    newRow.innerHTML = rowTemplate;
                });
            }
        }
        //* Obrazac 3 i 4 template
        else if(tableForm === 'obr3' || tableForm === 'obr4') {
            // postavljamo odgovarajuci parent div
            document.getElementById('obr-table').style.display = 'none';
            document.getElementById('obr-multiTable').style.display = 'flex';
            document.querySelector('.table-info').style.display = 'none';

            // broj grupa, odnosno broj tabela
            const tableCount =  infoObject ? infoObject.groups.length : 0;
            
            const parentDiv = document.getElementById('obr-multiTable');
            
            //* Head tabele: nazivi kolona
            // kreiramo vise tabela u div
            for(let i = 0; i < tableCount; i ++) {
                let theadTemplate = `
                    <tr>
                        <th colspan="3">Grupa ${i + 1} -- ${infoObject.groups.length ? infoObject.groups[i].hallName: ''} - ${infoObject.groups.length ? infoObject.groups[i].startTime : ''}</th>
                    </tr>
                    <tr>
                        <th>r.b.</th>
                        <th>Index</th>
                        <th>Ime i Prezime</th>
                    </tr>
                `;
                // kreiramo tabelu
                let newTable = document.createElement('table');
                newTable.className = `table table-bordered table-xl m-3 orb-table orb-table__${i}`

                // kreiramo thead tabele
                let tableHead = document.createElement('thead');
                tableHead.innerHTML = theadTemplate;

                // ubacimo thead u table
                newTable.appendChild(tableHead);

                // ubacujemo tabelu i parent div
                parentDiv.appendChild(newTable);
            }

            //* Body tabele: dodavanje studenata
            if(students && students.length) {
                const maxStudentsPerTable = infoObject ? infoObject.maxStudentsPerHall : null;
                const tableCount = parentDiv.children.length;

                // na nivou tabele
                // todo: interesantan kod za diplomski
                //? popunjavanje proizvojan broj tabela sa studentima ciji se niz nastavlja sa jedne na drugu tabelu
                for(let i = 0; i < tableCount; i ++) {
                    const table = parentDiv.children[i];
                    // kreiramo tbody
                    let tbody = document.createElement('tbody');
                    table.appendChild(tbody);
                    // popunjavamo tabelu vrstama
                    for(let j = maxStudentsPerTable * i ; j < maxStudentsPerTable * (i + 1); j ++) {
                        let rowTemplate = `
                            <td>${j + 1}</td>
                            <td>${students[j].index}</td>
                            <td>${students[j].name}</td>
                        `;
                        // vrstu ubacujemo u body tabele(tbody)
                        let newRow = table.children[1].insertRow();
                        // ubacujemo template u vrstu
                        newRow.innerHTML = rowTemplate;
                    }
                }

            }

            // todo: ispraviti format datuma pocetka testa/kolokvijuma
        }

    }

    //! Statistika
    // current stastistic table
    currentStatisticsTable(table, statsData) {
        console.log(statsData);
        let template = ''
        template = `
            <thead>
                <th class="rowName" scope="col"></th>
                <th class="t1" scope="col">T1</th>
                <th class="t2" scope="col">T2</th>
                <th class="t3" scope="col">T3</th>
                <th class="t4" scope="col">T4</th>
                <th class="t5" scope="col">T5</th>
                <th class="d1" scope="col">D1</th>
                <th class="d2" scope="col">D2</th>
                <th class="d3" scope="col">D3</th>
                <th class="d4" scope="col">D4</th>
                <th class="d5" scope="col">D5</th>
                <th class="l1" scope="col">L1</th>
                <th class="l2" scope="col">L2</th>
                <th class="l3" scope="col">L3</th>
                <th class="l4" scope="col">L4</th>
                <th class="l5" scope="col">L5</th>
                <th class="k1r" scope="col">K1r</th>
                <th class="k1p" scope="col">K1p</th>
                <th class="k2r" scope="col">K2r</th>
                <th class="k2p" scope="col">K2p</th>
                <th class="regular" scope="col">Redovni ispit</th>
                <th class="corrective" scope="col">Popravni ispit</th>

                <!-- Konacni rezultati -->
                <th class="t" scope="col">Testovi</th>
                <th class="homeworks" scope="col">Domaći</th>
                <th class="labs" scope="col">Lab. vježbe</th>
                <th class="k1" scope="col">Kol1</th>
                <th class="k2" scope="col">Kol2</th>
                <th class="dkl" scope="col">D+K+L</th>
                <th class="exam" scope="col">Ispit</th>
                <th class="sum" scope="col">Zbir</th>
                <th class="mark" scope="col">Ocjena</th>
            </thead>
            <tbody class="list" id="table-list">
            <tr class="tr tableRow number-of-students">
                <td id="statistics-name">Broj studenata</td>
                <td id="t1">${this.cellNumberFormat(statsData.studentNumber.t1)}</td>
                <td id="t2">${this.cellNumberFormat(statsData.studentNumber.t2)}</td>
                <td id="t3">${this.cellNumberFormat(statsData.studentNumber.t3)}</td>
                <td id="t4">${this.cellNumberFormat(statsData.studentNumber.t4)}</td>
                <td id="t5">${this.cellNumberFormat(statsData.studentNumber.t5)}</td>
                <td id="d1">${this.cellNumberFormat(statsData.studentNumber.d1)}</td>
                <td id="d2">${this.cellNumberFormat(statsData.studentNumber.d2)}</td>
                <td id="d3">${this.cellNumberFormat(statsData.studentNumber.d3)}</td>
                <td id="d4">${this.cellNumberFormat(statsData.studentNumber.d4)}</td>
                <td id="d5">${this.cellNumberFormat(statsData.studentNumber.d5)}</td>
                <td id="l1">${this.cellNumberFormat(statsData.studentNumber.l1)}</td>
                <td id="l2">${this.cellNumberFormat(statsData.studentNumber.l2)}</td>
                <td id="l3">${this.cellNumberFormat(statsData.studentNumber.l3)}</td>
                <td id="l4">${this.cellNumberFormat(statsData.studentNumber.l4)}</td>
                <td id="l5">${this.cellNumberFormat(statsData.studentNumber.l5)}</td>
                <td id="k1r">${this.cellNumberFormat(statsData.studentNumber.k1r)}</td>
                <td id="k1p">${this.cellNumberFormat(statsData.studentNumber.k1p)}</td>
                <td id="k2r">${this.cellNumberFormat(statsData.studentNumber.k2r)}</td>
                <td id="k2p">${this.cellNumberFormat(statsData.studentNumber.k2p)}</td>
                <td id="regular">${this.cellNumberFormat(statsData.studentNumber.regular)}</td>
                <td id="corrective">${this.cellNumberFormat(statsData.studentNumber.corrective)}</td>
                <td id="t">${this.cellNumberFormat(statsData.studentNumber.t)}</td>
                <td id="homeworks">${this.cellNumberFormat(statsData.studentNumber.homeworks)}</td>
                <td id="labs">${this.cellNumberFormat(statsData.studentNumber.labs)}</td>
                <td id="k1">${this.cellNumberFormat(statsData.studentNumber.k1)}</td>
                <td id="k2">${this.cellNumberFormat(statsData.studentNumber.k2)}</td>
                <td id="dkl">${this.cellNumberFormat(statsData.studentNumber.dkl)}</td>
                <td id="exam">${this.cellNumberFormat(statsData.studentNumber.exam)}</td>
                <td id="sum">${this.cellNumberFormat(statsData.studentNumber.sum)}</td>
                <td id="mark">${this.cellNumberFormat(statsData.studentCount)}</td>
            </tr>

            <tr class="tr tableRow percentage">
                <td id="statistics-name">Procenat</td>
                <td id="t1">${this.cellNumberFormat(statsData.percentage.t1)}%</td>
                <td id="t2">${this.cellNumberFormat(statsData.percentage.t2)}%</td>
                <td id="t3">${this.cellNumberFormat(statsData.percentage.t3)}%</td>
                <td id="t4">${this.cellNumberFormat(statsData.percentage.t4)}%</td>
                <td id="t5">${this.cellNumberFormat(statsData.percentage.t5)}%</td>
                <td id="d1">${this.cellNumberFormat(statsData.percentage.d1)}%</td>
                <td id="d2">${this.cellNumberFormat(statsData.percentage.d2)}%</td>
                <td id="d3">${this.cellNumberFormat(statsData.percentage.d3)}%</td>
                <td id="d4">${this.cellNumberFormat(statsData.percentage.d4)}%</td>
                <td id="d5">${this.cellNumberFormat(statsData.percentage.d5)}%</td>
                <td id="l1">${this.cellNumberFormat(statsData.percentage.l1)}%</td>
                <td id="l2">${this.cellNumberFormat(statsData.percentage.l2)}%</td>
                <td id="l3">${this.cellNumberFormat(statsData.percentage.l3)}%</td>
                <td id="l4">${this.cellNumberFormat(statsData.percentage.l4)}%</td>
                <td id="l5">${this.cellNumberFormat(statsData.percentage.l5)}%</td>
                <td id="k1r">${this.cellNumberFormat(statsData.percentage.k1r)}%</td>
                <td id="k1p">${this.cellNumberFormat(statsData.percentage.k1p)}%</td>
                <td id="k2r">${this.cellNumberFormat(statsData.percentage.k2r)}%</td>
                <td id="k2p">${this.cellNumberFormat(statsData.percentage.k2p)}%</td>
                <td id="regular">${this.cellNumberFormat(statsData.percentage.regular)}%</td>
                <td id="corrective">${this.cellNumberFormat(statsData.percentage.corrective)}%</td>
                <td id="t">${this.cellNumberFormat(statsData.percentage.t)}%</td>
                <td id="homeworks">${this.cellNumberFormat(statsData.percentage.homeworks)}%</td>
                <td id="labs">${this.cellNumberFormat(statsData.percentage.labs)}%</td>
                <td id="k1">${this.cellNumberFormat(statsData.percentage.k1)}%</td>
                <td id="k2">${this.cellNumberFormat(statsData.percentage.k2)}%</td>
                <td id="dkl">${this.cellNumberFormat(statsData.percentage.dkl)}%</td>
                <td id="exam">${this.cellNumberFormat(statsData.percentage.exam)}%</td>
                <td id="sum">${this.cellNumberFormat(statsData.percentage.sum)}%</td>
                <td id="mark"></td>
            </tr>

            <tr class="tr tableRow max-points">
                <td id="statistics-name">Maksimalno bodova</td>
                <td contenteditable="true" id="t1">${this.cellNumberFormat(statsData.maxPoints.t1)}</td>
                <td contenteditable="true" id="t2">${this.cellNumberFormat(statsData.maxPoints.t2)}</td>
                <td contenteditable="true" id="t3">${this.cellNumberFormat(statsData.maxPoints.t3)}</td>
                <td contenteditable="true" id="t4">${this.cellNumberFormat(statsData.maxPoints.t4)}</td>
                <td contenteditable="true" id="t5">${this.cellNumberFormat(statsData.maxPoints.t5)}</td>
                <td contenteditable="true" id="d1">${this.cellNumberFormat(statsData.maxPoints.d1)}</td>
                <td contenteditable="true" id="d2">${this.cellNumberFormat(statsData.maxPoints.d2)}</td>
                <td contenteditable="true" id="d3">${this.cellNumberFormat(statsData.maxPoints.d3)}</td>
                <td contenteditable="true" id="d4">${this.cellNumberFormat(statsData.maxPoints.d4)}</td>
                <td contenteditable="true" id="d5">${this.cellNumberFormat(statsData.maxPoints.d5)}</td>
                <td contenteditable="true" id="l1">${this.cellNumberFormat(statsData.maxPoints.l1)}</td>
                <td contenteditable="true" id="l2">${this.cellNumberFormat(statsData.maxPoints.l2)}</td>
                <td contenteditable="true" id="l3">${this.cellNumberFormat(statsData.maxPoints.l3)}</td>
                <td contenteditable="true" id="l4">${this.cellNumberFormat(statsData.maxPoints.l4)}</td>
                <td contenteditable="true" id="l5">${this.cellNumberFormat(statsData.maxPoints.l5)}</td>
                <td contenteditable="true" id="k1r">${this.cellNumberFormat(statsData.maxPoints.k1r)}</td>
                <td contenteditable="true" id="k1p">${this.cellNumberFormat(statsData.maxPoints.k1p)}</td>
                <td contenteditable="true" id="k2r">${this.cellNumberFormat(statsData.maxPoints.k2r)}</td>
                <td contenteditable="true" id="k2p">${this.cellNumberFormat(statsData.maxPoints.k2p)}</td>
                <td contenteditable="true" id="regular">${this.cellNumberFormat(statsData.maxPoints.regular)}</td>
                <td contenteditable="true" id="corrective">${this.cellNumberFormat(statsData.maxPoints.corrective)}</td>
                <td contenteditable="true" id="t">${this.cellNumberFormat(statsData.maxPoints.t)}</td>
                <td contenteditable="true" id="homeworks">${this.cellNumberFormat(statsData.maxPoints.homeworks)}</td>
                <td contenteditable="true" id="labs">${this.cellNumberFormat(statsData.maxPoints.labs)}</td>
                <td contenteditable="true" id="k1">${this.cellNumberFormat(statsData.maxPoints.k1)}</td>
                <td contenteditable="true" id="k2">${this.cellNumberFormat(statsData.maxPoints.k2)}</td>
                <td contenteditable="true" id="dkl">${this.cellNumberFormat(statsData.maxPoints.dkl)}</td>
                <td contenteditable="true" id="exam">${this.cellNumberFormat(statsData.maxPoints.exam)}</td>
                <td contenteditable="true" id="sum"></td>
                <td  id="mark"></td>
            </tr>

            <tr class="tr tableRow average">
                <td id="statistics-name">Prosjek</td>
                <td id="t1">${this.cellNumberFormat(statsData.average.t1)}</td>
                <td id="t2">${this.cellNumberFormat(statsData.average.t2)}</td>
                <td id="t3">${this.cellNumberFormat(statsData.average.t3)}</td>
                <td id="t4">${this.cellNumberFormat(statsData.average.t4)}</td>
                <td id="t5">${this.cellNumberFormat(statsData.average.t5)}</td>
                <td id="d1">${this.cellNumberFormat(statsData.average.d1)}</td>
                <td id="d2">${this.cellNumberFormat(statsData.average.d2)}</td>
                <td id="d3">${this.cellNumberFormat(statsData.average.d3)}</td>
                <td id="d4">${this.cellNumberFormat(statsData.average.d4)}</td>
                <td id="d5">${this.cellNumberFormat(statsData.average.d5)}</td>
                <td id="l1">${this.cellNumberFormat(statsData.average.l1)}</td>
                <td id="l2">${this.cellNumberFormat(statsData.average.l2)}</td>
                <td id="l3">${this.cellNumberFormat(statsData.average.l3)}</td>
                <td id="l4">${this.cellNumberFormat(statsData.average.l4)}</td>
                <td id="l5">${this.cellNumberFormat(statsData.average.l5)}</td>
                <td id="k1r">${this.cellNumberFormat(statsData.average.k1r)}</td>
                <td id="k1p">${this.cellNumberFormat(statsData.average.k1p)}</td>
                <td id="k2r">${this.cellNumberFormat(statsData.average.k2r)}</td>
                <td id="k2p">${this.cellNumberFormat(statsData.average.k2p)}</td>
                <td id="regular">${this.cellNumberFormat(statsData.average.regular)}</td>
                <td id="corrective">${this.cellNumberFormat(statsData.average.corrective)}</td>
                <td id="t">${this.cellNumberFormat(statsData.average.t)}</td>
                <td id="homeworks">${this.cellNumberFormat(statsData.average.homeworks)}</td>
                <td id="labs">${this.cellNumberFormat(statsData.average.labs)}</td>
                <td id="k1">${this.cellNumberFormat(statsData.average.k1)}</td>
                <td id="k2">${this.cellNumberFormat(statsData.average.k2)}</td>
                <td id="dkl">${this.cellNumberFormat(statsData.average.dkl)}</td>
                <td id="exam">${this.cellNumberFormat(statsData.average.exam)}</td>
                <td id="sum">${this.cellNumberFormat(statsData.average.sum)}</td>
                <td id="mark"></td>
            </tr>

            <tr class="tr tableRow 90%">
                <td id="statistics-name">Bodova >= 90%</td>
                <td id="t1">${this.cellNumberFormat(statsData.moreThan90perc.t1)}%</td>
                <td id="t2">${this.cellNumberFormat(statsData.moreThan90perc.t2)}%</td>
                <td id="t3">${this.cellNumberFormat(statsData.moreThan90perc.t3)}%</td>
                <td id="t4">${this.cellNumberFormat(statsData.moreThan90perc.t4)}%</td>
                <td id="t5">${this.cellNumberFormat(statsData.moreThan90perc.t5)}%</td>
                <td id="d1">${this.cellNumberFormat(statsData.moreThan90perc.d1)}%</td>
                <td id="d2">${this.cellNumberFormat(statsData.moreThan90perc.d2)}%</td>
                <td id="d3">${this.cellNumberFormat(statsData.moreThan90perc.d3)}%</td>
                <td id="d4">${this.cellNumberFormat(statsData.moreThan90perc.d4)}%</td>
                <td id="d5">${this.cellNumberFormat(statsData.moreThan90perc.d5)}%</td>
                <td id="l1">${this.cellNumberFormat(statsData.moreThan90perc.l1)}%</td>
                <td id="l2">${this.cellNumberFormat(statsData.moreThan90perc.l2)}%</td>
                <td id="l3">${this.cellNumberFormat(statsData.moreThan90perc.l3)}%</td>
                <td id="l4">${this.cellNumberFormat(statsData.moreThan90perc.l4)}%</td>
                <td id="l5">${this.cellNumberFormat(statsData.moreThan90perc.l5)}%</td>
                <td id="k1r">${this.cellNumberFormat(statsData.moreThan90perc.k1r)}%</td>
                <td id="k1p">${this.cellNumberFormat(statsData.moreThan90perc.k1p)}%</td>
                <td id="k2r">${this.cellNumberFormat(statsData.moreThan90perc.k2r)}%</td>
                <td id="k2p">${this.cellNumberFormat(statsData.moreThan90perc.k2p)}%</td>
                <td id="regular">${this.cellNumberFormat(statsData.moreThan90perc.regular)}%</td>
                <td id="corrective">${this.cellNumberFormat(statsData.moreThan90perc.corrective)}%</td>
                <td id="t">${this.cellNumberFormat(statsData.moreThan90perc.t)}%</td>
                <td id="homeworks">${this.cellNumberFormat(statsData.moreThan90perc.homeworks)}%</td>
                <td id="labs">${this.cellNumberFormat(statsData.moreThan90perc.labs)}%</td>
                <td id="k1">${this.cellNumberFormat(statsData.moreThan90perc.k1)}%</td>
                <td id="k2">${this.cellNumberFormat(statsData.moreThan90perc.k2)}%</td>
                <td id="dkl">${this.cellNumberFormat(statsData.moreThan90perc.dkl)}%</td>
                <td id="exam">${this.cellNumberFormat(statsData.moreThan90perc.exam)}%</td>
                <td id="sum">${this.cellNumberFormat(statsData.moreThan90perc.sum)}%</td>
                <td id="mark"></td>
            </tr>
            <tr class="tr tableRow 50%">
                <td id="statistics-name">Bodova >= 50%</td>
                <td id="t1">${this.cellNumberFormat(statsData.moreThan50perc.t1)}%</td>
                <td id="t2">${this.cellNumberFormat(statsData.moreThan50perc.t2)}%</td>
                <td id="t3">${this.cellNumberFormat(statsData.moreThan50perc.t3)}%</td>
                <td id="t4">${this.cellNumberFormat(statsData.moreThan50perc.t4)}%</td>
                <td id="t5">${this.cellNumberFormat(statsData.moreThan50perc.t5)}%</td>
                <td id="d1">${this.cellNumberFormat(statsData.moreThan50perc.d1)}%</td>
                <td id="d2">${this.cellNumberFormat(statsData.moreThan50perc.d2)}%</td>
                <td id="d3">${this.cellNumberFormat(statsData.moreThan50perc.d3)}%</td>
                <td id="d4">${this.cellNumberFormat(statsData.moreThan50perc.d4)}%</td>
                <td id="d5">${this.cellNumberFormat(statsData.moreThan50perc.d5)}%</td>
                <td id="l1">${this.cellNumberFormat(statsData.moreThan50perc.l1)}%</td>
                <td id="l2">${this.cellNumberFormat(statsData.moreThan50perc.l2)}%</td>
                <td id="l3">${this.cellNumberFormat(statsData.moreThan50perc.l3)}%</td>
                <td id="l4">${this.cellNumberFormat(statsData.moreThan50perc.l4)}%</td>
                <td id="l5">${this.cellNumberFormat(statsData.moreThan50perc.l5)}%</td>
                <td id="k1r">${this.cellNumberFormat(statsData.moreThan50perc.k1r)}%</td>
                <td id="k1p">${this.cellNumberFormat(statsData.moreThan50perc.k1p)}%</td>
                <td id="k2r">${this.cellNumberFormat(statsData.moreThan50perc.k2r)}%</td>
                <td id="k2p">${this.cellNumberFormat(statsData.moreThan50perc.k2p)}%</td>
                <td id="regular">${this.cellNumberFormat(statsData.moreThan50perc.regular)}%</td>
                <td id="corrective">${this.cellNumberFormat(statsData.moreThan50perc.corrective)}%</td>
                <td id="t">${this.cellNumberFormat(statsData.moreThan50perc.t)}%</td>
                <td id="homeworks">${this.cellNumberFormat(statsData.moreThan50perc.homeworks)}%</td>
                <td id="labs">${this.cellNumberFormat(statsData.moreThan50perc.labs)}%</td>
                <td id="k1">${this.cellNumberFormat(statsData.moreThan50perc.k1)}%</td>
                <td id="k2">${this.cellNumberFormat(statsData.moreThan50perc.k2)}%</td>
                <td id="dkl">${this.cellNumberFormat(statsData.moreThan50perc.dkl)}%</td>
                <td id="exam">${this.cellNumberFormat(statsData.moreThan50perc.exam)}%</td>
                <td id="sum">${this.cellNumberFormat(statsData.moreThan50perc.sum)}%</td>
                <td id="mark"></td>
            </tr>

            <tr class="tr tableRow 10%">
                <td id="statistics-name">Bodova < 10%</td>
                <td id="t1">${this.cellNumberFormat(statsData.lessThan10perc.t1)}%</td>
                <td id="t2">${this.cellNumberFormat(statsData.lessThan10perc.t2)}%</td>
                <td id="t3">${this.cellNumberFormat(statsData.lessThan10perc.t3)}%</td>
                <td id="t4">${this.cellNumberFormat(statsData.lessThan10perc.t4)}%</td>
                <td id="t5">${this.cellNumberFormat(statsData.lessThan10perc.t5)}%</td>
                <td id="d1">${this.cellNumberFormat(statsData.lessThan10perc.d1)}%</td>
                <td id="d2">${this.cellNumberFormat(statsData.lessThan10perc.d2)}%</td>
                <td id="d3">${this.cellNumberFormat(statsData.lessThan10perc.d3)}%</td>
                <td id="d4">${this.cellNumberFormat(statsData.lessThan10perc.d4)}%</td>
                <td id="d5">${this.cellNumberFormat(statsData.lessThan10perc.d5)}%</td>
                <td id="l1">${this.cellNumberFormat(statsData.lessThan10perc.l1)}%</td>
                <td id="l2">${this.cellNumberFormat(statsData.lessThan10perc.l2)}%</td>
                <td id="l3">${this.cellNumberFormat(statsData.lessThan10perc.l3)}%</td>
                <td id="l4">${this.cellNumberFormat(statsData.lessThan10perc.l4)}%</td>
                <td id="l5">${this.cellNumberFormat(statsData.lessThan10perc.l5)}%</td>
                <td id="k1r">${this.cellNumberFormat(statsData.lessThan10perc.k1r)}%</td>
                <td id="k1p">${this.cellNumberFormat(statsData.lessThan10perc.k1p)}%</td>
                <td id="k2r">${this.cellNumberFormat(statsData.lessThan10perc.k2r)}%</td>
                <td id="k2p">${this.cellNumberFormat(statsData.lessThan10perc.k2p)}%</td>
                <td id="regular">${this.cellNumberFormat(statsData.lessThan10perc.regular)}%</td>
                <td id="corrective">${this.cellNumberFormat(statsData.lessThan10perc.corrective)}%</td>
                <td id="t">${this.cellNumberFormat(statsData.lessThan10perc.t)}%</td>
                <td id="homeworks">${this.cellNumberFormat(statsData.lessThan10perc.homeworks)}%</td>
                <td id="labs">${this.cellNumberFormat(statsData.lessThan10perc.labs)}%</td>
                <td id="k1">${this.cellNumberFormat(statsData.lessThan10perc.k1)}%</td>
                <td id="k2">${this.cellNumberFormat(statsData.lessThan10perc.k2)}%</td>
                <td id="dkl">${this.cellNumberFormat(statsData.lessThan10perc.dkl)}%</td>
                <td id="exam">${this.cellNumberFormat(statsData.lessThan10perc.exam)}%</td>
                <td id="sum">${this.cellNumberFormat(statsData.lessThan10perc.sum)}%</td>
                <td id="mark"></td>
            </tr>
            </tbody>
        `;
        table.innerHTML = template
    };
    // nested funckto
    // Chart
    currentStatisticsChart(statsData) {
        
        const A = statsData.ai.count,
              B = statsData.bi.count,
              C = statsData.si.count,
              D = statsData.di.count,
              E = statsData.i.count,
              F = statsData.ef.count;

        var chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text: "Raspodjela ocjena"              
            },
            data: [              
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: [
                        { label: "A", y: A },
                        { label: "B", y: B },
                        { label: "C", y: C },
                        { label: "D", y: D },
                        { label: "E", y: E },
                        { label: "F", y: F },
                    ]
                }
            ]
        });
        chart.render();
    }

    // Grades mini table
    currentStatisticsTableGrades(table, statsData) {
        let template = '';
        template = `
            <thead>
                <tr>
                    <th scope="col">Ocjena</th>
                    <th scope="col">Broj</th>
                    <th scope="col">Procenat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A</td>
                    <td>${statsData.ai.count}</td>
                    <td>${statsData.ai.percent}%</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>${statsData.bi.count}</td>
                    <td>${statsData.bi.percent}%</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>${statsData.si.count}</td>
                    <td>${statsData.si.percent}%</td>
                </tr>
                <tr>
                    <td>D</td>
                    <td>${statsData.di.count}</td>
                    <td>${statsData.di.percent}%</td>
                </tr>
                <tr>
                    <td>E</td>
                    <td>${statsData.i.count}</td>
                    <td>${statsData.i.percent}%</td>
                </tr>
                <tr>
                    <td>F</td>
                    <td>${statsData.ef.count}</td>
                    <td>${statsData.ef.percent}%</td>
                </tr>
            </tbody>
        `;
        table.innerHTML = template;
    };

    // Sakrivamo dugme "Postojeci spisak" ako ni jedan predmet nije izabran iz SS
    sourceNotYesSelected(source) {
        const tableListBtn = document.getElementById('tableListBtn');
        if(!source && tableListBtn !== null) {
            tableListBtn.style.display = 'none';
        } else if(tableListBtn !== null) {
            tableListBtn.style.display = 'initial';
        }
    };
    // Pisemo informacije o predmetu u tabeli u parametrima
    writeSourceInfo(sourceInfo) {
        if(sourceInfo) {
            // uzimamo info iz local storagea i upisujemo u tabelu
            for(let info in sourceInfo) {
                let tableCell = document.getElementById(info);
                tableCell.getElementsByTagName('th')[0].innerHTML = sourceInfo[info];
            }
        }

    }

    //! Column Gradding 
    tamplateStudentList(students, clearNumber) {
        const div = document.getElementById('formsGrading');
        // div.innerHTML = '';
        // localStorage 
        const memoryNumber = clearNumber === false ? localStore.getMemoryNumber() : '';
        
        if(students && students.length) {
            students.forEach((student, index) => {
                const studentAsPayload = Object.entries(student);
                // template
                let template = `
                <h5 class="form__name">${student.name} - ${student.index}</h5>
                <p class="form__info">Ukupan broj bodova do sada: <span>${student.sum || 0}</span></p>
                <div class="row">
                    <div class="col-7 form-group form__form-group">
                        <label for="grade">Polje za unos bodova:</label>
                        <input type="text" value='${memoryNumber || ''}' class="form-control" id="grade-input-${index}">
                    </div>
                    <div class="col-5 form__btn">
                        <button 
                            onClick="gradedStudent('${studentAsPayload}', '${index}')" 
                            type="button"
                            class="btn btn-secondary"
                        >Dodati</button>
                    </div>
                </div>
                `;
                // kreiranje forme
                let form = document.createElement('form');
                form.classList.add('two-form__form');
                form.id = `two-form__form-${index}`

                form.innerHTML = template

                // dodavanje forme u div i prikazivanje na display
                div.appendChild(form);

            })
        } else {
            // Kada pretraga ne vraca studenta
            let message = document.createElement('h3');
            message.classList.add('error-message')
            message.innerText = 'Nema rezultata!';

            // prikazivanje poruke
            div.appendChild(message);
        }
    }

    //* Class nestovane funkcije

    // Ako je undefined text ce biti "X" 
    cellNumberFormat(number) {
        let result = '';
        if(number === undefined) {
            result = 'X';
        } else if(number === "") {
            result = 0;
        } else {
            result = number;
        }
        return result;
    }
}