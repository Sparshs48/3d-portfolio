import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Findways · USA</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building communication platform features with Spring Boot and
              React/React Native — real-time messaging, WebSocket & WhatsApp
              Business API integration enabling 1,000+ concurrent conversations.
              Deployed containerized microservices on AWS EKS with Terraform and
              Kubernetes; established CI/CD pipelines with GitHub, AWS CodeBuild,
              and CodePipeline boosting deployment speed 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Accenture · India</h5>
              </div>
              <h3>2021–23</h3>
            </div>
            <p>
              Developed REST APIs and scalable microservices in Java, Spring Boot,
              and Hibernate supporting 5M+ monthly operations. Containerized legacy
              monoliths with Docker and Kubernetes, migrating to Azure cloud.
              Accelerated release cycles 25% via Jenkins and Azure DevOps CI/CD.
              Built React dashboards with Power BI integration, reducing reporting
              efforts by 30% and optimizing SQL query execution time by 20%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
