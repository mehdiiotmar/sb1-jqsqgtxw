import React from 'react';
import { Icon } from 'lucide-react';

interface CategoryBadgeProps {
  name: string;
  icon: Icon;
  count: number;
}

export function CategoryBadge({ name, icon: Icon, count }: CategoryBadgeProps) {
  return (
    <div className="group cursor-pointer">
      <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="p-3 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
          <Icon className="h-8 w-8 text-indigo-600" />
        </div>
        <h3 className="mt-4 font-semibold text-gray-900">{name}</h3>
        <span className="mt-1 text-sm text-gray-500">{count} products</span>
      </div>
    </div>
  );
}