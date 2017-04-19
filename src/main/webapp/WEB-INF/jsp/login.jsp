<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<div class="container">
    <div class="col-sm-12 col-md-12 mainContainer">
        <div id="login">
            <h1>Please enter your login and password</h1>
            <form id="signInForm" action="/login" method="post">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" autofocus/>
                <div class="form-group sizing-between">
                    <label for="username" class="required">Username</label>
                    <input type="text" id="username" name="username" class="form-control"/>
                </div>
                <div class="form-group sizing-between">
                    <label for="password" class="required">Password</label>
                    <input type="password" id="password" name="password" class="form-control"/>
                </div>
                <button type="submit" class="btn btn-raised btn-success">Login</button>
            </form>
        </div>
    </div>
</div>

