$( document ).ready(function() {
  $.ajax({
    url: "http://165.227.138.202:3001/todos",
    method: "GET",
    success: function(data,stato){

      for (var i = 0; i < data.length; i++) {
        var item = $(".item-template").clone();
        item.html(data[i].text).attr("id",data[i].id).addClass("active");
        $("#container").append(item);

      }

    },
    error: function(rich, stato, errore){
      alert("ERRORE");
    }
  });
});
