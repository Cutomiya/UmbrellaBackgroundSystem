pipeline {
    // jenkins 编译nodejs项目   
    tools{
        nodejs 'nodejs'
    }
    parameters {
        gitParameter branchFilter: 'origin/(.*)', defaultValue: 'develop', name: 'BRANCH', type: 'PT_BRANCH'
    }
    stages {
        if(env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop') {
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
}