<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container">
    <div class="col-sm-12 col-md-12 mainContainer">
        <div id="tabs">
        <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#listGenre">GenreList</a></li>
            <li><a data-toggle="tab" href="#changeGenre"><span id="genreProcessTitle">Add genre</span></a></li>
        </ul>
        </div>
        <div class="tab-content">
            <div id="listGenre" class="tab-pane fade in active">

            </div>
            <div id="changeGenre" class="tab-pane fade">
                <form id="genreForm">
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" autofocus/>
                    <input type="hidden" name="id" id="id"/>
                    <div class="form-group sizing-between">
                        <label for="name" class="required">Name of genre</label>
                        <input type="text" id="name" name="name" class="form-control"/>
                        <errors path="name" cssClass="error"/>
                    </div>
                </form>
                <div class="form-group btnGroup">
                    <button id="addGenreBtn" class="btn btn-raised btn-success" disabled>Save</button>
                    <button id="editGenreBtn" class="btn btn-raised btn-warning">Edit</button>
                    <button id="cancelGenreBtn" class="btn btn-raised btn-danger">Cancel</button>
                </div>
            </div>
        </div>



    </div>
</div>
<div id="deleteGenreModal" class="dialog" hidden>
    <p>
        Are you really want to delete this genre? All books of this genre will be delete.
    </p>
    <button id="deleteYesButton" class="btn  btn-success">Yes</button>
    <button id="deleteNoButton" class="btn btn-danger admWarningBtn" data-dismiss="modal">No</button>

</div>


<script type="text/javascript" src="${pageContext.request.contextPath}/js/genre/genre.validate.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/genre/genre.js"></script>

