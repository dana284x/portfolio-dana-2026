import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const projectDetails = {
  sync: {
    number: '01',
    title: 'Sync',
    tagline: '| Case Study',
    intro: 'Sync is a digital wellness platform designed to bridge the gap between mental and physical health. By uniting specialists across disciplines into a collaborative care team, Sync empowers users to build cohesive, personalized wellness journeys.',
    credits: 'The project was developed during my final year at Shenkar in partnership with two designers, under the guidance of Nadav Barkan.',
    coreIssue: 'Lasting lifestyle change requires addressing both physical and mental wellbeing, yet fragmented care often makes the process harder to sustain. Without coordinated guidance, people are left managing multiple professionals and goals on their own, making bigger changes feel increasingly difficult to maintain.',
  },
  seasoned: {
    number: '02',
    title: 'Seasoned',
    tagline: '| Case Study',
    intro: 'Seasoned is a dynamic menu-planning platform that leverages real-time produce seasonality and market pricing data. Designed for chefs and culinary professionals, it streamlines menu design to be data-informed, time-efficient, and cost-effective.',
    credits: 'The project was developed during my third year at Shenkar as part of the Data Visualization course instructed by Mushon Zer-Aviv.',
    coreIssue: 'Commercial kitchens lack a single, reliable platform to track ingredient seasonality, market pricing, and availability. Without centralized data, chefs struggle with inaccurate dish pricing, miss when key produce is going out of season, and waste hours cross-referencing fragmented supplier lists.',
    researchIntro: 'To better understand how seasonality data could support menu planning, I first mapped the end-to-end user journey and analyzed the key flows involved in building a seasonal menu. Throughout the design process, I ran usability tests to validate core assumptions, explore data-visualization patterns, and refine the information hierarchy.',
    solutionIntro: 'A dynamic menu-planning tool that integrates live agricultural seasonality and wholesale pricing data, allowing chefs to make agile, cost-aware culinary decisions.',
  },
  greenlight: {
    number: '03',
    title: 'Greenlight',
    tagline: '| Case Study',
    intro: 'Greenlight is a decision-support platform that helps municipal Urban Renewal teams evaluate development proposals by analyzing geographic, social, and economic data and visualizing key tradeoffs for more transparent, balanced planning.',
    credits: 'The project was created during my third year at Shenkar under the guidance of Yair Ronen.',
    coreIssue: 'Evaluating urban renewal proposals requires balancing complex spatial, demographic, and economic factors. Yet this information is often fragmented across multiple sources, forcing municipal administrators to piece together data manually. This slows approval processes, creates administrative bottlenecks, and can lead to inconsistent or insufficiently informed development decisions.',
    jtbd: 'When reviewing a construction proposal, I need relevant geographic, social, and economic data in one place so I can evaluate it clearly and make an informed decision.',
    researchIntro: 'To understand how urban renewal projects are reviewed, I first mapped the approval process and the user flow through the system. I then analyzed how complex project management and construction platforms organize and present large volumes of data, using those patterns to inform the system’s information architecture and data visualization.',
    solutionIntro: 'A municipal decision-support system that unifies spatial, social, and economic data into a single evaluation hub, helping Urban Renewal teams assess complex construction proposals objectively and efficiently.',
  }
};

