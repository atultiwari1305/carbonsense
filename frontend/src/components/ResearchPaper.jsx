import React from "react";
import "./ResearchPaper.css";
import {
  FaLeaf,
  FaGlobeAsia,
  FaChartLine,
  FaBookReader,
  FaDownload,
} from "react-icons/fa";

const ResearchPaper = () => {
  return (
    <div className="research-container">
      <h1 className="research-title">Research & Climate Studies</h1>

      <div className="research-content">

        {/* ======== SECTION 1: Summary Overview ======== */}
        <section className="research-section fade-in">
          <h2>Study Overview</h2>

          <div className="overview-enhanced">
            <p className="overview-intro">
              CarbonSense India presents a comprehensive, multi-dimensional analysis of India’s carbon footprint.
              The study integrates scientific research, satellite analytics, and public data to highlight the nation's
              climate vulnerabilities and pathways to sustainable growth.
            </p>

            <div className="overview-points">
              <div className="overview-card">
                <h3>Nationwide Emission Mapping</h3>
                <p>
                  A consolidated view of carbon emissions across all major sectors, including
                  transport, industry, energy, agriculture, waste, and land use.
                </p>
              </div>

              <div className="overview-card">
                <h3>Climate Vulnerability Insights</h3>
                <p>
                  Identifies climate-sensitive regions, extreme-weather–prone states, and sectors contributing the most
                  to India’s climate risk.
                </p>
              </div>

              <div className="overview-card">
                <h3>Policy Impact Assessment</h3>
                <p>
                  Evaluates national and state-level climate initiatives, revealing implementation gaps and opportunities
                  for enhanced environmental governance.
                </p>
              </div>

              <div className="overview-card">
                <h3>Public-Oriented Visualization</h3>
                <p>
                  Transforms complex datasets into simple, intuitive dashboards that empower citizens, students,
                  and researchers to understand climate action clearly.
                </p>
              </div>
            </div>

            <p className="overview-footer">
              This overview forms the foundation for CarbonSense India — a public-facing climate knowledge platform designed to
              simplify environmental data and support action-driven, sustainable decision-making.
            </p>
          </div>
        </section>


        {/* ======== SECTION 2: Key Findings Cards ======== */}
        <section className="research-section fade-in">
          <h2>Key Findings</h2>

          <div className="key-findings-grid">
            <div className="finding-card">
              <FaChartLine className="find-icon" />
              <h3>Transport Is a Major Contributor</h3>
              <p>
                Road transport generates over 80% of transportation emissions,
                driven by rapid motorization and diesel-based freight systems.
              </p>
            </div>

            <div className="finding-card">
              <FaGlobeAsia className="find-icon" />
              <h3>Coal Dominates Energy</h3>
              <p>
                Coal accounts for 70%+ of electricity generation, making power
                production the largest emissions source nationwide.
              </p>
            </div>

            <div className="finding-card">
              <FaLeaf className="find-icon" />
              <h3>Agriculture Emits Methane</h3>
              <p>
                Livestock and rice cultivation produce heavy methane loads,
                intensifying India’s climate vulnerability.
              </p>
            </div>

            <div className="finding-card">
              <FaBookReader className="find-icon" />
              <h3>Public Awareness Gap</h3>
              <p>
                Climate data is fragmented and inaccessible, limiting public
                engagement and slowing policy impact.
              </p>
            </div>
          </div>
        </section>

        {/* ======== SECTION 3: Methodology Diagram ======== */}
        <section className="research-section fade-in">
          <h2>Research Methodology</h2>

          <div className="method-flow">
            <div className="method-step">
              <span className="step-circle">1</span>
              <p>Government & Open-Source Datasets</p>
            </div>
            <div className="method-arrow">→</div>

            <div className="method-step">
              <span className="step-circle">2</span>
              <p>Satellite-Based Emission Tracking</p>
            </div>
            <div className="method-arrow">→</div>

            <div className="method-step">
              <span className="step-circle">3</span>
              <p>Sector-wise Emission Modeling</p>
            </div>
            <div className="method-arrow">→</div>

            <div className="method-step">
              <span className="step-circle">4</span>
              <p>Visualization & Climate Interaction Tools</p>
            </div>
          </div>

          <p className="method-desc">
            The study combines statistical datasets, geospatial mappings,
            real-time tracking, and AI-assisted pattern detection to derive clean,
            interpretable insights for CarbonSense India.
          </p>
        </section>

        {/* ======== SECTION 4: Why CarbonSense Matters ======== */}
        <section className="research-section fade-in">
          <h2>Why This Study Matters</h2>

          <ul className="why-list">
            <li>Transforms complex environmental data into simple, public-friendly visuals.</li>
            <li>Shows regional disparities in emissions and climate vulnerability.</li>
            <li>Supports India’s Net-Zero 2070 commitment through transparent reporting.</li>
            <li>Empowers students, researchers, and citizens with open climate knowledge.</li>
            <li>Promotes sustainable behavior change at the ground level.</li>
          </ul>
        </section>

        {/* ======== SECTION 5: Download Research Paper ======== */}
        <section className="research-section fade-in">
          <h2>Full Research Paper</h2>
          <p>
            Access the complete research document covering India’s climate
            history, emissions modeling, vulnerability mapping, and required policy
            actions.
          </p>

          <a
            href="/research/complete-research-paper.pdf"
            download
            className="download-btn full-download"
          >
            <FaDownload /> Download Full Paper (PDF)
          </a>
        </section>
      </div>
    </div>
  );
};

export default ResearchPaper;