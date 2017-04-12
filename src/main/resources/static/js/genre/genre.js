'use strict';
let table = null;
$(function () {
    getAllGenres();

    $('#addGenreBtn').click(function () {
        let data = {
            name: $("#genreForm #genreName").val()
        };
        $.ajax({
            type: 'POST',
            encoding: 'UTF-8',
            contentType: 'application/json; charset=UTF-8',
            url: 'restful/genre',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                $('#tabs a[href="#listGenre"]').tab('show')
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
                $('#errorWindow').modal('show');
            }
        });
    });

    // $('#listGenre').click(function () {
    //     getAllGenres();
    // });
    //

    function getAllGenres() {
        $.ajax({
            url: 'restful/genre/',
            encoding: 'UTF-8',
            contentType: 'application/json',
            datatype: 'json',
            success: function (data) {
                $.each(data, function (key, value) {
                    if (value !== undefined || value != null){
                        let col = '<div class="panel panel-default"> ' +
                           '<div class="panel-heading">' +
                            '<h4 class="panel-title">' +
                            '<a data-toggle="collapse" data-parent="#collapse-group" href="#'+value.id+'">'+value.name+'</a>' +
                        '</h4></div>' +
                        '<div id="'+value.id+'" class="panel-collapse collapse">' +
                           ' <div class="panel-body">';

                        let list = '<ul type="none">';
                        $.each(value.books, function (key1, value1) {
                            list = list + '<li>' + value1.name + '</li>'
                        });
                        list = list + '</ul>';


                         col =  col + list +'</div></div></div>';
                        $('#listGenre').append(col);
                    }

                });
            }
        });

    }

});

function removeGenre(id) {

    $.ajax({
        type: 'DELETE',
        encoding: 'UTF-8',
        contentType: 'text/html; charset=UTF-8',
        url: 'restful/genre/' + id,
        success: function (result) {
            getAllGenres();
            var index = $('#tabs a[href="#listGenre"]').parent().index();
            $("#tabs").tabs("option", "active", index);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $('#errorMessage').html(xhr.responseText);
        }
    });
}


