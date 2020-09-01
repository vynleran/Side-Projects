
//   function tabs(evt, math) {
//       var i, tabLinks, tabContent;
//       tabContent = document.getElementsByClassName("tab-content")
//       for(i = 0; i < tabContent.length; i++) {
//           tabContent[i].style.display = "none";
//       }
//       tabLinks = document.getElementsByClassName("tablinks");
//       for(i = 0; i < tabLinks.length; i++) {
//           tabLinks[i].className = tabLinks[i].className.replace(" active", "");
//       }
//       document.getElementById(math).style.display = "block";
//       evt.currentTarget.className += " active";

//   }
//   tabs(event, 'inch');