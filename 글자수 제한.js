document.addEventListener("DOMContentLoaded", function() {
    
    const contentElements = document.querySelectorAll('.post-content'); //.post-content 클래스가 있는 모든 요소 선택
    const maxContentLength = 100; // 최대 글자 수 설정

    contentElements.forEach(element => {
        const fullContent = element.textContent;

        if (fullContent.length > maxContentLength) //전체 텍스트 내용이 최대 글자수 초과하는지 
        {
            const truncatedContent = fullContent.slice(0, maxContentLength) + '...'; //최대 글자 수 까지 자르고 ... 추가
            element.innerHTML = truncatedContent + ' <a class="read-more" href="./게시글 화면.html">더 보기</a>';
            
        }
    });
});
