pipeline {
    // 编译nodejs项目
    agent {
        label 'develop'
    }
    stages {
        stage('Build') {
            steps { 
                echo "Install dependencies"
                sh "npm install"
                sh "npm run build"
            }
        }
    }
}