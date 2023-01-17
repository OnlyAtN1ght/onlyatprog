interface CounterProps {
  start: number;
}

export default function Navbar(props: CounterProps) {
  return (
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <a href="/" class="text-white font-medium">
          Home
        </a>
        <a href="/projects" class="text-white font-medium">
          Projects
        </a>
      </div>
    </nav>
  );
};
