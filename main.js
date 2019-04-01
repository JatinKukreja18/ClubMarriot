 window.onscroll = function() {scrollcheck()};

function scrollcheck() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const difference = scrollHeight - clientHeight;
    
    if (document.body.scrollTop >= document.querySelector('#hotelList').offsetTop - 200  || document.documentElement.scrollTop >= document.querySelector('#hotelList').offsetTop - 200 || document.documentElement.scrollTop == difference) {
        document.querySelector('.strokebox').classList.add('visible');
    }
    if(document.body.clientWidth > 767){
        if (document.body.scrollTop >= document.querySelector('#offering').offsetTop - 200  || document.documentElement.scrollTop >= document.querySelector('#offering').offsetTop - 200) {
            document.querySelector('#availForm').classList.remove('visible');        
            document.querySelector('#avail-button').classList.remove('hidden');        
        }
        else if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
            document.querySelector('#availForm').classList.add('visible');        
            document.querySelector('#avail-button').classList.add('hidden');   
        }
    }
}
function closeModalSteps(target){
    document.querySelector(target).classList.add('opening');           
        document.querySelector(target).classList.remove('in');
        document.querySelector('body').classList.remove('modal-opened')
        setTimeout(function(){
            document.querySelector(target).classList.remove('opening');
        }, 500);
}
function toggleForm(){
    if(document.body.clientWidth > 767){
        document.querySelector('#availForm').classList.toggle('visible');        
        document.querySelector('#availFormCross').classList.toggle('visible');        
    }
    else{
        document.querySelector('#availForm').classList.toggle('show-mobile');        
        document.querySelector('body').classList.toggle('noScroll');        
        document.querySelector('#availFormCollapse').classList.remove('visible');    
        document.querySelector('#availFormCross').classList.remove('visible');        
    }
}
function closeModalCross(e){
    const target = '#' + e.target.parentElement.parentElement.parentElement.id;
}
function closeModal(value){
    const target = '#' + document.querySelector('.cm-modal.in').id;
    closeModalSteps(target)
}
function unselectAll(target){
        Array.from(target.querySelectorAll('.cm-select-option')).forEach(function(element) {
          element.classList.remove('active')
          element.classList.remove('selected')
        });
      }
      function submitForm(e){
        console.log(this)
        event.preventDefault();
        document.querySelector('#deduct-modal').classList.add('in');
        if(document.body.clientWidth < 767){
          document.querySelector('#availForm').classList.toggle('visible-mobile');        
          document.querySelector('#availForm').reset();      

        }
      }
