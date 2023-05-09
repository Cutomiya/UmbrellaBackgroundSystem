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
    }
}