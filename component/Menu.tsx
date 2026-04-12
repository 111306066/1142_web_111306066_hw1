"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "關於我", subtitle: "", href: "/about" },
  { title: "興趣", subtitle: "", href: "/hobby" },
  { title: "設計專案", subtitle: "", href: "/design-project" },
  { title: "程式專案", subtitle: "", href: "/programming-project" },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <div className="menu-wrapper">
      <div className="profile-card">
        <div className="profile-avatar">許</div>
        <h2 className="profile-name">許喬甯</h2>
        <p className="profile-school">Jolin</p>

        <div className="social-row">
          <a href="https://github.com/111306066" className="social-btn" aria-label="GitHub">
            GH
          </a>
          <a href="https://www.instagram.com/_chiao0_?igsh=MTIwMmJreDB6aGpkbA%3D%3D&utm_source=qr" className="social-btn" aria-label="Instagram">
            IG
          </a>
          {/* <a href="111306066@g.nccu.edu.tw" className="social-btn" aria-label="Email">
            ✉
          </a> */}
        </div>
      </div>

      <nav className="menu-list">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`menu-card ${isActive ? "active" : ""}`}
            >
              <div>
                <h3 className="menu-title">{item.title}</h3>
                <p className="menu-subtitle">{item.subtitle}</p>
              </div>
            </Link>
          );
        })}
      </nav>

      <p className="copyright">© 2026 許喬甯</p>
    </div>
  );
}