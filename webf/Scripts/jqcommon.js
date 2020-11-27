
function CHUNG_GAN_DL_COMBO(p_name, p_selectedValue, p_dataJson) {
    var dataJson;
    var arrName = p_name.split(',');
    dataJson = p_dataJson;

    for (var i = 0; i < arrName.length; i++) {
        if (dataJson == null) {
            $('#' + $.trim(arrName[i])).html('');
            return;
        }      
            var temp = generateOptionCombobox(dataJson, p_selectedValue);
        
        $('#' + $.trim(arrName[i])).html(temp.split("'").join(''));
    }

}

function generateOptionCombobox(p_dataCombobox, p_selectedValue) {
    var temp = '';
    if (p_selectedValue == '')
        temp += '<option value=""> --- Chọn --- </option>';
    $.each(p_dataCombobox, function (index) {
        var item = p_dataCombobox[index];
        if (typeof item.id == typeof undefined) {
            if (item.id == p_selectedValue)
                temp += '<option value="' + item._name + '" selected="selected">' + item._name + '</option>';
            else
                temp += '<option value="' + item.id + '">' + item._name + '</option>';
        } else {
            if (item.id == p_selectedValue)
                temp += '<option value="' + item.id + '" selected="selected">' + item._name + '</option>';
            else
                temp += '<option value="' + item.id + '">' + item._name + '</option>';
        }
    });

    return temp;
}

function listDataJson(p_name, p_dataJson) {
    var dataJson;
    dataJson = p_dataJson;
    var temp = '';
    $.each(dataJson, function (index) {
        var item = dataJson[index];
        temp += "<a href='#'>" +
            "<div class='bike'>" +
            "<img src='" + item.url_Img+ "' alt='' />" +
            "<div class='bike-cost'>" +
            "<div class='bike-mdl'>" +
            "<h4>" +item.h_description+ "</h4>" +
            "</div>" +
            "<div class='clearfix'></div>" +
            "</div>" +
            "<div class='fast-viw'>" +
            "<a href='ViewDetailHouse?hou_ID=" + item.hou_ID  +"'>Quick View</a>" +
            "</div>" +
            "</div>" +
            "</a>";
        
    });
    $("#" + p_name).html(temp.split("'").join(''));
}
//Ajax
function CallAjax(url, type, data, contentType = "application/json", callback = undefined) {
    var rq = {
        type: type,
        url: url,
        contentType: contentType,
        success: function (res) {
            if (callback !== undefined) {
                callback(res);
            }
        }
    };
    if (type === "POST" || type === "post") {
        rq.data = JSON.stringify(data);
    }
    $.ajax(rq);
}

//lấy id theo url
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};