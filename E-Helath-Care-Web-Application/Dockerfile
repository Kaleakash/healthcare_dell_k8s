FROM openjdk:11
EXPOSE 8080
#COPY target/MySpringRestMySQL.jar .
ADD target/spring-boot-healthcare.jar spring-boot-healthcare.jar
ENTRYPOINT ["java","-jar","/spring-boot-healthcare.jar"]