"use client";

// Skills component with individual technology icons

interface Skill {
  name: string;
  percentage: number;
  category: string;
}

interface SkillsProps {
  data: Skill[];
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-24 bg-muted/20 dark:bg-transparent">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center shrink-0">
            My Skills
          </h2>
          <div className="h-px bg-border w-full max-w-sm hidden sm:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-5 rounded-xl border border-border/40 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
              style={{
                transitionDelay: `${index * 50}ms`,
                fontFamily: "var(--font-fira), monospace",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-border/40 group-hover:border-primary/40 group-hover:text-primary transition-all duration-300">
                    <SkillIcon name={skill.name} />
                  </div>
                  <span className="font-mono text-sm font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-secondary">
                  {skill.percentage}%
                </span>
              </div>

              <div className="h-1.5 w-full bg-muted/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary flex items-center justify-end pr-1"
                  style={{
                    width: `${skill.percentage}%`,
                    animation: `grow-width 1.5s ease-out forwards ${index * 0.1}s`,
                  }}
                >
                  <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ name }: { name: string }) {
  const n = name.toLowerCase();

  if (n.includes("c++"))
    return (
      <svg className="w-6 h-6" viewBox="0 0 128 128">
        <path
          fill="currentColor"
          d="M123.018 73.181a4.953 4.953 0 0 0 .151-1.025V55.844a4.953 4.953 0 0 0-.151-1.025h-10.957a4.953 4.953 0 0 0-1.025-.151H93.181a4.953 4.953 0 0 0-1.025.151v10.957a4.953 4.953 0 0 0 .151 1.025v17.337a4.953 4.953 0 0 0-.151 1.025h10.957a4.953 4.953 0 0 0 1.025.151h17.854a4.953 4.953 0 0 0 1.025-.151zm-40.354 0a4.953 4.953 0 0 0 .151-1.025V55.844a4.953 4.953 0 0 0-.151-1.025H71.707a4.953 4.953 0 0 0-1.025-.151H53.854a4.953 4.953 0 0 0-1.025.151v10.957a4.953 4.953 0 0 0 .151 1.025v17.337a4.953 4.953 0 0 0-.151 1.025h10.957a4.953 4.953 0 0 0 1.025.151h17.854a4.953 4.953 0 0 0 1.025-.151z"
        />
        <path
          fill="currentColor"
          d="M64 0L10.3 19.33L10.3 45.42C10.3 78.47 32.93 109.11 64 128C95.07 109.11 117.7 78.47 117.7 45.42L117.7 19.33L64 0ZM107.4 45.42C107.4 73.23 88.38 99.04 64 114.93C39.62 99.04 20.6 73.23 20.6 45.42V25.32L64 9.69L107.4 25.32V45.42Z"
        />
      </svg>
    );
  if (n === "c")
    return (
      <svg className="w-6 h-6" viewBox="0 0 128 128">
        <path
          fill="currentColor"
          d="M64 0L10.3 19.33L10.3 45.42C10.3 78.47 32.93 109.11 64 128C95.07 109.11 117.7 78.47 117.7 45.42L117.7 19.33L64 0ZM107.4 45.42C107.4 73.23 88.38 99.04 64 114.93C39.62 99.04 20.6 73.23 20.6 45.42V25.32L64 9.69L107.4 25.32V45.42Z"
        />
      </svg>
    );
  if (n === "java")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M2 18.5a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5c0 1.66-4.48 3-10 3s-10-1.34-10-3zM10.86 16c0 .48-.04.94-.13 1.39C11.66 17.58 13.9 18 16.5 18c2.42 0 4.54-.36 5.37-.88C22.21 16.71 21.64 16 20 16h-9.14zM16.5 1h-2l-1 1h4l-1-1zm-1 3h-2l-1 1h4l-1-1zm-.5 3h-1.5l-1 1h3.5l-1-1zM9.5 7C7.57 7 6 8.57 6 10.5S7.57 14 9.5 14s3.5-1.57 3.5-3.5S11.43 7 9.5 7zm0 5c-.83 0-1.5-.67-1.5-1.5S8.67 9 9.5 9s1.5.67 1.5 1.5S10.33 12 9.5 12z"
        />
      </svg>
    );
  if (n === "python")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86l3.45 3.45c.14.14.34.21.53.21h2c.41 0 .75-.34.75-.75v-1.5c0-.41-.34-.75-.75-.75h-.75V10h1.5c.41 0 .75-.34.75-.75V7.5c0-.41-.34-.75-.75-.75h-1.5V5.5c0-.41-.34-.75-.75-.75h-1.5c-.41 0-.75.34-.75.75V6H7.5c-.41 0-.75.34-.75.75v1.5c0 .41.34.75.75.75h1.5V10h-1.5V9.25c0-.41-.34-.75-.75-.75h-1.5c-.41 0-.75.34-.75.75V11c0 .41.34.75.75.75h2.25l.89.89L7 16.54V12h2.25v2.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-1.5c0-.41-.34-.75-.75-.75h-1.5v-1.5h1.5c.41 0 .75-.34.75-.75v-1.5c0-.41-.34-.75-.75-.75h-2.25l-.89-.89L13 7.46V12h-2.25V9.75c0-.41-.34-.75-.75-.75h-1.5c-.41 0-.75.34-.75.75V11.5c0 .41.34.75.75.75h1.5V14h-1.5V13.25c0-.41-.34-.75-.75-.75h-1.5c-.41 0-.75.34-.75.75V15h2.25l-.89.89 3.1 3.1z"
        />
      </svg>
    );
  if (n === "html")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M1.5 1.105l1.903 19.307 8.597 2.488 8.597-2.488 1.903-19.307h-21zm17.073 4.493l-.232 2.363h-9.395l.226 2.305h8.936l-.633 6.448-5.475 1.516-5.475-1.516-.367-3.737h2.361l.183 1.861 2.931.811 2.931-.811.312-3.17h-8.232l-.683-6.959h11.161l-.232 2.363z"
        />
      </svg>
    );
  if (n === "css")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M1.5 1.105l1.903 19.307 8.597 2.488 8.597-2.488 1.903-19.307h-21zm17.073 4.493l-.232 2.363h-9.395l.226 2.305h8.936l-.633 6.448-5.475 1.516-5.475-1.516-.367-3.737h2.361l.183 1.861 2.931.811 2.931-.811.312-3.17h-8.232l-.683-6.959h11.161l-.232 2.363z"
        />
      </svg>
    );
  if (n === "bootstrap")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.5-5h2.5c1.4 0 2.5-1.1 2.5-2.5S11.4 8 10 8H7.5v7zm1.5-5.5h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v-2zm0 3.5h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v-2z"
        />
      </svg>
    );
  if (n === "tailwind")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 6.5C12 4 9 2.5 6 2.5s-6 1.5-6 4 3 4 6 4 6-1.5 6-4zm0 11C12 15 9 13.5 6 13.5s-6 1.5-6 4 3 4 6 4 6-1.5 6-4zM24 6.5C24 4 21 2.5 18 2.5s-6 1.5-6 4 3 4 6 4 6-1.5 6-4zm0 11C24 15 21 13.5 18 13.5s-6 1.5-6 4 3 4 6 4 6-1.5 6-4z"
        />
      </svg>
    );
  if (n === "javascript" || n === "js")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M3 3h18v18H3V3zm11.235 13.857c.184.288.428.525.733.71.304.185.654.277 1.05.277.42 0 .762-.12 1.03-.357.26-.233.393-.564.393-.993 0-.42-.112-.743-.33-.972-.217-.228-.614-.492-1.19-.79-.623-.33-.1.085-1.173-.598-.444-.286-.777-.597-.993-.93-.217-.333-.33-.74-.33-1.22 0-.486.115-.91.345-1.272.23-.362.56-.644.98-.847.422-.204.914-.306 1.474-.306.66 0 1.213.167 1.66.5.447.333.75.8.91 1.4h-2.12c-.1-.28-.27-.474-.5-.583-.23-.11-.533-.164-.91-.164-.326 0-.612.077-.857.23-.245.153-.367.4-.367.737 0 .28.1.514.293.7.193.187.623.447 1.29.778.667.33 1.18.666 1.54 1.008.36.342.54.832.54 1.47 0 .493-.13.933-.393 1.32s-.65.69-1.162.91c-.512.22-1.103.328-1.742.328-.795 0-1.462-.18-2-.54-.537-.36-.92-.888-1.144-1.583h2.12zm-8.235-.457c.288.435.65.772 1.085 1.008.435.236.945.354 1.53.354.675 0 1.233-.138 1.673-.414s.772-.7.993-1.274h2.148c-.167.925-.568 1.643-1.2 2.155-.634.512-1.496.768-2.583.768-1.16 0-2.112-.353-2.857-1.06-.745-.705-1.117-1.727-1.117-3.064V12.1c0-.895.148-1.638.444-2.228a3.16 3.16 0 0 1 1.19-1.393c.497-.31 1.066-.465 1.706-.465 1.127 0 2.02.328 2.68.983s1.04 1.574 1.14 2.756h-2.12c-.063-.584-.247-1.01-.553-1.277-.306-.267-.714-.4-1.224-.4-.537 0-.965.174-1.28.523-.314.35-.47.884-.47 1.6V14h.016z"
        />
      </svg>
    );
  if (n === "typescript" || n === "ts")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M3 3h18v18H3V3zm8.38 11.01h-2.1l-.01-5.18H6.62v-1.7h5.83v1.7h-2.07v5.18zm4.49-.07c-.12.42-.36.75-.72.98-.36.23-.79.35-1.29.35-.61 0-1.11-.18-1.48-.54-.38-.36-.57-.86-.59-1.52h2.09c.01.27.08.45.2.56.12.11.31.22.56.22l.53-.02c.13-.01.24-.04.33-.09.09-.05.15-.12.2-.21.05-.09.07-.21.07-.36 0-.25-.09-.45-.27-.59-.18-.14-.49-.31-.92-.51-.62-.31-1.06-.61-1.3-.92-.24-.31-.36-.71-.36-1.22 0-.49.12-.91.35-1.26.23-.35.56-.61.98-.79.42-.18.91-.27 1.47-.27.66 0 1.21.17 1.66.5.45.33.75.8.91 1.4h-2.12c-.05-.28-.15-.47-.32-.58s-.42-.16-.76-.16c-.33 0-.6.08-.8.23s-.3.4-.3.74c0 .28.09.51.27.7.18.19.6.45 1.26.78.66.33 1.17.65 1.53.96.36.31.54.81.54 1.47 0 .43-.1.82-.29 1.17z"
        />
      </svg>
    );
  if (n.includes("react"))
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        />
      </svg>
    );
  if (n.includes("next"))
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15l-5-5 5-5v10z"
        />
      </svg>
    );
  if (n.includes("node"))
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2L4 7v10l8 5 8-5V7l-8-5zm6 14.5L12 19.8l-6-3.3V7.5L12 4.2l6 3.3v9z"
        />
      </svg>
    );
  if (n.includes("express"))
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2L4 7v10l8 5 8-5V7l-8-5zm6 14.5L12 19.8l-6-3.3V7.5L12 4.2l6 3.3v9z"
        />
      </svg>
    );
  if (n === "nosql" || n.includes("mongo"))
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        />
      </svg>
    );
  if (n.includes("mysql") || n.includes("sql") || n.includes("postgre"))
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        />
      </svg>
    );
  if (n.includes("prisma"))
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        />
      </svg>
    );

  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}
