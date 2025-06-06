import { Card, CardContent } from '@/components/ui/card';
import { TeamMember as TeamMemberType } from '@/lib/types';
import { useLanguage } from '@/hooks/useLanguage';

interface TeamMemberProps {
  member: TeamMemberType;
}

export function TeamMember({ member }: TeamMemberProps) {
  const { language } = useLanguage();

  return (
    <Card className="card-hover overflow-hidden">
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover"
        />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
        <p className="text-primary font-semibold mb-2">{member.position[language]}</p>
        <p className="text-gray-600 text-sm">{member.description[language]}</p>
      </CardContent>
    </Card>
  );
}
