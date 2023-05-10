pipeline {
    // jenkins 编译nodejs项目   
    agent any
    tools{
        nodejs 'nodejs'
    }
    stages {
        stage('Install dependencies') {    
            when { 
                anyOf{
                    branch 'master'
                    branch 'develop'
                }
            }           
            steps {
                 sh 'npm install'
                
            }
        }
        stage('build') {
            when { 
                anyOf{
                    branch 'master'
                    branch 'develop'
                }
            }     
            steps {
                sh 'npm run build'
            }
        }
        stage('post') {
            when { 
                anyOf{
                    branch 'master'
                    branch 'develop'
                }
            }     
            steps {
                sh label: 'python3', script: 'python3 /home/ubuntu/scrip/feishu.py ${JENKINS_URL} ${JOB_NAME}-${BUILD_NUMBER}'
            }
        }
    }
}