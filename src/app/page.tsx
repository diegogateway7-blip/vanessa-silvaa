import { ProfileCard } from '@/components/content-cove/profile-card';
import { ExclusiveContent } from '@/components/content-cove/exclusive-content';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { ProfileHeader } from '@/components/content-cove/profile-header';

export default function Home() {
  return (
    <div className="bg-card min-h-screen font-body">
      <ProfileHeader />
      <main className="container mx-auto max-w-4xl px-0 sm:px-4">
        <ProfileCard />
        <div className="px-4">
          <ExclusiveContent />
        </div>
      </main>
      <footer className="py-8">
        <div className="container mx-auto max-w-4xl px-4 flex justify-center">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold">
              <Send className="mr-2 h-5 w-5" />
              Grupo Vip Telegram
            </Button>
          </a>
        </div>
      </footer>
    </div>
  );
}
