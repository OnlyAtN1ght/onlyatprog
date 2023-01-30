import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import Navbar from "../../islands/Navbar.tsx"

interface Data {
  projects: string[];
}

export const handler: Handlers<Data | null> = {
  async GET(req, ctx) {

    const projects = [
      {
        name: "Lol Trackeur",
        description: "Lol trackeur ",
        url: "https://loltracker.onlyatprog.fr"
      },
      {
        name: "Project 2",
        description: "Another sample project",
        url: "/project2"
      }
    ];


    const resp = await ctx.render({ projects });
    return resp;
  },
};

export default function Home({ data }: PageProps<Data | null>) {
  const { projects } = data;
  return (
    <>
      <Head>
        <title>Only At Prog</title>
      </Head>
      <body class="bg-gray-900">
        <Navbar>
        </Navbar>
        <div class="container mx-auto px-4 mt-8">
          <h1 class="text-3xl font-medium mb-4 text-white">List of Projects</h1>
          <ul>
            {projects.map((project) => (
              <li class="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                <h2 class="text-lg font-medium mb-2 text-white">{project.name}</h2>
                <p class="text-gray-400 mb-2">{project.description}</p>
                <a href={project.url} class="text-blue-500 hover:underline">
                  View project
                </a>
              </li>
            ))}
          </ul>
        </div>
      
      </body>
    </>
  );
}
