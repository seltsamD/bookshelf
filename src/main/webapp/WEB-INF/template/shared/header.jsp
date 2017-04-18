<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Bookshelf</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <sec:authorize access="isAuthenticated()">
                    <li><a href='<c:url value="/genre" />'><span class="glyphicon glyphicon-tags"></span> Genre</a></li>
                    <li><a href='<c:url value="/author" />'><span class="glyphicon glyphicon-user"></span> Authors</a></li>
                    <li><a href='<c:url value="/book" />'><span class="glyphicon glyphicon-book"></span> Books</a></li>
                    <li><a href='<c:url value="/logout" />'>Logout</a></li>
                </sec:authorize>

                <sec:authorize access="!isAuthenticated()">
                    <li><a href='<c:url value="/login" />'>Login</a></li>
                    <li><a href='<c:url value="/registration" />'>Registration</a></li>
                </sec:authorize>
            </ul>
        </div>
    </div>
</nav>

