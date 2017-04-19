<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/lib/dataTables.bootstrap4.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/lib/jquery.dataTables.min.js"></script>

<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/dataTables.bootstrap4.min.css"/>


<div class="container">
    <div class="col-sm-12 col-md-12 mainContainer">
        <div id="tabs">
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#listBook">Book list</a></li>
                <li><a data-toggle="tab" href="#changeBook"><span id="bookProcessTitle">Add book</span></a></li>
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
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div id="changeBook" class="tab-pane fade">
                <form id="bookForm">
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" autofocus/>
                    <input type="hidden" name="id" id="id"/>
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
                <div class="form-group btnGroup">
                    <button id="addBookBtn" class="btn btn-raised btn-success" disabled>Save</button>
                    <button id="editBookBtn" class="btn btn-raised btn-warning">Edit</button>
                    <button id="cancelBookBtn" class="btn btn-raised btn-danger">Cancel</button>
                </div>
            </div>
        </div>


    </div>
</div>
<div id="deleteBookModal" class="dialog" hidden>
    <p>
        Are you really want to delete this book?
    </p>
    <button id="deleteYesButton" class="btn  btn-success">Yes</button>
    <button id="deleteNoButton" class="btn btn-danger admWarningBtn" data-dismiss="modal">No</button>

</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/book/book.validate.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/book/book.js"></script>
