import Image from "next/image";
import Link from "next/link";

const designProjects = [
  {
    title: "好咖星",
    description:
      "設計出一款適合追星人跑生咖時所需要的APP",
    image: "/design-1.jpg",
    href: "/design-project/brand-visual",
  },
  {
    title: "政大討論室借閱系統改造",
    description:
      "重新規劃政大討論室借閱系統的界面，讓使用者可以更方便地借閱討論室",
    image: "/design-2.jpg",
    href: "/design-project/poster-layout",
  },
];

export default function DesignProjectPage() {
  return (
    <section className="page-section">
      <h1 className="section-title">設計專案</h1>
      <p className="section-text project-page-intro">
        這裡整理我做過的設計作品，包含視覺設計、排版規劃與內容呈現。
      </p>

      <div className="project-grid">
        {designProjects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image-wrap">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="project-image"
              />
            </div>

            <div className="project-card-body">
              <h2 className="project-card-title">{project.title}</h2>
              <p className="project-card-description">{project.description}</p>

              <Link href={project.href} className="project-card-button">
                查看更多
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}