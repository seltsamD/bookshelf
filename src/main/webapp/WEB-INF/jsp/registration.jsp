<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<div class="container">
    <div class="col-sm-12 col-md-12 mainContainer">

    <form:form id="signUpForm" action="registration" method="post"  modelAttribute="user">
        <div class="form-group">
            <label for="username" class="required">Username</label>
            <form:input path="username" name="username" type="text" id="username" class="form-control"/>
            <form:errors path="username" cssClass="error"  />
        </div>

        <div class="form-group" >
            <label for="password" class="required">Password</label>
            <form:password path="password" name="password" id="userPassword" class="form-control"  />
            <form:errors path="password" cssClass="error" />
        </div>
        <div class="form-group">
            <label for="confirmationPassword" class="required">Confirmation password</label>
            <form:password path="confirmationPassword" name="confirmationPassword" class="form-control"  />
            <form:errors path="confirmationPassword" cssClass="error" />
        </div>

            <button type="submit" class="btn btn-raised btn-success">Registration</button>

    </form:form>

    </div>
</div>