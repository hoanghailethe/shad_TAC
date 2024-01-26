import React from "react";
import { Card,CardHeader } from "@/components/ui/card";
import { RiH6 } from "react-icons/ri";

interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
}

export function StatsCard({ icon: Icon, count, title }: StatsCardProps) {
  return (
    <Card className="items-center">
       <CardHeader>
        <Icon className="h-7 w-7 text-gray-900" />
        <h1 color="blue-gray" className="mb-2 mt-4 text-5xl">
          {count}
        </h1>
        <h6 className="mb-2 font-normal text-blue-gray-500">
          {title}
        </h6>
       </CardHeader>
    </Card>
  );
}

export default StatsCard;
