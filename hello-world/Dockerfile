FROM tomcat:latest

# Clean default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy the WAR file into Tomcat webapps
COPY webapp/target/webapp.war /usr/local/tomcat/webapps/ROOT.war
