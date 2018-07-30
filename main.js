$( document ).ready(function() {
  $("#btn").click(function() {
    var newtodo = $("#submit").val();
    $.ajax({
      url: "http://165.227.138.202:3001/todos",
      method: "POST",
      data: {text: newtodo},
      success: function(data,stato){
        location.reload();
      },
      error: function(rich, stato, errore){
        alert("ERRORE");
      }
    });
  });
  $.ajax({
    url: "http://165.227.138.202:3001/todos",
    method: "GET",
    success: function(data,stato){
      for (var i = 0; i < data.length; i++) {
        var item = $(".item-template").clone();
        item.removeClass("item-template").html(data[i].text).attr("id",data[i].id).addClass("active");
        $("#container").append(item);
      }
      $("#container > div").addClass("item-template").append($("i"));
    },
    error: function(rich, stato, errore){
      alert("ERRORE");
    }
  });
  $(".fa-times").click(function() {
    var id = $(this).parents().attr("id");
    $.ajax({
      url: "http://165.227.138.202:3001/todos/"+id,
      method: "DELETE",
      success: function(data,stato){
        location.reload();
      },
      error: function(rich, stato, errore){
        alert("ERRORE");
      }
    });
  });
  $(".fa-pen").click(function() {
    var id = $(this).parents().attr("id");
    var change = prompt("Inserire modifica");
    console.log(change);
    $.ajax({
      url: "http://165.227.138.202:3001/todos/"+id,
      method: "PUT",
      data: {text: change},
      success: function(data,stato){
        location.reload();
      },
      error: function(rich, stato, errore){
        alert("ERRORE");
      }
    });
  });

});
