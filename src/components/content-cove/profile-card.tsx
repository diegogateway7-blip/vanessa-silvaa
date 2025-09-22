import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle } from 'lucide-react';

export function ProfileCard() {
  return (
    <div>
      <div className="relative h-48 md:h-64 w-full">
        <Image
          src="https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756582955821-pr96nu-323.jpg"
          alt="Cover image for Vanessa Silva"
          data-ai-hint="woman posing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-6 translate-y-1/2">
          <Avatar className="h-28 w-28 border-4 border-card">
            <AvatarImage src="https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756582936279-wce3jl-F6hQiMLWAAAYswZ.jpg" data-ai-hint="woman portrait" alt="Vanessa Silva" />
            <AvatarFallback>VS</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="pt-16 px-6 pb-6">
        <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold font-headline">Vanessa Silva Premium</h1>
            <CheckCircle className="h-6 w-6 text-blue-500 fill-current" />
        </div>
        <p className="text-muted-foreground">@vanessasilva</p>
        <p className="mt-2 text-foreground/80">Safadinha gostosa 🔥 Conteúdo exclusivo todos os dias ✨</p>
      </div>
    </div>
  );
}
