pipeline {
    // jenkins 编译nodejs项目
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'develop', credentialsId: 'gitea', url: 'http://10.200.140.225/talangTeam/umbrella-managemer.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}