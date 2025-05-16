# Use a base image with Java
FROM tomcat:9.0-jdk17

# Remove default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy WAR to Tomcat webapps
COPY *.war /usr/local/tomcat/webapps/ROOT.war

# Expose port
EXPOSE 8085

# Start Tomcat
CMD ["catalina.sh", "run"]
