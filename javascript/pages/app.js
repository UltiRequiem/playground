const vibrate = () => window.navigator.vibrate([1000]);

const button = document.getElementById('button');

button.addEventListener('click', vibrate);
