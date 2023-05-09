pipeline {
    // jenkins 编译nodejs项目
    agent{       
        docker {
            image 'node:20.1.0-alpine3.17' 
            args '-p 3000:3000' 
        }
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