web java -Dserver.port=$PORT $JAVA_OPTS -jar target/app.jar

web java $JAVA_OPTS \
        -Djava.security.egd=file:/dev/./urandom \
        -DPORT=$PORT \
        -DMONGO_HOST=$MONGO_HOST \
        -DMONGO_PORT=$MONGO_PORT \
        -DMONGO_DB=$MONGO_DB \
        -DMONGO_USER=$MONGO_USER \
        -DMONGO_PASSWORD=$MONGO_PASSWORD \
        -jar /app.jar