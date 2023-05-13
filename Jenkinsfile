pipeline {
    agent any
    
    environment{
        PATH="/opt/maven3/bin:$PATH"
    }
    stages{
        stage("git checkout"){
            steps{
                echo "hello"
            }
        }
        stage("maven build"){
            steps{
                sh "mvn clean package"
                sh "mv target/*.war target/myweb.war"
            }
        }
        stage("deploy-dev"){
            steps{
                sshagent(['tomcat']) {
            sh """
                scp -o StrictHostKeyChecking=no target/myweb.war ec2-user@172.31.42.197:/opt/tomcat8/webapps/
                
                ssh ec2-user@172.31.42.197 /opt/tomcat8/bin/shutdown.sh
                
                ssh ec2-user@172.31.42.197 /opt/tomcat8/bin/start.sh 
               """
        }
        }
            }
    }
}
