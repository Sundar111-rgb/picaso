<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  
<script type="text/javascript">
    
   $(document).ready(() => {
     
     const getbyID = (id) => {
       console.log(id)
     }
    
     $("#btn").click(() => { 
     $.ajax({
        type: "get",
         url: "https://jsonplaceholder.typicode.com/todos/",
    dataType: "json",
     success: (res) => {
      var html = '';
            $.each(res,(key, item) => {
                html += '<tr>';
                html += '<td>' + item.id + '</td>';
                html += '<td>' + item.userId + '</td>';
                html += '<td>' + item.title + '</td>';
                html += '<td>' + item.completed + '</td>';
                html += '<td><a href="#" onclick="getbyID(' + item.id + ')">Edit</a> | <a href="#" onclick="Delele(' + item.id + ')">Delete</a></td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
    }
    })
    })
     
      $("#Get").click(() => { 
      $.ajax({
        type: "get",
         url: "https://reqres.in/api/users?page="+$('#id').val(),
    dataType: "json",
     success: (res) => {
      var html = '';
            $.each(res.data,(key, item) => {
                html += '<tr>';
                html += '<td>' + item.id + '</td>';
                html += '<td>' + item.first_name + '</td>';
                html += '<td>' + item.last_name + '</td>';
                html += '<td>' + item.email + '</td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
    }
    })
    })
     
     
});
    
</script>
  <table>
    <thead>
    <tr>
       <td><input type="text" id="id" /></td>
       <td><input type="text" id="name" /></td>
       <td><input type="text" id="address" /></td>
       <td><button id="btn">GetData</button></td>
       <td><button id="Get">GetDataa</button></td>
    </tr>
    </thead>
    
   <thead>
        <tr>
             <th>ID</th>
                    <th>
                        UserID
                    </th>
                    <th>
                        Title
                    </th>
                   
                    <th>
                        Completed
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody class="tbody">

            </tbody>
  </table>

</body>
</html>
