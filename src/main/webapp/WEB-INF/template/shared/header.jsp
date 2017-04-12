<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<head>
    <link rel="stylesheet" type="text/css" href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"/>
    <spring:url value="/css/main.css" var="springCss"/>
    <link rel="stylesheet" type="text/css" href="${springCss}"/>
    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.13/js/dataTables.bootstrap.min.js"></script>

    <spring:url value="/js/lib/jquery-ui.min.js" var="uiMinJs"/>
    <script src="${uiMinJs}"></script>

    <spring:url value="/js/lib/bootstrap.min.js" var="bootstraMinJs"/>
    <script src="${bootstraMinJs}"></script>

</head>
<body>
<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Bookshelf</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">

                <li><a href='<c:url value="/genre" />'>Genre</a></li>
                <li><a href='<c:url value="/author" />'>Authors</a></li>
                <li><a href='<c:url value="/book" />'>Books</a></li>

                <li>

                    <form action="/signin/twitter" method="post">
                        <button class="btn btn-default">Login</button>
                    </form>

                </li>
            </ul>
        </div>
    </div>
</nav>