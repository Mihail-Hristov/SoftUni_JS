function attachGradientEvents() {
    document.getElementById('gradient-box').addEventListener('mousemove', viewPercent);
    document.getElementById('gradient-box').addEventListener('mouseout', mouseOut);

    

    function viewPercent(ev) {
        let percent = (ev.offsetX / (ev.target.clientWidth - 2)) * 100;
        percent = Math.trunc(percent);

        document.getElementById('result').textContent = `${percent}%`;
    }

    function mouseOut(ev) {
        document.getElementById('result').textContent = '';
    }
}