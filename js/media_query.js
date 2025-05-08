function updateSloganBR() {
    const isTabletOrSmaller = window.innerWidth <= 1080;
    const $slogan = $('.slogan');

    if (isTabletOrSmaller) {
        // <br> 제거
        $slogan.html($slogan.html().replace(/<br\s*\/?>/g, ' '));
    } else {
        // <br> 삽입 (단, 중복 삽입 방지!)
        const text = $slogan.text().replace(/\s*이준호입니다\./, '');
        $slogan.html(`${text}<br>이준호입니다.`);
    }
}

// 페이지 로드 시 실행
$(document).ready(function() {
    updateSloganBR();
});

// 창 크기 변경 시도 같이 대응
$(window).on('resize', function() {
    updateSloganBR();
});



$(document).ready(function() {
    function removeAboutGraph() {
        if (window.matchMedia("(max-width: 1080px)").matches) {
            $('.about .graph_boxed').remove();
        }
    }

    // 페이지 로드 시 한 번 실행
    removeAboutGraph();

    // 리사이즈할 때도 조건 충족하면 다시 제거 (이미 제거된 후 다시 생성되진 않음)
    $(window).resize(function() {
        removeAboutGraph();
    });
});
