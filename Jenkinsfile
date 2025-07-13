// pipeline {
//     agent any
//     environment {
//         DOCKER_IMAGE = 'jeniks-deploy'
//     }
//     stages {
//         stage('Clone') {
//             steps {
//                 git 'https://github.com/arish9720/deploy.git'
//             }
//         }
//         stage('Install') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh 'npm test || true' // Optional
//             }
//         }
//         stage('Build Docker Image') {
//             steps {
//                 sh 'docker build -t $DOCKER_IMAGE .'
//             }
//         }
//         stage('Run App') {
//             steps {
//                 sh 'docker stop node-app || true && docker rm node-app || true'
//                 sh 'docker run -d -p 3000:3000 --name node-app $DOCKER_IMAGE'
//             }
//         }
//     }
// }

pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/arish9720/deploy.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
      stage('Test') {
    steps {
        sh 'npm test || echo "Tests failed, but continuing..."'
    }
}

        stage('Build & Deploy with Docker Compose') {
            steps {
                // Stop existing containers
                sh 'docker-compose down || true'
                
                // Build & run containers (Node + Postgres)
                sh 'docker-compose up --build -d'
            }
        }
    }
}
