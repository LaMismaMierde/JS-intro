
function openTab(evt, tabNumber) {
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabNumber).style.display = "block";
    evt.currentTarget.className += " active";
}