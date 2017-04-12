<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<spring:url value="/js/lib/dataTables.bootstrap4.min.js" var="dataTablesBoot" />
<script src="${dataTablesBoot}"></script>

<spring:url value="/js/lib/jquery.dataTables.min.js" var="dataTables" />
<script src="${dataTables}"></script>

<spring:url value="/css/dataTables.bootstrap4.min.css" var="dataTableCss" />
<link href="${dataTableCss}" rel="stylesheet" type="text/css" />


<div class="container">
    <div class="col-sm-12 col-md-12 mainContainer">
        <div id="tabs">
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#listBook">Book list</a></li>
                <li><a data-toggle="tab" href="#menu1" id="linkAdd">Add book</a></li>
            </ul>
        </div>
        <div class="tab-content">
            <div id="listBook" class="tab-pane fade in active">
                <table class="for-table table table-hover reg-form" id="book-table">
                    <thead>
                    <tr>
                        <th class="th-size"><strong>Name</strong></th>
                        <th class="th-size"><strong>ISBN</strong></th>
                        <th class="th-size"><strong>Author</strong></th>
                        <th class="th-size"><strong>Genre</strong></th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div id="menu1" class="tab-pane fade">
                <form id="bookForm">
                     <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" autofocus/>
                    <div class="form-group sizing-between">
                        <label for="name" class="required">Title</label>
                        <input type="text" id="name" name="name" class="form-control"/>
                    </div>
                    <div class="form-group sizing-between">
                        <label for="isbn" class="required">ISBN</label>
                        <input type="text" id="isbn" name="isbn" class="form-control"/>

                    </div>
                    <div class="form-group sizing-between">
                        <label for="description" class="required">Description</label>
                        <textarea rows="10" id="description" name="description" class="form-control"></textarea>
                    </div>
                    <div class="form-group sizing-between">
                        <label for="author" class="required">Author</label>
                        <select id="author" class="form-control" name="author_id">

                        </select>
                    </div>
                    <div class="form-group sizing-between">
                        <label for="genre" class="required">Genre</label>
                        <select id="genre" class="form-control" name="genre_id">

                        </select>
                    </div>

                </form>
                <button id="addBookBtn" class="btn btn-raised btn-success">Save</button>
            </div>
        </div>



    </div>
</div>

<spring:url value="/js/book/book.js" var="bookJS"/>
<script src="${bookJS}"></script>
