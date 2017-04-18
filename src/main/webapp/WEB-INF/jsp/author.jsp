<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>


<div class="container">
    <div class="col-sm-12 col-md-12 mainContainer">
        <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#listAuthor">Author List</a></li>
            <li><a data-toggle="tab" href="#menu1" id="linkAdd">Add author</a></li>
            <li><a data-toggle="tab" href="#">Info author</a></li>
            <button type="button" class="btn btn-info btn-md" id="myBtn">Toggle Modal</button>
        </ul>

        <div class="tab-content">
            <div id="listAuthor" class="tab-pane fade in active">
                <ul class="list-group" id="list-author">

                </ul>
            </div>
            <div id="menu1" class="tab-pane fade">
                <h1 id="headAuthor"></h1>
                <form id="authorForm">
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" autofocus/>
                    <div class="form-group sizing-between">
                        <label for="firstname" class="required">First name</label>
                        <input type="text" id="firstname" name="firstname" class="form-control" required/>

                    </div>
                    <div class="form-group sizing-between">
                        <label for="lastname" class="required">Last name</label>
                        <input type="text" id="lastname" name="lastname" class="form-control" required/>

                    </div>
                    <div class="form-group sizing-between">
                        <label for="biography" class="required">Biography</label>
                        <textarea rows="10" id="biography" name="biography" class="form-control" required></textarea>
                    </div>
                </form>
                <div class="form-group btnGroup">
                    <button id="addAuthorBtn" class="btn btn-raised btn-success btn-lg" disabled>Save</button>
                    <button id="editAuthorBtn" class="btn btn-raised btn-warning btn-lg">Edit</button>
                    <button id="cancelAuthorBtn" class="btn btn-raised btn-danger btn-lg">Cancel</button>
                </div>


            </div>
        </div>


    </div>
</div>

<div id="deleteAuthorModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <p>
                    Are you really want to delete this author? All books of this author will be delete.
                </p>
            </div>
            <div class="modal-footer">
                <button id="deleteYesButton" class="btn  btn-success btn-lg">Yes</button>
                <button id="deleteNoButton" class="btn btn-danger btn-lg" data-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>


    <script type="text/javascript" src="${pageContext.request.contextPath}/js/author/author.validate.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/author/author.js"></script>


