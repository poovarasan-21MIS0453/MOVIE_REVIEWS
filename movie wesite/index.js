var sidenav = document.querySelector(".side-navbar")
function showNavbar()
{
    sidenav.style.left="0"

}

function closeNavbar()
{
    sidenav.style.left="-60%"

}


document.getElementById('view-more-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var additionalImages = document.getElementById('more-content');
    if (additionalImages.classList.contains('hidden')) {
      additionalImages.classList.remove('hidden');
      this.textContent = 'View Less';
    } else {
      additionalImages.classList.add('hidden');
      this.textContent = 'View More';
    }
  });
