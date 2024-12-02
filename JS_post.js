// import { select } from "./db_test.js";

function formatDatetime(datetime) {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
// var num = 0;
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('content_1');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // 입력된 값들을 가져옴
        const title = document.getElementById('title').value;
        const name = document.querySelector('input[name="name"]:checked').value;
        const datetime = document.querySelector('input[name="datetime-local"]').value;
        const content = document.getElementById('content').value;

        // datetime을을 YYYY-MM-DD HH:MM:SS 형식으로 변환
        const formattedDatetime = formatDatetime(datetime);

        // const userData = {num : num, title: title, name: name, datetime: datetime, content:content};
        // localStorage.setItem(num, JSON.stringify(userData));
        // num++;
        // for(let i = 0; i < num; i++) {
        //     const retrievedData = JSON.parse(localStorage.getItem(i));
        //     console.log(retrievedData);
        // }

        //localStorage.removeItem('user');

        // 데이터를 alert로 표시
        //console.log(`제목: ${title}\n익명/비익명: ${name}\n날짜 및 시간: ${formattedDatetime}\n내용: ${content}`);

        // async function addPost() {
        //     try {
        //       const postData = {user_id: 'test_id', 
        //         title: title, 
        //         post_content: content, 
        //         reg_date: new Date(), 
        //         eat_date: formattedDatetime};
        //       const result = await setPost(postData);
        //       console.log("post inserted successfully:", result);
        //     } catch (error) {
        //       console.log("Error inserting post:", error);
        //     }
        // }
        // addPost();
    });
});