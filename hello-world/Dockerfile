FROM tomcat:latest

# Copy the default Tomcat webapps (optional, but you had this)
RUN cp -R /usr/local/tomcat/webapps.dist/* /usr/local/tomcat/webapps

# Copy the built WAR file into Tomcat webapps
# Replace 'webapp.war' with the actual name of your WAR file
COPY webapp/target/webapp.war /usr/local/tomcat/webapps/
