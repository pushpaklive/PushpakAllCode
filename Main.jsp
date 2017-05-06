<%@ page import = "java.io.*,java.util.*" %>
<%
   // Get session creation time.
   Date createTime = new Date(session.getCreationTime());
   
   // Get last access time of this Webpage.
   Date lastAccessTime = new Date(session.getLastAccessedTime());

   String title = "Welcome Back to my website";
   Integer visitCount = new Integer(0);
   String visitCountKey = new String("visitCount");
   String userIDKey = new String("userID");
   String userID = new String("ABCD");

   // Check if this is new comer on your Webpage.
   if (session.isNew() ){
      title = "Welcome to my website";
      session.setAttribute(userIDKey, userID);
      session.setAttribute(visitCountKey,  visitCount);
   } 
   visitCount = (Integer)session.getAttribute(visitCountKey);
   visitCount = visitCount + 1;
   userID = (String)session.getAttribute(userIDKey);
   session.setAttribute(visitCountKey,  visitCount);
%>

<html>
   <head>
      <title>Session Tracking</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">     
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </head>
   
   <body>
      <div class="panel panel-primary">
       <div class="panel-heading">Tracking my session here</div>
        <div class="panel-body">
        <div class="container">
	         <table class="table table-striped" border = "1" align = "center"> 
	         <tr bgcolor = "#949494">
	            <th>Session info</th>
	            <th>Value</th>
	         </tr> 
	         <tr>
	            <td>Dynamic ID</td>
	            <td><% out.print( session.getId()); %></td>
	         </tr> 
	         <tr>
	            <td>Creation Time</td>
	            <td><% out.print(createTime); %></td>
	         </tr> 
	         <tr>
	            <td>Time of Last Access</td>
	            <td><% out.print(lastAccessTime); %></td>
	         </tr> 
	         <tr>
	            <td>User ID</td>
	            <td><% out.print(userID+session.getId()); %></td>
	         </tr> 
	         <tr>
	            <td>Number of visits</td>
	            <td><% out.print(visitCount); %></td>
	         </tr> 
	      </table> 
      </div>
     </div>
    </div>
      
   </body>
   </html>