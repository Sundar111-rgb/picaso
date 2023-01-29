<html>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
	<script text="javascript">

	$(document).ready(() => {

			getData();

		$("body").on('click','#Insert',() => {
		 $.ajax({
			url: "/api/get/login",
            cache: false, 
			type: "POST",
			contentType: 'application/json',
            data: JSON.stringify({  'id': parseInt($('#id').val()) , 
		                        	'name':$('#name').val() , 
			                        'course':$('#address').val() , 
		                          	'price':$('#mobile').val() 
		                        }),
		    success:result => console.table(result?.author),
			error  :error  => console.log('Error =>>>',error)
		});
        });

		function myfunc(e) {
			$.ajax({
			url: "/api/get/filter/"+parseInt(e.data.bar),
            cache: false, 
			type: "GET",
			contentType: 'application/json',
		    success:result => {
				var kkk = result?.author;
				console.table(kkk)
				var html = '';
				$.each(kkk,(key, item) => {
					html += '<tr>';
                    html += '<td>' + item.id     + '</td>';
					html += '<td>' + item.name   + '</td>';
                    html += '<td>' + item.course + '</td>';
                    html += '<td>' + item.price  + '</td>';
					html += '<td><button id="Edit">Edit</button></td>';
					html += '<td><button id="Delete">Delete</button></td>';
                    html += '</tr>';
				})
				$('.tbody').html(html);
			},
			error: error => console.log(error)
		});
        }

        $("#GetData").click({bar: "1"}, myfunc);

	    function getData(){
			$.ajax({
			url: "/api/getoneroww",
            cache: false, 
			type: "GET",
			contentType: 'application/json',
		    success:result => {
				var kkk = result?.author.skills;
				console.table(kkk)
				var html = '';
				$.each(kkk,(key, item) => {
					html += '<tr>';
                    html += '<td>' + item.id     + '</td>';
					html += '<td>' + item.name   + '</td>';
                    html += '<td>' + item.course + '</td>';
                    html += '<td>' + item.price  + '</td>';
					html += '<td><button id="Edit">Edit</button></td>';
					html += '<td><button id="Delete">Delete</button></td>';
                    html += '</tr>';
				})
				$('.tbody').html(html);
			},
			error: error => console.log(error)
		});
		}

		$("body").on('click','#Edit',() => {
		 $.ajax({
			url: "/api/update",
            cache: false, 
			type: "PUT",
		    success:result => console.log(result),
			error: error => console.log(error)
		});
        });

		$("body").on('click','#Delete',() => {
			deleteData(2)
		});


		function deleteData(i) {
		 $.ajax({
			url: "/api/delete/"+i,
            cache: false, 
			type: "DELETE",
		    success:result => console.log(result.author),
			error: error => console.log(error)
		});
	}
       
    });
	
	</script>
	</head>
   <body style="background-color: rgb(0, 90, 128)">
	<h1 style="color: rgb(94, 128, 0)"> GeeksForGeeks </h1>
	    <div>
	        <input type="text" id="id" value="1" />
            <input type="text" id="name" value="Sundar"/>
            <input type="text" id="address" value="Gurgaon"/>
            <input type="text" id="mobile" value="8294439986"/>
            <button id="Insert">Insert</button>
			<button id="GetData">GetData</button>

		</div>		
   <table border="1">
	<thead>
		<tr>
			<td>ID</td>
			<td>NAME</td>
			<td>COURSE</td>
			<td>PRICE</td>
		</tr>
	</thead>
	  <tbody class="tbody">
		
	  </tbody>
   </table>
</body>
</html>
