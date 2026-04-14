import Image from "next/image";

export default function Home() {
  return (
    <section className="hero-section">
      <div className="hero-avatar-wrap">
        <div className="hero-avatar">
          <Image src="/me.jpg" alt="" width={200} height={200} />
        </div>
      </div>

      <h1 className="hero-title">歡迎來到我的數位名片</h1>
      <p className="hero-subtitle">大家好!我是許喬甯</p>

      
    </section>
  );
}