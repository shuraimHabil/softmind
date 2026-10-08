"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./VideoCarouselModal.module.css";

export interface YTVideo {
  id: string;
  title: string;
}

const VIDEOS: YTVideo[] = [
  { id: "HhGTqZmO-7U", title: "The Dogma of Rationalism: Is Atheism Functioning Like an Organized Faith?" },
  { id: "PgyaI8kKxic", title: "Do Atheists Unknowingly Follow \"Gurus\"? | The Psychology of Intellectual Worship" },
  { id: "KQKbcIQe4c4", title: "Strict Parenting vs Teen Freedom: Where Should Parents Draw the Line?" },
  { id: "rgF_FdDi8Ek", title: "Are Today's Kids Smarter Than Their Parents? | The Digital Generation Gap" },
  { id: "9i3p1yQ121E", title: "Patriarchal Control in Modern Society | Why Women Are Still Constrained" },
  { id: "7T61-K2-EoE", title: "Why Modern Feminism Triggers So Much Backlash | A Balanced Breakdown" },
  { id: "1LuN5_NQt2Q", title: "The Extreme Things We Do for Validation | The Psychology of Social Status" },
  { id: "UyHMtIKKsAQ", title: "Why Losing Social Status Hurts Like Physical Pain | The Psychology of Rejection" },
  { id: "MJz7lmURqDs", title: "Did Movie Vaazha 2 Glorify Substance Use? | Pop Culture & Youth Impact" },
  { id: "8XKa72mxQE8", title: "Why Are We Obsessed With Intoxication? | Dopamine, Escapism & Mind Control" },
  { id: "7VxgRumwpPw", title: "Why Nice Guys Lose Attraction | The Psychological Paradox of Attraction" },
  { id: "Ba2_7_S__xY", title: "He Loves Me But Has an Explosive Temper | The Truth About Anger in Relationships" },
  { id: "eARiBUHR018", title: "The Hidden Danger of Playing It Safe in Love | Relationship Psychology" },
  { id: "17u1ndLL0gw", title: "Why Buying Gifts After Abuse Isn't Love | The Psychology of Toxic Partners" },
  { id: "7o_pB-WZlvY", title: "The Deep Psychological Bond Between Mohanlal & His Fans | Emotional Identity" },
  { id: "d8D0XUeBod4", title: "The Unbeatable Craze of Mammootty & Mohanlal | The Big M Impact" },
  { id: "EB3_BIhhGv8", title: "Why Mohanlal Is an Acting Genius | Sensitivity, Grace & Feminine Energy" },
  { id: "JgxRHeee62c", title: "Cinema, Masculinity & Patriarchy | How Superstars Mold Society" },
  { id: "yugWzSRseOA", title: "Election Defeat & Mental Health | The Psychology of Political Loss" },
  { id: "zm6sk9wKlFU", title: "The Dark Psychology of Celebrity Worship | Why We Obsess Over Cinema Icons" },
  { id: "tihvAimlK08", title: "How the 24/7 News Cycle Is Secretly Ruining Your Mental Health" },
  { id: "4k2czPzEKAg", title: "Ideological Battles & Biological Shifts: Why Humans Fight Over Politics" },
  { id: "j3fIe32tj2Q", title: "Science Can't Explain This | The Limits of Biological Psychology" },
  { id: "uhMMVJf6ckY", title: "Chasing Happiness But Finding Empty Voids | The Psychology of Dissatisfaction" },
  { id: "SOVGShPB2Mo", title: "Why Modern Life Is Breaking Your Brain | Evolutionary Psychology Explained" },
  { id: "QImokTPO-BI", title: "Why Your Phone Is Making You Constantly Tired | Overcoming Digital Fatigue" },
  { id: "PPgGF4rCv_g", title: "Alone Together: Why We Choose Phones Over People | The Phubbing Epidemic" },
  { id: "QW_avEIQYis", title: "The Infinite Doomscroll Loop | How Your Phone Controls Your Brain" },
  { id: "-nRiZPjLcBI", title: "The Science of Emptiness | How Social Connections Heal Loneliness" },
  { id: "gk6e8GKw27s", title: "Why Isolation Is Secretly Destroying Your Mind | How Relationships Heal Stress" },
  { id: "01qY7Ot42cU", title: "Stop Dressing for Others! | How Judgement Distorts Our Fashion Choices" },
  { id: "qfmqcTpmwzU", title: "The Psychology of Dignity: What Are You Sacrificing for Approval?" },
  { id: "Och0dnkANJs", title: "How to Look in the Mirror and Love What You See | Rebuilding Your Confidence!" },
  { id: "JVYAO2pE6J8", title: "The Psychology Behind Low Self-Worth | How to Stop Doubting Yourself" },
  { id: "OhxM-Cj4Olk", title: "How a Lifetime of Kerala Politics Rewrote Pinarayi Vijayan's Expressions" },
  { id: "90T9hPqWVJQ", title: "Is It Fair to Body Shame Pinarayi Vijayan? | The Dark Side of Political Criticism" },
  { id: "qbF2G8zxXAQ", title: "Affirmations Don't Heal You! | The Toxic Side of Positive Thinking Explained" },
  { id: "VNjZBa_vT7I", title: "The Right Way to Journal for Real Mental Peace & Success | Part 2" },
  { id: "V4BnNEQv0Ig", title: "Psychology of Political Power & Pride | Pinarayi Vijayan Part 2" },
  { id: "-L15CEJutVs", title: "Signs of a Toxic & Hated Character | Part 2" },
  { id: "1MBLGAac9Wg", title: "Journaling Isn't As Good As You Think! | The Hidden Side Effects | Part 1" },
  { id: "qPEPKoiAWco", title: "The Most Hated Personality Traits in People | Part 1" },
  { id: "M6u8Lby1zjc", title: "Psychology Behind Political Arrogance | Pinarayi Vijayan" },
  { id: "gU-BjUrIi20", title: "Stop Listening to Motivational Speakers! | Part 3" },
  { id: "9gKScFPI7sM", title: "The Dark Side of Motivational Speaking | Part 2" },
  { id: "GgG21PDvbS8", title: "Why Motivational Speakers Are Toxic? | Part 1" },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoCarouselModal({ isOpen, onClose }: Props) {
  const [activeVideo, setActiveVideo] = useState<YTVideo | null>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeVideo) {
          setActiveVideo(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, activeVideo, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);



  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === backdropRef.current) onClose();
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className={styles.backdrop}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-label="Softmind Videos"
    >
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>Softmind Videos</h2>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close video library"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>



        {/* Player overlay */}
        {activeVideo && (
          <div className={styles.playerOverlay}>
            <div className={styles.playerWrap}>
              <button
                className={styles.playerClose}
                onClick={() => setActiveVideo(null)}
                aria-label="Close player"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Back to list
              </button>
              <div className={styles.iframeContainer}>
                <iframe
                  className={styles.iframe}
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className={styles.playerMeta}>
                <p className={styles.playerTitle}>{activeVideo.title}</p>
                <a
                  className={styles.ytLink}
                  href={`https://www.youtube.com/shorts/${activeVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.5s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.8 2.2 12 2.2 12 2.2s-4.8 0-7.3.2c-.6.1-1.9.1-3 1.3C.8 4.5.5 6.5.5 6.5S.2 8.8.2 11v2.1c0 2.2.3 4.5.3 4.5s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.2 21.8 12 21.8 12 21.8s4.8 0 7.3-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.3.3-4.5V11c0-2.2-.3-4.5-.3-4.5zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z" />
                  </svg>
                  Open on YouTube
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail grid */}
        <div className={styles.grid}>
          {VIDEOS.map((video) => (
              <button
                key={video.id}
                className={styles.thumb}
                onClick={() => setActiveVideo(video)}
                aria-label={`Watch: ${video.title}`}
              >
                <div className={styles.thumbImgWrap}>
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className={styles.thumbImg}
                    loading="lazy"
                  />
                  {/* Gradient + title overlay — Shorts style */}
                  <div className={styles.thumbGradient} />
                  <p className={styles.thumbTitleOverlay}>{video.title}</p>
                  {/* Play button on hover */}
                  <div className={styles.playOverlay}>
                    <div className={styles.playBtn}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <a
            href="https://www.youtube.com/@softmind6128/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.channelLink}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.5s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.8 2.2 12 2.2 12 2.2s-4.8 0-7.3.2c-.6.1-1.9.1-3 1.3C.8 4.5.5 6.5.5 6.5S.2 8.8.2 11v2.1c0 2.2.3 4.5.3 4.5s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.2 21.8 12 21.8 12 21.8s4.8 0 7.3-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.3.3-4.5V11c0-2.2-.3-4.5-.3-4.5zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z" />
            </svg>
            View all on YouTube @softmind6128
          </a>
        </div>
      </div>
    </div>
  );
}
