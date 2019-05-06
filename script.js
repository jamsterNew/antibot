window.onload = function() {

    class AddLinks {
        constructor(object) {
  
            this.el = document.querySelectorAll(object.el),
            this.count = object.count,
            this.copy = [];
        }
        constructLinks() {
            if(this.el.length > 0) {
                this.el.forEach((el, index) => {
                    let toClonse = el.cloneNode(true);
                    if(index < 10) {
                      this.copy.push(toClonse);
                    }
                    else {
                        return false;
                    }
                });
            }
        }
        giveCopies() {
           const body = document.querySelector('.wrapper-wide');
           const firstElement = body.childNodes[2];
           console.log(firstElement);
           for(let i = 0; i < this.copy.length; i++) {
               let insertElement = body.insertBefore(this.copy[i], firstElement);
               insertElement.style.display = 'none';
            insertElement.classList.add('antibot-click');
           }   
        }
    }

    const firstLink = new AddLinks({
        el: '.slick-active',
    });

    firstLink.constructLinks();
    firstLink.giveCopies();

    const thisUrl = window.location.href;

    const antibot = document.querySelectorAll('.antibot-click');
    for(let i = 0; i < antibot.length; i++) {
        antibot[i].onclick = function() {
            fetch('./antibot/phpcheck.php' , {
              'method': 'POST',
              'body': toSend
            });
        }
    }

}