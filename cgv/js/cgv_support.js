window.addEventListener("DOMContentLoaded", (event) => {
    createNoticeList();    
});

function createNoticeList() {
    fetch("../data/notice.json")
        .then((result) => result.json() )  //fetch결과 => result(문자열) => json()
        .then((jsonData) => {
            showNoticeList(jsonData.list);            
        })
        .catch(error => console.log(error));
}//createNoticeList

/**
 * 
 */
function onChangNoticeList(code) {
    //1. list 배열에서 code를 filtering  새로운 배열 반환
    fetch("../data/notice.json")
        .then((result) => result.json())
        .then((jsonData) => {
            if(code === "total"){
                showNoticeList(jsonData.list);
            } else {
                let filterList = jsonData.list.filter((object) => object.code === code);  // [{}, {}]
                showNoticeList(filterList);
            }
        })
        .catch(error => console.log(error));
}

/**
 * 화면 출력 함수
 */
function showNoticeList(list) {
    let output = `
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
            `;

            list.forEach((notice, i) => {
                output += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${notice.type}</td>
                        <td><a href="#">${notice.title}</a></td>
                        <td>${notice.date}</td>
                        <td>${notice.hits}</td>
                    </tr>
                `;
            });

            output += `
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="5">1 2 3 4 5 >> </td>
                    </tr>
                </tfoot>
            `;
            
            document.querySelector("table").innerHTML = output;
}

