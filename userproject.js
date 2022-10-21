$(document).ready(function() {

  /*
  console log ("I am an alert box!");


*/
$.ajax({
    url: 'https://randomuser.me/api/?results=50',
    dataType: 'json',
    success: function(data) {
      console.log(data);
        $.each(data.results, function(key, person) {console.log( + ' ' + ' ' + person.picture.medium +' ' + person.name.title + ' ' + person.name.first + ' ' + person.name.last) + ' ' + person.nat;
        $('#users').append('<div class="col-md-3">' +  '<div class="row"> ' +  `<img src="${person.picture.medium}"  class="img-circle" width="100" >`  + '<span class= "caption"> ' + 
        ' ' + person.name.title + ' ' + person.name.first + ' ' + person.name.last+' ' + ` <p><span class="flag-icon flag-icon-${person.nat.toLowerCase()}"></span></p>`
        +` <p><span class="fa fa-brands fa-github"> <i class="fa fa-brands fa-facebook-f"></i>  <i class="fa fa-brands fa-twitter"></i> <span></p>` + '</span>' + '</div>');



        
    });
}


  });
});