<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container">
    <div class="col-sm-12 col-md-12 mainContainer">
        <h1 id="name"></h1>
        <ul type="none">
            <li><strong>ISBN:</strong><span id="isbn"></span></li>
            <li><strong>Author name:</strong><span id="authorName"></span></li>
            <li><strong>Genre name:</strong><span id="genreName"></span></li>
        </ul>
        <p id="description"></p>
    </div>
</div>

<spring:url value="/js/book/bookInfo.js" var="bookJS"/>
<script src="${bookJS}"></script>
