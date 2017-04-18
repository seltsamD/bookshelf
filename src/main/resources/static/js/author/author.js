'use strict';
let table = null;
let author;
$(function () {

    $('#editAuthorBtn').css('display', 'none');

    $('#authorForm').focusout(function () {
        if ($('#authorForm').valid())
            $('#addAuthorBtn').prop('disabled', false);
    });

    $('#deleteAuthorModal').dialog({
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


    getAllAuthors();

    $('#addAuthorBtn').click(function () {

        let data = {
            firstname: $("#authorForm #firstname").val(),
            lastname: $("#authorForm #lastname").val(),
            biography: $("#authorForm #biography").val(),
        };
        $.ajax({
            type: 'POST',
            encoding: 'UTF-8',
            contentType: 'application/json; charset=UTF-8',
            url: 'restful/author',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                getAllAuthors();
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
                                    '<h4 class="panel-title spanPadding">' +
                                    '<span id="deleteSpan" onclick="removeAuthor('+value.id+')" class="glyphicon glyphicon glyphicon-trash"></span> '+
                                    '<span onclick="editAuthor('+value.id+')" class="glyphicon glyphicon-pencil"></span> '+
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

    $('#deleteYesButton').click(function () {
        $.ajax({
            type: 'DELETE',
            encoding: 'UTF-8',
            contentType: 'text/html; charset=UTF-8',
            url: 'restful/author' + $.param({"id": author}),
            success: function (result) {
                $('.nav-tabs a[href="#listAuthor"]').tab('show');
                $('#deleteAuthorModal').dialog('close');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
            }
        });
    });
    $('#deleteNoButton').click(function () {
        $('#deleteAuthorModal').modal("hide");
    });

    $('#deleteSpan').click(function () {
        $('#deleteAuthorModal').modal("toggle");
    });

});

function removeAuthor(id) {
    author = id;
}

function editAuthor(id) {
   
}

