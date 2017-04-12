'use strict';
let table = null;
let authors = {};
let genres = {};
$(function () {

    $.ajax({
        type: 'GET',
        encoding: 'UTF-8',
        url: 'restful/book',
        success: function (result) {
            $.each(result, function (key, value) {
                authors[value.id] = value.firstName + ' ' + value.lastName;
                $('#author').append("<option value='" + value.id + "'>" + value.firstname + ' ' + value.lastname + "</option>");
            });
        }
    });
});