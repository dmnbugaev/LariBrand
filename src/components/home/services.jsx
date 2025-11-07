import Image from "next/image";
import "../../styles/components_styles/services.css";
import ScrollAnimation from "../UI_kit/scrollAnimation";
import Link from "next/link";
import content from "../../../content/content.json";

export default function Services() {
  const services = [
    { title: "КЕРАТИН | БОТОКС", img: content.grid_1, link: "/keratin_and_botox" },
    { title: "БЕЗОПАСНОЕ ВЫПРЯМЛЕНИЕ", img: content.grid_2, link: "/safe_hair_straightening" },
    { title: "ХОЛОДНАЯ РЕКОНСТРУКЦИЯ", img: content.grid_3, link: "/cold_hair_reconstruction" },
    { title: "БИОЗАВИВКА", img: content.grid_4, link: "/bioavailability" },
    { title: "ОКРАШИВАНИЕ", img: content.grid_5, link: "/hair_coloring" },
    { title: "СТРИЖКА ВОЛОС", img: content.grid_6, link: "/hair_cutting" },
    { title: "АФРО-ПЛЕТЕНИЕ", img: content.grid_7, link: "/afro_weaving" },
    { title: "УКЛАДКА", img: content.grid_8, link: "/hair_styling" },
  ];

  return (
    <section className="services-section">
      <ScrollAnimation />
      <h2 className="services-title">УСЛУГИ</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link key={index} href={service.link} className="service-card-link">
            <div className="service-card">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="service-image"
              />
              <div className="service-overlay">
                <p>{service.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
