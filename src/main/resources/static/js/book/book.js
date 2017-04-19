'use strict';
let table = null;
let authors = {};
let genres = {};
let book = null;
$(function () {

    $('#editBookBtn').css('display', 'none');

    $('#deleteBookModal').dialog({
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

    $('#bookForm').focusout(function () {
        if ($('#bookForm').valid())
            $('#addBookBtn').prop('disabled', false);
    });

    $.ajax({
        type: 'GET',
        encoding: 'UTF-8',
        url: 'restful/author',
        success: function (result) {
            $.each(result, function (key, value) {
                authors[value.id] = value.firstName + ' ' + value.lastName;
                $('#author').append("<option value='" + value.id + "'>" + value.firstname + ' ' + value.lastname + "</option>");
            });
        }
    });

    $.ajax({
        type: 'GET',
        encoding: 'UTF-8',
        url: 'restful/genre',
        success: function (result) {
            $.each(result, function (key, value) {
                authors[value.id] = value.firstName + ' ' + value.lastName;
                $('#genre').append("<option value='" + value.id + "'>" + value.name + "</option>");
            });
        }
    });

    getAllBooks();

    $('#addBookBtn').click(function () {
        let data = {
            name: $("#bookForm #name").val(),
            isbn: $("#bookForm #isbn").val(),
            description: $("#bookForm #description").val(),
            author_id: $("#bookForm #author").val(),
            genre_id: $("#bookForm #genre").val()
        };
        $.ajax({
            type: 'POST',
            encoding: 'UTF-8',
            contentType: 'application/json; charset=UTF-8',
            url: 'restful/book',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                getAllBooks();
                $('.nav-tabs a[href="#listBook"]').tab('show');
                clearForm();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
                $('#errorWindow').modal('show');
            }
        });
    });

    $('#editBookBtn').click(function () {
        let data = {
            id: $("#bookForm #id").val(),
            name: $("#bookForm #name").val(),
            isbn: $("#bookForm #isbn").val(),
            description: $("#bookForm #description").val(),
            author_id: $("#bookForm #author").val(),
            genre_id: $("#bookForm #genre").val()
        };
        $.ajax({
            type: 'PUT',
            encoding: 'UTF-8',
            contentType: 'application/json; charset=UTF-8',
            url: 'restful/book',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                $('.nav-tabs a[href="#listBook"]').tab('show');
                getAllBooks();
                clearForm();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
            }
        });
    });

    $('#listBook').click(function () {
        getAllBooks();
    });


    function getAllBooks() {

        $.ajax({
            url: 'restful/book/',
            encoding: 'UTF-8',
            contentType: 'application/json',
            datatype: 'json',
            success: function (data) {
                refreshTable(data);
            }
        });

    }

    $('#deleteYesButton').click(function () {
        $.ajax({
            type: 'DELETE',
            encoding: 'UTF-8',
            contentType: 'charset=UTF-8',
            url: 'restful/book/' + book,
            success: function (result) {
                $('.nav-tabs a[href="#listBook"]').tab('show');
                $('#deleteBookModal').dialog('close');
                getAllBooks();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
            }
        });
    });
    $('#deleteNoButton').click(function () {
        $('#deleteBookModal').dialog('close');
    });

    function clearForm() {
        $('#id').empty();
        $('#name').empty();
        $('#isbn').empty();
        $('#description').empty();
        $('#bookProcessTitle').text("Add book");
    }
});

function removeBook(id) {
    book = id;
    $('#deleteBookModal').dialog("open");
}

function editBook(id) {
    $('#bookProcessTitle').text("Edit book");
    $.ajax({
        type: 'GET',
        encoding: 'UTF-8',
        contentType: 'charset=UTF-8',
        url: 'restful/book/' + id,
        success: function (result) {
            $('#id').val(result.id);
            $('#name').val(result.name);
            $('#isbn').val(result.isbn);
            $('#description').val(result.description);
            $('#author').val(result.author_id);
            $('#genre').val(result.genre_id);

            $('#editBookBtn').css('display', 'inline');
            $('#addBookBtn').css('display', 'none');
            $('.nav-tabs a[href="#changeBook"]').tab('show');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $('#errorMessage').html(xhr.responseText);
        }
    });

}


function refreshTable(data) {
    if (table != null)
        table.destroy();

    table = $('#book-table').DataTable({
        processing: true,
        data: data,
        rowId: 'id',
        columnDefs: [{
            'searchable': false,
            'orderable': false,
            'targets': 0
        }],
        columns: [
            {
                'data': 'name'
            },
            {
                'data': 'isbn'
            },
            {
                'data': 'authorName'
            },
            {
                'data': 'genreName'
            },
            {
                'data': 'id',
                'render': function (data, type, row) {
                    return '<span onclick="removeBook(' + data + ')" class="glyphicon glyphicon-trash cursor"></span> ';
                }
            },
            {
                'data': 'id',
                'render': function (data, type, row) {
                    return '<span onclick="editBook(' + data + ')" class="glyphicon glyphicon-pencil cursor"></span> ';
                }
            }

        ],
        'pagingType': 'simple_numbers'
    });

}

