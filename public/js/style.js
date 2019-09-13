document.addEventListener("DOMContentLoaded", function () {
    var trangthai = 'duoi700';
    var navbar = document.querySelector('.container-fluid.p-0');
    window.addEventListener('scroll', function () {
        this.console.log(this.window.pageYOffset);
        if (this.window.pageYOffset > 700) {
            if (trangthai == 'duoi700') {
                trangthai = 'tren700';
                navbar.classList.add('sticky');
            }
        } else if (this.window.pageYOffset <= 700) {
            if (trangthai == 'tren700') {
                trangthai = 'duoi700';
                navbar.classList.remove('sticky');
            }
        }
    });
}, false)
// 
