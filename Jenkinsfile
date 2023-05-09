pipeline {
    // jenkins 编译nodejs项目   
    agent any
    tools{
        nodejs 'nodejs'
    }
    stages {
        stage('Install dependencies') {    
            when { 
                // 检测是否为master和develop分支
                branch 'master'
                branch 'develop'
            }           
            steps {
                 sh 'npm install'
                
            }
        }
        stage('build') {
            when { 
                branch 'master'
            }     
            steps {
                sh 'npm run build'
            }
        }
    }
}