<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" type="text/javascript"></script>

<div class="container">
    <div class="col-sm-12 col-md-12 mainContainer">
        <div id="tabs">
        <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#listGenre">GenreList</a></li>
            <li><a data-toggle="tab" href="#menu1" id="linkAdd">Add genre</a></li>
            <li><a data-toggle="tab" href="#">Edit genre</a></li>
        </ul>
        </div>
        <div class="tab-content">
            <div id="listGenre" class="tab-pane fade in active">

            </div>
            <div id="menu1" class="tab-pane fade">
                <form id="genreForm">
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" autofocus/>
                    <div class="form-group sizing-between">
                        <label for="genreName" class="required">Name of genre</label>
                        <input type="text" id="genreName" name="genreName" class="form-control"/>
                        <errors path="address" cssClass="error"/>
                    </div>
                </form>
                <button id="addGenreBtn" class="btn btn-raised btn-success">Save</button>
            </div>
        </div>



    </div>
</div>

<spring:url value="/js/genre/genre.js" var="genreJS"/>
<script src="${genreJS}"></script>
