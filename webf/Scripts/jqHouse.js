function get_detail(id) {
    if (id == null) {
        alert('Please choose a house for view detail');
        window.location.href = '/Customer/HomePage/ViewAllHouse';
    } else {
        $.ajax({
            url: "https://localhost:44320/api/House/GetHouse?hou_ID=" + id,
            success: function (result) {
                sethtml(result);
                localStorage.removeItem('id_hou_con');
            }
        }); 
    }
  
}

function sethtml(p_datajson) {
        var item = p_datajson;
        $("#h_description").html(item.h_description);
        $("#price").html(item.price);
        $("#b_description").html(item.b_description);
    
}