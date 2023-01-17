import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx"



export const handler: Handlers = {
  async GET(req, ctx) {


    const resp = await ctx.render({  });
    return resp;
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Only At Prog</title>
      </Head>
      <body class="bg-gray-900">
        <Navbar>
        </Navbar>
        <div class="container mx-auto px-4 mt-8">
          <div class="flex justify-center items-center h-screen">
            <a href="/projects" class="bg-gray-500 text-white p-12 rounded-lg shadow-md text-5xl">
              View Projects
            </a>
          </div>  
        </div>
      </body>
    </>
  );
}
