 window.onscroll = function() {scrollcheck()};

function scrollcheck() {
if (document.body.scrollTop >= document.querySelector('#hotelList').offsetTop - 200  || document.documentElement.scrollTop >= document.querySelector('#hotelList').offsetTop - 200) {
    document.querySelector('.strokebox').classList.add('visible');

}
}
function closeModalSteps(target){
    document.querySelector(target).classList.add('opening');           
        document.querySelector(target).classList.remove('in');
        document.querySelector('body').classList.remove('modal-opened')
        setTimeout(() => {
            document.querySelector(target).classList.remove('opening');
        }, 500);
}

function closeModalCross(e){
    const target = '#' + e.target.parentElement.parentElement.parentElement.id;
}
function closeModal(value){
    const target = '#' + value.parentElement.id;
    closeModalSteps(target)
}
