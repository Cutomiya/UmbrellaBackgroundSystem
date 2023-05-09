pipeline{
    // 编译nodejs项目
    agent {label 'develop'} 
    stages{
        stage(){
            steps{
                echo "Hello World"
            }
        }
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