export default function ProjectPage() {
  const { id } = useParams();
  const currentId = id || 'sync';
  const project = projectDetails[currentId] || projectDetails.sync;

  if (currentId === 'sync') {
    return (
      <main style={{ marginBottom: '160px' }}>
        {/* Top Hero Banner - Outside container (Full width below header) */}
        <div className="case-study-hero-banner" style={{ height: 'auto', minHeight: 'unset', padding: 0, overflow: 'hidden', borderBottom: 'none', background: 'none' }}>
          <img 
            src="/art/cover - v1 (2).png" 
            alt="Sync Case Study Hero Banner" 
            style={{ width: '100%', aspectRatio: '5760 / 1944', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>

        {/* Header Block - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-header-block">
            <Link to="/" className="case-study-back-link">
              ← Back
            </Link>
            <div className="case-study-title-row">
              <h1 className="case-study-main-title">{project.title}</h1>
              <span className="case-study-tag-label">{project.tagline}</span>
            </div>

            <p className="case-study-intro-p">
              {project.intro}
            </p>

            <p className="case-study-credits">
              {project.credits}
            </p>
          </div>
        </div>

        {/* Media Banner 1 - Video Banner inside 170px container */}
        <div className="container reveal-on-scroll" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <video 
              src="/art/landingpage-sync-recording.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Section 01 Core Issue - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-section">
            <div>
              <h2 className="case-study-section-title">Core Issue</h2>
              <p className="case-study-section-p">
                Lasting lifestyle change requires addressing both physical and mental wellbeing, yet fragmented care often makes the process harder to sustain. Without coordinated guidance, people are left managing multiple professionals and goals on their own, making bigger changes feel increasingly difficult to maintain.
              </p>
            </div>
            <div className="case-study-number-badge">01</div>
          </div>
        </div>

        {/* Terracotta Quote Banner - Outside container, inner text inside 30px side margin container */}
        <div className="terracotta-quote-banner reveal-on-scroll">
          <div className="terracotta-quote-container">
            <p className="terracotta-quote-text">
              “There were countless times I stopped midway; the bigger the goal, the harder it was to sustain.”
            </p>
            <span className="terracotta-quote-author">- User Interviews</span>
          </div>
        </div>

        {/* Section 02 Research - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-section">
            <div>
              <h2 className="case-study-section-title">Research</h2>
              <p className="case-study-section-p">
                To understand why sustaining meaningful lifestyle changes is so difficult, we conducted a mixed-methods research combining statistical data, competitive benchmarking, and in-depth user and expert interviews.
              </p>

              <div className="research-insights-container">
                <span className="insights-tag-label">KEY INSIGHTS</span>

                {/* Insight 1 */}
                <div className="insight-item reveal-on-scroll">
                  <p className="insight-subheading">
                    There is a high drop-off rate in long-term lifestyle change efforts.
                  </p>
                  <div className="insight-body-wrapper">
                    <p className="insight-body-text">
                      79% of New Year's resolutions are health-related, yet <span className="highlight-terracotta-serif">only 9% of people</span> report successfully maintaining their goals throughout the year.
                    </p>
                    <span className="insight-citation">According to findings by Drive Research</span>
                  </div>
                </div>

                {/* Insight 2 */}
                <div className="insight-item reveal-on-scroll">
                  <p className="insight-subheading">
                    Market analysis revealed a lack of unified wellness platforms that bring the full care journey into one place.
                  </p>
                  <div className="insight-body-wrapper">
                    <p className="insight-body-text">
                      We analyzed existing wellness products including mindfulness & sleep apps, fitness and nutrition trackers and platforms for finding local classes and workshops.
                    </p>
                  </div>
                </div>

                {/* Insight 3 */}
                <div className="insight-item reveal-on-scroll">
                  <p className="insight-subheading">
                    Interviews with both individuals pursuing holistic lifestyle change and professionals across wellness fields revealed key gaps in the existing care process.
                  </p>
                  <div className="insight-body-wrapper">
                    <div className="insight-quote-block">
                      <p className="insight-body-text">
                        “<span className="highlight-terracotta-serif">Nutrition, mental well-being, and fitness are all connected.</span> If I don't sleep well, my workout suffers. On the other hand, if I'm stressed, working out actually helps.”
                      </p>
                      <span className="insight-citation">
                        - User Interviews | Fitness Coach
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study-number-badge">02</div>
          </div>
        </div>

        {/* Media Banner 2 - Inside 170px container */}
        <div className="container reveal-on-scroll" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/3.2 (3).png" 
              alt="Sync One Platform One Journey" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Section 03 Solution - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-section">
            <div>
              <h2 className="case-study-section-title">Solution</h2>
              <p className="case-study-section-p">
                A unified digital platform that synchronizes mind and body wellness into a continuous, guided care journey.
              </p>

              <ul className="solution-feature-list">
                <li className="solution-feature-item">
                  <span className="solution-feature-lead">One Unified Journey:</span>
                  physical and mental care disciplines in one seamless{"\u00A0"}journey.
                </li>
                <li className="solution-feature-item">
                  <span className="solution-feature-lead">Tailored Personalization:</span>
                  Custom care plan with a custom team of{"\u00A0"}professionals.
                </li>
                <li className="solution-feature-item">
                  <span className="solution-feature-lead">Dedicated Support:</span>
                  Pairs users with a personal care team that monitors progress, provides guidance, and keeps them on{"\u00A0"}track.
                </li>
              </ul>
            </div>
            <div className="case-study-number-badge">03</div>
          </div>
        </div>

        {/* Media Banner 3 - Inside 170px container */}
        <div className="container reveal-on-scroll" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/Frame 1542.png" 
              alt="Sync App Solution UI Screens" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Sync Professionals Title & Media Banner - Inside 170px container */}
        <div className="container reveal-on-scroll" style={{ marginTop: '60px', marginBottom: '80px' }}>
          <h3 className="sync-professionals-title" style={{ marginBottom: '40px' }}>Sync Professionals</h3>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/Frame 1540.png" 
              alt="Sync Professionals Feature & Dashboard UI" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </main>
    );
  }

  if (currentId === 'seasoned') {
    return (
      <main style={{ marginBottom: '160px' }}>
        {/* Top Hero Banner - Outside container (Full width below header) */}
        <div className="case-study-hero-banner" style={{ height: 'auto', minHeight: 'unset', padding: 0, overflow: 'hidden', borderBottom: 'none', background: 'none' }}>
          <img 
            src="/art/cover - v1 (1).jpg" 
            alt="Seasoned Case Study Hero Banner" 
            style={{ width: '100%', aspectRatio: '5760 / 1944', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>

        {/* Header Block - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-header-block">
            <Link to="/" className="case-study-back-link">
              ← Back
            </Link>
            <div className="case-study-title-row">
              <h1 className="case-study-main-title">{project.title}</h1>
              <span className="case-study-tag-label">{project.tagline}</span>
            </div>

            <p className="case-study-intro-p">
              {project.intro}
            </p>

            <p className="case-study-credits">
              {project.credits}
            </p>
          </div>
        </div>

        {/* Media Banner 1 - Inside 170px side margins container */}
        <div className="container reveal-on-scroll" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <video 
              src="/art/Iphone14GhostedMockup02_MicroVolume_3.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Section 01 Core Issue - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-section">
            <div>
              <h2 className="case-study-section-title">Core Issue</h2>
              <p className="case-study-section-p">
                {project.coreIssue}
              </p>
            </div>
            <div className="case-study-number-badge">01</div>
          </div>
        </div>

        {/* Terracotta Callout Banner - Outside container, inner text inside 300px side margin container */}
        <div className="terracotta-quote-banner reveal-on-scroll">
          <div className="terracotta-quote-container">
            <span className="terracotta-quote-author" style={{ marginBottom: '20px' }}>
              How Might We?
            </span>
            <p className="terracotta-quote-text">
              Create a tool that provides chefs with ingredient recommendations based on seasonal availability and timing - with no need for manual research or agricultural expertise.
            </p>
          </div>
        </div>

        {/* Section 02 Research - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-section">
            <div>
              <h2 className="case-study-section-title">Research</h2>
              <p className="case-study-section-p">
                {project.researchIntro}
              </p>

              <div className="research-insights-container">
                <span className="insights-tag-label">KEY INSIGHTS</span>

                {/* Insight 1 */}
                <div className="insight-item reveal-on-scroll">
                  <p className="insight-subheading">
                    Seasonality data can turn menu planning into a more proactive tool for managing cost, demand, and food waste.
                  </p>
                  <div className="insight-body-wrapper">
                    <p className="insight-body-text">
                      Commercial kitchen operations are increasingly challenged by fluctuating food prices, changing consumer demand, labor cost pressures, and rising levels of food waste. Effective cost control has therefore become a strategic necessity rather than a routine accounting function. <span className="highlight-terracotta-serif">Seasonal forecasting, which involves predicting demand and cost variations based on seasonal trends, offers a proactive approach to managing these{"\u00A0"}challenges.</span>
                    </p>
                    <span className="insight-citation">
                      Arun, A., Rodrigo, J. T., & Moyeenudin, H. M. (2026). Seasonal forecasting as a cost control tool in commercial kitchen operations. International Journal for Research in Applied Science & Engineering Technology (IJRASET), 14(4), 7167–7174. https://doi.org/10.22214/ijraset.2026.79274
                    </span>
                  </div>
                </div>

                {/* Insight 2 */}
                <div className="insight-item reveal-on-scroll">
                  <p className="insight-subheading">
                    Market analysis revealed a lack of unified platforms that bring seasonality and pricing into menu creation.
                  </p>
                  <div className="insight-body-wrapper">
                    <p className="insight-body-text">
                      I analyzed existing kitchen inventory tools, finding a total lack of unified platforms that integrate real-time produce seasonality directly into menu creation.
                    </p>
                  </div>
                </div>

                {/* Insight 3 */}
                <div className="insight-item reveal-on-scroll">
                  <p className="insight-subheading">
                    Usability testing revealed three key points:
                  </p>
                  <div className="insight-body-wrapper">
                    <ul className="solution-feature-list" style={{ marginTop: '0', marginBottom: '30px' }}>
                      <li className="solution-feature-item">
                        Dish-first, rather than ingredient-first flow.
                      </li>
                      <li className="solution-feature-item">
                        Complex calendar and price controls added friction instead of clarity.
                      </li>
                      <li className="solution-feature-item">
                        Glanceable seasonality, price data, and recipe inspiration provided the most value.
                      </li>
                    </ul>
                    <p className="insight-body-text" style={{ marginTop: '30px' }}>
                      These insights led to a simpler flow centered on dish planning, clear seasonal indicators, and easier-to-read{"\u00A0"}pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study-number-badge">02</div>
          </div>
        </div>

        {/* Media Banner 2 - User Journey Mapping & User Flow Images inside 170px container */}
        <div className="container reveal-on-scroll" style={{ marginTop: '80px', marginBottom: '80px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/Frame 414.png" 
              alt="Seasoned Research & User Journey Mapping" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/Frame 415.png" 
              alt="Seasoned User Flow Diagram" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Section 03 Solution - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-section">
            <div>
              <h2 className="case-study-section-title">Solution</h2>
              <p className="case-study-section-p">
                {project.solutionIntro}
              </p>

              <ul className="solution-feature-list">
                <li className="solution-feature-item">
                  <span className="solution-feature-lead">Dish-First Menu:</span>
                  Aligns with chefs’ natural planning process by letting them conceptualize dishes first, then seamlessly attach and swap seasonal{"\u00A0"}ingredients.
                </li>
                <li className="solution-feature-item">
                  <span className="solution-feature-lead">Cost Forecasting:</span>
                  Visualizes wholesale price brackets and seasonal fluctuations, giving kitchens reliable plate-cost{"\u00A0"}estimates.
                </li>
                <li className="solution-feature-item">
                  <span className="solution-feature-lead">Seasonal Recipe Suggestions:</span>
                  Culinary inspiration pairing peak-season produce with practical application ideas directly within the dish{"\u00A0"}workspace.
                </li>
              </ul>
            </div>
            <div className="case-study-number-badge">03</div>
          </div>
        </div>

        {/* Solution Media Banners - Inside 170px container */}
        <div className="container reveal-on-scroll" style={{ marginTop: '80px', marginBottom: '80px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/Frame 349.png" 
              alt="Seasoned App UI Mobile Screens" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/Frame 350.png" 
              alt="Seasoned Price & Seasonality Graph Widget" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </main>
    );
  }

  if (currentId === 'greenlight') {
    return (
      <main style={{ marginBottom: '160px' }}>
        {/* Top Hero Banner - Outside container (Full width below header) */}
        <div className="case-study-hero-banner" style={{ height: 'auto', minHeight: 'unset', padding: 0, overflow: 'hidden', borderBottom: 'none', background: 'none' }}>
          <img 
            src="/art/cover - v1 (3).png" 
            alt="Greenlight Case Study Hero Banner" 
            style={{ width: '100%', aspectRatio: '5760 / 1944', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>

        {/* Header Block - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-header-block">
            <Link to="/" className="case-study-back-link">
              ← Back
            </Link>
            <div className="case-study-title-row">
              <h1 className="case-study-main-title">{project.title}</h1>
              <span className="case-study-tag-label">{project.tagline}</span>
            </div>

            <p className="case-study-intro-p">
              {project.intro}
            </p>

            <p className="case-study-credits">
              {project.credits}
            </p>
          </div>
        </div>

        {/* Media Banner 1 - Inside 170px side margins container */}
        <div className="container reveal-on-scroll" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <video 
              src="/art/macbook-air-m2-2023-mockup-freebie_4.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Section 01 Core Issue - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-section">
            <div>
              <h2 className="case-study-section-title">Core Issue</h2>
              <p className="case-study-section-p">
                {project.coreIssue}
              </p>
            </div>
            <div className="case-study-number-badge">01</div>
          </div>
        </div>

        {/* Terracotta Callout Banner - Outside container, inner text inside 300px side margin container */}
        <div className="terracotta-quote-banner reveal-on-scroll">
          <div className="terracotta-quote-container">
            <span className="terracotta-quote-author" style={{ marginBottom: '20px' }}>
              JTBD
            </span>
            <p className="terracotta-quote-text">
              {project.jtbd}
            </p>
          </div>
        </div>

        {/* Section 02 Research - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-section">
            <div>
              <h2 className="case-study-section-title">Research</h2>
              <p className="case-study-section-p">
                {project.researchIntro}
              </p>

              <div className="research-insights-container">
                <span className="insights-tag-label">KEY INSIGHTS</span>

                {/* Insight 1 */}
                <div className="insight-item reveal-on-scroll">
                  <p className="insight-subheading">
                    Bureaucratic and internal municipal processes can delay projects by years.
                  </p>
                  <div className="insight-body-wrapper">
                    <p className="insight-body-text">
                      According to recent industry estimates, the approval and detailed planning stage of an urban renewal project can take 2–3 years, and may take even longer when objections or bureaucratic delays arise.
                    </p>
                    <span className="insight-citation">
                      Ken Hator, “How Long Does Urban Renewal Take?” (2025)
                    </span>
                  </div>
                </div>

                {/* Insight 2 */}
                <div className="insight-item reveal-on-scroll">
                  <p className="insight-subheading">
                    Urban renewal approvals depend on balancing multiple factors.
                  </p>
                  <div className="insight-body-wrapper">
                    <p className="insight-body-text">
                      Government feasibility guidelines reflect this complexity, requiring projects to be examined across planning, economic and social dimensions, alongside considerations such as infrastructure, transportation, landscape, environmental impact and public needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study-number-badge">02</div>
          </div>
        </div>

        {/* Media Banners - Inside 170px container */}
        <div className="container reveal-on-scroll" style={{ marginTop: '80px', marginBottom: '80px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/Frame 500.png" 
              alt="Greenlight Approval Process & User Flow Diagram" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/Frame 565.png" 
              alt="Greenlight Information Architecture & Data Visualization" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/Frame 580.png" 
              alt="Greenlight Solution Evaluation Hub & Dashboard UI" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Section 03 Solution - Inside 170px side margins container */}
        <div className="container reveal-on-scroll">
          <div className="case-study-section">
            <div>
              <h2 className="case-study-section-title">Solution</h2>
              <p className="case-study-section-p">
                {project.solutionIntro}
              </p>

              <ul className="solution-feature-list">
                <li className="solution-feature-item">
                  <span className="solution-feature-lead">Impact & Trade-Off Overview:</span>
                  Highlights project pros and cons in one unified view.
                </li>
                <li className="solution-feature-item">
                  <span className="solution-feature-lead">Contextual Spatial Layers:</span>
                  Overlays proposal footprints onto local data to instantly flag neighborhood carrying capacity and municipal service needs.
                </li>
                <li className="solution-feature-item">
                  <span className="solution-feature-lead">Unified Approval Pipeline:</span>
                  Transforms fragmented departmental reports into a single, structured evaluation flow.
                </li>
              </ul>
            </div>
            <div className="case-study-number-badge">03</div>
          </div>
        </div>

        {/* Solution Media Banner - Inside 170px container */}
        <div className="container reveal-on-scroll" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src="/art/Frame 347.png" 
              alt="Greenlight Solution UI Screens & Features" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </main>
    );
  }

  // Fallback Template
  return (
    <main style={{ marginBottom: '160px' }}>
      <div className="case-study-hero-banner">
        <span style={{ fontWeight: 600, fontSize: '15px', color: '#555' }}>
          {project.title} Hero Banner Placeholder
        </span>
      </div>

      <div className="container">
        <div className="case-study-header-block">
          <div className="case-study-title-row">
            <h1 className="case-study-main-title">{project.title}</h1>
            <span className="case-study-tag-label">{project.tagline}</span>
          </div>

          <p className="case-study-intro-p">
            {project.intro}
          </p>

          <p className="case-study-credits">
            {project.credits}
          </p>
        </div>
      </div>
    </main>
  );
}

