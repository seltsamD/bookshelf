'use strict';
let table = null;
$(function () {
    getAllAuthors();

    $('#addAuthorBtn').click(function () {
        let data = {
            firstname: $("#authorForm #firstname").val(),
            lastname: $("#authorForm #lastname").val(),
            biography: $("#authorForm #biography").val()
        };
        $.ajax({
            type: 'POST',
            encoding: 'UTF-8',
            contentType: 'application/json; charset=UTF-8',
            url: 'restful/author',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                $('.nav-tabs a[href="#listAuthor"]').tab('show');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
                $('#errorWindow').modal('show');
            }
        });
    });

    $('#listAuthor').click(function () {
        getAllAuthors();
    });


    function getAllAuthors() {
        $('#list-author').empty();
        $.ajax({
            url: 'restful/author/',
            encoding: 'UTF-8',
            contentType: 'application/json',
            datatype: 'json',
            success: function (data) {
                        $.each(data, function (key, value) {
                            if (value !== undefined || value != null){
                                let col = '<div class="panel panel-default"> ' +
                                    '<div class="panel-heading">' +
                                    '<h4 class="panel-title">' +
                                    '<a data-toggle="collapse" data-parent="#collapse-group" href="#'+value.id+'">'+
                                    value.firstname + ' ' + value.lastname + '</a>' +
                                    '</h4></div>' +
                                    '<div id="'+value.id+'" class="panel-collapse collapse">' +
                                    ' <div class="panel-body">';

                                let list = '<ul type="none">';
                                $.each(value.books, function (key1, value1) {
                                    list = list + '<li>' + value1.name + '</li>'
                                });
                                list = list + '</ul>';


                                col =  col + list +'</div></div></div>';
                                $('#list-author').append(col);
                            }

                        });

            }
        });

    }

});

function removeAuthor(id) {

    $.ajax({
        type: 'DELETE',
        encoding: 'UTF-8',
        contentType: 'text/html; charset=UTF-8',
        url: 'restful/author',
        data: id,
        success: function (result) {
            $('.nav-tabs a[href="#listAuthor"]').tab('show');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $('#errorMessage').html(xhr.responseText);
        }
    });
}


