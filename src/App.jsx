import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";import { Button } from "@/components/ui/button";
function App() {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center gap-4">
    <h1 className="text-4xl font-bold">
      AI Study Assistant 🚀
    </h1>

    <Button>
      Start Learning 🚀
    </Button>

    <SignedOut>
      <div className="flex gap-4">
        <SignInButton />
        <SignUpButton />
      </div>
    </SignedOut>

    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
  );
}

export default App;