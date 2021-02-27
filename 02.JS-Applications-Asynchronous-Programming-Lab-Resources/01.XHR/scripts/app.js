function loadRepos() {
   let res = document.getElementById('res');

   let url = 'https://api.github.com/users/testnakov/repos';
   const httpReguest = new XMLHttpRequest();

   httpReguest.addEventListener('readystatechange', function() {
      if (httpReguest.readyState == 4 && httpReguest.status == 200) {
         console.log(httpReguest.responseText);
         res.textContent = httpReguest.responseText;
      }
   });
   httpReguest.open('GET', url);
   httpReguest.send();
}