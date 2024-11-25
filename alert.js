document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('content_1');

    form.addEventListener('submit', function(event) {

        // 입력된 값들을 가져옴
        const title = document.getElementById('title').value;
        const name = document.querySelector('input[name="name"]:checked').value;
        const datetime = document.querySelector('input[name="datetime-local"]').value;
        const content = document.getElementById('content').value;

        // datetime을을 YYYY-MM-DD HH:MM:SS 형식으로 변환
        const formattedDatetime = formatDatetime(datetime);

        // 데이터를 alert로 표시
        alert(`제목: ${title}\n익명/비익명: ${name}\n날짜 및 시간: ${formattedDatetime}\n내용: ${content}`);
    });

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
});
