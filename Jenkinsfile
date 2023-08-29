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
        stage("package") {
            when { 
                anyOf{
                    branch 'master'
                    branch 'develop'
                }
            }     
            steps {
                sh 'tar -zcvf dist.tar.gz dist'
            }
        }
        stage('update testing service'){
            when { 
                anyOf{
                    branch 'develop'
                }
            }     
            steps {
                sh 'cp dist.tar.gz /home/www/'
                sh 'cd /home/www/'
                sh 'rm -rf /home/www/dist'
                sh 'tar -zxvf /home/www/dist.tar.gz -C /home/www/'
            }
        }
        stage('send success message') {
            when { 
                anyOf{
                    branch 'master'
                    branch 'develop'
                }
            }     
            steps {
                sh label: 'python3', script: 'python3 /home/jenkins_home/script/feishu.py ${JENKINS_URL} ${JOB_NAME}-${BUILD_NUMBER} 成功'
            }
        }
    }
    post{
        failure{ 
            sh label: 'python3', script: 'python3 /home/jenkins_home/script/feishu.py ${JENKINS_URL} ${JOB_NAME}-${BUILD_NUMBER} 失败'
        }
    }
}