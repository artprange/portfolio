import styled from 'styled-components'

export const Home = styled.main`
  --accent: #b5d6ad;
  --muted: #9c9f9c;
  color: #eeeeea;
  min-width: 0;
  .hero > *,
  .project > * {
    min-width: 0;
  }
  .eyebrow {
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--accent);
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .eyebrow > span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
  }
  .hero {
    display: grid;
    grid-template-columns: 1.55fr 1fr;
    align-items: center;
    gap: 4rem;
    padding: 6rem 0 5rem;
  }
  h1 {
    font-size: clamp(2.8rem, 5vw, 4.7rem);
    line-height: 1.08;
    letter-spacing: -0.055em;
    font-weight: 500;
    margin: 1.6rem 0;
  }
  h1 em {
    font-style: normal;
    color: var(--accent);
  }
  .intro {
    max-width: 33rem;
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.8;
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.85rem;
    transition:
      color 0.2s,
      background 0.2s;
  }
  a:hover {
    color: var(--accent);
  }
  a.primary {
    padding: 0.95rem 1.2rem;
    background: var(--accent);
    color: #151b15;
    border-radius: 4px;
    font-weight: 600;
  }
  a.primary:hover {
    background: #cce6c5;
  }
  .portrait {
    padding: 0.8rem;
    border: 1px solid #353a33;
    background: #20251f;
    transform: rotate(2deg);
  }
  .portrait img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    filter: saturate(0.65);
  }
  .portrait-caption {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 1rem 0.2rem 0.3rem;
    font-size: 0.65rem;
    color: #bdc4b9;
  }
  section {
    scroll-margin-top: 2rem;
  }
  .work,
  .approach {
    padding: 3.5rem 0;
    border-top: 1px solid #30332e;
  }
  .section-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: clamp(1.6rem, 3vw, 2.3rem);
    font-weight: 500;
    letter-spacing: -0.035em;
    line-height: 1.2;
  }
  .section-heading h2,
  .approach > h2 {
    margin-top: 0.8rem;
  }
  .project-list {
    position: relative;
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
    scrollbar-color: #53634b #1b1e1a;
    padding-bottom: 1rem;
  }
  .carousel-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;
  }
  .carousel-controls p {
    color: var(--muted);
    font-size: 0.8rem;
  }
  .carousel-controls > div {
    display: flex;
    gap: 0.5rem;
  }
  .carousel-controls button {
    display: grid;
    place-items: center;
    min-width: 44px;
    min-height: 44px;
    border: 1px solid #53634b;
    border-radius: 4px;
    background: #222a20;
    color: var(--accent);
    cursor: pointer;
  }
  .carousel-controls button:disabled {
    opacity: 0.35;
    cursor: default;
  }
  .carousel-controls button:hover:not(:disabled) {
    background: #35432f;
  }
  .project {
    flex: 0 0 100%;
    min-width: 0;
    scroll-snap-align: start;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    border: 1px solid #30332e;
    border-radius: 6px;
    overflow: hidden;
    background: #1b1e1a;
  }
  .project-image {
    overflow: hidden;
    display: block;
    background: #252923;
  }
  .project-image img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 260px;
    object-fit: cover;
    object-position: top;
    transition: transform 0.3s;
  }
  .project-image:hover img {
    transform: scale(1.025);
  }
  .project-info {
    padding: 2rem;
  }
  .project-number {
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    color: var(--muted);
  }
  h3 {
    font-weight: 500;
    letter-spacing: -0.025em;
  }
  .project h3 {
    overflow-wrap: anywhere;
    font-size: 1.7rem;
    margin: 1rem 0 0.7rem;
  }
  .project p,
  .principles p,
  .contact p {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.75;
  }
  .project ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1.2rem 0 1.8rem;
  }
  .project li {
    border: 1px solid #3a4035;
    padding: 0.3rem 0.5rem;
    font-size: 0.65rem;
    color: #bbc5b5;
    border-radius: 3px;
  }
  .project-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .project-links a {
    color: var(--accent);
  }
  .principles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin-top: 2.5rem;
  }
  .principles article > span {
    color: var(--accent);
    font-size: 0.75rem;
  }
  .principles h3 {
    font-size: 1.1rem;
    margin: 1.2rem 0 0.75rem;
  }
  .contact {
    padding: 2.5rem;
    margin: 1rem 0 3rem;
    background: #222a20;
    border: 1px solid #35432f;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  .contact h2 {
    font-size: 1.65rem;
  }
  .contact p {
    margin-top: 0.75rem;
    max-width: 34rem;
  }
  .contact a {
    color: var(--accent);
    white-space: nowrap;
  }
  footer {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid #30332e;
    color: var(--muted);
    font-size: 0.7rem;
  }
  @media (max-width: 800px) {
    .hero {
      gap: 2rem;
      padding: 4rem 0;
      grid-template-columns: 1fr;
    }
    .portrait {
      max-width: 280px;
      transform: none;
    }
    .project {
      grid-template-columns: 1fr;
    }
    .project-image img {
      min-height: 0;
      aspect-ratio: 16 / 10;
    }
    .principles {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .contact {
      padding: 1.5rem;
      align-items: flex-start;
      flex-direction: column;
    }
  }
  @media (max-width: 480px) {
    .section-heading {
      align-items: flex-start;
      flex-direction: column;
    }
    .project-info {
      padding: 1.5rem;
    }
    footer {
      flex-direction: column;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    a,
    .project-image img {
      transition: none;
    }
  }
`
