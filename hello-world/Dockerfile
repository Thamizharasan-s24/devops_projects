# Use official Tomcat base image (version locked recommended)
FROM tomcat:8.5

# Optional: clear default webapps if you don't want them
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy your WAR file into the tomcat webapps folder as ROOT.war
COPY ROOT.war /usr/local/tomcat/webapps/

# Expose default Tomcat port
EXPOSE 8080

# Start Tomcat server
CMD ["catalina.sh", "run"]
