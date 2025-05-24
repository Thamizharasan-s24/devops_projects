# Dockerfile
FROM tomcat:8.5

# Clean default webapps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy your built WAR file as ROOT.war into Tomcat webapps folder
COPY ROOT.war /usr/local/tomcat/webapps/

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat server
CMD ["catalina.sh", "run"]
