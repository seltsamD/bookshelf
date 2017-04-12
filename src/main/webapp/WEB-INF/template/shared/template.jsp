<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>

<div class="wrapper">
  <div class="header"><tiles:insertAttribute name="header"/></div>

  <div class="content"><tiles:insertAttribute name="body"/></div>
  <div class="content"><tiles:insertAttribute name="footer"/></div>
</div>

</body>
</html>
