// toggle the navigation menu when the hamburger menu icon is clicked

// const menuIcon = document.querySelector('.menu-icon');
// const nav = document.querySelector('nav');

// menuIcon.addEventListener('click', () => {
//   nav.classList.toggle('active');
// });


// $(document).ready(function() {
//   $(".expand-button").click(function() {
//     var description = $(this).closest(".experience-item").find(".experience-description");
//     description.slideToggle(500);
//     if (description.is(':visible')) {
//       $(this).text("Collapse");
//     } else {
//       $(this).text("Expand");
//     }
//   });
// });

var ctx = document.getElementById('topoChart').getContext('2d');
var chart = new Chart(ctx, {
type: 'line',
data: {
labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
datasets: [{
label: 'Sadness',
data: [0, 2, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
backgroundColor: 'rgba(59, 55, 191, 0.2)',
borderColor: '#3B37BF',
borderWidth: 1,
lineTension: 0.5,
fill: false
},
{
label: 'Happiness',
data: [8, 10, 8, 10, 9, 9, 9, 10, 9, 8, 8, 10],
backgroundColor: 'rgba(91, 87, 235, 0.2)',
borderColor: '#FFA99A',
borderWidth: 1,
lineTension: 0.5,
fill: false
},
{
label: 'Focus',
data: [0, 1, 2, 3, 1, 2, 3, 7, 1, 5, 8, 8.5],
backgroundColor: 'rgba(1, 204, 155, 0.2)',
borderColor: '#01CC9B',
borderWidth: 1,
lineTension: 0.5,
fill: false
},
{
label: 'Goals',
data: [0, 1, 2, 1, 1, 3, 4, 5, 6, 7, 8, 9],
backgroundColor: 'rgba(1, 204, 155, 0.2)',
borderColor: '#9D9AFF',
borderWidth: 1,
lineTension: 0.5,
fill: false
}]
},
options: {
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});

// JavaScript for Navigation toggle
function toggleNav() {
var navigation = document.getElementById("navigation");
var menuIcon = document.querySelector(".menu-icon");
navigation.classList.toggle("responsive");
if (menuIcon.classList.contains("fa-bars")) {
menuIcon.classList.remove("fa-bars");
menuIcon.classList.add("fa-times");
} else {
menuIcon.classList.remove("fa-times");
menuIcon.classList.add("fa-bars");
}
}