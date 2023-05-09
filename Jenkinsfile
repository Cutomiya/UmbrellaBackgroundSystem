pipeline {
    // jenkins 编译nodejs项目   
    agent {
        label 'develop' 
    }
    tools{
        nodejs 'nodejs'
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}