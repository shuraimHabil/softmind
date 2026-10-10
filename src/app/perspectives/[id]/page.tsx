import type { Metadata } from "next";
import PerspectivesDetail from "@/components/Perspectives/PerspectivesDetail";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function fetchPerspective(id: string) {
  try {
    const envBaseUrl = (process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_BACKEND_URL || "https://devsoftminderp.m.frappe.cloud").replace(/\/+$/, "");
    const endpointPath = "/api/method/softmind_custom.cms_api.perspective_api.get_perspectives";
    const targetUrl = `${envBaseUrl}${endpointPath}`;
    
    const response = await fetch(targetUrl, { next: { revalidate: 60 } });
    if (!response.ok) {
      console.error("Failed to fetch perspectives API status:", response.status);
      return null;
    }
    const result = await response.json();
    let data = [];
    if (Array.isArray(result?.message?.data)) {
      data = result.message.data;
    } else if (Array.isArray(result?.message)) {
      data = result.message;
    } else if (Array.isArray(result?.data)) {
      data = result.data;
    }
    return data.find((p: any) => p.name === id) || null;
  } catch (err) {
    console.error("fetchPerspective error:", err);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const perspective = await fetchPerspective(id);
  
  if (!perspective) {
    return {
      title: "Perspective Not Found",
    };
  }

  return {
    title: `${perspective.title} | Softmind Perspectives`,
    description: "Read this editorial reflection on the philosophy that guides Softmind.",
  };
}

export default async function PerspectiveSinglePage({ params }: PageProps) {
  const { id } = await params;
  const perspective = await fetchPerspective(id);

  if (!perspective) {
    return (
      <main>
        <div style={{ padding: '120px 0', textAlign: 'center', color: '#64748b' }}>
          Perspective not found.
        </div>
      </main>
    );
  }

  return (
    <main>
      <PerspectivesDetail perspectives={[perspective]} isSinglePage={true} />
      <CliniciansCTA />
    </main>
  );
}
