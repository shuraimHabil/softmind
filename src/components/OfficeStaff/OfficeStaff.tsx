import styles from "../Practitioners/Practitioners.module.css";
import OfficeStaffSlider from "./OfficeStaffSlider";
import { fetchNonClinicians, StaffMember } from "@/lib/nonClinicians";

export type { StaffMember };

interface CategoryConfig {
  key: string;
  title: string;
  displayStyle?: "list" | "cards";
}

const CATEGORY_CONFIG: CategoryConfig[] = [
  {
    key: "Executive Leadership",
    title: "Executive Leadership",
    displayStyle: "list",
  },
  {
    key: "Advisory Board",
    title: "Advisory Board",
    displayStyle: "cards",
  },
  {
    key: "Organisational Associates",
    title: "Organisational Associates",
    displayStyle: "cards",
  },
  {
    key: "Operations",
    title: "Operations",
    displayStyle: "cards",
  },
];

export default async function OfficeStaff() {
  const staff = await fetchNonClinicians();

  if (!staff || staff.length === 0) {
    return null;
  }

  const normalize = (val: string) => (val || "").toLowerCase().replace(/[^a-z0-9]/g, "");

  // Sort function to ensure Managing Director appears first in Executive Leadership
  const sortGroupMembers = (members: StaffMember[], categoryKey: string) => {
    if (normalize(categoryKey) === "executiveleadership") {
      return [...members].sort((a, b) => {
        const aMD = a.role.toLowerCase().includes("managing");
        const bMD = b.role.toLowerCase().includes("managing");
        if (aMD && !bMD) return -1;
        if (!aMD && bMD) return 1;
        return a.name.localeCompare(b.name);
      });
    }
    return members;
  };

  // Group members into defined categories
  const categoryGroups = CATEGORY_CONFIG.map((cat) => ({
    ...cat,
    members: staff.filter((m) => normalize(m.category) === normalize(cat.key)),
  })).filter((group) => group.members.length > 0);

  // Group any other members whose category was not in the predefined list
  const knownKeys = new Set(CATEGORY_CONFIG.map((c) => normalize(c.key)));
  const otherMembers = staff.filter((m) => !knownKeys.has(normalize(m.category)));

  if (otherMembers.length > 0) {
    categoryGroups.push({
      key: "Other",
      title: "Team Members",
      displayStyle: "cards",
      members: otherMembers,
    });
  }

  if (categoryGroups.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} id="office-staff-section" style={{ padding: "48px 0" }}>
      <div className={styles.container}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h2 className={styles.title} style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "8px" }}>
            Leadership &amp; Operations
          </h2>
          <p className={styles.subtitle} style={{ maxWidth: "600px", margin: "0 auto", fontSize: "0.9rem" }}>
            The dedicated people supporting Softmind&apos;s leadership, organisational development, operations, and client experience.
          </p>
        </div>

        {categoryGroups.map((cat, index) => {
          const sortedMembers = sortGroupMembers(cat.members, cat.key);

          return (
            <div
              key={cat.key}
              style={{
                marginBottom: index === categoryGroups.length - 1 ? "0" : "36px",
                paddingTop: index > 0 ? "28px" : "0",
                borderTop: index > 0 ? "1px solid #f1f5f9" : "none",
              }}
            >
              <div className={styles.header} style={{ marginBottom: "16px" }}>
                <div className={styles.headerText}>
                  <h3
                    className={styles.title}
                    style={{
                      fontSize: "clamp(1.15rem, 1.6vw, 1.35rem)",
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>
              </div>

              {cat.displayStyle === "list" ? (
                <div style={{ maxWidth: "560px", margin: "0 auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.92rem",
                    }}
                  >
                    <tbody>
                      {sortedMembers.map((m) => (
                        <tr
                          key={m.id}
                          style={{
                            borderBottom: "1px solid #f1f5f9",
                          }}
                        >
                          <td
                            style={{
                              padding: "10px 0",
                              color: "#1a3330",
                              fontWeight: 600,
                              fontSize: "0.98rem",
                            }}
                          >
                            {m.name}
                          </td>
                          <td
                            style={{
                              padding: "10px 0",
                              color: "#64748b",
                              fontWeight: 600,
                              textAlign: "right",
                              fontSize: "0.88rem",
                            }}
                          >
                            {m.role}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <OfficeStaffSlider staff={sortedMembers} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
