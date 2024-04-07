var popupBtn = document.getElementById("popup-btn");
var popup = document.getElementById("popup");
var closeBtn = document.getElementById("close-popup");


// Function to open the popup

popupBtn.addEventListener('click', function(){
    popup.style.display = 'block';
});

// Function to close the popup
closeBtn.addEventListener('click', function(){
    popup.style.display= 'none';
});




    function showSidebar(){
        const sidebar = document.querySelector('.sidebar');
        // const navbar = document.querySelector('.navbar');

        // navbar.style.height = '22vh';
        sidebar.style.display = 'flex';
    }
    

    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }
    
