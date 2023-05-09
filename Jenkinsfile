pipeline {
    // jenkins 编译nodejs项目   
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