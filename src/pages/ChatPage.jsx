import Navbar from "@/components/common/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/common/Footer";
function ChatPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-2">Chat With Notes 💬</h1>

        <p className="text-gray-600 mb-8">
          Ask questions from your uploaded notes.
        </p>
        <Card className="h-[500px] flex flex-col">
          <CardContent className="flex-1 p-6 overflow-y-auto">
            <div className="mb-4">
              <div className="bg-slate-200 p-3 rounded-lg inline-block">
                Explain Binary Search.
              </div>
            </div>

            <div className="text-right">
              <div className="bg-blue-500 text-white p-3 rounded-lg inline-block">
                Binary Search is an efficient searching algorithm...
              </div>
            </div>
          </CardContent>
          <div className="border-t p-4 flex gap-3">
            <Input placeholder="Ask something about your notes..." />

            <Button>Send</Button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
export default ChatPage;
