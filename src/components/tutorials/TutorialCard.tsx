import React from 'react';
import { Play, Monitor, Smartphone, Tv } from 'lucide-react';
import { Tutorial } from '../../types';

const deviceIcons = {
  tv: Tv,
  mobile: Smartphone,
  pc: Monitor
};

interface TutorialCardProps {
  tutorial: Tutorial;
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  const DeviceIcon = deviceIcons[tutorial.deviceType as keyof typeof deviceIcons] || Monitor;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <DeviceIcon className="h-6 w-6 text-indigo-600" />
          <h3 className="text-lg font-medium text-gray-900">{tutorial.title}</h3>
        </div>
        <p className="mt-2 text-gray-600">{tutorial.description}</p>
        {tutorial.videoUrl && (
          <button className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <Play className="h-4 w-4 mr-2" />
            Watch Video Tutorial
          </button>
        )}
        <div className="mt-4">
          <h4 className="font-medium text-gray-900">Steps:</h4>
          <ol className="mt-2 space-y-2">
            {tutorial.steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6">{index + 1}.</span>
                <span className="text-gray-600">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}