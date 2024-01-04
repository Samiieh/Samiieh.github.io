// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
// const options = {
//   bottom: '860px', // default: '32px'
//   right: 'unset', // default: '32px'
//   left: '32px', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff',  // default: '#fff'
//   buttonColorDark: '#100f2c',  // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: true, // default: true,
//   label: '🌓', // default: ''
//   autoMatchOsTheme: true // default: true
// }

// const darkmode = new Darkmode(options);
// darkmode.showWidget();

// Initialize dark mode options
const options = {
  bottom: '860px',
  right: 'unset',
  left: '32px',
  time: '0.5s',
  mixColor: '#fff',
  backgroundColor: '#fff',
  buttonColorDark: '#100f2c',
  buttonColorLight: '#fff',
  saveInCookies: true,
  autoMatchOsTheme: true
};

// Initialize dark mode but don't show the default widget
const darkmode = new Darkmode(options);
darkmode.showWidget = function() {}; // Override the showWidget function

// Function to update the icon based on the current mode// Function to update the icon based on the current mode
// Function to update the icon based on the current mode
function updateIcon() {
  const icon = document.getElementById('icon');
  if (darkmode.isActivated()) {
    icon.src = 'images/sun.png'; // Change to your sun image path
    icon.classList.add('dark-mode'); // Add class to apply animation
  } else {
    icon.src = 'images/moon.png'; // Change to your moon image path
    icon.classList.remove('dark-mode'); // Remove class to reverse animation
  }
}

// Rest of your dark mode initialization code...

// Initialize the correct icon and apply animation on page load
updateIcon();

// Add click event listener to the image
document.getElementById('icon').addEventListener('click', function() {
  darkmode.toggle(); // Toggle dark mode
  updateIcon(); // Update the icon and apply/remove animation class
});


