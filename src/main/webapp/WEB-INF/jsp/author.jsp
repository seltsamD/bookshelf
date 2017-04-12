<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>


<div class="container">
    <div class="col-sm-12 col-md-12 mainContainer">
        <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#listAuthor">Author List</a></li>
            <li><a data-toggle="tab" href="#menu1" id="linkAdd">Add author</a></li>
            <li><a data-toggle="tab" href="#">Edit author</a></li>
        </ul>

        <div class="tab-content">
            <div id="listAuthor" class="tab-pane fade in active">
                <ul class="list-group" id="list-author">

                </ul>
            </div>
            <div id="menu1" class="tab-pane fade">
                <form id="authorForm">
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" autofocus/>
                    <div class="form-group sizing-between">
                        <label for="firstname" class="required">First name</label>
                        <input type="text" id="firstname" name="firstname" class="form-control"/>

                    </div>
                    <div class="form-group sizing-between">
                        <label for="lastname" class="required">Last name</label>
                        <input type="text" id="lastname" name="lastname" class="form-control"/>

                    </div>
                    <div class="form-group sizing-between">
                        <label for="biography" class="required">Biography</label>
                        <textarea rows="10" id="biography" name="biography" class="form-control"></textarea>

                    </div>
                </form>
                <button id="addAuthorBtn" class="btn btn-raised btn-success">Save</button>
            </div>
        </div>


    </div>
</div>

<spring:url value="/js/author/author.js" var="authorJS"/>
<script src="${authorJS}"></script>

