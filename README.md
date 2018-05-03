<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Learning Curves</title>
    <style>
    .todo-list {
  background: #FFF;
  font-size: 20px;
  max-width: 15em;
  margin: auto;
  padding: 0.5em 1em;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
}
.todo {
  display: block;
  position: relative;
  padding: 1em 1em 1em 16%;
  margin: 0 auto;
  cursor: pointer;
  border-bottom: solid 1px #ddd;
}
.todo:last-child {
  border-bottom: none;
}
.todo__state {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.todo__text {
  color: #135156;
  transition: all 0.4s linear 0.4s;
}
.todo__icon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  margin: auto;
  fill: none;
  stroke: #27FDC7;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.todo__line,
.todo__box,
.todo__check {
  transition: stroke-dashoffset 0.8s cubic-bezier(0.9, 0, 0.5, 1);
}
.todo__circle {
  stroke: #27FDC7;
  stroke-dasharray: 1 6;
  stroke-width: 0;
  -webkit-transform-origin: 13.5px 12.5px;
          transform-origin: 13.5px 12.5px;
  -webkit-transform: scale(0.4) rotate(0deg);
          transform: scale(0.4) rotate(0deg);
  -webkit-animation: none 0.8s linear;
          animation: none 0.8s linear;
}
@-webkit-keyframes explode {
  30% {
    stroke-width: 3;
    stroke-opacity: 1;
    -webkit-transform: scale(0.8) rotate(40deg);
            transform: scale(0.8) rotate(40deg);
  }
  100% {
    stroke-width: 0;
    stroke-opacity: 0;
    -webkit-transform: scale(1.1) rotate(60deg);
            transform: scale(1.1) rotate(60deg);
  }
}
@keyframes explode {
  30% {
    stroke-width: 3;
    stroke-opacity: 1;
    -webkit-transform: scale(0.8) rotate(40deg);
            transform: scale(0.8) rotate(40deg);
  }
  100% {
    stroke-width: 0;
    stroke-opacity: 0;
    -webkit-transform: scale(1.1) rotate(60deg);
            transform: scale(1.1) rotate(60deg);
  }
}
.todo__box {
  stroke-dasharray: 56.1053, 56.1053;
  stroke-dashoffset: 0;
  transition-delay: 0.16s;
}
.todo__check {
  stroke: #27FDC7;
  stroke-dasharray: 9.8995, 9.8995;
  stroke-dashoffset: 9.8995;
  transition-duration: 0.32s;
}
.todo__line {
  stroke-dasharray: 168, 1684;
  stroke-dashoffset: 168;
}
.todo__circle {
  -webkit-animation-delay: 0.56s;
          animation-delay: 0.56s;
  -webkit-animation-duration: 0.56s;
          animation-duration: 0.56s;
}
.todo__state:checked ~ .todo__text {
  transition-delay: 0s;
  color: #5EBEC1;
  opacity: 0.6;
}
.todo__state:checked ~ .todo__icon .todo__box {
  stroke-dashoffset: 56.1053;
  transition-delay: 0s;
}
.todo__state:checked ~ .todo__icon .todo__line {
  stroke-dashoffset: -8;
}
.todo__state:checked ~ .todo__icon .todo__check {
  stroke-dashoffset: 0;
  transition-delay: 0.48s;
}
.todo__state:checked ~ .todo__icon .todo__circle {
  -webkit-animation-name: explode;
          animation-name: explode;
}
html {
  background: #ddd;
}
html {
  height: 100%;
  display: flex;
}
body {
  width: 100%;
  margin: auto;
}
</style>
</head>
<body>
    <svg viewBox="0 0 0 0" style="position: absolute; z-index: -1; opacity: 0;">
        <defs>
            <linearGradient id="boxGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="25" y2="25">
                <stop offset="0%" stop-color="#27FDC7" />
                <stop offset="100%" stop-color="#0FC0F5" />
            </linearGradient>
    
            <linearGradient id="lineGradient">
                <stop offset="0%" stop-color="#0FC0F5" />
                <stop offset="100%" stop-color="#27FDC7" />
            </linearGradient>
    
            <path id="todo__line" stroke="url(#lineGradient)" d="M21 12.3h168v0.1z"></path>
            <path id="todo__box" stroke="url(#boxGradient)" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"></path>
            <path id="todo__check" stroke="url(#boxGradient)" d="M10 13l2 2 5-5"></path>
            <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
        </defs>
    </svg>
    
    
    <div class="todo-list">
        <label class="todo">
            <input class="todo__state" type="checkbox" />
    
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">
                <use xlink:href="#todo__line" class="todo__line"></use>
                <use xlink:href="#todo__box" class="todo__box"></use>
                <use xlink:href="#todo__check" class="todo__check"></use>
                <use xlink:href="#todo__circle" class="todo__circle"></use>
            </svg>
    
            <div class="todo__text">Do a very important task</div>
    
        </label>
    
        <label class="todo">
    
            <input class="todo__state" type="checkbox" />
    
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">
                <use xlink:href="#todo__line" class="todo__line"></use>
                <use xlink:href="#todo__box" class="todo__box"></use>
                <use xlink:href="#todo__check" class="todo__check"></use>
                <use xlink:href="#todo__circle" class="todo__circle"></use>
            </svg>
    
            <div class="todo__text">Another important task</div>
    
        </label>
    
        <label class="todo">
            <input class="todo__state" type="checkbox" />
    
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">
                <use xlink:href="#todo__line" class="todo__line"></use>
                <use xlink:href="#todo__box" class="todo__box"></use>
                <use xlink:href="#todo__check" class="todo__check"></use>
                <use xlink:href="#todo__circle" class="todo__circle"></use>
            </svg>
    
            <div class="todo__text">Not so important task</div>
        </label>
    </div>
    <script>
    console.clear();

        setTimeout(function () {
            document.querySelector('input[type="checkbox"]').setAttribute('checked', true);
        }, 100);
/*

// Javascript was initially used, but wasn't really necessary. Javascript droppped, but left here for archival purposes.

var todoTemplate = function(id){ 
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 25" class="todo__icon">
    <defs>
      <mask id="myMask${id}" maskUnits="userSpaceOnUse" x="0" y="0">
        <g stroke="#FFF" fill="none">
          <path class="todo__line" d="M21 12.3h168"/>
          <path class="todo__box" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"/>
          <path class="todo__check" d="M10 13l2 2 5-5"/>
        </g>
      </mask>
    </defs>
    <rect fill="url(#todoGradient)" mask="url(#myMask${id})" width="100%" height="100%" />
    <circle class="todo__circle" cx="13.5" cy="12.5" r="10" />
  </svg>`
};

var todos = [ ...document.querySelectorAll('.todo') ].forEach(activateTodo);

function offsetPath(path, offset){
  var length = path.getTotalLength();
  path.style.transition = 'none';
  path.style.strokeDasharray = length + ' ' + length + offset;
  path.style.strokeDashoffset = length; 
  setTimeout(function(){ path.style.transition = null; },20);
  return length;
}

function togglePath(path, toggle, offset = 0){
  var length = offsetPath(path, offset);

  function updatePath(toggle){
    return path.style.strokeDashoffset = ( toggle ? -offset : length );
  }

  updatePath(toggle);
  return updatePath;
}

function activateTodo(todo, i){
  
  todo.insertAdjacentHTML('afterbegin', todoTemplate(i));
  
  var line = todo.querySelector('.todo__line'),
      updateLine = togglePath(line, false, 4);

  var box = todo.querySelector('.todo__box'),
      updateBox = togglePath(box, true);

  var check = todo.querySelector('.todo__check'),
      updateCheck = togglePath(check);

  var toggle = false;

  todo.addEventListener('click', function(){
    toggle = !toggle;
    updateLine(toggle);
    updateBox(!toggle);
    updateCheck(toggle);
    if ( todo.classList ) { todo.classList[ toggle ? 'add' : 'remove' ]('todo--checked'); }
  });
  
}

*/</script>
</body>
</html>
