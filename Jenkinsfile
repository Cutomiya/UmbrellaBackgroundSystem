pipeline {
    // jenkins 编译nodejs项目   
    agent any
    tools{
        nodejs 'nodejs'
    }
    stages {
        stage('Install dependencies') {            
            steps {
                if(env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop') {
                    sh 'npm install'
                }
            }
        }
        stage('build') {
            steps {
                if(env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop') {
                sh 'npm run build'
                }
            }
        }
    }
}