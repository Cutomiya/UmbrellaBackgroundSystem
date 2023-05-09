pipeline {
    // jenkins 编译nodejs项目
    }
    agent any
    tools{
        nodejs '20.1.0'
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