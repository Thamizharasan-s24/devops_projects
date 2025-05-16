# Use Amazon Corretto 17 base image
FROM amazoncorretto:17

# Copy jar file into container
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Run the jar file
ENTRYPOINT ["java","-jar","/app.jar"]
