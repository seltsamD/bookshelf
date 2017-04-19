'use strict';
let genre = null;
$(function () {

    $('#editGenreBtn').css('display', 'none');

    $('#genreForm').focusout(function () {
        if ($('#genreForm').valid())
            $('#addGenreBtn').prop('disabled', false);
    });
    $('#deleteGenreModal').dialog({
        modal: true,
        width: 550,
        resizable: false,
        autoOpen: false,
        show: {
            effect: 'drop',
            duration: 250
        },
        hide: {
            effect: 'drop',
            duration: 250
        }
    });
    getAllGenres();

    $('#addGenreBtn').click(function () {
        let data = {
            name: $("#genreForm #name").val()
        };
        $.ajax({
            type: 'POST',
            encoding: 'UTF-8',
            contentType: 'application/json; charset=UTF-8',
            url: 'restful/genre',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                getAllGenres();
                $('#tabs a[href="#listGenre"]').tab('show')
                clearForm();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
            }
        });
    });
    $('#editGenreBtn').click(function () {

        let data = {
            id: $("#genreForm #id").val(),
            name: $("#genreForm #name").val(),
        };
        $.ajax({
            type: 'PUT',
            encoding: 'UTF-8',
            contentType: 'application/json; charset=UTF-8',
            url: 'restful/genre',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                getAllGenres();
                $('.nav-tabs a[href="#listGenre"]').tab('show');
                clearForm();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
            }
        });
    });    
    function getAllGenres() {
        $('#listGenre').empty();
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
                            '<span onclick="removeGenre('+value.id+')" class="glyphicon glyphicon-trash cursor"></span> '+
                            '<span onclick="editGenre('+value.id+')" class="glyphicon glyphicon-pencil cursor"></span> '+
                            '<a data-toggle="collapse" data-parent="#collapse-group" href="#'+value.id+'"><h2>'+value.name+'  <span class="badge">'+value.countBook+'</span></h2></a>' +
                        '</h4></div>' +
                        '<div id="'+value.id+'" class="panel-collapse collapse">' +
                           ' <div class="panel-body">';

                        let list = '<ul type="none">';
                        $.each(value.bookDto, function (key1, value1) {
                            list = list + '<li>' +value1.authorName + ' "' +  value1.name + '"</li>'
                        });
                        list = list + '</ul>';


                         col =  col + list +'</div></div></div>';
                        $('#listGenre').append(col);
                    }

                });
            }
        });

    }
    $('#cancelGenreBtn').click(function () {
        $('#genreForm').validate().resetForm();
        $('#genreForm #id').val(null);
    });

    $('#deleteYesButton').click(function () {
        $.ajax({
            type: 'DELETE',
            encoding: 'UTF-8',
            contentType: 'charset=UTF-8',
            url: 'restful/genre/' + genre,
            success: function (result) {
                $('.nav-tabs a[href="#listGenre"]').tab('show');
                $('#deleteGenreModal').dialog('close');
                getAllGenres();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
            }
        });
    });
    $('#deleteNoButton').click(function () {
        $('#deleteGenreModal').dialog('close');
    });

    function clearForm() {
        $('#id').empty();
        $('#name').empty();
        $('#genreProcessTitle').text("Add genre");
    }

});

function removeGenre(id) {
    genre = id;
    $('#deleteGenreModal').dialog("open");
}

function editGenre(id) {
    $('#genreProcessTitle').text("Edit genre");
    $.ajax({
        type: 'GET',
        encoding: 'UTF-8',
        contentType: 'charset=UTF-8',
        url: 'restful/genre/' + id,
        success: function (result) {
            $('#id').val(result.id);
            $('#name').val(result.name);
            $('#editGenreBtn').css('display', 'inline');
            $('#addGenreBtn').css('display', 'none');
            $('.nav-tabs a[href="#changeGenre"]').tab('show');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $('#errorMessage').html(xhr.responseText);
        }
    });

}
