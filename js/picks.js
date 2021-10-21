let
    productBtn = document.querySelectorAll('.product_btn');

    function ActiveBtnBack(e) {
        let btn = this;
        e.preventDefault();
        btn.children[0].style.width = "100%";
        btn.style.color = "white";
        setTimeout(function(){
                btn.children[0].style.opacity = "0";
                btn.style.color = "rgba(210, 34, 38, 1)"; },
            700);
        setTimeout(function(){
                btn.children[0].style.width = "0"; },
            1000);
        setTimeout(function(){
                btn.children[0].style.opacity = "1"; },
            1400);
    }

    productBtn.forEach(function (e) {
        e.addEventListener("click", ActiveBtnBack);
    });