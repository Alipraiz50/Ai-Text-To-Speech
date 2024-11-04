/* eslint-disable */

import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen bg-black text-white p-4 md:p-8">
        <section className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
            About Our AI Text-to-Speech Converter
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Our AI Text-to-Speech Converter brings your words to life, transforming text into realistic, expressive speech. With state-of-the-art AI technology, we enable seamless, lifelike audio experiences for various applications.
          </p>
        </section>

        <section className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left mt-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-500">Seamless Integration</h2>
            <p className="text-gray-300 mt-4">
              Effortlessly incorporate our Text-to-Speech Converter into your projects. It is optimized for flexibility and scalability, making it suitable for all types of applications.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-500">Human-like Voice Quality</h2>
            <p className="text-gray-300 mt-4">
              Experience top-quality, natural-sounding voices powered by advanced machine learning models, designed to deliver authentic audio output.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-500">Customizable Voice Styles</h2>
            <p className="text-gray-300 mt-4">
              Choose from a range of voices and tones, or even adjust pitch and speed to align perfectly with your project's needs.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-500">Powered by AI Innovation</h2>
            <p className="text-gray-300 mt-4">
              Our solution is built on cutting-edge AI technology, ensuring high accuracy, seamless performance, and continuous improvements over time.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
