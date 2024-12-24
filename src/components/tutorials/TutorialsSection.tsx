import React, { useState } from 'react';
import { TutorialCard } from './TutorialCard';
import { Tutorial } from '../../types';

const tutorials: Tutorial[] = [
  {
    id: 'smart-tv',
    title: 'Smart TV Setup',
    description: 'Set up IPTV on your Smart TV in minutes',
    deviceType: 'tv',
    videoUrl: 'https://example.com/smart-tv-tutorial',
    steps: [
      'Download the IPTV app from your TV\'s app store',
      'Launch the app and select "Login"',
      'Enter your subscription credentials',
      'Choose your favorite channels and enjoy!'
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Device Setup',
    description: 'Watch on your smartphone or tablet',
    deviceType: 'mobile',
    steps: [
      'Install our mobile app from the App Store/Play Store',
      'Open the app and log in with your account',
      'Allow necessary permissions for optimal playback',
      'Start streaming your favorite content'
    ]
  },
  {
    id: 'pc-mac',
    title: 'PC/Mac Setup',
    description: 'Stream on your computer',
    deviceType: 'pc',
    videoUrl: 'https://example.com/pc-tutorial',
    steps: [
      'Download our desktop application',
      'Install and launch the application',
      'Enter your login credentials',
      'Select content and begin watching'
    ]
  }
];

export function TutorialsSection() {
  const [selectedDevice, setSelectedDevice] = useState<string>('all');

  const filteredTutorials = selectedDevice === 'all'
    ? tutorials
    : tutorials.filter(tutorial => tutorial.deviceType === selectedDevice);

  return (
    <section id="tutorials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Setup Guides
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Quick and easy installation guides for all your devices
          </p>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            {['all', 'tv', 'mobile', 'pc'].map((device) => (
              <button
                key={device}
                onClick={() => setSelectedDevice(device)}
                className={`px-4 py-2 text-sm font-medium ${
                  selectedDevice === device
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } ${
                  device === 'all' ? 'rounded-l-md' : ''
                } ${
                  device === 'pc' ? 'rounded-r-md' : ''
                } border border-gray-300`}
              >
                {device.charAt(0).toUpperCase() + device.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </div>
    </section>
  );
}