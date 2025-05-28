import React from "react";
import InternationalForm from "../form/internationalform";

const CertificationPrograms = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
        :global(body) {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #f5f7ff;
          color: #2c2c2c;
        }
        .container {
          width: 90%;
          max-width: 1200px;
          margin: 3rem auto;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(78, 107, 255, 0.15);
          box-sizing: border-box;
        }
        .container h1 {
          text-align: center;
          color: rgb(78, 107, 255);
          font-weight: 700;
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .category {
          margin-bottom: 2rem;
          padding: 1.5rem;
          border-radius: 8px;
          background: rgba(78, 107, 255, 0.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
       .category h2 {
          color: rgb(78, 107, 255);
          font-weight: 600;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
       .category p {
          font-size: 1.1rem;
          margin: 0.5rem 0;
        }
        .highlight {
          font-weight: 700;
          color: rgb(78, 107, 255);
        }
        .icon {
          font-size: 2rem;
          margin-right: 0.5rem;
        }
        @media (max-width: 600px) {
        .container h1 {
            font-size: 2rem;
          }
         .category h2 {
            font-size: 1.5rem;
          }
        .category p {
            font-size: 1rem;
          }
        }
      `}</style>
      <div className="container">
        <h1>International Certification Programs</h1>

        <div className="category">
          <h2>
            <span className="icon">📡</span>Cisco Networking & Security
          </h2>
          <p>
            <span className="highlight">CCNA (200-301):</span> Industry-standard
            certification validating core networking and security skills.
          </p>
          <p>
            👉 We provide the best education and hands-on training to prepare
            you for the CCNA exam.
          </p>
        </div>

        <div className="category">
          <h2>
            <span className="icon">💻</span>CompTIA Certifications
          </h2>
          <p>
            <span className="highlight">A+ (220-1101 & 1102):</span> Entry-level
            certification for IT support and troubleshooting.
          </p>
          <p>
            👉 Get expert-led training to ace the CompTIA A+ exam with
            confidence.
          </p>
          <p>
            <span className="highlight">Network+ (N10-008):</span> Validates
            foundational networking skills for IT professionals.
          </p>
          <p>
            👉 Our courses offer practical networking knowledge aligned with the
            Network+ exam.
          </p>
          <p>
            <span className="highlight">Security+ (SY0-701):</span> Global
            benchmark for entry-level cybersecurity knowledge.
          </p>
          <p>
            👉 Master core security concepts with our top-rated Security+
            certification training.
          </p>
        </div>

        <div className="category">
          <h2>
            <span className="icon">☕</span>Oracle with Java & Database
          </h2>
          <p>
            <span className="highlight">Java SE (1Z0-829):</span> Certifies
            proficiency in Java programming and application development.
          </p>
          <p>
            👉 We deliver industry-relevant Java training to help you pass the
            Oracle certification.
          </p>
          <p>
            <span className="highlight">Oracle DBA (1Z0-082):</span> Validates
            skills in managing Oracle databases and SQL.
          </p>
          <p>
            👉 Learn from certified experts and become an Oracle-certified
            database administrator.
          </p>
        </div>

        <div className="category">
          <h2>
            <span className="icon">☁️</span>Microsoft Technologies
          </h2>
          <p>
            <span className="highlight">Azure Fundamentals (AZ-900):</span>{" "}
            Introductory certification for cloud concepts and Azure services.
          </p>
          <p>
            👉 Kickstart your cloud career with our best-in-class Azure
            fundamentals course.
          </p>
          <p>
            <span className="highlight">
              Microsoft 365 Fundamentals (MS-900):
            </span>{" "}
            Covers basics of Microsoft 365 services and cloud productivity.
          </p>
          <p>
            👉 Build your skills in modern workplace tools with our Microsoft
            365 training.
          </p>
          <p>
            <span className="highlight">Power BI (PL-300):</span> Certifies
            skills in data analysis and visualization with Microsoft Power BI.
          </p>
          <p>
            👉 Get hands-on with real-world data to excel in Power BI and pass
            the PL-300 exam.
          </p>
        </div>

        <div className="category">
          <h2>
            <span className="icon">🐧</span>Linux & Open Source
          </h2>
          <p>
            <span className="highlight">RHCSA (EX200):</span> Validates Red Hat
            Linux administration and command-line skills.
          </p>
          <p>
            👉 Gain deep Linux skills with our expert-led RHCSA preparation.
          </p>
          <p>
            <span className="highlight">LPIC-1 (101-500 & 102-500):</span>{" "}
            Proves basic Linux administration across major distributions.
          </p>
          <p>
            👉 Learn Linux essentials from certified instructors and pass the
            LPIC-1 exams easily.
          </p>
        </div>

        <div className="category">
          <h2>
            <span className="icon">🛡️</span>Cybersecurity & SOC
          </h2>
          <p>
            <span className="highlight">CEH (312-50):</span> Certifies ethical
            hacking and penetration testing techniques.
          </p>
          <p>
            👉 Train with cybersecurity professionals to become a Certified
            Ethical Hacker.
          </p>
          <p>
            <span className="highlight">CompTIA CySA+ (CS0-003):</span> Focuses
            on threat detection and response in security operations.
          </p>
          <p>
            👉 Advance your career in SOC with our comprehensive CySA+ training
            program.
          </p>
          <p>
            <span className="highlight">CSA (EC-Council):</span> Entry-level
            certification for Security Operations Center analysts.
          </p>
          <p>
            👉 Start your SOC journey with our focused Certified SOC Analyst
            (CSA) training.
          </p>
        </div>
      <InternationalForm/>
      </div>
    </>
  );
};

export default CertificationPrograms;
