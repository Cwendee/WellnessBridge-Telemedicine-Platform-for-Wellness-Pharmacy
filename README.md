WELLNESSBRIDGE-TELEMEDICINE-PLATFORM-FOR-WELLNESS-PHARMACY

Project Name: WellnessBridge - Telemedicine Platform
Client: Wellness Pharmacy
Location: Lagos, Nigeria
Industry: Healthcare / Telemedicine
Date: October 10, 2024

OVERVIEW


WellnessBridge is a telemedicine platform developed for Wellness Pharmacy, a medium-sized healthcare company with over five branches in Lagos, Nigeria. The company sought to expand its services through a digital channel that enables remote consultations, prescription management, and medication delivery, as well as integration with health insurance providers to offer subsidized costs for its customers. 

The platform had to meet several key requirements: ensuring regulatory compliance (e.g., Health Record Registration Board of Nigeria (HRRBN), Pharmacists Council of Nigeria (PCN), National Information Technology Development Agency (NITDA)), scalability to accommodate growing demand, high availability for uninterrupted service, and robust monitoring to detect issues in real time.


BUSINESS REQUIREMENTS

1. Security and Compliance:
The system is designed to ensure compliance with healthcare regulations and data protection standards, such as HIPAA, PCN, and NITDA. This includes encrypting patient information, consultation records, and ens>

2. Scalability and High Availability:
The platform must handle a growing number of users and traffic spikes during peak hours, ensuring 24/7 availability and maintaining performance.

3. Real-Time Monitoring:
Continuous monitoring is necessary to ensure low latency during video consultations and fast access to medical records, with automated alerts for system performance issues.

4. Infrastructure as Code (IaC):
Terraform was chosen to automate the deployment and management of the infrastructure to ensure consistency and reliability across development, testing, and production environments.

5. Modularity for Future Expansion:
The platform’s architecture allows for easy integration of additional services, such as AI-based symptom checkers and other healthcare solutions, without disrupting the core system.


SOLUTION ARCHITECTURE

A 3-tier architecture was implemented using Amazon Elastic Kubernetes Service (EKS) to provide a scalable, resilient platform, with Terraform for automated infrastructure provisioning. The architecture consist>

1. Front-End Application:
* A React.js web app and mobile app deployed via AWS Application Load Balancer (ALB).
* Patients and healthcare providers can log in, schedule appointments, and communicate via secure chat and video calls.
* HTTPS is enabled via ALB for secure communication.

2. Back-End Application:
* A Node.js (or Python/Django) API running in the EKS cluster manages core business logic, such as appointment scheduling, notifications, video call setup, and integration with healthcare APIs for insurance ve>
* The API integrates with a MongoDB database for secure storage of patient data, including medical records, consultation logs, and appointment history.

3. Database Layer:
* A MongoDB instance deployed within the EKS cluster or managed externally via Amazon DocumentDB.
* Data is encrypted at rest and in transit to ensure compliance with regulatory standards.
* Automated backups and disaster recovery plans ensure data integrity and availability in the event of system failures.

4. Monitoring and Logging:
* Prometheus and Grafana were deployed to monitor the platform’s performance, including metrics such as API response times, database queries, and resource usage (CPU, memory).
* Grafana Dashboards provide real-time insights, while alerting mechanisms notify the team of any performance degradation or failures.

5. Infrastructure as Code with Terraform: Terraform is used to provision the entire infrastructure, including:
* EKS Cluster: Manages Kubernetes nodes and auto-scaling for high availability and performance.
* ALB/ELB: Provides secure, load-balanced access to the front-end and back-end services.
* VPC, Security Groups, IAM Roles: Ensures that network security and permissions are properly configured, following least-privilege access principles.
* MongoDB: Database provisioning as part of the cluster or externally via DocumentDB.
* EFS (Elastic File System): Used for storing large files, such as video consultation recordings.


PROJECT STRUCTURE

The directory structure of the project is as follows:

