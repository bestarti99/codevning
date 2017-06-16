function showPopup(event){
    event.preventDefault();
    
    document.getElementById('popup').style.display = 'block';
}

function hidePopup(event){
    event.preventDefault();
    
    document.getElementById('popup').style.display = 'none';
}