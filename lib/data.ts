import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'danesvara2002@gmail.com',

    emailSubject: "Vamos colaborar em um projeto",
    emailBody: 'Olá Pedro, estou entrando em contato com você porque...',

    upworkProfile: 'https://www.linkedin.com/in/pedro-henrique-d-m-santos/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/PedroDanesvara' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/pedro-henrique-d-m-santos/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'React Native',
            icon: '/logo/react-native.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'shadcn',
            icon: '/logo/shadcn-ui.png',
        },
        {
            name: 'Material UI',
            icon: '/logo/material-ui.png',
        },
        {
            name: 'Zod',
            icon: '/logo/zod.png',
        },
    ],
    backend: [
        {
            name: 'Django',
            icon: '/logo/django.png',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    Testes: [
        {
            name: 'Jest',
            icon: '/logo/jest.png',
        },
        {
            name: 'Cypress',
            icon: '/logo/cypress.svg',
        },
        {
            name: 'Unittest',
            icon: '/logo/unittest.webp',
        },
        {
            name: 'Pytest',
            icon: '/logo/pytest.png',
        },
    ],
    Ferramentas: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.webp',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Stelar Pay',
        slug: 'stelar-pay',
        techStack: [
            'React',
            'React Native',
            'Django Rest Framework',
            'Django',
            'MySQL',
            'Zod',
            'Zustand',
            'Cypress',
            'Pytest',
            'Redux',
            'Tailwind CSS', 
            'Api Integration',
            'AWS',
            'Docker',
            'Git',
        ],
        thumbnail: '/projects/images/stelar-pay-1.jpeg',
        longThumbnail: '/projects/images/stelar-pay-1.jpeg',
        images: [
            '/projects/images/stelar-pay-1.jpeg',
        ],
        liveUrl: 'https://app.stelarpaycheckout.com/',
        year: 2025,
        description: `Stelar Pay é uma plataforma de geração de checkout transparente com integração com Pix, Boleto e Cartão de Crédito.`,
        role: `Atuei como Tech Lead, liderando a construção de uma plataforma de geração de checkout transparente e coordenando um equipe de desenvolvimento. <br><br>
        Minhas responsabilidades incluíram:<br>

        <ul>
            <li>Arquitetura e Stack Tecnológica: Desenhei a arquitetura do sistema e defini a stack de tecnologias, utilizando Django para o backend, React com Next.js para o frontend e React Native para o aplicativo mobile.</li>
            <li>Desenvolvimento Full Stack: Participei ativamente do desenvolvimento nas frentes de frontend, backend e mobile, garantindo a integração e performance das aplicações.</li>
            <li>Integração Contínua e Deploy (CI/CD): Implementei pipelines de CI/CD com testes automatizados utilizando UnitTest para testes unitários e Cypress para testes end-to-end (E2E), além de configurar deploys automáticos para ambientes de staging e produção.</li>
            <li>Revisão de Código com IA: Estabeleci processos de code review assistidos por ferramentas de Inteligência Artificial, elevando a qualidade e consistência do código.</li>
            <li>DevOps e Infraestrutura: Gerenciei servidores e recursos na plataforma Heroku, otimizando a infraestrutura em nuvem para ambientes de staging e produção.</li>
            <li>Controle de Versão: Utilizei o GitHub para versionamento de código, facilitando a colaboração e o controle de mudanças.</li>
        </ul>
        
        `,
    },
    // {
    //     title: 'AgileGo',
    //     slug: 'agilego',
    //     techStack: [
    //         'Next.js',
    //         'MySQL',
    //         'Material UI',
    //         'Django Rest Framework',
    //     ],
    //     thumbnail: '/projects/thumbnail/resume-roaster.jpg',
    //     longThumbnail: '/projects/long/resume-roaster.jpg',
    //     images: [
    //         '/projects/images/resume-roaster-1.png',
    //         '/projects/images/resume-roaster-2.png',
    //         '/projects/images/resume-roaster-3.png',
    //     ],
    //     liveUrl: 'https://resume-roaster.vercel.app/',
    //     year: 2023,
    //     description:
    //         'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
    //     role: `As the sole developer and business owner, I:<br/>
    //     - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
    //     - Integrated GPT-4 for AI-driven feedback and insights.<br/>
    //     - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    // },
    // {
    //     title: 'Sintática',
    //     slug: 'sintatica',
    //     techStack: [
    //         'React.js',
    //         'Redux',
    //         'Tailwind CSS',
    //         'React i18n',
    //         'Framer Motion',
    //     ],
    //     thumbnail: '/projects/thumbnail/property-pro.jpg',
    //     longThumbnail: '/projects/long/property-pro.jpg',
    //     images: [
    //         '/projects/images/property-pro-1.png',
    //         '/projects/images/property-pro-2.png',
    //         '/projects/images/property-pro-3.png',
    //     ],
    //     liveUrl: 'https://demo.propertypro.siphertech.com/',
    //     year: 2023,
    //     description:
    //         'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
    //     role: `As the frontend developer, I:<br/>
    //     - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
    //     - Integrated dynamic state management for efficient handling of property data.<br/>
    //     - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
    //     - Enhanced user interaction with animations and transitions using Framer Motion.`,
    // },
    // {
    //     title: 'NestJS API Boilerplate',
    //     slug: 'nestjs-api-boilerplate',
    //     liveUrl: 'https://github.com/PedroDanesvara/boilerplate_nestjs',
    //     year: 2025,
    //     description: `
    //   A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>
      
    //   Key Features:<br/>
    //   <ul>
    //     <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
    //     <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
    //     <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
    //     <li>📱 Fully Responsive: Optimized for all device sizes</li>
    //     <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
    //   </ul><br/>
      
    //   Technical Highlights:
    //   <ul>
    //     <li>Implemented complex slider synchronization logic using Swiper.js</li>
    //     <li>Customized Payload CMS admin panel for intuitive content management</li>
    //     <li>Developed reusable UI components with shadcn for design consistency</li>
    //     <li>Configured efficient data fetching strategies in Next.js</li>
    //   </ul>
    //   `,
    //     role: `
    //   Full-Stack Developer <br/>
    //   Owned the entire development lifecycle:
    //   <ul>
    //     <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
    //     <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
    //     <li>🔄 State Management: Implemented client-side data fetching and caching</li>
    //     <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
    //     <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
    //     <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
    //   </ul>
    //   `,
    //     techStack: [
    //         'Nest.js',
    //         'Prisma',
    //         'Jest',
    //         'JWT',
    //         'PostgreSQL',
    //         'Swagger',
    //         'Docker',
    //         'Git',
    //     ],
    //     thumbnail: '/projects/thumbnail/mti-electronics.webp',
    //     longThumbnail: '/projects/long/mti-electronics.webp',
    //     images: [
    //         '/projects/images/mti-electronics-1.webp',
    //         '/projects/images/mti-electronics-2.webp',
    //     ],
    // },
    // {
    //     title: 'Sistema ERP',
    //     slug: 'sistema-erp',
    //     liveUrl: '#',
    //     year: 2025,
    //     description: `
    //   A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>
      
    //   Key Features:<br/>
    //   <ul>
    //     <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
    //     <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
    //     <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
    //     <li>📱 Fully Responsive: Optimized for all device sizes</li>
    //     <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
    //   </ul><br/>
      
    //   Technical Highlights:
    //   <ul>
    //     <li>Implemented complex slider synchronization logic using Swiper.js</li>
    //     <li>Customized Payload CMS admin panel for intuitive content management</li>
    //     <li>Developed reusable UI components with shadcn for design consistency</li>
    //     <li>Configured efficient data fetching strategies in Next.js</li>
    //   </ul>
    //   `,
    //     role: `
    //   Full-Stack Developer <br/>
    //   Owned the entire development lifecycle:
    //   <ul>
    //     <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
    //     <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
    //     <li>🔄 State Management: Implemented client-side data fetching and caching</li>
    //     <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
    //     <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
    //     <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
    //   </ul>
    //   `,
    //     techStack: [
    //         'Nest.js',
    //         'Prisma',
    //         'JWT',
    //         'Swagger',
    //         'Docker',
    //         'Git',
    //     ],
    //     thumbnail: '/projects/thumbnail/mti-electronics.webp',
    //     longThumbnail: '/projects/long/mti-electronics.webp',
    //     images: [
    //         '/projects/images/mti-electronics-1.webp',
    //         '/projects/images/mti-electronics-2.webp',
    //     ],
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Tech Lead',
        company: 'Stelar Pay',
        duration: 'Jan 2025 - Present',
    },
    {
        title: 'Desenvolvedor Full Stack',
        company: 'MULTTI - Tecnologia e Integrações',
        duration: 'Set 2024 - Present',
    },
    {
        title: 'Desenvolvedor Full Stack',
        company: 'Sintática AI',
        duration: 'Jul 2023 - Mar 2025',
    },
    {
        title: 'Diretor Presidente',
        company: 'Bits Jr',
        duration: 'Fev 2023 - Fev 2024',
    },
    {
        title: 'Vice-presidente e Diretor de Gente Gestão e Estratégia',
        company: 'Bits Jr',
        duration: 'Ago 2022 - Fev 2023',
    },
];
