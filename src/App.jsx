import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  Divider,
  IconButton,
  Link,
  Snackbar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import GamepadRoundedIcon from "@mui/icons-material/GamepadRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import MouseRoundedIcon from "@mui/icons-material/MouseRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";

const ROBLOX_URL = "https://www.roblox.com/users/10207139/profile";
const X_URL = "https://x.com/Carmackdisciple";
const DISCORD_USERNAME = "maplesalt";
const GAME_URL = "https://www.roblox.com/games/105603252908405/CLICK-THE-COOKIES";

const asset = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`;

const SECTION_LINKS = [
  { id: "top", label: "Introduction" },
  { id: "projects", label: "Scripts" },
  { id: "standards", label: "Process" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { value: "10+", label: "years scripting", detail: "Building with Luau since 2012", tone: "blue" },
  { value: "16", label: "years around the engine", detail: "On Roblox since 2010", tone: "violet" },
  { value: "ECS", label: "+ Jecs", detail: "Data-driven architecture", tone: "cyan" },
  { value: "OOP", label: "+ modules", detail: "Maintainable, reusable code", tone: "gold" },
];

const projects = [
  {
    title: "League-Style Combat Framework",
    type: "Combat",
    status: "Flagship script",
    description:
      "A MOBA-inspired framework built around exact timing, deliberate movement, and server-aware combat behavior.",
    details:
      "Target acquisition, attack windup, attack-speed scaling, command movement, pathing, aggro rules, target switching, and reusable combat state.",
    tags: ["Combat", "Networking", "OOP", "Jecs"],
    image: asset("combat-anime.webp"),
    video: asset("1.mp4"),
    icon: <SportsEsportsRoundedIcon />,
    accent: "project-red",
  },
  {
    title: "Advanced Lock-On Camera",
    type: "Movement",
    status: "Gameplay prototype",
    description:
      "A third-person targeting controller that keeps selection fast, readable, and predictable under pressure.",
    details:
      "Distance validation, mouse-driven target switching, camera tracking, character facing, cooldown logic, and animated target feedback.",
    tags: ["Camera", "Targeting", "CFrame", "Input"],
    image: asset("camera-anime.webp"),
    video: asset("2.mp4"),
    icon: <MouseRoundedIcon />,
    accent: "project-cyan",
  },
  {
    title: "Incremental Game Interface",
    type: "UI / Systems",
    status: "Architecture study",
    description:
      "A dense progression interface translated into a clean, responsive Roblox experience.",
    details:
      "Purchase modes, animated progression displays, stats overlays, persistent UI state, upgrade flow, and modular presentation logic.",
    tags: ["UI", "Progression", "State", "Modules"],
    image: asset("ui-anime.webp"),
    video: asset("3.mp4"),
    href: GAME_URL,
    icon: <QueryStatsRoundedIcon />,
    accent: "project-violet",
  },
];

const skills = [
  "Object-oriented programming",
  "ECS architecture",
  "Jecs",
  "Module architecture",
  "Client-server architecture",
  "RemoteEvents / Bindables",
  "DataStoreService",
  "MemoryStoreService",
  "PathfindingService",
  "TweenService",
  "Physics / hitboxes",
  "UI programming",
  "State machines",
  "Signals / events",
  "Rojo",
  "Git / version control",
  "StyLua",
  "Selene",
  "Debugging",
];

const standards = [
  {
    icon: <LayersRoundedIcon />,
    step: "01",
    title: "Design",
    copy: "Understand the goal, identify the real constraints, and plan the architecture before code starts moving.",
  },
  {
    icon: <CodeRoundedIcon />,
    step: "02",
    title: "Build",
    copy: "Write clean modules with clear ownership, predictable state, and room for the next mechanic.",
  },
  {
    icon: <HubRoundedIcon />,
    step: "03",
    title: "Optimize",
    copy: "Profile behavior, reduce waste, and keep client responsiveness aligned with server authority.",
  },
  {
    icon: <AutoAwesomeRoundedIcon />,
    step: "04",
    title: "Polish",
    copy: "Refine timing, feedback, animation, and edge cases until the mechanic feels deliberate.",
  },
];

function ExternalButton({ href, children, variant = "outlined", ...props }) {
  return (
    <Button
      href={href}
      target="_blank"
      rel="noreferrer"
      variant={variant}
      endIcon={<ArrowOutwardRoundedIcon />}
      {...props}
    >
      {children}
    </Button>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Box className="section-heading" data-reveal="left">
      <Typography className="eyebrow">{eyebrow}</Typography>
      <Typography variant="h2">{title}</Typography>
      {description && <Typography color="text.secondary">{description}</Typography>}
    </Box>
  );
}

function ProjectCard({ project, index, onExpand }) {
  return (
    <Card
      component="article"
      variant="outlined"
      className={`project-card ${project.accent}`}
      data-reveal="pop"
      style={{ "--delay": `${index * 110}ms` }}
    >
      <Box
        component="button"
        type="button"
        className="project-media project-media-button"
        onClick={() => onExpand(project)}
        aria-label={`Expand ${project.title} gameplay video`}
      >
        <video
          src={project.video}
          poster={project.image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <Box className="project-media-overlay" />
        <Box className="project-type">
          {project.icon}
          <Typography>{project.type}</Typography>
        </Box>
        <Box className="project-expand">
          <OpenInFullRoundedIcon />
          <Typography>Expand preview</Typography>
        </Box>
      </Box>

      <CardContent className="project-content">
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
          <Typography variant="h3" component="h3">{project.title}</Typography>
          <Box className="project-status">{project.status}</Box>
        </Stack>
        <Typography color="text.secondary">{project.description}</Typography>
        <Typography variant="body2">{project.details}</Typography>
        <Box className="project-tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </Box>
        {project.href && (
          <ExternalButton href={project.href} variant="contained" className="project-game-link">
            Try my game
          </ExternalButton>
        )}
      </CardContent>
    </Card>
  );
}

function SocialCard({ eyebrow, name, children, onClick, href }) {
  const content = (
    <>
      <Box>
        <Typography className="social-eyebrow">{eyebrow}</Typography>
        <Typography fontWeight={800}>{name}</Typography>
      </Box>
      {children || <ArrowOutwardRoundedIcon />}
    </>
  );

  if (href) {
    return (
      <Link className="social-card" href={href} target="_blank" rel="noreferrer" underline="none">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className="social-card" onClick={onClick}>
      {content}
    </button>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.13, rootMargin: "-2% 0px -8% 0px" },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    const sectionElements = SECTION_LINKS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { threshold: 0.01, rootMargin: "-46% 0px -46% 0px" },
    );

    sectionElements.forEach((element) => sectionObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
    } catch {
      const input = document.createElement("input");
      input.value = DISCORD_USERNAME;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
  };

  return (
    <Box className="site-shell">
      <Box className="ambient-orb orb-one" />
      <Box className="ambient-orb orb-two" />
      <Box className="ambient-orb orb-three" />

      <AppBar position="sticky" elevation={0} color="transparent">
        <Toolbar>
          <Container maxWidth="xl" className="nav-inner">
            <Link href="#top" underline="none" color="inherit" className="brand">
              <Box className="brand-mark">M</Box>
              <Typography fontWeight={850}>MAPLESALT</Typography>
            </Link>

            <Stack component="nav" direction="row" spacing={0.5} className="desktop-nav" aria-label="Main navigation">
              <Button href="#top" color="inherit">Home</Button>
              <Button href="#projects" color="inherit">Scripts</Button>
              <Button href="#standards" color="inherit">Process</Button>
              <Button href="#about" color="inherit">About</Button>
              <Button href="#contact" color="inherit">Contact</Button>
            </Stack>

            <Button href="#contact" variant="outlined" className="nav-cta">
              Let&apos;s build
            </Button>
          </Container>
        </Toolbar>
      </AppBar>

      <Box component="main">
        <Container maxWidth="xl" className="hero" id="top">
          <Box className="hero-copy" data-reveal="left">
            <Box className="hero-status">
              <span className="status-pulse" />
              <Typography>Available for hire</Typography>
            </Box>

            <Typography variant="h1">
              If you want it done right, <Box component="span" className="accent-text">hire Maplesalt.</Box>
            </Typography>

            <Typography className="hero-role">Roblox scripter <BoltRoundedIcon /></Typography>

            <Typography className="hero-description" color="text.secondary">
              10+ years scripting. 16 years around the engine. I build responsive, scalable, and maintainable Roblox scripts with architecture that survives past the prototype.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.4} className="hero-actions">
              <Button href="#projects" variant="contained" endIcon={<ArrowOutwardRoundedIcon />}>See the scripts</Button>
              <ExternalButton href={GAME_URL}>Try my game</ExternalButton>
              <ExternalButton href={ROBLOX_URL}>View on Roblox</ExternalButton>
              <Button href="#contact" variant="outlined">Contact me</Button>
            </Stack>
          </Box>

          <Box className="hero-stage code-window" data-reveal="pop" style={{ "--delay": "120ms" }}>
            <Box className="code-window-header">
              <Stack direction="row" spacing={0.8} className="code-window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </Stack>
              <Typography>CombatController.luau</Typography>
              <TerminalRoundedIcon />
            </Box>

            <Box className="code-window-body">
              <Box className="code-window-gutter" aria-hidden="true">
                {Array.from({ length: 18 }, (_, index) => <span key={index}>{index + 1}</span>)}
              </Box>
              <Box component="pre" className="code-window-code">
                <code>
                  <span className="code-purple">local</span> Combat = {"{}"}{"\n"}
                  Combat.<span className="code-blue">__index</span> = Combat{"\n\n"}
                  <span className="code-purple">function</span> Combat.<span className="code-blue">new</span>(character, world){"\n"}
                  {"  "}<span className="code-purple">local</span> self = setmetatable({"{}"}, Combat){"\n"}
                  {"  "}self.character = character{"\n"}
                  {"  "}self.world = world{"\n"}
                  {"  "}self.state = <span className="code-green">"Ready"</span>{"\n"}
                  {"  "}self.targets = world:<span className="code-blue">query</span>(Targetable){"\n"}
                  {"  "}<span className="code-purple">return</span> self{"\n"}
                  <span className="code-purple">end</span>{"\n\n"}
                  <span className="code-purple">function</span> Combat:<span className="code-blue">attack</span>(target){"\n"}
                  {"  "}<span className="code-purple">if not</span> self:<span className="code-blue">canAttack</span>(target) <span className="code-purple">then return end</span>{"\n"}
                  {"  "}self.state = <span className="code-green">"Windup"</span>{"\n"}
                  {"  "}self:<span className="code-blue">scheduleHit</span>(target){"\n"}
                  <span className="code-purple">end</span>{"\n\n"}
                  <span className="code-purple">return</span> Combat
                </code>
              </Box>
            </Box>

            <Box className="code-window-footer">
              <Box><span className="status-dot" /> <Typography>Build successful</Typography></Box>
              <Box><Typography>Jecs · OOP · Modules</Typography><Typography>Luau</Typography></Box>
            </Box>
          </Box>
        </Container>

        <Container maxWidth="xl" className="stats-wrap">
          <Box className="stats-grid">
            {stats.map((stat, index) => (
              <Box
                key={stat.label}
                className={`stat-card tone-${stat.tone}`}
                data-reveal="pop"
                style={{ "--delay": `${index * 90}ms` }}
              >
                <Box className="stat-icon"><CodeRoundedIcon /></Box>
                <Box>
                  <Typography className="stat-value">{stat.value}</Typography>
                  <Typography className="stat-label">{stat.label}</Typography>
                  <Typography variant="body2" color="text.secondary">{stat.detail}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>

        <Box component="section" id="projects" className="page-section color-section projects-section">
          <Container maxWidth="xl">
            <SectionHeading
              eyebrow="Selected scripts"
              title="Scripts built to become foundations."
              description="Each project is treated as a connected experience: player input, state, timing, feedback, networking, and future expansion all have to agree."
            />
            <Box className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onExpand={setExpandedProject}
                />
              ))}
            </Box>
          </Container>
        </Box>

        <Box component="section" id="standards" className="page-section color-section standards-section">
          <Container maxWidth="xl">
            <Box className="process-layout">
              <Box>
                <SectionHeading
                  eyebrow="My process"
                  title="I do not just write code. I build experiences."
                  description="The script has to be clean. The mechanic also has to feel good. I treat both as part of the same job."
                />
                <Box className="standards-grid">
                  {standards.map((item, index) => (
                    <Card
                      key={item.title}
                      variant="outlined"
                      className="standard-card"
                      data-reveal="pop"
                      style={{ "--delay": `${index * 85}ms` }}
                    >
                      <Box className="standard-icon">{item.icon}</Box>
                      <Typography className="standard-step">{item.step}</Typography>
                      <Typography variant="h3">{item.title}</Typography>
                      <Typography color="text.secondary">{item.copy}</Typography>
                    </Card>
                  ))}
                </Box>
              </Box>

              <Box className="process-poster" data-reveal="right" style={{ "--delay": "130ms" }}>
                <img src={asset("8-cell-simple.gif")} alt="Animated eight-cell demonstration for the development process" loading="lazy" />
                <Box className="process-poster-copy">
                  <Typography>I don&apos;t just write code.</Typography>
                  <Typography>I build <span>experiences.</span></Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box component="section" id="about" className="page-section color-section about-section">
          <Container maxWidth="xl">
            <Card variant="outlined" className="about-card">
              <Box className="about-visual" data-reveal="left">
                <img src={asset("Screenshot_128.png")} alt="Roblox development screenshot representing Maplesalt's years with the engine" loading="lazy" />
                <Box className="about-visual-badge">
                  <GamepadRoundedIcon />
                  <Box>
                    <Typography>Since 2010</Typography>
                    <Typography>Building since 2012</Typography>
                  </Box>
                </Box>
              </Box>

              <CardContent className="about-content">
                <Box className="about-heading" data-reveal="right">
                  <Typography className="eyebrow">About Maplesalt</Typography>
                  <Typography variant="h2">Sixteen years around the engine changes how you see Roblox.</Typography>
                </Box>

                <Box className="about-copy" data-reveal="right" style={{ "--delay": "110ms" }}>
                  <Typography color="text.secondary">
                    I joined Roblox in 2010 and started building games in 2012. That history gives me a practical understanding of what makes Roblox mechanics feel native, what players expect, and where scripts usually become fragile.
                  </Typography>
                  <Typography color="text.secondary">
                    I have spent 10+ years scripting combat, movement, cameras, progression, UI behavior, and multiplayer boundaries. I primarily organize code with module architecture and object-oriented patterns, using ECS and Jecs for data-driven gameplay.
                  </Typography>

                  <Box className="about-tags" aria-label="Technical skills">
                    {skills.map((skill) => (
                      <Box component="span" className="skill-pill" key={skill}>{skill}</Box>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Box>

        <Container maxWidth="xl" className="contact-wrap" id="contact">
          <Box className="contact-card" data-reveal="pop">
            <Box className="contact-copy">
              <Typography className="eyebrow">Let&apos;s build something great</Typography>
              <Typography variant="h2">Bring me the mechanic. I&apos;ll make it worth playing.</Typography>
              <Typography color="text.secondary">
                Need a new gameplay script, a cleaner architecture, or a prototype rescued from spaghetti code? Let&apos;s turn it into something responsive, maintainable, and fun.
              </Typography>
              <Button href="#projects" variant="contained" endIcon={<RocketLaunchRoundedIcon />}>Let&apos;s work together</Button>
            </Box>

            <Box className="social-grid">
              <SocialCard eyebrow="Play my game" name="CLICK THE COOKIES" href={GAME_URL} />
              <SocialCard eyebrow="Roblox profile" name="rainyjimmy123" href={ROBLOX_URL} />
              <SocialCard eyebrow="X / Twitter" name="@Carmackdisciple" href={X_URL} />
              <SocialCard eyebrow="Discord" name="maplesalt" onClick={copyDiscord}>
                <ContentCopyRoundedIcon />
              </SocialCard>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="footer">
        <Container maxWidth="xl">
          <Divider />
          <Box className="footer-inner">
            <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} Maplesalt</Typography>
            <Stack direction="row" spacing={2}>
              <Link href={GAME_URL} target="_blank" rel="noreferrer">Play my game</Link>
              <Link href={ROBLOX_URL} target="_blank" rel="noreferrer">Roblox</Link>
              <Link href={X_URL} target="_blank" rel="noreferrer">X</Link>
              <Link component="button" onClick={copyDiscord}>Discord</Link>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box component="nav" className="section-rail" aria-label="Jump to page section">
        {SECTION_LINKS.map(({ id, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`section-rail-link ${activeSection === id ? "is-active" : ""}`}
            aria-label={label}
            aria-current={activeSection === id ? "location" : undefined}
            title={label}
            underline="none"
          >
            <span />
          </Link>
        ))}
      </Box>

      <Dialog
        open={Boolean(expandedProject)}
        onClose={() => setExpandedProject(null)}
        maxWidth="lg"
        fullWidth
        className="video-dialog"
        PaperProps={{ className: "video-dialog-paper" }}
      >
        {expandedProject && (
          <>
            <Box className="video-dialog-header">
              <Box>
                <Typography className="eyebrow">Gameplay preview</Typography>
                <Typography variant="h3">{expandedProject.title}</Typography>
              </Box>
              <IconButton
                onClick={() => setExpandedProject(null)}
                aria-label="Close expanded video"
                className="video-dialog-close"
              >
                <CloseRoundedIcon />
              </IconButton>
            </Box>
            <Box className="video-dialog-player">
              <video
                key={expandedProject.video}
                src={expandedProject.video}
                poster={expandedProject.image}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </Box>
          </>
        )}
      </Dialog>

      <Snackbar open={copied} autoHideDuration={2200} onClose={() => setCopied(false)} message="Discord username copied: maplesalt" />
    </Box>
  );
}
