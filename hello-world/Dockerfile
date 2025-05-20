FROM tomcat:latest

# Clean default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy WAR into Tomcat webapps
COPY webapp.war /usr/local/tomcat/webapps/
