// polyfill for IE
if (!Array.from) {
    Array.from = (function () {
      var toStr = Object.prototype.toString;
      var isCallable = function (fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
      };
      var toInteger = function (value) {
        var number = Number(value);
        if (isNaN(number)) { return 0; }
        if (number === 0 || !isFinite(number)) { return number; }
        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };
      var maxSafeInteger = Math.pow(2, 53) - 1;
      var toLength = function (value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };
  
      // The length property of the from method is 1.
      return function from(arrayLike/*, mapFn, thisArg */) {
        // 1. Let C be the this value.
        var C = this;
  
        // 2. Let items be ToObject(arrayLike).
        var items = Object(arrayLike);
  
        // 3. ReturnIfAbrupt(items).
        if (arrayLike == null) {
          throw new TypeError("Array.from requires an array-like object - not null or undefined");
        }
  
        // 4. If mapfn is undefined, then let mapping be false.
        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
        var T;
        if (typeof mapFn !== 'undefined') {
          // 5. else
          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          }
  
          // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
          if (arguments.length > 2) {
            T = arguments[2];
          }
        }
  
        // 10. Let lenValue be Get(items, "length").
        // 11. Let len be ToLength(lenValue).
        var len = toLength(items.length);
  
        // 13. If IsConstructor(C) is true, then
        // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
        // 14. a. Else, Let A be ArrayCreate(len).
        var A = isCallable(C) ? Object(new C(len)) : new Array(len);
  
        // 16. Let k be 0.
        var k = 0;
        // 17. Repeat, while k < len… (also steps a - h)
        var kValue;
        while (k < len) {
          kValue = items[k];
          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }
          k += 1;
        }
        // 18. Let putStatus be Put(A, "length", len, true).
        A.length = len;
        // 20. Return A.
        return A;
      };
    }());
  }
// polyfill for IE ends





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
