'use strict';
let table = null;
let authors = {};
let genres = {};
$(function () {

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
                $('#genre').append("<option value='" + value.id + "'>" + value.name+ "</option>");
            });
        }
    });

    getAllBooks();

    $('#addBookBtn').click(function () {
        let data = {
            name: $("#bookForm #name").val(),
            isbn: $("#bookForm #isbn").val(),
            description: $("#bookForm #description").val(),
            author_id:$("#bookForm #author").val(),
            genre_id:$("#bookForm #genre").val()
        };
        $.ajax({
            type: 'POST',
            encoding: 'UTF-8',
            contentType: 'application/json; charset=UTF-8',
            url: 'restful/book',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                $('.nav-tabs a[href="#listBook"]').tab('show');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorMessage').html(xhr.responseText);
                $('#errorWindow').modal('show');
            }
        });
    });

    $('#listBook').click(function () {
        getAllBooks();
    });


    function getAllBooks() {
        $('#list-book').empty();
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

});

function removeBook(id) {

    $.ajax({
        type: 'DELETE',
        encoding: 'UTF-8',
        contentType: 'text/html; charset=UTF-8',
        url: 'restful/book',
        data: id,
        success: function (result) {
            $('.nav-tabs a[href="#listBook"]').tab('show');
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

        ],
        'pagingType': 'simple_numbers',
        "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            var sDirectionClass;
            if (aData.active)
                sDirectionClass = "room";
            else
                sDirectionClass = "tr-not-active";

            $(nRow).addClass(sDirectionClass);
            return nRow;
        }
    });
    
}

