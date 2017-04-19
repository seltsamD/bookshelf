'use strict';
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
                clearForm();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
                $('#errorWindow').modal('show');
            }
        });
    });

    $('#editAuthorBtn').click(function () {

        let data = {
            id: $("#authorForm #id").val(),
            firstname: $("#authorForm #firstname").val(),
            lastname: $("#authorForm #lastname").val(),
            biography: $("#authorForm #biography").val()
        };
        $.ajax({
            type: 'PUT',
            encoding: 'UTF-8',
            contentType: 'application/json; charset=UTF-8',
            url: 'restful/author',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                getAllAuthors();
                $('.nav-tabs a[href="#listAuthor"]').tab('show');
                clearForm();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
            }
        });
    });

    $('#cancelAuthorBtn').click(function () {
        $("#authorForm").validate().resetForm();
    });

    function getAllAuthors() {
        $('#listAuthor').empty();
        $.ajax({
            url: 'restful/author/',
            encoding: 'UTF-8',
            contentType: 'application/json',
            datatype: 'json',
            success: function (data) {
                $.each(data, function (key, value) {
                    if (value !== undefined || value != null) {
                        let col = '<div class="panel panel-default"> ' +
                            '<div class="panel-heading">' +
                            '<h4 class="panel-title spanPadding">' +
                            '<span onclick="removeAuthor(' + value.id + ')" class="glyphicon glyphicon-trash cursor"></span> ' +
                            '<span onclick="editAuthor(' + value.id + ')" class="glyphicon glyphicon-pencil cursor"></span> ' +
                            '<a data-toggle="collapse" data-parent="#collapse-group" href="#author' + value.id + '"><h2>' +
                            value.firstname + ' ' + value.lastname + '</h2></a>' + value.biography +
                            '</h4></div>' +
                            '<div id="author' + value.id + '" class="panel-collapse collapse">' +
                            ' <div class="panel-body">';

                        let list = '<ul type="none">';
                        $.each(value.books, function (key1, value1) {
                            list = list + '<li>' + value1.name + '</li>'
                        });
                        list = list + '</ul>';


                        col = col + list + '</div></div></div>';
                        $('#listAuthor').append(col);
                    }

                });

            }
        });

    }

    $('#deleteYesButton').click(function () {
        $.ajax({
            type: 'DELETE',
            encoding: 'UTF-8',
            contentType: 'charset=UTF-8',
            url: 'restful/author/' + author,
            success: function (result) {
                $('.nav-tabs a[href="#listAuthor"]').tab('show');
                $('#deleteAuthorModal').dialog('close');
                getAllAuthors();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
            }
        });
    });
    $('#deleteNoButton').click(function () {
        $('#deleteAuthorModal').dialog('close');
    });

    function clearForm() {
        $('#id').empty();
        $('#firstname').empty();
        $('#lastname').empty();
        $('#biography').empty();
        $('#authorProcessTitle').text("Add author");
    }
});

function removeAuthor(id) {
    author = id;
    $('#deleteAuthorModal').dialog("open");
}

function editAuthor(id) {
    $('#authorProcessTitle').text("Edit author");
    $.ajax({
        type: 'GET',
        encoding: 'UTF-8',
        contentType: 'charset=UTF-8',
        url: 'restful/author/' + id,
        success: function (result) {
            $('#id').val(result.id);
            $('#firstname').val(result.firstname);
            $('#lastname').val(result.lastname);
            $('#biography').val(result.biography);
            $('#editAuthorBtn').css('display', 'inline');
            $('#addAuthorBtn').css('display', 'none');
            $('.nav-tabs a[href="#changeAuthor"]').tab('show');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $('#errorMessage').html(xhr.responseText);
        }
    });

}

