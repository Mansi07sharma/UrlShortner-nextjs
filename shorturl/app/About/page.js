import Link from 'next/link';
import React from 'react';

function About() {
  return (
    <div className="bg-purple-200 p-5 h-[90vh] flex flex-col justify-center items-center">
      <header className="text-4xl font-bold text-center p-5 underline text-shadow-lg text-shadow-purple-400">
        About Us
      </header>
      <img
        className="w-32 h-32 my-5"
        src="https://images.seeklogo.com/logo-png/28/2/people-logo-png_seeklogo-282482.png"
        alt="Teamwork Logo"
      />
      <section className="text-center text-xl space-y-4 max-w-3xl">
        <p>
          Welcome to our <strong>URL Shortener</strong> application! We are
          committed to providing a simple, efficient, and reliable way to
          shorten long URLs.
        </p>
        <p>
          Our service allows you to transform lengthy and cumbersome URLs into
          short, manageable links. These links are perfect for sharing on
          social media, emails, or any platform where brevity is key.
        </p>
        <p>
          At the heart of our mission is a focus on user experience and
          security. We ensure that your links are not only short but also safe
          and trustworthy.
        </p>
        <p>
          Whether you're a casual user or a business professional, our tool is
          designed to meet your needs. We aim to make link management as
          seamless and intuitive as possible.
        </p>
        <p>
          Thank you for choosing our URL Shortener. We hope you find our
          service helpful, efficient, and easy to use!
        </p>
      </section>
      <div className="flex justify-center items-center gap-5 mt-8">
        <Link
          href="/trynow"
          className="text-white text-lg font-bold bg-purple-400 border-2 border-purple-500 rounded-2xl px-6 py-3 hover:bg-purple-500 transition"
        >
          Try Now
        </Link>
        <Link
          href="https://www.github.com/Mansi07sharma"
          className="text-white text-lg font-bold bg-purple-400 border-2 border-purple-500 rounded-2xl px-6 py-3 hover:bg-purple-500 transition"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}

export default About;
