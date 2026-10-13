"use client";

import { useState, useRef } from "react";
import styles from "./CareerApplicationForm.module.css";
import Link from "next/link";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  location: string;
  highestQualification: string;
  experience: string;
  registrationNumber: string;
  briefIntro: string;
  consent: boolean;
}

export default function CareerApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    location: "",
    highestQualification: "",
    experience: "",
    registrationNumber: "",
    briefIntro: "",
    consent: false,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isClinicalPosition =
    formData.position === "Psychologist / Psychotherapist" ||
    formData.position === "Psychiatrist";

  const handleFile = (file: File) => {
    setFileError("");
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const ext = file.name.split(".").pop()?.toLowerCase();
    const isValidExt = ext === "pdf" || ext === "docx" || ext === "doc";

    if (!validTypes.includes(file.type) && !isValidExt) {
      setFileError("Please upload a PDF or DOCX file only.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFileError("File size exceeds 5 MB. Please choose a smaller file.");
      return;
    }

    setSelectedFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    setFileError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      setFileError("Please upload your CV / Résumé to proceed.");
      return;
    }

    if (!formData.consent) {
      alert("Please agree to the privacy consent to submit your application.");
      return;
    }

    setIsSubmitting(true);

    try {
      /*
       * FRONTEND ONLY:
       * Backend developer can plug their API endpoint here.
       * Example:
       *   const payload = new FormData();
       *   Object.entries(formData).forEach(([k, v]) => payload.append(k, String(v)));
       *   if (selectedFile) payload.append('resume', selectedFile);
       *   const res = await fetch('/api/careers/apply', { method: 'POST', body: payload });
       *   if (!res.ok) throw new Error('Submission failed');
       */

      // Simulated network latency for frontend demonstration & UX validation
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while submitting. Please try again or email careers@softmindindia.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      location: "",
      highestQualification: "",
      experience: "",
      registrationNumber: "",
      briefIntro: "",
      consent: false,
    });
    setSelectedFile(null);
    setFileError("");
    setIsSubmitted(false);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  if (isSubmitted) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIconBadge}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#154743" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>Application Submitted</h3>
        <p className={styles.successDesc}>
          Thank you, <strong>{formData.fullName}</strong>. We have received your application for the{" "}
          <strong>{formData.position}</strong> position. Our recruitment team reviews submissions regularly and will contact you if a suitable opportunity matches your profile.
        </p>
        <button type="button" onClick={resetForm} className={styles.successAnotherBtn}>
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      {/* Header */}
      <div className={styles.formHeader}>
        <div className={styles.headerBadgeRow}>
          <span className={styles.applicationPill}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            Join Softmind
          </span>
          <span className={styles.requiredNotice}>* Required fields</span>
        </div>
        <h3 className={styles.formTitle}>Apply to Softmind</h3>
        <p className={styles.formSubtitle}>
          Complete the details below to express your interest in clinical, research, administrative or training opportunities.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.formGrid}>
        {/* ── Section 1: Personal Details ── */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>1</span>
            <span>Personal &amp; Contact Details</span>
          </div>

          <div className={styles.row1}>
            <div className={styles.fieldGroup}>
              <label htmlFor="fullName" className={styles.fieldLabel}>
                <span>Full Name <span className={styles.requiredMark}>*</span></span>
              </label>
              <div className={styles.inputWrap}>
                <span className={styles.inputIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="e.g. Dr. Jane Thomas / John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`${styles.input} ${styles.inputWithIcon}`}
                />
              </div>
            </div>
          </div>

          <div className={styles.row2}>
            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.fieldLabel}>
                <span>Email Address <span className={styles.requiredMark}>*</span></span>
              </label>
              <div className={styles.inputWrap}>
                <span className={styles.inputIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`${styles.input} ${styles.inputWithIcon}`}
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="phone" className={styles.fieldLabel}>
                <span>Mobile Number <span className={styles.requiredMark}>*</span></span>
              </label>
              <div className={styles.inputWrap}>
                <span className={styles.inputIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`${styles.input} ${styles.inputWithIcon}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 2: Role & Background ── */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>2</span>
            <span>Role &amp; Professional Background</span>
          </div>

          <div className={styles.row2}>
            <div className={styles.fieldGroup}>
              <label htmlFor="position" className={styles.fieldLabel}>
                <span>Position Applying For <span className={styles.requiredMark}>*</span></span>
              </label>
              <select
                id="position"
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className={styles.select}
              >
                <option value="" disabled>Select a position</option>
                <option value="Psychologist / Psychotherapist">Psychologist / Psychotherapist</option>
                <option value="Psychiatrist">Psychiatrist</option>
                <option value="Research & Training">Research & Training</option>
                <option value="Internship / Trainee">Internship / Trainee</option>
                <option value="Client Care / Reception">Client Care / Reception</option>
                <option value="Administration / HR / Finance">Administration / HR / Finance</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="location" className={styles.fieldLabel}>
                <span>Preferred Location <span className={styles.requiredMark}>*</span></span>
              </label>
              <select
                id="location"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className={styles.select}
              >
                <option value="" disabled>Select a centre or location</option>
                <option value="Panampilly Nagar, Kochi">Panampilly Nagar, Kochi</option>
                <option value="Kakkanad, Kochi">Kakkanad, Kochi</option>
                <option value="Aroor, Alappuzha">Aroor, Alappuzha</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Any Location / Flexible">Any Location / Flexible</option>
              </select>
            </div>
          </div>

          <div className={styles.row2}>
            <div className={styles.fieldGroup}>
              <label htmlFor="highestQualification" className={styles.fieldLabel}>
                <span>Highest Qualification <span className={styles.requiredMark}>*</span></span>
              </label>
              <input
                id="highestQualification"
                type="text"
                required
                placeholder="e.g. M.Phil Clinical Psychology, MD, MSc"
                value={formData.highestQualification}
                onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="experience" className={styles.fieldLabel}>
                <span>Years of Experience <span className={styles.requiredMark}>*</span></span>
              </label>
              <select
                id="experience"
                required
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className={styles.select}
              >
                <option value="" disabled>Select experience level</option>
                <option value="Fresher">Fresher / Recent Graduate</option>
                <option value="Less than 1 year">Less than 1 year</option>
                <option value="1–3 years">1–3 years</option>
                <option value="3–5 years">3–5 years</option>
                <option value="5–10 years">5–10 years</option>
                <option value="More than 10 years">More than 10 years</option>
              </select>
            </div>
          </div>

          {/* Registration Number Field */}
          <div className={styles.row1}>
            <div className={styles.fieldGroup}>
              <label htmlFor="registrationNumber" className={styles.fieldLabel}>
                <span>
                  Professional Registration Number
                  {isClinicalPosition && <span className={styles.requiredMark}> *</span>}
                </span>
                <span className={styles.optionalTag}>
                  {isClinicalPosition ? "Required for Clinical Roles" : "If applicable"}
                </span>
              </label>
              <input
                id="registrationNumber"
                type="text"
                required={isClinicalPosition}
                placeholder="e.g. RCI Registration No. / State Medical Council / MCI"
                value={formData.registrationNumber}
                onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                className={styles.input}
              />
              <span className={styles.fieldHelper}>
                Required for licensed clinical positions (Clinical Psychologists, Psychiatrists). Leave blank if applying for non-clinical or trainee roles.
              </span>
            </div>

            {isClinicalPosition && (
              <div className={styles.clinicalNotice}>
                <span className={styles.clinicalNoticeIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </span>
                <span>
                  Clinical practice at Softmind requires valid RCI or State Medical Council registration credentials in accordance with Indian healthcare regulations.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── Section 3: CV & Statement ── */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>3</span>
            <span>Documents &amp; Background</span>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <span>Upload CV / Résumé <span className={styles.requiredMark}>*</span></span>
            </label>

            {/* Hidden native input */}
            <input
              ref={fileInputRef}
              type="file"
              id="cvFile"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <div
              className={`${styles.fileDropZone} ${dragActive ? styles.dropZoneActive : ""} ${
                selectedFile ? styles.dropZoneHasFile : ""
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => {
                if (!selectedFile) {
                  fileInputRef.current?.click();
                }
              }}
            >
              {!selectedFile ? (
                <div className={styles.filePlaceholder}>
                  <div className={styles.uploadIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <p className={styles.uploadTitle}>
                    Drag and drop your file here, or <span className={styles.browseLink}>browse</span>
                  </p>
                  <div className={styles.uploadPills}>
                    <span className={styles.pillTag}>PDF or DOCX</span>
                    <span className={styles.pillTag}>Max 5 MB</span>
                  </div>
                </div>
              ) : (
                <div className={styles.fileSelectedRow}>
                  <div className={styles.fileMeta}>
                    <div className={styles.fileCheckIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </div>
                    <div className={styles.fileDetails}>
                      <span className={styles.fileName}>{selectedFile.name}</span>
                      <span className={styles.fileSize}>{formatFileSize(selectedFile.size)} &middot; Ready to attach</span>
                    </div>
                  </div>
                  <button type="button" onClick={removeFile} className={styles.fileRemoveBtn} title="Remove file">
                    ✕ Remove
                  </button>
                </div>
              )}
            </div>

            {fileError && (
              <span className={styles.fileErrorMsg}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {fileError}
              </span>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="briefIntro" className={styles.fieldLabel}>
              <span>Brief Introduction</span>
              <span className={styles.optionalTag}>Optional</span>
            </label>
            <textarea
              id="briefIntro"
              rows={3}
              placeholder="Tell us a short note about yourself, your clinical interests, philosophy of care, or why you'd like to work with Softmind."
              value={formData.briefIntro}
              onChange={(e) => setFormData({ ...formData, briefIntro: e.target.value })}
              className={styles.textarea}
            />
          </div>
        </div>

        {/* ── Section 4: Privacy & Submission ── */}
        <div className={styles.sectionBlock}>
          <div className={styles.consentBox}>
            <label className={styles.consentLabel}>
              <input
                type="checkbox"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className={styles.checkbox}
              />
              <span className={styles.consentText}>
                I agree to Softmind processing my application information for recruitment purposes in accordance with its{" "}
                <Link href="/privacy-policy" target="_blank" className={styles.privacyLink}>
                  Privacy Policy
                </Link>
                . <span className={styles.requiredMark}>*</span>
              </span>
            </label>
          </div>

          <div className={styles.submitActionWrap}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              {isSubmitting ? (
                <span>Submitting Application...</span>
              ) : (
                <>
                  <span>Submit Application</span>
                  <span className={styles.btnArrow}>&rarr;</span>
                </>
              )}
            </button>
            <p className={styles.formDisclaimer}>
              Clinical roles require appropriate qualifications and professional registration where applicable. Applications do not guarantee employment.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