/wellnessbridge
├── backend
│   ├── grafana
│   │   └── dashboard.json
│   ├── prometheus
│   │   └── prometheus.yml
│   ├── node_modules
│   └── wellnessbridge-backend
│       ├── config
│       ├── data
│       ├── index.js
│       ├── logs
│       ├── metrics.js
│       ├── middleware
│       ├── mockData
│       ├── models
│       ├── node_modules
│       ├── package.json
│       ├── package-lock.json
│       ├── routes
│       └── server.js
└── frontend

Each component has its specific directory:

  - **Backend**:
     - `grafana/dashboard.json`: Grafana dashboard configuration.
     - `prometheus/prometheus.yml`: Prometheus configuration settings.
     - **wellnessbridge-backend**: Contains core backend logic and resources:
      - `config`: Configuration files for the backend.
      - `data`: Contains data-related files or scripts.
      - `index.js`: Entry point for the backend application.
      - `logs`: Directory for application logs.
      - `metrics.js`: Metrics monitoring setup for the backend.
     - `middleware`: Custom middleware functions.
     - `mockData`: Sample/mock data for testing purposes.
      - `models`: Database models.
      - `routes`: API route handlers.
      - `server.js`: Main server file that initializes and starts the application.

- **Frontend**: Holds the code for the client-facing React application.


TRIGGERS FOR THE SOLUTION

1. Sudden Growth in Users:
The telemedicine service is experiencing a surge in popularity, and the existing infrastructure cannot handle the increasing volume of consultations, resulting in slow performance and degraded user experience.

2. New Feature Rollouts:
As the company adds new services, such as third-party integrations with health insurance providers or an AI-based symptom checker, the system needs to be flexible and scalable to accommodate these changes.

3. Compliance Audits:
Wellness Pharmacy is preparing for audits by regulatory bodies like PCN and NITDA, and must ensure its infrastructure adheres to data security and healthcare compliance requirements.

4. Performance Issues with Video Calls:
The previous infrastructure experienced latency issues during video consultations, leading to a poor patient experience. The new system addresses these bottlenecks by improving resource allocation and monitori>

5. Need for Automated Deployments:
The company aims to use Infrastructure as Code (IaC) to minimize human error, speed up deployments, and ensure consistent environments for development, testing, and production.


BENEFITS

1. Scalability:
The EKS cluster automatically scales based on user demand, allowing the system to handle increased traffic during busy periods without performance loss.

2. High Availability:
The multi-availability zone setup ensures that the platform remains operational even in the event of infrastructure failures.

3. Security and Compliance:
The infrastructure follows strict security protocols, including data encryption, access controls, and monitoring, ensuring compliance with HIPAA, PCN, and NITDA regulations.

4. Improved Monitoring and Alerts:
Prometheus and Grafana provide real-time metrics and dashboards, allowing for proactive performance management and quick responses to issues.

5. Modularity and Flexibility:
The platform’s architecture supports easy integration of new services, ensuring that WellnessBridge can continue to evolve and meet future healthcare demands.

# PROJECT URLs & MONITORING

- **React App URL**: [http://wellnessbridge-telemedicine.s3-website-us-east-1.amazonaws.com](http://wellnessbridge-telemedicine.s3-website-us-east-1.amazonaws.com)
- **Frontend URL**: [http://172.18.232.109:5000](http://172.18.232.109:5000)
- **Frontend Metrics**: [http://localhost:5050/metrics](http://localhost:5050/metrics)
- **Backend URL**:[http://172.18.232.109:4000](http://localhost:4000)
- **Backend Metrics**: [http://localhost:4005/metrics](http://localhost:4005/metrics)
- **Grafana Dashboard**: [http://172.18.232.109:3000/dashboards](http://172.18.232.109:3000/dashboards)
- **Prometheus Graph**: [http://172.18.232.109:5050/graph](http://172.18.232.109:5050/graph)


CONCLUSION

The deployment of WellnessBridge has equipped Wellness Pharmacy with a modern, secure, and scalable telemedicine platform that can meet the growing demands of remote healthcare services. By leveraging Amazon EKS, Terraform, and Prometheus/Grafana, the platform ensures a reliable, compliant, and efficient user experience for patients and healthcare providers alike.


#Contact Information:
For further information about this project, please contact the DevOps Engineer responsible for the implementation at: pruddyanumudu@gmail.com or phone:+2347014887680

