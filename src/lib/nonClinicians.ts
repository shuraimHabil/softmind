import axios from "axios";
import { stripHtml } from "./clinicians";

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  desc: string;
  img: string;
}

const BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "https://devsoftminderp.m.frappe.cloud").replace(/\/+$/, "");

export async function fetchNonClinicians(): Promise<StaffMember[]> {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/method/softmind_custom.api.non_clinicians.get_employee_list`,
      { headers: { "Cache-Control": "no-cache" }, timeout: 10000 }
    );
    const json = res.data;
    const data = json.message?.data || json.data || (Array.isArray(json.message) ? json.message : []);

    if (!Array.isArray(data) || data.length === 0) {
      return [];
    }

    return data.map((item: any, idx: number) => {
      const name = stripHtml(item.employee_name || item.name || item.full_name || item.title || "Team Member").trim();
      const role = stripHtml(item.designation || item.role || item.title || item.department || "Support Team").trim();
      
      let desc = stripHtml(item.bio || item.description || item.about || item.tagline || item.desc || "").trim();
      if (!desc) {
        if (item.branch) {
          desc = stripHtml(item.branch).replace(/\s*-\s*SW\s*$/i, "").trim();
        } else if (item.department) {
          desc = stripHtml(item.department).replace(/\s*-\s*SW\s*$/i, "").trim();
        }
      }
      
      const rawImg = item.image || item.photo || item.user_image || item.profile_image || "";
      let img = "";
      if (rawImg) {
        if (rawImg.startsWith("http://") || rawImg.startsWith("https://")) {
          img = rawImg;
        } else {
          img = `${BASE_URL}${rawImg.startsWith("/") ? "" : "/"}${rawImg}`;
        }
      }

      return {
        id: String(item.name || item.id || item.employee_id || `staff-${idx}`).toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        name,
        role,
        desc,
        img,
      };
    });
  } catch (err) {
    console.error("fetchNonClinicians error:", err);
    return [];
  }
}
