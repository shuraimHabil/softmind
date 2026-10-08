import styles from "../Practitioners/Practitioners.module.css";
import OfficeStaffSlider from "./OfficeStaffSlider";

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  desc: string;
  img: string;
}

const mockStaff: StaffMember[] = [
  {
    id: "staff-1",
    name: "John Doe",
    role: "Clinic Manager",
    desc: "Ensures smooth daily operations across all our centers.",
    img: "/assets/practitioner_1.jpg",
  },
  {
    id: "staff-2",
    name: "Jane Smith",
    role: "Patient Coordinator",
    desc: "Assists patients with appointments and general inquiries.",
    img: "/assets/practitioner_2.jpg",
  },
  {
    id: "staff-3",
    name: "Alice Johnson",
    role: "Front Desk Executive",
    desc: "Welcomes visitors and handles front desk management.",
    img: "/assets/practitioner_1.jpg",
  },
  {
    id: "staff-4",
    name: "Robert Brown",
    role: "Administrative Assistant",
    desc: "Supports the team with administrative duties.",
    img: "/assets/practitioner_2.jpg",
  },
];

export default function OfficeStaff() {
  return (
    <section className={styles.section} id="office-staff-section">
      <div className={styles.container}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", color: "#64748b", textTransform: "uppercase" }}>
            SOFTMIND
          </span>
          <h2 className={styles.title} style={{ marginTop: "10px" }}>
            Leadership & Operations
          </h2>
          <p className={styles.subtitle} style={{ maxWidth: "680px", margin: "0 auto 30px" }}>
            The people supporting Softmind&apos;s leadership, organisational development, operations and client experience.
          </p>

          <div style={{ textAlign: "left", maxWidth: "680px", margin: "0 auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "12px 0", color: "#1a3330", fontWeight: 600 }}>Prasad Amore</td>
                  <td style={{ padding: "12px 0", color: "#64748b", fontWeight: 600 }}>Managing Director</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "12px 0", color: "#1a3330", fontWeight: 600 }}>Priya M.K.</td>
                  <td style={{ padding: "12px 0", color: "#64748b", fontWeight: 600 }}>Director</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "12px 0", color: "#1a3330", fontWeight: 600 }}>Sibi S. Panicker</td>
                  <td style={{ padding: "12px 0", color: "#64748b", fontWeight: 600 }}>Director</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>Our Support Team</h2>
            <p className={styles.subtitle}>
              Meet the dedicated staff members who keep our clinics running smoothly and ensure a seamless experience for every visitor.
            </p>
          </div>
        </div>

        <OfficeStaffSlider staff={mockStaff} />
      </div>
    </section>
  );
}
