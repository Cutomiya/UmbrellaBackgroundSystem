pipeline{
    // 编译nodejs项目
    agent {label 'develop'} 
    stages{
        stage("Install dependencies") {
            steps {
                echo "Install dependencies"
                sh "npm install"
            }

            steps {
                sh "npm run build"
            }
        }
    }
}
