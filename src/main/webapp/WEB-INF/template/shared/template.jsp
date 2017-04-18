<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html>
<head>
  <%@ page contentType="text/html; charset=UTF-8" %>
  <meta name="viewport" content="width=device-width"/>
  <link rel="stylesheet" type="text/css" href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"/>
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/main.css"/>

  <script type="text/javascript" src="${pageContext.request.contextPath}/js/lib/jquery.min.js"></script>
  <script type="text/javascript" src="${pageContext.request.contextPath}/js/lib/bootstrap.min.js"></script>
  <script type="text/javascript" src="${pageContext.request.contextPath}/js/lib/jquery.validate.min.js"></script>
  <script type="text/javascript" src="${pageContext.request.contextPath}/js/lib/jquery-ui.min.js"></script>


</head>

<body>
<div class="wrapper">
  <div class="header"><tiles:insertAttribute name="header"/></div>

  <div class="content"><tiles:insertAttribute name="body"/></div>
  <div class="content"><tiles:insertAttribute name="footer"/></div>
</div>

</body>
</html>
