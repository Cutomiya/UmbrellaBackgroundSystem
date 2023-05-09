pipeline {
    // jenkins 编译nodejs项目   
    agent any
    tools{
        nodejs 'nodejs'
    }
    stages {
        stage('Install dependencies') {
            if(env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop') {
                steps {
                    sh 'npm install'
                }
            }
        }
        stage('build') {
            if(env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop') {
                steps {
                    sh 'npm run build'
                }
            }
        }
    }
}