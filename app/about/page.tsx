export default function AboutPage() {
  return (
    <section className="page-section about-page">
      <div className="about-intro-card">
        <h1 className="section-title">關於我</h1>
        
      

        <div className="about-grid">
          <article className="about-card">
            <h2 className="about-card-title">基本資訊</h2>
            <p className="about-card-text">許喬甯</p>
            <p className="about-card-text">國立政治大學 資訊管理學系</p>
            <p className="about-card-text">數位內容與科技學分學程</p>
          </article>

          <article className="about-card">
            <h2 className="about-card-title">聯絡方式</h2>
            <p className="about-card-text">111306066@g.nccu.edu.tw</p>
            <p className="about-card-text">GitHub: 111306066</p>
          </article>

          <article className="about-card about-card-wide">
            <h2 className="about-card-title">經歷</h2>
            <p className="about-card-text">
              PwC MLO 實習生
            </p>
            <p className="about-card-text">
              政大資管研究助理
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}