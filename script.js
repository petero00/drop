function aaaa(e) {
    console.log(e.pageX + ',' + e.pageY);
    let A = document.createElement('div');
    A.setAttribute('class', 'A');
    A.style.left = (e.pageX - 25) + 'px'
    A.style.top = (e.pageY - 25) + 'px'
    document.getElementById('ABC').insertBefore(A, null);
    const pop = new Audio('pop.mp3');
    pop.play();
    const pushu = new Audio('pushu.mp3')
    setTimeout(function() {
        pushu.play();
    },1300);
}
